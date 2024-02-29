---
eleventyComputed:
  title: Secret server entry configuration
  description: Follow this step-by-step to configure your entries to use Secret Server credentials in {{ en.RDM }}.
---
{% snippet icon.badgeInfo %}
This feature is only available in the Team edition of {{ en.RDM }}.
{% endsnippet %}
The ***Secret Server*** integration is quite straightforward in {{ en.RDM }}. Follow this step-by-step to configure your entries to use ***Secret Server*** credentials.

1. In {{ en.RDM }}, create a new ***Secret Server*** entry.
1. In the ***General*** tab, enter the ***URL*** you are using to connect to the ***Secret Server*** instance, which is either **https<area>://server** or **https<area>://server/SecretServer**.
![Secret Server URL](https://cdnweb.devolutions.net/docs/en/kb/KB5021.png)

Credentials information setup:  

3. If you are the only one using this entry, you can enter your credentials information directly under the ***General*** tab. In a shared team, select ***Use "My Account Settings"*** under the ***General*** tab. After the entry configuration is completed, each user will need to go in ***File*** – ***My Account Settings*** – ***Secret Server*** to enter their information.
![My Secret Server Account](https://cdnweb.devolutions.net/docs/en/kb/KB4027.png)
   {% snippet icon.badgeCaution %}
   Two Factor Authentication (2FA) is supported with the ***Secret Server*** entry.  
   There is a limitation with the Rest API: you cannot have 2FA with Windows Authentication.
   {% endsnippet %}
1. To do so, enter your information at the bottom of the ***Secret Server*** entry.
1. For the ***Two factor mode***, select ***Ask only when the session expires***. This way, you will get the 2FA prompt when you open {{ en.RDM }}, and it should last all day. You will not have to enter it every time you want to use a credential, unless that is what you prefer. In that case, select ***Ask on every login***.
![Two factor mode](https://cdnweb.devolutions.net/docs/en/kb/KB4062.png)
1. In the ***Credential Selection*** tab, select ***Prompt For List***.
![Credential Selection](https://cdnweb.devolutions.net/docs/en/kb/KB4028.png)
1. In the session you want to use the ***Secret Server*** credentials with (RDP, etc.), select the credentials you created with ***Linked ({{ en.VLT }})***, then click the ***Select from List*** to specify the account you wish to use. This way, you have one ***Secret Server*** entry for all the connections.
![Credentials – Select from list](https://cdnweb.devolutions.net/docs/en/kb/KB4059.png)

If you prefer, you could also select the credentials you want directly under the ***Credential Selection*** tab in the ***Secret Server*** entry.
