---
eleventyComputed:
  title: Configurer Active Directory Interactive (avec MFA pris en charge) dans {{ fr.RDM }}
  description:
---
{% snippet icon.badgeInfo %}
Cette rubrique concerne les versions 2022.1 et ultérieures de {{ fr.RDM }}. Si vous utilisez une version antérieure, veuillez plutôt consulter [Configurer une anciennce version de {{ fr.RDM }} AD Interactive (avec MFA pris en charge)](/fr/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/enable-azure-active-directory-authentication/configure-rdm-older-version-ad-interactive-mfa/).
{% endsnippet %}

Active Directory Interactive (avec MFA pris en charge) vous permet de vous authentifier sur votre source de données [Microsoft Azure SQL](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/) à l'aide de votre compte Office365 et de l'AMF (authentification multifacteur).

{% snippet icon.badgeWarning %}
Lors de la création d'utilisateurs Azure SQL Active Directory, vous devez être connecté avec un utilisateur Azure Active Directory. Sinon, il échouera et vous serez informé de l'erreur.
{% endsnippet %}

Utilisez les serveurs définis par l'administrateur Azure Active Directory pour créer vos premiers utilisateurs administrateurs de {{ fr.RDM }}. Une fois créés, vous pouvez utiliser ce nouveau compte pour créer les autres utilisateurs.

## Paramètres

![Microsoft SQL Azure avec MFA pris en charge](https://cdnweb.devolutions.net/docs/fr/rdm/windows/RDMWin2133.png)

1. Dans {{ fr.RDM }}, naviguer jusqu'à ***Fichier – Sources de données*** et cliquer sur ***Ajouter une nouvelle source de données***.
1. Sélectionner le type de source de données ***Microsoft Azure SQL***.
1. Spécifier le ***Nom*** et l'***Hôte*** de votre source de données.
1. Dans le menu déroulante ***Mode de connexion***, sélectionner ***Active Directory Interactive (avec MFA pris en charge)***.
1. Dans le champ ***Nom d'utilisateur***, coller le courriel d'***Active Directory admin*** que vous avez créé dans Microsoft Azure SQL Database.
   {% snippet icon.badgeInfo %}
   Lors de la première connexion, le nom d'utilisateur doit être l'administrateur Active Directory tel que défini dans la [Configuration de l'administrateur Azure Active Directory](/fr/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/enable-azure-active-directory-authentication/configure-admin/). Une fois que vous avez ajouté d'autres utilisateurs AD dans {{ fr.RDM }}, ils pourront se connecter.
   {% endsnippet %}
   {% snippet icon.badgeCaution %}
   ![!!RdmWin4032](https://cdnweb.devolutions.net/docs/fr/rdm/windows/RdmWin4032.png) Si vous obtenez le message d'erreur ***Unable to connect to the database! Login failed for user '&lt;token-identified principal&gt;'.***, vérifiez si le nom d'utilisateur contient des fautes d'orthgraphe.
   {% endsnippet %}
1. Saisir la ***Base de données*** à laquelle vous authentifier.
1. Cliquer sur ***OK***.
{% snippet icon.badgeInfo %}
Lorsque vous choisissez ***Active Directory Interactive (avec MFA pris en charge)***, nous n'avons aucun contrôle sur les invites de connexion. Nous envoyons la commande d'authentification à la bibliothèque Microsoft; le reste est contrôlé de leur côté.

Voici quelques points à considérer :
* Une ***Stratégie d'accès conditionnel*** a-t-elle été ajoutée ou modifiée récemment, ce qui aurait pu entraîner ce changement de comportement?
* S'ils sont sur une machine connectée à Azure AD, vous pouvez essayer Active Directory Integrated et voir si cela fonctionne mieux pour vous.
{% endsnippet %}
