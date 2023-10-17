---
eleventyComputed:
  title: Authentification multifacteur
  order: 30
---
{% snippet icon.badgeInfo %} 
Cette fonctionnalité est disponible pour les sources de données [{{ fr.DVLS }}](/fr/rdm/windows/data-sources/data-sources-types/advanced-data-sources/server/), [Microsoft Azure SQL](/fr/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/), [Microsoft SQL Server](/fr/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-sql-server/) et [SQLite](/fr/rdm/windows/data-sources/data-sources-types/sqlite/). 
{% endsnippet %}
 
L'authentification multifacteur (AMF) identifie les utilisateurs par au moins deux éléments différents : quelque chose que l'utilisateur connaît (souvent un mot de passe) et quelque chose que l'utilisateur possède (par exemple, un code de validation envoyé à un appareil mobile). Si l'un de ces éléments est manquant ou incorrect, l'identité de l'utilisateur n'est pas établie avec suffisamment de certitude et l'accès à la source de données restera alors bloqué.  

L'AMF est définie au niveau de la source de données excepté dans {{ fr.DVLS }}, où elle est [définie sur l'utilisateur](/fr/server/web-interface/administration/configuration/server-settings/security/two-factor/). {{ fr.RDM }} prend en charge [Authenticator (TOTP)](/fr/rdm/windows/data-sources/multi-factor-authentication/authenticator-totp/), [Yubikey](/fr/rdm/windows/data-sources/multi-factor-authentication/yubikey/) et [Duo](/fr/rdm/windows/data-sources/multi-factor-authentication/duo/).  

Consultez la section qui correspond à votre type de source de données :  

* [Azure SQL ou SQL Server](#configuration-de-lauthentification-multifacteur-sur-une-source-de-données-microsoft-azure-sql-ou-sql-server) 
* [SQLite](#configuration-de-lauthentification-multifacteur-sur-une-source-de-données-sqlite) 

## Configuration de l'authentification multifacteur sur une source de données microsoft azure sql ou SQL Server 

1. Dans {{ fr.RDM }}, accéder à la source de données pour laquelle l'AMF doit être configurée. 
1. Accéder à ***Fichier – Paramètres de mon compte***. 
1. Cliquer sur ***Source de données AMF***.  
![Fichier – Paramètres de mon compte – Source de données AMF](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RDMWin2112.png) 
1. Dans la fenêtre ***Configuration de l'authentification multifacteur***, cliquer sur ***Modifier***.  
![Modifier la Configuration de l'authentification multifacteur](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip11098.png) 
1. Choisir votre ***Type*** d'AMF dans la liste déroulante.  
![Type d'authentification multifacteur](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip11099.png) 
1. Suivre l'un des liens ci-dessous en fonction du choix effectué à l'étape précédente. 
    * [Authenticator (TOTP)](/fr/rdm/windows/data-sources/multi-factor-authentication/authenticator-totp/) 
    * [Yubikey](/fr/rdm/windows/data-sources/multi-factor-authentication/yubikey/) 
    * [Duo](/fr/rdm/windows/data-sources/multi-factor-authentication/duo/) 

## Configuration de l'authentification multifacteur sur une source de données SQLite 

1. Dans {{ fr.RDM }}, accéder à la source de données pour laquelle l'AMF doit être configurée. 
1. Accéder à ***Fichier – Sources de données***. 
1. Cliquer sur le bouton ***Modifier la source de données***.  
![Fichier – Sources de données – Modifier la source de données](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RDMWin2117.png) 
1. À côté du paramètre ***2 facteurs***, cliquer sur ***Aucun***.  
![!!RDMWin2118](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RDMWin2118.png) 
1. Dans la fenêtre ***Configuration multifacteur***, cliquer sur ***Modifier***.  
![Modifier la Configuration de l'authentification multifacteur](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip11098.png) 
1. Sélectionner le ***Type*** d'AMF dans la liste déroulante.  
![Type d'authentification multifacteur](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip11099.png) 
1. Suivre l'un des liens ci-dessous en fonction du choix effectué à l'étape précédente : 
    * [Authenticator (TOTP)](/fr/rdm/windows/data-sources/multi-factor-authentication/authenticator-totp/) 
    * [Yubikey](/fr/rdm/windows/data-sources/multi-factor-authentication/yubikey/) 
    * [Duo](/fr/rdm/windows/data-sources/multi-factor-authentication/duo/) 
