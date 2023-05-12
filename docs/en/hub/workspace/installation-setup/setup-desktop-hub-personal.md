---
eleventyComputed:
  title: Devolutions Workspace setup for desktop with {{ en.PHUBP }}
  description: Before using your application, you will have to complete a quick setup that involves selecting your Devolutions product(s), connecting to your {{ en.DA }}, and configuring some security settings.
---
Before using your application, you will have to complete a quick setup that involves selecting your Devolutions product(s), connecting to your {{ en.DA }}, and configuring some security settings.

## {{ en.WS }} Setup

Follow the steps below to perform the initial configuration of your {{ en.WS }} desktop application with {{ en.PHUBP }}:

1. [Download and install {{ en.WS }}](https://devolutions.net/workspace/) if you have not already done so.
1. After the installation is complete, in the ***Workspace Setup*** window, check ***{{ en.HUB }} Personal***, then click on ***Start Setup***.
![{{ en.HUB }} Personal setup](/img/en/hub/Hub2207.png)

{% snippet icon.badgeInfo %} 
During the setup, you can always click on ***Skip This Step*** to configure that specific setting later.
{% endsnippet %}

3. If you do not have a {{ en.DA }}, click on ***Create an account*** and follow the steps in your browser to create your account. If you do have an account, click on ***Login*** to authenticate in your browser.
![{{ en.DA }}](/img/en/hub/Hub2208.png)
1. Back to the {{ en.WS }} setup, choose to either back up your entries on {{ en.HUB }} Personal or not back them up. Backing up your entries on {{ en.HUB }} Personal is recommended as you will be able to access them from any device.  
![Back up entries on {{ en.PHUBP }}](/img/en/hub/Hub2209.png)
1. Click ***Next***.
1. Choose to use a biometric lock (Windows Hello, Touch ID, etc.) or a master password.  
![Security settings](/img/en/hub/Hub2206.png)
    * ***Biometric lock***: Your device will prompt you to authenticate using this method. It must first be configured on your device to work with {{ en.WS }}.
    * ***Master password***: {{ en.WS }} will ask you to create a password of at least 8 characters.
1. Click ***Done*** to finish the initial setup.
