---
eleventyComputed:
  title: Data recovery
---
In the event of data loss due to hardware failure, it is still possible to recover data from your storage device if it is still useable.
## Solution
1. On the storage device that failed, navigate to **C:\Users\%USERNAME%\AppData\Local\Devolutions** and copy the entire RemoteDesktopManager or RemoteDesktopManagerFree folder.  

This folder will contain the local data source (SQLite or XML) as well as your configuration file.
2. Paste this folder at the same place on your new computer and you should retrieve your data.  
{% snippet icon.badgeInfo %}
The path mentioned here are for those that have installed using the default settings. The best way to locate your configuration folder is to use ***File - Options - Advanced***, in this form you will find a hyperlink near the bottom. This opens your configuration folder.
{% endsnippet %}  
{% snippet icon.badgeInfo %}
File based data sources (XML, SQLite, etc.) are by default stored in that configuration folder. As a precaution, go through each data source in ***File - Data sources*** and have a look at the local path (if any). Any file that is in the configuration folder should be copied to ensure full data recovery.
{% endsnippet %}
