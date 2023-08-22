---
eleventyComputed:
  title: Access Denied Errors
  description: In {{ en.DHUB }}, many situations can trigger an ***Access denied*** error. Here are the most common messages and their solutions.
  keywords:
  - Access Denied
  - Error
---
In {{ en.DHUB }}, many situations can trigger an ***Access denied*** error. Here are the most common messages and their solutions.

## List of Errors

### Activate your Two-Step Verification on your account.
![Activate your Two-Step Verification on your account.](https://webdevolutions.azureedge.net/docs/en/kb/KB4770.png)

<table>
		<td>
Description
		</td>
		<td>
The two-factor authentication login was enforced on the {{ en.DHUBB }}.
		</td>
	</tr>
	<tr>
		<td>
Solution
		</td>
		<td>
All users that connect to this {{ en.DHUBB }} need to have a two-factor authentication configured on their {{ en.DA }}. Please follow the displayed instructions.
		</td>
	</tr>
</table>

### Enter your emergency reset code.
![Enter your emergency reset code.](https://webdevolutions.azureedge.net/docs/en/kb/KB4771.png)

<table>
		<td>
Description
		</td>
		<td>
This user did a Forgot password on their {{ en.DA }} for their {{ en.DHUBP }}.
		</td>
	</tr>
	<tr>
		<td>
Solution
		</td>
		<td>
Enter your Emergency reset code.<br>

The Emergency reset kit was provided at the first login after the initial creation of the {{ en.DHUBP }}. It is a mandatory step in the creation process.<br>

You can search for a PDF file titled "{{ en.DHUBP }} Emergency Kit".<br>

There is no way to recover it if the Emergency reset kit cannot be located.<br>
		</td>
	</tr>
</table>

### Please contact your administrator to be allowed to use {{ en.DWL }}.
![Please contact your administrator to be allowed to use {{ en.DWL }}.](https://webdevolutions.azureedge.net/docs/en/kb/KB2146.png)

<table>
		<td>
Description
		</td>
		<td>
This user is not allowed to access this {{ en.DHUBB }} via the {{ en.DWL }} {{ en.CTOOL }}.
		</td>
	</tr>
	<tr>
		<td>
Solution
		</td>
		<td>
The user needs to contact their {{ en.DHUBB }} administrator or any user that has the permission to manage users to enable their access.
		</td>
	</tr>
</table>

### Please contact your administrator to enable your account.
![Please contact your administrator to enable your account.](https://webdevolutions.azureedge.net/docs/en/kb/KB4767.png)

<table>
		<td>
Description
		</td>
		<td>
This user was disabled in {{ en.DHUBB }}.
		</td>
	</tr>
	<tr>
		<td>
Solution
		</td>
		<td>
The user needs to contact their {{ en.DHUBB }} administrator or any user that has the permission to manage users to enable their access.
		</td>
	</tr>
</table>

### Please contact your administrator to request an invitation.
![Please contact your administrator to request an invitation.](https://webdevolutions.azureedge.net/docs/en/kb/KB4763.png)

<table>
		<td>
Description
		</td>
		<td>
This user account does not exist in the {{ en.DHUBB }}.
		</td>
	</tr>
	<tr>
		<td>
Solution
		</td>
		<td>
An administrator or any user that has the permission to manage users needs to invite the user with their {{ en.DA }} in this {{ en.DHUBB }}.
		</td>
	</tr>
</table>

### Please contact your administrator to request an invitation OR Enter your emergency reset code.
![Please contact your administrator to request an invitation OR Enter your emergency reset code.](https://webdevolutions.azureedge.net/docs/en/kb/KB4765.png)

<table>
	<tr>
		<td>
Description
		</td>
		<td>
This user did a Forgot password on his {{ en.DA }} and is the owner of the {{ en.DHUBB }}.
		</td>
	</tr>
	<tr>
		<td>
Solution
		</td>
		<td>
Is there another administrator or any user that has the permission to manage users?<br>

* **Yes**: Ask the other administrator or user with enough rights to re-invite the owner.<br>
* **No**: The owner will need to enter their Emergency reset code.<br>

The Emergency reset kit was provided at the first login after the initial creation of the {{ en.DHUBB }}. It is a mandatory step in the creation process.<br>

You can search for a PDF file titled "{{ en.DHUB }} Emergency Kit huburlxxxx.devolutions.app".<br>
* If you are a {{ en.DHUBB }} owner and cannot locate your Emergency reset kit PDF file and do not have another administrator or any user that has the permission to manage users, please contact our [support team](mailto:service@devolutions.net) by email.<br>
		</td>
	</tr>
</table>

### We detected a forgot password. In order to regain access to this Hub, please contact your administrator to request a new invitation.
![We detected a forgot password. In order to regain access to this Hub, please contact your administrator to request a new invitation.](https://webdevolutions.azureedge.net/docs/en/kb/KB4764.png)

<table>
		<td>
Description
		</td>
		<td>
This user did a Forgot password on their {{ en.DA }} and is not the owner. This action cuts the link with the {{ en.DHUBB }}.<br>

Note: If the {{ en.DA }} has more than one {{ en.HUB }}, it will cut the link to all of them.
		</td>
	</tr>
	<tr>
		<td>
Solution
		</td>
		<td>
An administrator or any user that has the permission to manage users needs to re-invite this user. This invitation will establish the link with the {{ en.DHUBB }}.
		</td>
	</tr>
</table>

### We detected a forgot password or a lost your phone (unpaired). In order to regain access to this Hub, please contact your administrator to request a new invitation.
![We detected a forgot password or a lost your phone (unpaired). In order to regain access to this Hub, please contact your administrator to request a new invitation.](https://webdevolutions.azureedge.net/docs/en/kb/KB2219.png)

<table>
		<td>
Description
		</td>
		<td>
This user's phone pairing is broken for the private key push notification storage method.<br>
		</td>
	</tr>
	<tr>
		<td>
Solution
		</td>
		<td>
<ol>
  <li>Go to <a href="https://portal.devolutions.com/security/private-key" target="_blank">Private Key Storage Methods</a> in your {{ en.DPORTAL }}.</li>
  <li>Delete the push entry related to the account on your phone.</li>
  <li>Remove the QR code or Password linked to the account, if any.</li>
  <li>Click on the <b><i>Forgot your phone</i></b> button in the <b><i>Store on a mobile device</i></b> method.</li>
  <li>Follow the push notification configuration process.</li>
  <li>Ask an administrator or any user that has the permission to manage users for a new invitation to the {{ en.DHUBB }}.</li>
</ol>
		</td>
	</tr>
</table>

### {{ en.DWS }} is disabled for this user on this {{ en.HUB }}.
![{{ en.DWS }} is disabled for this user on this {{ en.HUB }}.](https://webdevolutions.azureedge.net/docs/en/kb/KB2209.png)

<table>
		<td>
Description
		</td>
		<td>
This user is not allowed to access this {{ en.DHUBB }} via the {{ en.DWS }} {{ en.CTOOL }}.
		</td>
	</tr>
	<tr>
		<td>
Solution
		</td>
		<td>
The user needs to contact their {{ en.DHUBB }} administrator or any user that has the permission to manage users to enable their access.
		</td>
	</tr>
</table>

### Your IP address is not allowed.
![Your IP address is not allowed.](https://webdevolutions.azureedge.net/docs/en/kb/KB4768.png)

<table>
		<td>
Description
		</td>
		<td>
The IP address of this user is not in the IP Allowlist.
		</td>
	</tr>
	<tr>
		<td>
Solution
		</td>
		<td>
The user needs to contact their {{ en.DHUBB }} administrator.
		</td>
	</tr>
</table>

### Your license is invalid; please contact your administrator. If you believe this is an error, contact support.
![Your license is invalid; please contact your administrator. If you believe this is an error, contact support.](https://webdevolutions.azureedge.net/docs/en/kb/KB4766.png)

<table>
		<td>
Description
		</td>
		<td>
The trial or paid license for {{ en.DHUBB }} has expired.
		</td>
	</tr>
	<tr>
		<td>
Solution
		</td>
		<td>
The {{ en.DHUBB }} owner must <a href="https://store.devolutions.net/store">buy or renew</a> the license.
		</td>
	</tr>
</table>

### Your {{ en.HUB }} has been disabled; contact your administrator.
![Your {{ en.HUB }} has been disabled; contact your administrator.](https://webdevolutions.azureedge.net/docs/en/kb/KB4769.png)

<table>
		<td>
Description
		</td>
		<td>
This {{ en.DHUBB }} was locked or a bug occurred between the license and the link to the {{ en.DHUBB }}.
		</td>
	</tr>
	<tr>
		<td>
Solution
		</td>
		<td>
Please contact our <a href="mailto:service@devolutions.net">support team</a>.
		</td>
	</tr>
</table>
