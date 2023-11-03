---
eleventyComputed:
  title: Just-in-time (JIT) elevation
---
{% snippet icon.badgeCaution %}
The ***Just-in-time elevation*** feature is only available for Domain accounts.
{% endsnippet %}

Just-in-time elevation is a security concept that pertains to providing temporary access to resources or services, ensuring that permissions are granted only for the specific time they are required and not a moment more. The Just-in-time feature in {{ en.DVLS }} grant a temporary membership to a selected Active Directory group from a specified groups list.  

![Just-in-time elevation settings](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8178.png)  

### Just-in-time (JIT) elevation 

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
Available groups for temporary elevation 
		</td>
		<td>
Select the Active Directory groups of which a privileged account will be elevated to member status. 
		</td>
	</tr>
	<tr>
		<td>
Temporary group name prefix 
		</td>
		<td>
Prefix of the Active Directory group name to be created, which will be a member of the selected group and in which the privileged account will be a member. 
		</td>
	</tr>
    <tr>
		<td>
Temporary group creation location 
		</td>
		<td>
Location (OU) where the temporary Active Directory group will exist in the Active Directory structure. 
		</td>
	</tr>
</table>

### Example

The domain provider Just-in-time Elevation configuration will allow privileged accounts to request elevation to being member of the following Active Directory Groups: {{ en.RDM }} Admins; {{ en.RDM }} Service Desk or {{ en.RDM }} Admins - Universal. The temporary group name will start with RDM_JIT and will be created in the **Domain Groups\Vaults\Internal** OU.

![Just-in-time Elevation settings](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8179.png) 

The _backupoperator15 privileged account checkout process is requesting a 2 hours elevation to be part of the {{ en.RDM }} Admins Active Directory group.

![Just-in-time Elevation settings](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8180.png) 