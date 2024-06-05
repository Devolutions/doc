---
eleventyComputed:
  title: Politiques d'accès conditionnel
  description: Les politiques d'accès conditionnel prennent généralement en compte divers facteurs pour évaluer s'il faut autoriser ou refuser l'accès à une ressource ou un service spécifique.
---
***Politiques d'Accès Conditionnel*** prennent généralement en compte divers facteurs pour évaluer s'il faut autoriser ou refuser l'accès à une ressource ou un service spécifique. En les mettant en œuvre, les organisations peuvent efficacement appliquer des mesures de sécurité qui s'alignent sur leurs besoins et exigences uniques.

1. Pour consulter les ***Politiques d'Accès Conditionnel*** de {{ fr.DVLS }} dans l'interface web, aller à ***Administration – Configuration– Paramètres du Serveur***.

![Administration – Configuration – Paramètres du Serveur](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6004.png)

2. Cliquer sur ***Politiques d'Accès Conditionnel*** sous ***Sécurité***.

![Sécurité – Politiques d'Accès Conditionnel](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6005.png)

## Configurer la Connexion depuis l'interface web

1. Sélectionner ***Connexion*** dans le menu déroulant ***Cible*** et cliquer sur le bouton plus (***Ajouter***).

![Menu déroulant Cible et bouton plus](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6023.png)

2. Choisir un nom de politique et une action dans les menus ***Action lorsqu'apparié*** et ***Action lorsqu'non apparié***.
    * ***Continuer*** : Passer à la politique suivante. L'action par défaut est appliquée si c'est la dernière politique.
    * ***Accès Refusé*** : L'accès de l'utilisateur sera refusé. Les utilisateurs recevront une erreur et ne pourront pas se connecter.
    * ***Accès Autorisé*** : L'accès de l'utilisateur sera autorisé. Une A2F pourrait être nécessaire, selon la configuration.

![Action lorsqu'apparié et Action lorsqu'non apparié menus](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6019.png)

3. Cliquer sur le bouton plus (***Ajouter***) dans la section ***Règles***.

![Section Règles](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6015.png)

4. Choisir dans le menu déroulant si la règle s'applique à :
    * ***Type d'authentification***
    * ***Heure***
    * ***Adresses IP***
    * ***Geo IP***
    * ***Utilisateurs***
    * ***Groupes d'Utilisateurs***
    * ***Administrateur***

![Section Règles](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6006.png)

5. Cliquer sur ***Ajouter*** pour fermer la fenêtre.

6. Sélectionner ***Tous*** ou ***N'importe lequel*** sous ***Règles – Validation de la règle***.

![Règles – Validation de la règle](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6017.png)

***Tous :*** Toutes les règles doivent être suivies pour continuer.
***N'importe lequel :*** L'utilisateur peut se connecter une fois qu'une règle a été suivie.

7. Cliquer sur ***Est Actif*** pour activer ou désactiver la politique.

![Est Actif](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6020.png)

8. Cliquer sur ***Ajouter*** pour sauvegarder la politique.
## Configurer l'Authentification Multifacteur depuis l'interface web

Sélectionner ***AMF*** dans le menu déroulant ***Cible***.

1. Choisir une ***Action par défaut lorsque aucune politique ne correspond*** entre les suivantes :
    * ***AMF Requise*** : L'AMF est imposée pour tous les utilisateurs. Un type d'AMF par défaut est défini pour tous les utilisateurs.
    * ***AMF Ignorée*** : L'AMF n'est pas imposée.
    * ***AMF Optionnelle par Utilisateur*** : L'AMF est imposée sur une base individuelle. L'administrateur choisit qui utilise l'AMF et quel produit ou technologie ils utilisent. Choisir cette option si tous les utilisateurs ne sont pas configurés pour l'authentification multifacteur.

{% snippet, "badgeInfo" %}
Lorsque l'utilisation de l'AMF est définie sur ***AMF Optionnelle par Utilisateur***, la méthode AMF doit être configurée dans ***Administration – Utilisateurs*** pour chaque utilisateur. Modifier ou ajouter un utilisateur, puis aller à la section ***Multifacteur*** pour la configurer. Vous pouvez également définir un type d'AMF sur l'utilisateur s'ils utilisent un produit différent de la méthode par défaut. Voir [Multifacteur (Modifier Utilisateur)](/server/web-interface/administration/security-management/users/edit-user-two-factor/).
{% endsnippet %}

![Action par défaut lorsque aucune politique ne correspond](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6003.png)

2. Retourner à la section ***Multifacteur***, choisir à qui envoyer l'email de réinitialisation entre ***Administrateur(s)*** ou un ***Email Spécifique*** (dans ce cas, vous devez spécifier l'email dans le champ ***Email Spécifique***).
![Envoyer l'email de réinitialisation à & Email Spécifique](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2064.png)
1. Cocher les cases à côté des authentificateurs pris en charge que vous souhaitez activer. Vous pouvez en choisir autant que nécessaire.

{% snippet, "badgeInfo" %}
Les authentificateurs multifacteurs actuellement pris en charge sont Authenticator (TOTP), Yubikey, Email, [SMS](/server/web-interface/administration/configuration/server-settings/security/two-factor/sms/), Duo, et Radius. Vous devez les configurer séparément en utilisant les instructions à côté d'eux. Les emails doivent être configurés au préalable dans {{ fr.DVLS }} pour les AMF ***Email*** et ***SMS*** (sans Twilio).
{% endsnippet %}

![AMF pris en charge](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2065.png)

4. Sélectionner l'***AMF par Défaut*** parmi ceux que vous avez activés à l'étape précédente.
1. Sélectionner des moyens alternatifs de connexion entre ***Email*** et [***Codes de Secours***](/server/web-interface/administration/configuration/server-settings/security/two-factor/backup-codes/). Ces options seront proposées lorsque les utilisateurs n'ont pas accès à leur méthode habituelle.
![AMF par Défaut et Alternatif](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2066.png)
1. Cliquer sur ***Sauvegarder***.

1. Pour ajouter une règle aux ***Politiques d'Accès Conditionnel***, revenir à ***Administration – Configuration– Paramètres du Serveur – Sécurité – Politiques d'Accès Conditionnel***.

1. Sélectionner ***AMF*** dans le menu déroulant ***Cible*** et cliquer sur le bouton plus (***Ajouter***).

![Menu déroulant Cible et bouton plus](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6025.png)

9. Choisir un nom de politique et une action dans les menus ***Action lorsqu'apparié*** et ***Action lorsqu'non apparié***.
    * ***Continuer*** : Passer à la politique suivante. L'action par défaut est appliquée si c'est la dernière politique.
    * ***AMF Requise*** : L'AMF est imposée pour tous les utilisateurs. Un type d'AMF par défaut est défini pour tous les utilisateurs.
    * ***AMF Ignorée*** : L'AMF n'est pas imposée.
    * ***AMF Optionnelle par Utilisateur*** : L'AMF est imposée sur une base individuelle. L'administrateur choisit qui utilise l'AMF et quel produit ou technologie ils utilisent. Choisir cette option si tous les utilisateurs ne sont pas configurés pour l'authentification multifacteur.

![Action lorsqu'apparié et Action lorsqu'non apparié menus](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6026.png)

10. Cliquer sur le bouton plus (***Ajouter***) dans la section ***Règles***.

![Section Règles](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6015.png)

11. Choisir dans le menu déroulant si la règle s'applique à :
    * ***Type d'authentification***
    * ***Heure***
    * ***Adresses IP***
    * ***Geo IP***
    * ***Utilisateurs***
    * ***Groupes d'Utilisateurs***
    * ***Administrateur***

![Section Règles](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6006.png)

12. Cliquer sur ***Ajouter*** pour fermer la fenêtre.

1. Sélectionner ***Tous*** ou ***N'importe lequel*** sous ***Règles – Validation de la règle***.

![Règles – Validation de la règle](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6017.png)

***Tous :*** Toutes les règles doivent être suivies pour continuer.
***N'importe lequel :*** L'utilisateur peut se connecter une fois qu'une règle a été suivie.

14. Cliquer sur ***Est Actif*** pour activer ou désactiver la politique.

![Est Actif](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6020.png)

15. Cliquer sur ***Ajouter*** pour sauvegarder la politique.
