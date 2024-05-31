---
eleventyComputed:
  title: Erreur Azure SQL - échec de la connexion en raison d'un désaccord des utilisateurs pendant le processus d'authentification
  description: Erreur Azure SQL - échec de la connexion en raison d'un désaccord des utilisateurs pendant le processus d'authentification
---
Un message d'erreur apparaît dans un nouveau compte {{ fr.RDM }} si le ***UserPrincipalName*** (UPN) du compte précédent a été modifié pour éviter de perdre les paramètres spécifiques du {{ fr.VLT }} de l'utilisateur.

## Solution

1. Modifier le ***propriétaire de la base de données Azure*** dans le portail Azure.
1. Supprimer le compte identifié par ***Expecting*** dans le message d'erreur dans la ***section Sécurité*** de la base de données Azure dans SQL Server Management Studio.
1. Recréer le compte dans la ***section Sécurité*** de la base de données Azure dans SQL Server Management Studio.
1. Effectuer une ***correction de connexion SQL*** sur le compte dans ***Administration*** – ***Utilisateurs*** dans {{ fr.RDM }}.

![Administration – Utilisateurs](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6153.png)
