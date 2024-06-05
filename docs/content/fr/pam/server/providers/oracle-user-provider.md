---
eleventyComputed:
  title: Fournisseur d'utilisateurs Oracle
---
Le Fournisseur Oracle permet à {{ fr.DVLS }} de stocker les informations d'identification du compte Oracle à utiliser pour réaliser la rotation des mots de passe.
![Fournisseur d'utilisateurs Oracle](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8094.png)

### Général
| Option        | Description                             |
|---------------|-----------------------------------------|
| Nom           | Nom d'affichage du Fournisseur.         |
| Nom du modèle | Description du Fournisseur.             |

### Paramètres de mot de passe
| Option                              | Description                                                                                      |
|-------------------------------------|--------------------------------------------------------------------------------------------------|
| Modèle de mot de passe utilisé lors de la génération| Modèle de mot de passe qui sera utilisé pour générer le mot de passe lors de l'opération de réinitialisation.  |

### Propriétés
| Option      | Description                                                                                   |
|-------------|-----------------------------------------------------------------------------------------------|
| Nom d'hôte  | FQDN du serveur Oracle contre lequel le scan ou la rotation de mot de passe sera exécuté.    |
| Nom du service| Nom du service Oracle.                                                                       |
| Port        | Définir le numéro de port utilisé pour se connecter à l'hôte Oracle.                         |
| Nom d'utilisateur | Nom d'utilisateur du compte Oracle avec les droits de réinitialisation des mots de passe.    |
| Mot de passe| Mot de passe du compte Oracle.                                                               |

### Actions
| Option             | Description                                                             |
|--------------------|-------------------------------------------------------------------------|
| Ajouter PAM {{ fr.VLT }} | Créera un PAM {{ fr.VLT }} avec le nom du fournisseur s'il est activé. |
