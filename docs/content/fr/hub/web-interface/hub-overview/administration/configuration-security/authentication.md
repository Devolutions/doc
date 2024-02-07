---
eleventyComputed:
  title: Authentification
---
La section ***Authentification*** vous permet de configurer la manière dont vos utilisateurs se connecteront à votre hub. 

## Général 

Dans la section ***Général***, vous pouvez activer les paramètres de connexion pour vos utilisateurs.  
![Administration – Authentification – Général](https://webdevolutions.azureedge.net/docs/fr/hub/Hub2157.png) 

* ***Forcer la demande de connexion*** impose une demande de connexion à tous les utilisateurs. S'ils ont configuré leur vérification en deux étapes dans leur {{ fr.DA }}, seule cette dernière sera demandée. 
* ***Appliquer la validation en 2 étapes sur le {{ fr.DA }}*** oblige les utilisateur à configurer la vérification en deux étapes sur leur {{ fr.DA }}. 
{% snippet icon.badgeCaution %} 
Le paramètre ***Appliquer la validation en 2 étapes sur le {{ fr.DA }}*** ne s'applique pas aux utilisateurs qui se connectent avec l'authentification unique. 
{% endsnippet %}
 
Il est également possible de régler le ***Temps d'inactivité avant la déconnexion*** sur différentes valeurs allant de 5 minutes à 4 heures ou de le laisser ***Désactivé***. 

## Authentification unique (SSO) 

Dans la section ***Authentification unique (SSO)***, vous pouvez ***Configurer l'authentification unique (SSO)*** pour vos utilisateur de {{ fr.DHUB }}. Ils pourront alors se connecter à votre hub en utilisant leurs identifiants Azure AD en plus de pouvoir le faire avec leurs identifiants {{ fr.DA }}.  
![Administration – Authentification – Authentification unique (SSO)](https://webdevolutions.azureedge.net/docs/fr/hub/Hub2158.png) 
{% snippet icon.badgeHelp %} 
Lors de la configuration du SSO, vous devrez remplir certains champs de la page ***Configurer l'authentification unique (SSO)***. Consultez [Introduction à SSO avec {{ fr.DHUBB }}](/fr/hub/getting-started/get-started-sso-hub-business/) pour plus d'informations. 
{% endsnippet %}
 
![Configurer l'authentification unique (SSO)](https://webdevolutions.azureedge.net/docs/fr/hub/Hub2159.png) 

Après avoir configuré et enregistré vos paramètres SSO, il est encore possible de les modifier, ou même de les supprimer.  

Par défaut, le SSO sera activé dès que vous aurez terminé la configuration. Vous pouvez également ***Forcer l'authentification unique à tous les utilisateurs***.  
{% snippet icon.badgeWarning %} 
Si vous activez ***Forcer l'authentification unique à tous les utilisateurs***, ceux-ci n'auront pas accès à {{ fr.DHUBB }} en cas de mauvaise configuration ou de panne de votre fournisseur SSO. Nous vous recommandons vivement d'informer tous les utilisateurs existants de votre {{ fr.DHUBB }} de cette nouvelle méthode d'authentification avant de l'activer. 
{% endsnippet %}
 
![Authentification unique (SSO) configurée](https://webdevolutions.azureedge.net/docs/fr/hub/Hub2160.png) 

## Approvisionnement 

Synchronisez et automatisez le processus de provisionnement et de déprovisionnement des utilisateurs et des groupes de votre hub en configurant votre fournisseur d'identité (Azure Active Directory) avec votre hub en utilisant la spécification SCIM (système de gestion des identités inter-domaines) sous vos configurations idP (fournisseur d'identité). 
{% snippet icon.badgeInfo %} 
L'[authentification unique](#authentification-unique-sso) doit d'abord ête configurée et activée pour mettre en place le provisionnement. 
{% endsnippet %}
 
![Administration – Authentification – Approvisionnement](https://webdevolutions.azureedge.net/docs/fr/hub/Hub2161.png) 

Après avoir activé le SSO, vous pouvez générer un ***jeton SCIM***. Vous pouvez toujours supprimer ce jeton et en régénérer un nouveau.  
![Générer le jeton SCIM](https://webdevolutions.azureedge.net/docs/fr/hub/Hub2162.png) 

Vous aurez alors accès à l'***URL locataire*** en plus du jeton pour [configurer le provisionnement dans Azure](/fr/hub/getting-started/get-started-sso-hub-business/configure-sso-authentication-microsoft-azure/).  
![URL locataire et jeton SCIM](https://webdevolutions.azureedge.net/docs/fr/hub/Hub2163.png) 

Lorsque tout a été configuré, vous pouvez ***Activer la synchronisation*** des utilisateurs et des groupes de votre hub avec ceux d'Azure AD.  
![Activer la synchronisation](https://webdevolutions.azureedge.net/docs/fr/hub/Hub2164.png) 
