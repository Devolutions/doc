---
title: Remote Desktop Manager Security Dashboard
---
The Security dashboard is a tool to offer guidance on how to improve the security of the {{ en.RDM }} platform and also tips on reducing the workload for administrators. Some tips are common infosec best practices, others are a consensus between our owns teams.  

The scores are admittedly open to question and we do not pretend each topic has the same relative value for all of our community members. Achieving 100% is surely not an end goal in itself, we simply aim to raise awareness and provide ideas for your own security hardening.  

![!!KB4707.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4707.png)

## Improvement actions items

### A default password template should be configured

<table>
	<tr>
		<td>
Description
		</td>
		<td>
Password templates set requirements for passwords generated with the password generators.
		</td>
	</tr>
	<tr>
		<td>
Mitigation
		</td>
		<td>
In File - Templates, select Password Templates to create a template. Then, the default template can be selected in Administration - System Settings - Password Templates
		</td>
	</tr>
</table>

### A security provider should be used

<table>
	<tr>
		<td>
Description
		</td>
		<td>
By default, passwords are not protected at rest. When a security provider is configured, sensitive data contained in a data source is encrypted.
		</td>
	</tr>
	<tr>
		<td>
Mitigation
		</td>
		<td>
Security providers are configured in Administration - Security Providers
		</td>
	</tr>
</table>

### A master key should be used with the data source

<table>
	<tr>
		<td>
Description
		</td>
		<td>
Using a master key encrypts sensitive content of XML-based data source files.
		</td>
	</tr>
	<tr>
		<td>
Mitigation
		</td>
		<td>
The master key can be set under File - Change Master Key
		</td>
	</tr>
</table>

### A minimal client version should be configured

<table>
	<tr>
		<td>
Description
		</td>
		<td>
Setting a minimal {{ en.RDM }} version is recommended to ensure clients are up to date and have the latest security features.
		</td>
	</tr>
</table>

### Configuration files should be encrypted using an application password

<table>
	<tr>
		<td>
Description
		</td>
		<td>
The application password should be used to encrypt sensitive information in {{ en.RDM }} configuration files.
		</td>
	</tr>
	<tr>
		<td>
Mitigation
		</td>
		<td>
In File - Options - Security - Application Security (local), choose Use application password and check Encrypt local files using the application password
		</td>
	</tr>
</table>

### HTTPS should be used to connect to the data source

<table>
	<tr>
		<td>
Description
		</td>
		<td>
HTTPS is used to protect the communication between the client and the server hosting the data source. Traffic over HTTP is unencrypted and is susceptible to be intercepted and tampered by a malicious third party.
		</td>
	</tr>
	<tr>
		<td>
Mitigation
		</td>
		<td>
Configure a TLS certificate on the server and set the data source URL to start with https://.
See <a href="/kb/devolutions-server/how-to-articles/configure-ssl/" target="_blank">Configure SSL</a>.
		</td>
	</tr>
</table>

### Legacy security should be disabled

<table>
	<tr>
		<td>
Description
		</td>
		<td>
Legacy security has been deprecated and will be completely removed starting with version 2023.3 of {{ en.RDM }}. 
		</td>
	</tr>
	<tr>
		<td>
Mitigation
		</td>
		<td>
In <i><b>Administration – System Settings – Vault Management – Security Settings – Security</b></i>, disable <i><b>Use legacy security</b></i>.See <a href="/kb/remote-desktop-manager/how-to-articles/migrate-legacy-security-permissions/" target="_blank">Migrate from legacy security to permissions in {{ en.RDM }}</a>.
		</td>
	</tr>
</table>

### Multi-factor authentication (mfa) should be enforced

<table>
	<tr>
		<td>
Description
		</td>
		<td>
Multi-factor authentication (MFA) requires an additional mean of authentication when connecting to a data source. This control prevents abuse of compromised, leaked or weak passwords. The software can be configured to enforce MFA requirement to all users.
		</td>
	</tr>
	<tr>
		<td>
Mitigation
		</td>
		<td>
In Administration - System Settings - Security Settings, enable Force data source 2-factor configuration
		</td>
	</tr>
</table>

### Offline mode should be disabled

<table>
	<tr>
		<td>
Description
		</td>
		<td>
By default, offline mode is enabled and allows {{ en.RDM }} to automatically cache credentials stored in entries on the client system. This feature should be turned off in high security environments to avoid unnecessary sensitive data exposure.
		</td>
	</tr>
</table>

### Password expiration should be enabled for custom users

<table>
	<tr>
		<td>
Description
		</td>
		<td>
Some security standards require passwords to be changed at regular intervals. PCI DSS 4.0 requires passwords to be changed every 90 days when the password is the only authentication factor.
		</td>
	</tr>
	<tr>
		<td>
Mitigation
		</td>
		<td>
