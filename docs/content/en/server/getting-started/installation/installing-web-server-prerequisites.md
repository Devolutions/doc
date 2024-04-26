---
eleventyComputed:
  title: Installing web server prerequisites
  order: 40
  status: Topic available in German language
  keywords:
  - Roles
---
The installation of {{ en.DVLS }} is supported by Windows Server 2016, 2019, and 2022.

As a web application, {{ en.DVLS }} requires the following:
* IIS Manager
* [URL Rewrite module](https://api.devolutions.net/redirection/3cb42413-5dfd-4b1b-bd20-4e5968274ed0)
* [Application Request Routing](https://api.devolutions.net/redirection/52ba9ac0-fb5f-44c1-9521-972caf763b1a)
* [Microsoft .NET 8.0](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) hosting bundle
* specific web server roles on the host machine

These prerequisites can be installed from the {{ en.DVLSCONSOLE }} or trought an existing PowerShell script provided with the {{ en.DVLSCONSOLE }}.

Installing prerequisites from [{{ en.DVLSCONSOLE }}](/server/management/devolutions-server-console/) or from the PowerShell script requires internet access to download the following:
* [URL Rewrite module](https://api.devolutions.net/redirection/3cb42413-5dfd-4b1b-bd20-4e5968274ed0)
* [Application Request Routing](https://api.devolutions.net/redirection/52ba9ac0-fb5f-44c1-9521-972caf763b1a)
* [Microsoft .NET 8.0](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) hosting bundle
* [ASP.NET Core Runtime Desktop 8.0](https://redirection.devolutions.com/asp-runtime-desktop-8.0.4)
* [Microsoft Edge WebView2](https://developer.microsoft.com/en-us/microsoft-edge/webview2/consumer/)

![Web server roles needed for {{ en.DVLS }}](https://cdnweb.devolutions.net/docs/INTERFACE2033.png)

## PowerShell method
1. Run Windows PowerShell with elevated privileges.
1. Change the current path to the sub-folder Scripts that is located in the current installation folder of {{ en.DVLSCONSOLE }} (**C:\Program Files (x86)\Devolutions\Devolutions Server Console\Scripts**).
![Location of PowerShell script](https://cdnweb.devolutions.net/docs/docs_en_server_clip10311.png)
1. Run the **DVLS-Prerequisites.ps1** script.
1. The script will install the missing web roles and the following components:
    * IIS URL Rewrite Module
    * IIS Application Request Routing Module
    * IIS [Microsoft .NET 8.0](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) Core Module hosting bundle.

   ![Windows PowerShell script](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp4020.png)

## {{ en.DVLSCONSOLE }} method
1. Open the [{{ en.DVLSCONSOLE }}](/server/management/devolutions-server-console/).
1. Go in the ***Support*** tab and click on ***IIS Diagnostic***.
![!!ServerOp8162](https://cdnweb.devolutions.net/docs/DVLSCONSOLE2006_2024_1.png)
1. Click on ***Install Prerequisites*** to run the PowerShell script. The window below only appears if a prerequisite is missing during a new installation or an update.
![IIS features diagnostic](https://cdnweb.devolutions.net/docs/DVLSCONSOLE2005_2024_1.png)
