---
eleventyComputed:
  title: Groupes d'utilisateurs
---
{% youtube 'UkZrfkzw5eI' %}  

Les ***Groupes d'utilisateurs*** dans {{ fr.RDM }} sont principalement utilisés pour réduire le temps de gestion des utilisateurs. La gestion des autorisations accordées aux groupes d'utilisateurs est assez similaire aux notions correspondantes pour les utilisateurs, mais au lieu d'un seul utilisateur, elles s'appliquent à tous les utilisateurs auxquels vous avez attribué le groupe d'utilisateurs.  

{% snippet icon.badgeInfo %} 
Cette fonctionnalité est uniquement disponible avec une source de données avancées. 
{% endsnippet %}
 
### Groupes d'utilisateurs dans {{ fr.DVLS }} 

Les groupes d'utilisateurs dans {{ fr.DVLS }} sont en fait des liens vers des groupes Active Directory. En tirant parti de l'intégration d'Active Directory, vous pouvez facilement définir des droits d'accès pour tous les utilisateurs de domaine de votre organisation. Une fois qu'un utilisateur du domaine se connecte à la source de données {{ fr.DVLS }}, son compte d'utilisateur est créé si nécessaire et les droits des utilisateurs sont contrôlés par les groupes définis. 

{% snippet icon.shieldWarning %} 
Veuillez noter que les autorisations de groupe non sécurisées (celles situées au-dessus de la grille) sont ignorées. Vous devez les définir individuellement pour chaque utilisateur. 
{% endsnippet %}
 
Pour plus d'informations, consultez [Gestion des groupes d'utilisateurs](/fr/server/web-interface/administration/security-management/user-groups/). 

## Créer des groupes d'utilisateurs 

Les ***Groupes d'utilisateur*** dans {{ fr.RDM }} sont des ensembles d'autorisations que vous attribuez à un utilisateur. Vous pouvez attribuer plusieurs groupes d'utilisateurs à chaque utilisateur et le résultat final est l'union de toutes les autorisations.  

Pour créer un nouveau groupe d'utilisateurs aller dans ***Administration - Groupes d'utilisateurs*** et cliquer sur le signe plus ***Ajouter un groupe d'utilisateurs***. Dans le même menu, vous pouvez également modifier, affecter des utilisateurs, supprimer ou actualiser.  
![Gestion des usagers et de la sécurité - Groupes d'utilisateurs - Ajouter un groupe d'utilisateurs](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip11310.png) 

