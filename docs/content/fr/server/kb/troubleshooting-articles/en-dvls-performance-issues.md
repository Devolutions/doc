---
_schema: default
eleventyComputed:
  title: '{{ fr.DVLS }} problèmes de performance '
  description: 'Le support de Devolutions peut vous aider avec les problèmes de performance. '
  status:
  keywords:
---
[Le support de Devolutions](mailto:service@devolutions.net) peut vous aider avec les problèmes de performance de {{ fr.DVLS }}. Pour ce faire, le ***rapport d'utilisation du disque par les principales tables*** depuis ***SQL Server Management Studio (SSMS)*** doit être généré pour évaluer le nombre d'enregistrements dans des tables de base de données spécifiques.

- Ouvrir ***SQL Server Management Studio (SSMS)***.
- ***Clic droit - Rapports - Rapports standards - Utilisation du disque par les principales tables***.
- Envoyer le rapport à [service@devolutions.net](mailto:service@devolutions.net).

Voici un exemple de ce à quoi ressemble le rapport.

![Rapport d'utilisation du disque par les principales tables](https://cdnweb.devolutions.net/docs/DVLS6078_2024_2.png "Rapport d'utilisation du disque par les principales tables")

Voici la ***requête SQL*** pour obtenir le même résultat si la base de données est hébergée sur ***Azure***.

```
SELECT TOP 1000
        a3.name AS SchemaName,
        a2.name AS TableName,
        a1.rows as Row_Count,
        (a1.reserved )* 8.0 / 1024 AS reserved_mb,
        a1.data * 8.0 / 1024 AS data_mb,
        (CASE WHEN (a1.used ) > a1.data THEN (a1.used ) - a1.data ELSE 0 END) * 8.0 / 1024 AS index_size_mb,
        (CASE WHEN (a1.reserved ) > a1.used THEN (a1.reserved ) - a1.used ELSE 0 END) * 8.0 / 1024 AS unused_mb
    FROM    (   SELECT
                ps.object_id,
                SUM ( CASE WHEN (ps.index_id < 2) THEN row_count    ELSE 0 END ) AS [rows],
                SUM (ps.reserved_page_count) AS reserved,
                SUM (CASE   WHEN (ps.index_id < 2) THEN (ps.in_row_data_page_count + ps.lob_used_page_count + ps.row_overflow_used_page_count)
                            ELSE (ps.lob_used_page_count + ps.row_overflow_used_page_count) END
                    ) AS data,
                SUM (ps.used_page_count) AS used
                FROM sys.dm_db_partition_stats ps
                GROUP BY ps.object_id
            ) AS a1
    INNER JOIN sys.all_objects a2  ON ( a1.object_id = a2.object_id )
    INNER JOIN sys.schemas a3 ON (a2.schema_id = a3.schema_id)
    WHERE a2.type <> N'S' and a2.type <> N'IT'
    order by a1.reserved desc
```
```