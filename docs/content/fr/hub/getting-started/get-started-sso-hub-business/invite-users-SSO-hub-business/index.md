---
eleventyComputed:
  title: Inviter des utilisateurs pour l'A2F dans {{ fr.DHUBB }}
  description: Une fois l'A2F configurée et activée, inviter vos utilisateurs sur votre hub en suivant ces étapes.
  keywords:
  - A2F
  - inviter des utilisateurs
  - organisation
  - authentification
---
Une fois l'A2F [configurée et activée](/hub/getting-started/get-started-sso-hub-business/configure-sso-authentication-microsoft-azure/), utiliser cette invitation spécifique pour tous vos utilisateurs.

Cette méthode enverra un courriel préformaté à tous les destinataires. Il fournira votre URL {{ fr.DHUBB }} avec un ID d'invitation et une clé pour qu'ils l'utilisent.

{% snippet, "badgeCaution" %}
L'ID d'invitation et la clé sont pour pré-approuver l'accès à {{ fr.DHUBB }}. Ils expirent 7 jours après leur envoi.
{% endsnippet %}

{% snippet, "badgeInfo" %}
Dans le cadre du processus de création, un {{ fr.DA }} sera créé car il est nécessaire pour accéder à {{ fr.DHUBB }}, mais il ne sera pas nécessaire de définir un mot de passe puisque vos utilisateurs s'authentifieront via Azure AD.
{% endsnippet %}

## Inviter les utilisateurs de l'organisation

1. Aller à ***Administration – Utilisateurs***. Si vous avez de nouveaux utilisateurs qui sont synchronisés depuis votre fournisseur, ils seront prêts à être invités. Vous pouvez voir leur nombre dans le widget ***Invitation requise***. Cliquer sur ce widget.
![Invitation requise](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub4141.png)
1. ***Étape 1 - De l'organisation*** : Sélectionner parmi les utilisateurs suggérés, le cas échéant, ou inviter tous les membres d'un groupe de synchronisation depuis l'onglet ***Groupes***. Cliquer sur ***Suivant***.
![Étape 1 - De l'organisation](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2176.png)
1. ***Étape 2 - Par courriels*** : Il est possible d'inviter d'autres utilisateurs qui ne sont pas synchronisés, mais qui appartiennent au même fournisseur. Entrer soit un courriel individuel soit un courriel de groupe, puis cliquer sur ***Suivant***.
{% snippet, "badgeInfo" %}
Ceci est seulement possible si l'application d'entreprise dans Azure a le ***Assignment required*** réglé sur ***Non***. Ce paramètre peut être trouvé dans les ***Propriétés*** de l'application d'entreprise.
{% endsnippet %}

![Étape 2 - Par courriels](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2177.png)

4. ***Étape 3 - Options*** : Sélectionner ***Options*** pour les utilisateurs, puis cliquer sur ***Suivant***.
![Étape 3 - Options](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2178.png)
1. ***Étape 4 - Groupes d'utilisateurs*** : Les utilisateurs synchronisés n'ont pas besoin d'être assignés aux ***Groupes d'utilisateurs*** synchronisés. Ils seront ajoutés automatiquement lorsqu'ils se connectent. Si vous avez des ***Groupes d'utilisateurs*** personnalisés, vous pouvez leur assigner des utilisateurs.
{% snippet, "badgeInfo" %}
Les ***Groupes d'utilisateurs*** personnalisés doivent être définis au préalable dans {{ fr.DHUBB }}. Pour plus d'informations, voir [Groupes d'utilisateurs](/hub/web-interface/administration/management/users/).
{% endsnippet %}

![Étape 4 - Groupes d'utilisateurs](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2179.png)

6. Cliquer sur ***Envoyer l'invitation*** en bas.

{{ fr.DHUBB }} enverra un courriel avec les informations essentielles aux destinataires, incluant l'URL de votre {{ fr.DHUBB }}, l'ID d'invitation et la clé.

{% snippet, "badgeCaution" %}
Les utilisateurs devront compléter une configuration de {{ fr.DA }}. Voir [Expérience d'invitation de l'utilisateur final pour l'A2F dans {{ fr.DHUBB }}](/hub/getting-started/get-started-sso-hub-business/invite-users-SSO-hub-business/end-user-experience/).
{% endsnippet %}

{% snippet, "badgeInfo" %}
Le destinataire fera partie de votre hub uniquement lorsqu'il se connectera pour la première fois. Ce n'est qu'alors que vous pourrez les voir dans ***Administration – Utilisateurs***.
{% endsnippet %}

{% snippet, "badgeInfo" %}
Tout utilisateur qui tente d'accéder à votre {{ fr.DHUBB }} avec son URL pour la première fois sans avoir reçu d'invitation déclenchera une demande d'approbation, seulement s'ils sont dans le même fournisseur d'identité.

Un courriel sera alors envoyé à tous les administrateurs. Il peut être approuvé ou refusé dans ***Administration – Utilisateurs***.
{% endsnippet %}

## Inviter des utilisateurs qui ne font pas partie de votre fournisseur d'authentification

Il est possible d'ajouter des utilisateurs à votre {{ fr.DHUBB }} qui sont en dehors de votre fournisseur d'authentification.

{% snippet, "badgeInfo" %}
Cette option est seulement possible si vous n'avez pas défini un ***Force SSO on all users***, puisque ces utilisateurs ne font pas partie de votre fournisseur d'authentification.
Suivre les étapes de [Créer et inviter des utilisateurs](/hub/web-interface/administration/management/users/create-invite-users/index).
{% endsnippet %}
