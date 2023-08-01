---
title: Backup Manager
description: The Backup Manager section allows administrators to configure the parameters to back up the database and the web application folder.
---
The ***Backup Manager*** section allows administrators to configure the parameters to back up the database and the web application folder.  

Click the ***Backup Now*** button at the top to immediately create a backup of the SQL database and/or the web application folder.  

![Administration – Backup Manager](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2084.png) 

## Settings  
### Database configuration  
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
Enable database backup 
		</td>
		<td>
Activates the backup of the SQL database. 
		</td>
	</tr>
	<tr>
		<td>
Backup database file path 
		</td>
		<td>
This is the path to the folder where the backup of the SQL database will be saved.<br>

We recommend the use of a shared network folder with proper permissions set on it to be able to save the backup file.  

Note: Since the backup command is running on the SQL Server and on the machine where {{ en.DVLS }} is hosted, this path must be accessible from both. We recommend configuring the database backup path using a UNC path.  

If a service account is set on the ***Scheduler Service***, the account needs the "write" permission on the destination folder.  
		</td>
	</tr>
	<tr>
		<td>
Backup database password 
		</td>
		<td>
The password protects the compressed ZIP backup file. You need to provide it to decompress the file. 
		</td>
	</tr>
</table>

### Web configuration 
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
Enable web backup 
		</td>
		<td>
Activates the backup of the web application. 
		</td>
	</tr>
	<tr>
		<td>
Backup web file path 
		</td>
		<td>
The path to the folder where the backup of the web application will be saved.<br>

We recommend the use of a shared network folder with proper permissions set on it to be able to save the backup file.  

Note: If service accounts are set on the ***Scheduler Service*** and on the ***IIS Application Pool Identity***, both accounts need the "write" permission on the destination folder. 
		</td>
	</tr>
	<tr>
		<td>
Backup web file password 
		</td>
		<td>
The password protects the compressed ZIP backup file. You need to provide it to decompress the file. 
		</td>
	</tr>
</table>

### Backup encryption algorithm 
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
Encryption algorithm 
		</td>
		<td>
This is the AES-256 encryption algorithm used to encrypt the backup if a backup password is set. 
		</td>
	</tr>
</table>

### Notification 
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
Notify Administrator on backup failed 
		</td>
		<td>
Sends an email to the administrators when a backup process fails. 
		</td>
	</tr>
	<tr>
		<td>
Notify Administrator on backup success 
		</td>
		<td>
Sends an email to the administrators when a backup process succeeds. 
		</td>
	</tr>
</table>

### Schedule 
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
Backup start time 
		</td>
		<td>
Date and time when the backup will be automatically launched. 
		</td>
	</tr>
	<tr>
		<td>
Repeat every 
		</td>
		<td>
The time interval between backup runs. 
		</td>
	</tr>
</table>

### Advanced 
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
Database backup SQL timeout (Minutes) 
		</td>
		<td>
Number of minutes before a timeout in the SQL instance. 
		</td>
	</tr>
	<tr>
		<td>
Keep number of backups 
		</td>
		<td>
Maximum number of backups that will be kept in the backup folder. 
		</td>
	</tr>
	<tr>
		<td>
Copy only database backup 
		</td>
		<td>
An SQL Server backup that is independent of the sequence of conventional SQL Server backups. For more information, please see the <a href="https://learn.microsoft.com/en-us/sql/relational-databases/backup-restore/copy-only-backups-sql-server?view=sql-server-ver16">Copy-Only Backups</a> Microsoft help page. 
		</td>
	</tr>
</table>
