---
title: Ports and Firewalls
---
{{ en.DVLS }} in itself does not dictate which ports to use for any of the resources that it accesses. You must consult with your system administrator to ascertain which adjustments need to be made in order for the system to inter-operate with your infrastructure.

## Inbound

The only inbound port that is needed for {{ en.DVLS }} is for http or https communication, as per your preference. We strongly recommend using https even if only within your own network infrastructure. Although the default port is easily changed, it is typically port 443.

## Outbound

Two technologies are in play for proper operation of {{ en.DVLS }} : SQL Server, LDAP.

### SQL Server

Depending on the choice of Default Instance or Named Instance that was made during the installation, the SQL Server instance will listen on different ports.
Using SQL Server Configuration Manager, you can see the details in the Protocols section.  
![!!KB4315.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4315.png)  

In most cases, TCP/IP will be used for remote connections. You will be able to see what ports are in use. If you see that TCP Dynamic Ports are in play, they will change upon every restart of the SQL Server instance and therefore are not a good fit for a hardened installation.  
![!!KB4316.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4316.png)  

For more information please consult [SQL Server Configuration Manager on Technet](https://technet.microsoft.com/en-us/library/ms174212(v=sql.130).aspx)

### LDAP/LDAPS

As indicated in [LDAPS on Technet](http://social.technet.microsoft.com/wiki/contents/articles/2980.ldap-over-ssl-ldaps-certificate.aspx) , LDAP communications are by nature insecure under certain conditions:

```
By default, LDAP communications between client and server applications are not encrypted.
This means that it would be possible to use a network monitoring device or software and
view the communications travelling between LDAP client and server computers. This is especially
problematic when an LDAP simple bind is used because credentials (username and password) is
passed over the network unencrypted. This could quickly lead to the compromise of credentials.
```

Follow the instructions for your operating system in order to establish LDAPS. It will involve deploying certificates generated using your of Certification Authority (CA)

LDAP by default uses port 389. Even when you enable LDAPS, it may use plain LDAP therefore it needs to be disabled, please consult [Enforcing usage of LDAPS](/kb/devolutions-server/how-to-articles/enforcing-usage-ldaps/).

LDAPS by default uses port 636 for typical domains, but will use port 3269 when communicating with a Global Catalog Server (basically when you have a Forest). Your domain administrator should be able to provide you with details of your domain infrastructure, especially if custom ports were used. You can also use ldp.exe to perform connectivity tests.