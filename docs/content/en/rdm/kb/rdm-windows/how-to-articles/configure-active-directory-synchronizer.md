---
eleventyComputed:
  title: Configure an Active directory synchronizer entry in {{ en.RDM }}
  description: This topic covers every option in the Active Directory Synchronizer entry.
---
Every field from the ***Active Directory Synchronizer*** entry is described below.
{% snippet, "badgeInfo" %}
To learn more about creating and managing an Active Directory, please consult the documentation on the official website.
{% endsnippet %}
{% snippet, "badgeInfo" %}
Please note that the [***Schedule*** tab](#schedule) is only available in a {{ en.DVLS }} data source. Also needs the {{ en.DVLS }} ***Scheduler*** to be set up.
{% endsnippet %}

## Synchronizer
The entry can be found under ***New Entry*** – ***Synchronizer***:
![Active Directory Synchronizer](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0078.png)
![Active Directory Synchronizer entry](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0079.png)
* ***Name***: Entry name in {{ en.RDM }}
* ***Folder***: Which {{ en.RDM }} folder the entry will be in
* ***Credentials***: Read more on [***Credentials*** options](/rdm/windows/commands/edit/entries/entry-credentials-options/)
* ***Synchronize automatically***: The {{ en.RDM }} entry will synchronize automatically with Active Directory

### General tab
![General tab](https://cdnweb.devolutions.net/docs/RDMW6044_2024_2.png)
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
* ***Destination folder***: Choose a destination folder.
* ***Template***: Select a template.
### Log in
![Login tab](https://cdnweb.devolutions.net/docs/RDMW6045_2024_2.png)
* ***Username***: Username for the domain
* ***Domain***: Domain for the Active Directory
* ***Password***: Password for the domain
* ***Merge username and domain***: Merges username and domain

### Fields
![Fields](https://cdnweb.devolutions.net/docs/RDMW6046_2024_2.png)
Choose which fields will always be synchronized, and which will not. For example, you could choose not to synchronize the description, because you want to edit it yourself.

* ***Field***: Select which fields will always be synchronized, and which will not
* ***Session name***: Choose between ***Common name***, ***DNS host name (FQDN)***, and ***Host and description***. 
* ***Session name prefix***: A prefix for the entry that will be created through the synchronizer
* ***Session name suffix***: A suffix for the entry that will be created through the synchronizer

### Filters
![Filters tab](https://cdnweb.devolutions.net/docs/RDMW6047_2024_2.png)
* ***Type***: LDAP syntax filters can be used in many situations in Active Directory
    * ***All***: Default filter
    * ***Server***: Adds a filter to only include Windows Server
* ***Other filter***: Read more about this option by clicking the ***Help*** button
* ***Preview***: Preview of the applied filters

### Advanced
![Advanced tab](https://cdnweb.devolutions.net/docs/RDMW6048_2024_2.png)
* ***Silent mode***: This option disables error dialogs (useful when the synchronizer runs automatically at set intervals)
* ***Verify folder on mismatch***: During synchronization, if enabled, verifies each connection and compares to already existing ones; ***Verify on folder mismatch*** will also check the path
* ***Create virtual folders***: Allow the creation of virtual folders.
* ***Search scope***
    * ***Subtree***: Searches the root
    * ***One-Level***: Searches on the folder level only
* ***Duplicate check*** will not import entries with the same type and host
    * ***Root***: Check for duplicates within the whole data source
    * ***Destination folder***: Check for duplicates only within the {{ en.RDM }} destination folder or subfolder
* ***Action on entry mismatch***
    * ***None***: Do nothing
    * ***Delete***: Delete that entry
    * ***Move to***: Move to selected ***destination folder***
    * ***Make expired***: Mark that entry as expired (expiration message can be set up)

### Schedule
![Schedule tab](https://cdnweb.devolutions.net/docs/RDMW6049_2024_2.png)
* ***Enabled***: Schedule being on/off
    * ***Every (Days)***: Interval between when the synchronizer runs
    * ***At***: Specific time to synchronize