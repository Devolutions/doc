---
eleventyComputed:
  title: Créer un enregistrement d'application Azure Active Directory
  keywords:
  - Administrateur Active Directory
---
{% snippet, "badgeInfo" %}
Cette étape est facultative et non requise si votre version de {{ fr.RDM }} est 2022.1 et supérieure.
{% endsnippet %}

Pour pouvoir utiliser la méthode d'authentification Active Directory Interactive (avec support A2F) dans {{ fr.RDM }}, un nouvel enregistrement d'application doit être enregistré dans la console Microsoft Azure SQL (Azure Active Directory) avec les permissions API appropriées.

## Paramètres

1. Se connecter sur [Azure Portal](https://portal.azure.com/).
1. Dans la section Azure Active Directory, sélectionner ***App registrations*** puis ***New registration***.
![Enregistrement d'application](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip5011.png)
1. Configurer le ***Nom***.
![!!RDMWin2230](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2230.png)
1. Sélectionner les ***Types de comptes pris en charge***.
![!!RDMWin2231](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2231.png)
1. Configurer l'***URI de redirection*** comme indiqué ci-dessous et cliquer sur ***Register***.
{% snippet, "badgeInfo" %}
Le paramètre ***URI de redirection*** DOIT être configuré ***Client public/natif (mobile & bureau)***.
{% endsnippet %}

{% snippet, "badgeInfo" %}
Dans notre exemple, l'***URI de redirection*** est défini sur https<area>://mycompany.com, mais nous vous suggérons de le personnaliser au domaine de la page d'accueil de votre entreprise. Cela sera nécessaire lors de l'étape d'authentification de [Configurer {{ fr.RDM }} Active Directory Interactive (avec A2F)](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/enable-azure-active-directory-authentication/configure-rdm-older-version-ad-interactive-mfa/).
{% endsnippet %}

![!!RDMWin2232](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2232.png)

6. Sélectionner ***APIs my organization uses***, puis taper Azure et sélectionner ***Azure SQL Database***.
![APIs utilisées par mon organisation](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip5017.png)
1. Sélectionner Permissions déléguées – user_impersonation et cliquer sur ***Add permissions***.
![user_impersonation](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip5018.png)
1. Les ***Permissions API*** devraient ressembler à ceci. Vous verrez la nouvelle permission que nous venons d'ajouter et le Microsoft Graph préexistant.
![API / Nom des permissions](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip5019.png)
1. Étape facultative : Cliquer sur la section ***Authentication*** et basculer sur ***Yes***, si vous désirez l'option ***Authentification Windows Intégrée (IWA)***.
![Authentification](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip5013.png)
1. Votre enregistrement d'application Azure Active Directory est maintenant terminé.
1. Copier l'***ID d'application (client) de l'enregistrement d'application*** nécessaire dans {{ fr.RDM }} à l'étape suivante.
![ID d'application (client)](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip5020.png)
