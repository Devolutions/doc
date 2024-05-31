---
eleventyComputed:
  title: Fournisseurs
  order: 20
  description: Le fournisseur d'utilisateurs Azure AD permet à {{ fr.DHUBB }} de stocker les informations de l'application Azure AD à utiliser pour la rotation automatique des mots de passe Azure AD.
---
Le fournisseur d'utilisateurs Azure AD permet à {{ fr.DHUBB }} de stocker les informations de l'application Azure AD à utiliser pour la rotation automatique des mots de passe Azure AD.

{% snippet, "badgeHelp" %}
Voir [Créer un fournisseur PAM Azure AD](/hub/kb/hub-business/how-to-articles/create-azure-ad-pam-provider/) pour plus d'informations sur sa configuration.
{% endsnippet %}

![Fournisseur d'utilisateurs Azure AD](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2287.png)

## Général

| Option       | Description                  |
|--------------|------------------------------|
| Nom          | Nom d'affichage du fournisseur |
| Description  | Description du fournisseur   |

## Paramètres de mot de passe

| Option                                       | Description                                                               |
|----------------------------------------------|---------------------------------------------------------------------------|
| Modèle de mot de passe utilisé lors de la génération | [Modèle de mot de passe](/hub/web-interface/administration/management/password-templates/) utilisé pour générer le mot de passe lors de l'opération de réinitialisation du mot de passe |

## Serveur

| Option       | Description                           |
|--------------|---------------------------------------|
| ID de locataire | ID du locataire Azure                |
| ID client    | ID de l'application Azure           |
| Clé secrète   | Clé secrète de l'application Azure   |
