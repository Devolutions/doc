---
_schema: default
eleventyComputed:
  title: Utilisateurs
  description: Dans la section Utilisateurs, vous pouvez gérer les utilisateurs et les paramètres des utilisateurs.
---
Dans la section ***Utilisateurs***, vous pouvez gérer les utilisateurs et les paramètres des utilisateurs.

{% snippet, "badgeHelp" %}
Apprendre à [ajouter des utilisateurs](/hub/web-interface/administration/management/users/create-invite-users/) ou [ajouter un administrateur](/hub/web-interface/administration/management/users/administrator-invite/).
{% endsnippet %}

![Paramètres utilisateur](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2270.png)

## Définir un utilisateur comme propriétaire

![Définir comme propriétaire](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2273.png)

Si vous cliquez sur l'icône ***Définir comme propriétaire***, il vous sera demandé si vous voulez vraiment changer la propriété de l'actuel propriétaire à cet utilisateur. Cliquer sur ***Oui*** pour confirmer.

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

<table><thead><tr><th><p>OPTION</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p>Activer <a href="/workspace/workspace-browser-extension/">{{ fr.WBEX }}</a></p></td><td><p>Permet à l'utilisateur d'utiliser le hub avec {{ fr.WBEX }}.</p></td></tr><tr><td><p>Activer <a href="/workspace/workspace-apps/">{{ fr.WAPPS }}</a></p></td><td><p>Permet à l'utilisateur d'utiliser le hub avec {{ fr.WAPPS }} {{ fr.CTOOL }}.</p></td></tr><tr><td><p>Permettre hors ligne</p></td><td><p>Permet à l'utilisateur d'utiliser le hub comme source de données en mode hors ligne dans {{ fr.RDM }}.</p></td></tr><tr><td><p>Est administrateur</p></td><td><p>Définit l'utilisateur comme administrateur du hub. Cette option ne peut pas être changée si l'utilisateur est le propriétaire du hub (comme vu dans l'image ci-dessus).</p></td></tr><tr><td><p>Est activé</p></td><td><p>Active l'utilisateur dans le hub.</p></td></tr><tr><td><p><a href="/hub/web-interface/secure-messages/">Permettre d'envoyer des messages</a></p></td><td><p>Sélectionnez si l'utilisateur est autorisé à envoyer des messages avec pièces jointes, sans pièces jointes, ou n'est pas autorisé à envoyer des messages.</p></td></tr><tr><td><p>Profil d'interface utilisateur</p></td><td><p>Sélectionnez le profil d'interface utilisateur entre <em><strong>Professionnel de l'informatique</strong></em>, <em><strong>Utilisateur professionnel</strong></em>, ou <em><strong>Par défaut</strong></em>. Cela ne peut être changé qu'en modifiant l'utilisateur, pas lors de sa création.</p></td></tr><tr><td><p>Tags</p></td><td><p>Les <em><strong>Tags externes</strong></em> et <em><strong>Tags privilégiés</strong></em> peuvent être ajoutés lors de la création ou de la modification des utilisateurs. Ils sont utiles pour les <em><strong>utilisateurs temporaires</strong></em>, tels que les <em><strong>contractants</strong></em>. Une <em><strong>date d'expiration</strong></em> doit être définie. Les <em><strong>Tags</strong></em> apparaissent dans le menu Compte sous Informations utilisateur et sont affichés dans les sources de données {{ fr.DHUB }} dans {{ fr.RDM }}.</p></td></tr><tr><td><p>Date d'expiration</p></td><td><p>Définir une <a href="/hub/web-interface/administration/management/users/#set-an-expiration-date-for-a-user">date d'expiration</a> pour l'utilisateur.</p></td></tr><tr><td><p><a href="/hub/kb/hub-business/how-to-articles/link-account/">Compte lié </a></p></td><td><p>Lier un autre compte sous le même utilisateur. </p></td></tr></tbody></table>

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
2. Choisir une ***date d'expiration***.

{% snippet, "badgeInfo" %}
Un message d'avertissement est affiché à l'utilisateur si le compte expire dans moins de 24 heures.
{% endsnippet %}

3. Cliquer sur ***Mettre à jour*** pour sauvegarder.

![Date d'expiration](https://cdnweb.devolutions.net/docs/HUBB6001_2024_1.png)