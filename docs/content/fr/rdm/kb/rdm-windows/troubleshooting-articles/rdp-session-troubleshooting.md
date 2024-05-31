---
eleventyComputed:
  title: Dépannage de session RDP
  description: Si vous rencontrez des problèmes avec votre session RDP dans {{ fr.RDM }}, vous pouvez entreprendre certaines mesures pour le diagnostic ou la résolution.
---
Si vous rencontrez des problèmes avec votre session RDP dans {{ fr.RDM }}, vous pouvez entreprendre certaines mesures pour le diagnostic ou la résolution. Commencer par [désactiver l'accrochage d'API RDP](#disable-rdp-api-hooking). Ensuite, si cela ne fonctionne toujours pas, [générer et envoyer les fichiers journaux](#generate-and-send-rdp-api-hooking-log-files) à notre équipe de support.

## Désactiver l'accrochage d'API RDP

L'accrochage d'API Microsoft RDP est activé par défaut dans {{ fr.RDM }}. L'accrochage d'API est requis pour étendre la fonctionnalité du client Microsoft RDP tant en modes intégré (ActiveX) qu'externe (mstsc).

1. Dans {{ fr.RDM }}, aller à ***Fichier – Paramètres – Types – Sessions – Bureau à distance (RDP)***.
1. Définir ***Activer l'accrochage d'API*** sur ***Désactivé***.
![Désactiver l'accrochage d'API](https://cdnweb.devolutions.net/docs/RDMW2026_2024_1.png)
1. Cliquer sur ***Enregistrer***.
1. Redémarrer votre application {{ fr.RDM }} pour appliquer le changement.

Essayer d'accéder à nouveau à votre session RDP. Si vous rencontrez toujours des problèmes pour accéder à votre session RDP, essayer la solution suivante.

## Générer et envoyer les fichiers journaux d'accrochage d'API RDP

L'accrochage d'API Microsoft RDP permet de consigner des événements internes et des options qui n'étaient pas possibles auparavant.

1. Dans {{ fr.RDM }}, aller à ***Fichier – Paramètres – Types – Sessions – Bureau à distance (RDP)***.
1. Si vous avez désactivé l'accrochage d'API dans la section précédente, le réactiver en définissant ***Activer l'accrochage d'API*** sur ***Activé***.
![Activer l'accrochage d'API](https://cdnweb.devolutions.net/docs/RDMW2028_2024_1.png)
1. Définir le ***Niveau de journalisation*** sur ***Débogage***.
![Définir le Niveau de journalisation sur Débogage](https://cdnweb.devolutions.net/docs/RDMW2027_2024_1.png)
1. Cliquer sur ***Enregistrer***.
1. Redémarrer votre application {{ fr.RDM }} pour appliquer les changements.
1. Envoyer le fichier journal de votre session RDP sous **%LocalAppData%\MsRdpEx** à notre équipe de support : [Envoyer un fichier de manière sécurisée à notre équipe](/rdm/kb/general-knowledge/securely-send-file/).
