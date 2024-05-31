---
eleventyComputed:
  title: Authentification multifacteur
  order: 30
---
{% snippet, "badgeInfo" %}
Cette fonctionnalité est uniquement disponible pour les sources de données [{{ fr.DVLS }}](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/server/), [Microsoft Azure SQL](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/), [Microsoft SQL Server](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-sql-server/), et [SQLite](/rdm/windows/data-sources/data-sources-types/sqlite/).
{% endsnippet %}

L'authentification multifacteur (AMF) identifie les utilisateurs par au moins deux composants différents : quelque chose que l'utilisateur connaît (souvent un mot de passe) et quelque chose que l'utilisateur possède (par exemple, un code de validation envoyé à un appareil mobile). Si l'un des composants est manquant ou fourni incorrectement, l'identité de l'utilisateur n'est pas établie avec une certitude suffisante et l'accès à la source de données restera bloqué.

L'AMF est définie au niveau de la source de données, sauf dans {{ fr.DVLS }}, où elle est [définie pour l'utilisateur](/server/web-interface/administration/configuration/server-settings/security/two-factor/). {{ fr.RDM }} prend en charge [Authenticator (TOTP)](/rdm/windows/data-sources/multi-factor-authentication/authenticator-totp/), [Yubikey](/rdm/windows/data-sources/multi-factor-authentication/yubikey/), et [Duo](/rdm/windows/data-sources/multi-factor-authentication/duo/).

Aller à la section correspondant à votre type de source de données :

* [Azure SQL ou SQL Server](#configure-multi-factor-authentication-on-a-microsoft-azure-sql-or-sql-server-sata-source)
* [SQLite](#configure-multi-factor-authentication-on-a-sqlite-data-source)

### Configurer l'Authentification Multifacteur sur une Source de Données Microsoft Azure SQL ou SQL Server

1. Dans {{ fr.RDM }}, aller à la source de données pour laquelle vous souhaitez configurer l'AMF.
1. Aller à ***Fichier – Paramètres de Mon Compte***.
1. Cliquer sur ***Authentification Multifacteur de la Source de Données***.
![Fichier – Paramètres de Mon Compte – Authentification Multifacteur de la Source de Données](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2146.png)
1. Dans la fenêtre ***Configuration Multifacteur***, cliquer sur ***Changer***.
![Changer la Configuration Multifacteur](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11098.png)
1. Sélectionner votre ***Type*** d'AMF dans la liste déroulante.
![Type d'Authentification Multifacteur](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11099.png)
1. Suivre l'un des liens ci-dessous en fonction du choix effectué à l'étape précédente :
    * [Authenticator (TOTP)](/rdm/windows/data-sources/multi-factor-authentication/authenticator-totp/)
    * [Yubikey](/rdm/windows/data-sources/multi-factor-authentication/yubikey/)
    * [Duo](/rdm/windows/data-sources/multi-factor-authentication/duo/)

### Configurer l'Authentification Multifacteur sur une Source de Données SQLite

1. Dans {{ fr.RDM }}, aller à la source de données pour laquelle vous souhaitez configurer l'AMF.
1. Aller à ***Fichier – Sources de Données***.
1. Cliquer sur le bouton ***Modifier la Source de Données***.
![Fichier – Sources de Données – Modifier la Source de Données](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2149.png)
1. À côté de l'option ***Multifacteur***, cliquer sur ***Aucun***.
![Option Multifacteur](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2150.png)
1. Dans la fenêtre ***Configuration Multifacteur***, cliquer sur ***Changer***.
![Changer la Configuration Multifacteur](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11098.png)
1. Sélectionner votre ***Type*** d'AMF dans la liste déroulante.
![Type d'Authentification Multifacteur](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11099.png)
1. Suivre l'un des liens ci-dessous en fonction du choix effectué à l'étape précédente :
    * [Authenticator (TOTP)](/rdm/windows/data-sources/multi-factor-authentication/authenticator-totp/)
    * [Yubikey](/rdm/windows/data-sources/multi-factor-authentication/yubikey/)
    * [Duo](/rdm/windows/data-sources/multi-factor-authentication/duo/)
