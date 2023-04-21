---
title: LogMeIn
---
### Problem 1

A logmein plugin may be required when launching LogMeIn in embedded mode.

### Solution 1

1. Copy the LogMeIn portal URL from your LogMeIn session.
1. Close {{ en.RDM }}
1. Open Internet Explorer as an administrator.
1. Paste the LogMeIn portal URL in Internet Explorer and launch it.
1. Internet Explorer should prompt to install the LogMeIn ActiveX.
1. Install the LogMeIn ActiveX.
1. Access the LogMeIn portal URL from your Internet Explorer window to be sure that the ActiveX has been installed properly.
1. Close Internet Explorer.
1. Open {{ en.RDM }} and launch your LogMeIn session.  

You should not be prompted for the LogMeIn ActiveX anymore.

### Problem 2

Comexception - requested resource in use. (exception from hresult: 0x800700aa).

### Solution 2

Change the IE emulation mode in ***File – Options – Types – Website*** to use Internet Explorer 11.  
![!!KB4112.png](/img/en/kb/KB4112.png)
