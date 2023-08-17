---
title: Subscribers
---
At least one subscriber must exist to receive notifications about {{ en.DVLS }} activities.  

To create a new ***Subscriber***, click on the ***Add*** button.  

![Create a Subscriber](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8154.png)  

Fill in the information in the following fields. 

![Email Subscriber properties](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8155.png)  

![Syslog Server Subscriber properties](https://webdevolutions.azureedge.net/docs/en/server/ServerOP8156.png)  

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
Name 
		</td>
		<td>
Display of the Subscriber. 
		</td>
	</tr>
	<tr>
		<td>
Type 
		</td>
		<td>

* Email: The notification will be sent to an email address. 
	* Email Address: Valid email address. 
	* Recipient name: Email recipient name. 
* Syslog: The notification will be sent to a syslog server. 
	* Use default: Will use the Syslog server configuration set in <a href="/server/web-interface/administration/configuration/server-settings/general/logging/" target="_blank">Logging</a>. 
	* Host name: Host name of the Syslog server. 
	* Port: Port of the syslog server. 
	* Protocol: Protocol (TCP or UDP) to communicate with the Syslog server. 
		</td>
	</tr>
</table>


