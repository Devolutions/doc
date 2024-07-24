---
eleventyComputed:
  title: Fournisseur SSH local
  description: Le fournisseur SSH permet à {{ fr.DVLS }} de stocker les identifiants de compte SSH local pour être utilisés pour la découverte de comptes SSH ou pour réaliser la rotation de mot de passe.
---
Le fournisseur SSH permet à {{ fr.DVLS }} de stocker les identifiants de compte SSH local pour être utilisés pour la découverte de comptes SSH ou pour réaliser la rotation de mot de passe.
![Dialogue du fournisseur SSH](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8142.png)

{% snippet, "badgeInfo" %}
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
| Hôte   | Adresse IP ou nom d'hôte où les comptes SSH sont situés. |
| Port   | Définir le numéro de port utilisé pour communiquer avec l'hôte.      |

### Identifiants
| Option   | Description                                                        |
|----------|--------------------------------------------------------------------|
| Type d'identifiant | Identifiants personnalisés ou options d'identifiant lié.            | 
| Nom d'utilisateur | Nom d'utilisateur du compte SSH. |
| Mot de passe | Mot de passe du compte SSH. |
| Identifiant lié | Identifiant directement lié à un compte PAM.              | 

## Actions
| Option                 | Description                                                    |
|------------------------|----------------------------------------------------------------|
| Ajouter PAM {{ fr.VLT }}   | Créer un PAM {{ fr.VLT }} avec le nom du fournisseur s'il est activé. |
| Ajouter une configuration de scan | Ouvrir la boîte de dialogue ***Configuration de scan*** si activée.           |