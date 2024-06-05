---
eleventyComputed:
  title: Récupération de données
---
En cas de perte de données due à une défaillance matérielle, il est encore possible de récupérer des données de votre dispositif de stockage s'il est toujours utilisable.
## Solution
1. Sur le dispositif de stockage qui a échoué, naviguer vers **C:\Users\%USERNAME%\AppData\Local\Devolutions** et copier l'intégralité du dossier RemoteDesktopManager ou RemoteDesktopManagerFree.

Ce dossier contiendra la source de données locale (SQLite ou XML) ainsi que votre fichier de configuration.
2. Coller ce dossier au même endroit sur votre nouvel ordinateur et vous devriez récupérer vos données.  
{% snippet, "badgeInfo" %}
Le chemin mentionné ici est pour ceux qui ont installé en utilisant les paramètres par défaut. La meilleure façon de localiser votre dossier de configuration est d'utiliser ***Fichier – Paramètres – Avancé***, dans ce formulaire vous trouverez un hyperlien près du bas. Cela ouvre votre dossier de configuration.
{% endsnippet %}  
{% snippet, "badgeInfo" %}
Les sources de données basées sur des fichiers (XML, SQLite, etc.) sont par défaut stockées dans ce dossier de configuration. Par précaution, passer en revue chaque source de données dans ***Fichier – Sources de données*** et regarder le chemin local (s'il y en a). Tout fichier qui se trouve dans le dossier de configuration devrait être copié pour garantir une récupération complète des données.
{% endsnippet %}
