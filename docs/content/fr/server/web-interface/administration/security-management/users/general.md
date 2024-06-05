---
eleventyComputed:
  title: Général
---
![Modifier les utilisateurs – Général](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp7005.png)

## Modifier les utilisateurs
| Option                             | Description                                                           |
|------------------------------------|-----------------------------------------------------------------------|
| Type d'authentification                | Sélectionner le type d'authentification de l'utilisateur :<br><ul><li>***{{ fr.DVLS }}*** : créer un utilisateur dans {{ fr.DVLS }} sans créer de connexion SQL.</li><li>***Domaine*** : s'authentifier en utilisant le compte utilisateur Active Directory.</li><li>***Office365/Azure AD*** : s'authentifier en utilisant le compte utilisateur Azure AD.</li></ul> |
| Utilisateur (obligatoire)                    | Nom de connexion de l'utilisateur.                                                      |
| Type d'utilisateur                          | Choisir le type d'utilisateur :<br><ul><li>***Administrateur*** : accorder tous les droits administratifs à l'utilisateur.</li><li>***Utilisateur en lecture seule*** : accorder uniquement l'accès ***Voir*** à l'utilisateur.</li><li>***Utilisateur restreint*** : sélectionner quels droits accorder à l'utilisateur.</li><li>***Utilisateur*** : accorder tous les droits de base à l'utilisateur (***Ajouter***, ***Modifier***, ***Supprimer***).</li></ul> |
| Type de licence utilisateur                  | Sélectionner le type de licence que l'utilisateur possède :<br><ul><li>***Par défaut*** : Gestion des connexions.</li><li>***Gestion des connexions*** : pour les utilisateurs qui ouvrent des connexions à distance.</li><li>***Gestion des mots de passe*** : pour les utilisateurs qui utilisent {{ fr.DVLS }} uniquement comme un gestionnaire de mots de passe.</li></ul> |
| Activé                            | Cocher pour activer l'utilisateur.                                           |
| Doit changer de mot de passe à la prochaine connexion | Cocher pour forcer l'utilisateur à changer de mot de passe la prochaine fois qu'il se connecte. |
| Prénom                         | Entrer le prénom de l'utilisateur.                                          |
| Nom de famille                         | Entrer le nom de famille de l'utilisateur.                                           |
| Email (obligatoire)                   | Entrer l'adresse email de l'utilisateur.                                       |
| Langue                           | Langue de l'interface web de l'utilisateur.                                 |
