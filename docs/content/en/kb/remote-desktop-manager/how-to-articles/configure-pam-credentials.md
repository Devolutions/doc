---
eleventyComputed:
  title: Configure {{ en.DVLS }} PAM in {{ en.RDM }}
  description: This topic covers multiple ways to configure and use the {{ en.DVLS }} PAM feature in {{ en.RDM }}
---
This topic covers multiple ways to configure and use the {{ en.DVLS }} PAM feature in {{ en.RDM }}.
{% snippet icon.badgeInfo %}
Another alternative would be to use the [PAM dashboard](/rdm/windows/commands/view/panels/pam-dashboard/) and launch sessions from it.
{% endsnippet %}

## Steps
1. Go to ***Properties*** – ***Common*** – ***General*** – ***Credentials*** and select ***Privileged account*** from the dropdown.
![Privileged account](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0051.png)
1. Click on the ellipsis button and select an account configured in the PAM module.
![Ellipsis button](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0052.png)

### Multiple Users
If every user has a privileged account they want to use, here are the steps:
1. Under ***Properties*** – ***Common*** – ***General***, set the option in the ***Credentials*** dropdown to ***My privileged account***.
1. Then those users need to set the desired PAM account under ***File*** – ***My Account Settings*** – ***My Defaults*** – ***My Privileged Account***.
![My Privileged Account](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0053.png)
1. Select the ***DVLS Privileged Account*** option under ***Privileged Access Management***.
![DVLS Privileged Account](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0054.png)
1. Input the {{ en.DVLS }} URL, ***Username*** and select the PAM account.
{% snippet icon.badgeInfo %}
It is also possible to check the ***Always prompt with list option*** to select which account to login with every time.
{% endsnippet %}
