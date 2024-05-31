---
eleventyComputed:
  title: Activer SQL Azure avec Azure Active Directory avec A2F
---
Pour la version {{ fr.RDM }} 2022.1 et supérieure, suivre les étapes suivantes pour activer correctement un Azure SQL avec Azure Active Directory (A2F) en combinaison avec {{ fr.RDM }}.

1. [Configurer l'administrateur Active Directory](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/enable-azure-active-directory-authentication/configure-admin/)
1. [Configurer {{ fr.RDM }} Active Directory Interactif (avec support A2F)](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/enable-azure-active-directory-authentication/configure-rdm-ad-interactive-mfa/)
1. [Configurer l'utilisateur Azure Directory dans {{ fr.RDM }}](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/enable-azure-active-directory-authentication/configure-user/)

Pour les versions de {{ fr.RDM }} inférieures à 2022.1, veuillez suivre ces étapes à la place :

1. [Configurer l'administrateur Active Directory](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/enable-azure-active-directory-authentication/configure-admin/)
1. [Créer un enregistrement d'application Azure Active Directory](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/enable-azure-active-directory-authentication/create-app-registration/)
1. [Configurer {{ fr.RDM }} Ancienne Version AD Interactif (avec A2F)](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/enable-azure-active-directory-authentication/configure-rdm-older-version-ad-interactive-mfa/)
1. [Configurer l'utilisateur Azure Directory dans {{ fr.RDM }}](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/enable-azure-active-directory-authentication/configure-user/)
