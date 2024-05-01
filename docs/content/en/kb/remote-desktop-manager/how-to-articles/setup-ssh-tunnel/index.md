---
eleventyComputed:
  title: Set up an SSH tunnel
---
SSH tunnelling is used to create an encrypted connection over an untrusted network. It consists of an encrypted tunnel created through an SSH protocol, providing secure connections for data transfer. The SSH Tunnel can be used to establish sort of a virtual private network (VPN) to access services across firewalls.

This is the procedure to establish a basic SSH Tunnel to reach a remote machine.
![!!KB4520](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4520.png)

## Create an SSH tunnel
To create an SSH tunnel, local connections through a specified port must be forwarded to an SSH server.

To create an SSH tunnel a given port of one machine needs to be forwarded to a port on the other machine which will be the other end of the tunnel. Once the SSH tunnel has been established, the user can connect to earlier specified port at first machine to access the network service.
* Create an ***SSH Tunnel*** entry.
![!!KB4521](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4521.png)
Set up the properties as follows:

### SSH server settings
| Option         | Description                                                                                     |
|----------------|-------------------------------------------------------------------------------------------------|
| Host           | Set the IP address of the SSH Server. (please refer to **1** in the Tunnel diagram)             |
| Port           | Set the port of the SSH Server. The default port is 22. (please refer to in the Tunnel diagram) |
| Set public key | Setup the public key                                                                            |
| Username       | Enter the SSH server username to connect.                                                       |
| Password       | Enter the SSH server password to connect.                                                       |

### Outgoing tunnel settings
| Option        | Description                                                                                             |
|---------------|---------------------------------------------------------------------------------------------------------|
| Mode          | Select between: Local, Remote or Dynamic                                                                |
| Local address | The local address must be left to 127.0.0.1. (please refer to 1 in the Tunnel diagram)                  |
| Local port    | In most cases leave the local port to its default value 3390. (please refer to ‚ in the Tunnel diagram) |
| Remote host   | Enter the host or IP address of your remote client. (please refer to … in the Tunnel diagram)           |
| Remote port   | Set the final port that you must reach, in most cases leave it to its default value 3389. (please refer to † in the Tunnel diagram) |

At this time, you can launch your entry to see if indeed the tunnel has been opened successfully. Close the session.

## Create your remote session
Create an RDP session.
![!!KB4522](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4522.png)

| Option   | Description                                                                            |
|----------|----------------------------------------------------------------------------------------|
| Host     | Enter your Local address which is 127.0.0.1. (please refer to 1 in the Tunnel diagram) |
| Port     | Enter your Local port which is 3390. (please refer to ‚ in the Tunnel diagram)         |
| RDP type | Leave the RDP type to Normal.                                                          |
| Username | Enter the username of your Remote Host.                                                |
| Domain   | Enter the domain of your Remote Host.                                                  |
| Password | Enter the password of your Remote Host.                                                |

In the ***VPN/SSH/Gateway*** side menu of your RDP session select ***Always connect*** in the ***Open*** field and ***Session*** in the ***Type*** field.
![!!KB4523](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4523.png)
In the VPN – Settings tab, click on the drop down list next to ***Session*** and select your ***SSH Tunnel*** entry previously created.
![!!KB4524](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4524.png)
You now have configured your session with the following rule: for each connection that comes on interface 127.0.0.1 and port 3390, forward that connection to the SSH server and request the server to forward that connection to your Remote host.

You can now launch your RDP session, your SSH Tunnel will open, establish the connection and then launch and open your RDP session.
![!!KB4525](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4525.png)
