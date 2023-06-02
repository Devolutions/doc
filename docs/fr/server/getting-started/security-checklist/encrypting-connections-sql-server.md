---
title: Chiffrement des connexions vers le serveur SQL
---
Pour garantir que les communications entre l'instance de {{ fr.DVLS }} et la base de données SQL Server soient chiffrées, une procédure doit être suivie et effectuée sur l'instance du serveur SQL.  

Veuillez consulter cet article de Microsoft, en anglais, qui détaille les instructions à suivre : [Enable encrypted connections to the Database Engine](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/enable-encrypted-connections-to-the-database-engine?view=sql-server-ver15) .  

Une fois la configuration terminée, la seule modification requise à effectuer dans {{ fr.DVLS }} consiste à activer la fonction ***Utiliser la connexion chiffrée de SQL Server*** dans les ***Paramètres avancés*** de l'instance, sous l'onglet [***Base de données***](/fr/server/management/devolutions-server-console/devolutions-server-settings/database/). 

