---
eleventyComputed:
  title: Configure a Bitwarden entry in {{ en.RDM }}
  description: There are two types of Bitwarden entries in {{ en.RDM }}; this topic will explain how each one works.
  keywords:
  - Bitwarden
---
In {{ en.RDM }} there are the <a href="#credential-management">***Credential Management***</a> and <a href="#synchronizer">***Synchronizer***</a> entry types for Bitwarden, this topic will explain how each one works.
{% snippet icon.badgeCaution %}
Email ***Authentication mode*** is now deprecated for Bitwarden entries.
{% endsnippet %}  
{% snippet icon.badgeInfo %}
To learn more about creating and managing a Bitwarden account, please consult the documentation on their official website.
{% endsnippet %}

## Credential Management
Here is a description for each field or option, in order from top to bottom. The entry can be found under ***New Entry*** – ***Credential Management*** – ***Password Management***:  
![Credential Management](https://webdevolutions.azureedge.net/docs/en/kb/KB0066.png)  
![General tab](https://webdevolutions.azureedge.net/docs/en/kb/KB0067.png)  
* ***Name***: Entry name in {{ en.RDM }}
* ***Folder***: Which {{ en.RDM }} folder the entry will be in

### General tab
* ***Host***:
  * ***Default***: 
  * ***Custom***: Custom URL for Bitwarden
* ***Use "My Account Settings"***: 
* ***Client ID***: Bitwarden's Azure AD Application (Client) ID
* ***Client secret***: Bitwarden's Azure AD Client secret
* ***Master password***: Bitwarden's master password
* ***Always ask password***: Always be prompted for the master password when accessing this entry
* ***Credentials***:
  * Click on the ellipsis button to pick a specific credential for this entry
  * ***Always prompt with list***: Prompts the user with a list of all the available credentials instead of a specific one

## Synchronizer
Here is a description for each field or option, in order from top to bottom. The entry can be found under ***New Entry*** – ***Synchronizer***:  
![Synchronizer](https://webdevolutions.azureedge.net/docs/en/kb/KB0068.png)  
![General tab](https://webdevolutions.azureedge.net/docs/en/kb/KB0069.png)  
* ***Name***: Entry name in {{ en.RDM }}
* ***Folder***: Which {{ en.RDM }} folder the entry will be in
* ***Credentials***: Pick the preferred ***Credentials*** option
* ***Synchronize automatically***: The {{ en.RDM }} entry will synchronize automatically with Bitwarden

### General tab
* ***Host***:
  * ***Default***: 
  * ***Custom***: Custom URL for Bitwarden
* ***Client ID***: Bitwarden's Azure AD Application (Client) ID
* ***Client secret***: Bitwarden's Azure AD Client secret
* ***Master password***: Bitwarden's master password
* ***Destination folder***: Click the ellipsis button to set the folder path in the {{ en.RDM }} tree view (can only be in the same vault)
* ***Template***: Bitwarden template created within {{ en.RDM }}
* ***Duplicate check***
  * ***Root***: 
  * ***Destination folder***: Check for duplicates only within the {{ en.RDM }} destination folder

### Filter
![Filter tab](https://webdevolutions.azureedge.net/docs/en/kb/KB0070.png)  
* ***Filter severity***:
  * ***Normal***: 
  * ***Strict***: 
* ***Create tags for Organizations/Collections***:

### Advanced
![Advanced tab](https://webdevolutions.azureedge.net/docs/en/kb/KB0071.png)  
* ***Session name prefix***: A preffix for the session
* ***Session name suffix***: A suffix for the session
* ***Action on entry mismatch***
  * ***None***: Do nothing
  * ***Delete***: Delete that entry
  * ***Move to***:
  * ***Make expired***: Mark that entry as expired
* ***Silent mode***:
