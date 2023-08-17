---
eleventyComputed:
  title: Access data source cannot open
  description: The access data source is only supported by Microsoft in 32bit. Please use {{ en.RDM }} 32 bit instead.
  keywords:
  - Access data source
  - 32 bit
---
Receiving the following message upon opening an Access Datasource: ***The Access data source is only supported by Microsoft in 32bit. Please use {{ en.RDM }} 32bit instead***.

![RDM Access data source error window](https://webdevolutions.azureedge.net/docs/en/kb/KB2002.png) 

## Solution 
Simply head out to your {{ en.RDM }} (Or {{ en.RDM }} Free) installation folder, by default being **Program Files (x86)\Devolutions** and look for **RemoteDesktopManager.exe**. Running this instance will solve your issue.
