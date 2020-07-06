## Express.js Program Controller

Express.js Program Controller is a node express.js server that allows you to start, stop, or restart programs remotely. I may be removing the restart programs part if it's little possible or impossible for me to do.

**NOTE:** Express.js Program Controller is getting developed by a person who doesn't have a lot of knowledge about Node and Express and EJS. The updates may probably take hours or days to do, and a lot of time of searching the web on how to do this and that.

## DISCLAIMER:

Using this program for any malicious purposes like destroying a system, hacking a website, or for a R.A.T (Remote Administrator Trojan) is **NOT ALLOWED!**

I am **NOT** responsible for any **misuse** or **damage** caused by this program if you decided to use this program for malicious purposes. You take **FULL** responsibility for any malicious actions by this program if you are using it for malicious purposes. 

## Requirements:

#### Node.js (You can download and install Node.js from [here](https://nodejs.org/en/download/ "here"))
#### Express.js
#### Body-Parser
#### EJS

##### * Use `npm install express body-parser ejs` to install the required mouldes for the server.

## How to use?
#### 1) Run the Server with `npm start`
##### - 1a) if you are editing the server, install nodemon and run the server with `npm run live`.
#### 2) On your browser, go to 127.0.0.1:3000
#### 3) To see how to run, stop, or force stop programs, go to 127.0.0.1:3000/run
##### - 3a) This may be changed to 127.0.0.1:3000/how-to in the next update or in a mini update.
#### - 4) If there are any problems, issues, or bugs, please report them in the issues selecton at this repository.

## Supported Operating Systems:

#### Windows 10
#### Windows 8.x (8 and 8.1)
#### Windows 7


Yeah, I know that Windows is only the supported operating system by Express.js Program Controller, but there will be support for linux with a edition called **Linux Edition**, a edition for linux operating systems.

## Testing:

Express.js Program Controller has been tested on Windows 7, and 10.

I don't have a virtual machine that haves 8 and 8.1. I will be getting the ISOs of the windows versions, and will be going to test Express.js Program Controller on there.

## Features:

You can see features that Express.js Program Controller haves here.

| Feature: | Description: |
| ------------ | ------------ |
| Start Program  |  This allows you to start a program by sending a request with the program name. The protection fails for starting programs because there are many ways of starting a program.|
| Stop Program  |  This allows you to stop a program by sending a request with the program name if the program is running. |
| **Force** Stop Program  |  This allows you to force stop a program by sending a request with the program name if the program is running. This requires administrator permissions. |
| Error and Success Pages |  The error pages are in htdocs/Errors/ and success pages is in htdocs/Success/, and they can be customized. |
| Very Basic Process/Program Protection (**Bad**)  |  This prevents some specific programs/processes from being ran (**no, protection won't work for this**) or stopped. The protection can be bypassed by anyone in many ways.   |

As you can see, Express.js Program Controller is just started in development.

## Upcoming Features:

You can see the upcoming features that are gonna get added in the next update or in the next upcoming updates here.

### Easy
| Feature: | Description: |
| ------------ | ------------ |
| Restart Program | This feature will allow you to restart a program, it will stop and start the program again. **This upcoming feature may be removed.** |
| Logs | This feature will add logs that can be enabled or disabled, and the logs path will be customizable.|
| Customizable Paths | |


### Medium
| Feature: | Description: |
| ------------ | ------------ |
| Multiple Program Support | This is gonna add or try to add support for multiple programs that can be started, stopped, or restarted at once. **This upcoming feature may be removed.** |
| Live Program Output | |

### Hard
| Feature: | Description: |
| ------------ | ------------ |
| Better Program/Process Protection | Idk about this. The protection may or will block specific programs from running or getting killed no matter what the command line is. |
| Security | This may be hard to make.  |

Yeah, I know that security is important if you don't want random people or anyone running random commands that can possibly destroy or upload some stuff to a website from your computer or server if you use this.

Yeah, you can use this at your own **RISK** until I add some good security to the server that can be enabled and disabled at anytime. I recommend keeping security enabled if you want your server or computer secure.

## Process/Program Protection

Process/Protection Protection can prevent specific programs/processes from being killed or ran, however the protecton is bad or very bad because anyone can run or kill anything in a lot of ways like running the **taskkill.exe** program with **/f /im `<THE_NAME>`**, or killing all processes running with your user by using `taskkill /F /FI "%username% eq %username%"`, the %username% variable is your username.

**Critical Windows System Processes**: System (**can't be killed**), winlogon.exe (**can be killed with admin permissions**), wininit.exe (**same as winlogon.exe**),  csrss.exe (**same as wininit.exe**), smss.exe (**same as csrss.exe**), and some more processes.

Ending one of the critical processes will result in a BSoD (**B**lue **S**creen **o**f **D**eath).


There are ways to lockdown the system or a user from running those programs by changing the permissions on them, but it's risky if you set permissions on some specific programs.

## Demo:

### Website: Coming Soon!

### Video: Coming Soon!


## Contact

#### You can get in contact with me at:

##### Discord: **Nicholas#6825**
##### Glitch Support Forums: **https://support.glitch.com/u/nicsena/**
