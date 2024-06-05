---
eleventyComputed:
  title: Prévenir les dépassements de temps SQL avec {{ fr.DVLS }}
---
Gérer un grand nombre d'entrées en une seule opération ou avoir un nombre élevé d'utilisateurs connectés pourrait conduire à des messages d'erreur de dépassement de temps SQL avec {{ fr.DVLS }}
La modification suivante sur les paramètres avancés de la base de données pourrait aider à prévenir les dépassements de temps SQL.

1. Le premier à considérer est la ***taille maximale du pool de connexions***. Augmenter ce paramètre à 1000 au lieu des 100 par défaut aidera à augmenter le nombre de connexions à la base de données possibles.
1. Le deuxième paramètre est le ***délai de connexion*** qui peut être augmenté à 30 secondes. Cela fera attendre le système pendant 30 secondes avant de lever une exception.
1. Le dernier est le ***nombre de tentatives de connexion*** car il répétera chaque délai de ***délai de connexion*** avant de générer une erreur. En le réglant à 5, l'instance {{ fr.DVLS }} attendra 150 secondes avant de lever un dépassement de temps SQL.
![!!DVLS4016](https://cdnweb.devolutions.net/docs/DVLSCONSOLE4000_2024_1.png)

Pour plus d'informations sur ces paramètres, veuillez consulter [Base de données – Paramètres avancés](/server/management/devolutions-server-console/devolutions-server-settings/database/advanced-settings/).
