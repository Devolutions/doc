---
title: PAM Dashboard
---
{% snippet icon.badgeNotice %} 
A license is now required to enable the Privileged Access Management (PAM) module. Please contact our [sales department](mailto:sales@devolutions.net) for more information about the license. 
{% endsnippet %}

{% snippet icon.badgeInfo %}
The ***PAM Dashboard*** is only available with our [{{ en.DVLS }}](https://devolutions.net/server). 
{% endsnippet %}

The ***PAM Dashboard*** feature can be found in ***View – Panels – PAM Dashboard***.  
![PAM Dashboard](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2053.png) 

In the ***PAM Dashboard***, for every privileged account, it is possible to connect to the account, copy the password, and manage the checkout/check-in process.  

To access the user accounts, a PAM folder must first be selected. If you have multiple folders, it might be helpful to use the filter bar to find the one you are looking for. Note that these are the same folders as in your {{ en.DVLSCONSOLE }}. You can go to our [Privileged Account Management in {{ en.DVLS }}](/server/privileged-access-management/) topic to learn more about it.  
![PAM Dashboard](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2054.png)

When the folder is selected, all the accounts in that folder will appear. It is possible to sort them by ***Name***, ***Folder Path***, ***Username***, ***Account Type***, or ***Checkout Status***.  
![PAM Dashboard](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2055.png)

If there are multiple accounts in the folder, you can use the filter bar to display only the accounts containing what you typed. You can push your search even further by filtering the accounts by credential type.  
![Filter Bar](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2056.png) 

## PAM Check Out request with custom time

It is possible to make a ***Check Out*** request for a certain time slot while in a PAM vault. This feature is very useful for planned maintenance outside of normal work hours, when approvers aren't available.

{% snippet icon.badgeInfo %}
Making a ***Check Out*** request in advance is only available in PAM vaults.
{% endsnippet %}  

### Steps
1. Connect to a {{ en.DVLS }} data source.
1. In the {{ en.RDM }} ribbon, click on ***View*** and then ***PAM Dashboard***.
1. Select a PAM vault from the dropdown.
1. Right-click on an entry and click on ***Check Out***.
1. Choose the approver, enable ***Set custom time frame***.
1. Set the ***Start time*** and ***End time***.

   {% snippet icon.shieldInfo %}
   It is recommended to add a ***Comment*** to let the approver know why the ***Check Out*** is needed.
   {% endsnippet %}  
1. Click on ***OK*** to send the request and close the window.
