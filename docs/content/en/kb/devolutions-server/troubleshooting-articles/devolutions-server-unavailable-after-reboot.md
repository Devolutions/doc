---
eleventyComputed:
  title: "{{ en.DVLS }} unavailable after reboot"
  description: The SQL Server where your {{ en.DVLS }} is located may not be up and running by the time the {{ en.DVLS }} instance starts.
---
The SQL Server where your {{ en.DVLS }} is located may not be up and running by the time the {{ en.DVLS }} instance starts. As a result, the scheduler service or {{ en.DVLS }} web application is unable to connect to the database and is returning an error message that may look like this in the Windows Event logs:

"The DevolutionsSchedulerService (DVLS) service terminated with the following error:  
An exception occurred in the service when handling the control request."

### Solution
Execute the commands below to configure the {{ en.DVLS }} scheduler service and W3SVC (integral for IIS functionality) to depend on SQL Server. This adjustment ensures they will initiate their startup process only after SQL Server has fully started.

* {{ en.DVLS }} scheduler service: `sc config DevolutionsSchedulerServiceDVLS depend=MSSQLSERVER`
* W3SVC: `sc config W3SVC depend=MSSQLSERVER`