---
eleventyComputed:
  title: Configurer SQL Server
---
1. Installer SQL Server ou SQL Server Express.

{% snippet, "badgeInfo" %}
Les instances SQL Server nouvellement installées n'autorisent pas les connexions à distance. Veuiller suivre les instructions de SQL Server.
{% endsnippet %}

{% snippet, "badgeInfo" %}
Pour plus de sécurité, vous pouvez activer le cryptage SSL pour communiquer avec votre instance de SQL Server. Cependant, en raison d'une limitation du cadre, cela n'est pas compatible avec nos versions iOS et Android de {{ fr.RDM }}. Veuillez suivre les instructions sur [Configurer le moteur de base de données SQL Server pour le chiffrement des connexions](https://learn.microsoft.com/fr-ca/sql/database-engine/configure-windows/configure-sql-server-encryption).
{% endsnippet %}

2. Cliquer sur le bouton de réglage dans le ***{{ fr.NPANE }}*** ou aller dans ***Fichier - Sources de données***.
![Bouton sources de données](https://cdnweb.devolutions.net/docs/fr/rdm/mac/clip4241.png)
1. Cliquer sur le signe plus pour créer une nouvelle source de données.
![Nouvelle source de données](https://cdnweb.devolutions.net/docs/fr/rdm/mac/clip4243.png)
1. Sélectionner Microsoft SQL Server.
![Choisir une source de données](https://cdnweb.devolutions.net/docs/fr/rdm/mac/RdmMac4020.png)
1. Configurer la connexion à votre SQL Server avec un utilisateur disposant de privilèges suffisants pour créer la base de données.
![SQL Server - Général](https://cdnweb.devolutions.net/docs/fr/rdm/mac/clip4265.png)
1. Cliquer sur l'onglet ***Mise à niveau*** et appuyez sur le bouton ***Créer une base de données***. Si la base de données est déjà créée sur SQL Server, appuyer sur le bouton ***Mettre à jour la base de données*** pour créer les tables appropriées dans la base de données.
![SQL Server - Mise à niveau](https://cdnweb.devolutions.net/docs/fr/rdm/mac/RdmMac4021.png)
1. Une fois la base de données créée, créez un compte d'administrateur {{ fr.RDM }} via le menu ***Administration - Utilisateurs***.
{% snippet, "badgeInfo" %}
Si votre base de données a été créée à l'aide d'un Super Utilisateur (exemple : SA), nous vous recommandons de conserver cet utilisateur uniquement pour la création de la base de données et/ou pour la mise à niveau de la base de données. Un compte administrateur {{ fr.RDM }} doit d'abord être créé, puis les utilisateurs doivent être créés avec ce compte administrateur {{ fr.RDM }}.
{% endsnippet %}

8. Connectez-vous à la source de données SQL Server avec le compte d'administrateur {{ fr.RDM }}. Pour ce faire, allez dans ***Fichier - Source de données*** et cliquer sur le bouton de paramétrage pour éditer votre source de données SQL. Entrer ensuite le compte administrateur {{ fr.RDM }} que vous avez créé dans le nom d'utilisateur.
![SQL  Server - Général - Nom d'utilisateur](https://cdnweb.devolutions.net/docs/fr/rdm/mac/clip4265.png)

Vous pouvez maintenant commencer la création de vos sessions ou la création de vos utilisateurs.

