---
eleventyComputed:
  title: Essential information about credential property GUIDs in {{ en.RDM }}
  description: To optimize storage efficiency, the system employs default values for most fields.
  keywords: 
  - GUID
  - XML
---
To optimize storage efficiency, the system employs default values for most fields. As a result, if a field retains its default value, it will be omitted from the displayed content. Therefore, it is important to be mindful of any newly added fields that appear in the updated content.  

Credentials are subject to a distinct handling process that involves the utilization of GUIDs when referencing other entries. However, when employing alternative mechanisms, they are associated with predefined, static well-known GUIDs.  

{% snippet icon.badgeInfo %}
There are [additional GUIDs](/kb/devolutions-powershell/devolutions-server/xml-information/) that are exclusive to {{ en.DVLS }} with the PAM module enabled.
{% endsnippet %}

| Setting                                            | Well-known GUID                               |
|----------------------------------------------------|-----------------------------------------------|
| Default                                            | " "                                           |
| Credential repository --- Prompt on connection ---  | "45479560-173E-435D-8848-C22F863FDC96"        |
| Embedded                                           | Should be used for backwards compatibility only, not listed |
| Parent (only for sub entries)                       | "E2CC9029-CA3A-4308-BA54-16D5029BC8ED"        |
| Inherited                                          | "1310CF82-6FAB-4B7A-9EEA-3E2E451CA2CF"        |
| My personal credentials                            | "9F3C3BCF-068A-4927-B996-CA52154CAE3B"        |
| None                                               | "B87B29D9-9239-4D7B-86D8-9B53DCD3BA9F"        |
| {{ en.UVLT }}, paired with PersonalConnectionID    | "245A4245-48E7-4DF5-9C4C-11861D8E1F81"        |
| {{ en.UVLT }} Search, paired with CredentialPrivateVaultsearchString | "88E4BE76-4C5B-4694-AA9C-D53B7E0FE0DC"        |

**Sample script for {{ en.RDM }}**  
```
$session.CredentialConnectionID = "1310CF82-6FAB-4B7A-9EEA-3E2E451CA2CF"
Set-RDMSession $session -Refresh
```
