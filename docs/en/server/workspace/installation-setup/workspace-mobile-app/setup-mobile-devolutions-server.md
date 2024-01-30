---
eleventyComputed:
  title: "{{ en.WMAPP }} setup with {{ en.DVLS }}"
  description: Before using your application, you will have to complete a quick setup that involves selecting your Devolutions product(s), connecting to your {{ en.DVLS }}, and configuring some security settings.
---
Before using your application, you will have to complete a quick setup that involves selecting your Devolutions product(s), connecting to your {{ en.DVLS }}, and configuring some security settings.

## {{ en.WMAPP }} Setup

Follow the steps below to perform the initial configuration of your {{ en.WMAPP }} with {{ en.DVLS }}:

1. [Download and install the {{ en.WMAPP }}](https://devolutions.net/workspace/) if you have not already done so.
1. After the installation is complete, in the ***{{ en.WS }} Setup*** window, check ***{{ en.DVLS }}***, then tap on ***Start Setup***.
![{{ en.DVLS }} setup](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2076.png)

{% snippet icon.badgeInfo %} 
During the setup, you can always tap on ***Skip This Step*** to configure that specific setting later.
{% endsnippet %}

3. Connect to your {{ en.DVLS }} by entering its complete URL, then tap ***Login***.
![{{ en.DVLS }} URL](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2077.png)
1. Choose your authentication method, then log in using your corresponding credentials.
![Authentication](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2078.png)
1. Optionally, enable the use of a ***Biometric lock*** (Touch/Face ID). It is a recommended practice. Your device will prompt you to authenticate using this method. It must first be configured on your device to work with {{ en.WS }}.  
![Security settings](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2079.png)
1. Tap ***Done*** to finish the initial setup.

## Add an additional space 

Follow the steps below to add an additional {{ en.DVLS }} in {{ en.WMAPP }}.

1. Select ***Additional Space***.
1. Choose {{ en.DVLS }}.
1. Scan a ***QR code*** or enter an ***URL***.
1. Choose your authentication method.  
![Choose your authentication method](https://webdevolutions.blob.core.windows.net/docs/en/server/ServerOp6107.png)  
Your {{ en.DVLS }} account is now available in the {{ en.WMAPP }}.