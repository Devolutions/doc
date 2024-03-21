---
eleventyComputed:
  title: Configure a {{ en.DVLS }} cross {{ en.VLT }} credential sharing entry
  description: It is possible to share {{ en.DVLS }} credential entries across different {{ en.VLT }}s or {{ en.DVLS }} datasources.
---
This topic covers how to share a credential from a different {{ en.VLT }} in the same {{ en.DVLS }}, or between two {{ en.DVLS }} datasources.

## Creating a credential sharing entry
1. In {{ en.RDM }} select a {{ en.DVLS }} datasource and go into the desired {{ en.VLT }}.
1. Click on ***New Entry***.
1. Go to ***Credential Management*** – ***Password Management***.
1. Select {{ en.DVLS }} and click ***OK***.
![{{ en.DVLS }}](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0156.png)
1. Enter the ***Name***.
![General tab](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0157.png)
1. Fill the information in the ***General*** tab;
  * ***Host***: The URL to {{ en.DVLS }}
  * ***Use "My Account Settings"***: Use the ***My Acount Settings*** {{ en.DVLS }} login set in ***File*** – ***Options***
  * ***Use Windows authentication***: Use Windows authentication to log into {{ en.DVLS }}
  * ***Username***: Use a set email to log into {{ en.DVLS }}
  * ***{{ en.VLT_MAJ }}***: Click on the ellipsis button to select which {{ en.VLT }} to get the credential from
![Entry tab](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0158.png)
7. Fill the information in the ***Entry*** tab;
  * ***Default (specific credential)***: This mode uses one specific credential
    * ***Credential***: Click on the ellipsis button to select which specific credential to share
  * ***Name filtering***: Filters through the selected {{ en.VLT }} based on the search criterias to find an entry with a matching name
    * ***Name***: Enter the desired characters
    * ***Mode***: ***Contains the value*** or ***Exact match***
    * ***Case sensitivity***: ***No*** or ***Yes***
  * ***Always prompt with list***: Always prompts the user with a list of the available credentials
8. Click ***OK*** to save the changes and close this window.
