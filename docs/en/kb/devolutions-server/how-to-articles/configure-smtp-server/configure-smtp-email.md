---
title: Configure an SMTP Email
---
Configure a basic SMTP email in {{ en.DVLS }} by following the steps below:
1. In {{ en.DVLS }}, go to ***Administration – Server Settings – Email***.
1. In the ***Authentication type*** drop-down list, select ***Basic***.

1. Enter the email in the ***Administrator Email*** field.
1. Enter/select all necessary information under the SMTP Configuration section. See the table below for information on each field/setting.  
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
SMTP server port 
		</td>
	</tr>
	<tr>
		<td>
Username 
		</td>
		<td>
Enter your username to connect to your SMTP server. 
		</td>
	</tr>
	<tr>
		<td>
Password 
		</td>
		<td>
Enter your password to connect to your SMTP server. 
		</td>
	</tr>
	<tr>
		<td>
Connection security 
		</td>
		<td>
Set a specific security for the connection to the mail server.  

Choose between :  

* No encryption 
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
Sender email address. 
		</td>
	</tr>
	<tr>
		<td>
Email administrator 
		</td>
		<td>
Recipient email address that will receive the errors. 
		</td>
	</tr>
	<tr>
		<td>
Test Email 
		</td>
		<td>
Test your email settings. 
		</td>
	</tr>
</table>