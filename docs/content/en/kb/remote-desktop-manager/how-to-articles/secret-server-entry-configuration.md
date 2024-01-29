---
eleventyComputed:
  title: Secret server entry configuration
  description: Follow this step-by-step to configure your entries to use Secret Server credentials in {{ en.RDM }}.
---
The ***Secret Server*** integration is quite straightforward in {{ en.RDM }}. Follow this step-by-step to configure your entries to use ***Secret Server*** credentials.

## Step-by-step guide
1. In {{ en.RDM }}, create a new ***Secret Server*** entry.
1. In the ***General*** tab, enter the ***URL*** you are using to connect to the ***Secret Server*** instance.
   {% snippet icon.badgeNotice %}
   It will either be https<area>://server or https<area>://server/SecretServer.
   {% endsnippet %}  
![Secret Server URL](https://webdevolutions.azureedge.net/docs/en/kb/KB5021.png)

Credentials information setup:  
3. If you are the only one using this entry, you could place your credentials information directly under the ***General*** tab.
1. In a shared team, select the ***Use "My Account Settings"*** option under the ***General*** tab. After the entry is completed, each user will need to go in ***File*** – ***My Account Settings*** – ***Secret Server*** to enter their information.  
![My Secret Server Account](https://webdevolutions.azureedge.net/docs/en/kb/KB4027.png)
Two Factor Authentication (2FA) is supported with the ***Secret Server*** entry.
   {% snippet icon.badgeCaution %}
   There is a limitation with the Rest API, you cannot have 2FA with Windows Authentication.
   {% endsnippet %}
1. To do so, enter your information at the bottom of the ***Secret Server*** entry. 
1. For the ***Two factor mode***, select ***Ask only when the session expires***. This way you will get the 2FA prompt when you open {{ en.RDM }}, and it should last all day after. You will not need to re-enter it every time you want to use a credential, unless that is what you prefer and in that case, select ***Ask on every login***.  
![!Secret Server Two factor mode](https://webdevolutions.azureedge.net/docs/en/kb/KB4062.png)
1. In the ***Credential Selection*** tab, select ***Prompt For List***.  
![!Credential Selection](https://webdevolutions.azureedge.net/docs/en/kb/KB4028.png)
1. In the session you want to use the ***Secret Server*** credentials with (RDP, etc.), you select the ***Credentials*** you created with ***Linked ({{ en.VLT }})***, and then you can click the ***Select from List*** to specify the account you wish to use.  
![Credentials – Select from list](https://webdevolutions.azureedge.net/docs/en/kb/KB4059.png)

This way, you have one ***Secret Server*** entry for all the connections.
{% snippet icon.badgeNotice %}
You could also, if you prefer, select the credentials you want directly under the ***Credential Selection*** tab in the ***Secret Server*** entry.
{% endsnippet %}
