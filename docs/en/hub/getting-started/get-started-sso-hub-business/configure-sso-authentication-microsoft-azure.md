---
title: Configure SSO Authentication With Microsoft Azure
keywords:
- Office 365
- Office365
---
Here are the steps to configure Azure with Devolutions {{ en.PHUB }} Business for SSO authentication and user provisioning.  

{% snippet icon.badgeCaution %} 
An [Azure AD account](https://azure.microsoft.com/) with the appropriate rights is required. 
{% endsnippet %}
 
### Configure Single Sign-On (SSO) 

**In Devolutions {{ en.PHUB }} Business**  

1. Go to ***Administration – Authentication*** . 
1. In ***Single Sign-On (SSO)*** , click on ***Configure Single Sign-On (SSO)*** .  
![Administration – Authentication – Single Sign-On (SSO) – Configure Single Sign-On (SSO)](/img/en/hub/Hub2187.png)  

A configuration window will open.  
![Configure Single Sign-On (SSO)](/img/en/hub/Hub2188.png)  

{% snippet icon.badgeCaution %} 
Do not close this setup window, as the following steps will show you where to find the information to enter in these fields. 
{% endsnippet %}
 
**In Azure AD Portal**

3. In a new web browser page, open your [Microsoft Azure AD Portal](https://azure.microsoft.com/) and sign in to your account. 
1. Select ***Azure Active Directory*** in the ***Azure services*** section. If you do not see it, click on ***More services*** to make other services appear.  
![Azure Active Directory Service](/img/en/hub/Hub4073.png)  
1. In ***Overview*** , click ***Add*** , then select ***Enterprise application*** .  
![Add an Enterprise application](/img/en/hub/Hub4165.png)  
1. Click on ***Create your own application*** .  
![Create your own application](/img/en/hub/Hub2138.png)  
1. Enter the name of this new application, then click on ***Create*** .  

{% snippet icon.badgeNotice %} 
We recommend including either “Devolutions“ or “ {{ en.PHUB }} “ in the name. 
{% endsnippet %}
 
![Application Name](/img/en/hub/Hub2139.png)  

8. In the ***Properties*** , set the ***Assignment required?*** setting as needed. To learn more about this setting, hover over the information icon next to it with your cursor.  
![Properties – Assignment required](/img/en/hub/Hub2140.png)  
1. Save your changes if applicable using the ***Save*** button at the top. 
1. Staying in ***Properties*** , click on ***application registration*** in the text at the top.  
![Properties – application registration](/img/en/hub/Hub2141.png)  
1. Select ***Authentication*** in the left side menu, then click on ***Add a platform*** .  
![Authentication – Add a platform](/img/en/hub/Hub2142.png)  
1. In ***Configure platforms*** , select ***Web*** .  
![Configure platforms – Web](/img/en/hub/Hub2143.png)  

**In Devolutions {{ en.PHUB }} Business** 

13. Back in the ***Configure Single Sign-On (SSO)*** window, copy the ***Callback URL*** at the bottom by clicking on the ***Copy to Clipboard*** icon next to it.  
![Copy the Callback URL](/img/en/hub/Hub2189.png)  

**In Azure AD Portal** 

14. Back in Azure, paste the ***Callback URL*** in the ***Redirect URIs*** field, then click ***Configure*** at the bottom.  
![Redirect URIs](/img/en/hub/Hub2145.png)  
1. Select ***Token configuration*** in the left side menu, then click on ***Add optional claim*** .  
![Token configuration – Add optional claim](/img/en/hub/Hub2147.png)  
1. Under ***Token type*** , select ***ID*** . Then, in the list, select the following claims:  

* ***email*** 
* ***family_name*** 
* ***given_name*** 
* ***upn*** 
* ***xms_pl*** 
* ***xms_tpl***  
![Add optional claim](/img/en/hub/Hub2148.png)  

17. Click ***Add*** . 
1. When prompted, enable ***Turn on the Microsoft Graph email*** , then click ***Add*** .  
![Turn on the Microsoft Graph email](/img/en/hub/Hub2149.png)  
1. Select ***Overview*** in the left side menu, then copy the ***Application (client) ID*** by clicking on the ***Copy to clipboard*** icon next to it.  
![Copy the Application (client) ID](/img/en/hub/Hub2189.png)  

**In Devolutions {{ en.PHUB }} Business**  

20. Back in the ***Configure Single Sign-On (SSO)*** window, paste the ***Application (client) ID*** from the last step in the ***Client ID*** field.  
![Client ID](/img/en/hub/Hub2154.png)  

**In Azure AD Portal**  

21. Back in Azure, select ***Certificates & secrets*** in the left side menu, then, in the ***Client secrets*** tab, click on ***New client secret*** .  
![Certificates & secrets – Client secrets – New client secret](/img/en/hub/Hub2151.png)  
1. In the ***Add a client secret*** window, enter a ***Description*** (for example, the name of your Enterprise app) and select an expiration date for this client secret, as per your best internal security practices. 
{% snippet icon.badgeCaution %} 
Note that when the client secret expires, no one will be able to connect to the associated {{ en.PHUB }} . You will then need to create a new client secret. We recommend that you set yourself a task reminder before the expiration date. 
{% endsnippet %}
 
![Add a client secret](/img/en/hub/Hub2152.png)  

23. Click ***Add*** . 
1. Copy the ***Value*** of this new client secret by clicking on the ***Copy to clipboard*** icon next to it.  
![Copy the client secret value](/img/en/hub/Hub2153.png)  

**In Devolutions {{ en.PHUB }} Business**  

25. Back in the ***Configure Single Sign-On (SSO)*** window, paste the client secret ***Value*** from the last step in the ***Client secret*** field.  
![Client secret](/img/en/hub/Hub2155.png)  

**In Azure AD Portal**  

26. Back in Azure, select ***Overview*** in the left side menu, then click on the ***Endpoints*** tab.  
![Overview – Endpoints](/img/en/hub/Hub2158.png)  
1. In the ***Endpoints*** window, copy the ***OpenID Connect metadata document*** URL by clicking on the ***Copy to clipboard*** icon next to it.  
![Copy the OpenID Connect metadata document URL](/img/en/hub/Hub2160.png)  

**In Devolutions {{ en.PHUB }} Business**  

28. Back in the ***Configure Single Sign-On (SSO)*** window, paste the URL from the last step in the ***Discovery URL*** field.  
![Discovery URL](/img/en/hub/Hub2156.png)  
1. In the ***User Scopes*** field, enter “User.Read“.  
![User Scopes](/img/en/hub/Hub2157.png) 
1. Test the connection to make sure this configuration is done correctly. If it is, your account will connect with Azure AD. 
1. Click ***Save*** at the bottom.  

### Provisioning Configuration 

To synchronize your users and user groups from your providers to the Devolutions {{ en.PHUB }} Business, follow the next steps.  

**In Devolutions {{ en.PHUB }} Business**  

1. Go to ***Administration – Authentication*** . 
1. In ***Provisioning*** , click on ***Generate SCIM Token*** .  
![Administration – Authentication – Provisioning – Generate SCIM Token](/img/en/hub/Hub2190.png) 
{% snippet icon.badgeCaution %} 
Note that this ***SCIM Token*** will expire in 365 days following its generation. When it expires, the provisioning will stop working. You will then need to regenerate a new ***SCIM Token*** . We recommend that you set yourself a task reminder before the expiration date. 
{% endsnippet %}
 
3. In the ***Generate a SCIM Secret Token*** window, copy the ***Tenant URL*** by clicking on the ***Copy to Clipboard*** icon next to it.  
![Copy the Tenant URL](/img/en/hub/Hub2193.png)  

**In Azure AD Portal**  

4. In the management of your Enterprise app, go to ***Provisioning*** and click on ***Get started*** .  
![Provisioning – Get started](/img/en/hub/Hub2163.png)  
1. In the ***Provisioning Mode*** drop-down list, select ***Automatic*** . Then, paste the ***Tenant URL*** from [step 3]( in the ***Secret Token*** field.  
![Provisioning Mode and Tenant URL](/img/en/hub/Hub2166.png)  

**In Devolutions {{ en.PHUB }} Business**  

6. Copy the ***Secret Token*** by clicking on the ***Copy to Clipboard*** icon next to it.  
![Copy the Secret Token](/img/en/hub/Hub2192.png)  

**In Azure AD Portal**  

7. Paste the token from the previous step in the ***Secret Token*** field.  
![Secret Token](/img/en/hub/Hub2164.png)  
1. Test the connection to make sure that it works, then click ***Save*** .  

### Add a user/group 

In this section, you will add your users and user groups to your Enterprise app.  

{% snippet icon.badgeInfo %} 
You need to have an Azure Enterprise license to be able to synchronize user groups. 
{% endsnippet %}
 
{% snippet icon.badgeCaution %} 
Nested groups are not supported, meaning that Azure provisioning will not synchronize the users member of the nested group. 
{% endsnippet %}
 
**In Azure AD Portal**  

1. Select ***Users and groups*** in the left side menu, then click ***Add user/group*** .  
![Users and groups – Add user/group](/img/en/hub/Hub2167.png)  
1. Under ***Add Assignment*** , click on ***None selected*** .  
![Add Assignment](/img/en/hub/Hub2168.png)  
1. Manually search for users and groups or use the ***Search*** bar. Click on ***Select*** when you have finished your selection.  
![Users and groups selection](/img/en/hub/Hub2169.png)  
1. Click ***Assign*** when your selection is complete.  
![Assign users and groups](/img/en/hub/Hub2170.png)  
1. Select ***Provisioning*** in the left side menu, then click ***Start provisioning*** .  
![Start provisioning](/img/en/hub/Hub2171.png)  

### Synchronization between Azure and {{ en.PHUB }} 

**In Devolutions {{ en.PHUB }} Business**  

1. Go to ***Administration – Authentication*** . 
1. In ***Provisioning*** , ***Enable the synchronization*** .  
![Administration – Authentication – Provisioning – Enable the synchronization](/img/en/hub/Hub2191.png)  

Azure 's provisioning frequency is at most 40 minutes. The user groups, including their members, will synchronize within this Azure provisioning time. We recommend that you to verify the first provisioning results.  

In ***Administration – User Groups*** , the Azure user groups will be added. They are recognizable by the ***Is sync*** group icon next to the group name.  
![Synced User Groups](/img/en/hub/Hub2182.png)  

In ***Administration – Users*** , all users in the Azure user group who are already part of your Devolutions {{ en.PHUB }} will be flagged as synced with the ***Is sync*** icon next to their name. All new users part of the synchronized Azure user group who are not part of the Devolutions {{ en.PHUB }} will be suggested as [new invitations](/hub/getting-started/get-started-sso-hub-business/invite-users-SSO-hub-business/) in ***Invitations required*** .  
![Invitations required & Synced Users](/img/en/hub/Hub2175.png)  

{% snippet icon.badgeNotice %} 
All users who already had a {{ en.DA }} will see both login options: the {{ en.DA }} method and the Microsoft method. 
{% endsnippet %}
 
![Sign in with your Devolutions Account or with Microsoft](/img/en/hub/Hub4139.png)  
