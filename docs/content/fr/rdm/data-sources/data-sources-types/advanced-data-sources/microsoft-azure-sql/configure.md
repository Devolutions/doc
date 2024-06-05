---
eleventyComputed:
  title: Configurer Azure SQL
---
1. S'assurer d'avoir un abonnement Microsoft Azure SQL valide pour pouvoir créer votre base de données.
1. Suivre les étapes dans [Créer une source de données](/rdm/windows/data-sources/create-new-data-source/). À l'étape 4, après avoir configuré les paramètres de connexion mais avant de tester le serveur ou de vérifier autrement la connexion, continuer avec les étapes ci-dessous.
1. Sélectionner l'onglet ***Upgrade*** et cliquer sur le bouton ***Créer la base de données***. Si la base de données est déjà créée sur le serveur Microsoft Azure SQL, cliquer sur le bouton ***Mettre à jour la base de données*** pour ajouter les tables appropriées à la base de données.
![Onglet Upgrade](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10377.png)
1. Une fois la base de données créée, créer un compte administrateur pour la base de données via le menu ***Administration – Gestion des utilisateurs***.
{% snippet, "badgeInfo" %}
Si la base de données est créée en utilisant un administrateur système (exemple : SA), nous recommandons de garder cet utilisateur uniquement pour la création de la base de données et la [mise à niveau de la base de données](/rdm/windows/installation/database-upgrade/). Un compte administrateur {{ fr.RDM }} doit être créé en premier. Ensuite, les utilisateurs réguliers sont créés avec ce compte administrateur.
{% endsnippet %}

![Créer un compte administrateur {{ fr.RDM }}](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip3415.png)

5. Se connecter à la base de données Microsoft Azure SQL avec le compte administrateur {{ fr.RDM }}. Pour ce faire, éditer la source de données utilisée pour créer la base de données et changer les informations de connexion pour le compte administrateur que vous avez créé.
![Connexion à la base de données avec le compte administrateur {{ fr.RDM }}](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11501.png)

La source de données Microsoft Azure SQL est maintenant correctement configurée.
