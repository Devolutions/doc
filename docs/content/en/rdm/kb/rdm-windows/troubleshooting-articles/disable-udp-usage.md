---
eleventyComputed:
  title: Disable UDP usage in {{ en.RDM }}
  description: Disabling UDP usage can sometimes resolve issues, notably those related to {{ en.RDM }} hanging during the log-off process of an RDP session.
---
Disabling UDP usage can sometimes resolve issues, notably those related to {{ en.RDM }} hanging during the log-off process of an RDP session. You can disable it [via {{ en.RDM }}](#disable-udp-usage-via-remote-desktop-manager) or [via the registry](#disable-udp-usage-via-the-registry).

## Disable UDP usage via {{ en.RDM }}

### On all sessions
1. Run {{ en.RDM }} as an administrator.
1. In the ribbon, go to ***Tools – More tools***.
![Tools – More tools](https://cdnweb.devolutions.net/docs/RDMW2060_2024_2.png)
1. Select the ***Local RDP/RemoteApp Manager*** from the tools list.
![Local RDP/RemoteApp Manager](https://cdnweb.devolutions.net/docs/RDMW2061_2024_2.png)
1. Disable UDP settings.
![Disable UDP settings](https://cdnweb.devolutions.net/docs/RDMW2062_2024_2.png)

### On a per-session basis
1. In {{ en.RDM }}, first ensure RDP API hooking is enabled in ***File – Settings – Types – Sessions – Remote Desktop (RDP) – Enable API hooking***. Save your changes if applicable.
![File – Settings – Types – Sessions – Remote Desktop (RDP) – Enable API hooking](https://cdnweb.devolutions.net/docs/RDMW2063_2024_2.png)
1. Select your RDP entry and go to its properties.
![RDP entry properties](https://cdnweb.devolutions.net/docs/RDMW2058_2024_2.png)
1. In the ***General*** section, go to the ***Advanced*** tab and set ***Disable UDP transport*** to ***Yes***.
![General – Advanced – Disable UDP transport](https://cdnweb.devolutions.net/docs/RDMW2064_2024_2.png)
1. Click ***Update*** to save your changes.

## Disable UDP usage via the registry on the client workstation
1. In the Registry Editor, navigate to **HKLM\SOFTWARE\Policies\Microsoft\Windows NT\Terminal Services\Client**.
1. Create a DWORD named ***fClientDisableUDP*** and assign it a value of ***1***.

Consult this Microsoft support article for more information: [Windows registry information for advanced users](https://support.microsoft.com/en-us/help/256986/windows-registry-information-for-advanced-users).