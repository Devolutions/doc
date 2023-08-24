---
eleventyComputed:
  title: Establish a remote access to a Linux machine with {{ en.RDM }}
---
You can establish a remote access to a Linux machine from {{ en.RDMWIN }}.
## Solution
1. You will first need to run the following commands on your Linux machine to be able to connect:
1. sudo apt install xrdp
1. sudo systemctl enable xrdp
1. Then create an RDP entry to connect to your Linux machine.  
![!!KB4782.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4782.png)
