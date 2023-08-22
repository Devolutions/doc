---
eleventyComputed:
  title: Configure SSO authentication with Microsoft Azure
  description: Here are the steps to configure Azure with {{ en.DHUBB }} for SSO authentication and user provisioning.
  keywords:
  - Office 365
  - Office365
  - SSO
  - Azure
---
Here are the steps to configure Azure with {{ en.DHUBB }} for SSO authentication and user provisioning.  

{% snippet icon.badgeCaution %} 
An [Azure AD account](https://azure.microsoft.com/) with the appropriate rights is required. 
{% endsnippet %}
 
## Single Sign-On (SSO) configuration

**In {{ en.DHUBB }}**  

1. Go to ***Administration – Authentication – Single Sign-On (SSO)***, then click on ***Microsoft Single Sign-On (SSO)***. You will be directed to the configuration page.  
![Administration – Authentication – Single Sign-On (SSO) – Microsoft Single Sign-On (SSO)](https://webdevolutions.azureedge.net/docs/en/hub/Hub2218.png)  

1. Fill in your ***Domain***, then click ***Continue***.
![Domain](https://webdevolutions.azureedge.net/docs/en/hub/Hub2283.png)  
1. Create a [DNS TXT Record](https://learn.microsoft.com/en-us/microsoft-365/admin/get-help-with-domains/create-dns-records-at-any-dns-hosting-provider) using the provided ***Hostname*** and ***TXT value***. This allows us to verify the ownership of the domain supplied.  
![Hostname and TXT value](https://webdevolutions.azureedge.net/docs/en/hub/Hub2284.png)  

   We recommend that you verify that your configuration is adequate through DNS querying tools such as [MXToolBox](https://mxtoolbox.com/SuperTool.aspx) or [whatsmydns.net](https://www.whatsmydns.net/). The example below uses MXToolBox's SuperTool TXT Lookup. The first part of the Domain Name must match the ***Hostname*** in {{ en.HUB }} and the Record must match the ***TXT value*** in {{ en.HUB }} as well.  
   {% snippet icon.badgeCaution %} 
   DNS TXT Records can take a while to propagate.
   {% endsnippet %}

   ![DNS TXT Record in MXToolBox](https://webdevolutions.azureedge.net/docs/en/hub/Hub2236.png)  

   {% snippet icon.badgeCaution %} 
   This validation lasts for 48 hours and does not restart automatically after that period. If you do not configure your TXT record within those 48 hours, your validation status will be ***Expired***. If that happens, you can click on ***Retry***.
   {% endsnippet %}  

1. If everything matches up, click ***Verify domain***.
1. ***Name*** your SSO configuration. This name will only appear in your {{ en.HUB }} SSO settings menu. The default name is "Microsoft".  
![Configuration Name](https://webdevolutions.azureedge.net/docs/en/hub/Hub2219.png)  

{% snippet icon.badgeCaution %} 
Do not close this setup page, as the following steps will show you where to find the information to enter in its fields. 
{% endsnippet %}
 
**In Azure AD Portal**

3. In a new web browser page, open your [Microsoft Azure AD Portal](https://azure.microsoft.com/) and sign in to your account. 
1. Select ***Azure Active Directory*** in the ***Azure services*** section. If you do not see it, click on ***More services*** to make other services appear.  
![Azure Active Directory Service](https://webdevolutions.azureedge.net/docs/en/hub/Hub4073.png)  
1. In ***Overview***, click ***Add***, then select ***Enterprise application***.  
![Add an Enterprise application](https://webdevolutions.azureedge.net/docs/en/hub/Hub4165.png)  
1. Click on ***Create your own application***.  
![Create your own application](https://webdevolutions.azureedge.net/docs/en/hub/Hub2138.png)  
1. Enter the name of this new application, then click on ***Create***.  

{% snippet icon.badgeNotice %} 
We recommend including either "Devolutions" or "{{ en.HUB }}" in the name. 
{% endsnippet %}
 
![Application Name](https://webdevolutions.azureedge.net/docs/en/hub/Hub2139.png)  

8. In the ***Properties***, set the ***Assignment required?*** setting as needed. To learn more about this setting, hover over the information icon next to it with your cursor.  
![Properties – Assignment required](https://webdevolutions.azureedge.net/docs/en/hub/Hub2140.png)  
1. Save your changes if applicable using the ***Save*** button at the top. 
1. Staying in ***Properties***, click on ***application registration*** in the text at the top.  
![Properties – application registration](https://webdevolutions.azureedge.net/docs/en/hub/Hub2141.png)  
1. Select ***Authentication*** in the left side menu, then click on ***Add a platform***.  
![Authentication – Add a platform](https://webdevolutions.azureedge.net/docs/en/hub/Hub2142.png)  
1. In ***Configure platforms***, select ***Web***.  
![Configure platforms – Web](https://webdevolutions.azureedge.net/docs/en/hub/Hub2143.png)  

**In {{ en.DHUBB }}** 

13. Back on the ***Configure Single Sign-On (SSO)*** page, copy the ***Callback URL*** by clicking on the ***Copy to Clipboard*** icon next to it.  
![Copy the Callback URL](https://webdevolutions.azureedge.net/docs/en/hub/Hub2220.png)  

**In Azure AD Portal** 

14. Back in Azure, paste the ***Callback URL*** in the ***Redirect URIs*** field, then click ***Configure*** at the bottom.  
![Redirect URIs](https://webdevolutions.azureedge.net/docs/en/hub/Hub2145.png)  
1. Select ***Token configuration*** in the left side menu, then click on ***Add optional claim***.  
![Token configuration – Add optional claim](https://webdevolutions.azureedge.net/docs/en/hub/Hub2147.png)  
1. Under ***Token type***, select ***ID***. Then, in the list, select the following claims:  

  * ***email***
  * ***family_name***
  * ***given_name***
  * ***upn***
  * ***xms_pl***
  * ***xms_tpl***  
![Add optional claim](https://webdevolutions.azureedge.net/docs/en/hub/Hub2148.png)  

17. Click ***Add***. 
1. When prompted, enable ***Turn on the Microsoft Graph email***, then click ***Add***.  
![Turn on the Microsoft Graph email](https://webdevolutions.azureedge.net/docs/en/hub/Hub2149.png)  
1. Select ***Overview*** in the left side menu, then copy the ***Application (client) ID*** by clicking on the ***Copy to clipboard*** icon next to it.  
![Copy the Application (client) ID](https://webdevolutions.azureedge.net/docs/en/hub/Hub2159.png)  

**In {{ en.DHUBB }}**  

20. Back on the ***Configure Single Sign-On (SSO)*** page, paste the ***Application (client) ID*** from the last step in the ***Client ID*** field.  
![Client ID](https://webdevolutions.azureedge.net/docs/en/hub/Hub2221.png)  

**In Azure AD Portal**  

21. Back in Azure, select ***Certificates & secrets*** in the left side menu, then, in the ***Client secrets*** tab, click on ***New client secret***.  
![Certificates & secrets – Client secrets – New client secret](https://webdevolutions.azureedge.net/docs/en/hub/Hub2151.png)  
1. In the ***Add a client secret*** window, enter a ***Description*** (for example, the name of your Enterprise app) and select an expiration date for this client secret, as per your best internal security practices. 
{% snippet icon.badgeCaution %} 
Note that when the client secret expires, no one will be able to connect to the associated {{ en.HUB }}. You will then need to create a new client secret. We recommend that you set yourself a task reminder before the expiration date. 
{% endsnippet %}
 
![Add a client secret](https://webdevolutions.azureedge.net/docs/en/hub/Hub2152.png)  

23. Click ***Add***. 
1. Copy the ***Value*** of this new client secret by clicking on the ***Copy to clipboard*** icon next to it.  
![Copy the client secret value](https://webdevolutions.azureedge.net/docs/en/hub/Hub2153.png)  

**In {{ en.DHUBB }}**  

25. Back on the ***Configure Single Sign-On (SSO)*** page, paste the client secret ***Value*** from the last step in the ***Client secret Key*** field.  
![Client secret Key](https://webdevolutions.azureedge.net/docs/en/hub/Hub2222.png)  

**In Azure AD Portal**  

26. Back in Azure, select ***Overview*** in the left side menu, then click on the ***Endpoints*** tab.  
![Overview – Endpoints](https://webdevolutions.azureedge.net/docs/en/hub/Hub2158.png)  
1. In the ***Endpoints*** window, copy the ***OpenID Connect metadata document*** URL by clicking on the ***Copy to clipboard*** icon next to it.  
![Copy the OpenID Connect metadata document URL](https://webdevolutions.azureedge.net/docs/en/hub/Hub2160.png)  

**In {{ en.DHUBB }}**  

28. Back on the ***Configure Single Sign-On (SSO)*** page, paste the URL from the last step in the ***Discovery URL*** field.  
![Discovery URL](https://webdevolutions.azureedge.net/docs/en/hub/Hub2223.png)  

1. Click on ***Test Configuration*** to make sure it is correct. You will be prompted by a popup window to enter your login credentials.  

   {% snippet icon.badgeCaution %} 
   If the popup does not appear, your browser or browser extension may be blocking it. You will need to change your browser and/or extension settings. If this still does not work, deactivating/removing the extension or changing your browser may also solve the problem.
   {% endsnippet %}  

   ![Test Configuration](https://webdevolutions.azureedge.net/docs/en/hub/Hub2224.png)  
1. If the connection is successful, your account will connect with Azure AD and you will see a summary of your configuration.  

1. In the ***Summary*** of your configuration, click ***Save***.  
![Save your configuration](https://webdevolutions.azureedge.net/docs/en/hub/Hub2225.png)  

## Provisioning configuration

To synchronize your users and user groups from your providers to the {{ en.HUB }}, follow the next steps.  

**In {{ en.DHUBB }}**  

1. Go to ***Administration – Authentication – Provisioning*** and enable ***SCIM provisioning***.
![Enable SCIM provisioning](https://webdevolutions.azureedge.net/docs/en/hub/Hub2226.png)  

1. In the ***Provisioning synchronization setup***, copy the ***Tenant URL*** by clicking on the ***Copy to Clipboard*** icon next to it.  
![Copy the Tenant URL](https://webdevolutions.azureedge.net/docs/en/hub/Hub2227.png)  

**In Azure AD Portal**  

3. In the management of your Enterprise app, go to ***Provisioning*** and click on ***Get started***.  
![Provisioning – Get started](https://webdevolutions.azureedge.net/docs/en/hub/Hub2163.png)  
1. Set the ***Provisioning Mode*** to ***Automatic***, then paste the URL from step 3 in the ***Tenant URL*** field.  
![Provisioning Mode and Tenant URL](https://webdevolutions.azureedge.net/docs/en/hub/Hub2166.png)  

**In {{ en.DHUBB }}**  

5. Copy the ***Secret Token*** by clicking on the ***Copy to Clipboard*** icon next to it.  
![Copy the Secret Token](https://webdevolutions.azureedge.net/docs/en/hub/Hub2228.png)  

**In Azure AD Portal**  

6. Paste the token from the previous step in the ***Secret Token*** field.  
![Secret Token](https://webdevolutions.azureedge.net/docs/en/hub/Hub2164.png)  
1. Test the connection to make sure that it works, then click ***Save***.  

**In {{ en.DHUBB }}**  

8. Click ***Activate Synchronization***.
![Activate Synchronization](https://webdevolutions.azureedge.net/docs/en/hub/Hub2229.png)  
1. When asked to confirm, click ***Start Synchronization***.
![Start Synchronization](https://webdevolutions.azureedge.net/docs/en/hub/Hub2230.png)  

You can now see an overview of your provisioning synchronization. Next to the ***Tenant URL***, you have the options to ***Regenerate a SCIM Token*** or ***Delete the SCIM Provisioning***.
![Provisioning synchronization overview](https://webdevolutions.azureedge.net/docs/en/hub/Hub2231.png)  

{% snippet icon.badgeCaution %} 
The ***Secret Token*** will expire 365 days after its generation. When it does, the provisioning will stop working. You will then need to regenerate a new token in the ***Provisioning synchronization overview*** page seen above. We recommend that you set yourself a task reminder before the expiration date. 
{% endsnippet %}

## Adding a user/group 

In this section, you will add your users and user groups to your Enterprise app.  

{% snippet icon.badgeInfo %} 
You need to have an Azure Enterprise license to be able to synchronize user groups. 
{% endsnippet %}
 
{% snippet icon.badgeCaution %} 
Nested groups are not supported, meaning that Azure provisioning will not synchronize the users member of the nested group. 
{% endsnippet %}
 
**In Azure AD Portal**  

1. Select ***Users and groups*** in the left side menu, then click ***Add user/group***.  
![Users and groups – Add user/group](https://webdevolutions.azureedge.net/docs/en/hub/Hub2167.png)  
1. Under ***Add Assignment***, click on ***None selected***.  
![Add Assignment](https://webdevolutions.azureedge.net/docs/en/hub/Hub2168.png)  
1. Manually search for users and groups or use the ***Search*** bar. Click on ***Select*** when you have finished your selection.  
![Users and groups selection](https://webdevolutions.azureedge.net/docs/en/hub/Hub2169.png)  
1. Click ***Assign*** when your selection is complete.  
![Assign users and groups](https://webdevolutions.azureedge.net/docs/en/hub/Hub2170.png)  
1. Select ***Provisioning*** in the left side menu, then click ***Start provisioning***.  
![Start provisioning](https://webdevolutions.azureedge.net/docs/en/hub/Hub2171.png)  

## Synchronization between Azure and {{ en.HUB }} 

The synchronization starts automatically when the provisioning configuration is complete. Azure's provisioning frequency is at most 45 minutes and is determined by your Identity Provider. The user groups, including their members, will synchronize within this Azure provisioning time. We recommend that you to verify the first provisioning results.  

In ***Administration – User Groups***, the Azure user groups will be added. They are recognizable by the ***Is sync*** group icon next to the group name.  
![Synced user groups](https://webdevolutions.azureedge.net/docs/en/hub/Hub2182.png)  

In ***Administration – Users***, all users in the Azure user group who are already part of your {{ en.DHUB }} will be flagged as synced with the ***Is sync*** icon next to their name. All new users part of the synchronized Azure user group who are not part of the {{ en.DHUB }} will be suggested as [new invitations](/hub/getting-started/get-started-sso-hub-business/invite-users-SSO-hub-business/) in ***Invitations required***.  
![Invitations required & synced users](https://webdevolutions.azureedge.net/docs/en/hub/Hub2175.png)  

{% snippet icon.badgeNotice %} 
All users who already had a {{ en.DA }} will see both login options: the {{ en.DA }} method and the Microsoft method. 
{% endsnippet %}
 
![Sign in with your {{ en.DA }} or with Microsoft](https://webdevolutions.azureedge.net/docs/en/hub/Hub4139.png)  
