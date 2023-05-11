---
title: Import and Export Data Source
---
To simplify deployment for multiple users, it is possible to export and import data source configurations. The generated .rdd file contains all the information to recreate the configuration. Please note that the .rdd file does not include the database content. Only the configuration is exported. Use the entry's [Export](File_Export) functionality to backup or copy the database's content.  

Use ***File – Data Sources*** to access the import or export functionality.  
![Data Sources - Import and Export](/img/en/rdm/windows/clip11263.png) 

{% snippet icon.badgeCaution %} 
Whether or not users can ***Read/Write*** in [Offline mode](/rdm/windows/data-sources/offline-mode/) is first decided at the data source's [Caching mode](/rdm/windows/data-sources/offline-mode/offline-read-write/) level. This cannot be changed remotely. If you wish to prevent or allow remote users the ***Read/Write*** offline feature, you should do so before exporting your data source. 
{% endsnippet %}
 
{% snippet icon.shieldWarning %} 
A locked data source can be exported and imported, but the content will be locked unless a password is entered when the data source is selected. See [Lock Data Source](/rdm/windows/data-sources/lock/) for more information. 
{% endsnippet %}
 

