---
eleventyComputed:
  title: Microsoft RDP Logoff Access Denied
---
Logoff access denied error or "unable to enumerate remote sessions".  

This error occurs when using **qwinsta.exe/rwinsta.exe** or WTSOpenServer Windows API function to access to a Windows XP SP2 PC.  

The same thing happens when trying to connect to a Windows XP SP2 using Terminal Services Manager from a Windows 2003 Server. This is because qwinsta.exe command calls WTS functions (WTSOpenServer, WTSEnumerateSessions, …), you will encounter the same error when using either the command or the API.  

## Solution

1. Ensure you have the correct credential.  

    Although you do not need to provide a username and a password when executing qwinsta.exe or WTSOpenServer, Windows uses its stored credentials automatically, just like accessing a shared folder.  

    The easiest way to confirm the credential is to use Explorer to access remote server’s C$ share. Also, you can use “net use” command.  

    For those who want to connect to a remote server programmatically using WTSOpenServer API, WNetAddConnection2 function should be enough to make sure you got a piece of credentials before calling WTSOpenServer function.  

    The users in the credentials need to have enough privilege on the remote server to carry out the operation.  

1. Open RPC ports on the firewall.  

    An API call involves connecting to a remote machine using RPC. In most cases, the RPC service is running and you can confirm that from the service management interface. To open RPC ports, enable File and Printer Sharing in the Windows Firewall setting. (Generally, if the RPC is blocked by the firewall on the remote machine, the error should be "1722 RPC server is unavailable" rather than "5 Access denied")  

1. Disable Force Guest log on.  

    You can change this option from either local security policy or registry.  

    Local security policy: run secpol.msc > Security Settings > Local Policies > Security Options > Network access: Sharing and security model for local accounts, and set to Classic.  

    Registry: find forceguest item in **HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Lsa**, and set it to 0.  

    Both methods are equivalent. If this option is set to 1, remote logging in user will be impersonated as Guest account (and if Guest account is disabled, login fails). Set it to 0 enables user logging in as themselves.  

1. If you still receive “access denied” and it only happens when the remote OS is Windows XP SP2, it is very likely akin to the following case:  

    To confirm, you need a packet sniffer such as Wireshark (a great freeware).  

    When you use a sniffer to capture the SMB packets, you can see the authentication is OK (NTLM if workstation, Kerberos if Windows 2003 domain), but the RPC gets nca_s_fault_access_denied (0×00000005) as error code.  

    This means the remote RPC component failed to execute the requested operation. It is because in Windows XP SP2, it is not allowed to operate on terminal service (Remote Desktop) through RPC by default. To modify this setting to enable Remote Desktop API through RPC, you need to find the following registry key:  

    **HKLM\SYSTEM\CurrentControlSet\Control\Terminal Server**  

    Then add a DWORD value named “AllowRemoteRPC” and change its value to 1.  
