---
title: Invite Users for SSO in Hub Business
---
Once SSO is [configured](/hub/getting-started/get-started-sso-hub-business/configure-sso-authentication-microsoft-azure/) , you can use this specific invite for all your users.  

This method will send a preformatted email to all the recipients. It will provide your {{ en.PHUB }} Business URL with an invitation ID and a key for them to use.  

{% snippet icon.badgeCaution %} 
The invitation ID and key are for pre-approving access to {{ en.PHUB }} Business. They expire 7 days from the day they are sent. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
As part of the creation process, a {{ en.DA }} will be created. It is required to access {{ en.PHUB }} Business, but it will not be necessary to set a password since your users will authenticate via Azure AD. 
{% endsnippet %}
 
### Invite Organization Users 

If you have new users synced from your provider, they will be ready to be invited. You can see their number in the ***Invitations required*** card.  

1. In ***Administration – Users*** , click ***Invite Organization Users*** .  
![Invite Organization Users](/img/en/hub/Hub4141.png) 
1. Select from the users that are suggested, if applicable, then click ***Next*** .  
![From Organization](/img/en/hub/Hub2176.png) 
1. It is possible to invite other users that are not synced. Enter either an individual email or a group email, then click ***Next*** . 
{% snippet icon.badgeInfo %} 
Ensure that you do not set a Force login with SSO since those users are not part of your authentication provider sync. 
{% endsnippet %}
 
![By Emails](/img/en/hub/Hub2177.png) 

4. Select ***Options*** for users, then click ***Next*** .  
![Options](/img/en/hub/Hub2178.png) 
1. Synchronized users do not need to be assigned to the synced ***User Groups*** : they will be added automatically as they log in. If you have custom ***User Groups*** , you can assign them users. When they join, they will already be assigned to these groups. 
{% snippet icon.badgeInfo %} 
Custom ***User groups*** need to be defined beforehand in {{ en.PHUB }} Business. For more information, see [User Groups](/hub/web-interface/hub-overview/administration/management/users/) . 
{% endsnippet %}
 
![User Groups](/img/en/hub/Hub2179.png) 

6. Click ***Send invite*** .  

{{ en.PHUB }} Business will send an email with essential information to the recipients: the link to access the {{ en.PHUB }} Business, the invitation ID, and the key.  

{% snippet icon.badgeCaution %} 
Users will be required to complete a [{{ en.DA }} setup](/hub/getting-started/get-started-sso-hub-business/invite-users-SSO-hub-business/end-user-experience/) . 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
The recipient will be part of your {{ en.PHUB }} only when they connect to it for the first time. Only then will you be able to see them in ***Administration – Users*** . 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Any user that tries to access your {{ en.PHUB }} Business with its URL for the first time without receiving an invitation will trigger a request approval.  

An email will then be sent to all the administrators. It can be either approved or denied in ***Administration – Users*** . 
{% endsnippet %}
 


