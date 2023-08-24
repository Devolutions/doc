---
title: Microsoft VPN
---
These types of VPNs can use either the RASDIAL or RASPHONE applications for establishing the connection. Please consult Microsoft's article on their differences and usage.  

You can refer to this Microsoft TechNet article for more information on RASDIAL: [https://technet.microsoft.com/en-us/library/bb490979.aspx](https://technet.microsoft.com/en-us/library/bb490979.aspx)  

Sometimes you need to accept a message or make a choice upon first use, but that typically occurs only the first time. This makes running the command manually once mandatory on all machines.  

If you have elected to store the PBK in {{ en.RDM }}, we extract it to %TMP%\RDM upon usage. After trying to establish a connection once, you should see your phone book in that folder.  

By default, it uses RASDIAL, what happens if you run the following at the command prompt?  

`rasdial <connectionname> <username> <password> /phonebook:<phonebookpath>`  

or if the Use rasphone (ConnectionManager Administrator Kit) option is checked, it will use RASPHONE.  

What happens if you run the following at the command prompt?  

`rasphone -d <connectionname> -f <phonebookpath>`  

## Problem 1

Remote access error 623.  

![!!KB4079.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4079.png)
### Solution

Ensure that within the phonebook, the vpn definition name does contain a space character.

## Problem 2

Password with quotation marks.

### Solution

Quotation mark (") is not a valid character and should not be used in the password of a Microsoft VPN entry.
