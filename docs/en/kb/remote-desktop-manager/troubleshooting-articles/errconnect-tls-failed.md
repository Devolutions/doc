---
  title: ERRCONNECT_TLS_FAILED (0x00000008)
---
When launching an RDP session in {{ en.RDMMAC }} you get the error message: ERRCONNECT_TLS_FAILED (0x00000008).
## Solution
To correct this error, enable the TLS 1.2 under the remote server located here: HKLM\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols  
![!!KB4959](https://webdevolutions.azureedge.net/docs/en/kb/KB4959.png)
