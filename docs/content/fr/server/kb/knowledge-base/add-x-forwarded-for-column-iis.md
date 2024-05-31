---
eleventyComputed:
  title: Ajouter une colonne X-Forwarded-For dans les versions d'IIS 8.5 et ultérieures
---
Suivre les étapes ci-dessous pour ajouter une colonne X-Forwarded-For dans les journaux d'IIS 8.5 :

1. Ouvrir le Gestionnaire IIS.
1. Au niveau du serveur, du site ou de l'application, double-cliquer sur ***Logging***.
1. Cliquer sur ***Select Fields***.
1. Dans la fenêtre ***W3C Logging Fields***, cliquer sur ***Add Field***.
1. Dans la fenêtre ***Add Custom Field***, remplir les champs suivants :
    * ***Field Name*** : X-Forwarded-For
    * ***Source type*** : Request Header
    * ***Source*** : X-Forwarded-For
1. Cliquer sur ***OK*** dans les deux fenêtres ouvertes.
1. Cliquer sur ***Apply*** dans le volet des actions.
![!!KB4772](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4772.png)

Attendre la création d'un nouveau fichier journal dans le dossier des journaux. Les modifications de colonnes seront effectives lors de la création d'un nouveau fichier journal.

## Ligne de commande
```
%systemroot%\system32\inetsrv\APPCMD.EXE set config -section:system.applicationHost/sites /+"[name='Default Web Site'].logFile.customFields.[logFieldName='X-Forwarded-For',sourceName='X-Forwarded-For',sourceType='RequestHeader']" /commit:apphost
```