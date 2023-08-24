---
title: Microsoft RDP remote computer requires authentication
---
The connection cannot proceed because authentication is not enabled and the remote computer requires that authentication be enabled to connect.

## Solution

This error occurs when you try to establish a remote connection from a Windows Server 2008R1 to a Windows Server 2016.  

In modern versions of Windows, like Windows 10 or Windows Server 2016, the RDP defaults have changed. The default for the ***Security Layer*** has changed from 0 to 2.

### Option 1

In the RDP session check mark ***Activate network level authentication*** than ***OK***.  

![!!KB4057.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4057.png)
### Option 2

In the Windows Server 2016:  

1. Open the registry (regedit.exe)
1. Navigate to:  

**HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\TerminalServer\WinStations\RDP-Tcp**  

3. Change the SecurityLayer to 0.
