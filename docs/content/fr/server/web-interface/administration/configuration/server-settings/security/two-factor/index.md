---
eleventyComputed:
  title: Authentification multifacteur
  description: Configurer l'authentification à deux facteurs dans {{ fr.DVLS }} pour ajouter une couche supplémentaire de sécurité à l'application.
---
{% snippet, "badgeInfo" %}
Cette fonctionnalité est uniquement disponible pour les versions de {{ fr.DVLS }} 2022.1 ou ultérieures.
{% endsnippet %}

Configurer l'authentification multifacteur (AMF) dans {{ fr.DVLS }} pour ajouter une couche supplémentaire de sécurité à l'application.

{{ fr.DVLS }} prend en charge plusieurs types d'AMF. Configurer un type d'AMF par défaut pour toute votre organisation ou configurer l'AMF utilisateur par utilisateur. Lorsque l'AMF est configuré, les utilisateurs se connectent avec leur nom d'utilisateur/mot de passe ainsi qu'un produit AMF.

## Configurer l'Authentification Multifacteur Depuis l'Interface Web

1. Pour accéder à la configuration de l'AMF, naviguer vers ***Administration – Paramètres du serveur – Authentification multifacteur***.
1. La première option consiste à choisir comment vous souhaitez appliquer l'authentification multifacteur. Pour ce faire, cliquer sur l'icône d'information à côté de ***Utilisation de l'AMF*** pour aller à la section ***Politiques d'accès conditionnel***.
![Utilisation de l'AMF](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2061.png)
1. Sélectionner une ***Cible*** (***Connexion*** ou ***AMF***).
![Cible](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6001.png)
1. Si vous avez choisi ***AMF*** à l'étape précédente, sélectionner une ***Action par défaut lorsque aucune politique ne correspond*** parmi les suivantes :
	* ***AMF Requis*** : L'AMF est imposé pour tous les utilisateurs. Un type d'AMF par défaut est défini pour tous les utilisateurs.
	* ***AMF Ignoré*** : L'AMF n'est pas imposé.
	* ***AMF Optionnel par Utilisateur*** : L'AMF est imposé sur une base individuelle. L'administrateur choisit qui utilise l'AMF et quel produit ou technologie ils utilisent. Choisir cette option si tous les utilisateurs ne sont pas configurés pour l'authentification multifacteur.

{% snippet, "badgeInfo" %}
Lorsque l'utilisation de l'AMF est définie sur ***AMF Optionnel par Utilisateur***, la méthode AMF doit être configurée dans ***Administration – Utilisateurs*** pour chaque utilisateur. Modifier ou ajouter un utilisateur, puis aller à la section ***Authentification multifacteur*** pour la configurer. Vous pouvez également définir un type d'AMF sur l'utilisateur s'ils utilisent un produit différent de la méthode par défaut. Voir [Authentification multifacteur (Modifier Utilisateur)](/server/web-interface/administration/security-management/users/edit-user-two-factor/).
{% endsnippet %}

![Action par défaut lorsque aucune politique ne correspond](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6003.png)

5. Retourner à la section ***Authentification multifacteur***, choisir à qui envoyer l'email de réinitialisation entre ***Administrateur(s)*** ou un ***Email spécifique*** (dans ce cas, vous devez spécifier l'email dans le champ ***Email spécifique***).
![Envoyer l'email de réinitialisation à & Email spécifique](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2064.png)
1. Cocher les cases à côté des authentificateurs pris en charge que vous souhaitez activer. Vous pouvez en choisir autant que nécessaire.

{% snippet, "badgeInfo" %}
Les authentificateurs multifacteurs actuellement pris en charge sont Authenticator (TOTP), Yubikey, Email, [SMS](/server/web-interface/administration/configuration/server-settings/security/two-factor/sms/), Duo, et Radius. Vous devez les configurer séparément en utilisant les instructions à côté d'eux. Les emails doivent être configurés au préalable dans {{ fr.DVLS }} pour les AMF ***Email*** et ***SMS*** (sans Twilio).
{% endsnippet %}

![AMF pris en charge](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2065.png)

7. Sélectionner l'***AMF par défaut*** parmi ceux que vous avez activés à l'étape précédente.
1. Sélectionner des moyens alternatifs de connexion entre ***Email*** et [***Codes de secours***](/server/web-interface/administration/configuration/server-settings/security/two-factor/backup-codes/). Ces options seront proposées lorsque les utilisateurs n'ont pas accès à leur méthode habituelle.
![AMF par défaut et alternatifs](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2066.png)
1. Cliquer sur ***Enregistrer***.