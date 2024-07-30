---
eleventyComputed:
  title: Utilisateurs
  description: Dans la section Utilisateurs, vous pouvez gérer les utilisateurs et les paramètres utilisateur.
---
Dans la section ***Utilisateurs***, vous pouvez gérer les utilisateurs et les paramètres utilisateur.

{% snippet, "badgeHelp" %}
Apprendre à [ajouter des utilisateurs](/hub/web-interface/administration/management/users/create-invite-users/) ou [ajouter un administrateur](/hub/web-interface/administration/management/users/administrator-invite/).
{% endsnippet %}

![Paramètres utilisateur](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2270.png)

## Définir un utilisateur comme propriétaire

![Définir comme propriétaire](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2273.png)

Si vous cliquez sur l'icône ***Définir comme propriétaire***, il vous sera demandé si vous voulez vraiment changer de propriétaire de l'actuel propriétaire à cet utilisateur. Cliquer sur ***Oui*** pour confirmer.

![Message de confirmation Définir comme propriétaire](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2271.png)

Le propriétaire a une icône de couronne à côté de son nom et ne peut pas être supprimé.

![Icône du propriétaire](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2272.png)

{% snippet, "shieldInfo" %}
Pour des raisons de sécurité, seuls les administrateurs actuels peuvent être définis comme propriétaires.
{% endsnippet %}

## Modifier un utilisateur

![Modifier](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2274.png)

Lors de la modification d'un utilisateur, vous pouvez ajouter une courte description de l'utilisateur, ses rôles et responsabilités, etc. Vous pouvez également changer certaines de ses capacités au sein du hub.

Dans l'onglet ***Groupes d'utilisateurs***, vous pouvez les assigner à un ou plusieurs groupes d'utilisateurs avec des permissions et accès définis.

![Modifier les paramètres](https://cdnweb.devolutions.net/docs/HUBB6010_2023_3.png)

| OPTION                           | DESCRIPTION                                                                                                                                                                                                                       |
|----------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Activer [{{ fr.WBEX }}](/workspace/workspace-browser-extension/)               | Permet à l'utilisateur d'utiliser le hub avec {{ fr.WBEX }}.                                                                                                                                           |
| Activer les [{{ fr.WAPPS }}](/workspace/workspace-apps/)               | Permet à l'utilisateur d'utiliser le hub avec {{ fr.WAPPS }} {{ fr.CTOOL }}.                                                                                                                                                                |
| Autoriser hors ligne     | Permet à l'utilisateur d'utiliser le hub comme source de données en mode hors ligne dans {{ fr.RDM }}.                                                                                                                                                  |
| Est administrateur                  | Définit l'utilisateur comme administrateur du hub. Cette option ne peut pas être changée si l'utilisateur est le propriétaire du hub (comme vu dans l'image ci-dessus).       
| Est activé                       | Active l'utilisateur dans le hub.  |                                                                            |
| [Autoriser l'envoi de messages](/hub/web-interface/secure-messages/) | Sélectionner si l'utilisateur est autorisé à envoyer des messages avec pièces jointes, sans pièces jointes, ou n'est pas autorisé à envoyer des messages.                                                                                                            |
| Profil d'interface utilisateur                     | Sélectionner le profil d'interface utilisateur entre ***Professionnel de l'informatique***, ***Utilisateur d'affaires***, ou ***Défaut***. Cela ne peut être changé qu'en modifiant l'utilisateur, pas lors de sa création.   |
| Tags                | Les ***Tags externes*** et ***Tags privilégiés*** peuvent être ajoutés lors de la création ou de la modification des utilisateurs. Ils sont utiles pour les ***utilisateurs temporaires***, tels que les ***contractants***. Une ***date d'expiration*** doit être définie.  Les ***Tags*** apparaissent dans le menu Compte sous Informations utilisateur et sont affichés dans les sources de données {{ fr.DHUB }} dans {{ fr.RDM }}. | 
| Activer [{{ fr.WAPPS }}](/workspace/workspace-apps/)               | Permet à l'utilisateur d'utiliser le hub avec {{ fr.WAPPS }} {{ fr.CTOOL }}.                                                                                                                                                                |
| Autoriser hors ligne     | Permet à l'utilisateur d'utiliser le hub comme source de données en mode hors ligne dans {{ fr.RDM }}.                                                                                                                                                  |
| Est administrateur                  | Définit l'utilisateur comme administrateur du hub. Cette option ne peut pas être changée si l'utilisateur est le propriétaire du hub (comme vu dans l'image ci-dessus).       
| Est activé                       | Active l'utilisateur dans le hub.  |                                                                            |
| [Autoriser l'envoi de messages](/hub/web-interface/secure-messages/) | Sélectionnez si l'utilisateur est autorisé à envoyer des messages avec pièces jointes, sans pièces jointes, ou n'est pas autorisé à envoyer des messages.                                                                                                            |
| Profil d'interface utilisateur                     | Sélectionnez le profil d'interface utilisateur entre ***Professionnel de l'informatique***, ***Utilisateur professionnel***, ou ***Défaut***. Cela ne peut être changé qu'en modifiant l'utilisateur, pas lors de sa création.   |
| Date d'expiration                | Définir une [date d'expiration](/hub/web-interface/administration/management/users/#set-an-expiration-date-for-a-user) pour l'utilisateur. | 
## Supprimer un utilisateur

![Supprimer](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2275.png)

Si vous cliquez sur l'icône ***Supprimer***, il vous sera demandé si vous voulez vraiment supprimer cet utilisateur de ce hub. Cliquer sur ***Supprimer*** pour confirmer.

![Confirmation de suppression](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2278.png)

{% snippet, "shieldInfo" %}
Pour des raisons de sécurité, il n'est pas possible de se supprimer soi-même ni le propriétaire du hub.
{% endsnippet %}

## Réinviter un utilisateur

![Réinviter l'utilisateur](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2276.png)

Dès que vous cliquez sur cette icône, un nouvel e-mail d'invitation est envoyé à l'utilisateur. Il doit alors ouvrir le hub via cette invitation.

## Définir une date d'expiration pour un utilisateur

Vous pouvez déterminer à l'avance quand un compte utilisateur ne devrait plus être utilisé. Cela est particulièrement utile pour les utilisateurs ***externes*** et ***privilégiés*** tels que les ***contractants***.

1. Sélectionner l'***utilisateur***.
1. Choisir une ***date d'expiration***. 

{% snippet, "badgeInfo" %}
Un message d'avertissement est affiché à l'utilisateur si le compte expire dans moins de 24 heures.
{% endsnippet %}

3. Cliquer sur ***Mettre à jour*** pour sauvegarder. 

![Date d'expiration](https://cdnweb.devolutions.net/docs/HUBB6001_2024_1.png)
