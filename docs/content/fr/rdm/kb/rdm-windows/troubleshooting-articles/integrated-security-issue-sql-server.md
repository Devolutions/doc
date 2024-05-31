---
eleventyComputed:
  title: Problèmes de sécurité intégrée avec SQL Server
---
Puisque des problèmes peuvent survenir de multiples sources, lors de la configuration de la sécurité intégrée sur une source de données SQL Server, nous avons détaillé quelques étapes pour aider et diagnostiquer la source.

## Étapes

### Récupérer les détails du journal
1. Dans {{ fr.RDM }} aller à ***Aide – Journaux d'application – Rapport (onglet)***.
1. Cliquer ***Supprimer tout***.
1. Dans ***Fichier – Paramètres – Avancé*** :
1. Augmenter le ***Niveau de débogage*** à 1.
1. Décocher ***Désactiver la trace de pile***.
1. Cliquer ***OK***.
![!!KB4897](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4897.png)
1. Reproduire le problème.
1. Une fois le problème reproduit, aller à ***Aide – Journaux d'application – Rapport (onglet)***.
1. Cliquer ***Envoyer au Support***.
1. Si vous avez déjà un ticket en cours avec nous, veuillez spécifier le numéro du ticket dans le ***Sujet***.

### Valider si la base de données est contenue
{% snippet, "badgeHelp" %}
Pour en savoir plus sur la base de données contenue, voir [Base de données contenue – SQL Server](https://docs.microsoft.com/en-us/sql/relational-databases/security/contained-database-users-making-your-database-portable?view=sql-server-ver15) de Microsoft
{% endsnippet %}

Exécuter le script suivant pour savoir si votre base de données est contenue.

{% snippet, "badgeCaution" %}
Assurez-vous de remplacer ***rdm-database-name*** par le nom de votre base de données {{ fr.RDM }}.
{% endsnippet %}

`SELECT name, containment, containment_desc, compatibility_level FROM sys.databases WHERE name = 'rdm-database-name';`

### Valider si le serveur SQL est joint au domaine
Si vous exécutez les instructions manuellement dans SSMS (SQL Server Management Studio), que obtenez-vous ?
