---
title: Command Line Interface
description: A Command Line Interface (CLI) is a Companion Tool which allows Devolutions Server users to access credentials with the command line.
keywords:
- CLI
- Command Line Interface
---
# {{ en.TOPICTITLE }} 
A Command Line Interface (CLI) is a Companion Tool which allows DVLS users to access credentials with the command line.  
Listed below are the available command line: 
### Config 
&nbsp; &nbsp;**Parameters:**  

&nbsp; &nbsp; &nbsp; &nbsp;`-v or --vault`  

&nbsp; &nbsp; &nbsp; &nbsp;The default vault id to use for the other commands: 0000000-0000-0000-0000-000000000000 

&nbsp; &nbsp; &nbsp; &nbsp;`-s or --server`  

&nbsp; &nbsp; &nbsp; &nbsp;The address of the server to connect to.  
&nbsp; &nbsp; &nbsp; &nbsp;If you call config without parameters, it will return the current settings.  

&nbsp; &nbsp;**Options:**  

&nbsp; &nbsp; &nbsp; &nbsp;`-j or--json`  

&nbsp; &nbsp; &nbsp; &nbsp;The command output will be formatted in JSON format.  

&nbsp; &nbsp;**Examples:**  

![Devolutions Server CLI examples](/img/en/kb/KB8006.png) 
*{{ en.DPS }} CLI examples*{.caption}
### Get 
Returns the credentials of an entry based on its id.  

&nbsp; &nbsp;**Parameters:**  

&nbsp; &nbsp; &nbsp; &nbsp;The entry&apos;s id can be found in its advance property or in the last part of its URL.  

![Entry ID](/img/en/kb/KB4351.png) 
*Entry ID*{.caption}

&nbsp; &nbsp;**Options:**  

&nbsp; &nbsp; &nbsp; &nbsp;`-j or --json`  

&nbsp; &nbsp; &nbsp; &nbsp;The command output will be formatted in JSON format.  

&nbsp; &nbsp; &nbsp; &nbsp;`-d or --domain`  

&nbsp; &nbsp; &nbsp; &nbsp;Only returns the domain.  

&nbsp; &nbsp; &nbsp; &nbsp;`-u or --username`  

&nbsp; &nbsp; &nbsp; &nbsp;Only returns the username.  

&nbsp; &nbsp; &nbsp; &nbsp;`-p or --password`  

&nbsp; &nbsp; &nbsp; &nbsp;Only returns the password.  

&nbsp; &nbsp;**Examples:**  

&nbsp; &nbsp; &nbsp; &nbsp;`DPS> get 4574725f-0d24-4cbc-a116-a5270179e251`  
&nbsp; &nbsp; &nbsp; &nbsp;`domain: dddd`  
&nbsp; &nbsp; &nbsp; &nbsp;`username: asdf`  
&nbsp; &nbsp; &nbsp; &nbsp;`password: 12345`  

&nbsp; &nbsp; &nbsp; &nbsp;`DPS> get 4574725f-0d24-4cbc-a116-a5270179e251 --json`  
&nbsp; &nbsp; &nbsp; &nbsp;`{`  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`"domain": "dddd",`  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`"username": "asdf",`  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`"password": "12345"`  
&nbsp; &nbsp; &nbsp; &nbsp;`}`  
&nbsp; &nbsp; &nbsp; &nbsp;`DPS> get 4574725f-0d24-4cbc-a116-a5270179e251 -u`  
&nbsp; &nbsp; &nbsp; &nbsp;`asdf`  
&nbsp; &nbsp; &nbsp; &nbsp;`DPS> get 4574725f-0d24-4cbc-a116-a5270179e251 -p`  
&nbsp; &nbsp; &nbsp; &nbsp;`12345`  

![GET Command Line Interface examples](/img/en/kb/KB4352.png) 
*GET Command Line Interface examples*{.caption}
### Login 
&nbsp; &nbsp;**Parameters:**  

&nbsp; &nbsp; &nbsp; &nbsp;First parameter: the username (the key, if the user is of the type application)  
&nbsp; &nbsp; &nbsp; &nbsp;Second parameter: the password (the secret, if the user is of the type application)  

![Application – General](/img/en/kb/KB4353.png) 
*Application – General*{.caption}

&nbsp; &nbsp; &nbsp; &nbsp;The user/application must have the right to use the CLI  

![Edit user – Applications](/img/en/kb/KB4354.png) 
*Edit user – Applications*{.caption}

&nbsp; &nbsp;**Options:**  

&nbsp; &nbsp; &nbsp; &nbsp;`-j or --json`  

&nbsp; &nbsp; &nbsp; &nbsp;The command output will be formatted in JSON format.  

&nbsp; &nbsp;**Examples:**  

&nbsp; &nbsp; &nbsp; &nbsp;`DPS> login dsavard 12345`  

![Command Line Interface examples](/img/en/kb/KB4355.png) 

### Logout 
Logout the current user.  

![Command Line Interface examples](/img/en/kb/KB4356.png) 

### Set 
Update the credentials of an entry.  

&nbsp; &nbsp;**Parameters:**  

&nbsp; &nbsp; &nbsp; &nbsp;The entry&apos;s id can be found in its advance property or in the last part of its URL.  

![Credentials – Username / Password – Advanced](/img/en/kb/KB4357.png) 
*Credentials – Username / Password – Advanced*{.caption}

&nbsp; &nbsp;**Options:**  

&nbsp; &nbsp; &nbsp; &nbsp;`-j or --json`  

&nbsp; &nbsp; &nbsp; &nbsp;The command output will be formatted in JSON format.  

&nbsp; &nbsp; &nbsp; &nbsp;`-d or --domain new-value`  

&nbsp; &nbsp; &nbsp; &nbsp;Update the domain.  

&nbsp; &nbsp; &nbsp; &nbsp;`-u or --username new-value`  

&nbsp; &nbsp; &nbsp; &nbsp;Update the username.  

&nbsp; &nbsp; &nbsp; &nbsp;`-p or --password new-value`  

&nbsp; &nbsp; &nbsp; &nbsp;Update the password.  

&nbsp; &nbsp;**Examples:**  

&nbsp; &nbsp; &nbsp; &nbsp;`DPS> set 4574725f-0d24-4cbc-a116-a5270179e251 --domain newdomain`  

&nbsp; &nbsp; &nbsp; &nbsp;Entry has been successfully updated  

![Command Line Interface examples](/img/en/kb/KB4358.png) 

