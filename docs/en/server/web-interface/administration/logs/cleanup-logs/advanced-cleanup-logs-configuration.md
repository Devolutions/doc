---
title: Advanced Configuration
---
The ***Advanced*** configuration allows to set individual clean up parameters for all the different logs of {{ en.RDMS }} . 

![Cleanup Logs - Advanced](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8161.png) 

<table>
	<tr>
		<th>
Logs 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
Backup Logs 
		</td>
		<td>
The Backup Logs is related to the <a href="/server/web-interface/administration/backup/backup-manager/" target="_blank">Backup Manager</a>. 
		</td>
	</tr>
	<tr>
		<td>
Connection Logs 
		</td>
		<td>
Connections Logs relates to all operations on entries like viewing a password, opening an entry, etc. 
		</td>
	</tr>
	<tr>
		<td>
Login Attempt 
		</td>
		<td>
The Login Attempt relates to all unsuccessful logins to the {{ en.DVLS }} data source. 
		</td>
	</tr>
	<tr>
		<td>
Login History 
		</td>
		<td>
The Login History logs related to each user that has been connected to the {{ en.DVLS }} . 
		</td>
	</tr>
	<tr>
		<td>
Message Logs 
		</td>
		<td>
Message Logs relates to the data source logs of {{ en.RDMS }} . 
		</td>
	</tr>
	<tr>
		<td>
PAM Logs 
		</td>
		<td>
PAM Logs relates to the {{ en.RDMS }} PAM feature. 
		</td>
	</tr>
	<tr>
		<td>
User Info History 
		</td>
		<td>
The User Info History logs relate to the user accounts update history. 
		</td>
	</tr>
</table>


<table>
	<tr>
		<th>
General 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
Use custom configuration 
		</td>
		<td>
Enable to allow setting specific archiving and deleting parameters for the selected log. 
		</td>
	</tr>
</table>


<table>
	<tr>
		<th>
Configuration 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
Use archiving 
		</td>
		<td>
Use the archive operation to clean the logs. 
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
</table>


