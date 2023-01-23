---
title: Setup an SSH Tunnel
---
# {{ en.TOPICTITLE }}
SSH tunnelling is used to create an encrypted connection over an untrusted network. It consists of an encrypted tunnel created through an SSH protocol, providing secure connections for data transfer. The SSH Tunnel can be used to establish sort of a virtual private network (VPN) to access services across firewalls.  

This is the procedure to establish a basic SSH Tunnel to reach a remote machine.  
![KB4520.png](/img/en/kb/KB4520.png)
## Create an SSH Tunnel
To create an SSH tunnel, local connections through a specified port must be forwarded to an SSH server.  

To create an SSH tunnel a given port of one machine needs to be forwarded to a port on the other machine which will be the other end of the tunnel. Once the SSH tunnel has been established, the user can connect to earlier specified port at first machine to access the network service.
1. Create an ***SSH Tunnel*** entry.  
![KB4521.png](/img/en/kb/KB4521.png)  
Set up the properties as follows:
### SSH Server Settings
<table>
	<tr>
		<th>
OPTION
		</th>
		<th>
DESCRIPTION
		</th>
	</tr>
	<tr>
		<td>
Host
		</td>
		<td>
Set the IP address of the SSH Server. (please refer to <b>1</b> in the Tunnel diagram)
		</td>
	</tr>
	<tr>
		<td>
Port
		</td>
		<td>
Set the port of the SSH Server. The default port is 22. (please refer to in the Tunnel diagram)
		</td>
	</tr>
	<tr>
		<td>
Set public key
		</td>
		<td>
Setup the public key
		</td>
	</tr>
	<tr>
		<td>
Username
		</td>
		<td>
Enter the SSH server username to connect.
		</td>
	</tr>
	<tr>
		<td>
Password
		</td>
		<td>
Enter the SSH server password to connect.
		</td>
	</tr>
</table>

### Outgoing Tunnel Settings
<table>
	<tr>
		<th>
OPTION
		</th>
		<th>
DESCRIPTION
		</th>
	</tr>
	<tr>
		<td>
Mode
		</td>
		<td>
Select between: Local , Remote or Dynamic
		</td>
	</tr>
	<tr>
		<td>
Local address
		</td>
		<td>
The local address must be left to 127.0.0.1. (please refer to 1 in the Tunnel diagram)
		</td>
	</tr>
	<tr>
		<td>
Local port
		</td>
		<td>
In most cases leave the local port to its default value 3390. (please refer to ‚ in the Tunnel diagram)
		</td>
	</tr>
	<tr>
		<td>
Remote host
		</td>
		<td>
Enter the host or IP address of your remote client. (please refer to … in the Tunnel diagram)
		</td>
	</tr>
	<tr>
		<td>
Remote port
		</td>
		<td>
Set the final port that you must reach, in most cases leave it to its default value 3389. (please refer to † in the Tunnel diagram)
		</td>
	</tr>
</table>

At this time, you can launch your entry to see if indeed the tunnel has been opened successfully. Close the session.
## Create your remote session
Create an RDP session.  
![KB4522.png](/img/en/kb/KB4522.png)
<table>
	<tr>
		<th>
OPTION
		</th>
		<th>
DESCRIPTION
		</th>
	</tr>
	<tr>
		<td>
Host
		</td>
		<td>
Enter your Local address which is 127.0.0.1. (please refer to 1 in the Tunnel diagram)
		</td>
	</tr>
	<tr>
		<td>
Port
		</td>
		<td>
Enter your Local port which is 3390. (please refer to ‚ in the Tunnel diagram)
		</td>
	</tr>
	<tr>
		<td>
RDP type
		</td>
		<td>
Leave the RDP type to Normal.
		</td>
	</tr>
	<tr>
		<td>
Username
		</td>
		<td>
Enter the username of your Remote Host.
		</td>
	</tr>
	<tr>
		<td>
Domain
		</td>
		<td>
Enter the domain of your Remote Host.
		</td>
	</tr>
	<tr>
		<td>
Password
		</td>
		<td>
Enter the password of your Remote Host.
		</td>
	</tr>
</table>

In the ***VPN/SSH/Gateway*** side menu of your RDP session select ***Always connect*** in the ***Open*** field and ***Session*** in the ***Type*** field.  
![KB4523.png](/img/en/kb/KB4523.png)  
In the VPN ***–*** Settings tab, click on the drop down list next to ***Session*** and select your ***SSH Tunnel*** entry previously created.  
![KB4524.png](/img/en/kb/KB4524.png)  
You now have configured your session with the following rule: for each connection that comes on interface 127.0.0.1 and port 3390, forward that connection to the SSH server and request the server to forward that connection to your Remote host.  

You can now launch your RDP session, your SSH Tunnel will open, establish the connection and then launch and open your RDP session.  
![KB4525.png](/img/en/kb/KB4525.png)
