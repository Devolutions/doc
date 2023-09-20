---
  title: Net Runtime optimization service issues
---
Some user will have an issue on Windows 7 with {{ en.RDM }} and receive the following error message:  

.NET Runtime Optimization Service (clr_optimization_v4.0.30319_64) - 1>Failed to compile: C:\Program Files (x86)\Devolutions\Remote Desktop Manager Free\Embedded32.exe Error code = 0x80131f07
## Solution 1
If possible, update your Windows 7 version. Microsoft 7 SP1 does supportNET 4.8 but the [Extended Security Updates (ESU)](https://docs.microsoft.com/en-us/troubleshoot/windows-client/windows-7-eos-faq/windows-7-extended-security-updates-faq) from Windows end date is January 2023.
## Solution 2
Use the compatibility mode as a workaround.  

1. Right click {{ en.RDM }} shortcut.
1. Select ***Properties*** from the context menu.
1. Click the ***Compatibility*** tab.
1. Check ***Run this program in compatibility mode for***.
1. Select the version of Windows in the drop down menu.
1. Click ***OK***.  
![!!KB4922](https://webdevolutions.azureedge.net/docs/en/kb/KB4922.png)
