---
eleventyComputed:
  title: Import or export a data source
  order: 30
---
To simplify deployment for multiple users, it is possible to export and import data source configurations. The generated .rdd file contains all the information to recreate the configuration. Please note that the .rdd file does not include the database content. Only the configuration is exported. Use the entries [Export](/rdm/mac/commands/file/export/overview/) functionality to backup or copy the database's content.  

Use the data source dialog (File-Data Sources...) to access the import or export of the file.  
![Data Sources – Import/Export](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip5068.png) 

{% snippet icon.badgeWarning %} 
A locked data source can be exported and imported, but its content will not be accessible for use unless a password is entered when the data source is selected. See [Lock Data Source](/rdm/mac/data-sources/lock/) for more information. 
{% endsnippet %}
