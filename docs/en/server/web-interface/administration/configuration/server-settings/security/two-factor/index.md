---
title: Two-Factor
---
{% snippet icon.badgeInfo %} 
This feature is only available for {{ en.RDMS }} version 2022 or higher. 
{% endsnippet %}
 
Configure Two-Factor Authentication in {{ en.RDMS }} to add an extra layer of security to the application.  

{{ en.RDMS }} supports 9 types of 2FA. You can configure a default 2FA type for your entire organization or configure 2FA by user. When 2FA is configured, users log in with their username/password as well as a 2FA product.  

### How to Configure 2FA from the Web Interface 

{% youtube 'qb7umoKbUdg' %}  

## Settings 
1. To access the 2FA configuration, go to ***Administration – {{ en.RDMS }} Settings – Two-Factor*** . 
1. Choose how you want to enforce two-factor authentication in ***2FA usage*** . 

<table>
	<tr>
		<th>
Option 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
None 
		</td>
		<td>
2FA is not enforced. 
		</td>
	</tr>
	<tr>
		<td>
Optional per user 
		</td>
		<td>
2FA is enforced on an individual basis. The administrator chooses who uses 2FA and what product or technology they use.<br>

Choose this option if not all users are set up for two-factor authentication. 
		</td>
	</tr>
	<tr>
		<td>
Required 
		</td>
		<td>
2FA is enforced for all users. A default 2FA type is set for all users. 
		</td>
	</tr>
</table>

3. Select who receives 2FA reset requests from users. You can choose to send the email to all {{ en.RDMS }}   administrators or a specific email . 
1. If you chose to send reset requests to an email address instead of the {{ en.RDMS }} administrators, enter the email address in specific email . 
1. Select the 2FA types users can authenticate with. Choose as many as necessary. 
1. If you chose 2FA usage as Required in step 3 , choose the Default 2FA type. 
1. Select alternate ways to log in. These options will be offered when users do not have access to the usual method. 

![Administration - Devolutions Server Settings - Two-Factor](/img/en/server/clip10390.png) 

8. When 2FA usage is set to Optional per user , the 2FA method must be configured in Administration – Users – Two Factor for each user. You can also set a 2FA type on the user if they are using a product different than the default method. See [Edit Users](/server/web-interface/administration/security-management/users/edit-user-two-factor/) for more information. 

![Edit User - Two Factor](/img/en/server/ServerOp7014.png) 

