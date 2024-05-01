---
eleventyComputed:
  title: Configure a password depot entry in {{ en.RDM }}
  description:
---
Every field from the ***Password Depot*** entry is described below.
{% snippet icon.badgeInfo %}
To learn more about creating and managing a Password Depot account, please consult the documentation on their official website.
{% endsnippet %}

{% snippet icon.badgeInfo %}
The integration of credentials from password managers is only available in the Team version of {{ en.RDM }}.
{% endsnippet %}

The entry can be found under ***New Entry*** – ***Credential Management*** – ***Password Management***.
![Credential Management](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0086.png)
![General tab](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0087.png)
* ***Name***: Entry name in {{ en.RDM }}.
* ***Folder***: Which {{ en.RDM }} folder the entry will be in.

### General tab
* ***Host***: Password Depot URL
* ***Use "My Account Settings"***: Go to ***File*** – ***My Account Settings*** – ***Settings*** – ***Password Management*** and click on ***Password Depot*** to set up this option first; replaces the ***Username*** and ***Password*** fields.
* ***Username***: Password Depot username.
* ***Password***: Password Depot password.
  * ***Always ask password***: If enabled, entry will always prompt for password when it is accessed.
* ***Database***: Click on the ellipsis button to pick the Password Depot database.
  * ***Entry***: Click on the ellipsis button to pick a specific credential for this entry.
  * ***Always prompt with list***: Prompts the user with a list of all the available credentials instead of a specific one.
