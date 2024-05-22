---
eleventyComputed:
  title: "{{ en.WDAPP }} installation with {{ en.DVLS }}"
  description: Before using your application, you will have to complete a quick setup that involves selecting your Devolutions product(s), connecting to your {{ en.DVLS }}, and configuring some security settings.
---
Before using your application, you will have to complete a quick setup that involves selecting your Devolutions product(s), connecting to your {{ en.DVLS }}, and configuring some security settings.

## {{ en.WDAPP }} setup

Follow the steps below to perform the initial configuration of your {{ en.WDAPP }} with {{ en.DVLS }}:

1. [Download and install the {{ en.WDAPP }}](https://devolutions.net/workspace/) if you have not already done so.
1. After the installation is complete, in the ***{{ en.WS }} Setup*** window, check ***{{ en.DVLS }}***, then click on ***Start Setup***.
![{{ en.DVLS }} setup](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2080.png)

{% snippet icon.badgeInfo %}
During the setup, you can always click on ***Skip This Step*** to configure that specific setting later.
{% endsnippet %}

3. Connect to your {{ en.DVLS }} by entering its complete URL, then click ***Login***.
![{{ en.DVLS }} URL](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2081.png)
1. Choose to use a biometric lock (Windows Hello, Touch ID, etc.) or a master password.
![Security settings](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2082.png)
    * ***Biometric lock***: Your device will prompt you to authenticate using this method. It must first be configured on your device to work with {{ en.WS }}.
    * ***Master password***: {{ en.WS }} will ask you to create a password of at least 8 characters.
1. Click ***Done*** to finish the initial setup.

## Add an additional space

Follow the steps below to add an additional {{ en.DVLS }} in {{ en.WDAPP }}.

1. Select ***Additional Space***.
![Choose your authentication method](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6108.png)
1. Choose {{ en.DVLS }}.
1. Click ***Next***.
1. Enter your ***{{ en.DVLS }} URL***.
1. Choose your authentication method.
![Choose your authentication method](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6107.png)
Your {{ en.DVLS }} account is now available in {{ en.WDAPP }}.