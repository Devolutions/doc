---
eleventyComputed:
  title: La déconnexion de Microsoft RDP se bloque {{ fr.RDMWIN }}
  description: Les deux causes sont les plug-ins RDP et l'utilisation de l'UDP dans certaines conditions.
---
Les deux causes sont les plug-ins RDP et l'utilisation de l'UDP dans certaines conditions.

## Solution pour les plug-ins RDP
Cette solution a un faible impact.
1. Dans {{ fr.RDM }}, aller aux propriétés de votre entrée de session RDP.
![Propriétés de la session RDP](https://cdnweb.devolutions.net/docs/RDMW2058_2024_2.png)
1. Dans la section ***Général***, aller à l'onglet ***Expérience*** et régler ***Charger les plug-ins en mode intégré*** sur ***Non***.
![Général – Expérience – Charger les plug-ins en mode intégré](https://cdnweb.devolutions.net/docs/RDMW2065_2024_2.png)
1. Cliquer sur ***Mettre à jour*** pour sauvegarder vos modifications.

## Solution pour l'utilisation de l'UDP
Voir [Désactiver l'utilisation de l'UDP](/rdm/kb/rdm-windows/troubleshooting-articles/disable-udp-usage/) pour plus d'informations.