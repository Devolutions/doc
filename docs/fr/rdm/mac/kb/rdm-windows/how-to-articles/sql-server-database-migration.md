---
eleventyComputed:
  title: Meilleures pratiques pour la migration de bases de données SQL Server
  description: Pour migrer le contenu de votre base de données SQL Server locale, nous vous suggérons de suivre les étapes des solutions respectives.
  status: Sujet disponible en langue allemande
---
Pour migrer le contenu de votre base de données SQL Server locale, nous vous suggérons de suivre les étapes des solutions respectives ci-dessous.

Deux outils sont disponibles : vous pouvez choisir entre l'[Assistant de migration de données](#solution-1) (DMA) de Microsoft ou le [Microsoft SQL Server Management Studio](#solution-2) (SSMS).

## Configuration
Nous vous suggérons fortement de nettoyer votre base de données avant le déménagement.

* ***Administration – [Nettoyer l'historique supprimé](/rdm/windows/commands/administration/clean-up/deleted-history/)***
* ***Administration – [Nettoyer l'historique des entrées](/rdm/windows/commands/administration/clean-up/entries-history/)***
* ***Administration – [Nettoyer les journaux d'activité](/rdm/windows/commands/administration/clean-up/logs/)***

### Solution 1
1. Télécharger et installer l'[Assistant de migration de données](https://docs.microsoft.com/en-us/sql/dma/dma-overview) (DMA) de Microsoft.
1. Lancer l'application DMA.
1. Cliquer sur le signe plus "+" pour créer une nouvelle migration.
1. Sélectionner ***Migration*** et nommer le ***Projet***.
1. Sélectionner la ***Source*** de votre ***type de serveur*** et la ***Cible*** de votre ***type de serveur*** dans le menu déroulant et laisser le ***Périmètre de migration*** à ***Schéma et données***. Cliquer ***Créer***.
![!!KB4728](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4728.png)
1. Entrer le ***Nom du serveur local*** et choisir un ***Type d'authentification***.
   {% snippet, "badgeInfo" %}
   Assurer vous d'avoir suffisamment de droits et de permissions pour effectuer cette action.
   {% endsnippet %}
1. Cliquer ***Connecter***.
1. Choisir votre base de données dans la sélection chargée et cliquer ***Suivant***.
![!!KB4729](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4729.png)
1. Entrer le ***Nom du serveur cible*** et choisir un ***Type d'authentification***.
   {% snippet, "badgeInfo" %}
   Assurer vous d'avoir suffisamment de droits et de permissions pour effectuer cette action.
   {% endsnippet %}
1. Cliquer ***Connecter***.
1. Choisir votre base de données dans la sélection chargée et cliquer ***Suivant***.
   {% snippet, "badgeCaution" %}
   Votre nouvelle base de données doit avoir déjà été [créée](https://docs.microsoft.com/en-us/azure/azure-sql/database/single-database-create-quickstart) pour apparaître dans cette liste.
   {% endsnippet %}

   ![!!KB4730](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4730.png)

1. Valider si vous avez des problèmes en faisant défiler la liste des objets de schéma à gauche. Vous pouvez cliquer sur un élément pour plus de détails sur le problème spécifique et si une correction est disponible.
   {% snippet, "badgeCaution" %}
   Les comptes d'utilisateurs avec l'erreur Les utilisateurs Windows peuvent être convertis en utilisateurs externes dans Azure SQL Database doivent être désélectionnés de la liste pour que la migration fonctionne.

   Ces utilisateurs spécifiques devront [exporter](/rdm/mac/kb/rdm-windows/how-to-articles/export-import-entries/) leur ***{{ fr.UVLT }}*** et configuration avant la migration. Ne pas le faire entraînera la perte des données enregistrées sous ces sections : ***Mes paramètres de compte***, ***Paramètres spécifiques à l'utilisateur***, et toute entrée faite dans leur ***{{ fr.UVLT }}***.

   Après avoir exporté les données de l'utilisateur, vous devrez créer un nouvel utilisateur dans votre liste et réimporter les données.
   {% endsnippet %}

1. Lorsque tous les problèmes sont corrigés ou désélectionnés, cliquer ***Générer le script SQL***.
![!!KB4731](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4731.png)
1. Une fois le script généré, valider s'il y a des problèmes, puis cliquer ***Déployer le schéma***.
![!!KB4732](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4732.png)
   {% snippet, "badgeInfo" %}
   Cela peut prendre du temps à exécuter en fonction du nombre d'historiques de connexion que vous avez dans votre base de données.
   {% endsnippet %}

1. Une fois les ***Résultats du déploiement*** terminés, valider s'il y a des problèmes, puis cliquer ***Migrer les données***.
![!!KB4734](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4734.png)
1. Cliquer ***Démarrer la migration des données***. Notez que le nombre de tables peut être différent selon votre version.
![!!KB4735](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4735.png)
1. Attendre que la migration soit complète. Lorsque terminé, vous pouvez fermer l'***Assistant de migration de données***.
![!!KB4736](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4736.png)
1. Vous êtes maintenant prêt à créer la nouvelle source de données dans [{{ fr.RDM }}](#connect-to-remote-desktop-manager) ou à mettre à jour le [{{ fr.DVLSCONSOLE }}](#connect-to-devolutions-server).

### Solution 2 [BACPAC](https://learn.microsoft.com/en-us/sql/relational-databases/data-tier-applications/data-tier-applications?view=sql-server-ver15#bacpac)
1. Utiliser Microsoft SQL Server Management Studio (SSMS).
1. Se connecter à votre base de données SQL Server source.
1. Faire un clic droit sur le ***nom de la base de données (nœud) – Tâches – Exporter l'application de niveau de données…***.
1. Suivre les étapes de l'assistant.
1. Utiliser SSMS, se connecter au serveur SQL de destination.
1. Faire un clic droit sur le ***Bases de données (nœud) – Importer l'application de niveau de données…***.
1. Suivre les étapes de l'assistant.
1. Uniquement pour {{ fr.DVLS }} : Dans le cas d'une source de données SQL, une détection automatique existe déjà lors de l'exportation et la requête est lancée automatiquement, mais pas dans {{ fr.DVLS }}. Par conséquent, si vous migrez un {{ fr.DVLS }}, vous devez également exécuter cette requête après l'importation : `UPDATE dbo.ConnectionHistory SET Version = 0x0000000000000000; UPDATE dbo.DatabaseInfo SET ConnectionCacheID = NEWID(), IntelligentCacheID = NEWID();`
1. Vous êtes maintenant prêt à créer la nouvelle source de données dans [{{ fr.RDM }}](#connect-to-remote-desktop-manager) ou à mettre à jour le [{{ fr.DVLSCONSOLE }}](#connect-to-devolutions-server).

### Solution 3
{% snippet, "badgeCaution" %}
Cette solution n'est pas prise en charge pour une migration locale vers locale. Voici le message d'erreur de SSMS lors de la tentative :

Vous ne pouvez pas utiliser cet assistant pour déplacer des bases de données entre des instances locales de SQL Server. Les opérations prises en charge incluent le déploiement d'une instance locale de SQL Server vers Microsoft Azure SQL Database, de Microsoft Azure SQL Database vers une instance locale de SQL Server, ou d'un Microsoft Azure SQL Database vers un autre Microsoft Azure SQL Database.
{% endsnippet %}

1. Utiliser Microsoft SQL Server Management Studio (SSMS).
1. Faire un clic droit sur le ***nom de la base de données (nœud) – Tâches – Déployer la base de données vers Microsoft Azure SQL Database…***.
1. Suivre les étapes de l'assistant.
1. Vous êtes maintenant prêt à créer la nouvelle source de données dans [{{ fr.RDM }}](#connect-to-remote-desktop-manager) ou à mettre à jour le [{{ fr.DVLSCONSOLE }}](#connect-to-devolutions-server).

### Se connecter à {{ fr.RDM }}
1. Créer une nouvelle source de données dans ***Fichier – Sources de données – Ajouter une nouvelle source de données***.
1. Lors de la première connexion, vous pouvez recevoir le message d'erreur suivant. Si c'est le cas, cliquer sur ***Réparer***.
![!!KB4646](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4646.png)

   {% snippet, "badgeInfo" %}
   Cela peut prendre du temps à exécuter en fonction du nombre d'historiques de connexion que vous avez dans votre base de données.
   {% endsnippet %}

### Se connecter à {{ fr.DVLS }}
Mettre à jour le ***Hôte*** et le ***Nom de la base de données*** pour le {{ fr.DVLSCONSOLE }} dans ***Serveur – Modifier – Base de données***.
![!!KB4971](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4971.png)
