---
eleventyComputed:
  title: Authentification multifacteur
---
{% snippet icon.badgeInfo %} 
Cette fonctionnalité est disponible pour les sources de données [{{ fr.DVLS }}](/fr/rdm/mac/data-sources/data-sources-types/advanced-data-sources/server/), [Microsoft SQL Server](/fr/rdm/mac/data-sources/data-sources-types/advanced-data-sources/microsoft-sql-server/configure-sql-server/) et [SQLite](/fr/rdm/mac/data-sources/data-sources-types/sqlite/). 
{% endsnippet %}
 

L'authentification multifacteur (AMF) identifie les utilisateurs par au moins deux éléments différents : quelque chose que l'utilisateur connaît (souvent un mot de passe) et quelque chose que l'utilisateur possède (par exemple, un code de validation envoyé à un appareil mobile). Si l'un de ces éléments est manquant ou incorrect, l'identité de l'utilisateur n'est pas établie avec suffisamment de certitude et l'accès à la source de données restera alors bloqué.  

L'AMF est définie au niveau de la source de données excepté dans {{ fr.DVLS }}, où elle est [définie sur l'utilisateur](/fr/server/web-interface/administration/configuration/server-settings/security/two-factor/). {{ fr.RDMMAC }} prend en charge [Authenticator (TOTP)](/fr/rdm/mac/data-sources/multi-factor-authentication/authenticator-totp/), [Yubikey](/fr/rdm/mac/data-sources/multi-factor-authentication/yubikey/) et [Duo](/fr/rdm/mac/data-sources/multi-factor-authentication/duo/).  

Consultez la section qui correspond à votre type de source de données :  

* [SQL Server](#configuration-de-lauthentification-multifacteur-sur-une-source-de-données-microsoft-sql-server) 
* [SQLite](#configuration-de-lauthentification-multifacteur-sur-une-source-de-données-sqlite) 

## Configuration de l'authentification multifacteur sur une source de données Microsoft SQL Server 

1. Dans {{ fr.RDM }}, accéder à la source de données pour laquelle l'AMF doit être configurée. 
1. Accéder à ***Fichier – Paramètres de mon compte – Source de données AMF***.  
![Fichier – Paramètres de mon compte – Source de données AMF](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/RDMMac2046.png) 
1. Dans la fenêtre ***Configuration de l'authentification multifacteur***, cliquer sur ***Modifier***.  
![Modifier la Configuration de l'authentification multifacteur](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/RDMMac2044.png) 
1. Sélectionner le ***Type*** d'AMF dans la liste déroulante.  
![Type d'authentification multifacteur](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/RDMMac2045.png) 
1. Suivre l'un des liens ci-dessous en fonction du choix effectué à l'étape précédente :  
* [Authenticator (TOTP)](/fr/rdm/mac/data-sources/multi-factor-authentication/authenticator-totp/) 
* [Yubikey](/fr/rdm/mac/data-sources/multi-factor-authentication/yubikey/) 
* [Duo](/fr/rdm/mac/data-sources/multi-factor-authentication/duo/) 

## Configuration de l'authentification multifacteur sur une source de données SQLite 

1. Dans {{ fr.RDM }}, accéder à ***Fichier – Sources de données***. 
1. Sélectionner la source de données SQLite dans le menu de gauche, puis cliquer sur le bouton ***Modifier la source de données***.  
![Modifier la source de données](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/RDMMac2047.png) 
1. À côté du paramètre ***2 facteurs***, cliquer sur ***Aucun***.  
![Options 2 facteurs](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/RDMMac2048.png) 
1. Dans la fenêtre ***Configuration multifacteur***, cliquer sur ***Changer***.  
![Modifier la Configuration de l'authentification multifacteur](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/RDMMac2044.png) 
1. Sélectionner le ***Type*** d'AMF dans la liste déroulante.  
![Type d'authentification multifacteur](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/RDMMac2045.png) 
1. Suivre l'un des liens ci-dessous en fonction du choix effectué à l'étape précédente : 
* [Authenticator (TOTP)](/fr/rdm/mac/data-sources/multi-factor-authentication/authenticator-totp/) 
* [Yubikey](/fr/rdm/mac/data-sources/multi-factor-authentication/yubikey/) 
* [Duo](/fr/rdm/mac/data-sources/multi-factor-authentication/duo/) 
