---
title: SQL Server performance troubleshooting
---
Whenever the performance of queries against SQL Server decreases, check the following:
### Size of database files
If your transaction log file is enormous, it may be that the recovery model of the database is set to FULL, which means that it requires regular backups in order to clean up past transactions.  

You can confirm this is in the properties of the database itself.  

The most urgent step is to perform a full backup of the database.  

Run the following statement against the database:  

***exec sp_spaceused***
### VPN
If you work through a VPN, your firewall might see this connection like UDP flood and think it is under attack. Resulting in slowing everything considerately.  

As a workaround you can set the VPN in an exclusion.
