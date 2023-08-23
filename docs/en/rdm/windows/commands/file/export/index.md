---
title: Export
---
Use ***File – Export*** to export vaults from {{ en.RDM }}. 

{% snippet icon.badgeInfo %} 
The export feature is only active if the ***Import*** and ***Export Privileges*** has been enabled inside the ***User Management*** account. 
{% endsnippet %}
 
{% snippet icon.badgeNotice %} 
The only appropriate formats to import vaults back into {{ en.RDM }} are the .rdm and .rdx format. 
{% endsnippet %}
 
## Settings 

![File - Export](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10502.png) 

{% snippet icon.badgeInfo %} 
When using an [Advanced Data Source](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/), export capabilities can be disabled via security policies at the data source level (no one can export) or at a user level (particular users cannot export). 
{% endsnippet %}
 
### Export vault (.rdm) 

Export a vault in a .rdm file that can be imported into any {{ en.RDM }} data source. You can also include credentials in this export format and secure your file with a master key.  

{% snippet icon.badgeInfo %} 
By default the credentials are NOT included. It is critical to check the ***Credentials*** option in order for the exported data to include the credentials. 
{% endsnippet %}
 
{% snippet icon.badgeWarning %} 
Specifying a ***Master key*** will encrypt the whole content of the .rdm file to protect its content. It is highly recommended as a backup measure, but the key is absolutely necessary for decryption. Preserve this as well in a separate storage device for safekeeping. 
{% endsnippet %}
 
![!!clip10103.png](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10103.png) 

### Export vault (.json) 

Export a vault in a .json file format. You can also include credentials in this export format and secure your file with a master key. 

### Export All Host List (.csv) 

Export a simple host list in .csv format. You will be prompted to see if you wish the export to be slightly more detailed and include the following information: Host, Description, Display Name, Group, User Groups. 

### Export vault (.csv) 

Export the vault using the .csv format file. For security reasons the .csv file will be contained within a password encrypted zip file. This type of security can be hacked using brute force attacks, it should be used only when the zip file is under your exclusive control. 
{% snippet icon.badgeInfo %} 
Please note that the csv columns will vary depending on entry types being exported. This makes it the wrong format if ever you want to import the data back in {{ en.RDM }}. Use this only to migrate to another system. 
{% endsnippet %}
 
### Export Vault (.html) 

Export the vault with an AES-256 to encrypt self contained html file. See [Export Html Encrypted](/rdm/windows/commands/file/export/html-encrypted/) topic for more information. 

### Export vault (.xml) 

Because it brought confusion to our user base, this export format has been converted to perform the exact same export as the ***Export Vault*** but sets the file extension to .xml instead. 

### Export All Documents 

Export all attachments or all document entries that are linked to your data source.  
![Export Documents](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10044.png) 

### Export "my personal credentials" (.rdm) 

Export your ***My Personal Credentials*** in a .rdm file and encrypt with a ***Master key***. 
{% snippet icon.badgeWarning %} 
A ***Master key*** will encrypt the .rdm file to protect its content. The key is absolutely necessary for decryption. 
{% endsnippet %}
