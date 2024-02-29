---
eleventyComputed:
  title: Run {{ en.RDM }} under application verifier
  description: The Microsoft Remote Destop Protocol (MSRDP) loads a lot of systems and third-party codes when it runs; and a misbehaving or buggy driver or module can cause crashes and other weird behaviour inside the Microsoft Terminal Services Client (MSTSC). When this happens in {{ en.RDM }}, it causes the application to crash.
---
Microsoft Remote Destop Protocol (MSRDP) loads a lot of systems and third-party codes when it runs; and a misbehaving or buggy driver or module can cause crashes and other weird behaviour inside Microsoft Terminal Services Client (MSTSC). When this happens in {{ en.RDM }}, it causes the application to crash.

## Solution

Some issues can be found using Microsoft's [Application Verifier](https://learn.microsoft.com/en-us/windows-hardware/drivers/devtest/application-verifier), which is "a runtime verification tool for unmanaged code that assists in finding subtle programming errors, security issues and limited user account privilege problems that can be difficult to identify with normal application testing techniques".

### Install and configure Application Verifier

Follow the instructions below to obtain the information you need to send to our support team.

1. Download the [Windows Software Development Kit (SDK) installer](https://developer.microsoft.com/en-us/windows/downloads/windows-sdk/).
1. Run the installer. When asked to select the features to install, check the ***Application Verifier For Windows***, then continue the installation process.
![Application Verifier For Windows](https://cdnweb.devolutions.net/docs/en/kb/KB2248.png)
1. Once the installation is complete, open Application Verifier.
1. Go to ***File – Add Application*** or use the <kbd>Ctrl</kbd>+<kbd>A</kbd> shortcut.
![File – Add Application](https://cdnweb.devolutions.net/docs/en/kb/KB2249.png)
1. In the file chooser, select the {{ en.RDM }} application (**C:\Program Files\Devolutions\Remote Desktop Manager\RemoteDesktopManager.exe**). It will be added to the ***Applications*** list on the left.
![RemoteDesktopManager.exe](https://cdnweb.devolutions.net/docs/en/kb/KB2250.png)
1. Select **RemoteDesktopManager.exe** in the ***Applications*** list, then under ***Tests***, ensure that all check boxes under ***Basics*** are selected.
![Basics](https://cdnweb.devolutions.net/docs/en/kb/KB2251.png)
1. Click ***Save***. You can close Application Verifier after the configuration is done.

### Information to send to our support team

The user who encounters the problems can now run {{ en.RDM }} and use it as usual until they encounter a crash. Once it happens, send at [service@devolutions.net](mailto:service@devolutions.net) these two pieces of information:
* Did it crash "as usual" or was the dialog different than normal? It is possible the system might report the crash in a different way (for example, by asking to attach a debugger).
* Back in Application Verifier, go to ***View – Logs***. Find the log corresponding to the crashed run, select it, then save it on your computer to later send it to our support team. If applicable, also send us other logs that contain errors.
