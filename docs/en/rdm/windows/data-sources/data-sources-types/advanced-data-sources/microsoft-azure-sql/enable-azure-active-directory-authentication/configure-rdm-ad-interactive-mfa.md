---
title: Configure RDM Active Directory Interactive (with MFA)
---
{% snippet icon.badgeInfo %} 
This topic is for {{ en.RDM }} version 2022.1 and higher. If you are using an older version please follow this [topic](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/enable-azure-active-directory-authentication/configure-rdm-older-version-ad-interactive-mfa/) instead. 
{% endsnippet %}
 
Active Directory Interactive (with MFA Support) allows you to authenticate on your [Microsoft Azure SQL](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/) data source using your Office365 account + MFA. 
{% snippet icon.badgeWarning %} 
When creating SQL Active Directory users, you must be logged in with an Azure Active Directory user. Otherwise it will fail and you will be notified of the error. 
{% endsnippet %}
 
Use the servers defined Azure Active Directory Admin to create your first RDM admin users. Once you've created, you can use this new account to create other users. 

## Settings 

![Azure with MFA](/img/en/rdm/windows/clip5009.png) 

1. Select ***Active Directory Interactive (with MFA Support)*** from the ***Login mode*** dropdown menu. 
1. In the ***Username*** field, paste the ***Active Directory admin*** email you created in the Microsoft Azure SQL databases. 
{% snippet icon.badgeInfo %} 
On first connect, the username must be the Active Directory Admin as defined in the [Configure the Active Directory Admin](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/enable-azure-active-directory-authentication/configure-admin/) . Once you add other AD user in RDM they will be able to connect. 
{% endsnippet %}
 
{% snippet icon.badgeCaution %} 
![!!RdmWin4034.png](/img/en/rdm/windows/RdmWin4034.png) 
If you get this message error: Unable to connect to the database! Login failed for user '<token-identified principal>' double check the username for spelling errors. 
{% endsnippet %}
 
3. Configure the database to authenticate in the ***Database*** field. 

