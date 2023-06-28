---
eleventyComputed:
  title: Devolutions Gateway Tunnel connection type
  description: The {{ en.DGW }} Tunnel can fulfill similar needs to SSH port forwarding/SSH tunneling, but it requires nothing other than {{ en.DGW }} itself.
  keywords:
  - SSH Tunnel
---
The ***{{ en.DGW }} Tunnel*** can fulfill similar needs to SSH port forwarding/SSH tunneling, but it requires nothing other than {{ en.DGW }} itself. It is useful when needing to use connections that are not supported by {{ en.DGW }} alone. The entry can be found under ***New Entry*** – ***Session*** – ***Remote Connections***.
{% snippet icon.badgeInfo %}
{{ en.DGW }} needs to be set up in the {{ en.RDM }} data source or specific folder that the tunnel is in for this feature to work. The option is under ***Properties*** – ***Connection*** – ***VPN/Tunnel/Gateway*** – ***VPN/Tunnel/Gateway*** – ***General***.
{% endsnippet %}  

## Listeners
{% snippet icon.badgeWarning %}
If any ***Listener*** is set to 0.0.0.0, this exposes that connection to the entire network. Due to the difficulty in tracking accountability, it is recommended ***NOT*** to do this for multiple security reasons.
{% endsnippet %}  

* ***TCP Forward***: It is the equivalent to port forwarding.

* ***HTTP*** and ***SOCKS5*** proxies: These listeners are set up as proxies which makes it possible to use a browser other than Google Chrome. This also means they use a dynamic port.

### Allow Rules
The ***HTTP*** and ***SOCKS5*** listeners will also make use of the ***Allow Rules*** to specify the external resources needed, anything not on the allow list will be denied.

{% snippet icon.badgeInfo %}
The host in the allow list may be specified as a wildcard certificate.
{% endsnippet %}  
