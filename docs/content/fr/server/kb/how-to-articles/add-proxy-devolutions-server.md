---
eleventyComputed:
  title: Ajouter un proxy dans {{ fr.DVLS }}
  description: Pour ajouter un proxy dans {{ fr.DVLS }}, il faut ajouter des lignes de commande au fichier web.config.
  keywords:
  - proxy
---
Pour ajouter un proxy dans {{ fr.DVLS }}, il faut ajouter quelques lignes de commande au fichier **web.config**.

1. Localiser et ouvrir le fichier **web.config**. Son emplacement par défaut est **C:\inetpub\wwwroot\dvls\web.config**.
1. Dans le fichier, localiser les balises `<environmentVariables>` et `</environmentVariables>`.
1. Ajouter le code suivant entre elles, en remplaçant les valeurs par vos informations :
   ```
   <environmentVariable name="http_proxy" value="myproxyaddress"/>
   <environmentVariable name="https_proxy" value="myproxyaddress"/>
   ```
   {% snippet, "badgeInfo" %}
   Pour plus d'options, se référer à [Configurer un proxy en utilisant des variables d'environnement](https://github.com/Azure/azure-sdk-for-net/blob/main/sdk/core/Azure.Core/samples/Configuration.md#configuring-a-proxy-using-environment-variables).
   {% endsnippet %}
1. Sauvegarder et fermer le fichier.