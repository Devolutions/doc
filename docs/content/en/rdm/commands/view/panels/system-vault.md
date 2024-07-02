---
eleventyComputed:
  title: System {{ en.VLT }}
  description: The System {{ en.VLT }} is available for Advanced data sources to centralize commonly shared entries across vaults and is only accessible by administrators.
---
The ***System {{ en.VLT }}*** is available for [Advanced data sources](/rdm/data-sources/data-sources-types/advanced-data-sources/) to centralize commonly shared entries across vaults and is only accessible by administrators. The ***System {{ en.VLT }}*** can be found under the ***View*** tab in the ribbon or in the {{ en.NPANE }}. It can be used within a Microsoft SQL Server, Azure SQL Server, {{ en.DVLS }}, or {{ en.DHUB }}.
![Ribbon](https://cdnweb.devolutions.net/docs/RDMW0003_2024_2.png)
![{{ en.NPANE }}](https://cdnweb.devolutions.net/docs/RDMW0004_2024_2.png)

Only ***Contacts***, ***Macros/scripts/tools*** and ***VPNs/tunnels/gateways*** entry types are available to be created and stored in the ***System {{ en.VLT }}***. The entries can then be organized with folders.

{% snippet, "badgeInfo" %}
***Macros/scripts/tools*** entry types can only be created through {{ en.RDM }}.
{% endsnippet %}

## Linking System {{ en.VLT }} entries to {{ en.VLT }} entries

### Entry permissions
In either a {{ en.DVLS }} or {{ en.DHUB }} data source, you may modify the permissions of folders or entries through the respective web interfaces. You may not modify the root permissions of the System {{ en.VLT }}.

### Linking a System {{ en.VLT }} contact entry
1. Go into the ***Properties*** of an entry that supports linked contact.
1. Under ***View*** – ***Asset***, click the ellipsis button (***…***) in the ***Owner*** field.
![Owner option](https://cdnweb.devolutions.net/docs/RDMW0005_2024_2.png)
1. Pick a ***System {{ en.VLT }}*** contact to link to the entry.
![System {{ en.VLT }} contact](https://cdnweb.devolutions.net/docs/RDMW0006_2024_2.png)
1. Click ***Ok*** and then click ***Update*** to save the changes.

### Linking a System {{ en.VLT }} macro/script/tool entry
1. Go into the ***Properties*** of a relevant entry.
1. Under ***Connection*** – ***Events*** go to the ***After open*** tab.
1. Pick ***Macro/script/tool*** from the dropdown list.
1. Click on the second dropdown and select a ***System {{ en.VLT }}*** macro/script/tool entry to link with this entry.
![System {{ en.VLT }} macro/script/tool entry](https://cdnweb.devolutions.net/docs/RDMW0007_2024_2.png)
1. Click on ***Update*** to save the changes.

### Linking a System {{ en.VLT }} VPN/tunnel/gateway entry
1. Select an entry that supports using a VPN connection and go into the ***Properties***.
1. Under ***Connection*** – ***VPN/tunnel/gateway*** set the ***Connect*** value.
1. Click on the ellipsis button (***…***) next to the ***Type*** option.
![Type option](https://cdnweb.devolutions.net/docs/RDMW0008_2024_2.png)
1. Under the ***Existing*** tab select the ***Linked (vault)*** ***Session*** type.
1. Click the field next to it to select and link the ***System {{ en.VLT }}*** VPN/tunnel/gateway entry.
![System {{ en.VLT }} VPN/tunnel/gateway entry](https://cdnweb.devolutions.net/docs/RDMW0009_2024_2.png)
1. Click ***Ok*** and then click ***Update*** to save the changes.
