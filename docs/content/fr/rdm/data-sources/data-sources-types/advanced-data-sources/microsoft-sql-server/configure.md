---
eleventyComputed:
  title: Configurer SQL Server
---
1. Installer Microsoft SQL Server ou Microsoft SQL Server Express.
{% snippet, "badgeInfo" %}
Les instances de Microsoft SQL Server nouvellement installées n'autorisent pas les connexions à distance. Veuillez suivre les instructions dans SQL Server.
{% endsnippet %}

{% snippet, "badgeInfo" %}
Pour une sécurité accrue, vous pouvez activer le chiffrement SSL pour communiquer avec votre instance de SQL Server. Cependant, en raison d'une limitation du framework, cela n'est pas compatible avec nos versions iOS et Android de {{ fr.RDM }}.
Veuillez suivre les instructions sur [Configurer le moteur de base de données SQL Server pour le chiffrement des connexions](https://learn.microsoft.com/en-US/sql/database-engine/configure-windows/configure-sql-server-encryption).
{% endsnippet %}

2. Suivre les étapes dans [Créer une source de données](/rdm/windows/data-sources/create-new-data-source/). À l'étape 4, après avoir configuré les paramètres de connexion mais avant de tester le serveur ou de vérifier autrement la connexion, continuer avec les étapes ci-dessous.
1. Sélectionner l'onglet ***Upgrade*** et cliquer sur le bouton ***Créer la base de données***. Si la base de données est déjà créée sur Microsoft SQL Server, cliquer sur le bouton ***Mettre à jour la base de données*** pour ajouter les tables appropriées à la base de données.
![Onglet Upgrade](https://cdnweb.devolutions.net/docs/RDMW4024_2024_1.png)
1. Une fois la base de données créée, créer un compte administrateur pour la base de données via le menu ***Administration – Utilisateurs***.
{% snippet, "badgeInfo" %}
Si la base de données est créée en utilisant un administrateur système (exemple : SA), nous recommandons de garder cet utilisateur uniquement pour la création de la base de données et la [mise à niveau de la base de données](/rdm/windows/installation/database-upgrade/). Un compte administrateur {{ fr.RDM }} doit être créé en premier. Ensuite, les utilisateurs réguliers sont créés avec ce compte administrateur.
{% endsnippet %}

![Créer un compte administrateur {{ fr.RDM }}](https://cdnweb.devolutions.net/docs/RDMW4025_2024_1.png)

{% snippet, "badgeInfo" %}
Notez que {{ fr.RDMLINUX }} n'était pas destiné à prendre en charge le mode d'authentification de sécurité intégrée. Ainsi, il n'est pas recommandé d'utiliser cette fonctionnalité.
{% endsnippet %}

5. Se connecter à la base de données Microsoft SQL Server avec le compte administrateur {{ fr.RDM }}. Pour ce faire, éditer la source de données utilisée pour créer la base de données et changer les informations de connexion pour le compte administrateur créé avec {{ fr.RDM }}.
![Connexion à la base de données avec le compte administrateur {{ fr.RDM }}](https://cdnweb.devolutions.net/docs/RDMW4026_2024_1.png)

La source de données Microsoft SQL Server est maintenant correctement configurée.
