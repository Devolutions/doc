---
eleventyComputed:
  title: Fournisseur d'utilisateurs Windows
---
Le Fournisseur d'utilisateurs Windows permet à {{ fr.DVLS }} de stocker les informations d'identification des comptes Windows pour être utilisées pour la découverte de comptes locaux Windows ou pour réaliser la rotation de mot de passe. Voir l'article de la base de connaissances [Créer un fournisseur d'utilisateurs Windows](/server/kb/how-to-articles/create-windows-users-provider/) pour plus d'informations sur sa configuration.
![!!ServerOp8089](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8089.png)

### Général
| Option      | Description                  |
|-------------|------------------------------|
| Nom         | Nom d'affichage du Fournisseur.|
| Description | Description du Fournisseur. |

### Paramètres de mot de passe
| Option                              | Description                                                                                        |
|-------------------------------------|----------------------------------------------------------------------------------------------------|
| Modèle de mot de passe utilisé lors de la génération| Modèle de mot de passe qui sera utilisé pour générer le mot de passe lors de l'opération de réinitialisation du mot de passe.  |

### Hôte
| Option        | Description                             |
|---------------|-----------------------------------------|
| Nom de l'ordinateur | Nom de l'ordinateur Windows.   |

### Identifiants
| Option   | Description                                                        |
|----------|--------------------------------------------------------------------|
| Type d'identifiant | Identifiants personnalisés ou options d'identifiant lié.            | 
| Nom d'utilisateur | Nom d'utilisateur du compte local Windows avec les droits pour lister les comptes.|
| Mot de passe | Mot de passe du compte local Windows.                             |
| Identifiant lié | Identifiant directement lié à un compte PAM.              |                        

### Actions
| Option                | Description                                                         |
|-----------------------|---------------------------------------------------------------------|
| Ajouter PAM {{ fr.VLT }}  | Créera un PAM {{ fr.VLT }} avec le nom du fournisseur s'il est activé. |
| Ajouter Configuration de Scan| Ouvrira la boîte de dialogue Configuration de Scan s'il est activé.                 |