---
eleventyComputed:
  title: Configure an Active Directory entry in {{ en.RDM }}
  description: This topic covers every option in the Active Directory Synchronizer entry.
  keywords:
  - Active Directory
  - Synchronizer
---
Every field from the ***Active Directory*** synchronizer entry is described below.  
{% snippet icon.badgeInfo %}
To learn more about creating and managing an Active Directory, please consult the documentation on the official website.
{% endsnippet %}

The entry can be found under ***New Entry*** – ***Synchronizer***:  
![Active Directory Synchronizer](https://webdevolutions.azureedge.net/docs/en/kb/KB0078.png)  
![General tab](https://webdevolutions.azureedge.net/docs/en/kb/KB0079.png)  
* ***Name***: Entry name in {{ en.RDM }}
* ***Folder***: Which {{ en.RDM }} folder the entry will be in
* ***Credentials***: Read more on [***Credentials*** options](/rdm/windows/commands/edit/entries/entry-credentials-options/)
* ***Synchronize automatically***: The {{ en.RDM }} entry will synchronize automatically with ***Active Directory***

### General tab
* ***Mode***
  * ***Custom***: 
  * ***LDAP***: 
    * ***Path***: Read more about this option by clicking the ***Help*** button
  * ***My domain***: 
  * ***Ping domain before synchronization***: 
* ***Domain machine***: Set the domain machine by clicking on the ellipsis button
* ***OU/Container DN***: 
* ***Test Connection***: 
* ***Preview***: 
* ***Use LDAP over SSL*** 
  * ***Default***: 
  * ***Port generator***: 

### Settings
![Settings tab](https://webdevolutions.azureedge.net/docs/en/kb/KB0080.png)  
* ***Destination folder***: Click the ellipsis button to set the folder path in the {{ en.RDM }} tree view (which can only be in the same vault)
* ***Template***: ***Active Directory*** template created within {{ en.RDM }}
* ***Create folders from OU/containers***
  * ***Level***: From 0 to 100, 0 being the top container in ***Active Directory***
  * ***Folder template***: 
* ***Session name***: The name for the session
* ***Session name prefix***: A prefix for the session
* ***Session name suffix***: A suffix for the session
* ***Host***
  * ***Same as session name***: 
  * ***Common name***: 
  * ***DNS host name (FQDN)***: 
  * ***Same as template host***: 
  * ***Host and description***: 
* ***Import description***: 

### Login
![Login tab](https://webdevolutions.azureedge.net/docs/en/kb/KB0081.png)  
* ***Username***: Username for the domain
* ***Domain***: Domain for the ***Active Directory***
* ***Password***: Password for the domain
* ***Merge username and domain***: 

### Filters
![Filters tab](https://webdevolutions.azureedge.net/docs/en/kb/KB0082.png)  
* ***Type***: 
  * ***All***: 
  * ***Server***: 
* ***Other filter***: Read more about this option by clicking the ***Help*** button
* ***Preview***: Preview of the applied filters

### Search
![Search tab](https://webdevolutions.azureedge.net/docs/en/kb/KB0083.png)  
* ***Search scope***
  * ***Subtree***: 
  * ***One-Level***: 
* ***Duplicate check*** will not import entries with the same type and host
  * ***Root***: Check for duplicates within the whole data source
  * ***Destination folder***: Check for duplicates only within the {{ en.RDM }} destination folder or subfolder

### Advanced
![Advanced tab](https://webdevolutions.azureedge.net/docs/en/kb/KB0084.png)  
* ***Silent mode***: This option disables error dialogs (useful when the synchronizer runs automatically at set intervals)
* ***Verify folder on mismatch***: 
* ***Action on entry mismatch***
  * ***None***: Do nothing
  * ***Update non-critical fields on mismatch***: 
  * ***Delete***: Delete that entry
  * ***Move to***: Move to selected ***Destination folder***
  * ***Make expired***: Mark that entry as expired (expiration message can be set up)
