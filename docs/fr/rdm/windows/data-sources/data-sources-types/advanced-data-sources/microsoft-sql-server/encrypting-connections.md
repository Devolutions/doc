---
title: Chiffrement des connexions à SQL Server
---
Pour garantir que la communication entre {{ fr.RDM }} et la base de données Microsoft SQL Server est cryptée, une procédure complète doit être suivie sur l'instance Microsoft SQL Server.  

Veuillez consulter cet article Microsoft technet qui fournit des instructions détaillées : [Encrypting Connections to SQL Server (technet)](https://technet.microsoft.com/en-us/library/ms189067(v=sql.105).aspx).  

Une fois qu'il a été correctement configuré, la seule modification à effectuer dans {{ fr.RDM }} consiste à définir une propriété dans ***Plus de paramètres*** de la source de données. 

## Procédure 

1. Créer ou modifier une source de données Microsoft SQL Server. Accéder à l'onglet ***Avancée*** et cliquer sur le bouton ***Plus de paramètres***.  
![!!clip3516.png](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip3516.png) 
1. Définir la valeur de la propriété ***Encrypt*** sur ***true*** et cliquer sur ***OK*** pour valider.  
![!!clip7001.png](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip7001.png) 

