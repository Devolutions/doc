---
eleventyComputed:
  title: Checklist for enterprises
  order: 40
  description: Here is a checklist designed to help IT administrators install and configure {{ en.RDM }} Mac for the first time when working in an enterprise environment using a {{ en.DVLS }} or {{ en.DHUBB }} data source.  
---
Here is a checklist designed to help IT administrators install and configure {{ en.RDM }} Mac for the first time when working in an enterprise environment using a {{ en.DVLS }} or {{ en.DHUBB }} data source.  

First [download](https://devolutions.net/remote-desktop-manager/home/download/) and install {{ en.RDMMAC }} before proceeding.  

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
Step 1 - Register your license  

* [Team registration](/rdm/mac/installation/client/registration/team-edition/) 
* [Trial request](/rdm/mac/installation/client/registration/trial-request/) 
		</td>
		<td>
[Add your license](/rdm/mac/installation/client/registration/team-edition/) to the data source. A {{ en.RDM }} Team Edition [30-day trial](/rdm/mac/installation/client/registration/trial-request/) is available upon request.  
		</td>
	</tr>
	<tr>
		<td>
Step 2 - Add your data source

		</td>
		<td>
Warning: When choosing any [data source](/rdm/mac/data-sources/create-new-data-source/) type that is not on-premises, you must consider the security of the data at rest and in transit. We strongly recommend that you further encrypt your data using a master key for file-based solutions or a [security provider](/rdm/mac/commands/administration/security-provider/) for [advanced data sources](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/). This ensures that only you can read the data.  

Upon first launch, {{ en.RDMMAC }} uses an SQLite data source. The different data sources are explained in [Data Source Types](/rdm/mac/data-sources/data-sources-types/). For help selecting a data source tailored to your needs, please see [Select a data source type – Enterprises](/rdm/mac/getting-started/checklist-teams/select-data-source-type-teams/).  
		</td>
	</tr>
	<tr>
		<td>
Step 3 - Select your security provider

		</td>
		<td>
Select your [Security Provider](/rdm/mac/commands/administration/security-provider/) before importing or creating any data in your database so nobody can read your entry configuration data, even when people have a direct access to your database. 
		</td>
	</tr>
	<tr>
		<td>
Step 4 - Create your folder structure

		</td>
		<td>
Top level folders are at the foundation of a solid security structure. Your folder structure (folder entries) should represent your company structure. For example, you can create a folder for your Production team, one for your Staging team and one for your Testing team.  
		</td>
	</tr>
	<tr>
		<td>
Step 5 - Create your default settings

		</td>
		<td>
In ***File – Preferences***, you can set options for {{ en.RDMMAC }} and create [default settings templates](/rdm/mac/commands/file/templates/default-settings/). Each entry type is supported and can have a default template defined to fit your requirements.  
		</td>
	</tr>
	<tr>
		<td>
Step 6 - Create users

		</td>
		<td>
{{ en.RDMMAC }} supports advanced [user management](/rdm/mac/commands/administration/user-management/). User accounts must be created manually by an administrator of the database.  
		</td>
	</tr>
	<tr>
		<td>
Step 7 - Create user groups

		</td>
		<td>
Create [User Groups](/rdm/mac/commands/administration/user-groups-management/) to manage your security system. You can then assign users to user groups, making it easy to grant permissions to a set of users instead of having to manage permissions individually.  
		</td>
	</tr>
	<tr>
		<td>
Step 8 - Create entries

		</td>
		<td>
An [entry](/rdm/mac/commands/edit/entries/creating-new-entry/) is how you save information about your sessions (e.g., RDP, SSH), credentials, websites, VPNs, synchronizers, and documents. 
		</td>
	</tr>
	<tr>
		<td>
Step 9 - Grant permissions

		</td>
		<td>
Once your users are created you can then grant [Permissions](/rdm/mac/commands/administration/user-management/permissions/) for user group-based access control. The permissions granted on the folder can be inherited by each entry set under that folder.  
		</td>
	</tr>
	<tr>
		<td>
Step 10 - Import your data

		</td>
		<td>
The final step is to [import your data](/rdm/mac/commands/file/import/overview/) into {{ en.RDM }}. You can import your sessions, logins, and contacts in a few steps. 
		</td>
	</tr>
</table>
