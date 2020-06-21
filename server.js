// - NODE STUFF -

process.on('uncaughtException', (error)  => {
    console.log('Node Uncaught Exception: ',  error);
    process.exit(1); // exit application 
})

process.on('unhandledRejection', (error, promise) => {
    console.log(' Oh Lord! We forgot to handle a promise rejection here: ', promise);
    console.log(' The error was: ', error );
  });


//------------------------------

//---NODE MOUDLES---
const express = require('express')
const bodyParser = require("body-parser"); 
const { exec } = require("child_process"); // May change to shelljs, and keep this just in case if it works after change to shelljs.
//-------------------

// - VARIABLES -
const app = express()
const port = 3000 // Changeable Port
var originalCwd = process.cwd(); // Get the directory that the script is in.
var date = new Date();
var now = date.toISOString().replace(/T/, " ").replace(/\..+/,'');
//---------------


// - FUNCTIONS -



//------------------------------





// - EXPRESS.JS SERVER -

app.set("view engine", "ejs"); 

app.set("views", __dirname + "/htdocs"); 

app.use(bodyParser.urlencoded({ extended: false })); 

app.get("/", (req, res) => { 
    res.render("index", {script_directory:'' +originalCwd +'\\'}) 
}); 

app.get("/200", (req, res) => { 
    res.render("Success/200", {code:'200'}) 
});

app.get("/404", (req, res) => { 
    res.render("Errors/404", {errorcode:'404'}) 
}); 

app.get("/403", (req, res) => { 
    res.render("Errors/403", {errorcode:'403'}) 
}); 

app.get("/500", (req, res) => { 
    res.render("Errors/500", {errorcode:'500'}) 
}); 

//-----Found a Workaround for the failed to decode param error------

app.get('/stop/*', (req, res) => { // % will cause a express failed to decode param error.
    res.render("Errors/404");
});

app.get('/run/*', (req, res) => { //  % will cause a express failed to decode param error.
    res.render("Errors/404");
});

app.get('/forcestop/*', (req, res) => { // % will cause a express failed to decode param error.
    res.render("Errors/404");
});



//--------------------------------------------------


app.get('/forcestop', (req, res) => {

    var fullUrl = req.protocol + '://' + req.get('host') + '/run?program=';
    var fullUrl_kill = req.protocol + '://' + req.get('host') + '/stop?program=';
    var fullUrl_forcekill = req.protocol + '://' + req.get('host') + '/forcestop?program=';

    if (req.url === "/forcestop" || req.url === "/forcestop?" || req.url === "/forcestop?program" || req.url === "/forcestop?program=") {
        res.render("Errors/no_or_invaild_params", {program_example:'notepad.exe', url:'' +fullUrl +'', stopurl:'' +fullUrl_kill +'', forcekillurl:'' +fullUrl_forcekill +''})

    } else {

            //csrss.exe is a critical system process, if killed, it will bsod.
            //ntoskrnl.exe is Windows NT Kernel, a critical system process - if killed, it will bsod.
            //SYSTEM is a critical system process that windows won't let you kill, but it's added anyways.
            //svchost.exe is maybe a critical one.
            //cmd.exe is a normal process that can be killed.
        if (req.url === "/stop?program=csrss.exe" || req.url === "/stop?program=ntoskrnl.exe" || req.url === "/stop?program=winlogon.exe" || req.url === "/stop?program=wininit.exe" || req.url === "/stop?program=smss.exe" || req.url === "/stop?program=cmd.exe" || req.url === "/stop?program=svchost.exe" || req.url === "/stop?program=PUT_PROGRAM_NAME") { // Bad Basic Protection - People can bypass this.
            res.render("Errors/cannot_kill", {program:'' +req.query.program + ''})
            } else

    exec("taskkill /f /im " +req.query.program, (error, stdout, stderr) => {  //For this to work, force stopping a program requires administrator permissions.
        if (error) {
            console.log(`[` +now +`] Force Kill Error: ${error.message}`);
            res.render("Errors/500_kill_error", {output:'' +error +'\\', program:'' +req.query.program + ''})
            return;
        }
        if (stderr) {
            console.log(`[`+now +`] Program: taskkill /f /im `+req.query.program +` - stderr Output: ${stderr}`);
            res.render("Success/200_kill", {output:'' +stderr +'\\', program:'' +req.query.program + ''})
            return;
        }
    
        res.render("Success/200_kill", {output:'' +stdout +'\\', program:'' +req.query.program + ''})
        console.log("["+now +"] Forced Killed the program: " +req.query.program)
        
    })};
    });