Password expiration can be configured in Administration - System Settings - Security Settings - Custom user password expiration (days)
		</td>
	</tr>
</table>

### Risky events should be disabled or generate a warning

<table>
	<tr>
		<td>
Description
		</td>
		<td>
Some entry events can perform powerful actions such as running an external program or script. These events represent a risk if they are modified by a malicious actor. These event types can be disabled if they are not needed, or {{ en.RDM }} can be configured to show a warning when such an event is about to be executed.
		</td>
	</tr>
	<tr>
		<td>
Mitigation
		</td>
		<td>
In Administration - System Settings - Security Settings, set Risky events to Disabled or Enabled with warnings
		</td>
	</tr>
</table>

### SMS should not be used for multi-factor authentication

<table>
	<tr>
		<td>
Description
		</td>
		<td>
SMS is not recommended for 2FA. A stronger mechanism based on an authenticator application or a physical security key should be used instead.
		</td>
	</tr>
</table>

### SQL connections should use tls

<table>
	<tr>
		<td>
Description
		</td>
		<td>
TLS protects communications between {{ en.RDM }} and the SQL Server instance.
		</td>
	</tr>
	<tr>
		<td>
Mitigation
		</td>
		<td>
Configure SQL Server to support TLS connections and add encrypt=true to the SQL Server connection string.
		</td>
	</tr>
</table>

### The data source password variable should be disabled

<table>
	<tr>
		<td>
Description
		</td>
		<td>
When this option is enabled, the variable DATA_SOURCE_PASSWORD will resolve to the data source password. This option should be disabled if it is not needed.
		</td>
	</tr>
	<tr>
		<td>
Mitigation
		</td>
		<td>
In Administration - System Settings - Password Policy, uncheck Allow data source password variable
		</td>
	</tr>
</table>

### The password strength analyzer should use zxcvbn

<table>
	<tr>
		<td>
Description
		</td>
		<td>
Zxcvbn is recommended over the legacy password strength analyzer as it is more reliable.
		</td>
	</tr>
	<tr>
		<td>
Mitigation
		</td>
		<td>
In Administration - System Settings - Password Policy, set Password strength calculator to Zxcvbn
		</td>
	</tr>
</table>

### Tls certificate validation should be enabled

<table>
	<tr>
		<td>
Description
		</td>
		<td>
Validating certificates guarantees that the connection is established with the intended party and protects against data interception attacks.
		</td>
	</tr>
	<tr>
		<td>
Mitigation
		</td>
		<td>
In File - Options - Security - Certificate security, uncheck Ignore application certificate errors
		</td>
	</tr>
</table>

### Transparent data encryption (tde) should be used with sql server

<table>
	<tr>
		<td>
Description
		</td>
		<td>
Transparent Data Encryption encrypts the database data at-rest, which mitigates risks should physical drives or backup tapes be stolen.
		</td>
	</tr>
</table>

### User vault activity should be logged

<table>
	<tr>
		<td>
Description
		</td>
		<td>
Activity logs on user vaults can provide additional information during incident response.
		</td>
	</tr>
	<tr>
		<td>
Mitigation
		</td>
		<td>
In Administration - System Settings - User Vault, check Log user vault activities
		</td>
	</tr>
</table>

### Vaults should be created with restricted permissions by default

<table>
	<tr>
		<td>
Description
		</td>
		<td>
It is preferable to provide rights to users as needed. When enabling this option, vaults will be created with a more limited set of permissions.
		</td>
	</tr>
	<tr>
		<td>
Mitigation
		</td>
		<td>
In Administration - System Settings - Security, check Create vaults with restricted access by default
		</td>
	</tr>
</table>

### Warnings for untrusted rdp connections should be enabled

<table>
	<tr>
		<td>
Description
		</td>
		<td>
When presented with an unknown certificate, the RDP client should be configured to either present a warning (Warn me) or abort the connection (Do not connect).
		</td>
	</tr>
	<tr>
		<td>
Mitigation
		</td>
		<td>
In File - Options - Types - Remote Desktop, set Authentication level to Warn me or Do not connect
		</td>
	</tr>
</table>

### Zip encryption should use the aes mode

<table>
	<tr>
		<td>
Description
		</td>
		<td>
The ZipCrypto algorithm is considered insecure and AES should be used instead. It is susceptible to known-plaintext attacks which can allow recovering the content of the archive without knowing the password (see <a href="https://blog.devolutions.net/2020/08/why-you-should-never-use-zipcrypto/)" target="_blank">Why You Should Never Use the NativeZip Crypto in Windows</a> for details on this attack).
		</td>
	</tr>
	<tr>
		<td>
Mitigation
		</td>
		<td>
In File - Options - Advanced, uncheck Use ZipCrypto compression (not recommended)
		</td>
	</tr>
</table>
