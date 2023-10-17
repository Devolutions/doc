---
eleventyComputed:
  title: Privileged accounts
  order: 40
  description: "{{ en.DHUB }}'s privileged access management module allows privileged account passwords to be automatically reset once access has expired. You can also manually trigger the password reset via the menu."
---
{{ en.DHUB }}'s privileged access management module allows privileged account passwords to be automatically reset once access has expired. You can also manually trigger the password reset via the menu. 

Privileged accounts are added and managed in the PAM {{ en.VLT }}. The accounts can be organized within folders or directly saved in the root.

![Privileged account in PAM {{ en.VLT }}](https://webdevolutions.azureedge.net/docs/en/hub/Hub2293.png)

{% snippet icon.badgeHelp %}
You can use the ***Check-out*** feature to request temporary access to a privileged account entry in a PAM {{ en.VLT }}. The approver must then approve or deny the request. To learn more about this process, see [Request access to a privileged account](/hub/privileged-access-management/privileged-accounts/request-access-privileged-account/) or [Approve access to a privileged account](/hub/privileged-access-management/privileged-accounts/approve-access-privileged-account/).
{% endsnippet %}  

## Create a privileged account entry

The only entry type that can be added in your PAM {{ en.VLT }} (except for folders) are ***Azure AD Users***.

![Privileged account in PAM {{ en.VLT }}](https://webdevolutions.azureedge.net/docs/en/hub/Hub2294.png)

When creating your privileged account, you need to provide some information. See the table below.

### General information

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
Name of the privileged account entry.
		</td>
	</tr>
	<tr>
		<td>
Folder
		</td>
		<td>
Location of the entry inside the PAM {{ en.VLT }}. Leave it empty to create the entry at the root.
		</td>
	</tr>
</table>

### Connection information

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
Provider 
		</td>
		<td>
Name of the PAM provider.
		</td>
	</tr>
	<tr>
		<td>
Username
		</td>
		<td>
Username of the privileged account. The username must match the real username used in the provider.
		</td>
	</tr>
	<tr>
		<td>
Current password
		</td>
		<td>

If you know the password, enter it here. If not, you can leave this field blank and reset the password on the entry after its creation.
Editing your password in the ***Edit Credential*** window only changes your password in the hub database. The password will not be updated on the domain. If you would like to change your password everywhere, click ***Reset password*** on the credential entry.
		</td>
	</tr>
</table>

### Password settings

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
Password template mode
		</td>
		<td>

Select the password template mode to use between:
* ***Inherited***: Inherits the password template specified in the parent folder.
* ***Custom***: Select a custom password template previously created.
* ***From Provider***: Uses the provider's password template.
		</td>
	</tr>
</table>

## Verifying your configuration

To make sure that your configuration and the {{ en.DHUBS }} installation work properly, try resetting your password after having created the entry. To do so, select the entry in the ***{{ en.NPANE }}***. Then, click the ellipsis button at the top right and select ***Reset Password***.

![Reset Password](https://webdevolutions.azureedge.net/docs/en/hub/Hub2295.png)

In the entry logs, you can see the different activities from the request to the password reset.

![Entry logs](https://webdevolutions.azureedge.net/docs/en/hub/Hub2300.png)

To see the password reset status, go to the [***Tasks***](/hub/privileged-access-management/privileged-access-reports/tasks/) report in ***Reports – Privileged Access – Tasks***. If it worked, you will see that the task status is set to ***Completed***.

![Completed password reset task](https://webdevolutions.azureedge.net/docs/en/hub/Hub2301.png)
