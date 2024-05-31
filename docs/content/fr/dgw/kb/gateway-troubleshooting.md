---
eleventyComputed:
  title: Dépanner {{ fr.DGW }}
  description: Ce sujet couvre des conseils sur le dépannage de {{ fr.DGW }} à travers plusieurs produits.
---
## Vérifier la santé d'une passerelle
Il est possible de vérifier si une passerelle particulière est vivante et en bonne santé.

1. Ouvrir un navigateur web.
1. Dans la barre d'adresse, taper `https://<gateway.url>:<external port>/jet/health`.
   {% snippet, "badgeInfo" %}
   Selon la configuration, cela pourrait aussi être `http`.
   {% endsnippet %}
1. Appuyer sur <kbd>Entrée</kbd>.  
![Vérification de santé](https://cdnweb.devolutions.net/docs/DGW0000_2024_1.png)

## Journaux et diagnostics de {{ fr.DGW }}
Si vous rencontrez des problèmes avec une passerelle, ces solutions peuvent faciliter la recherche d'erreurs plus évidentes.

1. Dans l'interface web de {{ fr.DVLS }}, aller à ***Administration*** – ***{{ fr.DGW }}***.
1. Cliquer sur ***Plus*** sur la passerelle désirée.  
![Bouton Plus](https://cdnweb.devolutions.net/docs/DGW0001_2024_1.png)
1. Choisir entre [***Journaux***](#devolutions-gateway-logs) ou [***Diagnostics***](#devolutions-gateway-diagnostics).

### Journaux de {{ fr.DGW }}
1. Cliquer sur ***Journaux***.  
![Journaux](https://cdnweb.devolutions.net/docs/DGW0002_2024_1.png)
1. Observer les journaux.  
![Fenêtre des journaux](https://cdnweb.devolutions.net/docs/DGW0006_2024_1.png)

### Diagnostics de {{ fr.DGW }}
1. Cliquer sur Diagnostics.  
![Diagnostics](https://cdnweb.devolutions.net/docs/DGW0004_2024_1.png)
1. Observer les statuts.  
![Statut de la passerelle](https://cdnweb.devolutions.net/docs/DGW0005_2024_1.png)
