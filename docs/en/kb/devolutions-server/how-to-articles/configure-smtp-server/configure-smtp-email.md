---
eleventyComputed:
  title: Configure an SMTP email
---
Configure a basic SMTP email in {{ en.DVLS }} by following the steps below.

## Steps

1. In {{ en.DVLS }}, go to ***Administration – Server Settings – Email***.
1. In the ***Authentication type*** drop-down list, select ***Basic***.
![Basic Authentication type](https://webdevolutions.azureedge.net/docs/en/kb/KB2203.png) 
3. In the ***Administrator Email*** field, enter the recipient email address that will receive the errors.
1. Enter/select all necessary information under the ***SMTP Configuration*** section. See the table in the next section for information on each field/setting.
1. Once the information has been provided, test your email settings with the ***Test Email*** button. 
1. If successful, ***Save*** your configuration using the icon at the top right.  

## SMTP Configuration Settings

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
Enter the name or IP address of the SMTP server. 
		</td>
	</tr>
	<tr>
		<td>
Port 
		</td>
		<td>
Select the SMTP server port. 
		</td>
	</tr>
	<tr>
		<td>
Username 
		</td>
		<td>
Enter the username used to connect to your SMTP server. 
		</td>
	</tr>
	<tr>
		<td>
Password 
		</td>
		<td>
Enter the password used to connect to your SMTP server. 
		</td>
	</tr>
	<tr>
		<td>
Connection security 
		</td>
		<td>
Set a specific security for the connection to the mail server.  

Choose between the following:  

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
Enter the sender's email address. 
		</td>
	</tr>
</table>
