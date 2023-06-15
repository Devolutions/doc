---
eleventyComputed:
  title: Configure a Password Depot entry in {{ en.RDM }}
  description: 
  keywords:
  - Password Depot
---
Every field from the ***Password Depot*** entry is described below.
{% snippet icon.badgeInfo %}
To learn more about creating and managing a Password Depot account, please consult the documentation on their official website.
{% endsnippet %}  

The entry can be found under ***New Entry*** – ***Credential Management*** – ***Password Management***  
![Credential Management](https://webdevolutions.azureedge.net/docs/en/kb/KB0086.png)  
![General tab](https://webdevolutions.azureedge.net/docs/en/kb/KB0087.png)  
* ***Name***: Entry name in {{ en.RDM }}
* ***Folder***: Which {{ en.RDM }} folder the entry will be in

### General tab
* ***Host***: Password Depot URL
* ***Use "My Account Settings"***: Go to ***File*** – ***My Account Settings*** – ***Settings*** – ***Password Management*** and click on ***Password Depot*** to set up this option first; replaces the ***Username*** and ***Password*** fields
* ***Username***: Password Depot username
* ***Password***: Password Depot password
  * ***Always ask password***: If enabled, entry will always prompt for password when the entry is accessed
* ***Database***: Click on the ellipsis button to pick the Password Depot database
  * ***Entry***: Click on the ellipsis button to pick a specific credential for this entry
  * ***Always prompt with list***: Prompts the user with a list of all the available credentials instead of a specific one
