---
title: Overview
---

Use the File - Export to export entries from {{ en.RDM }} for Mac . Below is a list of export options:  

* Export All Entries (.rdm) 
* Export Selection (.rdm) 
* Export Entry as Remote Desktop File (.rdp) 
* Export Special (All entries .csv, .html, .xml and All Selection (.csv, .html, .xml) 

{% snippet icon.badgeInfo %} 
The export feature is only active if the import [Permission](/rdm/mac/commands/administration/user-management/permissions/) has been enabled inside the user account 
{% endsnippet %}

{% snippet icon.badgeInfo %} 
The only appropriate format to import the entries back into Remote Desktop Manager is the .rdm format. 
{% endsnippet %}
 
## Settings 

![File - Export](/img/en/rdm/mac/clip10315.png) 

{% snippet icon.badgeInfo %} 
When using an [Advanced Data Source](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/) , export capabilities can be disabled via security policies at the data source level (no one can export) or at a user level (particular users can't export). See [Security Group Management](/rdm/mac/commands/administration/security-group-management/) for more information. 
{% endsnippet %}
 
### Export All Entries (.rdm) 

Export all entries in a .rdm file that can be imported into any {{ en.RDM }} for Mac data source. You can also include the credentials in this export format and secure your file with a master key.  

{% snippet icon.badgeInfo %} 
By default the credentials are NOT included. It's critical to check the Credentials option in order for the exported data to include the credentials. 
{% endsnippet %}
 
{% snippet icon.badgeWarning %} 
By default the credentials are NOT included. It's critical to check the Credentials option in order for the exported data to include the credentials. 
{% endsnippet %}
 
![Export all entries (.rdm)](/img/en/rdm/mac/clip10316.png) 

### Export Selection (.rdm) 

Export the selected session in a .rdm file that can be imported into any {{ en.RDM }} for Mac data source. You can also include the credentials in this export format and secure your file with a master key. 

### Export Entry as Remote Desktop File (.rdp) 

Export the selected entry in a .rdp file to easily use it outside {{ en.RDM }} for Mac . 

### Export Special (.csv) 

Export entries using the .csv format file. For security reasons the .csv file will be contained within a password encrypted zip file. This type of security can be hacked using brute force attacks, it should be used only when the zip file is under your exclusive control. 

{% snippet icon.badgeInfo %} 
Please note that the csv columns will vary depending on entry types being exported.  This makes it the wrong format if ever you want to import the data back in Remote Desktop Manager.  Use this only to migrate to another system. 
{% endsnippet %}
 
### Export Special (.html) 

Export all entries within a AES-256 to encrypt self contained html file. See Export Html Encrypted topic for more information. 

### Export Special (.xml) 

Because it brought confusion to our user base, this export format has been converted to perform the exact same export as the “Export all entries“ but sets the file extension to .xml instead. 

