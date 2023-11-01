---
eleventyComputed:
  title: '{{ en.DGW }} tunnel connection type'
  description: The {{ en.DGW }} Tunnel can fulfill similar needs to SSH port forwarding/SSH tunneling, but it requires nothing other than {{ en.DGW }} itself.
  keywords:
  - SSH Tunnel
---
The ***{{ en.DGW }} Tunnel*** can fulfill similar needs to SSH port forwarding/SSH tunneling, but it requires nothing other than {{ en.DGW }} itself. It is useful when using connections that do not have built-in support in {{ en.RDM }} through the {{ en.DGW }}. The entry can be found under ***New Entry*** – ***Session*** – ***Remote Connections***.
{% snippet icon.badgeInfo %}
{{ en.DGW }} needs to be set up in the {{ en.RDM }} data source and then configured through [inheritance](/kb/remote-desktop-manager/knowledge-base/inheritance/) or on the connection itself. The option is under ***Properties*** – ***Connection*** – ***VPN/Tunnel/Gateway*** – ***VPN/Tunnel/Gateway*** – ***General***.
{% endsnippet %}  

![{{ en.DGW }} Tunnel](https://webdevolutions.azureedge.net/docs/en/kb/KB0116.png)  
## Listeners
{% snippet icon.badgeWarning %}
If the ***Listener*** is set to 0.0.0.0, it will accept connections from any source within the network. Due to the difficulty in tracking accountability, it is recommended ***NOT*** to do this for multiple security reasons.
{% endsnippet %}  

* ***TCP Forward***: It is the equivalent to port forwarding.

* ***HTTP*** and ***SOCKS5*** proxies: These listeners are set up as proxies which makes it possible to use a browser other than Google Chrome. This also means they use a dynamic destination.  
{% snippet icon.badgeInfo %}
Dynamic ports can be used with all three listener types. If the value is 0, it will automatically find an available port.
{% endsnippet %}  

### Allow Rules
The ***HTTP*** and ***SOCKS5*** listeners will also make use of the ***Allow Rules*** to specify authorized destinations, anything not on the allow list will be denied.

{% snippet icon.badgeInfo %}
The host in the allow list may be specified as in a wildcard certificate.
{% endsnippet %}  
