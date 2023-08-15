---
title: Subscriptions
keywords:
- Roles
---
The ***Subscriptions*** are intended to send email according to activities on {{ en.DVLS }}. It could be activities on entries, user accounts, system settings, etc. 

![Notifications - Subscriptions](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8073.png)  

![Subscription properties dialog](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8158.png)  

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
Name 
		</td>
		<td>
Name of the Subscription. 
		</td>
	</tr>
	<tr>
		<td>
Subscriber 
		</td>
		<td>
One subscriber that will receive the notifications from the current subscription. A subscriber or a subscriber group can be selected. 
		</td>
	</tr>
	<tr>
		<td>
Subscription Category 
		</td>
		<td>
Category of the subscription. This can be one of the following possibilities.  

* Entry 
* User 
* Vault 
* User Groups 
* PAM Privileged Account 
* PAM Provider 
* PAM Checkout 
* PAM Team Folder 
* System Settings 
* Administration Log 
* Data Source Log 
* {{ en.DGW }} 
* PAM Checkout Policy 
* PAM OTP Template 
		</td>
	</tr>
	<tr>
		<td>
Filters 
		</td>
		<td>
The filters are tied to the subscription category and each of them has their own filters. You can add a filter with the Add Filter button. Be aware that the filters are cumulative. 
		</td>
	</tr>
</table>

