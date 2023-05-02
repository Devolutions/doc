---
title: Logging
description: The Logging section allows the administrator to configure the logging features.
keywords:
- logging
---
The ***Logging*** section allows the administrator to configure the logging features.

![Administration – Server Settings – Logging](/img/en/server/ServerOp8040.png)

## Settings

### General

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
Log debug information 
		</td>
		<td>
Enable the {{ en.DVLS }} instance logs. When enabled, this will raise the debug level and provide more log entries. 
		</td>
	</tr>
	<tr>
		<td>
Language 
		</td>
		<td>
Choose the language of the logs. 
		</td>
	</tr>
	<tr>
		<td>
Scheduler log path 
		</td>
		<td>
Set the destination path of the log file. We recommend to set this path outside of the {{ en.DVLS }} web application folder. 
		</td>
	</tr>
</table>

### Syslog Server

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
Log to Syslog server 
		</td>
		<td>
Send the logs to a Syslog Server. 
		</td>
	</tr>
	<tr>
		<td>
Host 
		</td>
		<td>
Enter your Syslog Server host to connect. 
		</td>
	</tr>
	<tr>
		<td>
Port 
		</td>
		<td>
Enter your Syslog Server port to connect. 
		</td>
	</tr>
	<tr>
		<td>
Protocol 
		</td>
		<td>
Select your preferred Protocol mode between:  

* TCP 
* UDP 
		</td>
	</tr>
</table>

### Windows Event Log

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
Event Log 
		</td>
		<td>
Send the logs to Windows Event Log. 
		</td>
	</tr>
</table>

### Slack Integration

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
Post activity logs to Slack 
		</td>
		<td>
Post the logs in a Slack channel. 
		</td>
	</tr>
	<tr>
		<td>
Bot OAuth access token 
		</td>
		<td>
Slack authentication access token. 
		</td>
	</tr>
	<tr>
		<td>
Slack channel name 
		</td>
		<td>
Name of the Slack channel where the logs will be posted. 
		</td>
	</tr>
</table>
