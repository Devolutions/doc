---
eleventyComputed:
  title: Link accounts in {{ en.RDMWIN }}
  description: The Linked Account feature allows users to associate another account under the same user.
  keywords:
  - Linked
---
The ***Linked Account*** feature allows users to associate another account under the same user. This feature is particularly beneficial when a user needs to manage different accounts simultaneously. For instance, a user may have an account with the email address "bob@windjammer.co" and another account with the email address "_bob@windjammer.co", which serves as an elevated or privileged account.  
{% snippet icon.badgeInfo %}
Both users need to be created before linking them together.
{% endsnippet %}

The primary purpose of ***Linked Account*** is to enhance user convenience and streamline account management.   
{% snippet icon.badgeInfo %}
Only one license is needed for each ***Linked Account*** pair.
{% endsnippet %}

## Steps
1. In a ***Small team*** or ***Enterprise*** data source, log in with an administrator.
1. In the ***Ribbon***, go to ***Administration*** – ***Management*** – ***Users***.  
![Administration tab](https://webdevolutions.azureedge.net/docs/en/kb/KB0073.png)  
1. Select one of the users you want to pair, then click on ***Edit User***.  
![Edit User](https://webdevolutions.azureedge.net/docs/en/kb/KB0074.png)  
1. Go to the ***Linked Account*** tab.
1. Select the other account from the dropdown.  
![Linked Account](https://webdevolutions.azureedge.net/docs/en/kb/KB0075.png)  
1. Click ***OK*** to save the changes and close the window, then click ***Close***.

The accounts are now linked. It is possible to check which accounts are linked by going back to the ***User and Security Management*** window, which is under the ***Users*** button, and scrolling until the ***Linked Account*** column.
{% snippet icon.badgeInfo %}
There is no primary or secondary account functionality with this feature; meaning the order in which they are linked does not matter and each can be unlinked to then be linked to a different account without issue.
{% endsnippet %}  
{% snippet icon.badgeInfo %}
To switch between both linked accounts, it is recommended to have a corresponding data source using each credential.
{% endsnippet %}
