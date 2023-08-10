---
title: SSH Shell entry failed to connect
---
Shell entry failed to connect with interactive authentication.  

An unknown SSH error was encountered.  

No authentication method available  

Errors appear when connecting with an SSH Shell in {{ en.RDM }} 2019.X.  
![!!KB4099.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4099.png)
### Cause
***Interactive authentication*** in terminal is set to ***True*** under ***Advanced*** tab.  

Under ***File – Options – Types – Terminal*** , interactive authentication in terminal is also configurable.
### Solution
Change the value to ***False*** if Interactive authentication in terminal is not required.
### Alternative Solution  
{% snippet icon.badgeInfo %}
Adding lines in SSH server may break the authentication process. Never perform this without a backup.
{% endsnippet %}  

If interactive authentication is required to confirm that the SSH server includes lines :  

KbdInteractiveAuthentication yes  
ChallengeResponseAuthentication yes  
UseLogin no  
UsePam yes  
