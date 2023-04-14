---
eleventyComputed:
  title: Configuration dans {{ fr.RDM }}
  description: Les instructions suivantes expliquent comment utiliser {{ fr.DGW }} dans une session RDP.
  keywords:
  - RDP
  - VPN
---
Les instructions suivantes expliquent comment utiliser {{ fr.DGW }} dans une session RDP.

## Étapes 

1. Sélectionner une session RDP et ouvrez sa boîte de dialogue ***Propriétés***. 
1. Aller dans ***Connexion*** – ***VPN/SSH/Passerelle*** – ***VPN/SSH/Passerelle*** – ***Général***.
1. Dans la section ***Général***, définir l'option ***Type*** sur {{ fr.DGW }}.  
![{{ fr.DGW }}](/img/fr/server/DGW0008.png) 
*{{ fr.DGW }}*{.caption} 
1. Dans la même section, définir l'option ***Se connecter*** sur ***Toujours connecté***.  
![Toujours connecté](/img/fr/server/DGW0009.png) 
*Toujours connecté*{.caption} 
1. Dans l'onglet ***Paramètres (Devolutions Gateway)***, sélectionner la passerelle configurée dans la [Configuration pour le {{ fr.DPS }}](/fr/server/dgw/server-configuration/).  
![Paramètres](/img/fr/server/DGW0007.png) 
*Paramètres*{.caption} 
{% snippet icon.badgeInfo %}
Pour supprimer le délai de cinq secondes lors de l'ouverture d'une connexion, définir la valeur ***Délai*** comme 0 dans l'onglet ***Avancé***.
{% endsnippet %}  

6. Une fois la session RDP connectée, l'entrée de journal suivante doit se trouver dans ***Rapports – Journaux de la source de données***, qui sont situés dans l'interface web de {{ fr.DVLS }}.  
![Rapports – Journaux de la source de données](/img/fr/server/DGW0010.png) 
*Rapports – Journaux de la source de données*{.caption} 
