---
eleventyComputed:
  title: Search in {{ en.PVLT }}
keywords:
- Private vault
---
The {{ en.PVLT }} Search allows to link a {{ en.PVLT }} credential entry to a session by providing the name of the credential entry. Once the credential is found it will automatically be used to open your remote session.  

## Settings 

1. Create a credential entry in the {{ en.PVLT }} .  
![User Vault](/img/en/rdm/mac/clip6004.png) 
1. In the remote session, set the Credentials property to {{ en.PVLT }} search and enter the exact name of the {{ en.PVLT }} credential. The search is not case sensitive, if more than one entry has the same name or if no entry matches the searched name, you will be prompted with a list of all available {{ en.PVLT }} credentials. Variables are supported as well.  
![RDP Session - User Vault Search](/img/en/rdm/mac/clip6006.png) 
1. Open the session as you would normally proceed. Once the credential is found it will automatically be used to open the remote session. 

{% snippet icon.badgeInfo %} 
The {{ en.PVLT }} is linked to the database user. Another user will never be able to see your {{ en.PVLT }} credentials. 
{% endsnippet %}
 

