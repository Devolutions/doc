---
title: WMI Troubleshooting
---
Here&apos;s a primer on remote WMI: [https://msdn.microsoft.com/en-us/library/aa389290.aspx](https://msdn.microsoft.com/en-us/library/aa389290.aspx)  

In our environment, we basically run winrm quickconfig on all our machines, for those not joined to a domain we also add them to the TrustedHosts list. For machines not joined to a domain, there&apos;s an added difficulty if you are using the IP address instead of the Host name, it definitely offers a few challenges.  

A good strategy is to get remoteWMI to work, then we integrate it in RDM. We like to use WMIC.  

[https://msdn.microsoft.com/en-us/library/aa394531(v=vs.85).aspx](https://msdn.microsoft.com/en-us/library/aa394531(v=vs.85).aspx)  

This is a lot of information to go over, please contact us at [service@devolutions.net](mailto:service@devolutions.net) for more assistance.
### Problem 1
Access denied error.
### Solution 1
Ensure the user account has the necessary permissions to access a computer remotely [Securing a Remote WMI Connection (Windows)](https://docs.microsoft.com/fr-fr/windows/win32/wmisdk/securing-a-remote-wmi-connection?redirectedfrom=MSDN#setting_dcom_security_to_allow_a_user_to_access_a_computer_remotely)  

You can also find troubleshoot tips in [WMI Troubleshooting (Windows)](https://docs.microsoft.com/en-us/windows/win32/wmisdk/wmi-troubleshooting?redirectedfrom=MSDN)
### Problem 2
Error getting products informations.
### Solution 2
Invalid Class WMI or WMI class not found on Windows Server 2003. On Windows Server 2003, Win32_Product is not enabled by default. You can enable it by following the steps provided in the link below:  

[https://social.msdn.microsoft.com/Forums/vstudio/en-US/6fb0d3ea-1ccf-4554-bdf1-79c9e24388af/invalid-class-wmi-windows-2003-server](https://social.msdn.microsoft.com/Forums/vstudio/en-US/6fb0d3ea-1ccf-4554-bdf1-79c9e24388af/invalid-class-wmi-windows-2003-server)
### Problem 3
Testing from a remote computer.
### Solution 3
The WMIC command is used to test if you have access to the machine through WMI. You need to enter the following command;  

`wmic /NODE:"ComputerName" bios get serialnumber`  

Below, an example with other credentials;  

`wmic /NODE:"ComputerName" /user:"username" /password:"password" bios get serialnumber`
### Problem 4
Load from inventory doesn&apos;t work. Error getting Bios information.
### Solution 4
This error can be many things please validate the following:  

* Sessions must be RDP.
* The station must be on the same domain.
* The credentials must be in the ***Tools*** section of the session and be accurate.
* Test the WMI requests directly from the station to see if the communication is working.
