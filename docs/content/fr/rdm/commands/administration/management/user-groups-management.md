---
eleventyComputed:
  title: Gestion des groupes d'utilisateurs
---
{% youtube 'rYYkfgdeY5E' %}

Gérer plusieurs utilisateurs en même temps en les regroupant avec les Groupes d'Utilisateurs dans {{ fr.RDM }}. La gestion des permissions accordées aux groupes d'utilisateurs est assez similaire aux notions correspondantes pour les utilisateurs, mais au lieu d'un seul utilisateur, elles s'appliquent à tous les utilisateurs auxquels vous avez assigné les groupes d'utilisateurs.

{% snippet, "badgeInfo" %}
Cette fonctionnalité est uniquement disponible avec une Source de Données Avancée.
{% endsnippet %}

### Groupes d'Utilisateurs dans {{ fr.DVLS }}

Les Groupes d'Utilisateurs dans {{ fr.DVLS }} sont en fait des liens vers des groupes Active Directory. En tirant parti de l'intégration d'Active Directory, vous pouvez facilement définir les droits d'accès pour tous les utilisateurs du domaine de votre organisation. Une fois qu'un utilisateur du domaine se connecte à la source de données {{ fr.DVLS }}, son compte utilisateur sera créé si nécessaire et les droits des utilisateurs seront contrôlés par les groupes définis.

{% snippet, "shieldWarning" %}
Veuillez noter que les permissions de groupe non sécurisées (celles au-dessus de la grille) sont ignorées. Vous devez les définir pour chaque utilisateur individuellement.
{% endsnippet %}

Pour plus d'informations, veuillez consulter [Gestion des Groupes d'Utilisateurs {{ fr.DVLS }}](/server/web-interface/administration/security-management/user-groups/).

## Créer des Groupes d'Utilisateurs

Les Groupes d'Utilisateurs dans {{ fr.RDM }} sont principalement utilisés pour regrouper des utilisateurs. Vous pouvez assigner plusieurs groupes d'utilisateurs à chaque utilisateur. Le résultat final est l'union de toutes les permissions données aux groupes d'utilisateurs.

Pour créer des groupes d'utilisateurs, dans la fenêtre ***Gestion des Utilisateurs et de la Sécurité***, cliquez sur le bouton ***Ajouter un Groupe d'Utilisateurs*** dans la section ***Groupes d'Utilisateurs***. Depuis le même menu, vous pouvez également modifier, assigner des utilisateurs, supprimer ou actualiser.
![Groupes d'Utilisateurs - Ajouter un Groupe d'Utilisateurs](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11310.png)
