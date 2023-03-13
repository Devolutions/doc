---
title: RDP Reconnect Mode
---
A selection of ***Reconnect mode*** is available in a Microsoft Remote Desktop entry ***Advanced*** section. Here are explained the different uses for them.  
![KB4679.png](/img/en/kb/KB4679.png)
* ***Standard:*** The ***Standard Reconnect mode*** in the entry, points to the settings in ***File - Options - Types - RDP - Reconnect mode*** If set to Standard there too, it uses the same method as ***Legacy***
* ***Full:*** It will close the tab fully and re open the connection.
* ***Smart Reconnect:*** Uses the ActiveX Reconnect feature. On an RDP 8.1+, it will resize the screen if a reconnect isn't needed (this is mostly used as a display setting when resizing the window and not recommended as a ***Reconnect mode*** ).
* ***Legacy:*** This option calls the Disconnect and then the Connect method of the ActiveX.
