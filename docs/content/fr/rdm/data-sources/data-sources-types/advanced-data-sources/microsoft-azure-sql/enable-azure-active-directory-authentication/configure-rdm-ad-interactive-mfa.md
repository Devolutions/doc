---
eleventyComputed:
  title: Configurer Active Directory Interactive (avec support A2F) dans {{ fr.RDM }}
  description: Active Directory Interactive (avec support A2F) vous permet de vous authentifier sur votre source de données Microsoft Azure SQL en utilisant votre compte Office365 et l'A2F.
---
{% snippet, "badgeInfo" %}
Ce sujet couvre les versions {{ fr.RDM }} 2022.1 et ultérieures. Si vous utilisez une version antérieure, veuillez consulter [Configurer une version {{ fr.RDM }} antérieure AD Interactive (avec support A2F)](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/enable-azure-active-directory-authentication/configure-rdm-older-version-ad-interactive-mfa/) à la place.
{% endsnippet %}

Active Directory Interactive (avec support A2F) vous permet de vous authentifier sur votre source de données [Microsoft Azure SQL](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/) en utilisant votre compte Office365 et l'A2F.

{% snippet, "badgeWarning" %}
Lors de la création d'utilisateurs Azure SQL Active Directory, vous devez être connecté avec un utilisateur Azure Active Directory. Sinon, cela échouera et vous serez informé de l'erreur.
{% endsnippet %}

Utilisez l'administrateur Azure Active Directory défini par les serveurs pour créer vos premiers utilisateurs administrateurs {{ fr.RDM }}. Une fois créé, vous pouvez utiliser ce nouveau compte pour créer les autres utilisateurs.

## Paramètres

![Microsoft SQL Azure avec support A2F](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2180.png)

1. Dans {{ fr.RDM }}, aller à ***Fichier – Sources de données*** et cliquer sur ***Ajouter une nouvelle source de données***.
1. Sélectionner le type de source de données ***Microsoft Azure SQL***.
1. Spécifier le ***Nom*** et l'***Hôte*** de votre source de données.
1. Dans le menu déroulant ***Mode de connexion***, sélectionner ***Active Directory Interactive (avec support A2F)***.
1. Dans le champ ***Nom d'utilisateur***, coller l'email de l'***administrateur Active Directory*** que vous avez créé dans la base de données Microsoft Azure SQL.
   {% snippet, "badgeInfo" %}
   Lors de la première connexion, le nom d'utilisateur doit être l'administrateur Active Directory tel que défini dans [Configurer l'administrateur Azure Active Directory](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/enable-azure-active-directory-authentication/configure-admin/). Une fois que vous ajoutez d'autres utilisateurs AD dans {{ fr.RDM }}, ils pourront se connecter.
   {% endsnippet %}
   {% snippet, "badgeCaution" %}
   ![!!RDMWin2217](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2217.png) Si vous recevez le message d'erreur ***Impossible de se connecter à la base de données ! Connexion échouée pour l'utilisateur '&lt;token-identified principal&gt;'.***, vérifiez à nouveau l'orthographe du nom d'utilisateur.
   {% endsnippet %}
1. Entrer la ***Base de données*** pour s'authentifier.
1. Cliquer sur ***OK***.
{% snippet, "badgeInfo" %}
Lorsque vous choisissez ***Active Directory Interactive (avec support A2F)***, nous n'avons aucun contrôle sur les invites de connexion. Nous envoyons la commande à la bibliothèque Microsoft pour authentifier ; le reste est contrôlé de leur côté.

Voici quelques considérations :
* Une ***Politique d'Accès Conditionnel*** a-t-elle été ajoutée ou modifiée récemment qui pourrait avoir causé ce changement de comportement ?
* Si vous êtes sur une machine jointe à Azure AD, vous pouvez essayer Active Directory Integrated et voir si cela fonctionne mieux pour vous.
{% endsnippet %}
