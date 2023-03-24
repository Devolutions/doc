---
title: Configuration Remote Desktop Manager
---
Les instructions suivantes expliquent comment utiliser {{ fr.DGW }} dans une session RDP.

## Étapes 

1. Sélectionnez une session RDP et ouvrez sa boîte de dialogue ***Propriétés***. 
1. Allez dans ***Connexion*** – ***VPN/SSH/Passerelle*** – ***VPN/SSH/Passerelle*** – ***Général***.
1. Dans la section ***Général***, définissez l'option ***Type*** sur {{ fr.DGW }} . 
![{{ fr.DGW }}](/img/fr/server/DGW0008.png) 
*{{ fr.DGW }}*{.caption} 
1. Dans la même section, définissez l'option ***Se connecter*** sur ***Toujours connecté***. 
![Toujours connecté](/img/fr/server/DGW0009.png) 
*Toujours connecté*{.caption} 
1. Dans l'onglet ***Paramètres (Devolutions Gateway)***, sélectionnez la passerelle configurée dans la [Configuration {{ fr.DPS }}](/server/dgw/fr/server-configuration/) . 
![Paramètres](/img/fr/server/DGW0007.png) 
*Paramètres*{.caption} 
1. Pour supprimer le délai de 5 secondes lors de l'ouverture d'une connexion, définissez la valeur ***Délai*** comme 0 dans l'onglet ***Avancé***. 
![Avancé – Délai d'attente après exécution – Délai](/img/fr/server/DGW0011.png) 
*Avancé – Délai d'attente après exécution – Délai*{.caption} 
1. Une fois la session RDP connectée, l'entrée de journal suivante doit se trouver dans ***Rapports – Journaux de la source de données***, qui sont situés dans l'interface web de {{ fr.DVLS }} . 
![Rapports – Journaux de la source de données](/img/fr/server/DGW0010.png) 
*Rapports – Journaux de la source de données*{.caption} 
