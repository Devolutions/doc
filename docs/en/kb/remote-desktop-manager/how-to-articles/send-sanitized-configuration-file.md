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
1. In the ***Configuration file export*** dialog that appears, ensure that the following options are NOT checked: 
   * ***Saved templates*** 
   * ***{{ en.DA }} credentials*** 
   * ***Include data source credentials*** 
4. Press ***Export***, give the file a meaningful name (If you have a ticket number, use it for a name). 
5. Send that file to the support team by following the instructions in [Securely send a file to our team](/kb/devolutions-customer-success/securely-send-file/). 
