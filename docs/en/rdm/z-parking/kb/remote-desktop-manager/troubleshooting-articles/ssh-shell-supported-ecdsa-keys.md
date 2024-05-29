---
eleventyComputed:
  title: SSH Shell supported ECDSA keys
---
"Unknown ecdsa curve group" error appears when connecting to SSH servers.
## Solution
Confirm the public/private key is supported by {{ en.RDM }}  

RDM Windows and Mac support:  

* ecdsa-nistp256  
* ecdsa-nistp384  
* ecdsa-nistp521  
