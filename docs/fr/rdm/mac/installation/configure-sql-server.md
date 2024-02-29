---
eleventyComputed:
  title: Configurer le serveur SQL
---
### Microsoft SQL Server

1. Installer SQL Server ou SQL Server Express (cette édition est gratuite).
{% snippet icon.badgeInfo %}
Les instances SQL Server nouvellement installées n'autorisent pas les connexions à distance. Veuillez suivre les instructions de SQL Server.
{% endsnippet %}

{% snippet icon.shieldNotice %}
Pour plus de sécurité, vous pouvez activer le cryptage SSL pour communiquer avec votre instance de SQL Server.
Veuillez suivre les instructions sur [Configurer le moteur de base de données SQL Server pour le chiffrement des connexions](https://learn.microsoft.com/fr-ca/sql/database-engine/configure-windows/configure-sql-server-encryption).
{% endsnippet %}

2. Pour créer une base de données vide, sélectionner ***Fichier - Sources de données - Ajouter***.
![Ajouter une source de données](https://cdnweb.devolutions.net/docs/fr/rdm/mac/clip0227.png)
1. Choisir ***Microsoft SQL Server*** dans la liste.
![Liste de source de données](https://cdnweb.devolutions.net/docs/fr/rdm/mac/clip0228.png)
1. Configurer la connexion et exécuter un test à l'aide du bouton ***Tester Serveur***.
![Configuration Microsoft SQL Server](https://cdnweb.devolutions.net/docs/fr/rdm/mac/clip0229.png)
