---
title: Console Command Line Interface
description: The Devolutions Server Console Command Line Interface (CLI) is a Companion Tool which allows administrators to interact with Devolutions Server instances.
keywords:
- CLI
- Command Line Interface
- Devolutions Server Console
- Companion tool
---
# {{ en.TOPICTITLE }} 
The {{ en.DPS }} Console Command Line Interface (CLI) is a Companion Tool which allows administrators to interact with {{ en.DPS }} instances, the Scheduler, the Recording Server or the Gateway with create, configure or delete operations. It is automatically available with the installation of the {{ en.DPS }} Console. The DPS.Console.CLI.exe file is located in the {{ en.DVLSCONSOLE }} application installation folder. The ***/help*** switch will list all available commands and parameters. 

![Devolutions Server Console CLI commands list](/img/en/kb/KB8032.png) 
*{{ en.DPS }} Console CLI commands list*{.caption}

The ***/help*** switch can be used to list command's parameters. 

![CLI command parameters](/img/en/kb/KB8033.png) 
*CLI command parameters*{.caption}

The following sample command launch the upgrade process from a zip file available in c:\temp folder.  

***.\DPS.Console.CLI.exe server upgrade --dps "Default Web Site/dps" --zip "C:\temp\DVLS.2020.3.17.0.zip" --accept-eula -quiet -verbose***

The following command will create a new {{ en.DPS }} instance from a JSON response file (see below) that contains the required parameters. It can be used with any of the main commands of the CLI. 

![CLI with JSON file](/img/en/kb/KB8034.png) 
*CLI with JSON file*{.caption}

Sample of a JSON response file for creating a new {{ en.DPS }} instance.  
```
{  
&quot;acceptEula&quot;: true,  
&quot;adminEmail&quot;: &quot;admin@mydomain.org&quot;,  
&quot;adminPassword&quot;: &quot;AdminPassword&quot;,  
&quot;adminUsername&quot;: &quot;admin&quot;,  
&quot;appPoolIdentityType&quot;: &quot;Network Service&quot;,  
&quot;appPoolIdentityPassword&quot;: null,  
&quot;appPoolIdentityUsername&quot;: null,  
&quot;command&quot;: &quot;server install&quot;,  
&quot;consolepwd&quot;: &quot;MyConsolePassword&quot;,  
&quot;databaseHost&quot;: &quot;SQLServer\SQL2017&quot;,  
&quot;databaseIntegratedSecurity&quot;: false,  
&quot;databaseName&quot;: &quot;DVLS&quot;,  
&quot;databaseConsolePassword&quot;: &quot;MyPassword&quot;,  
&quot;databaseConsoleUsername&quot;: &quot;VaultOwner&quot;,  
&quot;databaseSchedulerPassword&quot;: &quot;MyPassword&quot;,  
&quot;databaseSchedulerUsername&quot;: &quot;VaultScheduler&quot;,  
&quot;databaseVaultPassword&quot;: &quot;MyPassword&quot;,  
&quot;databaseVaultUsername&quot;: &quot;VaultRunner&quot;,  
&quot;debug&quot;: false,  
&quot;disableEncryptConfig&quot;: false,  
&quot;disableHttps&quot;: false,  
&quot;disablePassword&quot;: false,  
&quot;dpsPath&quot;: &quot;C:\\inetpub\\wwwroot\\dvls&quot;,  
&quot;dpsWebsiteName&quot;: &quot;Default Web Site&quot;,  
&quot;installZip&quot;: null,  
&quot;keysPath&quot;: &quot;c:\\temp\\DVLS_EncryptionKeys.bin&quot;,  
&quot;keysPassword&quot;: &quot;MyKeysPassword&quot;,  
&quot;quiet&quot;: false,  
&quot;scheduler&quot;: true,  
&quot;serial&quot;: &quot;XXXXX-XXXXX-XXXXX-XXXXX-XXXXX&quot;,  
&quot;serverName&quot;: &quot;Devolutions Server&quot;,  
&quot;serviceAccount&quot;: &quot;LocalSystem&quot;,  
&quot;servicePassword&quot;: null,  
&quot;serviceUser&quot;: null,  
&quot;webApplicationName&quot;: &quot;/dvls&quot;,  
&quot;verbose&quot;: false  
}
```  

