---
eleventyComputed:
  title: Cleanup Logs
---
The ***Cleanup Logs*** functionality will allow to archive logs available in the database that are older than the selected period. It can also delete these archived logs based on the selected time limit in the parameters.  

![Cleanup Logs](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8160.png) 

<table>
	<tr>
		<th>
Option 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
Enable automatic cleanup 
		</td>
		<td>
Enable the automatic cleanup logs feature to automatically archive and delete logs. 
		</td>
	</tr>
	<tr>
		<td>
Run every day at 
		</td>
		<td>
Set the time when the feature will run. 
		</td>
	</tr>
	<tr>
		<td>
Use archiving 
		</td>
		<td>
If enable, the job will archive and delete logs based on the period selected in the two drop down lists. 
		</td>
	</tr>
	<tr>
		<td>
Archive logs older than 
		</td>
		<td>
Will archive logs that are older than the selected value in the drop down list.  

* Custom 
* One month 
* Three months 
* Six months 
* One year 
		</td>
	</tr>
	<tr>
		<td>
Delete archived logs older than 
		</td>
		<td>
Will delete all archived logs that are older than the selected value in the drop down list.  

* Three months 
* Six months 
* One year 
* Two years 
		</td>
	</tr>
	<tr>
		<td>
Skip archiving and permanently delete 
		</td>
		<td>
If enable, will not archive the logs and will permanently delete them. 
		</td>
	</tr>
	<tr>
		<td>
Delete logs older than 
		</td>
		<td>
Will permanently delete all logs older than the selected value in the drop down list.  

* Custom 
* One month 
* Three months 
* Six months 
* One year 
* Two years 
		</td>
	</tr>
	<tr>
		<td>
Advanced 
		</td>
		<td>
[Advanced](/server/web-interface/administration/logs/cleanup-logs/advanced-cleanup-logs-configuration/) configuration is for setting up the archiving and deleting operation on each type of logs. 
		</td>
	</tr>
</table>
