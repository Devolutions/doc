---
eleventyComputed:
  title: Fournisseur d'utilisateurs MySQL
---
Le fournisseur MySQL permet à {{ fr.DVLS }} de stocker les informations d'identification des comptes MySQL pour être utilisés pour la détection de compte MySQL ou pour réaliser la rotation de mot de passe.
![Fournisseur d'utilisateurs MySQL](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8092.png)

### Général
| Option        | Description                   |
|---------------|-------------------------------|
| Nom           | Nom d'affichage du fournisseur. |
| Nom de modèle | Description du fournisseur.  |

### Paramètres de mot de passe
| Option                              | Description                                                                                        |
|-------------------------------------|----------------------------------------------------------------------------------------------------|
| Modèle de mot de passe utilisé lors de la génération| Modèle de mot de passe qui sera utilisé pour générer le mot de passe pendant l'opération de réinitialisation du mot de passe.  |

### Propriétés
| Option   | Description                                                                          |
|----------|--------------------------------------------------------------------------------------|
| Nom d'hôte| FQDN du domaine contre lequel le scan ou la rotation de mot de passe sera exécuté. |
| Port     | Définir le numéro de port utilisé pour se connecter à l'hôte MySQL.                          |
| Nom d'utilisateur | Nom d'utilisateur du compte MySQL avec les droits pour lister les comptes.                          |
| Mot de passe | Mot de passe du compte MySQL.                                                       |

### Actions
| Option               | Description                                                           |
|----------------------|-----------------------------------------------------------------------|
| Ajouter PAM {{ fr.VLT }} | Créera un PAM {{ fr.VLT }} avec le nom du fournisseur s'il est activé.   |
