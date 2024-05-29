---
eleventyComputed:
  title: Microsoft RDP memory and performance issues
  description: Microsoft RDP memory and performance issues
---
**You can only run a few RDP sessions at the same time in {{ en.RDM }} and you want to be able to open more sessions.**

The amount of consumed memory is dictated by the remote technology and, in the case of RDP, by the operating system (OS) of the remote host.

Windows 11 / Windows Server 2022 sessions do take upwards of 150 MB, whereas the previous versions would consume around half of that. This is something that we have no control over. You can look for large mrmory aware applications or use the 64-bit edition of {{ en.RDM }}.

**RDP session initiation is slow when using {{ en.RDM }} in a virtual environment.**

This problem is something that we have also experienced under those conditions (our testing environment is virtual and has minimal memory for each guest).

In the ***Experience*** tab of your RDP session, disable everything that is not used. A good method is to select the ***Modem connection speed***: this will disable all settings that are related to appearance. You can then turn on a single setting to see if it affects the performance negatively. Repeat until you find the combination that works best for you.

**You use RDP in embedded mode and the remote session is extremely slow to respond. The session loads fine, but when you get logged in the remote computer, it becomes unresponsive. Mouse clicks, keyboard presses, and application loading are extremely slow. In external mode, everything is running fine.**

1. Disable your anti-virus and test the connection to see if this make a difference.
    * If you use Trend Micro Business Security, add **RemoteDesktopManager.exe**, **RemoteDesktopManager64.exe**, and **Embedded32.exe** to the ***Process exception list*** under ***Preferences – Global settings*** and update the ***Trend client***.
    * If you use Symantec Norton Internet Security, ensure you allow {{ en.RDM }} to access the internet in the Program Rules.
1. Disable all settings in the ***Local resources*** tab.
1. Enable ***Disable display scaling*** on high DPI settings in the options.
1. Download and install Microsoft RDCMan to see if it is related to the RDP ActiveX. {{ en.RDM }} uses the same technology and this will ensure that your workstation does not have configuration issues.

**Connections fail for some hosts.**

There are known security updates that have broken connectivity to a host, but they have been fixed in ulterior patches. If you keep the hosts updated, then it must be something else.

Sometimes the mapping of local devices will cause issues. Disable all settings in the ***Local resources*** tab.

![!!KB4051](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4051.png)
