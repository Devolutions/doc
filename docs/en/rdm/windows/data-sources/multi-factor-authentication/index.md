---
title: Multi-Factor Authentication
order: 30
---
{% snippet icon.badgeInfo %} 
This feature is only available for [{{ en.DVLS }}](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/server/) , [Microsoft Azure SQL](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/) , [Microsoft SQL Server](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-sql-server/) , and [SQLite](/rdm/windows/data-sources/data-sources-types/sqlite/) data sources. 
{% endsnippet %}
 
Multi-factor authentication (MFA) identifies users by at least two different components: something that the user knows (often a password) and something that the user possesses (e.g., a validation code sent to a mobile device). If one of the components is missing or supplied incorrectly, the user's identity is not established with sufficient certainty and access to the data source will remain blocked.  

MFA is set at the data source level, except in {{ en.DVLS }} , where it is [set on the user](/server/web-interface/administration/configuration/server-settings/security/two-factor/) . {{ en.RDM }} supports [Authenticator (TOTP)](/rdm/windows/data-sources/multi-factor-authentication/authenticator-totp/) , [Yubikey](/rdm/windows/data-sources/multi-factor-authentication/yubikey/) , and [Duo](/rdm/windows/data-sources/multi-factor-authentication/duo/) .  

Go to the section that corresponds to you data source type:  

* [Azure SQL or SQL Server](#configure-multi-factor-authentication-on-a-microsoft-azure-sql-or-sql-server-sata-source) 
* [SQLite](#configure-multi-factor-authentication-on-a-sqlite-data-source) 

### Configure Multi-Factor Authentication on a Microsoft Azure SQL or SQL Server Data Source 

1. In {{ en.RDM }} , go to the data source for which you want to configure the MFA. 
1. Go to ***File – My Account Settings*** . 
1. Click on ***Data Source MFA*** .  
![File – My Account Settings – Data Source MFA](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2146.png) 
1. In the ***Multi-Factor Configuration*** window, click ***Change*** .  
![Change the Multi-Factor Configuration](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11098.png) 
1. Select your MFA ***Type*** in the drop-down list.  
![Multi-Factor Authentication Type](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11099.png) 
1. Follow one of the links below depending on the choice made in the previous step: 
    * [Authenticator (TOTP)](/rdm/windows/data-sources/multi-factor-authentication/authenticator-totp/) 
    * [Yubikey](/rdm/windows/data-sources/multi-factor-authentication/yubikey/) 
    * [Duo](/rdm/windows/data-sources/multi-factor-authentication/duo/) 

### Configure Multi-Factor Authentication on a SQLite Data Source 

1. In {{ en.RDM }} , go to the data source for which you want to configure the MFA. 
1. Go to ***File – Data Sources*** . 
1. Click on the ***Edit Data Source*** button.  
![File – Data Sources – Edit Data Source](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2149.png) 
1. Next to the ***Multi-factor*** option, click ***None*** .  
![Multi-factor Option](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2150.png) 
1. In the ***Multi-Factor Configuration*** window, click ***Change*** .  
![Change the Multi-Factor Configuration](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11098.png) 
1. Select your MFA ***Type*** in the drop-down list.  
![Multi-Factor Authentication Type](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11099.png) 
1. Follow one of the links below depending on the choice made in the previous step: 
    * [Authenticator (TOTP)](/rdm/windows/data-sources/multi-factor-authentication/authenticator-totp/) 
    * [Yubikey](/rdm/windows/data-sources/multi-factor-authentication/yubikey/) 
    * [Duo](/rdm/windows/data-sources/multi-factor-authentication/duo/) 


