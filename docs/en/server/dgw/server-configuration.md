---
title: Devolutions Server Configuration
---
This topic describes how to configure {{ en.DPS }} to connect with {{ en.DGW }}.  

## Steps for Side-by-side Installation 
Installing by using the ***Side-by-side*** method creates a free {{ en.DGW }} that can be used for up to 5 concurrent sessions, or uses the {{ en.DGW }} license(s) you have to support more sessions. This method is recommended for simpler network layouts, and only one ***Side-by-side*** installation can be done per machine.
1. From the {{ en.RDMSCONSOLE }}, click on the ***Companions*** tab.
1. In the {{ en.DGW }} section, click on ***Install***.
1. Choose ***Side-by-side Installation***.
{% snippet icon.badgeHelp %}
It is possible to download an [.msi](https://devolutions.net/gateway/download) file to install the {{ en.DGW }} on an offline {{ en.DPS }}.
{% endsnippet %}  

4. If default values don't work for your environment, enter the desired settings.
    1. ***HTTP Listener***: HTTP(s) port to reach the Gateway. (7171 is default)
    1. ***TCP Listener***: port used for the RDP sessions. (8181 is default)
1. Click ***Ok***.
1. Go to the {{ en.DPS }} web interface, connect with an admin account.
1. Go to ***Administration – {{ en.DGW }}***.
1. Click on the ***Ping*** button for the desired gateway in the list to see if a connection can successfully be made.

## Steps for Standalone Installation
Installing by using the ***Standalone*** method will allow to install {{ en.DGW }} on a separate server than {{ en.DPS }}. It could be for performance purposes or access networks that {{ en.DPS }} can't access. Many {{ en.DGW }} can be used by {{ en.DPS }}, but only one {{ en.DGW }} can be installed on a machine.
1. From the {{ en.RDMSCONSOLE }}, click on the ***Companions*** tab.
1. In the {{ en.DGW }} section, click on ***Install***.
1. Choose ***Standalone Installation***.
1. Choose between ***Download version*** & ***Install from msi file***.
{% snippet icon.badgeHelp %}
It is possible to download an [.msi](https://devolutions.net/gateway/download) file to install the {{ en.DGW }} on an offline {{ en.DPS }}.
{% endsnippet %}  

5. Click ***Next***.
1. Enter the ***Access URI*** information, for example https://gateway.example.com.
1. Choose the {{ en.DGW }} ***Listeners*** ports (by default they are 7171 and 8181).
    1. If HTTPS is chosen instead of HTTP in the step above, the ***Certificate Configuration*** will be needed.
    1. ***Certificate file***: Needs to be a full chain certificate (.pfx, .p12, .pem, .crt).
    1. ***Certificate password***: Only needed if a .pfx or .p12 certificate was used.
    1. ***Private key file***: Only needed if a .pem or .crt was used as a certificate.
{% snippet icon.shieldWarning %}
Do not share the private key with other users, as it can be used to decrypt the communication between a user and {{ en.DGW }}. Only the public key should be shared.
{% endsnippet %}  

8. Click ***Next***.
1. Choose between ***Use public key from DVLS instance 'Devolutions Server'*** : this option is used if the installed {{ en.DGW }} is on the same server as the {{ en.DPS }};  
and ***From file***: If installing {{ en.DGW }} on another computer, download the public key from the {{ en.DPS }} you want to pair with that {{ en.DGW }}.
1. Click ***Next***.
1. Click ***Install***. 
1. Click ***Close***.
1. On the {{ en.DPS }} web interface, connect with an administrative account.
1. Go to ***Administration – {{ en.DGW }}***.
1. Click on the ***Add*** button on the top right corner.
1. Enter the following information.
    1. ***Name***: Name of the {{ en.DGW }} that will be displayed in {{ en.RDM }}.
    1. ***Description***: Description of the gateway.
    1. ***Set as default***: If enabled, this gateway will be selected by default when configuring {{ en.RDM }}.
    1. ***{{ en.DGW }} URL***: The {{ en.DPS }} URL that the gateway will connect to.
    1. ***TCP Listening Port***: Set the port with the same TCP port value configured in the console.
1. Click on ***Save***.
1. The {{ en.DGW }} should now be visible in the list. It is possible to verify the status of the gateway with the ***Ping*** button.

