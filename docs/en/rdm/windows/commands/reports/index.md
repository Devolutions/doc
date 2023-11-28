---
eleventyComputed:
  title: Reports
  description: The Reports section automatically generates reports detailing {{ en.RDM }} usage related to entries, expired assets, passwords, security, and users. 
---

The ***Reports*** section automatically generates reports detailing {{ en.RDM }} usage related to ***entries***, ***expired assets***, ***passwords***, ***security***, and ***users***. You have the option to export your generated report, as well as executing and exporting reports through a command line. 

{% snippet icon.badgeInfo %} 
The logs feature requires an [Advanced Data Source](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/).
{% endsnippet %}

{% snippet icon.badgeInfo %} 
Web-based reports from [{{ en.DVLS }}](/server/overview/what-is-server/) and [{{ en.DHUB }}](/hub/overview/what-is-hub/) are available in {{ en.RDM }}.
{% endsnippet %}

![Reports](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6205.png)

<table>
	<tr>
		<th>

OPTION 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Activity Logs 
		</td>
		<td>
Opens the [***Activity Logs***](/rdm/windows/commands/reports/activity-logs/), a robust logging solution. With this feature, it is possible to monitor an open session for all users using [Advanced Data Sources](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). 
		</td>
	</tr>
	<tr>
		<td>
Administration Logs 
		</td>
		<td>        
Opens the ***Administration Logs***.
		</td>
	</tr>
	<tr>
		<td>
Data Source Logs
		</td>
		<td>        
Opens the ***Data Source Logs***.
		</td>
	</tr>
	<tr>
		<td>
Entry Security Analyzer
		</td>
		<td>        
Opens the [***Entry Security Analyzer***](/rdm/windows/commands/reports/entry-security-analyzer/), which valuates the strength of entries stored in the data source.
		</td>
	</tr>
	<tr>
		<td>
Password Analyzer
		</td>
		<td>        
Opens the ***Password Analyzer***,  evaluating the strength of passwords stored in the data source.
		</td>
	</tr>
	<tr>
		<td>
Security Dashboard
		</td>
		<td>        
Opens the [***Security Dashboard***](/kb/remote-desktop-manager/knowledge-base/rdm-security-dashboard/), a tool to offer guidance on how to improve the security of the {{ en.RDM }} platform and also tips on reducing the workload for administrators.
		</td>
	</tr>
	<tr>
		<td>
More Reports
		</td>
		<td>        
Opens the ***Reports*** window.
		</td>   
	</tr>
</table>
 
![Reports window](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6197.png) 

From this window, you can browse and select a wide variety of Report Types. Explore to your heart's content.  

Once Generated, a report will provide you with all the information you selected during this step. These final results can take various shapes and have different features (such as editing a specific entry or printing the result) depending on what the report actually is.  

These logs are still restricted by user rights. A user with restricted access would not be able to select Password and Security for example. 


