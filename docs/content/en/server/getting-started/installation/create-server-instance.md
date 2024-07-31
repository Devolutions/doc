---
_schema: default
eleventyComputed:
  title: Create a {{ en.DVLS }} instance
  description: >-
    Multiple {{ en.DVLS }} instances can be hosted on the same server. Each
    instance resides in its own web application within IIS.
  status: Topic available in German language
---
{% snippet, "badgeInfo" %}
If you have recently received your serial license keys, please refer to [Getting started](/server/getting-started/).

For more information about any of the features in the deploy wizard, please consult their respective topic under [Server Settings](/server/management/devolutions-server-console/devolutions-server-settings/general/).

{% endsnippet %}

Multiple {{ en.DVLS }} instances can be hosted on the same server. Each instance resides in its own web application within IIS. The following steps are carried out using the {{ en.DVLSCONSOLE }} and are also valid for the ***free edition*** of {{ en.DVLS }}.

## IIS web server installation

1. Install {{ en.DVLSCONSOLE }} on the web server. It is available from the [Download](https://server.devolutions.net/home/download) page.
2. Execute {{ en.DVLSCONSOLE }} with elevated privileges (run as administrator). This is performed by right-clicking on the application and selecting ***Run as administrator***. 
{% snippet, "shieldWarning" %} All operations performed through the {{ en.DVLSCONSOLE }} are done with the credentials used to launch {{ en.DVLSCONSOLE }}. If you must use other credentials, you will need to launch another Windows session. The ***RunAs*** command does not offer the option of starting a process with elevated privileges. The Run as different user option can work only if the account is a member of the server's local administrator group. {% endsnippet %}

   ![Run as administrator](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8175.png)

3. This step requires having logged into the Windows Server at least once with a VaultDBOwner account (with local admin rights on the server) connected through Windows authentication. Once this is done, open the{{ en.DVLSCONSOLE }}, and click on the ***New*** button or the ***Install New Instance*** button to deploy a new server instance using the [basic installation](#basic-installation) or the [advanced installation](#advanced-installation) wizard. It is also possible to [***Migrate SQL Data Source***](/server/kb/how-to-articles/migrate-sql/). ![Deploy a new](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0049.png)

### Basic installation

1. If an SQL Server instance is not available on the machine where {{ en.DVLS }} is hosted, an SQL Server Express edition instance will be installed by the wizard. An internet connection is required to download the SQL Server Express edition and the following prerequisites: [IIS Application Request Routing (ARR)](https://api.devolutions.net/redirection/f19f07f3-5ea4-436d-a3ba-4bb69d373321), [IIS Rewrite Module](https://api.devolutions.net/redirection/3cb42413-5dfd-4b1b-bd20-4e5968274ed0), and [ASP.NET Core Module (ANCM)](https://dotnet.microsoft.com/permalink/dotnetcore-current-windows-runtime-bundle-installer). ![Basic installation dialog](https://cdnweb.devolutions.net/docs/DVLS6011_2024_1.png)
2. The following dialog provides the credentials created for the sa SQL account, the {{ en.DVLS }} administrator account and the Encryption Key password. Click on the ***Save As*** button to save the information in a file. ![Important credentials dialog](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8177.png)
3. The following dialog displays the SQL Server information, including the ***sa*** account credentials, that will be used by {{ en.DVLS }} to create and connect to the SQL database.
4. Once the installation is successfully completed, the wizard will display the installation summary and will automatically open the default browser to connect on the {{ en.DVLS }} web interface. ![Installation summary report](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8181.png)
5. On the {{ en.DVLS }} web interface, use the credentials provided in step 2 to log in. Afterward, a prompt will request a password change before continuing with the login process.<br> ![Change your password prompt](https://cdnweb.devolutions.net/docs/DVLS6013_2024_1.png)
6. Enter your license. To activate the free edition, click the ***Activate the Free Version*** button to immediately access Devolutions Server with a free license.

### Advanced installation

1. For the first step, the installation wizard will run diagnostics on the server to verify if the IIS Server has all the necessary web server prerequisites installed and is ready to run {{ en.DVLS }}. Missing features are marked with an error icon. The Install Prerequisites button will install all missing features using a PowerShell script.Click on Close to continue. An internet connection is required for [IIS Application Request Routing (ARR)](https://api.devolutions.net/redirection/f19f07f3-5ea4-436d-a3ba-4bb69d373321), [IIS Rewrite Module](https://api.devolutions.net/redirection/3cb42413-5dfd-4b1b-bd20-4e5968274ed0) and [ASP.NET Core Module (ANCM)](https://dotnet.microsoft.com/permalink/dotnetcore-current-windows-runtime-bundle-installer). ![IIS Features Diagnostic](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8049.png)
2. The License Agreement needs to be accepted to proceed. ![End User License Agreement](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8050.png)
3. Under ***Database***, enter the server and database information. The user account used to create the database must have sysadmin privileges in the SQL Server instance. Consult [Database](/server/management/devolutions-server-console/devolutions-server-settings/database/) for more information. To use ***Windows Authentication*** to connect to the database, it is important to change the Application Pool Identity in the IIS Manager and set the proper permission of the service account on the SQL database. Please consult [Configure {{ en.DVLS }} to use domain single sign-on (SSO)](/server/kb/how-to-articles/configure-windows-authentication/). The following article about [Pre-Deployment Account Survey](/server/kb/knowledge-base/pre-deployment-account-survey/) describes which accounts that can be created prior to deploy {{ en.DVLS }}. ![Database dialog](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8054.png)
4. Under ***General***, enter a custom ***Name*** and ***Description***. If you did not buy any {{ en.DVLS }} license yet, you may [Request a 30-days trial](https://server.devolutions.net/trial) or continue without a license to use {{ en.DVLS }} Free for up to 10 users. You will be prompted on {{ en.DVLS }} first launch to ***Activate the Free Version***. ![General and registration dialog](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8051.png)
5. Under ***Installation Source***, select to either Download from the web (latest version) or Install from zip file available from the [Download](https://server.devolutions.net/home/download) page. ![Source dialog](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8053.png)
6. Under General, select the Website, Web Application Name and [Access URI](/server/kb/knowledge-base/access-uri/) required to reach the {{ en.DVLS }} web page, which should be the full FQDN of the server (ex. https://myservername.mydomain.loc/dvls). Under Installation Destination, set the Installation Folder where the instance's files will be located. The process to run Websites has been granted the proper permissions under **C:\\inetpub\\wwwroot**. We recommend to create a new folder beneath it and create the {{ en.DVLS }} instance within this folder. Under Application Pool, set the Application Pool Name. 

{% snippet, "badgeCaution" %} We do not recommend to set the installation folder to **C:\Program Files**, **C:\Program Files (x86)**, or **C:\inetpub**. {{ en.DVLS }} is a web application and this could result in unwanted behavior and issues because IIS do not have enough permissions to run web applications that are located under those folders. If you want to set the web application folder in a location different than the default **C:\Inetpub\wwwroot** folder, the IIS_IUSRS built in local machine group will need Read and Read & Execute permissions on the entire {{ en.DVLS }} web application folder structure. {% endsnippet %}

   ![Destination dialog](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8170.png)

7. Under ***Administration Credentials***, fill in the information to create a {{ en.DVLS }} Custom administrator account. All fields are required. ![Create An Administrator User](https://cdnweb.devolutions.net/docs/docs_en_server_clip10323.png)

   {% snippet, "badgeCaution" %}Be sure to keep a copy of these credentials in a safe place outside of {{ en.DVLS }}, as they could prove useful should any issue with the other authentication methods arise. Also, it is a best practice to keep the Devolutions custom login option checked (located under **Administration** – **Server Settings** – **Authentication**).{% endsnippet %}

8. Under Scheduler Service, when enabling the Install Scheduler service option, be sure to use the proper VaultDBScheduler account. The following features depend on the Scheduler: [Backup manager](/server/web-interface/administration/backup/backup-manager/), [Domain Users and Users Groups cache](/server/web-interface/administration/configuration/server-settings/general/authentication/domain/), [Office365 Users and User Groups cache](/server/web-interface/administration/configuration/server-settings/general/authentication/office-365/), [Email notifications](/server/web-interface/administration/security-management/notifications/), [Cleanup Logs](/server/web-interface/administration/logs/cleanup-logs/) and [Privileged Access Management](/pam/server/). ![Scheduler dialog](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8055.png)

   {% snippet, "badgeHelp" %}If the installation fails to start, search the service for DevolutionsSchedulerService, go into **Properties** and re-enter the username and password. Usually changing the account during the installation process does not work, in which case{{ en.DVLS }} will still be installed with the NetworkService account but will not be able to start. Additionally, the VaultDBScheduler account should be granted read rights on the `encryption.config` file under `C:\inetpub\wwwroot\dvls\App_Data\`.{% endsnippet %}

9. Choosing to not install the Scheduler, you will get the following warning message. ![Scheduler warning](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8056.png)
10. Under [Recovery Kit](/server/management/recovery-kit/), select the destination folder and file name of the {{ en.DVLS }} recovery kit file. Set a password to protect the Encryption Keys. If the Include sensitive data option is enabled, the SQL authentication credentials will be included in the recovery kit. <br>

{% snippet, "shieldNotice" %}
We recommend keeping the recovery kit file and password in a safe place outside of {{ en.DVLS }}, as they can later be used to move or restore the Database.
{% endsnippet %}


    ![Backup the encryption keys](https://cdnweb.devolutions.net/docs/docs_en_server_clip10324.png)

11. A prompt should then appear asking to install {{ variables.DGW.en }}, which can be skipped. See our [documentation](https://docs.devolutions.net/dgw/server/server-configuration/) to learn how to configure {{ variables.DGW.en }} with {{ en.DVLS }}.
12. Under ***Summary***, validate the configuration and click ***Install***. ![Summary dialog](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8057.png)
13. Once the installation is complete, a summary indicates if the {{ en.DVLS }} has been deployed correctly, click ***OK*** to close this window. ![Installation progress](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8059.png)

### Change {{ variables.DVLS.en }} application pool's identity to VaultDBRunner

1. Open IIS Manager, right-click on the dvls application, and click on ***Advanced settings...***.
2. Under ***Process Model***, click on the ellipsis button next to ***Identity***, choose ***Custom account***, set your VaultDBRunner information, and click ***OK***.![Application pool's identity setting](https://cdnweb.devolutions.net/docs/INTERFACE4041.png "Application pool's identity setting")
3. Go to the {{ variables.DVLSCONSOLE.en }}, and then **Edit** – **Database** – **Advanced credentials**, click on **Apply least permissions**, and click on **OK**.

### Import a certificate or create a self-signed certificate

1. Open IIS manager, select the server node in the Tree View and double-click the ***Server Certificates*** feature in the ***List View***.

   ![Server Certificates](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4391.png)

2. Click on ***Import...*** in the ***Actions*** pane, and fill in the required informations to import an already existing certificate. To create a self-signed certificate, click on ***Create Self-Signed Certificate...***, give it a name and leave the certificate store to ***Personal***.

   ![Import... in the Actions pane.](	https://cdnweb.devolutions.net/docs/docs_en_kb_KB4392.png "Import... in the Actions pane.")

### Create a SSL binding

1. Select the web site in the Tree View. Click ***Bindings...*** in the ***Actions*** pane. This brings up the binding editor that lets you create, edit, and delete bindings for your Web site. ![Edit Site – Bindings...](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4393.png "Edit Site – Bindings...")
2. Click ***Add...*** to add your new SSL binding to the site. ![Add a new SSL binding](	https://cdnweb.devolutions.net/docs/docs_en_kb_KB4394.png "Add a new SSL binding")
3. Select ***https*** in the ***Type*** drop-down list. Select the certificate you have imported or created from the ***SSL Certificate*** drop-down list and then click ***OK***. ![Select https and certificate previously created from the list](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4395.png "Select https and certificate previously created from the list")
4. Now you have a new ***SSL*** binding on your site. ![New SSL binding](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4396.png "New SSL binding")

### Test the installation

To test the server installation, navigate to it (e.g.: `\http://&lt;Machine\_Name&gt;/<instancename>`) with any web browser or click on the ***Navigate to Website*** button in the {{ en.DVLSCONSOLE }}. ![](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0043.png)

&nbsp;

{% snippet, "badgeNotice" %}
In some situations, the web page may not load properly. Ensure that the IIS IUSRS local built-in group has full read access on the **encryption.config** file located in the App_Data subfolder located in the {{ en.DVLS }} web application folder (i.e., **C:\inetpub\wwwroot\dvls\App_Data**). If there is still an issue, contact us at [service@devolutions.net](mailto:service@devolutions.net).
{% endsnippet %}

To test the connection from a client by creating a data source in {{ en.RDM }}. Please consult [Configure a client data source](/server/kb/how-to-articles/configure-client-data-source/) for more information.

## Kestrel web server installation

Installing {{ en.DVLS }} with Kestrel requires fewer dependencies; in particular, IIS does not need to be installed on the machine.

The installation process is very similar to the [IIS web server advanced installation](/server/getting-started/installation/create-server-instance/#advanced-installation). Instead of specifying a website and an application under IIS, enter URL to which the application listens (for example, **https://localhost:5000**). The access URI represents the URI used to access our application served on the given HTTP listener.

Known limitations:

* The application must be served on / ("http://localhost:5000/").
* Windows authentication is not currently supported under Kestrel.