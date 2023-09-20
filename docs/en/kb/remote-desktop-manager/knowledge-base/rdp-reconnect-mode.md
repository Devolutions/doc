---
eleventyComputed:
  title: RDP Reconnect mode
---
The ***Reconnect mode*** option is available for ***Microsoft Remote Desktop*** entries. It can be found under the ***Properties*** – ***Common*** – ***General*** – ***Advanced*** tab. By default, the ***Standard*** option is selected.  
![Reconnect mode](https://webdevolutions.azureedge.net/docs/en/kb/KB0125.png)  
* ***Standard:*** The ***Standard Reconnect mode*** option in the entry, points to the settings in ***File*** – ***Options*** – ***Types*** – ***Remote Desktop*** – ***Remote Desktop*** – ***Reconnect mode***. If set to ***Standard*** there too, it uses the same method as ***Legacy***.
* ***Full:*** It will close the tab fully and re-open the connection.
* ***Smart Reconnect:*** This option uses the ActiveX reconnect feature. On an RDP 8.1+, it will resize the screen if a reconnect is not needed.
{% snippet icon.badgeInfo %}
It is recommended to change the ***Screen sizing mode*** to ***Smart Reconnect***, instead of selecting it in the ***Reconnect mode*** menu. The ***Screen sizing mode*** option can be found under the ***Display*** tab of the same properties menu.
{% endsnippet %}  

* ***Legacy:*** This option calls the disconnect and then the connect method of the ActiveX.
