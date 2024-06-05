---
eleventyComputed:
  title: Configurations de scan
  order: 30
---
Les Configurations de scan ou la Détection de compte est l'instance configurée qui découvrira les comptes de l'environnement d'un fournisseur.
![Dialogue de découverte de compte](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8143.png)

Lors de la création d'une Détection de compte, il est possible de choisir entre [Domaine](/pam/providers/domain-provider/), [SQL Server](/pam/scan-configurations/sql-account-discovery/), [Comptes Locaux SSH](/pam/scan-configurations/ssh-account-discovery/), [Utilisateurs Windows](/pam/scan-configurations/windows-user-account-discovery/) ou [Utilisateur Azure AD](/pam/scan-configurations/azure-ad-user-account-discovery/).
![!!ServerOp8096](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8096.png)

Pour voir les résultats du processus de découverte, cliquer sur l'icône œil de la Détection de compte pour voir la liste des comptes.
![Dialogue des résultats de découverte de compte](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8147.png)

Pour gérer les comptes privilégiés avec la fonctionnalité PAM de {{ fr.DVLS }}, sélectionner les comptes depuis la page des résultats de Détection de compte et cliquer sur le bouton Importer les Comptes Sélectionnés. Ensuite, les comptes seront disponibles dans la section Accès Privilégié.
![Opération Importer les Comptes Sélectionnés](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8148.png)

Lors de l'importation, les options Fournisseur, Dossier de Destination et Réinitialisation du Mot de Passe peuvent être définies.
![Fenêtre d'Importation](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8149.png)

### Importation
| Option                    | Description                                                                     |
|---------------------------|---------------------------------------------------------------------------------|
| Fournisseur               | Sélectionner le Fournisseur dans la liste déroulante.                           |
| Dossier                   | Sélectionner le dossier de destination dans la liste déroulante.                |
| Réinitialiser le Mot de Passe à l'Importation | Lors de l'importation, le mot de passe sera réinitialisé.                       |
| Réinitialiser le Mot de Passe à la Restitution | Lorsque l'utilisateur libérera le compte à la Restitution, le mot de passe sera réinitialisé. |
