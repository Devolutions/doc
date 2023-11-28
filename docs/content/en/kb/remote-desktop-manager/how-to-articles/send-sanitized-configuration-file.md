---
eleventyComputed:
  title: Send a sanitized copy of your configuration file
  description: Send a copy of your {{ en.RDM }} configuration file that does not have any credentials included.
  keywords:
  - Sanitized copy
  - Configuration file
---
This topic describes how to send a copy of your {{ en.RDM }} configuration file that does not have any credentials included. This may be requested by our support team to try and reproduce an issue. 

1. In {{ en.RDM }}, use ***File – Options***.
1. At the bottom of the navigation tree view, press ***Export Options***.  
![File – Options – Export Options](https://webdevolutions.azureedge.net/docs/en/kb/KB2331.png)  
1. In the ***Configuration file export*** dialog, the following options are disabled by default. Double-check that they really are unchecked.
   * ***Saved templates*** 
   * ***{{ en.DA }} credentials*** 
   * ***Include data source credentials***  

   ![Uncheck Saved templates, {{ en.DA }} credentials, and Include data source credentials](https://webdevolutions.azureedge.net/docs/en/kb/KB2332.png)  
4. All data sources are also disabled by default. Double-check that they really are unchecked. To make sure, click on the ***Unselect All*** button at the bottom.  
![Uncheck all data sources](https://webdevolutions.azureedge.net/docs/en/kb/KB2333.png)  
1. Click on ***Export***.
1. Give the file a meaningful name (if you have a support ticket number, use it as the file name), then click ***Save***.
1. Send the file to our support team by following the instructions in [Securely send a file to our team](/kb/devolutions-customer-success/securely-send-file/). 
