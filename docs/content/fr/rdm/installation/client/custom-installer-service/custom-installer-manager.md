---
eleventyComputed:
  title: "{{ fr.CIM }}"
  description: Dans {{ fr.RDM }}, cliquer sur Fichier – {{ fr.DA }} – Se connecter pour se connecter à votre {{ fr.DA }} si vous n'êtes pas déjà connecté.
---
{% snippet, "badgeNotice" %}
Pour des raisons de stabilité, la dernière version de {{ fr.RDM }} est mise à disposition avec un petit délai pour les installateurs personnalisés afin de s'assurer qu'aucun problème majeur n'est présent. Nous recommandons d'utiliser ce temps avec votre organisation pour effectuer des tests d'intégration sur quelques postes de travail avant de mettre à niveau toute votre équipe.
{% endsnippet %}

## Créer un paquet d'installation

1. Dans {{ fr.RDM }}, cliquer sur ***Fichier – {{ fr.DA }} – Se connecter*** pour se connecter à votre {{ fr.DA }} si vous n'êtes pas déjà connecté.
![{{ fr.DA }} se connecter](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2211.png)
1. Sous ***Outils***, cliquer sur ***{{ fr.CIM }}*** pour créer un nouveau {{ fr.CI }} avec des paramètres spécifiques.
![Fichier – {{ fr.DA }} – {{ fr.CIM }}](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11247.png)
1. Cliquer sur ***Nouveau Paquet***.
![{{ fr.CIM }} – Nouveau paquet](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11251.png)
1. Sélectionner la ***Version*** de l'application dans la liste déroulante. Un ***Nom*** pour votre paquet sera généré automatiquement, que vous pouvez changer si vous le souhaitez. Vous pouvez également écrire une brève ***Description*** de votre paquet, mais cela est facultatif.
![Création de paquet d'installation](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11252.png)
1. Si vous n'avez pas de fichier d'installation {{ fr.RDM }} (.rdi), laisser l'option ***Créer une configuration juste pour ce paquet*** activée. Si vous en avez déjà créé un, activer l'option ***Utiliser un fichier d'installateur de Bureau à Distance existant (rdi)*** à la place et sélectionner votre fichier sur votre ordinateur en utilisant le bouton d'ellipse.
1. Cliquer sur ***Créer***. Passer à l'étape 9 si vous avez sélectionné ***Utiliser un fichier d'installateur de Bureau à Distance existant (rdi)*** à l'étape précédente.
1. Si vous devez créer un nouveau fichier de configuration, la fenêtre ***Générateur de fichier d'installation*** s'ouvrira. Voir notre guide [Sélection d'Option](/rdm/windows/installation/client/custom-installer-service/installer-file-generator/option-selection/) pour plus d'informations sur les différentes options à choisir.
![Générateur de fichier d'installation](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11249.png)
1. Cliquer sur ***Générer*** pour créer le fichier une fois votre sélection terminée.
1. Lorsqu'on vous y invite, sauvegarder le fichier de paquet d'installation localement sur votre ordinateur.
