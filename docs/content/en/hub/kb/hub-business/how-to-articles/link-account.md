---
eleventyComputed:
  title: Link accounts in {{ en.DHUBB }}
  description: The Linked account feature allows users to associate another account under the same user.
---
The ***Linked account*** feature allows users to associate another account under the same user. This feature is particularly beneficial when a user needs to manage different accounts simultaneously. For instance, a user may have an account with the email address "bob@windjammer.co" and another account with the email address "_bob@windjammer.co", which serves as an elevated or privileged account.
{% snippet, "badgeInfo" %}
Both users need to be created before linking them together.
{% endsnippet %}

The primary purpose of ***Linked account*** is to enhance user convenience and streamline account management.
{% snippet, "badgeInfo" %}
Only one license is needed for each ***Linked account*** pair.
{% endsnippet %}

## Linking the accounts
1. Log in to {{ en.HUBB }} with an administrator account.
1. Go to ***Administration*** – ***Users***.
![Users](https://cdnweb.devolutions.net/docs/HUB0004_2024_2.png)
1. Click on ***Edit*** for the desired user.
![Edit](https://cdnweb.devolutions.net/docs/HUB0005_2024_2.png)
1. Select the other account from the ***Linked account*** dropdown.
![Linked account](https://cdnweb.devolutions.net/docs/HUB0006_2024_2.png)
1. Click ***Update*** to save the changes and close the window.

The accounts are now linked. The ***Linked account*** column shows which account is paired to one another.

{% snippet, "badgeInfo" %}
There is no primary or secondary account functionality with this feature; meaning the order in which they are linked does not matter and each can be unlinked to then be linked to a different account without issue.
{% endsnippet %}

{% snippet, "badgeInfo" %}
To switch between both accounts, it is required to log out and log in with the second account.
{% endsnippet %}
