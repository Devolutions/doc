---
title: Create Windows Users Provider
---
# {{ en.TOPICTITLE }}  
{% snippet icon.badgeInfo %}
The Scheduler service must be installed and running to use this feature.
{% endsnippet %}  

This guide provides steps to create a Windows users provider to manage Windows local accounts in the PAM module of {{ en.DPS }}
## Steps
1. Ensure that WinRM is enabled on the remote machine where the local accounts are located. The command winrm quickconfig can be used to enable WinRM. Please see this Microsoft article about it. [https://docs.microsoft.com/en-us/troubleshoot/windows-server/remote/how-to-enable-windows-remote-shell](https://docs.microsoft.com/en-us/troubleshoot/windows-server/remote/how-to-enable-windows-remote-shell)
1. Ensure to add the remote machine&apos;s name in the trusted hosts list of the machine where {{ en.DPS }} is hosted.
    * To add all remote hosts, the PowerShell command is : Set-Item WSMan:localhost\client\trustedhosts -value *
    * To add all remote hosts from a specific domain to the trusted host list : Set-Item WSMan:\localhost\Client\TrustedHosts *.yourdomain.local
    * To add one single host to the existing trusted host list : Set-Item WSMan:\localhost\Client\TrustedHosts host.yourdomain.local -Concatenate
1. Create a local account on the remote host that will be managed by the PAM module as a privileged account. The local accounts must have the User cannot change password option enabled to avoid problems with the synchronization of the password in the Privileged Access module. If this account needs to have administrative rights, then add it to the local Administrators group.
![Local Account propreties.png](/img/en/kb/kb8086.png)
1. Go in Privileged Access - Providers on the {{ en.DPS }} web interface to add a Windows users provider.
![Windows user provider.png](/img/en/kb/kb8085.png)
1. Set the Name of the provider; Set the Computer name and Domain information of the remote host in the Host section; Set the Username and Password values for the provider account in the Credentials section. This account must have proper administrative rights on the host to manage local user accounts. In this sample, david<area>@windjammer.loc is a domain account that is a member of the local Administrators group of the remote host.
![Windows user provider settings.png](/img/en/kb/kb8087.png)
1. With the Add Scan Configuration option enabled, create the scan configuration to scan for local accounts. The built-in Administrator account cannot be managed by the Privileged Access module because of the option mentioned in step 3 above that cannot be enabled.  
![KB8088.png](/img/en/kb/KB8088.png)
1. Once the scan is completed, a list of accounts is available. Click on the Eye button to see the discovered accounts.  
![KB8089.png](/img/en/kb/KB8089.png)
1. Select the account that will be managed and click on the Import Selected Accounts button.  
![KB8090.png](/img/en/kb/KB8090.png)
1. Select the folder where the account will be located in Privileged Access - Accounts page.  
![KB8091.png](/img/en/kb/KB8091.png)
1. On success, this prompt box should be displayed on the top right corner.  
![KB8092.png](/img/en/kb/KB8092.png)
1. The account is now available in the folder.  
![KB8093.png](/img/en/kb/KB8093.png)
