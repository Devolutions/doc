---
eleventyComputed:
  title: Multi-factor
  description: Configure multi-factor authentication in {{ en.DVLS }} to add an extra layer of security to the application.
---
{% snippet icon.badgeInfo %} 
This feature is only available for {{ en.DVLS }} versions 2022.1 or later.
{% endsnippet %}
 
Configure multi-factor authentication (MFA) in {{ en.DVLS }} to add an extra layer of security to the application.

{{ en.DVLS }} supports multiple types of MFA. You can configure a default MFA type for your entire organization or configure MFA user by user. When MFA is configured, users log in with their username/password as well as an MFA product.

## Configure Multi-Factor Authentication From the Web Interface  

1. To access the MFA configuration, navigate to ***Administration – Server Settings – Multi-factor***.
1. The first option is to choose how you want to enforce multi-factor authentication. To do so, click on the information icon next to ***MFA usage*** to go to the ***Conditional Access Policies*** section.  
![MFA usage](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2061.png)  
1. Select a ***Target*** (***Login*** or ***MFA***).  
![Target](https://webdevolutions.blob.core.windows.net/docs/en/server/ServerOp6001.png) 
1. If you chose the ***MFA*** in the last step, select a ***Default action when no policy matches*** between the following:
	* ***MFA Required***: MFA is enforced for all users. A default MFA type is set for all users.
	* ***MFA Skipped***: MFA is not enforced.
	* ***MFA Optional per User***: MFA is enforced on an individual basis. The administrator chooses who uses MFA and what product or technology they use. Choose this option if not all users are set up for multi-factor authentication.

{% snippet icon.badgeInfo %} 
When MFA usage is set to ***MFA Optional per User***, the MFA method must be configured in ***Administration – Users*** for each user. Edit or add a user, then go to the ***Multi-factor*** section to configure it. You can also set an MFA type on the user if they are using a product different than the default method. See [Multi-factor (Edit User)](/server/web-interface/administration/security-management/users/edit-user-two-factor/).
{% endsnippet %}  

![Default action when no policy matches](https://webdevolutions.blob.core.windows.net/docs/en/server/ServerOp6003.png) 

5. Back to the ***Multi-factor*** section, choose who to send the reset email to between ***Administrator(s)*** or a ***Specific email*** (in which case you must specify the email in the ***Specific email*** field).  
![Send reset email to & Specific email](https://webdevolutions.blob.core.windows.net/docs/en/server/ServerOp2064.png) 
1. Check the boxes next to the supported authenticators that you want to enable. You can choose as many as necessary.

{% snippet icon.badgeInfo %} 
The currently supported multi-factor authenticators are Authenticator (TOTP), Yubikey, Email, [SMS](/server/web-interface/administration/configuration/server-settings/security/two-factor/sms/), Duo, and Radius. You must configure them separately using the instructions next to them. Emails need to be configured beforehand in {{ en.DVLS }} for the ***Email*** and ***SMS*** (without Twilio) MFAs.
{% endsnippet %}  

![Supported MFA](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2065.png) 

7. Select the ***Default*** MFA between the ones you enabled in the previous step.  
1. Select alternate ways to log in between ***Email*** and [***Backup codes***](/server/web-interface/administration/configuration/server-settings/security/two-factor/backup-codes/). These options will be offered when users do not have access to their usual method.  
![Default and Alternate MFA](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2066.png)
1. Click ***Save***.
