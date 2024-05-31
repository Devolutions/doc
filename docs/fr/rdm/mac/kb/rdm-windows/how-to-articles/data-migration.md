---
eleventyComputed:
  title: Migration de données
  description: Voici les étapes à suivre pour copier des données d'une source de données à une autre. La migration est une exportation de votre source de données originale suivie par une importation dans la nouvelle source de données de destination.
---
{% snippet, "badgeCaution" %}
Pour des raisons de sécurité, d'utilisabilité et d'efficacité, plusieurs sources de données sont marquées comme obsolètes dans {{ fr.RDM }}. En savoir plus à ce sujet dans [Sources de données obsolètes](/rdm/mac/kb/rdm-windows/knowledge-base/deprecated-data-sources/).
{% endsnippet %}

Voici les étapes à suivre pour copier des données d'une source de données à une autre. La migration est une exportation de votre source de données originale suivie par une importation dans la nouvelle source de données de destination.

{% snippet, "badgeCaution" %}
Si vous utilisez un SGBDR autogéré (SQL Server, MySQL, MariaDB), vous pouvez utiliser leurs outils de gestion pour déplacer la base de données vers un autre serveur. Veuillez suivre leur documentation respective sur comment transférer non seulement ces données, mais aussi les comptes utilisateurs.

SQL Server : [Article MSDN sur comment déplacer des bases de données](https://support.microsoft.com/en-us/help/314546/how-to-move-databases-between-computers-that-are-running-sql-server)

MySQL : [Copie de bases de données MySQL](https://dev.mysql.com/doc/refman/5.7/en/copying-databases.html)

MariaDB : [MySQLDump](https://mariadb.com/kb/en/mariadb/mysqldump/)
{% endsnippet %}

* [Exporter une source de données](#export-a-data-source)
* [Importer une source de données](#import-a-data-source)

## Exporter une source de données
1. Sélectionner la source de données que vous souhaitez exporter.
{% snippet, "badgeCaution" %}
Si vous avez plusieurs {{ fr.VLT }}s, vous devrez exporter chaque {{ fr.VLT }} séparément ou utiliser l'option ***Exporter tous les {{ fr.VLT }}s (.rdx)*** dans l'onglet ***Administration***.
{% endsnippet %}

2. Sélectionner ***Fichier – Exporter – Exporter {{ fr.VLT }} (.rdm)***.
![Fichier – Exporter – Exporter {{ fr.VLT }} (.rdm)](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4540.png)
1. Pour une migration typique, vous devriez cocher les options ***Inclure les identifiants***, ***Inclure les pièces jointes et documents***, et ***Chiffrer avec la clé principale***.
    * Vous pouvez choisir de supprimer tous les dossiers présents dans votre arbre de navigation.
    * Il est important d'***Inclure les identifiants*** à cette étape. Si vous choisissez de ne pas le faire, toutes vos entrées seront importées sans aucun identifiant.
    * Si vous avez des documents et pièces jointes sauvegardés dans vos données, nous vous recommandons vivement de cocher l'option pour les inclure dans l'exportation.
    * Choisir de ***Chiffrer avec la clé principale*** comme couche de sécurité supplémentaire.
{% snippet, "badgeWarning" %}
Assurez-vous de ne pas oublier la ***Clé Principale*** car vous ne pourrez pas déchiffrer les données sans elle.
{% endsnippet %}

![Exporter les Entrées](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4541.png)
4. Sauvegarder le fichier.

## Importer une source de données
1. Valider que votre nouvelle source de données est créée et sélectionnée dans le ***{{ fr.NPANE }}***.
1. Sélectionner ***Fichier – Importer – Importer (.rdm)***.
![Fichier – Importer – Importer (.rdm)](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4542.png)
1. Trouver votre fichier précédemment sauvegardé sur votre ordinateur, le sélectionner, puis cliquer sur ***Ouvrir***.
1. Dans ***Importer les Entrées***, sélectionner si vous souhaitez ***Importer à la racine***, ***Importer dans le dossier actuel***, ou ***Importer dans un dossier spécifique***.
![Importer les Entrées](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4543.png)

   | Option                    | Description                                                                  |
   |---------------------------|------------------------------------------------------------------------------|
   | Importer à la racine            | Importer vos entrées à la racine de votre source de données, ce qui signifie qu'elle conservera exactement la même structure (groupe, dossier, identifiants) que celle que vous avez exportée. C'est la méthode d'importation suggérée.                   |
   | Importer dans le dossier actuel  | Importer toutes vos entrées sous le dossier sélectionné de la source de données.        |
   | Importer dans un dossier spécifique | Importer toutes vos entrées sous le dossier spécifique choisi de la source de données. |

1. Cliquer sur ***OK***.
1. Dans la boîte de dialogue suivante, vous serez présenté avec une liste de toutes les entrées qui sont dans le fichier de données. Sélectionner quelle entrée vous souhaitez importer ou ***Sélectionner Tout*** pour importer toutes vos entrées.
1. Appuyer sur ***OK*** pour compléter le processus.

