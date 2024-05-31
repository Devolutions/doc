---
eleventyComputed:
  title: La déconnexion de Microsoft RDP se bloque {{ fr.RDMWIN }}
  description: Les deux causes sont les plug-ins RDP et l'utilisation de UDP dans certaines conditions.
  keywords:
  - Blocages
  - RDP
---
Les deux causes sont les plug-ins RDP et l'utilisation de UDP dans certaines conditions.
## Solution pour les plug-ins RDP
Aller dans l'onglet ***Expérience*** de vos sessions RDP et régler ***Charger les plug-ins en mode intégré*** sur ***Non***. Cette solution a un faible impact.
![Charger les plug-ins en mode intégré](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4054.png)
## Solution pour l'utilisation de UDP
Il existe une option dans {{ fr.RDM }} pour désactiver l'utilisation de UDP.
1. Ouvrir {{ fr.RDM }} en tant qu'administrateur.
1. Cliquer sur ***Outils – Plus d'outils – Gestionnaire Local RDP/RemoteApp***.
1. Cliquer sur ***Désactiver*** pour désactiver les ***Paramètres UDP***.
![Paramètres UDP](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4055.png)

La recherche pour cette solution indique que cela est causé uniquement lors de l'utilisation à travers un VPN, d'autres mentionnent que cela se produit uniquement sur Windows 8 associé à un serveur Gateway, mais cela a fonctionné pour beaucoup de nos utilisateurs.

Cela nécessite un changement dans le registre, donc toutes les mises en garde habituelles s'appliquent ici, faites d'abord une sauvegarde ! Consultez cet [article de support Microsoft](https://support.microsoft.com/en-us/help/256986/windows-registry-information-for-advanced-users) pour plus d'informations.
### La correction consiste à désactiver UDP sur la station de travail cliente :
1. Naviguer vers HKLM\SOFTWARE\Policies\Microsoft\Windows NT\Terminal Services\Client.
1. Créer une valeur DWORD nommée fClientDisableUDP et lui attribuer une valeur de 1.
