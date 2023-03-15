---
title: Data Source Initial Troubleshooting
---
### The name of the Data Source is entered incorrectly
For those Data Source types that need a host name, please ensure it is typed correctly.
### The Machine is unable to resolve the name of the Data Source host using DNS
For those Data Source types that need a host name, please ensure that the name you have provided does resolve by the DNS server which is linked to not only your current network connection, but all of the connections that you will use Remote Desktop Manager over.  

In general, PING is a poor testing tool because the server may have been configured to ignore PING requests. Use NSLOOKUP to help identify the issue.  

A common issue in a multi-domain environment is that you must use the Fully Qualified Domain Name (FQDN) of a server in order to reach it.  (e.g. srvname.domain.locinstead of srvname)  

Another common issue is that your DNS cache is corrupt, in that case you can open an elevated command prompt and use the following commands.  

```
ipconfig /flushdns  
ipconfig /registerdns
```
### Opening a VPN has disconnected the Local LAN or rendered the Data Source unreachable
If the network administrator has deemed necessary to tunnel ALL traffic through the connection when a VPN is active, you will have to resort to using our [Offline](https://helprdm.devolutions.net/datasource_offline.htm) capabilities, ideally paired with our options to automatically Go offline on connection.  

For a Web based VPN, ensure the routes are all valid, i.e. the path followed to reach the remote host is indeed going through the proper interface.
### An Anti-Virus or Firewall is blocking the application
This may be hard to diagnose but sadly the support department can attest that it occurs quite often. Here are some items to monitor.  

![KB2003.png](/img/en/kb/KB2003.png)
If you are in a position to do so, it may help to TEMPORARILY disable the AV and the Firewall. You must make an informed decision as to the risk that is involved in your situation. Always enable all security features as soon as you have ascertained if that component was causing the issue.
