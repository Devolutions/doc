---
eleventyComputed:
  title: SMS
  description: L'authentification à deux facteurs (A2F) via SMS exige de l'utilisateur de saisir un code qu'il reçoit sur son téléphone mobile comme second composant pour accéder à la source de données.
  keywords:
  - SMS
  - A2F
  - authentification à deux facteurs
---
L'authentification à deux facteurs (A2F) via SMS exige de l'utilisateur de saisir un code qu'il reçoit sur son téléphone mobile comme second composant pour accéder à la source de données.

Pour activer cette méthode A2F pour vos utilisateurs, aller à ***Administration – Paramètres du Serveur – Multi-facteurs*** et cocher l'option ***SMS*** A2F. Un bouton ***Configurer*** apparaîtra à côté de l'option.
![Administration – Paramètres du Serveur – Multi-facteurs – A2F Supportés – SMS](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2068.png)

{% snippet, "badgeInfo" %}
Voir [Authentification à deux facteurs](/server/web-interface/administration/configuration/server-settings/security/two-factor/) pour plus d'informations sur la configuration de l'A2F.
{% endsnippet %}

Il existe deux configurations possibles : la [version gratuite](#version-gratuite), utilisant un opérateur configuré dans les paramètres email de votre serveur, et la [version configurée avec Twilio](#configurée-avec-twilio).

## Version gratuite
La version gratuite utilise un opérateur configuré dans les paramètres email de votre serveur. Ne pas remplir les champs des paramètres Twilio. Seulement cocher la case ***SMS*** comme décrit ci-dessus, sauvegarder vos changements, et [configurer vos paramètres email](/server/kb/how-to-articles/configure-smtp-server/configure-smtp-email/).

## Configurée avec Twilio
Pour configurer la méthode SMS avec Twilio, vous devez avoir un abonnement Twilio. Dans ***Configurer***, cocher l'option ***Utiliser Twilio au lieu d'un opérateur pour envoyer des SMS***, puis remplir les champs avec les informations de votre abonnement Twilio.
![Configuration SMS](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8136.png)

| Option      | Description                                  |
|-------------|----------------------------------------------|
| Account SID | SID du compte de votre compte Twilio        |
| Auth token  | Jeton d'autorisation de votre compte Twilio  |
| Téléphone   | Numéro de téléphone                          |
