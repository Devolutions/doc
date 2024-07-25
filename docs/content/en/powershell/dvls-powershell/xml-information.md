---
eleventyComputed:
  title: Essential information about credential property GUIDs in {{ en.DVLS }}
  description: To optimize storage efficiency, the system employs default values for most fields.
  keywords: 
  - GUID
  - XML
---
To optimize storage efficiency, the system employs default values for most fields. As a result, if a field retains its default value, it will be omitted from the displayed content. Therefore, it is important to be mindful of any newly added fields that appear in the updated content.  

Credentials are subject to a distinct handling process that involves the utilization of GUIDs when referencing other entries. However, when employing alternative mechanisms, they are associated with predefined, static well-known GUIDs.  

{% snippet, "badgeInfo" %}
There are [additional GUIDs](/powershell/rdm-powershell/xml-information/) used in {{ en.RDM }}.
{% endsnippet %}

| Setting               | Well-known GUID                               |
|-----------------------|-----------------------------------------------|
| Default               | " "                                           |
| Privileged account    | "56EDBCA3-E76A-457B-8F6A-6B78F3D084CE"        |
| My privileged account | "0BCD4B51-1E29-4FCF-9B01-15684E1FA033"        |

#### Sample script for {{ en.DVLS }}
```powershell
$session.CredentialConnectionID = "56EDBCA3-E76A-457B-8F6A-6B78F3D084CE"
Set-RDMSession $session -Refresh
```
