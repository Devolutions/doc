---
eleventyComputed:
  title: Chiffrer les connexions au serveur SQL Server
---
Pour garantir que la communication entre {{ fr.RDM }} et la base de données Microsoft SQL Server soit chiffrée, une procédure extensive doit être suivie sur l'instance Microsoft SQL Server.

Consulter cet article de Microsoft technet qui fournit des instructions détaillées : [Chiffrer les Connexions au Serveur SQL (technet)](https://technet.microsoft.com/en-us/library/ms189067(v=sql.105).aspx).

Après avoir correctement configuré, la seule modification à effectuer dans {{ fr.RDM }} est de définir une propriété dans les ***Paramètres supplémentaires*** de la source de données.

## Procédure

1. Créer ou éditer une source de données Microsoft SQL Server, accéder à l'onglet ***Avancé*** et cliquer sur le bouton ***Paramètres supplémentaires***.
![!!clip3516](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip3516.png)
1. Définir la valeur de la propriété ***Encrypt*** sur ***true***. Cliquer sur ***OK*** pour valider.
![!!clip7001](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip7001.png)
