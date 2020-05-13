//---NODE MOUDLES---
const express = require('express')
const { exec } = require("child_process"); // May change to shelljs, and keep this just in case if it works after change to shelljs.
const originalCwd = process.cwd(); // Get the directory that the script is in.
//-------------------

// - VARIABLES -
const app = express()
const port = 3000
//---------------


// - EXPRESS.JS SERVER -
app.get('/', (req, res) => {
res.send('Express.js server is up and working!');
});

app.get('/stop/*', (req, res) => { 
    console.log("")
    res.send(" ");
    
});

app.get('/run/*', (req, res) => {
    console.log("")
    res.send(" ");
    
});

app.get('/forcestop/*', (req, res) => {
    console.log("")
    res.send(" ");
    
});



//------------

app.get('/forcestop', (req, res) => {

    if (req.url === "/forcestop" || req.url === "/forcestop?" || req.url === "/forcestop?program" || req.url === "/forcestop?program=") {
    res.send("No or Invaild Params. <b></b>To force stop a program, enter in your url bar: /forcestop?program=<PROGRAM_NAME_HERE>")

    } else {

            //csrss.exe is a critical system process, if killed, it will bsod.
            //ntoskrnl.exe is Windows NT Kernel, a critical system process - if killed, it will bsod.
            //SYSTEM is a critical system process that windows won't let you kill, but it's added anyways.
            //svchost.exe is maybe a critical one.
            //cmd.exe is a normal process that can be killed.
        if (req.url === "/stop?program=csrss.exe" || req.url === "/stop?program=ntoskrnl.exe" || req.url === "/stop?program=winlogon.exe" || req.url === "/stop?program=wininit.exe" || req.url === "/stop?program=smss.exe" || req.url === "/stop?program=cmd.exe" || req.url === "/stop?program=svchost.exe" || req.url === "/stop?program=PUT_PROGRAM_NAME") { // Bad Basic Protection - People can bypass this.
            res.send("You cannot kill this process/program.")
            } else

    exec("taskkill /f /im " +req.query.program, (error, stdout, stderr) => {  //For this to work, force stopping a program requires administrator permissions.
        if (error) {
            console.log(`Error: ${error.message}`);
            res.sendStatus(500)
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            res.send(500)
            return;
        }
    
        console.log("Force stopped the program: " +req.query.program)
        res.send(200)
        
    })};
    });




app.get('/stop', (req, res) => {

    if (req.url === "/stop" || req.url === "/stop?" || req.url === "/stop?program" || req.url === "/stop?program=") {
    res.send("No or Invaild Params. <b></b>To stop a program, enter in your url bar: /stop?program=<PROGRAM_NAME_HERE>")
    
    } else {

    if (req.url === "/stop?program=cmd.exe" || req.url === "/stop?program=PUT_PROGRAM_NAME") { // Bad Basic Protection - People can bypass this.
    res.send("You cannot kill this process.")

    } else
    
    exec("taskkill /im " +req.query.program, (error, stdout, stderr) => { 
        if (error) {
            console.log(`Error: ${error.message}`);
            res.sendStatus(500)
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            res.send(500)
            return;
        }
    
        console.log("Stopped the program: " +req.query.program)
        res.send(200)
        
    })};
    });




app.get('/run', (req, res) => {

if (req.url === "/run" || req.url === "/run?" || req.url === "/run?program" || req.url === "/run?program=") {
res.send("No or Invaild Params. <b></b>To run a program, enter in your url bar: /run?program=<PROGRAM_NAME_HERE>")

} else {

exec("start " +req.query.program, (error, stdout, stderr) => {
    if (error) {
        console.log(`Error: ${error.message}`);
        res.sendStatus(500)
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        res.send(500)
        return;
    }

    console.log("Ran the program: " +req.query.program)
    res.send(200)
    
})};
});

app.listen(port, () => console.log(`Listening at http://127.0.0.1:${port}`))