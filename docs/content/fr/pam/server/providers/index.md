---
eleventyComputed:
  title: Fournisseurs
  description: Les fournisseurs sont nécessaires pour scanner la structure de l'Active Directory, votre réseau local pour la découverte SSH, les comptes SQL, les comptes locaux Windows, ou les utilisateurs et groupes Azure AD.
  order: 20
---
Les fournisseurs sont nécessaires pour scanner la structure de l'Active Directory, votre réseau local pour la découverte SSH, les comptes SQL, les comptes locaux Windows, ou les utilisateurs et groupes Azure AD.

{% youtube 'drRLA7U8YsQ?si=ihVhTcJOKxAh5kKS&amp;start=57' %}

![Tableau de bord des fournisseurs](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8140.png)

Voici les types de fournisseurs disponibles :

* ***Gérés*** fournisseurs :
    * [Utilisateur de domaine](/pam/providers/domain-provider/)
    * [Utilisateur local](/pam/providers/local-ssh-provider/)
    * [Utilisateur SQL](/pam/providers/sql-server-provider/)
    * [Utilisateur Windows](/pam/providers/windows-users-provider/)
    * [Utilisateur Azure AD](/pam/providers/azure-ad-user-provider/)

![Fournisseurs gérés](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2107.png)

* ***Non gérés*** fournisseurs :
    * Utilisateur MySQL
    * Utilisateur Cisco
    * Utilisateur Oracle

![Fournisseurs non gérés](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2108.png)

* ***AnyIdentity*** fournisseurs :
    * Comptes Windows
    * Comptes locaux Windows

![Fournisseurs AnyIdentity](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2109.png)

Plusieurs fournisseurs peuvent être créés et peuvent atteindre différents domaines tant que l'instance {{ fr.DVLS }} peut communiquer avec le contrôleur de domaine.

Le fournisseur d'utilisateur Azure AD permet à {{ fr.DHUBB }} de stocker les informations de l'application Azure AD à utiliser pour la rotation automatique du mot de passe Azure AD.

{% snippet, "badgeHelp" %}
Voir [Créer un fournisseur PAM Azure AD](/hub/kb/hub-business/how-to-articles/create-azure-ad-pam-provider/) pour plus d'informations sur sa configuration.
{% endsnippet %}

![Fournisseur d'utilisateur Azure AD](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2287.png)

## Général

| Option       | Description                  |
|--------------|------------------------------|
| Nom          | Nom d'affichage du fournisseur |
| Description  | Description du fournisseur  |

## Paramètres de mot de passe

| Option                                       | Description                                                               |
|----------------------------------------------|---------------------------------------------------------------------------|
| Modèle de mot de passe utilisé lors de la génération | [Modèle de mot de passe](/hub/web-interface/administration/management/password-templates/) utilisé pour générer le mot de passe lors de l'opération de réinitialisation du mot de passe |

## Serveur

| Option       | Description                           |
|--------------|---------------------------------------|
| ID de locataire    | ID du locataire Azure                |
| ID client    | ID de l'application Azure           |
| Clé secrète   | Clé secrète de l'application Azure   |
