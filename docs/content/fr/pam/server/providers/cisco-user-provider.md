---
eleventyComputed:
  title: Fournisseur Cisco
---
Le Fournisseur Cisco permet à {{ fr.DVLS }} de stocker les informations d'identification du compte Cisco pour être utilisées afin de réaliser la rotation des mots de passe.
![Fournisseur Cisco](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8093.png)

### Général
| Option        | Description                    |
|---------------|--------------------------------|
| Nom           | Nom d'affichage du Fournisseur.|
| Nom du modèle | Description du Fournisseur.    |


### Paramètres de mot de passe
| Option                               | Description                                                                                       |
|--------------------------------------|---------------------------------------------------------------------------------------------------|
| Modèle de mot de passe utilisé lors de la génération | Modèle de mot de passe qui sera utilisé pour générer le mot de passe lors de l'opération de réinitialisation du mot de passe. |


### Propriétés
| Option    | Description                                                                                         |
|-----------|-----------------------------------------------------------------------------------------------------|
| Nom d'hôte | FQDN du serveur Cisco contre lequel le scan ou la rotation du mot de passe sera exécutée.          |
| Port      | Définir le numéro de port utilisé pour se connecter sur l'hôte Cisco.                              |
| Mot de passe  | Mot de passe du compte Cisco.                                                                      |


### Actions
| Option               | Description                                                         |
|----------------------|---------------------------------------------------------------------|
| Ajouter PAM {{ fr.VLT }} | Créera un PAM {{ fr.VLT }} avec le nom du fournisseur s'il est activé. |
