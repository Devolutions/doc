---
eleventyComputed:
  title: Chiffrer le fichier web.config
  description: Lors de l'utilisation de comptes de connexion SQL Server ou de comptes de domaine, il est extrêmement important de chiffrer le fichier web.config.
  keywords:
  - chiffrement
---
## Utiliser des comptes de connexion SQL Server
Lors de l'utilisation de comptes de connexion SQL Server, chiffrer le fichier **web.config** est d'une importance capitale.

Le fichier **web.config** stocke les chaînes de connexion à la base de données, qui contiennent le nom d'hôte du serveur de base de données (Source de données), le nom de la base de données (Catalogue initial) et les identifiants (ID utilisateur et mot de passe), d'où l'importance de le chiffrer.

Cependant, comme le chiffrement du fichier **web.config** utilise ***RsaProtectedConfigurationProvider*** du .NET Framework, des permissions supplémentaires sont requises pour le conteneur ***NetFrameworkConfigurationKey*** utilisé par le fournisseur RSA.

{% snippet, "badgeCaution" %}
Omettre de le faire empêchera le ***DevolutionsSchedulerService*** de démarrer, et provoquera également cette invite lors de l'activation de l'option ***Chiffrer le fichier web.config***.
![!!KB4841](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4841.png)
{% endsnippet %}

{% snippet, "shieldWarning" %}
Accorder l'accès au conteneur ***NetFrameworkConfigurationKey*** pourrait être une préoccupation de sécurité, il est donc recommandé de ne pas accorder cette permission à ***Network Service*** ou ***Local Service***.
{% endsnippet %}

{% snippet, "badgeInfo" %}
Le fichier **appsettings.json** est chiffré en même temps.
{% endsnippet %}

Nous recommandons d'utiliser un compte dédié pour le service ***DevolutionsSchedulerService***, et de configurer ce compte pour exécuter le service.
![!!KB4842](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4842.png)

Puis exécuter la commande suivante depuis une invite de commande élevée :

```bash
c:>"Windows\Microsoft.NET\Framework64\v4.0.30319\aspnet_regiis" -pa "NetFrameworkConfigurationKey" "SchedSvcLocalAccount"
```

Cela devrait retourner :

```
Microsoft (R) ASP.NET RegIIS version 4.0.30319.0
Utilitaire d'administration pour installer et désinstaller ASP.NET sur la machine locale.
Copyright (C) Microsoft Corporation.  Tous droits réservés.
Ajout de l'ACL pour l'accès au conteneur de clés RSA...
Réussi !
```

## Utiliser des comptes de domaine SQL Server (Sécurité intégrée)
Lors de l'utilisation de comptes de domaine SQL Server, chiffrer le fichier **web.config** est d'une importance capitale.

Le fichier **web.config** stocke les chaînes de connexion à la base de données, qui contiennent le nom d'hôte du serveur de base de données (Source de données) et le nom de la base de données (Catalogue initial).

Cependant, comme le chiffrement du fichier **web.config** utilise ***RsaProtectedConfigurationProvider*** du .NET Framework, des permissions supplémentaires sont requises pour le conteneur ***NetFrameworkConfigurationKey*** utilisé par le fournisseur RSA.

{% snippet, "badgeCaution" %}
Omettre de le faire empêchera le ***DevolutionsSchedulerService*** de démarrer, et provoquera probablement cette erreur depuis la Console des Services Windows :
![!!KB4843](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4843.png)
{% endsnippet %}

{% snippet, "badgeInfo" %}
Le fichier **appsettings.json** est chiffré en même temps.
{% endsnippet %}

Le compte configuré sur le ***DevolutionsSchedulerService*** (référé comme le compte VaultDBScheduler dans l'Enquête de Pré-Déploiement) nécessitera la permission de lire le conteneur ***NetFrameworkConfigurationKey***.

Exécuter la commande suivante depuis une invite de commande élevée :

```
c:>"Windows\Microsoft.NET\Framework64\v4.0.30319\aspnet_regiis" -pa "NetFrameworkConfigurationKey" "<VotreDomaine>\<CompteVaultDBScheduler>"
```

Cela devrait retourner :

```
Microsoft (R) ASP.NET RegIIS version 4.0.30319.0
Utilitaire d'administration pour installer et désinstaller ASP.NET sur la machine locale.
Copyright (C) Microsoft Corporation.  Tous droits réservés.
Ajout de l'ACL pour l'accès au conteneur de clés RSA...
Réussi !
```
