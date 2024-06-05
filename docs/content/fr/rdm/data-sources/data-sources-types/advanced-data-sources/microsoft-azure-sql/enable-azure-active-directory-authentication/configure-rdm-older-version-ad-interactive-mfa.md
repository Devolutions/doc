---
eleventyComputed:
  title: Configurer une version plus ancienne d'Active Directory Interactive (avec support A2F) avec {{ fr.RDM }}
  description: Active Directory Interactive (avec support A2F) vous permet de vous authentifier sur votre source de données Microsoft Azure SQL en utilisant votre compte Office365 + A2F.
---
{% snippet, "badgeInfo" %}
Ce sujet concerne les versions de {{ fr.RDM }} inférieures à 2022.1. Si vous utilisez la version 2022.1 ou ultérieure, veuillez suivre [Configurer {{ fr.RDM }} Active Directory Interactive (avec support A2F)](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/enable-azure-active-directory-authentication/configure-rdm-ad-interactive-mfa/) à la place.
{% endsnippet %}

Active Directory Interactive (avec support A2F) vous permet de vous authentifier sur votre source de données Microsoft Azure SQL en utilisant votre compte Office365 + A2F.

{% snippet, "badgeCaution" %}
Pour l'authentification Azure AD, télécharger et installer la bibliothèque d'authentification Microsoft Active Directory pour Microsoft SQL Server sur chaque ordinateur client.
{% endsnippet %}

{% snippet, "badgeWarning" %}
Lors de la création d'utilisateurs SQL Active Directory, vous devez être connecté avec un utilisateur Azure Active Directory. Sinon, cela échouera et vous serez informé de l'erreur.
{% endsnippet %}

Utiliser l'administrateur Azure Active Directory défini sur les serveurs pour créer votre premier utilisateur admin {{ fr.RDM }}. Une fois créé, vous pouvez utiliser ce nouveau compte pour créer d'autres utilisateurs.

## Paramètres

![!!RDMWin2234](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2234.png)

1. Sélectionner ***Active Directory Interactive (avec support A2F)*** dans le menu déroulant ***Mode de connexion***.
1. Vous pouvez spécifier comment vous souhaitez que {{ fr.RDM }} interagisse avec Azure AD pendant l'authentification.

| OPTION           | DESCRIPTION |
|------------------|-------------|
| Par défaut          | C'est le mode par défaut. <br> L'utilisateur sera invité à saisir ses identifiants même s'il existe déjà dans le cache un jeton répondant aux exigences. |
| Automatique <br> (Partagé dans les versions antérieures) | Azure AD invitera l'utilisateur à saisir ses identifiants uniquement si nécessaire. Si un jeton répondant aux exigences est déjà en cache, l'utilisateur ne sera pas invité.   |

{% snippet, "badgeCaution" %}
Concernant les appareils joints à Azure AD (appareils enregistrés). Azure AD peut ou non demander l'A2F. Cela est entièrement contrôlé par Azure AD, il n'y a rien que nous puissions faire dans {{ fr.RDM }} pour forcer ou contourner l'A2F autre que les options ***Par défaut*** ou ***Automatique*** mentionnées ci-dessus.
{% endsnippet %}

3. Dans le champ ***Nom d'utilisateur***, coller l'email de l'***administrateur Active Directory*** que vous avez créé dans les bases de données Microsoft Azure SQL.
{% snippet, "badgeInfo" %}
Lors de la première connexion, le nom d'utilisateur doit être l'administrateur Active Directory tel que défini dans [Configurer l'administrateur Active Directory](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/enable-azure-active-directory-authentication/configure-admin/). Une fois que vous ajoutez un autre utilisateur AD dans {{ fr.RDM }}, ils pourront se connecter.
{% endsnippet %}

{% snippet, "badgeCaution" %}
![!!RDMWin2217](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2217.png)
Si vous recevez ce message d'erreur : Impossible de se connecter à la base de données ! Connexion échouée pour l'utilisateur '<token-identified principal>' c'est parce que vous n'utilisez pas l'email de l'***administrateur Active Directory*** que vous avez créé dans les bases de données Microsoft Azure SQL.
{% endsnippet %}

4. Cliquer sur ***Configurer*** pour définir les [Paramètres de l'application Azure](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/enable-azure-active-directory-authentication/create-app-registration/) et entrer l'ID de l'application de l'enregistrement d'application Azure Active Directory et l'URI de redirection correspondant.
{% snippet, "badgeCaution" %}
Lorsque vous recevez cette erreur : ***AADSTS70001 - Application avec l'identifiant n'a pas été trouvée dans l'annuaire…***.

Valider que votre ***ID d'application*** dans {{ fr.RDM }} est identique à l'***ID d'application (client) de l'enregistrement d'application*** (étape 11 de [Créer un enregistrement d'application Azure Active Directory](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/enable-azure-active-directory-authentication/create-app-registration/)).
{% endsnippet %}

![Enregistrement d'application](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip5010.png)
5. Configurer la base de données pour s'authentifier dans le champ ***Base de données***.
