---
title: Devolutions Server Configuration
---
This topic describes how to configure {{ en.DPS }} to connect with {{ en.DGW }}.  

## Steps for Side-by-side Installation 
Installing by using the ***Side-by-side*** method creates a free {{ en.DGW }} that can used for up to 5 concurrent sessions, or uses the {{ en.DGW }} licence(s) you have. This method is recommended for simpler network layouts, and only one ***Side-by-side*** installation can be done per {{ en.RDMSCONSOLE }}.
1. From the {{ en.RDMSCONSOLE }}, click on the ***Companions*** tab.
1. In the {{ en.DGW }} section, click on ***Install***.
1. Choose ***Side-by-side Installation***.
{% snippet icon.badgeHelp %}
It is possible to download an [.msi](https://devolutions.net/gateway/download) file to install the {{ en.DGW }} on an offline {{ en.DPS }}.
{% endsnippet %}  

1. Enter the desired settings.
    1. ***HTTP Listener***: HTTP(s) port to reach the Gateway.	
    1. ***TCP Listener***: port used for the RDP sessions.
1. Click ***Ok***.
1. Go to the last section.

## Steps for Standalone Installation
Installing by using the ***Standalone*** method for {{ en.DGW }}. For more complex networks, you can have multiple gateways pointing to one {{ en.RDMSCONSOLE }}.
1. From the {{ en.RDMSCONSOLE }}, click on the ***Companions*** tab.
1. In the {{ en.DGW }} section, click on ***Install***.
1. Choose ***Standalone Installation***.
1. Choose between ***Download version*** & ***Install from msi file***.
{% snippet icon.badgeHelp %}
It is possible to download an [.msi](https://devolutions.net/gateway/download) file to install the {{ en.DGW }} on an offline {{ en.DPS }}.
{% endsnippet %}  

1. Click ***Next***.
1. Enter the ***Access URI*** information.
1. Choose the {{ en.DGW }} ***Listeners*** ports (by default they are 7171 and 8181).
    1. If HTTPS is chosen instead of HTTP in the step above, the ***Certificate Configuration*** will be needed.
    1. ***Certificate file***: Digital certificate
    1. ***Certificate password***: Password for the certificate
    1. ***Private key file***: Private key for the certificate
{% snippet icon.shieldWarning %}
Do not share the private key with other users, as it can be used to decrypt the information in the database. Only the public key should be shared.
{% endsnippet %}  

1. Click ***Next***.
1. Choose between ***Use public key from DVLS instance 'Devolutions Server'*** : this option is used if the installed {{ en.DGW }} is on the same server as the {{ en.RDMSCONSOLE }};  
and ***From file***: If installing {{ en.DGW }} on another computer, download the public key of the {{ en.RDMSCONSOLE }} you want to pair with that {{ en.DGW }}.
1. Click ***Next***.
1. Click ***Install***. 
    1. Clicking the arrow to the right of the button will show a dropdown menu with ***Save Response File*** and ***Save Response File With Password*** which saves a .json file for later use in PowerShell. This file saves the same settings as the current install making it easier to install another gateway. The With Password option also saves the passwords used in the install, if any.
1. Click ***Close***.
1. Go to the last section.

## Steps Needed for Both Installation Methods
1. On the {{ en.DPS }} web interface, connect with an admin account.
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

