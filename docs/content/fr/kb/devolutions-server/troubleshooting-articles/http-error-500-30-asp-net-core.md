---
eleventyComputed:
  title: HTTP Error 500.30 - ASP.NET Core app Failed to Start
---
Suite au processus de mise à jour de {{ fr.DVLS }}, lorsque l'on tente d'ouvrir la page Web, le navigateur affiche le message d'erreur suivant.
![!!KB8109](https://cdnweb.devolutions.net/docs/fr/kb/KB8109.png)
## Solution
Le paramètre startupTimeLimit de ASP .Net Core doit être augmenté afin de permettre d'effectuer les migrations de données.

1. Ouvrir le ***Gestionnaire IIS***.
1. Ouvrir les branches jusqu'à sélectionner l'application Web de {{ fr.DVLS }}.
1. Ouvrir l'***Éditeur de configuration***.
![!!KB8110](https://cdnweb.devolutions.net/docs/fr/kb/KB8110.png)
1. Sélectionner l'item aspNetCore sous system.webServer.
![!!KB8111](https://cdnweb.devolutions.net/docs/fr/kb/KB8111.png)
1. Augmenter la valeur du paramètre startupTimeLimit. Par défaut cette valeur est à 120 secondes.
![!!KB8112](https://cdnweb.devolutions.net/docs/fr/kb/KB8112.png)
