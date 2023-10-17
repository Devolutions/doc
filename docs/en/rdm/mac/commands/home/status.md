---
eleventyComputed:
  title: Status
---
The Status allows you to change the status of a session. 

## Settings 

![Home - Status](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip409.png) 

<table>
	<tr>
		<th>
OPTION 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Edit 
		</td>
		<td>
This will allow you to write a session status message that will be displayed every time a user open a session. 
		</td>
	</tr>
	<tr>
		<td>
Default 
		</td>
		<td>
This will set the status back to its default setting. 
		</td>
	</tr>
	<tr>
		<td>
Locked 
		</td>
		<td>
This allow the user who has locked the session to use it and block the others 
		</td>
	</tr>
	<tr>
		<td>
Disabled 
		</td>
		<td>
A disabled session cannot be opened. It is mostly used when you do not want to delete it but avoid any unattended connection. It is also useful to disable an account for one of your former customer. 
		</td>
	</tr>
	<tr>
		<td>
Warning 
		</td>
		<td>
This status allows the session to be used, but displays a message to the user before it is opened. 
		</td>
	</tr>
	<tr>
		<td>
Expired 
		</td>
		<td>
An expired session cannot be opened. It can be set manually or automatically if the session expiration date is set in his property. 
		</td>
	</tr>
</table>

{% snippet icon.shieldCaution %} 
If using the Locked option, the session will be locked for other users only but the holder of the lock can still use it. 
{% endsnippet %}
 

