---
eleventyComputed:
  title: Chiffrer les connexions vers SQL Server
---
Pour assurer que la communication entre l'instance {{ fr.DVLS }} et la base de données SQL Server soit chiffrée, une procédure extensive doit être suivie sur l'instance SQL Server.

Veuillez consulter cet article de Microsoft qui fournit des instructions détaillées : [Activer les connexions chiffrées vers le moteur de base de données](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/enable-encrypted-connections-to-the-database-engine?view=sql-server-ver15).

Après une configuration appropriée, la seule modification requise dans {{ fr.DVLS }} est d'activer l'option ***Utiliser une connexion chiffrée SQL Server*** dans la section ***Base de données – Paramètres avancés*** des paramètres de l'instance.
