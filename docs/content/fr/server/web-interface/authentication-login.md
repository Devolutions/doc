---
eleventyComputed:
  title: Connexion d'authentification
---
Pour se connecter à l'***Interface Web*** de {{ fr.DVLS }}, les utilisateurs doivent choisir une méthode d'authentification. Les méthodes d'authentification disponibles pour la connexion dépendront du type d'authentification de l'administrateur configuré dans ***Administration - Paramètres du serveur - Authentification***.

{% snippet, "badgeHelp" %}
Suivre ce [lien](/server/web-interface/administration/configuration/server-settings/general/authentication/) pour apprendre à définir un type d'authentification.
{% endsnippet %}

### Authentification utilisateur
1. Ouvrir un navigateur web et naviguer vers l'URL de l'instance {{ fr.DVLS }}.
{% snippet, "badgeInfo" %}
Si l'instance a été créée avec l'URL par défaut, elle serait disponible à l'adresse https<aire>://<NomDuServeur>/dvls.
{% endsnippet %}

2. Choisir votre méthode d'authentification entre Microsoft, Domaine, Okta ou utilisateur {{ fr.DVLS }}.
{% snippet, "badgeHelp" %}
La [Connexion d'urgence](/server/kb/how-to-articles/enable-emergency-login-code-authentication/) est une fonctionnalité qui doit être activée pour permettre une connexion d'accès d'urgence pour les administrateurs même si les fournisseurs sont en panne (Azure ou AD).
{% endsnippet %}

![!!ServerOp4088](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp4088.png)
3. Entrer le ***Nom d'utilisateur*** et le ***Mot de passe*** de la méthode d'authentification choisie pour se connecter. Méthode d'authentification de domaine montrée ici :
{% snippet, "badgeNotice" %}
Cliquer ***Choisissez votre méthode d'authentification*** pour revenir à la liste des types d'authentification.
{% endsnippet %}

![!!ServerOp4022](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp4022.png)
4. Cliquer ***Se connecter***.
