---
title: Configurer SQL Server
---
1. Installer SQL Server ou SQL Server Express. 
{% snippet icon.badgeInfo %} 
Les instances SQL Server nouvellement installées n'autorisent pas les connexions à distance. Veuillez suivre les instructions de SQL Server. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Pour plus de sécurité, vous pouvez activer le cryptage SSL pour communiquer avec votre instance de SQL Server. Cependant, en raison d'une limitation du cadre, cela n'est pas compatible avec nos versions iOS et Android de {{ fr.RDM }}. Veuillez suivre les instructions sur [https://learn.microsoft.com/fr-fr/sql/database-engine/configure-windows/configure-sql-server-encryption?view=sql-server-ver16](https://learn.microsoft.com/fr-fr/sql/database-engine/configure-windows/configure-sql-server-encryption?view=sql-server-ver16) 
{% endsnippet %}
 

2. Cliquer sur les points de suspension dans le ***{{ fr.NPANE }}*** ou aller dans ***Fichier – Sources de données***.  
![Menu des sources de données](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip11364.png) 
1. Cliquer sur le signe plus pour créer une nouvelle source de données.  
![Nouvelle source de données](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip10816.png) 
1. Sélectionner Microsoft SQL Server dans les types de sources de données et cliquer sur ***OK***.  
![Ajouter une nouvelle source de données](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip11365.png) 
1. Configurer tous vos paramètres de connexion. 
1. Sélectionner l'onglet ***Mise à niveau*** et cliquer sur le bouton ***Créer une base de données***. Si la base de données est déjà créée sur Microsoft SQL Server, cliquer sur le bouton ***Mettre à jour la base de données*** pour ajouter les tables appropriées à la base de données.  
![Mise à niveau](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip11360.png) 
1. Une fois la base de données créée, créez un compte d'administrateur {{ fr.RDM }} via le menu ***Administration – Utilisateurs***. 
{% snippet icon.badgeInfo %} 
Si votre base de données a été créée à l'aide d'un Super Utilisateur (exemple: SA), nous vous recommandons de conserver cet utilisateur uniquement pour la création de la base de données et/ou pour la mise à niveau de la base de données. Un compte administrateur {{ fr.RDM }} doit d'abord être créé, puis les utilisateurs doivent être créés avec ce compte administrateur {{ fr.RDM }}. 
{% endsnippet %}
 
![Créer un compte administrateur](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip3415.png) 

8. Connectez-vous à la source de données SQL Server avec le compte d'administrateur {{ fr.RDM }} . Pour ce faire, allez dans {{ fr.RDM }} et cliquer sur le bouton de paramétrage pour éditer votre source de données SQL. Entrer ensuite le compte administrateur {{ fr.RDM }} que vous avez créé dans le nom d'utilisateur.  
![Nom d'utilisateur et Mot de passe de l'administrateur](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip11497.png) 

La source de données Microsoft SQL Server est désormais correctement configurée. 

