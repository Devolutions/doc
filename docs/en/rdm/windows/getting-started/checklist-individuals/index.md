---
eleventyComputed:
  title: Checklist for individuals
  order: 20
  description: Here is a checklist to help you get started with {{ en.RDM }} for individuals.
---
Here is a checklist to help you get started with {{ en.RDM }} for individuals.

First [download](https://devolutions.net/remote-desktop-manager/home/download/) and install {{ en.RDM }} before proceeding.

<table>
	<tr>
		<th>
CHECKLIST FOR INDIVIDUALS (TEAM EDITION) 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Step 1 - Register your license  

* [Team registration](/rdm/windows/installation/client/registration/team-edition/) 
* [Trial request](/rdm/windows/installation/client/registration/trial-request/) 

		</td>
		<td>
{{ en.RDM }} Team Edition grants you a 30-day trial. If you decide not to register by the end of the trial, your data will not be altered or erased, and you will have full access to it once you provide a license key.  

{% youtube '_FFSo_Bi3GY' %}  
		</td>
	</tr>
	<tr>
		<td>
Step 2 - Add your data source and set up your {{ en.DA }} and master key

		</td>
		<td>
Warning: When choosing any data source type that is not on-premises, you must consider the security of the data at rest and in transit. We strongly recommend that you further encrypt your data using a master key for file-based solutions or a [security provider](/rdm/windows/commands/administration/settings/security-providers/) for [advanced data sources](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). This ensures that only you can read the data.  

Upon first launch, {{ en.RDM }} uses a local SQLite data source. The different data sources are explained in [Data Sources](/rdm/windows/data-sources/). For help selecting a data source tailored to your needs, please see [Choosing your data source (Individuals)](/rdm/windows/getting-started/checklist-individuals/select-data-source-type/).  

{% youtube 'R3VYxnOdjoE' %}  
		</td>
	</tr>
	<tr>
		<td>
Step 3 - Set up your Devolutions {{ en.OBACK }}

		</td>
		<td>
Devolutions [{{ en.OBACK }}](/cloud/getting-started/devolutions-cloud-services/) allows you to securely back up your information for selected data sources. The backup is automatically executed 30 seconds after any modifications made to the data source content. It is a best practice to always back up your data source.  

{% youtube 'KegabQ0JmRw' %}  
		</td>
	</tr>
	<tr>
		<td>
Step 4 - Create your default settings

		</td>
		<td>
In ***File – Options***, you can create, modify, or reset [default settings](/rdm/windows/commands/file/templates/default-settings/) for your templates. Each entry type is supported and can have a default template defined to fit your requirements.  

{% youtube '4sib5cliffA' %}  
		</td>
	</tr>
	<tr>
		<td>
Step 5 - Create your folder structure

		</td>
		<td>
Top level folders are at the foundation of a solid security structure. Your folder structure (folder entries) should represent your company structure.  

{% youtube '2z2BlejRl4A' %}  
		</td>
	</tr>
	<tr>
		<td>
Step 6 - Import your data

		</td>
		<td>
The final step is to [import your data into {{ en.RDM }}](/rdm/windows/commands/file/import/). You can import your sessions, logins, and contacts in a few steps.  

{% youtube 'x4NLsBvF2tU' %}  
		</td>
	</tr>
</table>
