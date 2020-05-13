## Express.js Program Controller

Express.js Program Controller is a sample node express.js server that allows you to start, stop, or restart programs remotely.

**NOTE:** Express.js Program Controller is getting developed by a person who doesn't have a lot of knowledge about node and express.js. The updates may probably take hours or days to do, and a lot of time of searching the web on how to do this and that.

## DISCLAIMER:

Using this program for any malicious purposes like destroying a system, hacking a website, or for a R.A.T (Remote Administrator Trojan) is **NOT ALLOWED!**

IF YOU IGNORE THE DISCLAIMER, AND DECIDED TO USE THIS FOR MALICIOUS PURPOSES, I am **NOT** responsible for any **misuse** or **damage** caused by this program if you decided to use this program for malicious purposes. You take **FULL** responsibility for any malicious actions by this program if you are using it for malicious purposes. 

## Requirements:

#### Node.js LTS v12
##### I used Node.js LTS v12 to test on my pc. Please let me know that this works on other versions of Node.js. Thank you!

#### Express.js

## How to use?

In this selection, you will be learning how to use Express.js Program Controller.

This is how to use Express.js Program Controller:
#### 1) Run the Server with `node server.js`
#### 2) Go to `127.0.0.1:3000` on your browser to see the server works
#### 3) Type in `/run?program=<THE_PROGRAM_NAME>` in your url bar
##### - 3a) Replace `<THE_PROGRAM_NAME>` with the program's name
##### - 3b) The url should look like this --> `127.0.0.1:3000/run?program=<THE_PROGRAM_NAME>`
#### 4) Press enter in the url bar, and it should run the program.
##### - 4a) Please report any bugs and problems to me at this repository's issues.

## Supported Operating Systems:

#### Windows 10
#### Windows 8.1
#### Windows 7
#### Windows Vista (maybe? not tested.)


Yeah, I know that Windows is only the supported operating system by Express.js Program Controller, there may be support for more operating systems such as macOS, and Ubuntu.

## Testing:

Express.js Program Controller has been tested on Windows 10.

I don't have virtual machines that haves Windows Vista, 7, and 8.1. I will be getting the ISOs of the windows versions, and will be going to test Express.js Program Controller on there.

## Features:

You can see features that Express.js Program Controller haves here.

| Feature: | Description: |
| ------------ | ------------ |
| Start Program  |  This allows you to start a program by sending a request with the program name. The protection fails for starting programs because there are many ways of starting a program.|
| Stop Program  |  This allows you to stop a program by sending a request with the program name if the program is running. The protection may work or fail for this.  |
| **Force** Stop Program  |  This allows you to force stop a program by sending a request with the program name if the program is running. This requires administrator permissions. The protection may work or fail for this. |
| Very Basic Process/Program Protection (**Bad**)  |  This prevents some specific programs/processes from being ran (**no, protection won't work for this**) or stopped. The protection can be bypassed by anyone in many ways.   |

As you can see, Express.js Program Controller is just started in development.

## Upcoming Features:

You can see the upcoming features that are gonna get added in the next update or in the next upcoming updates here.

### Easy
| Feature: | Description: |
| ------------ | ------------ |
| Restart Program | This feature will allow you to restart a program, it will stop and start the program again. |
| Error Pages | |
| Logs | This feature will add logs that can be enabled or disabled, and the logs path will be customizable.|
| Customizable Paths | |


### Medium
| Feature: | Description: |
| ------------ | ------------ |
| Multiple Program Support | This is gonna add or try to add support for multiple programs that can be started, stopped, or restarted at once. |
| OS Checker (maybe?) | This is gonna add a checker for the user's running os like windows, or ubuntu. This may bring support for multiple operating systems for Express.js Program Controller. |
| Better Program/Process Protection | |
| Security | This may be hard to make.   |

Yeah, I know that security is important if you don't want random people or anyone running random commands that can possibly destroy or upload some stuff to a website from your computer or server if you use this.

Yeah, you can use this at your own **RISK** until I add some good security to the server that can be enabled and disabled at anytime. I recommend keeping security enabled if you want your server or computer secure.

### Hard
| Feature: | Description: |
| ------------ | ------------ |
| ? | ? |

## Process/Program Protection

Process/Protection Protection can prevent specific programs/processes from being killed or ran, however the protecton is bad or very bad because anyone can run or kill anything in a lot of ways like running the **taskkill.exe** program with **/f /im `<THE_NAME>`**, or killing all processes running with your user by using `taskkill /F /FI "%username% eq %username%"`, the %username% variable is your username.

**Critical Windows System Processes**: System (**can't be killed**), winlogon.exe (**can be killed with admin permissions**), wininit.exe (**same as winlogon.exe**),  csrss.exe (**same as wininit.exe**), smss.exe (**same as csrss.exe**), and some more processes.

Ending one of the critical processes will result in a BSoD (**B**lue **S**creen **o**f **D**eath).


There are ways to lockdown the system or a user from running those programs by changing the permissions on them, but it's risky if you set permissions on some specific programs.

## Demo:

### Video: Coming Soon!

### Website: Coming Soon!


## Contact

##### You can get in contact with me at:
Discord: **Nicholas#6825**
Glitch Support Forums: **https://support.glitch.com/u/nicsena/**