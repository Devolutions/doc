---
title: Secret Server Entry Configuration
description: Follow this step-by-step to configure your entries to use Secret Server credentials in Remote Desktop Manager.
keywords:
- secret server
- credential
---
# {{ en.TOPICTITLE }} 
The ***Secret Server*** integration is quite straightforward in {{ en.RDM }}. Follow this step-by-step to configure your entries to use ***Secret Server*** credentials. 
## Step-by-step guide 
<ol>
  <li>In {{ en.RDM }}, create a new <b><i>Secret Server</i></b> entry.</li>
  <li>In the <b><i>General</i></b> tab, enter the <b><i>URL</i></b> you are using to connect to the <b><i>Secret Server</i></b> instance.</li>

{% snippet icon.badgeNotice %} 
It will either be https<area>://server or https<area>://server/SecretServer. 
{% endsnippet %}
 
![Secret Server URL](/img/en/kb/KB5021.png) 
*Secret Server URL*{.caption}  

  <li>Credentials information setup:  
    <ol>
      <li>If you are the only one using this entry, you could place your credentials information directly under the <b><i>General</i></b> tab.</li>
      <li>In a shared team, select the <b><i>Use &quot;My Account Settings&quot;</i></b> option under the <b><i>General</i></b> tab. After the entry is completed, each user will need to go in <b><i>File – My Account Settings – Secret Server</i></b> to enter their information.</li>
    </ol>
  </li>

![My Secret Server Account](/img/en/kb/KB4027.png) 
*My Secret Server Account*{.caption}  
  <li>Two Factor Authentication (2FA) is supported with the <b><i>Secret Server</i></b> entry. 
{% snippet icon.badgeInfo %} 
SAML is not yet supported, but it should be in version 2023.1 of {{ en.RDM }}. 
{% endsnippet %}
 
{% snippet icon.badgeCaution %} 
There is a limitation with the Rest API, you cannot have 2FA with Windows Authentication. 
{% endsnippet %}
    <ol>
      <li>To do so, enter your information at the bottom of the <b><i>Secret Server</i></b> entry. </li>
      <li>For the <b><i>Two factor mode</i></b>, select <b><i>Ask only when the session expires</i></b>. This way you will get the 2FA prompt when you open {{ en.RDM }}, and it should last all day after. You will not need to re-enter it every time you want to use a credential, unless that is what you prefer and in that case, select <b><i>Ask on every login</i></b>. </li>
<img src="/img/en/kb/KB4062.png" alt="Secret Server Two factor mode">
<i>Secret Server Two factor mode</i> 
      <li>In the <b><i>Credential Selection</i></b> tab, select <b><i>Prompt For List</i></b>. </li>
<img src="/img/en/kb/KB4028.png" alt="Credential Selection">  
<i>Credential Selection</i> 
    </ol>
  </li>
  <li>In the session you want to use the <b><i>Secret Server</i></b> credentials with (RDP, etc.), you select the <b><i>Credentials</i></b> you created with <b><i>Linked (Vault)</i></b>, and then you can click the <b><i>Select from List</i></b> to specify the account you wish to use. </li>

![Credentials – Select from list](/img/en/kb/KB4059.png) 
*Credentials – Select from list*{.caption}  

This way, you have one ***Secret Server*** entry for all the connections. 
{% snippet icon.badgeNotice %} 
You could also, if you prefer, select the credentials you want directly under the ***Credential Selection*** tab in the ***Secret Server*** entry. 
{% endsnippet %}
 </ol>

