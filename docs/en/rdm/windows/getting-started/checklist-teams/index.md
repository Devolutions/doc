---
title: Checklist for Teams
---
Here&apos;s a checklist to help you get started with {{ en.RDM }} when working in a team environment.  

<table>
	<tr>
		<th>

![!!RdmWin4035.png](/img/en/rdm/windows/RdmWin4035.png) 
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

* [Team Registration](/rdm/windows/installation/client/registration/team-edition/) 
* [Trial Registration](/rdm/windows/installation/client/registration/trial-request/) 
		</td>
		<td>
{{ en.RDM }} Team Edition grants you a 30-day trial. If you decide not to register by the end of the trial, your data will not be altered or erased, and you will have full access to it once you provide a license key. 
		</td>
	</tr>
	<tr>
		<td>

		</td>
		<td>
Step 2 - Add your [Data Source](/rdm/windows/data-sources/create-new-data-source/) (for teams). 
		</td>
		<td>
Warning: When choosing any data source type that is not on-premises , you need to think about the safety of the data at rest and during transport. We strongly recommend that you further encrypt your data by applying a master key for file-based solutions or a [Security Provider](/rdm/windows/commands/administration/settings/security-providers/) for [Advanced Data Sources](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/) . This ensures only you can read the data.  

Upon first launch, {{ en.RDM }} uses a local SQLite data source. The different data sources are explained in the [Data Sources](/rdm/windows/data-sources/) section. For help selecting a data source tailored to your needs, please see [Choosing your data source (Teams)](/rdm/windows/getting-started/checklist-teams/select-data-source-type/) . 
		</td>
	</tr>
	<tr>
		<td>

		</td>
		<td>
Step 3 - Select your [Security Provider](/rdm/windows/commands/administration/settings/security-providers/) . 
		</td>
		<td>
Select your [Security Provider](/rdm/windows/commands/administration/settings/security-providers/) before importing or creating any data in your database so nobody can read your entry configuration data, even when people have a direct access to your database. 
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

{% youtube '__xK92eTdgU' %}
		</td>
	</tr>
	<tr>
		<td>

		</td>
		<td>
Step 5 - Create your [Default Settings](/rdm/windows/commands/file/templates/default-settings/) . 
		</td>
		<td>
In ***File – Options*** you can set options for {{ en.RDM }} and create default settings Templates. Each entry type is supported and can have a default template defined to fit your requirements. After you configure the options, use the [Custom Installer](/rdm/windows/installation/client/custom-installer-service/) to share the pre-configured version with your team. 
		</td>
	</tr>
	<tr>
		<td>

		</td>
		<td>
Step 6 - Create [Users](/rdm/windows/commands/administration/management/user-management/) . 
		</td>
		<td>
{{ en.RDM }} supports advanced User Management. User accounts must be created manually by an administrator of the database. 
		</td>
	</tr>
	<tr>
		<td>

		</td>
		<td>
Step 7 - Create [User Groups](/rdm/windows/commands/administration/management/user-groups-management/) . 
		</td>
		<td>
Create [User Groups](/rdm/windows/commands/administration/management/user-groups-management/) to manage your security system. You can then assign users to User Groups, making it easy to grant permissions to a set of users instead of having to manage permissions individually. 
		</td>
	</tr>
	<tr>
		<td>

		</td>
		<td>
Step 8 - Create [Entries](/rdm/windows/commands/edit/entries/creating-new-entry/) . 
		</td>
		<td>
An entry is how you save information about your sessions (e.g. RDP, SSH connections), credentials, websites, VPNs, synchronizers and documents. 
		</td>
	</tr>
	<tr>
		<td>

		</td>
		<td>
Step 9 - Grant [Permissions](/rdm/windows/user-groups-based-access-control/permissions/) . 
		</td>
		<td>
Once your users are created, you can then grant [Permissions](/rdm/windows/user-groups-based-access-control/permissions/) for user group-based access control. The permissions granted on the folder can be inherited by each entry set under that folder. 
		</td>
	</tr>
	<tr>
		<td>

		</td>
		<td>
Step 10 - [Import your Data](/rdm/windows/commands/file/import/) . 
		</td>
		<td>
The final step is to import all of your data into {{ en.RDM }} . You can import your sessions, logins and contacts in a few steps. 
		</td>
	</tr>
</table>




