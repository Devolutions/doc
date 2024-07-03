---
eleventyComputed:
  title: Comptes locaux Windows
  description: Le fournisseur de Comptes Locaux Windows permet à {{ fr.DVLS }} de stocker les identifiants des comptes locaux Windows pour être utilisés dans la découverte de comptes locaux ou pour réaliser la rotation des mots de passe.
---
Le fournisseur de Comptes Locaux Windows permet à {{ fr.DVLS }} de stocker les identifiants des comptes locaux Windows pour être utilisés dans la découverte de comptes locaux ou pour réaliser la rotation des mots de passe.
![Configuration du fournisseur de Comptes Locaux Windows](https://cdnweb.devolutions.net/docs/DVLS4024_2024_2.png)


## Général
| Option      | Description                  |
|-------------|------------------------------|
| Nom        | Nom d'affichage du fournisseur.|
| Nom du modèle | Modèle du fournisseur.  |

## Propriétés
| Option                              | Description                                                                                        |
|-------------------------------------|----------------------------------------------------------------------------------------------------|
| Description                         | Description du fournisseur.                                                                       |
| Hôte | Adresse IP ou nom d'hôte où se trouvent les comptes locaux Windows.                                                             |
| ExcludeDisabledAccountsInDiscovery| Exclure les comptes désactivés lors de la découverte.                                                    |
| HostsLDAPSearchFilter | Ajouter un ou plusieurs filtres de recherche LDAP.                                                                                       | 

### Identifiants
| Option   | Description                                                        |
|----------|--------------------------------------------------------------------|
| Type d'identifiant | Identifiants personnalisés ou options d'identifiant lié.            | 
| Nom d'utilisateur | Nom d'utilisateur du compte local Windows avec les droits de lister les comptes.|
| Mot de passe | Mot de passe du compte local Windows.                             |
| Identifiant lié | Identifiant directement lié à un compte PAM.              | 

## Actions
| Option                | Description                                                         |
|-----------------------|---------------------------------------------------------------------|
| Ajouter PAM {{ fr.VLT }}  | Créera un PAM {{ fr.VLT }} avec le nom du fournisseur s'il est activé. |
| Ajouter Configuration de Scan| Ouvrira la boîte de dialogue de Configuration de Scan s'il est activé.                 |