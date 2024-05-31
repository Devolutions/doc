---
eleventyComputed:
  title: Consulter le journal de traçage des requêtes échouées
  description: Avec le traçage des requêtes échouées activé, les fichiers journaux sont créés et peuplés dans le répertoire. Par défaut, le chemin est %SystemDrive%\inetpub\logs\FailedReqLogFiles.
---
Avec le traçage des requêtes échouées activé, les fichiers journaux sont créés et peuplés dans le répertoire configuré dans [Configurer le traçage des requêtes échouées](/server/kb/troubleshooting-articles/failed-request-tracing-with-iis/configure-failed-request-tracing/). Par défaut, le chemin est **%SystemDrive%\inetpub\logs\FailedReqLogFiles**. Là, un dossier typiquement nommé **W3SVC1** est créé lorsque le premier cas se produit.

## Contenu du dossier W3SVC1
* Fichiers XML (**fr######.xml**): Ouvrir un fichier XML pour voir le journal déclenché par la règle de traçage.
* Fichier XSL (**freb.xsl**): Pour le style d'affichage, dans un visualiseur XML comme Internet Explorer.
![Contenu du dossier W3SVC1](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4324.png)
Voici un exemple de journal de traçage des requêtes échouées :
![Exemple de journal de traçage des requêtes échouées](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4325.png)
