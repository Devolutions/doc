---
eleventyComputed:
  title: Désactiver l'utilisation de UDP dans {{ fr.RDM }}
  description: Désactiver l'utilisation de UDP peut parfois résoudre des problèmes, notamment ceux liés à {{ fr.RDM }} se bloquant pendant le processus de déconnexion d'une session RDP.
---
Désactiver l'utilisation de UDP peut parfois résoudre des problèmes, notamment ceux liés à {{ fr.RDM }} se bloquant pendant le processus de déconnexion d'une session RDP. Vous pouvez le désactiver [via {{ fr.RDM }}](#disable-udp-usage-via-remote-desktop-manager) ou [via le registre](#disable-udp-usage-via-the-registry).

## Désactiver l'utilisation de UDP via {{ fr.RDM }}

### Sur toutes les sessions
1. Exécuter {{ fr.RDM }} en tant qu'administrateur.
1. Dans le ruban, aller à ***Outils – Plus d'outils***.
![Outils – Plus d'outils](https://cdnweb.devolutions.net/docs/RDMW2060_2024_2.png)
1. Sélectionner le ***Gestionnaire local RDP/RemoteApp*** dans la liste des outils.
![Gestionnaire local RDP/RemoteApp](https://cdnweb.devolutions.net/docs/RDMW2061_2024_2.png)
1. Désactiver les paramètres UDP.
![Désactiver les paramètres UDP](https://cdnweb.devolutions.net/docs/RDMW2062_2024_2.png)

### Sur une base par session
1. Dans {{ fr.RDM }}, s'assurer d'abord que l'accrochage d'API RDP est activé dans ***Fichier – Paramètres – Types – Sessions – Bureau à distance (RDP) – Activer l'accrochage d'API***. Sauvegarder vos changements si applicable.
![Fichier – Paramètres – Types – Sessions – Bureau à distance (RDP) – Activer l'accrochage d'API](https://cdnweb.devolutions.net/docs/RDMW2063_2024_2.png)
1. Sélectionner votre entrée RDP et aller à ses propriétés.
![Propriétés de l'entrée RDP](https://cdnweb.devolutions.net/docs/RDMW2058_2024_2.png)
1. Dans la section ***Général***, aller à l'onglet ***Avancé*** et régler ***Désactiver le transport UDP*** sur ***Oui***.
![Général – Avancé – Désactiver le transport UDP](https://cdnweb.devolutions.net/docs/RDMW2064_2024_2.png)
1. Cliquer sur ***Mettre à jour*** pour sauvegarder vos changements.

## Désactiver l'utilisation de UDP via le registre sur la station de travail cliente
1. Dans l'Éditeur du Registre, naviguer jusqu'à **HKLM\SOFTWARE\Policies\Microsoft\Windows NT\Terminal Services\Client**.
1. Créer une valeur DWORD nommée ***fClientDisableUDP*** et lui attribuer une valeur de ***1***.

Consulter cet article de support Microsoft pour plus d'informations : [Informations sur le registre Windows pour les utilisateurs avancés](https://support.microsoft.com/en-us/help/256986/windows-registry-information-for-advanced-users).