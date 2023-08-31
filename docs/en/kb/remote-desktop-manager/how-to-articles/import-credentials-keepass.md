---
title: Import credentials from KeePass
---
{{ en.RDM }} imports credentials from KeePass. It is a simple way to build your data. The imported information can be converted into three types of entry: ***Username/Password*** and ***Website*** The entries include credentials, URL addresses and notes.

### Import various entries
{% youtube '0Oq4gLkF88A' %}  

## Procedure

### Export entries from KeePass

1. In the ***File*** menu, click ***Export***+  
![!!KB4250](https://webdevolutions.azureedge.net/docs/en/kb/KB4250.png)
1. Export Data to an external file. {{ en.RDM }} supports two file types for KeePass: XML and CSV. An XML file will retain the folder structure from KeePass.  
   1. Choose desired file type: ***KeePass CSV (1.x)*** or ***KeePass XML (2.x)***.
   1. Select path to save the exported file.  
      ![!!KB4251](https://webdevolutions.azureedge.net/docs/en/kb/KB4251.png)

### Import data into {{ en.RDM }}

1. The data is imported into the currently selected folder.  
![!!KB4252](https://webdevolutions.azureedge.net/docs/en/kb/KB4252.png)
1. Choose the file type to import in ***File – Import***.
   1. To import an xml file, choose ***Import from Session***.  
      ![!!KB4253](https://webdevolutions.azureedge.net/docs/en/kb/KB4253.png)
   1. To import a csv file, choose ***Import from Login***.  
      ![!!KB4254](https://webdevolutions.azureedge.net/docs/en/kb/KB4254.png)
1. Choose an entry type. All imported entries are converted to this type.  
   ![!!KB4255](https://webdevolutions.azureedge.net/docs/en/kb/KB4255.png)
   | Option      | Description |
   | ----------- | ----------- |
   | Credentials | Includes username, password and domain. |
   | Website     | Includes username, password, and website address. Good choice for website information and can be used with {{ en.DWL }} Has more settings for default web browser, display, credentials and security questions. |

1. Select the KeePass exported file in the file explorer and click ***Open***.
1. Choose the entries you want to import.  
![!!KB4256](https://webdevolutions.azureedge.net/docs/en/kb/KB4256.png)
1. The imported entries are ready to use.  
![!!KB4257](https://webdevolutions.azureedge.net/docs/en/kb/KB4257.png)
