---
eleventyComputed:
  title: '{{ en.VLT_MAJ }}'
  order: 60
---
The ***{{ en.VLT }}s*** allow the users to [Create Entries](/server/web-interface/vault/entries/create-entries-manually/) and manage the content of the data source. {{ en.VLT_MAJ }} s are containers that divide the data source into multiple compartments.  

We recommend using {{ en.VLT }}s for improved organization and security. {{ en.VLT_MAJ }} s also help performance as they limit the number of entries that load at once.  

{% snippet icon.badgeHelp %} 
To access the {{ en.VLT }}s management, navigate to [Administration – {{ en.VLT_MAJ }}s](/server/web-interface/administration/security-management/vaults/). 
{% endsnippet %}
 
***{{ en.VLT_MAJ }}s*** are divided in two parts:  

* The ***{{ en.NPANE }}*** (left) lists the entries available in the data source (current {{ en.VLT }}).  
* The ***Content Area*** (right) displays information regarding the selected entry.  

![{{ en.VLT_MAJ }}s](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8023.png) 
