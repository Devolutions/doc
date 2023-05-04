---
title: Sécurité intégrée
---
La Sécurité intégrée est le nom que Microsoft donne à la technologie qui utilise les identifiants de votre session en cours d&apos;exécution et les transmet automatiquement aux ressources distantes pour l&apos;authentification.  

{% snippet icon.badgeInfo %} 
Cette fonctionnalité nécessite une source de données [SQL Server](/fr/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-sql-server/) &#32; ou [{{ fr.RDMS }}](/fr/rdm/windows/data-sources/data-sources-types/advanced-data-sources/server/) . 
{% endsnippet %}
 
## Paramètres 

Dans la fenêtre ***Gestion des utilisateurs*** lors de l&apos;activation de la case à cocher Sécurité intégrée, le champ du mot de passe sera désactivé, car le système d&apos;exploitation fournira automatiquement une copie en cache.  
![Sécurité intégrée](/img/fr/rdm/windows/clip10291.png) 
Lorsque l&apos;option est activée, un bouton de sélection apparaît ou est activé. Cliquer sur ce bouton pour afficher la boîte de dialogue ***Sélectionnez Utilisateur*** .  
![Choisir un utilisateur](/img/fr/rdm/windows/clip10294.png) 
{% snippet icon.badgeInfo %} 
Assurez-vous que le domaine approprié est affiché dans le champ ***À partir de cet emplacement*** . Parfois, l&apos;emplacement par défaut est l&apos;ordinateur local. Cliquer sur le bouton ***Emplacements*** pour rechercher le domaine et le remplacer. 
{% endsnippet %}
 
Lorsque vous utilisez la sécurité intégrée, la session Windows en cours d&apos;exécution doit provenir d&apos;un utilisateur du domaine. Si vous devez utiliser d&apos;autres identifiants, {{ fr.RDM }} doit être démarré à l&apos;aide de la commande RUNAS comme décrite dans Exécution de {{ fr.RDM }} en tant qu&apos;autre utilisateur. 

