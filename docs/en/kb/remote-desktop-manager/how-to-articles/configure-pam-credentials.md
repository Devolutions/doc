---
eleventyComputed:
  title: Configure {{ en.DVLS }} PAM in {{ en.RDM }}
  description: This topic covers multiple ways to configure and use the {{ en.DVLS }} PAM feature in {{ en.RDM }}
---
This topic covers multiple ways to configure and use the {{ en.DVLS }} PAM feature in {{ en.RDM }}.  
{% snippet icon.badgeHelp %}
Another alternative would be to use the [PAM dashboard](https://help.remotedesktopmanager.com/pam_dashboard.html) and launch sessions from it.
{% endsnippet %}

## Steps
1. Go to ***Properties*** – ***Common*** – ***General*** – ***Credentials*** and select ***Privileged account*** from the dropdown.  
![Privileged account](/img/en/kb/KB0051.png)
1. Click on the ellipsis button and select an account configured in the PAM module.  
![Ellipsis button](/img/en/kb/KB0052.png)

### Multiple Users
If every user has a privileged account they want to use, here are the steps:
1. Under ***Properties*** – ***Common*** – ***General***, set the option in the ***Credentials*** dropdown to ***My privileged account***.
1. Then those users need to set the desired PAM account under ***File*** – ***My Account Settings*** – ***My Defaults*** – ***My Privileged Account***.  
![My Privileged Account](/img/en/kb/KB0053.png)
1. Select the ***DVLS Privileged Account*** option under ***Privileged Access Management***.  
![DVLS Privileged Account](/img/en/kb/KB0054.png)
1. Input the {{ en.DVLS }} URL, ***Username*** and select the PAM account.  
{% snippet icon.badgeInfo %}
It is also possible to check the ***Always prompt with list option*** to select which account to login with every time.
{% endsnippet %}