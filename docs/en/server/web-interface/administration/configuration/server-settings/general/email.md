---
title: Email
---
Emails are sent by our notification engine and by some of our multi-factor authentication providers for internal secure messaging. 

In the ***General*** section, you are able to choose an ***Authentication type*** between ***Basic*** and ***Azure***. You can also provide the ***Administrator Email***, which is the recipient email address that will receive the errors.

![Administration – Server Settings – Email](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8169.png)

After having selected the ***Authentication type***, you will get access to other fields to fill in. The information to provide depends on the authentication type.

## Basic SMTP Configuration

{% snippet icon.badgeHelp %}
See [Configure an SMTP Email](/kb/devolutions-server/how-to-articles/configure-smtp-server/configure-smtp-email), which is specific to the ***Basic Authentication type***, for steps on how to configure an SMTP in {{ en.DVLS }}.
{% endsnippet %}  

![Basic Authentication type](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2059.png)

<table>
	<tr>
		<th>
Field/Setting 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
Host 
		</td>
		<td>
Name or IP address of the SMTP server. 
		</td>
	</tr>
	<tr>
		<td>
Port 
		</td>
		<td>
SMTP server port. 
		</td>
	</tr>
	<tr>
		<td>
Username 
		</td>
		<td>
Username used to connect to the SMTP server. 
		</td>
	</tr>
	<tr>
		<td>
Password 
		</td>
		<td>
Password used to connect to the SMTP server. 
		</td>
	</tr>
	<tr>
		<td>
Connection security 
		</td>
		<td>
Specific security for the connection to the mail server.  

* No encryption 
* Automatic based on port number (by default)
* Use SSL or TLS immediately (SMTPS) 
* Use TLS immediately after initial connect 
* Use TLS if server supports it after initial connect 
		</td>
	</tr>
	<tr>
		<td>
Send email as 
		</td>
		<td>
Sender's email address. 
		</td>
	</tr>
</table>

## Azure SMTP Configuration

![Azure Authentication type](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2060.png)

{% snippet icon.badgeHelp %}
See [Configure an SMTP Email With Azure](/kb/devolutions-server/how-to-articles/configure-smtp-server/configure-smtp-email-azure), which is specific to the ***Azure Authentication type***, for steps on how to configure an SMTP with Azure in {{ en.DVLS }}.
{% endsnippet %}  

<table>
	<tr>
		<th>
Field/Setting 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
Client ID 
		</td>
		<td>
 Azure application ID.
		</td>
	</tr>
	<tr>
		<td>
Tenant ID 
		</td>
		<td>
Azure Tenant ID
		</td>
	</tr>
	<tr>
		<td>
User ID 
		</td>
		<td>
ID of the user that is listed in the "From" section of the email.
		</td>
	</tr>
	<tr>
		<td>
Secret value 
		</td>
		<td>
Azure client secret.
		</td>
	</tr>
</table>
