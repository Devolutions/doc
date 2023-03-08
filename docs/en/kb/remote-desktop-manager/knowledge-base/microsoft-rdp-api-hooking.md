---
title: Microsoft RDP API Hooking
---
Since {{ en.RDM }} 2022.2, Microsoft RDP API hooking is available and enabled by default. API hooking is required to extend the functionality of the Microsoft RDP client in both embedded (ActiveX) and external modes (mstsc).  

If you have disabled it, you can enable it again by going in {{ en.RDM }} &#32; ***File – Options – Types – Remote Desktop – API Hooking*** and setting ***Enable API hooking*** to ***Enabled*** or ***Default***  

Restart {{ en.RDM }} to apply the change.  

![File - Options - Types - Remote Desktop - API hooking.png](/img/en/kb/KB4969.png)  

{% snippet icon.badgeInfo %}
Since {{ en.RDM }} 2022.3.23, a policy, EnableRDPHooking, has been added that overrides the ***Enable API hooking*** setting. If it is not configured (no registry key), the value from the {{ en.RDM }} option will be used. A value of &quot;0&quot; indicates that RDP hooking is disabled, while a value different than &quot;0&quot; indicates that RDP hooking is enabled. This enables the administrator to force either setting or allow the local configuration to be effective.  

See all policies including this one in our [GPO topic](/kb/remote-desktop-manager/how-to-articles/group-policies/)
{% endsnippet %}

The Microsoft RDP API hooking module will be loaded on the first Microsoft RDP connection. In the unlikely event that you notice instability with API hooking enabled, disable it and then contact the [Devolutions Customer Success team](mailto:service@devolutions.net) to report the issue.

### Microsoft RDP Logging

Microsoft RDP API hooking makes it possible to log internal events and options that were not possible previously. If you encounter issues, go to ***File – Options – Types – Remote Desktop – API Hooking*** and set the ***Log level*** to ***Debug*** Restart {{ en.RDM }} to obtain log files under %LocalAppData%\MsRdpEx which you can then send to the [Devolutions Customer Success team](mailto:service@devolutions.net) to help diagnose issues.

### Devolutions Gateway

Microsoft RDP API hooking should be enabled for Devolutions Gateway connections, as it fixes the server name used for validation by the RDP client. This can fix the Kerberos name mismatch issue, but it can also fix TLS certificate validation. This is particularly important for customers using the ***Force using IP address for RDP connections*** option, as it fixes the underlying issue:  

Once Microsoft RDP API hooking is enabled, the ***Force using IP address for RDP connections*** option should be disabled. In cases where the Kerberos name mismatch issue occurred, Kerberos should now work just fine.  

![KB4970.png](/img/en/kb/KB4970.png)

### RDP Fresh Credentials GPO

RDP API hooking fixes the issue where the RDP ***Always prompt for password upon connection*** group policy prevents credential injection from {{ en.RDM }} This group policy is intended to force mstsc.exe to prompt fresh credentials on every connection, but it has the unintended side effect of breaking credential injection. A workaround is applied through API hooking to make it work.
