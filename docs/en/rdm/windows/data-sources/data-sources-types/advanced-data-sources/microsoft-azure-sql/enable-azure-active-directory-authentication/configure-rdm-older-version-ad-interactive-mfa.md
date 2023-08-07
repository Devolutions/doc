---
title: Configure Remote Desktop Manager Older Version AD Interactive (with MFA)
---
{% snippet icon.badgeInfo %} 
This topic is for {{ en.RDM }} versions lower than 2022.1. If you are using 2022.1 and higher please follow this [topic](DataSources_Advanced_SqlAzure_ConfigureSqlAzureForADConnections) instead. 
{% endsnippet %}
 
Active Directory Interactive (with MFA Support) allows you to authenticate on your [Microsoft Azure SQL](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/) data source using your Office365 account + MFA. 

{% snippet icon.badgeCaution %} 
For Azure AD authentication, download and install the Microsoft Active Directory Authentication Library for Microsoft SQL Server on every client computer.  
{% endsnippet %}
 
{% snippet icon.badgeWarning %} 
When creating SQL Active Directory users, you must be logged in with an Azure Active Directory user. Otherwise it will fail and you will be notified of the error. 
{% endsnippet %}
 
Use the servers defined Azure Active Directory Admin to create your first {{ en.RDM }} admin user. Once you have created it, you can use this new account to create other users.  

## Settings 

![!!RdmWin4055.png](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RdmWin4055.png)  

1. Select ***Active Directory Interactive (with MFA Support)*** from the ***Login mode*** drop-down menu. 
1. You can specify how you want {{ en.RDM }} to interact with Azure AD during the authentication. 

<table>
	<tr>
		<th>
OPTION 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Default 
		</td>
		<td>
This is the default mode.  

The user will be prompted for credentials even if there is a token that meets the requirements already in the cache. 
		</td>
	</tr>
	<tr>
		<td>
Automatic 
(Shared in older versions) 
		</td>
		<td>
Azure AD will prompt the user for credentials only when necessary. If a token that meets the requirements is already cached then the user will not be prompted. 
		</td>
	</tr>
</table>

{% snippet icon.badgeCaution %} 
When it comes to Azure AD joined devices (registered devices). Azure AD may or may not prompt for MFA. This is entirely controlled by Azure AD , there is nothing we can do in {{ en.RDM }} to force or bypass the MFA other than the ***Default*** or ***Automatic*** options mentioned above. 
{% endsnippet %}
 
3. In the ***Username*** field, paste the ***Active Directory admin*** email you created in the Microsoft Azure SQL databases. 
{% snippet icon.badgeInfo %} 
On first connect, the username must be the Active Directory Admin as defined in the [Configure the Active Directory Admin](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/enable-azure-active-directory-authentication/configure-admin/) . Once you add other AD user in {{ en.RDM }} they will be able to connect. 
{% endsnippet %}
 
{% snippet icon.badgeCaution %} 
![!!RdmWin4034.png](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RdmWin4034.png) 
If you get this message error: Unable to connect to the database! Login failed for user '<token-identified principal>' it is because you are not using the ***Active Directory admin*** email you created in the Microsoft Azure SQL databases. 
{% endsnippet %}
 
4. Click on ***Configure*** to set the [Azure App Settings](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/enable-azure-active-directory-authentication/create-app-registration/) and enter the application ID from the Azure Active Directory App Registration and the corresponding Redirect URI. 
{% snippet icon.badgeCaution %} 
When you receive this error: ***AADSTS70001 - Application with Identifier was not found in the directory…***  

Validate that your ***Application ID*** in {{ en.RDM }} is identical to the ***App Registration's Application (client) ID*** (step 11 of [Create an Azure Active Directory App Registration](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/enable-azure-active-directory-authentication/create-app-registration/) ). 
{% endsnippet %}
 
![App Registration](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip5010.png) 
5. Configure the database to authenticate in the ***Database*** field. 

