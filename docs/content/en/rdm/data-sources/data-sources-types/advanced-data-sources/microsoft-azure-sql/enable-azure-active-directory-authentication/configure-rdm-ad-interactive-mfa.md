---
eleventyComputed:
  title: Configure Active Directory Interactive (with MFA Support) in {{ en.RDM }}
  description: Active Directory Interactive (with MFA Support) allows you to authenticate on your Microsoft Azure SQL data source using your Office365 account and MFA.
---
{% snippet icon.badgeInfo %}
This topic covers {{ en.RDM }} versions 2022.1 and later. If you are using an earlier version, please see [Configure an older {{ en.RDM }} version AD Interactive (with MFA support)](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/enable-azure-active-directory-authentication/configure-rdm-older-version-ad-interactive-mfa/) instead.
{% endsnippet %}

Active Directory Interactive (with MFA support) allows you to authenticate on your [Microsoft Azure SQL](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/) data source using your Office365 account and MFA.

{% snippet icon.badgeWarning %}
When creating Azure SQL Active Directory users, you must be logged in with an Azure Active Directory user. Otherwise, it will fail and you will be notified of the error.
{% endsnippet %}

Use the servers defined Azure Active Directory administrator to create your first {{ en.RDM }} administrator users. Once you have created it, you can use this new account to create the other users.

## Settings

![Microsoft SQL Azure with MFA support](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2180.png)

1. In {{ en.RDM }}, go to ***File – Data Sources*** and click on ***Add a New Data Source***.
1. Select the ***Microsoft Azure SQL*** data source type.
1. Specify the ***Name*** and ***Host*** of your data source.
1. In the ***Login mode*** drop-down menu, select ***Active Directory Interactive (with MFA Support)***.
1. In the ***Username*** field, paste the ***Active Directory admin*** email you created in Microsoft Azure SQL Database.
   {% snippet icon.badgeInfo %}
   On first connect, the username must be the Active Directory administrator as defined in [Configure the Azure Active Directory administrator](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/enable-azure-active-directory-authentication/configure-admin/). Once you add other AD users in {{ en.RDM }}, they will be able to connect.
   {% endsnippet %}
   {% snippet icon.badgeCaution %}
   ![!!RDMWin2217](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2217.png) If you get the error message ***Unable to connect to the database! Login failed for user '&lt;token-identified principal&gt;'.***, double-check the username for spelling errors.
   {% endsnippet %}
1. Enter the ***Database*** to authenticate to.
1. Click ***OK***.
{% snippet icon.badgeInfo %}
When you choose ***Active Directory Interactive (with MFA Support)***, we have no control over any of the login prompts. We send the command to the Microsoft library to authenticate; the rest is controlled on their side.

Here are some considerations:
* Has any ***Conditional Access Policy*** been added or changed recently that might have caused this to change in behaviour?
* If they are on an Azure AD joined machine, you can try Active Directory Integrated and see if it works better for you.
{% endsnippet %}