//--------------------------------------------------


app.get('/stop', (req, res) => {

    var fullUrl = req.protocol + '://' + req.get('host') + '/run?program=';
    var fullUrl_kill = req.protocol + '://' + req.get('host') + '/stop?program=';
    var fullUrl_forcekill = req.protocol + '://' + req.get('host') + '/forcestop?program=';

    if (req.url === "/stop" || req.url === "/stop?" || req.url === "/stop?program" || req.url === "/stop?program=") {
        res.render("Errors/no_or_invaild_params", {program_example:'notepad.exe', url:'' +fullUrl +'', stopurl:'' +fullUrl_kill +'', forcekillurl:'' +fullUrl_forcekill +''})
    
    } else {

    if (req.url === "/stop?program=cmd.exe" || req.url === "/stop?program=PUT_PROGRAM_NAME") { // Bad Basic Protection - People can bypass this.
        res.render("Errors/cannot_kill", {program:'' +req.query.program + ''})

    } else
    
    exec("taskkill /im " +req.query.program, (error, stdout, stderr) => { 
        if (error) {
            console.log(`[` +now +`] Error: ${error.message}`);
            res.render("Errors/500_kill_error", {output:'' +error +'\\', program:'' +req.query.program + ''})
            return;
        }
        if (stderr) {
            console.log(`[`+now +`] Program: taskkill /im `+req.query.program +` - stderr Output: ${stderr}`);
            res.render("Success/200_kill", {output:'' +stderr +'\\', program:'' +req.query.program + ''})
            //res.render("stderr", {stderr_info:'' +stderr +'\\'})
            return;
        }
        
        res.render("Success/200_kill", {output:'' +stdout +'\\', program:'' +req.query.program + ''})
        console.log("["+now +"] Killed the program: " +req.query.program)
        //res.send(200)
        
    })};
    });



//------------------------------------------------------


app.get('/run', (req, res) => {

    var fullUrl = req.protocol + '://' + req.get('host') + '/run?program=';
    var fullUrl_kill = req.protocol + '://' + req.get('host') + '/stop?program=';
    var fullUrl_forcekill = req.protocol + '://' + req.get('host') + '/forcestop?program=';

if (req.url === "/run" || req.url === "/run?" || req.url === "/run?program" || req.url === "/run?program=") {
    res.render("Errors/no_or_invaild_params", {program_example:'notepad.exe', url:'' +fullUrl +'', stopurl:'' +fullUrl_kill +'', forcekillurl:'' +fullUrl_forcekill +''})

} else {

exec("start /B cmd.exe /C \"echo off && "  +req.query.program + "\"", (error, stdout, stderr) => {


    if (error) {
        console.log(`[` +now +`] Error: ${error.message}`);
            res.render("Errors/500_running_error", {output:'' +error +'\\', program:'' +req.query.program + ''})
        return;
    }
    if (stderr) { // I didn't realize what was this in v1.0.0 Release, and Support got added in v1.0.1 Release.
        console.log(`[`+now +`] Program: `+req.query.program +` - stderr Output: ${stderr}`);
        res.render("Success/200_running", {output:'' +stderr +'\\', program:'' +req.query.program + ''})
        return;
    }
    res.render("Success/200_running", {output:'' +stdout +'\\', program:'' +req.query.program + ''})
    console.log(" ");
    console.log("[" +now + "] Ran the program: " +req.query.program + ' and output is: ' +stdout + ' ')
    //res.send(200)
    
})};

});



//---------------------------------------------------




//Error Pages
app.get("*", (req, res) => { //This is here just in case.
    res.render("Errors/404"); //This page is in htdocs/Errors/
}); 



// This workaround has been found at https://cmsdk.com/javascript/failed-to-decode-param-in-express.html
app.use(function(err, req, res, next) { //This will or may help with Failed to decode problem.
    res.redirect('/404');
    next(err); 
  });


app.listen(port, () => 
console.log(`Listening at http://127.0.0.1:${port}`)
);
