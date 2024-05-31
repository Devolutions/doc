---
eleventyComputed:
  title: Configurer SSL
---
Veuillez effectuer ces étapes uniquement après avoir configuré l'instance {{ fr.DVLS }} et que vous vous êtes effectivement connecté via une application cliente. Effectuer ces étapes dès le début peut ajouter une couche de complexité qui pourrait vous empêcher de réussir dans la configuration initiale.

## Importer un certificat ou créer un certificat auto-signé

1. Sélectionner le nœud serveur dans l'arborescence et double-cliquer sur la fonctionnalité ***Server Certificates*** dans la ***List View*** :
![!!KB4391](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4391.png)
1. Cliquer sur ***Importer...*** dans le volet ***Actions***.
![!!KB4392](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4392.png)

## Créer une liaison SSL

1. Sélectionner le site web dans l'arborescence. Cliquer sur ***Bindings...*** dans le volet ***Actions***. Cela ouvre l'éditeur de liaison qui vous permet de créer, éditer et supprimer des liaisons pour votre site Web.
![!!KB4393](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4393.png)
1. Cliquer sur ***Ajouter...*** pour ajouter votre nouvelle liaison SSL au site.
![!!KB4394](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4394.png)
1. Sélectionner ***https*** dans la liste déroulante ***Type***. Sélectionner le certificat que vous avez importé ou créé dans la liste déroulante ***SSL Certificate*** puis cliquer sur ***OK***.
![!!KB4395](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4395.png)
1. Maintenant, vous avez une nouvelle liaison ***SSL*** sur votre site.
![!!KB4396](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4396.png)

## Modifier la configuration de {{ fr.DVLS }}

1. Depuis la {{ fr.DVLSCONSOLE }}, éditer l'instance {{ fr.DVLS }}.
2. Aller dans l'onglet IIS et décocher l'option ***Disable HTTPS***.
![!!KB4400](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4400.png)
1. Sauvegarder la modification avec le bouton ***Save***.

## Configurer les paramètres SSL dans les applications clientes

1. Éditer la source de données {{ fr.DVLS }}
2. Changer l'URL du serveur pour utiliser le protocole ***https://***.
