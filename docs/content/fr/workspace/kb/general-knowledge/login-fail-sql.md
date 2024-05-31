---
eleventyComputed:
  title: Échec de connexion pour UserX avec SQL
---
Si le code d'erreur "(0x80131904) : Échec de connexion pour l'utilisateur 'UserX'" apparaît lors de la tentative de connexion à la source de données, il est possible que le compte ait été verrouillé après plusieurs tentatives de connexion. Cela dépend de l'application de la politique de mot de passe configurée.

## Déverrouillage de la base de données SQL
La requête SQL suivante confirmera si l'utilisateur a été verrouillé : SELECT LOGINPROPERTY('UserX','islocked')

L'utilisateur peut être déverrouillé manuellement en allant dans les ***Propriétés*** de l'utilisateur – ***Statut*** et en décochant ***Verrouiller l'utilisateur SQL***. Puis en changeant le mot de passe et enfin en exécutant les changements.

### Alternative
Alternativement, la requête suivante peut être utilisée :

ALTER LOGIN [SQLID] WITH PASSWORD = '****' UNLOCK  
{% snippet, "badgeHelp" %}
Pour en savoir plus, lire la documentation Microsoft [SQL](https://learn.microsoft.com/fr-fr/sql/sql-server/?view=sql-server-ver16).
{% endsnippet %}
