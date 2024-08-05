---
_schema: default
eleventyComputed:
  title: Fournisseurs
  description: >-
    Le fournisseur d'utilisateurs Azure AD permet à {{ fr.DHUBB }} de stocker les informations de l'application Azure AD à utiliser pour la rotation automatique du mot de passe Azure AD.
---
Le fournisseur d'utilisateurs Azure AD permet à {{ fr.DHUBB }} de stocker les informations de l'application Azure AD à utiliser pour la rotation automatique du mot de passe Azure AD.

{% snippet, "badgeHelp" %}
Voir [Créer un fournisseur PAM Azure AD](/hub/kb/hub-business/how-to-articles/create-azure-ad-pam-provider/) pour plus d'informations sur sa configuration.
{% endsnippet %}

![Fournisseur d'utilisateurs Azure AD](https://cdnweb.devolutions.net/docs/HUBB6017_2024_1.png)

## Général

<table><thead><tr><th><p>Option</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>Nom</p></td><td><p>Nom d'affichage du fournisseur</p></td></tr><tr><td><p>Description</p></td><td><p>Description du fournisseur</p></td></tr></tbody></table>

## Paramètres de mot de passe

<table><thead><tr><th><p>Option</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>Modèle de mot de passe utilisé lors de la génération</p></td><td><p><a href="/hub/web-interface/administration/management/password-templates/">Modèle de mot de passe</a> utilisé pour générer le mot de passe lors de l'opération de réinitialisation du mot de passe</p></td></tr></tbody></table>

## Serveur

<table><thead><tr><th><p>Option</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>ID de locataire</p></td><td><p>ID du locataire Azure</p></td></tr><tr><td><p>ID client</p></td><td><p>ID de l'application Azure</p></td></tr><tr><td><p>Clé secrète</p></td><td><p>Clé secrète de l'application Azure</p></td></tr><tr><td><p>Tester la connexion </p></td><td><p>Tester la connexion. Si la connexion échoue, vérifier la validité des informations saisies et réessayer.</p></td></tr></tbody></table>