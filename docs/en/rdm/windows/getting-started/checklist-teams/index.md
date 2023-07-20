---
eleventyComputed:
  title: Checklist for enterprises
  order: 40
  description: Here is a checklist designed to help IT administrators install and configure {{ en.RDM }} for the first time when working in an enterprise environment using a {{ en.DVLS }} or {{ en.DHUBB }} data source.
---
Here is a checklist designed to help IT administrators install and configure {{ en.RDM }} for the first time when working in an enterprise environment using a {{ en.DVLS }} or {{ en.DHUBB }} data source.  

First [download](https://devolutions.net/remote-desktop-manager/home/download/) and install {{ en.RDM }} before proceeding.  

<table>
	<tr>
		<th>
CHECKLIST FOR ENTERPRISES 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Step 1 - Configure and create the data source

		</td>
		<td>
Upon first launch, {{ en.RDM }} prompts you to select a data source. See [data source types for enterprise environments](/rdm/windows/getting-started/checklist-teams/select-data-source-type/):  

* [{{ en.DHUBB }}](/rdm/windows/data-sources/data-sources-types/advanced-data-sourceshub-business/)  
* [{{ en.DVLS }}](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/server/)  

You need to enter general data source information. For {{ en.DHUBB }}, enter your email

For the first database user, create a SQL administrator account with the ***Database login mode***. Then, create the database and set up initial parameters for the default vault.  

{% youtube 'https://youtu.be/BfFvtHJSzbs?t=81' %}  
		</td>
	</tr>
	<tr>
		<td>
Overview of authentication and login types  
		</td>
		<td>
Users will authenticate using the method of your choosing:  

* ***Database login***: Uses a SQL login to directly access the SQL server. The first database administrative user is created using this method.  
* ***Integrated Security (Active Directory)***: Recommended for Azure SQL data sources. Uses the active user’s Microsoft AD account.  
* [***Custom login***](/kb/remote-desktop-manager/how-to-articles/implement-custom-login-mode/): Recommended for SQL Server data sources. Allows for the creation of RDM accounts for users to authenticate with, but prevents them from having direct access to the SQL database through an external tool.  

{% youtube 'https://youtu.be/BfFvtHJSzbs?t=174' %}  
		</td>
	</tr>
	<tr>
		<td>
Step 2 - Register your license  

* [Team registration](/rdm/windows/installation/client/registration/team-edition/)  
* [Trial request](/rdm/windows/installation/client/registration/trial-request/)  
		</td>
		<td>
[Add your license](/rdm/windows/installation/client/registration/team-edition/) to the data source. A {{ en.RDM }} Team Edition [30-day trial](/rdm/windows/installation/client/registration/trial-request/) is available upon request.  

You can enable the option to have licenses auto-assigned, so that when new users are created they automatically receive a license.  

Assign a license to the administrator account previously created so that you can create more administrative accounts. This license can be freed up later on.  

{% youtube 'https://youtu.be/BfFvtHJSzbs?t=312' %}  
		</td>
	</tr>
	<tr>
		<td>
Step 3 - Create the "custom login" RDM and SQL account

		</td>
		<td>
Create a new administrative SQL user with just enough read/write permissions on the SQL side to accomplish what they need to do in {{ en.RDM }} without having complete control over the SQL server itself. Use the ***Database Authentication type*** for this account so it can create both a {{ en.RDM }} login and a SQL account login.  

{% youtube 'https://youtu.be/BfFvtHJSzbs?t=359' %}  
		</td>
	</tr>
	<tr>
		<td>
Step 4 - Create the administrator user account

		</td>
		<td>
Create the account that the administrator will use daily to access {{ en.RDM }}. Use the ***Custom (Devolutions) Authentication type*** for this account.  

Once this daily account is created, you can update the data source with the correct login information to reflect that this new administrative account is used instead of the first account.  

It is now safe to delete the first database account and to unassign the license of the administrative SQL user.  

{% youtube 'https://youtu.be/BfFvtHJSzbs?t=412' %}  
		</td>
	</tr>
	<tr>
		<td>
Step 5 - Create remaining user accounts

		</td>
		<td>
Add all other users one by one using the ***Authentication type*** of your choice. See the [Overview of Authentication and Login Types](https://youtu.be/BfFvtHJSzbs&t=174s) or [User Management](/rdm/windows/commands/administration/management/user-management/) for more information.  

{% youtube 'https://youtu.be/BfFvtHJSzbs?t=514' %}  
		</td>
	</tr>
	<tr>
		<td>
Step 6 - Create user groups

		</td>
		<td>
Create user groups and assign previously created users to those groups. Each user can be part of predefined permissions in user groups, which helps you manage who has access to which resources and what they can do with them without having to individually manage them.  

{% youtube 'https://youtu.be/BfFvtHJSzbs?t=552' %}  
		</td>
	</tr>
	<tr>
		<td>
Step 7 - Create vaults

		</td>
		<td>
In {{ en.RDM }}, data is stored in a hierarchy of folders and entries all within vaults. The number of vaults created and the way they are categorized is completely up to you, but we have seen great success in teams separating their content by departments, locations, and customer accounts.  

All users have access to the Default vault created after installing {{ en.RDM }}. You can change its configuration as well as [create other vaults](/rdm/windows/commands/administration/management/vaults-overview/#create-a-vault), then [assign them users and user groups](/rdm/windows/commands/administration/management/vaults-overview/#give-users-and-user-groups-access-to-a-vault).  

Access all vaults using the vault selector in the ***{{ en.NPANE }}***. Each user can also access their own ***{{ en.UVLT }}***. This vault is only accessible to them and is a great place to store business-related entries for the user, such as alarm codes, user credentials, websites, documents, etc.  

{% youtube 'https://youtu.be/BfFvtHJSzbs?t=601' %}  
		</td>
	</tr>
	<tr>
		<td>
Step 8 - Assign permissions

		</td>
		<td>
[Permissions](/rdm/windows/user-groups-based-access-control/permissions/) can be granted to users and user groups. They are set on the vault, folder, and entry levels.  

The permissions granted on the folder can be inherited by each entry set under that folder.  

It is possible to [batch grant access](/rdm/windows/commands/administration/settings/vault-settings/default-security-entries/) permissions and permission sets to users and user groups.  

{% youtube 'https://youtu.be/BfFvtHJSzbs?t=700' %}  
		</td>
	</tr>
	<tr>
		<td>
Step 9 - Add a security provider for encryption

		</td>
		<td>
{{ en.RDM }} encrypts all passwords and sensitive information with AES-256 encryption, but some organizations may require for the whole database to be encrypted.  

The [***Security Provider***](/rdm/windows/commands/administration/settings/security-providers/) is an additional level of encryption to the already-encrypted passwords and sensitive information in {{ en.RDM }}. It can be configured using a passphrase, a certificate, or a keyfile. See our [Security providers best practices](/kb/remote-desktop-manager/knowledge-base/security-providers-best-practices/).  

{% youtube 'https://youtu.be/BfFvtHJSzbs?t=933' %}  
		</td>
	</tr>
	<tr>
		<td>
Step 10 - Deploy to workstations

		</td>
		<td>
Deploy {{ en.RDM }} to your end users using the [Custom Installer Service](/rdm/windows/installation/client/custom-installer-service/), which creates a customized MSI package that can be installed or deployed. It contains a fully packaged version of {{ en.RDM }} along with all of the data source information required for a user to access the database.  

The MSI can then be manually installed or silently pushed to workstations using a deployment tool.  

{% youtube 'https://youtu.be/BfFvtHJSzbs?t=1072' %}  
		</td>
	</tr>
</table>
