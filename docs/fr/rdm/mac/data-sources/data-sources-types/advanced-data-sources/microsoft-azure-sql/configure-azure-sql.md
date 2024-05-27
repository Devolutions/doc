---
eleventyComputed:
  title: Configurer Azure SQL
---
1. Assurez-vous que vous disposez d'un abonnement Azure SQL valide pour pouvoir créer votre base de données.
1. Cliquer sur le bouton de réglage dans le ***{{ fr.NPANE }}*** ou aller dans ***Fichier - Sources de données***.
![Bouton sources de données](https://cdnweb.devolutions.net/docs/fr/rdm/mac/clip4241.png)
1. Cliquer sur le signe plus pour créer une nouvelle source de données.
![Nouvelle source de données](https://cdnweb.devolutions.net/docs/fr/rdm/mac/clip4243.png)
1. Sélectionner Microsoft Azure SQL.
![Choisir une source de données](https://cdnweb.devolutions.net/docs/fr/rdm/mac/clip4256.png)
1. Configurer la connexion à votre Azure SQL avec un utilisateur disposant de privilèges suffisants pour créer la base de données.
![Azure SQL - Général](https://cdnweb.devolutions.net/docs/fr/rdm/mac/clip4265.png)
1. Cliquer sur l'onglet ***Mise à niveau*** et appuyez sur le bouton ***Créer une base de données***. Si la base de données est déjà créée sur Azure SQL, appuyer sur le bouton ***Mettre à jour la base de données*** pour créer les tables appropriées dans la base de données.
![Azure SQL - Mise à niveau](https://cdnweb.devolutions.net/docs/fr/rdm/mac/clip4258.png)
1. Une fois la base de données créée, créez un compte d'administrateur {{ fr.RDM }} via le menu ***Administration - Utilisateurs***.

{% snippet, "badgeInfo" %}
Si votre base de données a été créée à l'aide d'un Super Utilisateur (exemple : SA), nous vous recommandons de conserver cet utilisateur uniquement pour la création de la base de données et/ou pour la mise à niveau de la base de données. Un compte administrateur {{ fr.RDM }} doit d'abord être créé, puis les utilisateurs doivent être créés avec ce compte administrateur {{ fr.RDM }}.
{% endsnippet %}

8. Connectez-vous à la source de données Azure SQL avec le compte d'administrateur {{ fr.RDM }}. Pour ce faire, allez dans ***Fichier - Source de données*** et cliquer sur le bouton de paramétrage pour éditer votre source de données SQL. Entrer ensuite le compte administrateur {{ fr.RDM }} que vous avez créé dans le nom d'utilisateur.
![Azure SQL - Général - Nom d'utilisateur](https://cdnweb.devolutions.net/docs/fr/rdm/mac/clip4265.png)

Vous pouvez maintenant commencer la création de vos sessions ou la création de vos utilisateurs.

