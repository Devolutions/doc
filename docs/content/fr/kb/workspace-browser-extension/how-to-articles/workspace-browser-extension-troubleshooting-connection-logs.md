---
eleventyComputed:
  title: Résolution de problème des journaux de connexion dans le {{ fr.WBEX }}
  description: Lorsqu’un problème survient avec le {{ fr.WBEX }}, il se peut que l’équipe d’assistance technique vous demande de fournir des journaux. Ces derniers renferment des informations qui seront d’une grande aide à notre département de génie logiciel.
---
Lorsqu’un problème survient avec le {{ fr.WBEX }}, il se peut que l’équipe d’assistance technique vous demande de fournir des journaux. Ces derniers renferment des informations qui seront d’une grande aide à notre département de génie logiciel. Pour y accéder, veuillez vous référer aux étapes suivantes :

1. Dans le navigateur, effectuer un clic droit sur l’icône du {{ fr.WBEX }}.
1. Cliquer sur ***Gérer les extensions***.
1. Activer le ***Mode développeur***.
![!!KB4003](https://cdnweb.devolutions.net/docs/fr/kb/KB4003.png)
1. Dans la même fenêtre, sous ***Examiner les vues***, cliquer sur le lien ***background/background.html***. La fenêtre ***DevTools*** devrait maintenant s’afficher.
![!!KB4004](https://cdnweb.devolutions.net/docs/fr/kb/KB4004.png)
1. Dans le menu contextuel du {{ fr.WBEX }}, cliquer sur le bouton ***Actualiser***.
![!!KB4005](https://cdnweb.devolutions.net/docs/fr/kb/KB4005.png)
1. Dans la fenêtre ***DevTools***, cliquer sur ***Réseau***.
![!!KB4006](https://cdnweb.devolutions.net/docs/fr/kb/KB4006.png)
1. Dans l’onglet ***Réseau***, un des items sur la liste devrait être en rouge. Il s’agit du moment où la récupération des identifiants par {{ fr.RDM }} a échoué. Il suffit maintenant de cliquer dessus.
1. Prendre une capture d’écran de l’entièreté du message et l’envoyer à l’adresse : [service@devolutions.net](mailto:service@devolutions.net).
