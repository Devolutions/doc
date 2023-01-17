---
title: The Encryption File is Missing
---
# {{ en.TOPICTITLE }}
After the creation of a {{ en.DPS }} instance, when trying to open the web page, the following error is displayed in the browser.  
![The encryption file is missing, please contact your administrator error.png](/img/en/kb/kb8000.png)
### Solution
This issue normally happens when the Integrated Security option is set in the Database tab of the {{ en.DPS }} settings.
To solve the issue, the service account of the {{ en.DPS }} IIS Application Pool and the service account of the DevolutionsSchedulerService in the services need Read permission on the encryption.config file that is located in the App_Data subfolder of the {{ en.DPS }} web application folder.
To navigate to the web application folder, you can use the Explore content of website directory button from the {{ en.DPS }} Console.  
![Explore content of website directory.png](/img/en/kb/kb8001.png)  
![Windows File Explorer.png](/img/en/kb/kb8002.png)
