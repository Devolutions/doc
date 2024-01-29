---
eleventyComputed:
  title: Configure a secure gateway
  description: The new jump integration will give you the possibility to jump through a DMZ zone directly to your server.
---
The new jump integration will give you the possibility to jump through a DMZ zone directly to your server. The requirement is an SSH server connected to your network and the DMZ.

## Configure the jump server

1. Create an SSH Tunnel entry by entering the SSH server information that we have to authenticate through for access to the DMZ zone (#1). Then in the Outgoing Tunnel Settings configure the Mode to Dynamic and the Source to 127.0.0.1 (#2).  
![!!KB4222](https://webdevolutions.azureedge.net/docs/en/kb/KB4222.png)  

1. A nice feature for Secure Gateway is keeping the Secure Gateway window hidden. To do go to the ***Advanced*** tab and check ***Hide when connection successful***.  
![!!KB4223](https://webdevolutions.azureedge.net/docs/en/kb/KB4223.png)  

The Jump server (Secure Gateway) is now configured and ready to use.  

## Configure the target machine session

We support ***RDP, SSH Shell, SFTP, FTP, SCP***, and ***Website*** (session entry) over the ***Secure Gateway*** feature.  

The configuration contains two steps: the first one is the general configuration, the second step is the Secure Gateway configuration. You will be able to repeat this second step for every additional session that uses the Secure Gateway.  

### General configuration

1. Configure the Host, Port, Username, Domain and Password that refer your RDP session (forget the old configuration, do not enter a localhost IP 127.0.0.1).  
![!!KB4224](https://webdevolutions.azureedge.net/docs/en/kb/KB4224.png)  

### Secure Gateway configuration

2. From there, go to ***VPN/SSH/Gateway*** for the ***Secure Gateway Configuration***.
    1. Select ***Open*** and ***Close*** options, based on the company requirement.
{type="a"}
    1. ***VPN Group*** can be configured as explained in [Configure VPN for multiple sessions](/kb/remote-desktop-manager/how-to-articles/configure-vpn-multiple-sessions/). We Strongly recommend configuring VPN Group if many RDP/Web Browser session uses the same Secure Gateway.
    1. For ***Type*** select ***Existing – SSH***.  
![!!KB4225](https://webdevolutions.azureedge.net/docs/en/kb/KB4225.png)
1. Under the ***Settings*** tab, select the SSH Secure Gateway entry and check ***Use over secure gateway***.  
![!!KB4226](https://webdevolutions.azureedge.net/docs/en/kb/KB4226.png)
1. The waiting time for the VPN session can be reduced by changing the Delay. The delay is set to 1 second below.  
![!!KB4227](https://webdevolutions.azureedge.net/docs/en/kb/KB4227.png)  

Both sessions are configured and you are ready to start the RDP session, everything else will be performed automatically by {{ en.RDM }}.
