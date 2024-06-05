---
eleventyComputed:
  title: "{{ fr.DGW }} configuration dans {{ fr.RDM }}"
  order: 40
  description: Les instructions suivantes expliquent comment utiliser {{ fr.DGW }} dans une session RDP.
  keywords:
  - RDP
  - VPN
---
Les instructions suivantes expliquent comment utiliser {{ fr.DGW }} dans une session RDP.

## Étapes

1. Sélectionner une session RDP et ouvrir sa boîte de dialogue ***Propriétés***.
1. Aller à ***Connexion*** – ***VPN/SSH/Gateway*** – ***VPN/SSH/Gateway*** – ***Général***.
1. Dans la section ***Général***, définir l'option ***Type*** sur {{ fr.DGW }}.
![{{ fr.DGW }}](https://cdnweb.devolutions.net/docs/docs_en_hub_DGW0008.png)
1. Dans la même section, définir l'option ***Connecter*** sur ***Toujours connecter***.
![Toujours Connecter](https://cdnweb.devolutions.net/docs/docs_en_hub_DGW0009.png)
1. Dans l'onglet ***Paramètres ({{ fr.DGW }})***, sélectionner la passerelle configurée dans [Configuration {{ fr.DHUBB }}](/dgw/hub/hub-business-configuration/).
![Paramètres](https://cdnweb.devolutions.net/docs/docs_en_hub_DGW0007.png)
{% snippet, "badgeInfo" %}
Pour supprimer le délai de cinq secondes lors de l'ouverture d'une connexion, définir la valeur ***Délai*** sur 0 dans l'onglet ***Avancé***.
{% endsnippet %}

6. Une fois la session RDP connectée, l'entrée de journal suivante devrait se trouver dans ***Rapports*** – ***Sessions de passerelle***, qui sont situées dans l'interface web de {{ fr.DHUB }}.
![Rapports – Sessions de passerelle](https://cdnweb.devolutions.net/docs/docs_en_hub_DGW0052.png)
