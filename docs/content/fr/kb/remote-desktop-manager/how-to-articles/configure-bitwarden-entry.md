---
eleventyComputed:
  title: Configure a Bitwarden entry in {{ en.RDM }}
  description: There are two types of Bitwarden entries in {{ en.RDM }}; this topic will explain how each one works.
  keywords:
  - Bitwarden
---
In {{ en.RDM }} there are the <a href="#credential-management">***Credential Management***</a> and <a href="#synchronizer">***Synchronizer***</a> entry types for Bitwarden, this topic will explain how each one works.
{% snippet icon.badgeCaution %}
Email ***Authentication mode*** is now deprecated for ***Bitwarden*** entries and unavailable from 2023.2 onwards.
{% endsnippet %}

{% snippet icon.badgeInfo %}
The integration of credentials from password managers is only available in the Team version of {{ en.RDM }}.
{% endsnippet %}

{% snippet icon.badgeHelp %}
To learn more about creating and managing a Bitwarden account, please consult the [documentation](https://bitwarden.com/help/) on their official website.
{% endsnippet %}

## Credential Management
Here is a description for each field or option, in order from top to bottom. The entry can be found under ***New Entry*** – ***Credential Management*** – ***Password Management***.
![Credential Management](https://cdnweb.devolutions.net/docs/en/kb/KB0066.png)
![General tab](https://cdnweb.devolutions.net/docs/en/kb/KB0067.png)
* ***Name***: Entry name in {{ en.RDM }}
* ***Folder***: Which {{ en.RDM }} folder the entry will be in

### General tab
* ***Host***
  * ***Default***: Default Bitwarden URL
  * ***Custom***: Custom URL for Bitwarden
* ***Use "My Account Settings"***: Go to ***File*** – ***My Account Settings*** – ***Settings*** – ***Password Management*** and click on ***Bitwarden*** to set up this option first; replaces the ***Username*** and ***Password*** fields
* ***Client ID***: The API key’s Client ID
* ***Client secret***: The API key’s Client Secret
* ***Master password***: Bitwarden's master password for that account
* ***Always ask password***: Always be prompted for the master password when accessing this entry
* ***Credentials***
  * Click on the ellipsis button to pick a specific credential for this entry
  * ***Always prompt with list***: Prompts the user with a list of all the available credentials instead of a specific one

## Synchronizer
Here is a description for each field or option, in order from top to bottom. The entry can be found under ***New Entry*** – ***Synchronizer***:
![Synchronizer](https://cdnweb.devolutions.net/docs/en/kb/KB0068.png)
![General tab](https://cdnweb.devolutions.net/docs/en/kb/KB0069.png)
* ***Name***: Entry name in {{ en.RDM }}
* ***Folder***: Which {{ en.RDM }} folder the entry will be in
* ***Credentials***: Read more on [***Credentials*** options](/rdm/windows/commands/edit/entries/entry-credentials-options/)
* ***Synchronize automatically***: The {{ en.RDM }} entry will synchronize automatically with Bitwarden

### General tab
* ***Host***
  * ***Default***: Default Bitwarden URL
  * ***Custom***: Custom URL for Bitwarden
* ***Client ID***: Bitwarden's Client ID
* ***Client secret***: Bitwarden's Client secret
* ***Master password***: Bitwarden's master password
* ***Destination folder***: Click the ellipsis button to set the folder path in the {{ en.RDM }} tree view (which can only be in the same {{ en.VLT }}).
* ***Template***: Bitwarden template created within {{ en.RDM }}
* ***Duplicate check*** will not import entries with the same type and host
  * ***Root***: Check for duplicates within the whole data source
  * ***Destination folder***: Check for duplicates only within the {{ en.RDM }} destination folder or subfolder

### Filter
![Filter tab](https://cdnweb.devolutions.net/docs/en/kb/KB0070.png)
* ***Filter box***: It will load the Bitwarden {{ en.VLT }} to let the user pick the wanted Organizations/Collections for synchronization
* ***Filter severity***
  * ***Normal***: Accounts that are either in the selected folders or collections will be returned
  * ***Strict***: Accounts that are both in the selected folders and collections will be returned
* ***Create tags for Organizations/Collections***: If enabled, organization and collection tags from Bitwarden will be added to the {{ en.RDM }} entry

### Advanced
![Advanced tab](https://cdnweb.devolutions.net/docs/en/kb/KB0071.png)
* ***Session name prefix***: A prefix for the entry
* ***Session name suffix***: A suffix for the entry
* ***Action on entry mismatch***
  * ***None***: Do nothing
  * ***Delete***: Delete that entry
  * ***Move to***: Move to selected ***Destination folder***
  * ***Make expired***: Mark that entry as expired
* ***Silent mode***: This option disables error dialogs (useful when the synchronizer runs automatically at set intervals)
