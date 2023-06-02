---
title: Backup Manager
---
The ***Backup Manager*** section allows administrators to configure the parameters to back up the database and the web application folder.  

Click the ***Backup Now*** button to immediately create a backup of the SQL database and/or the web application folder.  

![Administration - Backup Manager](https://webdevolutions.azureedge.net/docs/en/server/clip10403.png) 

## Settings 
### Database Configuration 
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
Activate the backup of the SQL database. 
		</td>
	</tr>
	<tr>
		<td>
Backup database file path 
		</td>
		<td>
The path to the folder where the backup of the SQL database will be saved.<br>

We recommend the use of a shared network folder with proper permissions set on it to be able to save the backup file.  

Note: As the backup command is running on the SQL Server and on the machine where {{ en.DVLS }} is hosted, this path must be accessible from both. We recommend configuring the database backup path using a UNC path.  

If a service account is set on the ***Scheduler Service*** , the account needs write permission on the destination folder.  
		</td>
	</tr>
</table>

### Web Configuration 
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
Activate the backup of the web application. 
		</td>
	</tr>
	<tr>
		<td>
Backup web file path 
		</td>
		<td>
The path to the folder where the backup of the web application will be saved.<br>

We recommend the use of a shared network folder with proper permissions set on it to be able to save the backup file.  

Note: If service accounts are set on the ***Scheduler Service*** and on the ***IIS Application Pool Identity*** , both accounts needs write permission on the destination folder. 
		</td>
	</tr>
</table>

### backup encryption Algorithm 
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
AES-256 encryption algorithm used to encrypt the backup if a backup password is set. 
		</td>
	</tr>
</table>

### notification 
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
Date and time when the backup will be automatically started. 
		</td>
	</tr>
	<tr>
		<td>
Repeat every 
		</td>
		<td>
The time interval between backups run. 
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
An SQL Server backup that is independent of the sequence of conventional SQL Server backups. For more information, please see [Copy-Only Backups](https://blog.devolutions.net/2020/08/why-you-should-never-use-zipcrypto/) topic from Microsoft. 
		</td>
	</tr>
</table>


