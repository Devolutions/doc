---
eleventyComputed:
  title: Fournisseur SQL Server
  description: Le fournisseur SQL permet à {{ fr.DVLS }} de stocker les identifiants de compte SQL à utiliser pour la découverte de comptes SQL ou pour réaliser la rotation de mot de passe.
---
Le fournisseur SQL permet à {{ fr.DVLS }} de stocker les identifiants de compte SQL à utiliser pour la découverte de comptes SQL ou pour réaliser la rotation de mot de passe.
![Dialogue du fournisseur SQL](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2118.png)

## Général
| Option      | Description                  |
|-------------|------------------------------|
| Nom         | Nom d'affichage du fournisseur.|
| Description | Description du fournisseur. |

## Paramètres de mot de passe
| Option                              | Description                                                                                        |
|-------------------------------------|----------------------------------------------------------------------------------------------------|
| Modèle de mot de passe utilisé lors de la génération| Modèle de mot de passe qui sera utilisé pour générer le mot de passe pendant l'opération de réinitialisation.  |

## Serveur
| Option      | Description                   |
|-------------|-------------------------------|
| Nom du serveur | Nom d'hôte du serveur SQL.   |

### Identifiants
| Option   | Description                                                        |
|----------|--------------------------------------------------------------------|
| Type d'identifiant | Options d'identifiants personnalisés ou liés.            | 
| Nom d'utilisateur | Nom d'utilisateur du compte SQL avec les droits de lister les comptes. |
| Mot de passe | Mot de passe du compte SQL.                              |
| Identifiant lié | Identifiant directement lié à un compte PAM.              | 

## Actions
| Option                | Description                                                         |
|-----------------------|---------------------------------------------------------------------|
| Ajouter PAM {{ fr.VLT }}  | Créera un PAM {{ fr.VLT }} avec le nom du fournisseur s'il est activé. |
| Ajouter une configuration de scan| Ouvrira la boîte de dialogue de configuration de scan s'il est activé.                 |