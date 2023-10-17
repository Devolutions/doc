---
eleventyComputed:
  title: Configure an Active Directory Synchronizer entry in {{ en.RDM }}
  description: This topic covers every option in the Active Directory Synchronizer entry.
  keywords:
  - Active Directory
  - Synchronizer
---
Every field from the ***Active Directory Synchronizer*** entry is described below.  
{% snippet icon.badgeInfo %}
To learn more about creating and managing an Active Directory, please consult the documentation on the official website.
{% endsnippet %}
{% snippet icon.badgeInfo %}
Please note that the <a href="#schedule">***Schedule*** tab</a> is only available in a {{ en.DVLS }} data source. Also needs the {{ en.DVLS }} ***Scheduler*** to be set up.
{% endsnippet %}

The entry can be found under ***New Entry*** – ***Synchronizer***:  
![Active Directory Synchronizer](https://webdevolutions.azureedge.net/docs/en/kb/KB0078.png)  
![General tab](https://webdevolutions.azureedge.net/docs/en/kb/KB0079.png)  
* ***Name***: Entry name in {{ en.RDM }}
* ***Folder***: Which {{ en.RDM }} folder the entry will be in
* ***Credentials***: Read more on [***Credentials*** options](/rdm/windows/commands/edit/entries/entry-credentials-options/)
* ***Synchronize automatically***: The {{ en.RDM }} entry will synchronize automatically with Active Directory

### General tab
* ***Mode***
  * ***Custom***: Choose which ***Domain machines*** and ***OU/Containers*** to get the information from
  * ***LDAP***: To extract Active Directory computer information using LDAP query
    * ***Path***: Read more about this option by clicking the ***Help*** button
  * ***My domain***: Use the current domain
  * ***Ping domain before synchronization***: Verifies if the domain is up before synchronization
* ***Domain machine***: Set the domain machine by clicking on the ellipsis button
* ***OU/Container DN***: Select the OUs or Containers by clicking on the ellipsis button
* ***Test Connection***: Test the connection
* ***Preview***: List of imported machines
* ***Use LDAP over SSL*** If enabled, uses the secure LDAP protocol
  * ***Default***: Default LDAPS port 636; click on ***Default*** to set a different port
  * ***Port generator***: Generate a port

### Settings
![Settings tab](https://webdevolutions.azureedge.net/docs/en/kb/KB0080.png)  
* ***Destination folder***: Click the ellipsis button to set the folder path in the {{ en.RDM }} tree view (which can only be in the same {{ en.VLT }}).
* ***Template***: [Entry template](/rdm/windows/commands/file/templates/creating-templates/) created within {{ en.RDM }}
* ***Create folders from OU/containers***
  * ***Level***: From 0 to 100, 0 being the top container in Active Directory
  * ***Folder template***: Folder template created in {{ en.RDM }} that will apply to new folders
* ***Session name***: The name for the session
  * ***Common name***: The name that represents an object, used to perform searches (if empty, uses OU)
  * ***DNS host name (FQDN)***: The Domain Name System
  * ***Host and description***: Host name and description
* ***Session name prefix***: A prefix for the session
* ***Session name suffix***: A suffix for the session
* ***Host***: How the host properties will be written in the field
  * ***Same as session name***: Host and entry names will be the same
  * ***Common name***: The name that represents an object, used to perform searches (if empty, uses OU)
  * ***DNS host name (FQDN)***: The Domain Name System
  * ***Same as template host***: Same name as the applied template
  * ***Host and description***: Host name and description
* ***Import description***: Import the description of the machine from the Active Directive

### Login
![Login tab](https://webdevolutions.azureedge.net/docs/en/kb/KB0081.png)  
* ***Username***: Username for the domain
* ***Domain***: Domain for the Active Directory
* ***Password***: Password for the domain
* ***Merge username and domain***: Merges username and domain

### Filters
![Filters tab](https://webdevolutions.azureedge.net/docs/en/kb/KB0082.png)  
* ***Type***: LDAP syntax filters can be used in many situations in Active Directory
  * ***All***: Default filter
  * ***Server***: Adds a filter to only include Windows Server
* ***Other filter***: Read more about this option by clicking the ***Help*** button
* ***Preview***: Preview of the applied filters

### Search
![Search tab](https://webdevolutions.azureedge.net/docs/en/kb/KB0083.png)  
* ***Search scope***
  * ***Subtree***: Searches the root
  * ***One-Level***: Searches on the folder level only
* ***Duplicate check*** will not import entries with the same type and host
  * ***Root***: Check for duplicates within the whole data source
  * ***Destination folder***: Check for duplicates only within the {{ en.RDM }} destination folder or subfolder

### Advanced
![Advanced tab](https://webdevolutions.azureedge.net/docs/en/kb/KB0084.png)  
* ***Silent mode***: This option disables error dialogs (useful when the synchronizer runs automatically at set intervals)
* ***Verify folder on mismatch***: During synchronization, if enabled, verifies each connection and compares to already existing ones; ***Verify on folder mismatch*** will also check the path
* ***Action on entry mismatch***
  * ***None***: Do nothing
  * ***Update non-critical fields on mismatch***: Updates the ***Active Directory*** description in {{ en.RDM }}, the ***Import description*** option needs to be enabled in the ***Settings*** tab (not available with ***None*** option)
  * ***Delete***: Delete that entry
  * ***Move to***: Move to selected ***Destination folder***
  * ***Make expired***: Mark that entry as expired (expiration message can be set up)

### Schedule
![Schedule tab](https://webdevolutions.azureedge.net/docs/en/kb/KB0085.png)  
* ***Enabled***: Schedule being on/off
  * ***Every (Days)***: Interval between when the synchronizer runs
  * ***At***: Specific time to synchronize
