---
eleventyComputed:
  title: Migrer d'un type de base de données à un autre
  description: Dans {{ fr.RDM }}, votre organisation utilise actuellement une base de données pour stocker des données, mais souhaite passer à une autre. Ce sujet explique comment déplacer la base de données et/ou les données.
---
{% snippet, "badgeCaution" %}
Pour des raisons de sécurité, d'utilisabilité et d'efficacité, plusieurs sources de données sont marquées comme obsolètes dans {{ fr.RDM }}. Lire plus à ce sujet dans [Sources de données obsolètes](/rdm/kb/rdm-windows/knowledge-base/deprecated-data-sources/).
{% endsnippet %}  

Dans {{ fr.RDM }}, votre organisation utilise actuellement une base de données pour stocker des données, mais souhaite passer à une autre. Ce sujet explique comment déplacer la base de données et/ou les données.

## Scénarios

Différents scénarios peuvent se produire, donc ils seront couverts séparément :

* SQL Server vers Azure SQL ou Azure SQL vers SQL Server : Suivre les étapes dans ce guide de [meilleures pratiques de migration de base de données SQL Server](/rdm/kb/rdm-windows/how-to-articles/sql-server-database-migration/).

* Azure SQL/SQL Server vers MySQL/MariaDB ou MySQL/MariaDB vers Azure SQL/SQL Server : Les schémas utilisés à l'intérieur des bases de données SQL Server/Azure SQL ou MySQL/MariaDB ne sont pas complètement identiques aux schémas MySQL/MariaDB ou SQL Server/Azure SQL respectivement. La méthode d'authentification est également différente. Dans ce cas, la base de données ne peut pas être transférée : la création d'une nouvelle base de données est requise. Ensuite, vos utilisateurs devraient être recréés et un export/import de vos sessions d'une base de données à une autre devrait être effectué. Ce processus est expliqué dans [Export](/rdm/windows/commands/file/export/). Si vos utilisateurs ont un {{ fr.UVLT }}, ils devraient l'exporter manuellement vers la nouvelle base de données.