---
  title: Security
  order: 20
---
The Security section allows the administrator to configure the allowed and denied IPs addresses.  

![Administration – {{ en.DVLS }} Settings – Security](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8045.png) 

## Settings 
### IP 
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
Allowed Single IPs 
		</td>
		<td>
If you wish to restrain the access to the {{ en.DVLS }} to only certain IPs address enter those here. If nothing is entered in this field all IPs address will be allowed to connect to the {{ en.DVLS }}. 
		</td>
	</tr>
	<tr>
		<td>
Allowed Masked IPs 
		</td>
		<td>
If you wish to restrain the access to only certain Masked IPs (dividing the host part of an IP address into a subnet and host address) on the {{ en.DVLS }}, enter those Masked IP address here. The CIDR format is not supported, for example 10.10.10.0/24, please use: 10.10.10.0;255.255.255.0 
		</td>
	</tr>
	<tr>
		<td>
Denied Single IPs 
		</td>
		<td>
If you wish to deny access to the server from certain IPs address enter those in this field. 
		</td>
	</tr>
	<tr>
		<td>
Denied Masked IPs 
		</td>
		<td>
If you wish to deny access to the server from certain Masked IPs address (dividing the host part of an IP address into a subnet and host address) enter those in this field. 
		</td>
	</tr>
	<tr>
		<td>
Force token public IP validation 
		</td>
		<td>
		</td>
	</tr>
	<tr>
		<td>
Use X-Forwarded-For 
		</td>
		<td>
Enable the usage of X-Forwarded-For header for <a href="/kb/devolutions-server/knowledge-base/deploy-high-availability-load-balanced-env/" target="_blank">Deploy in an High Availability or Load Balanced Environment</a>. 
		</td>
	</tr>
	<tr>
		<td>
Block Tor clients 
		</td>
		<td>
Block incoming traffic from TOR clients. 
		</td>
	</tr>
</table>

### Auto Lock 
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
Enabled auto lock 
		</td>
		<td>
Automatically locks down the access to the Server after a predetermine number of failed attempt. 
		</td>
	</tr>
	<tr>
		<td>
Attempt Count 
		</td>
		<td>
Enter the number of failed attempts before locking down the Server. 
		</td>
	</tr>
</table>
