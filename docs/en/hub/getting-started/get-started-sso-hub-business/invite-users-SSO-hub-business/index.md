---
eleventyComputed:
  title: Invite users for SSO in {{ en.DHUBB }}
  description: Once SSO is configured and enabled, invite your users on your hub following these steps.
  keywords:
  - SSO
  - invite users
  - organization
  - authentication
---
Once SSO is [configured and enabled](/hub/getting-started/get-started-sso-hub-business/configure-sso-authentication-microsoft-azure/), you can use this specific invite for all your users.  

This method will send a preformatted email to all the recipients. It will provide your {{ en.DHUBB }} URL with an invitation ID and a key for them to use.  

{% snippet icon.badgeCaution %} 
The invitation ID and key are for pre-approving access to {{ en.DHUBB }}. They expire 7 days from the day they are sent. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
As part of the creation process, a {{ en.DA }} will be created since it is required to access {{ en.DHUBB }}, but it will not be necessary to set a password since your users will authenticate via Azure AD. 
{% endsnippet %}
 
## Invite Organization Users 

1. Go to ***Administration – Users***. If you have new users who are synced from your provider, they will be ready to be invited. You can see their count in the ***Invitation required*** widget. Click on this widget.  
![Invitation required](https://webdevolutions.azureedge.net/docs/en/hub/Hub4141.png) 
1. ***Step 1 - From Organization***: Select from the users that are suggested, if applicable, or invite all members of a sync group from the ***Groups*** tab. Click ***Next***.  
![Step 1 - From Organization](https://webdevolutions.azureedge.net/docs/en/hub/Hub2176.png) 
1. ***Step 2 - By Emails***: It is possible to invite other users that are not synced, but who belong to the same provider. Enter either an individual email or a group email, then click ***Next***.  
{% snippet icon.badgeInfo %} 
This is only possible if the enterprise application in Azure has the ***Assignment required*** set to ***No***. This setting can be found in the ***Properties*** of the enterprise application.
{% endsnippet %}  

![Step 2 - By Emails](https://webdevolutions.azureedge.net/docs/en/hub/Hub2177.png)  

4. ***Step 3 - Options***: Select ***Options*** for users, then click ***Next***.  
![Step 3 - Options](https://webdevolutions.azureedge.net/docs/en/hub/Hub2178.png)  
1. ***Step 4 - User groups***: Synchronized users do not need to be assigned to the synced ***User Groups***. They will be added automatically as they log in. If you have custom ***User Groups***, you can assign them users.  
{% snippet icon.badgeInfo %}  
Custom ***User groups*** need to be defined beforehand in {{ en.DHUBB }}. For more information, see [User Groups](/hub/web-interface/hub-overview/administration/management/users/). 
{% endsnippet %}
 
![Step 4 - User groups](https://webdevolutions.azureedge.net/docs/en/hub/Hub2179.png) 

6. Click ***Send invite*** at the bottom.  

{{ en.DHUBB }} will send an email with essential information to the recipients, including the URL of your {{ en.DHUBB }}, the invitation ID, and the key.  

{% snippet icon.badgeCaution %} 
Users will be required to complete a {{ en.DA }} setup. See the [End User Invitation Experience for SSO in {{ en.DHUBB }}](/hub/getting-started/get-started-sso-hub-business/invite-users-SSO-hub-business/end-user-experience/) topic. 
{% endsnippet %}  
 
{% snippet icon.badgeInfo %} 
The recipient will be part of your hub only when they connect to it for the first time. Only then will you be able to see them in ***Administration – Users***. 
{% endsnippet %}  
 
{% snippet icon.badgeInfo %} 
Any user that tries to access your {{ en.DHUBB }} with its URL for the first time without receiving an invitation will trigger a request approval, only if they are in the same identity provider.  

An email will then be sent to all the administrators. It can be either approved or denied in ***Administration – Users***. 
{% endsnippet %}  
 
## Invite Users That Are Not Part of Your Authentication Provider

It is possible to add users to your {{ en.DHUBB }} that are outside of your authentication provider.  

{% snippet icon.badgeInfo %} 
This option is only possible if you do not set a ***Force SSO on all users***, since those users are not part of your authentication provider.
Follow the steps from the [Create and Invite Users](/hub/web-interface/hub-overview/administration/management/users/create-invite-users/index) topic.
{% endsnippet %}
