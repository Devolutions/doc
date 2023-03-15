---
title: Setup the Usage of the Session Credentials to Launch a Tool
---
To run some tools, specific credentials needs to be sent through the remote session. By default, the credential used by a tool are the one from the Windows session. Sometime with those credentials you will not have enough privileges to run the tool. This is why you need to use the credential of the session instead.

## Settings

You can specify the usage of the session credentials for a session in Management Tools – Credentials – Use session credentials  
![KB4519.png](/img/en/kb/KB4519.png)  

We also recommend that you configure your [Default Settings](https://helprdm.devolutions.net/file_template_defaultsettings.html) of the entry type that need this setting by default.