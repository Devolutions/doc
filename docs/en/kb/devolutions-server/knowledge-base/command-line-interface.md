---
title: Command Line Interface
Description: A Command Line Interface (CLI) is a Companion Tool which allows Devolutions Server users to access credentials with the command line.
keywords:
- CLI
- Command Line Interface
---
# {{ en.TOPICTITLE }} 
A Command Line Interface (CLI) is a Companion Tool which allows DVLS users to access credentials with the command line.  
Listed below are the available command line: 
### Config 
&nbsp; &nbsp; &nbsp;**Parameters:**  

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;-v&nbsp; &nbsp; &nbsp;--vault  

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;The default vault id to use for the other commands: 0000000-0000-0000-0000-000000000000 

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;-s&nbsp; &nbsp; &nbsp;--server  

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;The address of the server to connect to.  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;If you call config without parameters, it will return the current settings.  

&nbsp; &nbsp; &nbsp;**Options:**  

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;-j&nbsp; &nbsp; &nbsp;--json   

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;The command output will be formatted in JSON format.  

&nbsp; &nbsp; &nbsp;**Examples:**  

![Devolutions Server CLI examples](/img/en/kb/KB8006.png) 
*{{ en.DPS }} CLI examples*{.caption}

### Get 
Returns the credentials of an entry based on its id.  

&nbsp; &nbsp; &nbsp;**Parameters:**  

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;The entry&apos;s id can be found in its advance property or in the last part of its URL.  

![Entry ID](/img/en/kb/KB4351.png) 
*Entry ID*{.caption}

&nbsp; &nbsp; &nbsp;**Options:**  

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;-j&nbsp; &nbsp; &nbsp;--json  

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;The command output will be formatted in JSON format.  

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;-d&nbsp; &nbsp; &nbsp;--domain  

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Only returns the domain.  

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;-u&nbsp; &nbsp; &nbsp;--username  

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Only returns the username.  

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;-p&nbsp; &nbsp; &nbsp;--password  

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Only returns the password.  

&nbsp; &nbsp; &nbsp;**Examples:**  

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;DPS&gt; get 4574725f-0d24-4cbc-a116-a5270179e251  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;domain:   dddd  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;username: asdf  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;password: 12345  

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;DPS&gt; get 4574725f-0d24-4cbc-a116-a5270179e251 --json  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&quot;domain&quot;: &quot;dddd&quot;,  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&quot;username&quot;: &quot;asdf&quot;,  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&quot;password&quot;: &quot;12345&quot;  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;}  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;DPS&gt; get 4574725f-0d24-4cbc-a116-a5270179e251 -u  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;asdf  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;DPS&gt; get 4574725f-0d24-4cbc-a116-a5270179e251 -p  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;12345  

![GET Command Line Interface examples](/img/en/kb/KB4352.png) 
*GET Command Line Interface examples*{.caption}
### Login 
Parameters:  

First parameter: the username (the key, if the user is of the type application)  
Second parameter: the password (the secret, if the user is of the type application)  

![KB4353.png](/img/en/kb/KB4353.png)  

The user/application must have the right to use the CLI  

![KB4354.png](/img/en/kb/KB4354.png)  

Options:    


-j --json 
The command output will be formatted in JSON format. 
Examples: 
DPS&gt; login dsavard 12345 
![KB4355.png](/img/en/kb/KB4355.png) 
### Logout 
Logout the current user. 
![KB4356.png](/img/en/kb/KB4356.png) 
### Set 
Update the credentials of an entry. 
Parameters: 
The entry&apos;s id can be found in its advance property or in the last part of its URL. 
![KB4357.png](/img/en/kb/KB4357.png) 
Options: 
-j&nbsp; &nbsp; &nbsp;--json 
The command output will be formatted in JSON format. 

-d&nbsp; &nbsp; &nbsp;--domain new-value 
Update the domain. 

-u&nbsp; &nbsp; &nbsp;--username new-value 
Update the username. 

-p&nbsp; &nbsp; &nbsp;--password new-value 
Update the password. 
Examples: 
DPS&gt; set 4574725f-0d24-4cbc-a116-a5270179e251 --domain newdomain 
Entry has been successfully updated 
![KB4358.png](/img/en/kb/KB4358.png) 

