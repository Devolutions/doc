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
![{{ fr.DGW }}](https://cdnweb.devolutions.net/docs/fr/server/DGW0008.png)
1. Dans la même section, définir l'option ***Se connecter*** sur ***Toujours connecté***.
![Toujours connecté](https://cdnweb.devolutions.net/docs/fr/server/DGW0009.png)
1. Dans l'onglet ***Paramètres ({{ fr.DGW }})***, sélectionner la passerelle configurée dans la [Configuration pour le {{ fr.DVLS }}](/fr/server/dgw/server-configuration/).
![Paramètres](https://cdnweb.devolutions.net/docs/fr/server/DGW0007.png)
{% snippet, "badgeInfo" %}
Pour supprimer le délai de cinq secondes lors de l'ouverture d'une connexion, définir la valeur ***Délai*** comme 0 dans l'onglet ***Avancé***.
{% endsnippet %}

6. Une fois la session RDP connectée, l'entrée de journal suivante doit se trouver dans ***Rapports – Journaux de la source de données***, qui sont situés dans l'interface Web de {{ fr.DVLS }}.
![Rapports – Journaux de la source de données](https://cdnweb.devolutions.net/docs/fr/server/DGW0010.png)
