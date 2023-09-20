---
eleventyComputed:
  title: Advanced Settings
---
The ***Advanced Settings*** contains advanced parameters that are used for the SQL database connection string. 

![Advanced Settings Dialog](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8003.png) 

## Settings 
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
Use SQL Server encrypted connection 
		</td>
		<td>
Use SSL to encrypt communication with the database. 
		</td>
	</tr>
	<tr>
		<td>
Trust server certificate 
		</td>
		<td>
Always trust the server certificate. 
		</td>
	</tr>
	<tr>
		<td>
Failover partner 
		</td>
		<td>
The name of the failover partner server if database mirroring is configured. This is used only for the initial connection as the principal server will return a name which will replace the configured value when different. 
		</td>
	</tr>
	<tr>
		<td>
Connection minimum pool size 
		</td>
		<td>
The minimum number of connections that are allowed in the pool. 
		</td>
	</tr>
	<tr>
		<td>
Connection maximum pool size 
		</td>
		<td>
The maximum number of connections that are allowed in the pool. 
		</td>
	</tr>
	<tr>
		<td>
Connection retry count 
		</td>
		<td>
Controls the number of reconnection attempts after the client identifies an idle connection failure. Valid values are 0 to 255. The default is 1 and 0 means do not attempt to reconnect. 
		</td>
	</tr>
	<tr>
		<td>
Connection retry interval 
		</td>
		<td>
Specifies the time between each connection retry attempt (ConnectRetryCount). Valid values are 1 to 60 seconds (the default is 10), applied after the first reconnection attempt. When a broken connection is detected, the client immediately attempts to reconnect; this is the first reconnection attempt and only occurs if ConnectRetryCount is greater than 0. If the first reconnection attempt fails and ConnectRetryCount is greater than 1, the client waits ConnectRetryInterval to try the second and subsequent reconnection attempts. 
		</td>
	</tr>
	<tr>
		<td>
Connection timeout 
		</td>
		<td>
The length of time (in seconds) to wait for a connection to the server before terminating the attempt and generating an error. 
		</td>
	</tr>
</table>

## More Settings 

The ***More Settings*** button, in the ***Advanced Settings*** section, contains more advanced parameters that can be edited to replace a missing parameter. Double click a ***Setting Name*** to enter edit mode. 

![More Settings](https://webdevolutions.azureedge.net/docs/en/server/ServerOp4089.png) 