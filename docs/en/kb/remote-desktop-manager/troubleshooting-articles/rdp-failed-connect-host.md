---
eleventyComputed:
  title: '{{ en.RDMMAC }} RDP failed to connect to the host'
---
Error silent: failed to connect to the host (131084) for {{ en.MAC }}  

![!!KB4066](https://webdevolutions.azureedge.net/docs/en/kb/KB4066.png)
## Solution
Usually, this error occurs because of a failure in the pre-authentication "handshake".  

Make sure to verify the following:  

* Validate that you have entered the appropriate username, password and domain to establish the connection or select the appropriate Credential Entry.  
* Validate that no ***User Specific Settings*** or ***Local Machine Specific Settings*** has been enabled by mistake or with the wrong credential.  
* If you are using a different username format to connect, select the appropriate one to use in the ***Advanced - Username Format*** field.  
* Enable/Disable the ***Network Level Authentication*** (NLA) option in the ***Connection*** tab of the RDP session.  
* Enable/Disable the ***Transport Layer Security*** (TLS) option in the ***Connection*** tab of the RDP session.  
