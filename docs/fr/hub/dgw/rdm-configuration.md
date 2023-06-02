---
eleventyComputed:
  title: Configuration de {{ fr.DGW }} dans {{ fr.RDM }}
  order: 40
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
![{{ fr.DGW }}](https://webdevolutions.azureedge.net/docs/fr/hub/DGW0008.png)
1. Dans la même section, définir l'option ***Se connecter*** sur ***Toujours connecté***.  
![Toujours connecté](https://webdevolutions.azureedge.net/docs/fr/hub/DGW0009.png)
1. Dans l'onglet ***Paramètres (Devolutions Gateway)***, sélectionner la passerelle configurée dans la [Configuration du {{ fr.DHUB }} Business](/fr/hub/dgw/hub-business-configuration/).  
![Paramètres](https://webdevolutions.azureedge.net/docs/fr/hub/DGW0007.png)
{% snippet icon.badgeInfo %}
Pour supprimer le délai de cinq secondes lors de l'ouverture d'une connexion, définir la valeur ***Délai*** comme 0 dans l'onglet ***Avancé***.
{% endsnippet %}  

6. Une fois la session RDP connectée, l'entrée de journal suivante doit se trouver dans ***Rapports – Sessions de Gateway***, qui sont situés dans l'interface web de {{ fr.DHUB }}.  
![Rapports – Sessions de Gateway](https://webdevolutions.azureedge.net/docs/fr/hub/DGW0011.png)
