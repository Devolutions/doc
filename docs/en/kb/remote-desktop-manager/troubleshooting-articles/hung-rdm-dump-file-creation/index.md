---
eleventyComputed:
  title: Hung {{ en.RDM }} dump file creation
  description: The following procedure makes use of a tool offered by Microsoft's Technet, namely the Sysinternals Suite.
---
{% snippet icon.shieldWarning %}
When sending a dump file, it is crucial that you exercise caution and ensure that the steps are followed correctly. Deviating from these instructions and sending a full dump file without the guidance of a Devolutions support specialist may result in unintended outcomes, including exposure of all the sensitive and personal data it contains.

Please read and understand our [Security disclaimer for sending a dump file](/kb/remote-desktop-manager/troubleshooting-articles/hung-rdm-dump-file-creation/security-disclaimer-sending-dump-file/) before proceeding.
{% endsnippet %}  

{% snippet icon.badgeInfo %}
There are no guarantees that we can identify the issue, but following this procedure may guide our team towards identifying the root cause.
{% endsnippet %}

The following procedure makes use of a tool offered by Microsoft's Technet, namely the [Sysinternals Suite](https://learn.microsoft.com/en-ca/sysinternals/downloads/). The tool that we need is ***Process Explorer***. It will monitor {{ en.RDM }} and allow the creation of a dump file.  

{% snippet icon.shieldInfo %}
The size of the dump file should not generally exceed 100 MB to 300 MB. Files larger than 1 GB are not mini-dumps and contain more information than necessary.
{% endsnippet %}

1. Download and install the [Sysinternals Suite](https://learn.microsoft.com/en-ca/sysinternals/downloads/) utilities.
1. From the installation folder, start the ***procexp64.exe*** or ***procexp.exe*** application.
1. Launch {{ en.RDM }}.
1. Replicate the steps that trigger the issue in {{ en.RDM }}.
1. In the ***Process Explorer***, right-click the ***RemoteDesktopManager.exe*** process.
   {% snippet icon.shieldWarning %}
   In the next step, make sure you create a minidump and **NOT** a full dump.
   {% endsnippet %}
1. Select ***Create Dump – Create Minidump***.  
   ![Create Dump – Create Minidump](https://webdevolutions.azureedge.net/docs/en/kb/KB2262.png)  
1. Save the ***RemoteDesktopManager.dmp*** file.
1. Contact our [support team](mailto:service@devolutions.net) in order for them to provide a secure link that can be used to send them this file.
