---
title: Devolutions Server Security Dashboard
---
# {{ en.TOPICTITLE }}
The ***Security Dashboard*** is simply a tool to offer guidance on how to improve the security of the {{ en.DPS }} platform and also tips on reducing the workload for administrators. Some tips are common infosec best practices, others are a consensus between our owns teams.

The scores are admittedly open to question and we do not pretend each topic has the same relative value for all of our community members. Achieving 100% is surely not an end goal in itself, we simply aim to raise awareness and provide ideas for your own security hardening.  
![kb4707.png](/img/en/kb/kb4707.png)
## Improvement Actions Items
<table>
	<tr>
		<td>
Description
		</td>
		<td>
The LDAPS protocol should be used to provide communication confidentiality and integrity over the network. Otherwise, actions such as password resets could send the password in cleartext over the network.
		</td>
	</tr>
	<tr>
		<td>
Mitigation
		</td>
		<td>
In the web interface ***Administration - Server Settings - Authentication - Domain*** , check ***Enable LDAPS***
		</td>
	</tr>
</table>
<table>
	<tr>
		<td>
Description
		</td>
		<td>
Backups should be configured to an external media or cloud storage to avoid permanent loss of data.
		</td>
	</tr>
</table>
<table>
	<tr>
		<td>
Description
		</td>
		<td>
Minimum privileges should be granted and applied for service and database accounts to operate. Shared and excessively privileged service and database accounts may induce unnecessary security risk exposure.
		</td>
	</tr>
</table>
<table>
	<tr>
		<td>
Description
		</td>
		<td>
An email server configuration is required to transmit important application messages such as security events or errors.
		</td>
	</tr>
	<tr>
		<td>
Mitigation
		</td>
		<td>
Email server settings are in the web interface ***Administration - Server Settings - Email***
		</td>
	</tr>
</table>
<table>
	<tr>
		<td>
Description
		</td>
		<td>
Sending logs to an external system is recommended to maintain integrity and availability of event information.
		</td>
	</tr>
	<tr>
		<td>
Mitigation
		</td>
		<td>
Logging is configured in the web interface ***Administration - Server Settings - Logging***
		</td>
	</tr>
</table>
<table>
	<tr>
		<td>
Description
		</td>
		<td>
Secure communications guarantee the integrity and confidentiality of the data transmitted between the client and the server.
		</td>
	</tr>
</table>
<table>
	<tr>
		<td>
Description
		</td>
		<td>
Excessive session duration may allow exposure beyond necessary to unauthorized users. Refresh token lifetime should therefore be configured within 24 hours (1440 min).
		</td>
	</tr>
</table>
<table>
	<tr>
		<td>
Description
		</td>
		<td>
Limiting the number of active administrators within the platform will reduce the attack surface of an attacker to only those accounts configured. Having more than 5 administrators can also be a sign of poor segregation of duty within the business unit or organization.
		</td>
	</tr>
</table>
<table>
	<tr>
		<td>
Description
		</td>
		<td>
The default MSSQL administrative account is a high privilege account that should only be used to manage the database instance. A less privileged user or service account is preferred to reduce impact of compromise.
		</td>
	</tr>
</table>
<table>
	<tr>
		<td>
Description
		</td>
		<td>
Sensitive information is stored in the web.config configuration file. It is recommended to enable encryption to prevent tampering and ensure confidentiality.
		</td>
	</tr>
</table>
