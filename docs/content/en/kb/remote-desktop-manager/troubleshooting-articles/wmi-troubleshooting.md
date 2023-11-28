---
eleventyComputed:
  title: WMI troubleshooting
  description: In our environment, we basically run winrm quickconfig on all our machines. For those not joined to a domain, we also add them to the TrustedHosts list. For machines not joined to a domain, there is an added difficulty. If you are using the IP address instead of the host name, it definitely offers a few challenges.
---
{% snippet icon.badgeInfo %}
Note that remote tools in RDP sessions will not work in {{ en.RDM }} if you do not have WMI. Consult this [guide on remote WMI](https://msdn.microsoft.com/en-us/library/aa389290.aspx).
{% endsnippet %}  

In our environment, we basically run winrm quickconfig on all our machines. For those not joined to a domain, we also add them to the TrustedHosts list. For machines not joined to a domain, there is an added difficulty. If you are using the IP address instead of the host name, it definitely offers a few challenges.  

A good strategy is to get remoteWMI to work, then integrate it in {{ en.RDM }}. We like to use [WMIC](https://msdn.microsoft.com/en-us/library/aa394531(v=vs.85).aspx).

{% snippet icon.badgeHelp %}
Please contact us at [service@devolutions.net](mailto:service@devolutions.net) for more assistance.
{% endsnippet %}  

## Problem 1
Access denied error.
### Solution
Make sure that the user account has the necessary permissions to access a computer remotely. See [Securing a Remote WMI Connection (Windows)](https://docs.microsoft.com/fr-fr/windows/win32/wmisdk/securing-a-remote-wmi-connection?redirectedfrom=MSDN#setting_dcom_security_to_allow_a_user_to_access_a_computer_remotely).  

You can also find troubleshoot tips in [WMI Troubleshooting (Windows)](https://docs.microsoft.com/en-us/windows/win32/wmisdk/wmi-troubleshooting?redirectedfrom=MSDN).
## Problem 2
Error getting products informations.
### Solution
Invalid Class WMI or WMI class not found on Windows Server 2003. On Windows Server 2003, Win32_Product is not enabled by default. You can enable it by following the steps provided in this [Microsoft Forum](https://social.msdn.microsoft.com/Forums/vstudio/en-US/6fb0d3ea-1ccf-4554-bdf1-79c9e24388af/invalid-class-wmi-windows-2003-server).  

## Problem 3
Testing from a remote computer.
### Solution
The WMIC command is used to test if you have access to the machine through WMI. You need to enter the following command:  

`wmic /NODE:"ComputerName" bios get serialnumber`  

Below is an example with other credentials:  

`wmic /NODE:"ComputerName" /user:"username" /password:"password" bios get serialnumber`
## Problem 4
Load from System Information does not work. Error getting Bios information.
### Solution
This error can have several origins. Please validate the following:  

* Sessions must be RDP.
* The station must be on the same domain.
* The credentials must be in the ***Tools*** section of the session and be accurate.
* Test the WMI requests directly from the station to see if the communication is working.
