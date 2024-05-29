---
eleventyComputed:
  title: Data source initial troubleshooting
---
### The name of the data source is entered incorrectly
For those Data Source types that need a host name, please ensure it is typed correctly.

### The machine is unable to resolve the name of the data source host using DNS
For those Data Source types that need a host name, please ensure that the name you have provided does resolve by the DNS server which is linked to not only your current network connection, but all of the connections that you will use {{ en.RDM }} over.

In general, PING is a poor testing tool because the server may have been configured to ignore PING requests. Use NSLOOKUP to help identify the issue.

A common issue in a multi-domain environment is that you must use the Fully Qualified Domain Name (FQDN) of a server  to reach it.  (e.g. srvname.domain.locinstead of srvname)

Another common issue is that your DNS cache is corrupt, in that case you can open an elevated command prompt and use the following commands.

```
ipconfig /flushdns
ipconfig /registerdns
```

### Opening a VPN has disconnected the local LAN or rendered the Data Source unreachable
If the network administrator has deemed necessary to tunnel ALL traffic through the connection when a VPN is active, you will have to resort to using our [Offline](/rdm/windows/data-sources/offline-mode/) capabilities, ideally paired with our options to automatically Go offline on connection.

For a Web based VPN, ensure the routes are all valid, i.e. the path followed to reach the remote host is indeed going through the proper interface.

### An anti-virus or firewall is blocking the application
This may be hard to diagnose but sadly the support department can attest that it occurs quite often. Here are some items to monitor.

![!!KB2003](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2003.png)
If you are in a position to do so, it may help to TEMPORARILY disable the AV and the Firewall. You must make an informed decision as to the risk that is involved in your situation. Always enable all security features as soon as you have ascertained if that component was causing the issue.
