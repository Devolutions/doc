---
title: Configurer Remote Desktop Manager Active Directory Interactive (avec MFA)
---
{% snippet icon.badgeInfo %} 
Cette rubrique est pour les versions de {{ fr.RDM }} 2022.1 et plus. Si vous utilisez une version plus ancienne, veuillez suivre ce [sujet](/fr/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/enable-azure-active-directory-authentication/configure-rdm-older-version-ad-interactive-mfa/) . 
{% endsnippet %}
 

Active Directory Interactive (avec MFA pris en charge) vous permet de vous authentifier sur votre source de données Microsoft Azure SQL à l'aide de votre compte Office365 + MFA. 

{% snippet icon.badgeInfo %} 
Lors de la création d'utilisateurs Azure SQL Active Directory, vous devez être connecté avec un utilisateur Azure Active Directory. Sinon, il échouera et vous serez informé de l'erreur. 
{% endsnippet %}
 
Utiliser les serveurs définis par l'admin Azure Active Directory pour créer votre premier utilisateur d'administrateur Remote Desktop Manager. Une fois que vous avez créé, vous pouvez utiliser ce nouveau compte pour créer d'autres utilisateurs. 

## Paramètres 

![Active Directory Interactive (avec MFA pris en charge)](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip5009.png) 

1. Sélectionner Active Directory Interactive (avec MFA pris en charge) dans le menu déroulant Mode de connexion . 
1. Dans le champ ***Nom d'utilisateur*** , coller le courriel d' ***Active Directory admin*** que vous avez créé dans Microsoft Azure SQL databases. 
{% snippet icon.badgeInfo %} 
Lors de la première connexion, le nom d'utilisateur doit être l'administrateur Active Directory tel que défini dans la [Configuration de l'administrateur Active Directory](/fr/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/enable-azure-active-directory-authentication/configure-admin/) . Une fois que vous avez ajouté un autre utilisateur AD dans Remote Desktop Manager, ils pourront se connecter. 
{% endsnippet %}
 
{% snippet icon.badgeCaution %} 
![!!RdmWin4032.png](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RdmWin4032.png) 
Si vous obtenez ce message d'erreur: Unable to connect to the database! Login failed for user '<token-identified principal>' Vérifier le nom d'utilisateur pour les fautes d'orthographe. 
{% endsnippet %}
 
3. Configurer la base de données pour vous authentifier dans le champ ***Base de données*** . 

