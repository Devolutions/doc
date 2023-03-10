---
eleventyComputed:
  title: Create {{ en.RDMS }} Instance
keywords:
- Roles
---

{% snippet icon.badgeInfo %} 
If you have recently received your serial licenses keys, please refer to the [Getting Started](/server/getting-started/) topic. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
For more information about any of the features in the deploy wizard, please consult their respective topic under the [Server Settings](/server/management/devolutions-server-console/devolutions-server-settings/general/) chapter. 
{% endsnippet %}
 
Multiple {{ en.RDMS }} instances can be hosted on the same server. Each instance resides in its own Web Application within IIS. The following steps are carried out using the {{ en.RDMSCONSOLE }} .  

## Procedure 

1. Install {{ en.RDMSCONSOLE }} on the web server. It is available from the [Download](https://server.devolutions.net/home/download) page. 
1. Execute {{ en.RDMSCONSOLE }} with elevated privileges (run as administrator). This is performed by right-clicking on the application, and selecting ***Run as administrator*** . 
{% snippet icon.shieldWarning %} 
All operations performed through the console are done with the credentials used to launch {{ en.RDMSCONSOLE }} . If you must use other credentials, you will need to launch another Windows session. The ***RunAs*** command does not offer the option of starting a process with elevated privileges. The Run as different user option can work only if the account is a member of the server's local Administrator group. 
{% endsnippet %}
 
![Run as administrator](/img/en/server/Clip10317.png)  

3. In the {{ en.RDMSCONSOLE }} , click on the ***New*** button or the Install New Instance blue link to deploy a new server instance. 
![Deploy a new Devolutions Server](/img/en/server/ServerOp8048.png)  
1. The first dialog will run diagnostics on the server to verify if the IIS Server has all the necessary Web User Groups prerequisites installed and is ready to run {{ en.RDMS }} . Missing features are marked with an error icon. The Install Prerequisites button will install all missing features using a PowerShell script.Click on Close to continue. An internet connection is required for [IIS Application Request Routing (ARR)](https://api.devolutions.net/redirection/f19f07f3-5ea4-436d-a3ba-4bb69d373321) , [IIS Rewrite Module](https://api.devolutions.net/redirection/3cb42413-5dfd-4b1b-bd20-4e5968274ed0) and [IIS ASP.NET Core Module (ANCM)](https://dotnet.microsoft.com/permalink/dotnetcore-current-windows-runtime-bundle-installer) . 
![IIS Features Diagnostic Dialog](/img/en/server/ServerOp8049.png)  
1. The License Agreement needs to be accepted to proceed.  
![Devolutions Server License Agreement Dialog](/img/en/server/ServerOp8050.png)  
1. Under ***Database*** , enter the server and database information. The user account used to create the database must have sysadmin privileges in the SQL Server instance. Consult the [Database](/server/management/devolutions-server-console/devolutions-server-settings/database/) topic for more information. To use ***Windows Authentication*** to connect to the database, it is important to change the Application Pool Identity in the IIS Manager and set the proper permission of the service account on the SQL database. Please consult [How to Configure {{ en.RDMS }} to use integrated security](/kb/devolutions-server/how-to-articles/configure-server-use-integrated-security/) . The following article about [Pre-Deployment Account Survey](/kb/devolutions-server/knowledge-base/pre-deployment-account-survey/) describe which accounts that can be created prior to deploy {{ en.DPS }} . 
![Database Dialog](/img/en/server/ServerOp8054.png)  
1. Under ***General*** , enter a custom ***Name*** and ***Description*** . Under ***Serial*** , provide a license serial that has been received by email upon buying the product. If you did not buy any {{ en.RDMS }} license yet, you may [Request a 30-days trial](https://server.devolutions.net/trial) . 
![General and Registration Dialog](/img/en/server/ServerOp8051.png)  
1. Under ***Installation Source*** , select to either Download from the web (latest version) or Install from zip file available from the [Download](https://server.devolutions.net/home/download) page . 
![Source Dialog](/img/en/server/ServerOp8053.png)  
1. Under General , select the Website , Web Application Name and [Access URI](/kb/devolutions-server/knowledge-base/access-uri/) required to reach the {{ en.DPS }} web page. Under Installation Destination , set the Installation Folder where the instance's files will be located. The process to run Web sites has been granted the proper permissions under c:\inetpub\wwwroot . We recommend to create a new folder beneath it and create the {{ en.RDMS }} instance within this folder . Under Application Pool , set the Application Pool Name. 
{% snippet icon.badgeCaution %} 
We do not recommend to set the installation folder to C:\Program Files or C:\Program Files (x86) . {{ en.RDMS }} is a web application and this could result in unwanted behavior and issues because IIS do not have enough permissions to run web applications that are located under those folders. If you want to set the web application folder in a location different than the default C:\Inetpub\wwwroot folder, the IIS_IUSRS builtin local machine group will need Read and Read & Execute permissions on the entire {{ en.DPS }} web application folder structure. 
{% endsnippet %} 

![Destination dialog](/img/en/server/ServerOp8170.png)  

10. Under Administration Credentials , fill in the information to create a {{ en.RDMS }} Custom administrator account . All fields are required.  
![Create An Administrator User](/img/en/server/Clip10323.png)  
1. Under Scheduler Service , when enabling the Install Scheduler service option, please set the proper Service Account. The following features depend on the Scheduler : [Backup manager](/server/web-interface/administration/backup/backup-manager/) , [Domain Users and Users Groups cache](/server/web-interface/administration/configuration/server-settings/general/authentication/domain/) , [Office365 Users and User Groups cache](/server/web-interface/administration/configuration/server-settings/general/authentication/office-365/) , [Email notifications](/server/web-interface/administration/security-management/notifications/) , [Cleanup Logs](/server/web-interface/administration/logs/cleanup-logs/) and [Privileged Access Management](/server/privileged-access-management/) . 
![Scheduler Dialog](/img/en/server/ServerOp8055.png)  
1. Choosing to not install the Scheduler, you will get the following warning message.  
![Scheduler Warning](/img/en/server/ServerOp8056.png)  
1. Under Recovery Kit , select the destination folder and file name of the {{ en.RDMS }} recovery kit file. Set a password to protect the Encryption Keys. If the Include sensitive data option is enabled, the SQL authentication credentials will be included in the recovery kit. 
{% snippet icon.shieldNotice %} 
We recommend to protect the Recovery Kit file in a safe to avoid data loss if {{ en.RDMS }} has to be restored. 
{% endsnippet %} 

![Backup the Encryption Keys Dialog](/img/en/server/clip10324.png)  
14. Under ***Settings*** , validate the configuration and click ***Install*** . 
![Settings Dialog](/img/en/server/ServerOp8057.png)   

Once the installation is complete, a summary indicates if the {{ en.RDMS }} has been deployed correctly.  

![Progress Installation Dialog](/img/en/server/ServerOp8059.png)  

### Test the installation 
To test the server installation, click on navigate to the instance URL (e.g.: http://<Machine_Name>/<InstanceName>) with any web browser or click on the Navigate to Website button in the {{ en.RDMSCONSOLE }} .  

![Devolutions Server Console](/img/en/server/ServerOp8060.png)   

{% snippet icon.badgeNotice %} 
In some situations, the web page may not load properly. Ensure that the IIS IUSRS local built-in group has full read access on the encryption.config file located in the App_Data sub folder located in the {{ en.DPS }} web application folder (i.e. c:\inetpub\wwwroot\dvls\App_Data). If there is still an issue, contact us at [service@devolutions.net](mailto:service@devolutions.net) 
{% endsnippet %}
 
To test the connection from a client by creating a data source in {{ en.RDM }}. Please consult the [How to Configure Client Data Source](/kb/devolutions-server/how-to-articles/configure-client-data-source/) for more information. 

