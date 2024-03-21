---
eleventyComputed:
  title: Configure domain single sign-on (SSO)
  description: The machine hosting {{ en.DVLS }} must be joined to the configured domain for domain single sign-on (SSO) to work.
---
{% snippet icon.badgeCaution %}
The machine hosting {{ en.DVLS }} must be joined to the [configured domain](/server/web-interface/administration/configuration/server-settings/general/authentication/domain/) for domain single sign-on (SSO) to work.
{% endsnippet %}

These steps provide the information to enable the ***domain single sign-on (SSO)*** feature in {{ en.DVLS }}.

## Steps

1. Open the ***Server Manager*** desktop application and go to ***Manage – Add Roles and Features***.
![Add Roles and Features](https://cdnweb.devolutions.net/docs/en/kb/KB5001.png)
1. In the ***Server Roles*** section, ensure that the ***Windows Authentication*** server role is installed. 
1. When done, you can close the ***Add Roles and Features Wizard*** and ***Server Manager*** windows.
![Windows Authentication](https://cdnweb.devolutions.net/docs/en/kb/KB4378.png)
3. Open the ***IIS Manager***. Select the server in the tree view and open the ***Feature Delegation*** in the ***Management*** section.
![Feature Delegation](https://cdnweb.devolutions.net/docs/en/kb/KB4379.png)
1. Set the ***Authentication - Windows*** feature to the ***Read/Write*** value. 
1. When done, you can close the ***IIS Manager***.
![Authentication - Windows](https://cdnweb.devolutions.net/docs/en/kb/KB2129.png)
1. In ***Administration – Server Settings – Authentication*** of the {{ en.DVLS }} instance web interface, check the ***Enable domain single sign-on (SSO)*** option box. When done, click on the ***Save*** button.
![Check the Enable domain single sign-on (SSO) option box](https://cdnweb.devolutions.net/docs/docs_en_server_DVLS6007_2024_1.png)
1. Set the administrator credential properties in the ***Administration – Server Settings – Authentication – Domains***.
7. Finally, in the data source configuration of each client in {{ en.RDM }}, enable the ***Use Windows authentication*** option, then click ***OK*** when done to save your modifications.
![Use Windows authentication ](https://cdnweb.devolutions.net/docs/en/kb/KB4381.png)
