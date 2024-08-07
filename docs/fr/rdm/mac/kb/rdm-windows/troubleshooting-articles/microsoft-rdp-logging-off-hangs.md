---
eleventyComputed:
  title: Microsoft RDP se déconnecte et reste bloqué {{ fr.RDMWIN }}
  description: Les deux causes sont les plug-ins RDP et l'utilisation de UDP dans certaines conditions.
---
Les deux causes sont les plug-ins RDP et l'utilisation de UDP dans certaines conditions.

## Solution pour les plug-ins RDP
Cette solution a un faible impact.
1. Dans {{ fr.RDM }}, aller aux propriétés de votre entrée de session RDP.
1. Dans la section ***Général***, aller à l'onglet ***Expérience*** et régler ***Charger les plug-ins en mode intégré*** sur ***Non***.
1. Cliquer sur ***Mettre à jour*** pour sauvegarder vos modifications.

## Solution pour l'utilisation de UDP
Voir [Désactiver l'utilisation de UDP](/rdm/kb/rdm-windows/troubleshooting-articles/disable-udp-usage/) pour plus d'informations.