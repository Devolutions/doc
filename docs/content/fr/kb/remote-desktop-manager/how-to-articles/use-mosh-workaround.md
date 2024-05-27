---
eleventyComputed:
  title: Use Mosh in {{ en.RDM }} through WSL
  description: Mosh is very useful in scenarios of high latency and bad connectivity, as it will reconnect the session when the connection returns to normal, instead of dropping it
  keywords: 
  - WSL
  - Mosh
  - USP
---
Mosh is a UDP-based remote shell protocol that utilizes SSH infrastructure for authentication, making it safe to use. It is very useful in scenarios of high latency and bad connectivity, as it will reconnect the session when the connection returns to normal, instead of dropping it.
{% snippet, "badgeInfo" %}
Keep in mind that Mosh will take up about 3 GB of disk space and download a few hundred MB using the internet connection, as it is essentially a second operating system.
{% endsnippet %}  
{% snippet, "badgeInfo" %}
PowerShell should be run as an administrator for this solution.
{% endsnippet %}  

## Steps for installing Mosh
1. Open PowerShell.
1. Install WSL2 itself by using the `wsl --install` command.  
{% snippet, "badgeInfo" %}
WSL should now be available in the start menu. It is possible that a reboot is necessary after this install.
{% endsnippet %}  

3. Install Debian with `wsl --install -d debian`.  
{% snippet, "badgeInfo" %}
An assistant may ask you to create a user account during the installation. Debian should now be available in the start menu. It is possible that a reboot is necessary after this install.
{% endsnippet %}  

4. Download all available software update by using `wsl sudo apt update`.
1. The WSL image may be outdated and contain outdated software. Input `wsl sudo apt full-upgrade`.
1. Install mosh with `wsl sudo apt install mosh`.

Once Mosh is installed, it can be used with the usual command and adding `wsl` in front (e.g., `wsl mosh user@server.example.com`).

### Mosh integration in {{ en.RDM }} (>=2023)
1. Create a ***Windows Terminal*** entry, which is under ***New Entry*** – ***Miscellaneous***.
1. Make certain the ***Display*** option is set to ***Embedded (tabbed)***.
1. Use the above-mentionned `wsl mosh user@server.example.com` command in the ***Run*** field.
1. Click ***OK*** to save and close the window.  
{% snippet, "badgeInfo" %}
Windows 11 users should already have Windows Terminal preinstalled, but Windows 10 users may need to download it through the [Microsoft Store](https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701).
{% endsnippet %}

### Mosh integration in {{ en.RDM }} (<=2022)
Though recommended to update to {{ en.RDM }} 2023, this method can be used to attempt to make the workaround function with {{ en.RDM }} 2022.
1. Create a ***Command Line (External Application)*** entry, which is located  under ***New Entry*** – ***Miscellaneous***.
1. The ***Display*** option must be set to ***Embedded (tabbed)***.
1. Input **C:\Program Files\WindowsApps\Microsoft.WindowsTerminal_1.16.10262.0_x64__8wekyb3d8bbwe\WindowsTerminal.exe** into the ***Run*** field.
1. Input **C:\Windows\system32\wsl.exe -d Debian mosh user@myserver.example.com** into the ***Arguments*** field. It is recommended to check the paths to make sure they are accurate in the particular environment.
1. Click ***OK*** to save and close the window.  
{% snippet, "badgeInfo" %}
It is possible that an update to {{ en.RDM }} 2023 will be needed to make this integration work properly.
{% endsnippet %}

### Tips and tricks
WSL2 does not support IPv6, only IPv4, but it is possible to change it back to WSL1 by using the following command: `wsl --set-version Debian 1`.

{% snippet, "badgeInfo" %}
Using Mosh through the additional WSL layer may cause authentication limitations; however there is a [workaround](https://forum.devolutions.net/topics/37256/support-for-mosh#175076).
{% endsnippet %}
