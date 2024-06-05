---
eleventyComputed:
  title: Fournisseur SQL Server
  description: Le fournisseur SQL permet à {{ fr.DVLS }} de stocker les informations d'identification des comptes SQL à utiliser pour la découverte des comptes SQL ou pour réaliser la rotation des mots de passe.
---
Le fournisseur SQL permet à {{ fr.DVLS }} de stocker les informations d'identification des comptes SQL à utiliser pour la découverte des comptes SQL ou pour réaliser la rotation des mots de passe.
![Dialogue du fournisseur SQL](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2118.png)

## Général
| Option      | Description                  |
|-------------|------------------------------|
| Nom         | Nom d'affichage du fournisseur.|
| Description | Description du fournisseur.  |

## Paramètres de mot de passe
| Option                              | Description                                                                                        |
|-------------------------------------|----------------------------------------------------------------------------------------------------|
| Modèle de mot de passe utilisé lors de la génération| Modèle de mot de passe qui sera utilisé pour générer le mot de passe lors de l'opération de réinitialisation du mot de passe.  |

## Serveur
| Option      | Description                   |
|-------------|-------------------------------|
| Nom du serveur | Nom d'hôte du serveur SQL.   |

## Identifiants
| Option   | Description                                               |
|----------|-----------------------------------------------------------|
| Nom d'utilisateur | Nom d'utilisateur du compte SQL avec les droits pour lister les comptes. |
| Mot de passe | Mot de passe du compte SQL.                              |

## Actions
| Option                | Description                                                         |
|-----------------------|---------------------------------------------------------------------|
| Ajouter PAM {{ fr.VLT }}  | Créera un PAM {{ fr.VLT }} avec le nom du fournisseur s'il est activé. |
| Ajouter une configuration de scan| Ouvrira la boîte de dialogue de configuration de scan si activé.                 |
