---
_schema: default
eleventyComputed:
  title: 'Capturer le trafic réseau avec WireShark dans {{ fr.RDMMAC }}'
  description: 'Comment capturer le trafic réseau en utilisant WireShark dans {{ fr.RDMMAC }}. '
  status:
  keywords:
---
**Wireshark** est un analyseur de réseau open source largement utilisé qui capture et affiche les détails du trafic réseau en temps réel. Il est particulièrement utile pour le dépannage, l'analyse de protocole et la sécurité réseau.

1. Télécharger [les images disque de WireShark](https://www.wireshark.org/download.html).

   {% snippet, "badgeInfo" %}Il n'est pas nécessaire d'installer WireShark dans le dossier Applications ; vous devriez pouvoir l'exécuter directement à partir des images disque.{% endsnippet %}

2. Exécuter les **images disque**.
3. Installer le pilote de capture comme demandé. Pour ce faire, cliquer sur le lien Installer **CHModBPF** et exécuter l'installateur de paquet.
4. Relancer **WireShark** et double-cliquer sur l'interface réseau utilisée (par exemple, ethernet, wifi).
5. &nbsp;Cela lancera la capture de paquets pour cette interface. Vous pouvez confirmer que les paquets sont capturés car ils apparaissent dans la fenêtre.
6. Reproduire l'échec de connexion en utilisant {{ fr.RDMMAC }}.
7. Terminer la capture en utilisant le carré rouge en haut à gauche de la fenêtre **WireShark**.
8. Choisir **Fichier - Enregistrer sous**… et sauvegarder le **fichier .pcapng**. Si vous avez besoin d'aide pour le dépannage, l'envoyer à [service@devolutions.net](service@devolutions.net).
9. Pour nettoyer, désinstaller le pilote de capture en choisissant **Fichier - À propos de WireShark**.
10. Dans **Dossiers**, double-cliquer sur le lien sous **Extras macOS**. Cela ouvrira un dossier avec divers fichiers .pkg
11. Exécuter le **Uninstall ChmodBPG.pkg** pour retirer le pilote de capture, puis fermer WireShark.