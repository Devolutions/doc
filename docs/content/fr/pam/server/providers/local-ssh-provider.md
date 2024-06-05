---
eleventyComputed:
  title: Fournisseur SSH local
  description: Le fournisseur SSH permet à {{ fr.DVLS }} de stocker les informations d'identification des comptes SSH locaux pour être utilisés dans la découverte de comptes SSH ou pour réaliser la rotation des mots de passe.
---
Le fournisseur SSH permet à {{ fr.DVLS }} de stocker les informations d'identification des comptes SSH locaux pour être utilisés dans la découverte de comptes SSH ou pour réaliser la rotation des mots de passe.
![Dialogue du fournisseur SSH](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8142.png)

{% snippet icon.badgeInfo %}
Le groupe wheel sous Linux est traditionnellement utilisé pour contrôler l'accès aux privilèges root via le système sudo. Les membres de ce groupe sont autorisés à élever leurs privilèges à ceux de l'administrateur système, ou root, généralement après avoir été authentifiés par leur mot de passe personnel.
{% endsnippet %}

## Général
| Option      | Description                   |
|-------------|-------------------------------|
| Nom        | Nom d'affichage du fournisseur. |
| Description | Description du fournisseur.  |

## Paramètres de mot de passe
| Option                               | Description                                                                          |
|--------------------------------------|--------------------------------------------------------------------------------------|
| Modèle de mot de passe utilisé lors de la génération | Modèle de mot de passe utilisé pour générer le mot de passe lors de l'opération de réinitialisation du mot de passe. |

## Hôte
| Option | Description                                                 |
|--------|-------------------------------------------------------------|
| Hôte   | Adresse IP ou nom d'hôte où se trouvent les comptes SSH. |
| Port   | Définir le numéro de port utilisé pour communiquer avec l'hôte.      |

## Identifiants
| Option   | Description                  |
|----------|------------------------------|
| Nom d'utilisateur | Nom d'utilisateur du compte SSH. |
| Mot de passe | Mot de passe du compte SSH. |

## Actions
| Option                 | Description                                                    |
|------------------------|----------------------------------------------------------------|
| Ajouter PAM {{ fr.VLT }}   | Créer un PAM {{ fr.VLT }} avec le nom du fournisseur s'il est activé. |
| Ajouter une configuration de scan | Ouvrir la boîte de dialogue ***Configuration de scan*** si activée.           |
