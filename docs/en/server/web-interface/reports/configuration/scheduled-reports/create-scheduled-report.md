---
title: Create Scheduled Reports
---
Create ***Scheduled Reports*** to run automatically and manage when and who will receive the data from your {{ en.DVLS }}. 
{% snippet icon.badgeCaution %} 
For this feature to work, it is mandatory to enable the [***Scheduler Service***](/kb/devolutions-server/knowledge-base/scheduler-service-general-information/) in the {{ en.DVLSCONSOLE }} ***Companions*** tab. 
{% endsnippet %}
 
### Create a Scheduled Report 
1. Go to ***Reports – Scheduled Reports***. 
2. Click on the ***Add*** button. 
![!!ServerOp4077.png](https://webdevolutions.azureedge.net/docs/en/server/ServerOp4077.png) 
1. Select a report in the ***General*** drop-down menu. 
{% snippet icon.badgeInfo %} 
Available options upon report selection will differ from one to another. 
{% endsnippet %}
 
![!!ServerOp8134.png](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8134.png) 
<table>
	<tr>
		<th>
Report Options 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
General 
		</td>
		<td>
Select the <a href="server/web-interface/reports/" target="_blank">Reports</a> type that will be generated. 

* Administration Log 
* Activity Log 
* Data Source Log 
* Expired Entry List 
* Login Attempts 
* Login History 
* Last Login 
* Privileged Access - Password rotation 
		</td>
	</tr>
	<tr>
		<td>
Run report as an administrator 
		</td>
		<td>
Will run the report with administrator privileges. 
		</td>
	</tr>
	<tr>
		<td>
Recipients 
		</td>
		<td>
Select all user accounts from the {{ en.DVLS }} that will receive the report. 
		</td>
	</tr>
	<tr>
		<td>
Email Address 
		</td>
		<td>
If ***Run report as an administrator*** is enabled, a custom email address must be provided. 
		</td>
	</tr>
	<tr>
		<td>
Title 
		</td>
		<td>
Set the title of the report. 
		</td>
	</tr>
	<tr>
		<td>
Start date/time 
		</td>
		<td>
Set the date and time when the report will be created. 
		</td>
	</tr>
	<tr>
		<td>
Do not send when the report is empty 
		</td>
		<td>
The report will not be sent to the recipients if the report contains no data. 
		</td>
	</tr>
</table>

4. Add filtering and set the recurrence of the report. 
{% snippet icon.badgeInfo %} 
Available filter options upon report selection will differ from one to another. 
{% endsnippet %}
 
![!!ServerOp8058.png](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8058.png) 
<table>
	<tr>
		<th>
Filter Options 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
Date 
		</td>
		<td>
Select a date range for the data. 
		</td>
	</tr>
	<tr>
		<td>
Message 
		</td>
		<td>
Choose specific messages or fail type to refine the report. 
		</td>
	</tr>
	<tr>
		<td>
Vault 
		</td>
		<td>
Select all or specific vaults. 
		</td>
	</tr>
	<tr>
		<td>
Filter 
		</td>
		<td>
Enter an expression to match against the fields of the report selected. 
		</td>
	</tr>
</table>
  

<table>
	<tr>
		<th>
Recurrence Options 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
Recurrence 
		</td>
		<td>
None, Daily, Weekly, Monthly, Yearly 
		</td>
	</tr>
	<tr>
		<td>
Every 
		</td>
		<td>
Set the number of recurrences. 
		</td>
	</tr>
	<tr>
		<td>
End 
		</td>
		<td>
Set when the scheduled report will terminate.  

* End by  
	Set this option and the date to stop the report at a specific moment. 
* End after  
	Set this option to run this report a specific number of times. 
* No end date  
	Set this option to run the report indefinitely. 
		</td>
	</tr>
</table>

5. Click ***Save***. 

