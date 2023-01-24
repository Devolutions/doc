---
title: FortiClient VPN
---
# {{ en.TOPICTITLE }}
Here is a workaround to use a VPN in combination with FortiClient.
1. Retrieve the Fortinet tools from Fortinet ex: FortiClientTools_7.0.2.0090.  
{% snippet icon.badgeNotice %}
You must keep your FortiClient installed.
{% endsnippet %}  

2. Copy this directory to a directory on your computer.
1. Enable Forticlient VPN / SSL in ***Tools - Add-on Manager***
1. In an RDP entry ***Properties*** go to ***Connection - VPN/SSH/GATEWAY***
1. Change the VPN ***Type*** for ***FortiClient VPN / SSL***  
![KB4973.png](/img/en/kb/KB4973.png)
1. Click the ***Settings (FortiClient VPN / SSL)*** tab.
1. Change the ***Connection mode*** for ***FortiSSL***  
![KB4974.png](/img/en/kb/KB4974.png)
1. Configure your tunnel and click ***OK***
1. Launch the connection for your RDP entry.  
{% snippet icon.badgeInfo %}
On the first connection it will ask for the path of the FortiClient tools you have saved on your computer.
{% endsnippet %}
