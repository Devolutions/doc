---
eleventyComputed:
  title: Export
---
Use the ***File – Export*** to export entries from {{ en.RDMMAC }}. Below is a list of export options:

* Export All Entries (.rdm)
* Export Selection (.rdm)
* Export Entry as Remote Desktop File (.rdp)
* Export Special All entries (.csv, .html, .xml) and All Selection (.csv, .html, .xml)

{% snippet, "badgeInfo" %}
The export feature is only active if the import [Permission](/rdm/mac/commands/administration/user-management/permissions/) has been enabled inside the user account
{% endsnippet %}

{% snippet, "badgeInfo" %}
The only appropriate format to import the entries back into {{ en.RDM }} is the .rdm format.
{% endsnippet %}

## Settings

![File – Export](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10315.png)

{% snippet, "badgeInfo" %}
When using an [Advanced Data Source](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/), export capabilities can be disabled via security policies at the data source level (no one can export) or at a user level (particular users cannot export).
{% endsnippet %}

### Export All Entries (.rdm)

Export all entries in a .rdm file that can be imported into any {{ en.RDMMAC }} data source. You can also include the credentials in this export format and secure your file with a master key.

{% snippet, "badgeInfo" %}
By default the credentials are NOT included. It is critical to check the Credentials option for the exported data to include the credentials.
{% endsnippet %}

{% snippet, "badgeWarning" %}
By default the credentials are NOT included. It is critical to check the Credentials option for the exported data to include the credentials.
{% endsnippet %}

![Export all entries (.rdm)](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10316.png)

### Export Selection (.rdm)

Export the selected session in a .rdm file that can be imported into any {{ en.RDMMAC }} data source. You can also include the credentials in this export format and secure your file with a master key.

### Export Entry as Remote Desktop File (.rdp)

Export the selected entry in a .rdp file to easily use it outside {{ en.RDMMAC }}.

### Export Special (.csv)

Export entries using the .csv format file. For security reasons the .csv file will be contained within a password encrypted zip file. This type of security can be hacked using brute force attacks, it should be used only when the zip file is under your exclusive control.

{% snippet, "badgeInfo" %}
Please note that the csv columns will vary depending on entry types being exported.  This makes it the wrong format if ever you want to import the data back in {{ en.RDM }}.  Use this only to migrate to another system.
{% endsnippet %}

### Export Special (.html)

Export all entries within a AES-256 to encrypt self contained html file. See [Export Html Encrypted](/rdm/windows/commands/file/export/html-encrypted/) for more information.

### Export Special (.xml)

Because it brought confusion to our user base, this export format has been converted to perform the exact same export as the “Export all entries“ but sets the file extension to .xml instead.
