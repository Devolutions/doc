---
eleventyComputed:
  title: Fournisseur de domaine
---
Le Fournisseur de Domaine permet à {{ fr.DVLS }} de stocker les identifiants de compte de domaine à utiliser pour la détection de compte Active Directory, pour réaliser la rotation de mot de passe ou la propagation de mot de passe.
![Dialogue du Fournisseur de Domaine](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8141.png)

### Général
| Option      | Description                             |
|-------------|-----------------------------------------|
| Nom         | Nom d'affichage du Fournisseur.         |
| Description | Description du Fournisseur.             |

### Paramètres de mot de passe
| Option                               | Description                                                                                       |
|--------------------------------------|---------------------------------------------------------------------------------------------------|
| Modèle de mot de passe utilisé lors de la génération | Modèle de mot de passe qui sera utilisé pour générer le mot de passe lors de l'opération de réinitialisation du mot de passe. |

### Domaine
| Option      | Description                                                                                              |
|-------------|----------------------------------------------------------------------------------------------------------|
| Nom de domaine | FQDN du domaine contre lequel le scan ou la rotation de mot de passe sera exécuté.                     |
| Protocole    | Protocole utilisé pour contacter le contrôleur de domaine.<br> Sélectionner entre : <ul><li>LDAP</li><li>LDAPS</li></ul> |
| Port        | Définir le numéro de port utilisé avec le Protocole configuré.                                                   |

### Identifiants
| Option   | Description                                                        |
|----------|--------------------------------------------------------------------|
| Type d'identifiant | Options d'identifiants personnalisés ou liés.            | 
| Nom d'utilisateur | Nom d'utilisateur du compte de domaine.    |
| Mot de passe | Mot de passe du compte de domaine.    |
| Identifiant lié | Identifiant directement lié à un compte PAM.              |        

### Actions
| Option                   | Description                                                         |
|--------------------------|---------------------------------------------------------------------|
| Ajouter PAM {{ fr.VLT }}     | Créera un PAM {{ fr.VLT }} avec le nom du fournisseur s'il est activé. |
| Ajouter Configuration de Scan   | Ouvrira la boîte de dialogue Configuration de Scan s'il est activé.                 |