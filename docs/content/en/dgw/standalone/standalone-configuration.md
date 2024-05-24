---
eleventyComputed:
  title: "{{ en.DGW_STANDALONE }} configuration"
  description: 
---
{{ en.DGW_STANDALONE }} is a free open-source relay server offering RDP, SSH, Telnet, VNC, and ARD access through a self-contained web interface. You can optionally protect it with a simple username/password combination or make the gateway available through an ngrok tunnel integration.

## Configuration
1. Download the [installer](https://devolutions.net/gateway/).
1. Run the installer and click ***Next***.  
![Next](https://cdnweb.devolutions.net/docs/HUBB0010_2024_1.png)
1. Once the desired installation path is selected, click ***Next***.  
![Destination Folder](https://cdnweb.devolutions.net/docs/HUBB0011_2024_1.png)
1. Enable the ***Gateway web interface***.  
![]()
   {% snippet icon.badgeInfo %}
   Read more about the [ngrok option](#ngrok).
   {% endsnippet %}
1. Change the ***Ports*** to the desired value and click ***Next***.
![Listeners](https://cdnweb.devolutions.net/docs/HUBB0013_2024_1.png)
   {% snippet icon.badgeInfo %}
   HTTP(S) and TCP default ports are 7171 and 8181, respectively, but can be changed. Additionally, if a reverse proxy is not used, the ***HTTP Listener*** should have the same port as the ***Access URI***.
   {% endsnippet %}
1. Input the ***External URL*** and click ***Next***.
![Access URI](https://cdnweb.devolutions.net/docs/HUBB0014_2024_1.png)
1. 

### ngrok
{% snippet icon.badgeInfo %}
Enabling both ngrok and the web interface, will disable the option to generate a self-signed HTTPS certificate as it will use the SSL certificate provided by ngrok. Additionally, the installer will not show the options to configure ports.
{% endsnippet %}
  * Using ngrok and the native client access requires an ngrok subscription. Using the free version still gives access to the web interface and RDP, SSH or Telnet to remote endpoints.
  * ngrok tunnel capability is included in {{ en.DGW }}, downloading and manually launching a tunnel with *ngrok.exe* will not allow {{ en.DGW }} to start.
  * Learn more about [ngrok](https://ngrok.com/docs/).
