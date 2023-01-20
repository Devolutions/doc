---
title: Tunnel Local Webcam Through RDP Session
---
# {{ en.TOPICTITLE }}
{{ en.RDM }} version 2021.1 and higher allows to tunnel a local webcam through an RDP session.  
{% snippet icon.badgeInfo %}
The webcam redirection option will redirect all of your connected webcams. Eventually we will add a way to specify which specific webcam you want to share by entering its deviceID (for external sessions only).
{% endsnippet %}  

{% snippet icon.badgeCaution %}
We&apos;ve made a fix, in version 2021.1.18 and higher, that prevented some webcams to be redirected. We suspect the issue was caused by the RemoteFX redirection, which is not supported by all webcams. Unfortunately, RemoteFX seems to be required for ActiveX (which we use for embedded sessions), so this fix will only apply to external sessions.
{% endsnippet %}  

### Steps
1. Set the following Group policy on both the RDP client and the local computer:
* ***Enabled*** : Allow RDP redirection of other supported RemoteFX USB devices from this computer.
* ***Disabled*** : Do not allow supported Plug and Play device redirection.
2. For embedded sessions, all you&apos;ll need to do is enable the option ***Other supported Plug and Play (PnP) devices*** in the ***Properties - General - Local Resources - Local Devices and Resources*** section of the RDP entry.  
![KB4749.png](/img/en/kb/KB4749.png)
1. For external sessions, there will be a separate option to redirect cameras. You&apos;ll also need to make sure WMI requests are enabled on your local computer.  
![KB4750.png](/img/en/kb/KB4750.png)
