---
title: Chiffrement des connexions à SQL Server
---
Pour garantir que la communication entre {{ fr.RDM }} for Mac et la base de données Microsoft SQL Server est cryptée, une procédure complète doit être suivie sur l'instance Microsoft SQL Server.  

Veuillez consulter cet article Microsoft technet qui fournit des instructions détaillées: [Encrypting Connections to SQL Server (technet)](https://technet.microsoft.com/en-us/library/ms189067(v=sql.105).aspx) .  

Une fois qu'il a été correctement configuré, la seule modification à effectuer dans {{ fr.RDM }} for Mac consiste à définir une propriété dans ***Paramètres avancés*** de la source de données. 

## Procédure 

1. Créer ou modifier une source de données Microsoft SQL Server. Accéder à l'onglet ***Avancé*** et cliquer sur le bouton ***Paramètres avancés*** . 
![RdmMac4033.png](/img/fr/rdm/mac/RdmMac4033.png) 
1. Définir la valeur du paramètre ***Encrypt*** sur true et cliquer sur ***OK*** pour valider. 
![RdmMac4034.png](/img/fr/rdm/mac/RdmMac4034.png) 

