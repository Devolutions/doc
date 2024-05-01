---
eleventyComputed:
  title: Block MS RDP to only use {{ en.RDM }}
---
Some organizations want to centralize their Remote Desktop connections to be established from {{ en.RDM }} only. A few things need to be considered to implement this in your organization.
## Solution
Just blocking Microsoft RDP (**mstsc.exe**) is still leaving other “surfaces” open for getting access. One could imagine installing Microsoft RDC Manager or even another copy of {{ en.RDM }} which would connect with settings that you do not approve.

Indeed, you can force your users to use {{ en.RDM }} by hiding the session credentials in the application. This will result in the users able to establish the remote connection without knowing the credentials.

If you feel that disabling Microsoft RDP (**mstsc.exe**) is sufficient for your needs, it is documented on: [https://social.technet.microsoft.com/wiki/contents/articles/4980.how-to-enable-or-disable-remote-desktop-via-group-policy-windows-2008.aspx](https://social.technet.microsoft.com/wiki/contents/articles/4980.how-to-enable-or-disable-remote-desktop-via-group-policy-windows-2008.aspx)

Our best solution involves going through a gateway that is protected by a password unknown from the end user. One can achieve this by using a SSH Tunnel or our own Jump feature. The second step is to adjust the firewalls on the remote hosts to disable connections from IP addresses other than those use by your approved gateways.
![!!KB4436](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4436.png)
SSH tunnels are a very good approach since they can run on a VM using any *nix distribution and require limited ram and hdd space.

This will also force your user to use {{ en.RDM }} because the credentials to use a SSH Tunnel cannot be a domain credential and the information to authenticate will be saved in {{ en.RDM }}
