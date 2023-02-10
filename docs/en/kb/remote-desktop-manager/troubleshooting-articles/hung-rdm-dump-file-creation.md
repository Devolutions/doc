---
title: Hung RDM Dump File Creation
---
{% snippet icon.badgeCaution %}
Follow this procedure ONLY when guided by a Devolutions support specialist.
{% endsnippet %}  
{% snippet icon.badgeInfo %}
There are no guarantees that we can identify the issue, but following this procedure may guide Devolutions towards identifying the root cause.
{% endsnippet %}

The following procedure makes use of a tool offered by Microsoft&apos;s Technet, namely the [Sysinternals Suite](https://learn.microsoft.com/en-ca/sysinternals/downloads/) The tool that we need is ***Process Explorer*** It will monitor {{ en.RDM }} and allow to create a dump file.  

1. Download and install the [Sysinternals Suite](https://learn.microsoft.com/en-ca/sysinternals/downloads/) utilities.
1. From the installation folder start the application procexp64.exe or procexp.exe
1. Launch {{ en.RDM }}
1. Replicate the steps that trigger the issue in RDM.
1. In the ***Process Explorer*** right-click the RemoteDesktopManager.exe process.
1. Select ***Create Dump - Create Minidump***
1. Save the RemoteDesktopManager.dmp file.
1. Contact our [Support team](mailto:service@devolutions.net) in order for them to provide a secure link that can be used to send this file.
