---
eleventyComputed:
  title: Dynamic credential linking
  description: Dynamic credential linking creates a single credential entry for a supported credential manager and uses this credential with any entry type that supports the credential repository.
---
Dynamic credential linking creates a single credential entry for a supported credential manager and uses this credential with any entry type that supports the credential repository.

## Supported credential managers 

{% snippet icon.badgeInfo %} 
The following credential entries are only supported with {{ en.RDM }} Team.
{% endsnippet %}

Here is the list of all implemented credential managers that support dynamic credential linking:  

* 1Password 
* Bitwarden 
* Dashlane 
* {{ en.DHUB }} 
* {{ en.DVLS }} 
* KeePass 
* Keeper 
* LastPass 
* Mateso Password Safe 
* PassPortal 
* Password List 
* Password Manager Pro 
* Password Safe 
* PasswordState 
* Pleasant Password Server 
* RoboForm 
* Secret Server 
* Sticky Password 
* TeamPass 
* True Key 
* Zoho Vault 

{% snippet icon.badgeInfo %} 
A dynamic credential link can also be applied to a Folder or a VPN entry type if desired. 
{% endsnippet %}
 
## Settings 

1. Create a credential entry and check ***Always prompt with list***.
![1Password Settings](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11064.png) 
1. When creating a entry, select ***Credential repository*** from the ***Credentials*** drop-down list, then select the credential entry created in the previous step. Notice that a new action appears just below the credential selection drop down list.  
![Select from List](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11065.png) 
1. Select a credential from the list.  
![LastPass Credentials list](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10657.png) 
1. The link changes to the name of the credential. To remove linked credential and bring back automatic list prompt, simply click on the "X".  
![Name of the credential](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11066.png) 
