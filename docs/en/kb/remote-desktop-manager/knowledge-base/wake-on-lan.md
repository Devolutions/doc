---
title: Wake on LAN
---
Wake-on-LAN is an Ethernet computer networking standard, which allows a computer to be turned on or woken up by a network message. This is an OS-agnostic feature that works by broadcasting a specially crafted “magic” packet at the data link layer. The target computer sits in a low-power state with only its network card switched on, and when it receives the magic packet, the network card “wakes up” the computer, powering it on and booting it up.  

Wake-on-LAN is supported in the Team Edition of {{ en.RDM }}. Plus, the destination motherboard must support it, and it must be enabled. The computer must also be in the local area network (LAN) and not connected in a VPN.

An important thing to note is that Wake-on-LAN operates below the IP level. This means that the sending machine needs to be on the LAN, so we cannot send them over remote IP-based connections, such as over SSH or VPN. WOL broadcasts packets to the target computer over UDP. You can configure which port it uses, the default is 9. If you want to wake up a machine on a different subnet, your router must forward UDP port 9, or whatever you change the port assignment to. Most users do not have to configure their router or worry about this.
## Enabling Wake-on-LAN
The first step is to verify that your computer supports Wake-on-LAN. There are a few things to look out for:  

* Your network card must support Wake-on-LAN.
* Your power supply must support Wake-on-LAN.
* Wake-on-LAN must be enabled in BIOS.
* Your router must be configured to forward broadcast packets.
* Your OS must be configured to enable Wake-on-LAN.
## Configure {{ en.RDM }}
You must add a valid MAC address (Media Access Control address) in the session"s configuration. The input field can be found in the ***Information*** tab and in the ***General*** child tab. The field name is ***MAC***.  
![KB4622.png](/img/en/kb/KB4622.png)  
You can use the Ellipsis button to automatically determine the MAC address. If this is unsuccessful, you will need to enter it manually.
### About the MAC address discovery
The discovery process will initially attempt to use the ARP protocol. This is fast and does not require authentication, but there are requirements on the network aspect that may not be met. If ARP was not successful, another attempt is made using WMI. This is slower and requires authentication. RDM will use the credentials as configured in the entry properties or the credentials entered in the ***Management Tools*** tab.
## Use Wake-on-LAN
If the settings are correctly configured, you can invoke the Wake-on-LAN from the session"s context menu, which can be found in the Macros/Scripts/Tools - Wake-on-LAN menu.
