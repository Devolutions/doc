---
title: HTTP Error 500.19 - Internal Server Error
---
When trying to load the {{ en.DVLS }} web page, the following HTTP 500.19 - Internal Server Error is displayed in the browser.  
![http 500.19 - Internal Server Error.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8102.png)  

The cause of this error is because the IIS Rewrite Module and/or the IIS ASP.NET Core Module (ANCM) are missing.
![ISS Features Diagnostic.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8103.png)

## Solution

1. From the {{ en.DVLSCONSOLE }} , edit the instance.
1. Select the IIS tab.
1. Click on the IIS Diagnostic button.
1. Click on the Install Prerequisites button.  
![ISSS Features Diagnostic.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8104.png)
1. If running the PowerShell script from the {{ en.DVLSCONSOLE }} is blocked due to restriction on the system, the script is located in the Scripts folder of the {{ en.DVLSCONSOLE }} installation folder.
