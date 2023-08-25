---
eleventyComputed:
  title: Conditional Access Policies
  description: Conditional access policies generally consider various factors to assess whether to allow or deny access to a specific resource or service.

---
***Conditional Access Policies*** generally consider various factors to assess whether to allow or deny access to a specific resource or service. By implementing them, organizations can effectively enforce security measures that align with their unique needs and requirements.

1. To view {{ en.DVLS }}'s ***Conditional Access Policies*** in the web interface, go to ***Administration – Configuration– Server Settings***.

![Administration – Configuration – Server Settings](https://webdevolutions.blob.core.windows.net/docs/en/server/ServerOp6004.png)  

2. Click on ***Conditional Access Policies*** under ***Security***.

![Security – Conditional Access Policies](https://webdevolutions.blob.core.windows.net/docs/en/server/ServerOp6005.png)  

## Configure Login from the web interface

1. Select ***Login*** in the ***Target*** drop-down menu and click on the plus button (***Add***). 

![Target drop-down menu and plus button](https://webdevolutions.blob.core.windows.net/docs/en/server/ServerOp6023.png) 

2. Choose a policy name and action from the ***Action when matched*** and ***Action when not matched*** menus.  

  * ***Continue***: Go to the next policy. Default action is applied if it is the last policy.
  * ***Access Denied***: The user access will be denied. Users will receive an error and will not be abled to log in.
  * ***Access Allowed***: The user access will be allowed. A 2FA could be needed, depending on the configuration. 

![Action when matched and Action when not matched menus](https://webdevolutions.blob.core.windows.net/docs/en/server/ServerOp6019.png) 

3. Click on the plus button (***Add***) in the ***Rules*** section.

![Rules section](https://webdevolutions.blob.core.windows.net/docs/en/server/ServerOp6015.png) 

4. Choose from the drop-down menu whether the rule applies to:
  * ***Authentication type***
  * ***Time***
  * ***IP Addresses***
  * ***Geo IP***
  * ***Users***
  * ***Users Groups***
  * ***Administrator***

![Rules section](https://webdevolutions.blob.core.windows.net/docs/en/server/ServerOp6006.png)    

5. Click ***Add*** to close the window.
  
6. Select ***All*** or ***Any*** under ***Rules – Rule validation***.

![Rules – Rule validation](https://webdevolutions.blob.core.windows.net/docs/en/server/ServerOp6017.png)

***All:*** All rules must be followed to continue.  
***Any:*** The user can log in once a rule has been followed.  

7. Click ***Is Active*** to enable or disable the policy.

![Is Active](https://webdevolutions.blob.core.windows.net/docs/en/server/ServerOp6020.png)  

8. Click ***Add*** to save the policy. 
## Configure Multi-Factor Authentication from the web interface

Select ***MFA*** in the ***Target*** drop-down menu.

1. Choose a ***Default action when no policy matches*** between the following:
	* ***MFA Required***: MFA is enforced for all users. A default MFA type is set for all users.
	* ***MFA Skipped***: MFA is not enforced.
	* ***MFA Optional per User***: MFA is enforced on an individual basis. The administrator chooses who uses MFA and what product or technology they use. Choose this option if not all users are set up for multi-factor authentication.

{% snippet icon.badgeInfo %} 
When MFA usage is set to ***MFA Optional per User***, the MFA method must be configured in ***Administration – Users*** for each user. Edit or add a user, then go to the ***Multi-factor*** section to configure it. You can also set an MFA type on the user if they are using a product different than the default method. See [Multi-factor (Edit User)](/server/web-interface/administration/security-management/users/edit-user-two-factor/).
{% endsnippet %} 

![Default action when no policy matches](https://webdevolutions.blob.core.windows.net/docs/en/server/ServerOp6003.png)

2. Back to the ***Multi-factor*** section, choose who to send the reset email to between ***Administrator(s)*** or a ***Specific email*** (in which case you must specify the email in the ***Specific email*** field).  
![Send reset email to & Specific email](https://webdevolutions.blob.core.windows.net/docs/en/server/ServerOp2064.png) 
1. Check the boxes next to the supported authenticators that you want to enable. You can choose as many as necessary.

{% snippet icon.badgeInfo %} 
The currently supported multi-factor authenticators are Authenticator (TOTP), Yubikey, Email, [SMS](/server/web-interface/administration/configuration/server-settings/security/two-factor/sms/), Duo, and Radius. You must configure them separately using the instructions next to them. Emails need to be configured beforehand in {{ en.DVLS }} for the ***Email*** and ***SMS*** (without Twilio) MFAs.
{% endsnippet %}  

![Supported MFA](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2065.png) 

4. Select the ***Default*** MFA between the ones you enabled in the previous step.  
1. Select alternate ways to log in between ***Email*** and [***Backup codes***](/server/web-interface/administration/configuration/server-settings/security/two-factor/backup-codes/). These options will be offered when users do not have access to their usual method.  
![Default and Alternate MFA](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2066.png)
1. Click ***Save***.

1. To add a rule to the ***Conditional Access Policies***, go back to ***Administration – Configuration– Server Settings – Security – Conditional Access Policies***.

1. Select ***MFA*** in the ***Target*** drop-down menu and click on the plus button (***Add***).

![Target drop-down menu and plus button](https://webdevolutions.blob.core.windows.net/docs/en/server/ServerOp6025.png) 

9. Choose a policy name and action from the ***Action when matched*** and ***Action when not matched*** menus.  

  * ***Continue***: Go to the next policy. Default action is applied if it is the last policy.
  * ***MFA Required***: MFA is enforced for all users. A default MFA type is set for all users.
  * ***MFA Skipped***: MFA is not enforced.
  * ***MFA Optional per User***: MFA is enforced on an individual basis. The administrator chooses who uses MFA and what product or technology they use. Choose this option if not all users are set up for multi-factor authentication.

  ![Action when matched and Action when not matched menus](https://webdevolutions.blob.core.windows.net/docs/en/server/ServerOp6026.png) 

10. Click on the plus button (***Add***) in the ***Rules*** section.

![Rules section](https://webdevolutions.blob.core.windows.net/docs/en/server/ServerOp6015.png) 

11. Choose from the drop-down menu whether the rule applies to:
  * ***Authentication type***
  * ***Time***
  * ***IP Addresses***
  * ***Geo IP***
  * ***Users***
  * ***Users Groups***
  * ***Administrator***

![Rules section](https://webdevolutions.blob.core.windows.net/docs/en/server/ServerOp6006.png)    

12. Click ***Add*** to close the window.
  
1. Select ***All*** or ***Any*** under ***Rules – Rule validation***.

![Rules – Rule validation](https://webdevolutions.blob.core.windows.net/docs/en/server/ServerOp6017.png)

***All:*** All rules must be followed to continue.  
***Any:*** The user can log in once a rule has been followed.  

14. Click ***Is Active*** to enable or disable the policy.

![Is Active](https://webdevolutions.blob.core.windows.net/docs/en/server/ServerOp6020.png)  

15. Click ***Add*** to save the policy. 