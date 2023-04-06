---
title: Checklist for Teams
---
We have created a checklist to help you get started with {{ en.RDM }} for Mac when working in a team environment. 

<table>
	<tr>
		<th>

![RdmMac4019.png](/img/en/rdm/mac/RdmMac4019.png) 
		</th>
		<th>
CHECKLIST FOR TEAMS 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>

		</td>
		<td>
Step 1 - Register your license:  

* [Team Registration](/rdm/mac/installation/client/registration/team-edition/) 
* [Trial Registration](/rdm/mac/installation/client/registration/trial-request/) 
		</td>
		<td>
{{ en.RDM }} Team Edition grants you a 30-day trial. If you decide not to register by the end of the trial, your data will not be altered or erased, and you will have full access to it once you provide a license key. 
		</td>
	</tr>
	<tr>
		<td>

		</td>
		<td>
Step 2 - Add your [Data Source (for teams)](/rdm/mac/getting-started/checklist-teams/select-data-source-type-teams/) . 
		</td>
		<td>
Warning: When choosing any data source type that is not on-premises , you need to think about the safety of the data at rest and during transport. We strongly recommend that you further encrypt your data by applying a master key for file-based solutions, or a [Security Provider](/rdm/mac/commands/administration/security-provider/) for [Advanced Data Sources](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/) . This ensures only you can read the data.  

Upon first launch, {{ en.RDM }} uses a local SQLite data source. The different data sources are explained in the [Data Sources](rdm/mac/data-sources/) section. For help selecting a data source tailored to your needs, please see [Choosing your data source (Teams)](/rdm/mac/getting-started/checklist-teams/select-data-source-type-teams/) . 
		</td>
	</tr>
	<tr>
		<td>

		</td>
		<td>
Step 3 - Select your [Security Provider](/rdm/mac/commands/administration/security-provider/) . 
		</td>
		<td>
Select your Security Provider before importing or creating any data in your database so nobody can read your entry configuration data, even when people have a direct access to your database. 
		</td>
	</tr>
	<tr>
		<td>

		</td>
		<td>
Step 4 - Create your folder structure. 
		</td>
		<td>
Top level folders are at the foundation of a solid security structure. Your folder structure (folder entries) should represent your company structure. For example, you can create a folder for your Production team, one for your Staging team and one for your Testing team. 
		</td>
	</tr>
	<tr>
		<td>

		</td>
		<td>
Step 5 - Create your [Default Settings](RDM_DefaultSettings) . 
		</td>
		<td>
In ***File – Preferences*** , you can set options for {{ en.RDM }} and create default settings Templates. Each entry type is supported and can have a default template defined to fit your requirements. 
		</td>
	</tr>
	<tr>
		<td>

		</td>
		<td>
Step 6 - Create [Users](/rdm/mac/commands/administration/user-management/) . 
		</td>
		<td>
{{ en.RDM }} supports advanced User Management. User accounts must be created manually by an administrator of the database. 
		</td>
	</tr>
	<tr>
		<td>

		</td>
		<td>
Step 7 - Create [User Groups](/rdm/mac/commands/administration/user-groups-management/) . 
		</td>
		<td>
Create [User Groups](/rdm/mac/commands/administration/user-groups-management/) to easily manage your security system. You can then assign users to User groups, making it easy to grant permissions to a set of users instead of having to manage permissions individually. 
		</td>
	</tr>
	<tr>
		<td>

		</td>
		<td>
Step 8 - Create Entries. 
		</td>
		<td>
An Entry is how you save information about your sessions (e.g. RDP, SSH connections), credentials, websites, VPNs, synchronizers and documents. 
		</td>
	</tr>
	<tr>
		<td>

		</td>
		<td>
Step 9 - Grant [Permissions](/rdm/mac/commands/administration/user-management/permissions/) . 
		</td>
		<td>
Once your users are created you can then grant [Permissions](/rdm/mac/commands/administration/user-management/permissions/) for user groups based access control. The permissions granted on the folder can be inherited by each entry set under that folder. 
		</td>
	</tr>
	<tr>
		<td>

		</td>
		<td>
Step 10 - [Import your Data](File_ImportOverview) . 
		</td>
		<td>
The final step is to Import all of your data into {{ en.RDM }} . You can import your sessions, logins and contacts in a few steps. 
		</td>
	</tr>
</table>




