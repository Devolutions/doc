---
eleventyComputed:
  title: Source de données SQL Server avec sécurité intégrée
  keywords:
  - rôle
---
Nous allons vous guider pas à pas pour configurer et tester un déploiement de {{ fr.RDM }} contre une source de données SQL Server utilisant la Sécurité Intégrée.

{% snippet, "shieldWarning" %}
Tout utilisateur (domaine, machine locale ou utilisateur SQL) ayant un rôle de serveur de ***sysadmin*** est automatiquement un administrateur de {{ fr.RDM }}
{% endsnippet %}

## Créer la base de données

La première étape consiste à créer la base de données qui stockera toutes vos entrées.

Cliquer sur le bouton ***ellipsis*** dans le ***{{ fr.NPANE }}***, puis cliquer sur ***Ajouter une nouvelle source de données***.
![!!KB4587](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4587.png)

Sélectionner la source de données ***Microsoft SQL Server*** et cliquer sur ***OK***.
![!!KB4588](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4588.png)

* Spécifier le ***Nom, Serveur*** et ***Base de données***.
* S'authentifier avec un utilisateur faisant partie du rôle ***sysadmin***.
![!!KB4589](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4589.png)
{% snippet, "badgeInfo" %}
Si l'utilisateur Windows connecté ne fait pas partie du rôle ***sysadmin*** de SQL Server et que vous avez configuré le serveur pour utiliser le mode d'authentification SQL Server et Windows, alors utiliser un utilisateur SQL Server (SA par exemple) qui a les groupes d'utilisateurs appropriés assignés. Vous pouvez ensuite vous ajouter en tant qu'utilisateur {{ fr.RDM }} plus tard et changer la source de données pour utiliser la sécurité intégrée.
{% endsnippet %}

* Depuis l'onglet de mise à niveau, cliquer sur ***Tester le serveur*** puis ***Créer la base de données*** pour créer la base de données SQL Server.
![!!KB4590](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4590.png)
Appuyer sur ***OK*** pour fermer les dialogues. Dans le ***{{ fr.NPANE }}***, sélectionner la nouvelle source de données créée dans la liste déroulante des sources de données.
![!!KB4591](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4591.png)

## Créer des utilisateurs

Pour créer des utilisateurs, naviguer vers ***Administration – Utilisateurs***.
![!!KB4592](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4592.png)

Cliquer sur ***Ajouter des utilisateurs***.
![!!KB4593](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4593.png)

Cocher la case ***Sécurité intégrée (Active Directory)*** et cliquer sur le bouton ellipsis pour sélectionner l'utilisateur de domaine à ajouter.
![!!KB4594](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4594.png)

Sélectionner le ***Type d'utilisateur*** Accorder les droits ***Ajouter***, ***Modifier***, et ***Supprimer*** (optionnel, utilisateur restreint uniquement). Pour plus d'informations sur les types d'utilisateurs et les droits, veuillez consulter [Gestion des utilisateurs](/rdm/windows/commands/administration/management/user-management/).

{% snippet, "badgeInfo" %}
Garder la case ***Créer un identifiant de connexion et un utilisateur SQL Server*** cochée. Cela aura pour effet de faire correspondre un nouvel identifiant de connexion au compte de domaine et de le lier à un utilisateur.

Vous pouvez décocher cela dans le cas où votre DBA a déjà créé votre identifiant de connexion sur le serveur SQL.
{% endsnippet %}

Répéter ces étapes pour chaque utilisateur nécessitant un accès à cette source de données dans {{ fr.RDM }}.

## Configurer {{ fr.RDM }} pour d'autres postes de travail

Pour configurer la source de données sur d'autres postes de travail, trois méthodes sont disponibles :

* Créer la source de données comme précédemment, en veillant à cocher la case ***Sécurité intégrée (Active Directory)***.
* Exporter la source de données depuis le poste de travail initial et l'importer dans {{ fr.RDM }} sur tous les postes clients.
* Utiliser notre service [{{ fr.CIM }}](/rdm/windows/installation/client/custom-installer-service/) pour aider à distribuer l'application et personnaliser le processus d'installation.

## Tester la configuration

Si vous avez un second ensemble d'identifiants de domaine, vous pourriez utiliser cette astuce pour tester localement. [Exécuter {{ fr.RDM }} en tant qu'un autre utilisateur](/rdm/kb/rdm-windows/how-to-articles/running-rdm-as-another-user/)

Maintenant dans votre {{ fr.RDM }} avec des droits d'administrateur, créer quelques groupes d'utilisateurs (Admin, Production, Staging) et leur assigner des utilisateurs.
