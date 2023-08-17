---
title: Créer une inscription d'application Azure Active Directory
---
{% snippet icon.badgeInfo %} 
Cette étape est facultative et non obligatoire si votre version de {{ fr.RDM }} est 2022.1 ou supérieure. 
{% endsnippet %}
 
Pour pouvoir utiliser la méthode d'authentification Active Directory Interactive (avec prise en charge MFA) dans {{ fr.RDM }}, une nouvelle application doit être enregistrée dans la console Microsoft Azure SQL (administrateur Active Directory) avec les autorisations d'API appropriées. 

## Paramètres 

1. Connectez-vous sur le [Portail d'Azure](https://portal.azure.com/). 
1. Dans la section ***Azure Active Directory***, sélectionner ***App registrations***, puis ***New registration***.  
![App registration](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip5011.png) 
1. Configurer le nom. 
![!!RdmWin4110.png](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RdmWin4110.png) 
1. Sélectionner les types de comptes pris en charge. 
![!!RdmWin4109.png](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RdmWin4109.png) 
1. Configurer le l'URI de redirection comme indiquée ci-dessous. 
{% snippet icon.badgeInfo %} 
Le ***Redirect URI*** DOIT être configuré avec ***Public client/native (mobile & desktop)***. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Dans notre exemple, l'URI de redirection est défini sur https<area>://mycompany.com, mais nous vous suggérons de le personnaliser en fonction du domaine de la page d'accueil de votre entreprise. Cela sera nécessaire dans l'étape d'authentification du sujet [Configurer {{ fr.RDM }} Active Directory Interactive (avec MFA)](/fr/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/enable-azure-active-directory-authentication/configure-rdm-ad-interactive-mfa/). 
{% endsnippet %}
 
![!!RdmWin4108.png](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RdmWin4108.png) 

6. Sélectionner les ***APIs my organization uses***, puis taper ***Azure*** et sélectionner ***Azure SQL Database***.  
![APIs my organization uses](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip5017.png) 
1. Sélectionner Delegated permissions **–*** user_impersonation et cliquer sur Add permissions.  
![user_impersonation](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip5018.png) 
1. Les autorisations API doivent ressembler à ceci. Vous visualisez la nouvelle autorisation que nous venons d'ajouter et le Microsoft Graph préexistant.  
![API / Permissions Name](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip5019.png) 
1. Étape facultative : Cliquer sur la section ***Authentification*** et passez à ***Oui***, si vous souhaitez l'option ***Authentification Windows intégrée (IWA)***.  
![Authentification](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip5013.png) 

Votre inscription à Azure Active Directory App est maintenant terminée.  

10. Copier l'App Registration's Application (client) ID qui est requis dans l'étape suivante pour {{ fr.RDM }}.  
![Application (client) ID](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip5020.png) 
