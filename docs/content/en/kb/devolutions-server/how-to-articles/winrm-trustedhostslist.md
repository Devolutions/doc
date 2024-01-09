---
eleventyComputed:
  title: WinRM and trusted hosts list
  description: This guide provides steps to enable WinRM and add the remote machine's names in the Trusted Hosts list on the server where {{ en.DVLS }} is hosted.
---
This guide provides steps to enable WinRM and add the remote machine's names in the Trusted Hosts list on the server where {{ en.DVLS }} is hosted.

{% snippet icon.badgeInfo %}
WinRM transport ports are **5985 for HTTP** and **5986 for HTTPS**.
{% endsnippet %}

1. Ensure that WinRM is enabled on the remote machine where the local accounts are located. The **winrm quickconfig** command can be used to enable WinRM. For further details please see [Enable Windows Remote Shell](https://docs.microsoft.com/en-us/troubleshoot/windows-server/remote/how-to-enable-windows-remote-shell) and [Installation and configuration for Windows Remote Management](https://learn.microsoft.com/en-us/windows/win32/winrm/installation-and-configuration-for-windows-remote-management).
1. Ensure to add the remote machine's name in the trusted hosts list of the machine where {{ en.DVLS }} is hosted.
    1. To add all remote hosts, the PowerShell command is: __Set-Item WSMan:localhost\client\trustedhosts -value *__
{type="a"}
    1. To add all remote hosts from a specific domain to the trusted host list: __Set-Item WSMan:\localhost\Client\TrustedHosts *.yourdomain.local__
    1. To add one single host to the existing trusted host list: **Set-Item WSMan:\localhost\Client\TrustedHosts host.yourdomain.local -Concatenate**
