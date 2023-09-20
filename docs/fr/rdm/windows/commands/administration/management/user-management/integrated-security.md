---
  title: Sécurité intégrée
---
La Sécurité intégrée est le nom que Microsoft donne à la technologie qui utilise les identifiants de votre session en cours d'exécution et les transmet automatiquement aux ressources distantes pour l'authentification.  

{% snippet icon.badgeInfo %} 
Cette fonctionnalité nécessite une source de données [SQL Server](/fr/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-sql-server/) ou [{{ fr.DVLS }}](/fr/rdm/windows/data-sources/data-sources-types/advanced-data-sources/server/). 
{% endsnippet %}
 
## Paramètres 

Dans la fenêtre ***Gestion des utilisateurs*** lors de l'activation de la case à cocher Sécurité intégrée, le champ du mot de passe sera désactivé, car le système d'exploitation fournira automatiquement une copie en cache.  
![Sécurité intégrée](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip10291.png) 
Lorsque l'option est activée, un bouton de sélection apparaît ou est activé. Cliquer sur ce bouton pour afficher la boîte de dialogue ***Sélectionnez Utilisateur***.  
![Choisir un utilisateur](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip10294.png) 
{% snippet icon.badgeInfo %} 
Assurez-vous que le domaine approprié est affiché dans le champ ***À partir de cet emplacement***. Parfois, l'emplacement par défaut est l'ordinateur local. Cliquer sur le bouton ***Emplacements*** pour rechercher le domaine et le remplacer. 
{% endsnippet %}
 
Lorsque vous utilisez la sécurité intégrée, la session Windows en cours d'exécution doit provenir d'un utilisateur du domaine. Si vous devez utiliser d'autres identifiants, {{ fr.RDM }} doit être démarré à l'aide de la commande RUNAS comme décrite dans Exécution de {{ fr.RDM }} en tant qu'autre utilisateur. 

