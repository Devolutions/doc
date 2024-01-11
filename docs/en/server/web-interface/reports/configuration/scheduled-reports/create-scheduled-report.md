---
eleventyComputed:
  title: Create scheduled reports
  description: Create scheduled reports to run automatically and manage who receives the data from your {{ en.DVLS }} and when.
---
Create ***scheduled reports*** to run automatically and manage who receives the data from your {{ en.DVLS }} and when. 
{% snippet icon.badgeCaution %} 
For this feature to work, it is mandatory to enable the [***Scheduler service***](/kb/devolutions-server/knowledge-base/scheduler-service-general-information/) in the {{ en.DVLSCONSOLE }} ***Companions*** tab. 
{% endsnippet %}
 
### Create a scheduled report 
1. Go to ***Reports – Scheduled reports***. 
1. Click on the ***Add*** button. 
![Add a scheduled report](https://webdevolutions.azureedge.net/docs/en/server/ServerOp4077.png) 
1. Select a report type in the ***General*** drop-down menu. 
{% snippet icon.badgeInfo %} 
Available options upon report selection will differ from one to another. 
{% endsnippet %}
 
![Report settings](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8134.png)  

| Report options                       | Description                                                                                  |
|--------------------------------------|----------------------------------------------------------------------------------------------|
| General                              | Select the [reports](server/web-interface/reports/) type that will be generated.<ul><li>Administration Log</li><li>Activity Log</li><li>Data Source Log</li><li>Expired Entry List</li><li>Login Attempts</li><li>Login History</li><li>Last Login</li><li>Privileged Access – Password rotation</li></ul> |
| Run report as an administrator       | Will run the report with administrator privileges.                                           |
| Recipients                           | Select all user accounts from the {{ en.DVLS }} that will receive the report.                |
| Email Address                        | If ***Run report as an administrator*** is enabled, a custom email address must be provided. |
| Title                                | Set the title of the report.                                                                 |
| Start date/time                      | Set the date and time when the report will be created.                                       |
| Do not send when the report is empty | The report will not be sent to the recipients if the report contains no data.                |

4. Add filtering and set the recurrence of the report. 
{% snippet icon.badgeInfo %} 
Available filter options upon report selection will differ from one to another. 
{% endsnippet %}
 
![Event and recurrence settings](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8058.png)  

| Filter options   | Description                                                             |
|------------------|-------------------------------------------------------------------------|
| Date             | Select a date range for the data.                                       |
| Message          | Choose specific messages or fail type to refine the report.             |
| {{ en.VLT_MAJ }} | Select all {{ en.VLT }}s or specific {{ en.VLT }}s.                     |
| Filter           | Enter an expression to match against the fields of the report selected. This is a text filter (not a custom filter) that searches in the entry name, entry's {{ en.VLT }} name, entry's folder name, log messages, and name/username of the user who created the log. |
  

| Recurrence options | Description                          |
|--------------------|--------------------------------------|
| Recurrence         | None, Daily, Weekly, Monthly, Yearly |
| Every              | Set the number of recurrences.       |
| End                | Set when the scheduled report will terminate.<br><ul><li>End by: Set this option and the date to stop the report at a specific moment.</li><li>End after: Set this option to run this report a specific number of times.</li><li>No end date: Set this option to run the report indefinitely.</li></ul> |

5. Click ***Save***.
