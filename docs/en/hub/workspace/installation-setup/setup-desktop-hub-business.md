---
eleventyComputed:
  title: Devolutions Workspace setup for desktop with {{ en.PHUBB }}
  description: Before using your application, you will have to complete a quick setup that involves selecting your Devolutions product(s), connecting to your {{ en.DA }}, and configuring some security settings.
---
Before using your application, you will have to complete a quick setup that involves selecting your Devolutions product(s), connecting to your {{ en.DA }}, and configuring some security settings.

## {{ en.WS }} Setup

Follow the steps below to perform the initial configuration of your {{ en.WS }} desktop application with {{ en.PHUBB }}:

1. [Download and install {{ en.WS }}](https://devolutions.net/workspace/) if you have not already done so.
1. After the installation is complete, in the ***Workspace Setup*** window, check ***{{ en.HUB }} Business***, then click on ***Start Setup***.
![{{ en.HUB }} Business setup](/img/en/hub/Hub2202.png)

{% snippet icon.badgeInfo %} 
During the setup, you can always click on ***Skip This Step*** to configure that specific setting later.
{% endsnippet %}

3. Connect to your {{ en.DA }} by entering your email address, then click ***Login***.
![Email address](/img/en/hub/Hub2203.png)
1. Log in using your {{ en.DA }} password in your browser, then click ***Continue***.
![{{ en.DA }} login](/img/en/hub/Hub2204.png)
1. Back to the {{ en.WS }} setup, select the {{ en.PHUB }} you want to connect to, then click ***Next***.
![{{ en.PHUB }} selection](/img/en/hub/Hub2205.png)
1. Choose to use a biometric lock (Windows Hello, Touch ID, etc.) or a master password.  
![Security settings](/img/en/hub/Hub2206.png)
    * ***Biometric lock***: Your operating system will prompt you to authenticate using this method. It must first be configured on your operating system to work with {{ en.WS }}.
    * ***Master password***: {{ en.WS }} will ask you to create a password of at least 8 characters.
1. Click ***Done*** to finish the initial setup.
