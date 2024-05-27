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
![Gateway web interface](https://cdnweb.devolutions.net/docs/DGW0007_2024_1.png)
   {% snippet icon.badgeInfo %}
   Read more about the [ngrok option](#ngrok).
   {% endsnippet %}
1. Click ***Next***.
1. Change the ***Ports*** to the desired value and click ***Next***.  
![Listeners](https://cdnweb.devolutions.net/docs/HUBB0013_2024_1.png)
   {% snippet icon.badgeInfo %}
   HTTP(S) and TCP default ports are 7171 and 8181, respectively, but can be changed. Additionally, if a reverse proxy is not used, the ***HTTP Listener*** should have the same port as the ***Access URI***.
   {% endsnippet %}
1. Input the ***External URL*** and click ***Next***.  
![Access URI](https://cdnweb.devolutions.net/docs/HUBB0014_2024_1.png)
1. Change the ***Authentication*** from ***None*** to ***Custom***.
   {% snippet icon.badgeCaution %}
   If a ***Default User*** is not created, the site will be accessible anonymously.
   {% endsnippet %}
1. Input the credentials for the ***Default User*** and click ***Next***.  
![Default User](https://cdnweb.devolutions.net/docs/DGW0008_2024_1.png)
1. This screen shows a summary of the current paths/settings. It is possible to go ***Back*** and modify them. If the settings are correct, click ***Next***.  
![Gateway setup summary](https://cdnweb.devolutions.net/docs/HUBB0017_2024_1.png)
1. Click ***Install***.  
![Install button](https://cdnweb.devolutions.net/docs/HUBB0018_2024_1.png)
1. Click ***Finish*** when the setup is complete.  
![Finish button](https://cdnweb.devolutions.net/docs/HUBB0019_2024_1.png)
   {% snippet icon.badgeInfo %}
   Once installed, the {{ en.DGW_STANDALONE }} web page will automatically open (ngrok static domain or FQDN). Read more about it in the [web page](#devolutions-gateway-standalone-web-page) section.
   {% endsnippet %}

### {{ en.DGW_STANDALONE }} web page
Here you will find a list of your sessions on the left-hand side, and in the middle, a connection box to open a new connection.  
![{{ en.DGW_STANDALONE }} web page](https://cdnweb.devolutions.net/docs/DGW0009_2024_1.png)
1. Log in to the web page (if a ***Default User*** was created in the step 8 of [Configuration](#configuration)).
1. Select the protocol.
1. Enter the hostname and credentials.
   {% snippet icon.badgeInfo %}
   For RDP connections, click on ***More Settings +*** to optionally set the ***Screen Size***, ***KDC Server URL***, or a ***Pre Connection Blob***.
   {% endsnippet %}
1. Click on ***Connect Session***.

### ngrok
{% snippet icon.badgeInfo %}
Enabling both ngrok and the web interface, will disable the option to generate a self-signed HTTPS certificate as it will use the SSL certificate provided by ngrok. Additionally, the installer will not show the options to configure ports.
{% endsnippet %}

  * Using ngrok and the native client access requires an ngrok subscription. Using the free version still gives access to the web interface and RDP, SSH or Telnet to remote endpoints.
  * ngrok tunnel capability is included in {{ en.DGW }}, downloading and manually launching a tunnel with *ngrok.exe* will not allow {{ en.DGW }} to start.
  * Read more on [ngrok](https://ngrok.com/docs/).
