---
eleventyComputed:
  title: Link accounts in {{ en.DVLS }}
  description: The Linked Account feature allows users to associate another account under the same user profile.
---
The ***Linked Account*** feature allows users to associate another account under the same user profile. This feature is particularly beneficial when a user needs to manage different accounts simultaneously. For instance, a user may have an account with the email address "bob@windjammer.co" and another account with the email address "_bob@windjammer.co", which serves as an elevated or privileged account.  
{% snippet icon.badgeInfo %}
Both users need to be created before linking them together.
{% endsnippet %}

The primary purpose of ***Linked Account*** is to enhance user convenience and streamline account management.   
{% snippet icon.badgeInfo %}
Only one license is needed for each ***Linked Account*** pair.
{% endsnippet %}

## Steps
1. Log in to {{ en.DVLS }} with an administrator account.
1. Go to ***Administration*** – ***Security Management*** – ***Users***.  
![Users](https://webdevolutions.azureedge.net/docs/en/kb/KB0117.png)  
1. Select one of the users you want to pair, then click on ***Edit***.  
![Edit](https://webdevolutions.azureedge.net/docs/en/kb/KB0118.png)  
1. Go to the ***Linked Account*** tab.
1. Select the other account from the dropdown.  
![Linked Account](https://webdevolutions.azureedge.net/docs/en/kb/KB0119.png)  
1. Click ***Update*** to save the changes and close the window.

The accounts are now linked. The ***Linked Account*** column shows which account is paired to one another.
{% snippet icon.badgeInfo %}
There is no primary or secondary account functionality with this feature; meaning the order in which they are linked does not matter and each can be unlinked to then be linked to a different account without issue.
{% endsnippet %}  
{% snippet icon.badgeInfo %}
To switch between both linked accounts, it is required to log out and log in with the second account.
{% endsnippet %}
