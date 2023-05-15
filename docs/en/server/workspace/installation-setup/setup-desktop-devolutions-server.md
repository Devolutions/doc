---
eleventyComputed:
  title: Devolutions Workspace setup for desktop with {{ en.DVLS }}
  description: Before using your application, you will have to complete a quick setup that involves selecting your Devolutions product(s), connecting to your {{ en.DVLS }}, and configuring some security settings.
---
Before using your application, you will have to complete a quick setup that involves selecting your Devolutions product(s), connecting to your {{ en.DVLS }}, and configuring some security settings.

## {{ en.WS }} Setup

Follow the steps below to perform the initial configuration of your {{ en.WS }} desktop application with {{ en.DVLS }}:

1. [Download and install {{ en.WS }}](https://devolutions.net/workspace/) if you have not already done so.
1. After the installation is complete, in the ***Workspace Setup*** window, check ***{{ en.DVLS }}***, then click on ***Start Setup***.
![{{ en.DVLS }} setup](https://webdevolutions.azureedge.net/docs/en/hub/Hub2202.png)

{% snippet icon.badgeInfo %} 
During the setup, you can always click on ***Skip This Step*** to configure that specific setting later.
{% endsnippet %}

3. Connect to your {{ en.DVLS }} by entering its complete URL, then click ***Login***.
![{{ en.DVLS }} URL](https://webdevolutions.azureedge.net/docs/en/hub/Hub2203.png)
1. Choose your authentication method, then log in using your corresponding credentials.
![Authentication](https://webdevolutions.azureedge.net/docs/en/hub/Hub2204.png)
1. Choose to use a biometric lock (Windows Hello, Touch ID, etc.) or a master password.  
![Security settings](https://webdevolutions.azureedge.net/docs/en/hub/Hub2206.png)
    * ***Biometric lock***: Your device will prompt you to authenticate using this method. It must first be configured on your device to work with {{ en.WS }}.
    * ***Master password***: {{ en.WS }} will ask you to create a password of at least 8 characters.
1. Click ***Done*** to finish the initial setup.
