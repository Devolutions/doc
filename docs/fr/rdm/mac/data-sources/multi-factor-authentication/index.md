---
eleventyComputed:
  title: Authentification multifacteur
---
{% snippet, "badgeInfo" %}
Cette fonctionnalité est uniquement disponible pour les sources de données [{{ fr.DVLS }}](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/server/), [Microsoft SQL Server](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/microsoft-sql-server/configure-sql-server/), et [SQLite](/rdm/mac/data-sources/data-sources-types/sqlite/).
{% endsnippet %}

L'authentification multifacteur (AMF) identifie les utilisateurs par au moins deux composants différents : quelque chose que l'utilisateur connaît (souvent un mot de passe) et quelque chose que l'utilisateur possède (par exemple, un code de validation envoyé à un appareil mobile). Si l'un des composants est manquant ou fourni de manière incorrecte, l'identité de l'utilisateur n'est pas établie avec une certitude suffisante et l'accès à la source de données restera bloqué.

L'AMF est définie au niveau de la source de données, sauf dans {{ fr.DVLS }}, où elle est [définie pour l'utilisateur](/server/web-interface/administration/configuration/server-settings/security/two-factor/). {{ fr.RDMMAC }} prend en charge [Authenticator (TOTP)](/rdm/mac/data-sources/multi-factor-authentication/authenticator-totp/), [Yubikey](/rdm/mac/data-sources/multi-factor-authentication/yubikey/), et [Duo](/rdm/mac/data-sources/multi-factor-authentication/duo/).

Aller à la section correspondant à votre type de source de données :

* [SQL Server](#configure-multi-factor-authentication-on-a-microsoft-sql-server-data-source)
* [SQLite](#configure-multi-factor-authentication-on-a-sqlite-data-source)

### Configurer l'Authentification Multifacteur sur une Source de Données Microsoft SQL Server

1. Dans {{ fr.RDMMAC }}, aller à la source de données pour laquelle vous souhaitez configurer l'AMF.
1. Aller à ***Fichier – Mes Paramètres de Compte – MFA de Source de Données***.
![Fichier – Mes Paramètres de Compte – MFA de Source de Données](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2056.png)
1. Dans la fenêtre ***Configuration Multifacteur***, cliquer sur ***Changer***.
![Changer Configuration Multifacteur](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10064.png)
1. Sélectionner votre ***Type*** d'AMF dans la liste déroulante.
![Type d'Authentification Multifacteur](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10066.png)
1. Suivre l'un des liens ci-dessous en fonction du choix effectué à l'étape précédente :
    * [Authenticator (TOTP)](/rdm/mac/data-sources/multi-factor-authentication/authenticator-totp/)
    * [Yubikey](/rdm/mac/data-sources/multi-factor-authentication/yubikey/)
    * [Duo](/rdm/mac/data-sources/multi-factor-authentication/duo/)

### Configurer l'Authentification Multifacteur sur une Source de Données SQLite

1. Dans {{ fr.RDMMAC }}, aller à ***Fichier – Sources de Données***.
1. Sélectionner la source de données SQLite dans le menu de gauche, puis cliquer sur le bouton ***Modifier la source de données***.
![Modifier la source de données](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2057.png)
1. À côté du paramètre ***Multifacteur***, cliquer sur ***Aucun***.
![Option Multifacteur](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10065.png)
1. Dans la fenêtre ***Configuration Multifacteur***, cliquer sur ***Changer***.
![Configuration Deux Facteurs](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10064.png)
1. Sélectionner votre ***Type*** d'AMF dans la liste déroulante.
![Configuration Deux Facteurs](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10066.png)
1. Suivre l'un des liens ci-dessous en fonction du choix effectué à l'étape précédente :
    * [Authenticator (TOTP)](/rdm/mac/data-sources/multi-factor-authentication/authenticator-totp/)
    * [Yubikey](/rdm/mac/data-sources/multi-factor-authentication/yubikey/)
    * [Duo](/rdm/mac/data-sources/multi-factor-authentication/duo/)
