---
title: Missing encryption file error
---
After the creation of a {{ en.DVLS }} instance, when trying to open the web page, the following error is displayed in the browser.  
![The encryption file is missing, please contact your administrator error.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8000.png)

## Solution

This issue normally happens when the Integrated Security option is set in the Database tab of the {{ en.DVLS }} settings.

To solve the issue, the service account of the {{ en.DVLS }} IIS Application Pool and the service account of the DevolutionsSchedulerService in the services need Read permission on the **encryption.config** file that is located in the App_Data subfolder of the {{ en.DVLS }} web application folder.

To navigate to the web application folder, you can use the Explore content of website directory button from the {{ en.DVLSCONSOLE }}.  
![Explore content of website directory.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8001.png)  
![Windows File Explorer.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8002.png)
