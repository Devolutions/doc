---
title: WinRM and Trusted Hosts List
---

This guide provides steps to enable WinRM and add the remote machine's names in the Trusted Hosts list on the server where {{ en.DVLS }} is hosted.

## Steps

1. Ensure that WinRM is enabled on the remote machine where the local accounts are located. The **winrm quickconfig** command can be used to enable WinRM. For further details please see [How to enable Windows Remote Shell](https://docs.microsoft.com/en-us/troubleshoot/windows-server/remote/how-to-enable-windows-remote-shell)
1. Ensure to add the remote machine's name in the trusted hosts list of the machine where {{ en.DVLS }} is hosted.
   1. To add all remote hosts, the PowerShell command is: __Set-Item WSMan:localhost\client\trustedhosts -value *__
   1. To add all remote hosts from a specific domain to the trusted host list: __Set-Item WSMan:\localhost\Client\TrustedHosts *.yourdomain.local__
   1. To add one single host to the existing trusted host list: **Set-Item WSMan:\localhost\Client\TrustedHosts host.yourdomain.local -Concatenate**
   {type="a"}