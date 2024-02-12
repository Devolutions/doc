---
eleventyComputed:
  title: Import/export a data source
---
{% tabs %}
{% tabItem "Windows" %}
To simplify deployment for multiple users, it is possible to export and import data source configurations. The generated .rdd file contains all the information to recreate the configuration.

{% snippet icon.badgeCaution %}
The .rdd file does not include the database content. Only the configuration is exported. Use the entry's export functionality to back up or copy the content of the database.
{% endsnippet %}  

Use ***File – Data Sources*** to access the import or export functionality.  
![Data Sources - Import and Export](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11263.png) 

{% snippet icon.badgeCaution %} 
Whether or not users can ***Read/Write*** in [Offline mode](/rdm/windows/data-sources/offline-mode/) is first decided at the data source's [Caching mode](/rdm/windows/data-sources/offline-mode/offline-read-write/) level. This cannot be changed remotely. If you wish to prevent or allow remote users the ***Read/Write*** offline feature, you should do so before exporting your data source. 
{% endsnippet %}
 
{% snippet icon.shieldWarning %} 
A locked data source can be exported and imported, but the content will be locked unless a password is entered when the data source is selected. See [Lock Data Source](/rdm/windows/data-sources/lock/) for more information. 
{% endsnippet %}
{% endtabItem %}

{% tabItem "macOS" %}
To simplify deployment for multiple users, it is possible to export and import data source configurations. The generated .rdd file contains all the information to recreate the configuration. Please note that the .rdd file does not include the database content. Only the configuration is exported. Use the entries [Export](/rdm/mac/commands/file/export/overview/) functionality to backup or copy the database's content.  

Use the data source dialog (File-Data Sources...) to access the import or export of the file.  
![Data Sources – Import/Export](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip5068.png) 

{% snippet icon.badgeWarning %} 
A locked data source can be exported and imported, but its content will not be accessible for use unless a password is entered when the data source is selected. See [Lock Data Source](/rdm/mac/data-sources/lock/) for more information. 
{% endsnippet %}
{% endtabItem %}
{% endtabs %}