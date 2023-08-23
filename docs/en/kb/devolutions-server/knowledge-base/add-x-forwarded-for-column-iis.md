---
title: Add X-Forwarded-For column in IIS 8.5 and later versions
---
Follow the steps below to add X-Forwarded-For column into IIS 8.5 logs:  
1. Open IIS Manager.
1. On server, site or application level, double click ***Logging***.
1. Click ***Select Fields***.
1. In ***W3C Logging Fields*** window, click ***Add Field***.
1. In the ***Add Custom Field*** window, fill out the following fields:  
    1.***Field Name***: X-Forwarded-For, ***Source type***: Request Header, ***Source***: X-Forwarded-For
1. Click ***OK*** in both open windows.
1. Click ***Apply*** in the actions pane.  
![!!KB4772.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4772.png)  
Wait for a new log file to be created in the logs folder. Column changes will be effective when a new log file is created.
## Command Line

```
%systemroot%\system32\inetsrv\APPCMD.EXE set config -section:system.applicationHost/sites /+"[name='Default Web Site'].logFile.customFields.[logFieldName='X-Forwarded-For',sourceName='X-Forwarded-For',sourceType='RequestHeader']" /commit:apphost
```