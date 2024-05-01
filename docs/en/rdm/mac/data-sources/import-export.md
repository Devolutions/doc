---
eleventyComputed:
  title: Import or export a data source
  order: 30
---
To simplify deployment for multiple users, it is possible to export and import data source configurations. The generated .rdd file contains all the information to recreate the configuration.

{% snippet icon.badgeCaution %}
The RDD file does not include the content of the data source; only the configuration is exported. Use the entry's export functionality to back up or copy the content of the database.
{% endsnippet %}

Use the data source dialog (File-Data Sources...) to access the import or export of the file.
![Data Sources – Import/Export](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip5068.png)

{% snippet icon.badgeWarning %}
A locked data source can be exported and imported, but its content will not be accessible for use unless a password is entered when the data source is selected. See [Lock Data Source](/rdm/mac/data-sources/lock/) for more information.
{% endsnippet %}
