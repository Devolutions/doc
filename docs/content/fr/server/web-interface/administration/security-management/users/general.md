---
eleventyComputed:
  title: Général
---
![Modifier Utilisateurs – Général](https://cdnweb.devolutions.net/docs/DVLS6014_2023_3.png)

## Modifier les utilisateurs
| Option                             | Description                                                           |
|------------------------------------|-----------------------------------------------------------------------|
| Type d'authentification                | Sélectionner le type d'authentification de l'utilisateur :<br><ul><li>***{{ fr.DVLS }}*** : créer un utilisateur dans {{ fr.DVLS }} sans créer de connexion SQL.</li><li>***Domaine*** : s'authentifier en utilisant le compte utilisateur Active Directory.</li><li>***Office365/Azure AD*** : s'authentifier en utilisant le compte utilisateur Azure AD.</li></ul> |
| Utilisateur (obligatoire)                    | Nom de connexion de l'utilisateur.                                                      |
| Type d'utilisateur                          | Choisir le type d'utilisateur :<br><ul><li>***Administrateur*** : accorder tous les droits administratifs à l'utilisateur.</li><li>***Utilisateur en lecture seule*** : accorder uniquement l'accès ***Voir*** à l'utilisateur.</li><li>***Utilisateur restreint*** : sélectionner quels droits accorder à l'utilisateur.</li><li>***Utilisateur*** : accorder tous les droits de base à l'utilisateur (***Ajouter***, ***Modifier***, ***Supprimer***).</li></ul> |
| Type de licence utilisateur                  | Sélectionner le type de licence que l'utilisateur possède :<br><ul><li>***Par défaut*** : Gestion des connexions.</li><li>***Gestion des connexions*** : pour les utilisateurs qui ouvrent des connexions à distance.</li><li>***Gestion des mots de passe*** : pour les utilisateurs qui utilisent {{ fr.DVLS }} uniquement comme un gestionnaire de mots de passe.</li></ul> |
| Profil d'interface utilisateur                | Permettre aux utilisateurs d'avoir une expérience sur mesure en fonction de leurs tâches et rôles.<br><ul><li>***Par défaut (professionnel de l'IT)*** : Une interface complète avec des capacités avancées et toutes les fonctionnalités de connexion à distance.</li><li>***Utilisateur d'affaires*** : Une interface simplifiée pour gérer des informations sensibles, telles que les mots de passe. |
| Tags                | Des ***Tags Externes*** et ***Tags Privilégiés*** peuvent être ajoutés lors de la création ou de la modification des utilisateurs. Ils sont utiles pour les ***utilisateurs temporaires***, tels que les ***contractants***. Une ***date d'expiration*** doit être définie. Les ***Tags*** apparaissent dans le menu Compte sous Informations utilisateur et sont affichés dans les sources de données {{ fr.DVLS }} dans {{ fr.RDM }}. |
| Activé                            | Cocher pour activer l'utilisateur.                                           |
| Doit changer de mot de passe à la prochaine connexion | Cocher pour obliger l'utilisateur à changer de mot de passe lors de sa prochaine connexion. |
| Activer la connexion d'urgence | Activer la fonctionnalité pour un [accès d'urgence](/server/kb/how-to-articles/enable-emergency-login-code-authentication/) permettant la connexion pour les administrateurs même si les fournisseurs sont en panne. |
| Prénom                         | Entrer le prénom de l'utilisateur.                                          |
| Nom                          | Entrer le nom de l'utilisateur.                                           |
| Email (obligatoire)                   | Entrer l'adresse email de l'utilisateur.                                       |
| Langue                           | Langue de l'interface web de l'utilisateur.                                 |