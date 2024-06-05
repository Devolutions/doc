---
eleventyComputed:
  title: Configurer SQL Server
---
1. Installer SQL Server ou SQL Server Express.

{% snippet, "badgeInfo" %}
Les instances de SQL Server nouvellement installées n'autorisent pas les connexions à distance. Veuillez suivre les instructions dans [SQL Server](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/microsoft-sql-server/).
{% endsnippet %}

{% snippet, "badgeInfo" %}
Pour une sécurité accrue, vous pouvez activer le chiffrement SSL pour communiquer avec votre instance de SQL Server. Cependant, en raison d'une limitation du framework, cela n'est pas compatible avec nos versions iOS et Android de {{ fr.RDMMAC }}. Veuillez suivre les instructions sur [Configurer le moteur de base de données SQL Server pour le chiffrement des connexions](https://learn.microsoft.com/en-US/sql/database-engine/configure-windows/configure-sql-server-encryption).
{% endsnippet %}


2. Cliquer sur le bouton de paramètres dans le ***{{ fr.NPANE }}*** ou aller dans ***Fichier – Sources de données***.
![Bouton de paramètres](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10487.png)
1. Cliquer sur le plus pour ajouter une nouvelle source de données.
![Source de données – Ajouter une nouvelle source de données](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10488.png)
1. Sélectionner ***Microsoft SQL Server***.
![Sélectionner la source de données SQL Server](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10489.png)
1. Fournir les informations de connexion pour le SQL Server avec un utilisateur ayant suffisamment de privilèges pour créer la base de données.
![Configuration de la source de données SQL Server](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip6042.png)
1. Sélectionner l'onglet Mise à niveau et cliquer sur le bouton Créer la base de données. Si la base de données est déjà créée sur le SQL Server, appuyer sur le bouton Mettre à jour la base de données pour créer les tables appropriées dans la base de données.
![SQL Server – Onglet Mise à niveau](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip6043.png)
1. Une fois la base de données créée, créer un compte administrateur {{ fr.RDM }} via le menu [Administration – Utilisateurs](/rdm/mac/commands/administration/user-management/).
{% snippet, "badgeInfo" %}
Si la base de données est créée en utilisant un administrateur système (exemple : SA), nous recommandons de garder cet utilisateur uniquement pour la création de la base de données et la [mise à niveau de la base de données](/rdm/mac/installation/database-upgrade/). Un compte administrateur {{ fr.RDM }} doit être créé en premier. Ensuite, les utilisateurs réguliers sont créés avec ce compte administrateur.
{% endsnippet %}


8. Se connecter à la source de données SQL Server avec le compte administrateur {{ fr.RDM }}. Pour ce faire, aller dans ***Fichier – Source de données*** et cliquer sur le bouton de paramètres pour éditer la source de données utilisée pour créer la base de données et changer les informations de connexion pour le compte administrateur créé avec {{ fr.RDM }}.
![SQL Server – Onglet Connexion – Utilisateur](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10492.png)

La source de données SQL Server est maintenant correctement configurée.
