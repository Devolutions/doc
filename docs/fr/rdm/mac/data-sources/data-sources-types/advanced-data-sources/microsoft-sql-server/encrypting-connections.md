---
eleventyComputed:
  title: Chiffrer les connexions au serveur SQL
---
Pour assurer que la communication entre {{ fr.RDMMAC }} et la base de données SQL Server soit chiffrée, une procédure extensive doit être suivie sur l'instance SQL Server.

Consulter cet article de Microsoft technet qui fournit une instruction détaillée : [Chiffrer la connexion au serveur SQL (technet)](https://learn.microsoft.com/en-us/previous-versions/sql/sql-server-2008-r2/ms189067(v=sql.105)?redirectedfrom=MSDN).

Après avoir été correctement configuré, la seule modification à effectuer dans {{ fr.RDM }} est de définir une propriété dans les paramètres avancés de la source de données.

### Procédure

1. Créer ou éditer une source de données SQL Server, accéder à l'onglet Avancé et cliquer sur le bouton ***Paramètres Avancés***.
![SQL Server – Onglet Avancé](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip6044.png)
1. Définir la valeur de la propriété Encrypt sur vrai. Cliquer sur ***OK*** pour valider.
![SQL Server – Paramètres Avancés](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip6045.png)
