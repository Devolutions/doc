---
eleventyComputed:
  title: Tasks
  order: 10
  description: The ***Tasks*** report allows you to monitor the status of password resets in specific PAM {{ en.VLT }}s. It essentially follows the password resetting flow by giving you the actions that the {{ en.DHUBS }} performed.
---
The ***Tasks*** report allows you to monitor the status of password resets in specific PAM {{ en.VLT }}s. It essentially follows the password resetting flow by giving you the actions that the {{ en.DHUBS }} performed.

![Reports – Privileged Access – Tasks](https://webdevolutions.azureedge.net/docs/en/hub/Hub2298.png)

Each entry in the task list corresponds to a separate password reset action. You can filter them by ***Entry name*** or ***Provider*** to search for password resets done on specific entries.  

The ***Status*** column shows the status of the password reset, which can either be ***Created***, ***Pending***, ***In Progress***, ***Completed***, ***Canceled***, or ***Failed***. As with the entry name and provider, you can filter the status column to see only tasks with certain statuses.

Hover over the icon in the status cell to see the complete history of that task's status.

![Entry status history](https://webdevolutions.azureedge.net/docs/en/hub/Hub2299.png)

{% snippet icon.badgeHelp %}
Password reset logs can also be found in the ***Logs*** section of the [privileged account](/hub/privileged-access-management/privileged-accounts/)'s dashboard.
{% endsnippet %}
