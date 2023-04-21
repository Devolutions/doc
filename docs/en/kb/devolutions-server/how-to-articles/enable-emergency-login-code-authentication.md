---
title: Enable Emergency Login Code Authentication
---
In {{ en.DPS }} you can enable the feature for an emergency access to allow login for administrators even if providers are down (Azure or AD).
### Settings
1. In the {{ en.DPS }} Web interface, validate that you have an email server (SMTP) configured under ***Administration - Server Settings - Email***
1. Enable the feature ***Enable Emergency Code authentication*** in ***Administration - Server Settings - Authentication***  
![!!KB4988.png](/img/en/kb/KB4988.png)
1. In ***Administration - Users - General*** , enable the option ***Enable Emergency Login*** for each administrator.  
{% snippet icon.badgeCaution %}
The user must be an administrator. Having administrator rights only via a ***User Groups*** will not work.
{% endsnippet %}  
{% snippet icon.badgeInfo %}
Each administrator will have to configure an email to receive the emergency code.
{% endsnippet %}  

![!!KB4989.png](/img/en/kb/KB4989.png)

### End User Experience
On login, the option to do an ***Emergency Login*** will become available.  

1. Click ***Emergency Login***  
![!!KB4990.png](/img/en/kb/KB4990.png)
1. Enter a ***Username*** and click ***Request Emergency Code***  
{% snippet icon.badgeInfo %}
For Active Directory systems, the ***Username*** must be entered following the User Principal Name (UPN) format. Meaning that the "username" is followed by the "at sign" followed by the name of the Internet domain with which the user is associated.
{% endsnippet %}  

![!!KB4991.png](/img/en/kb/KB4991.png)

3. Paste the ***Emergency code*** , received by email, and click ***Log In***  
![!!KB4992.png](/img/en/kb/KB4992.png)

A log will be shown in the audit and in the administration email that an emergency login was used.
