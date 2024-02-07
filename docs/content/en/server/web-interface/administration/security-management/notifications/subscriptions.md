---
eleventyComputed:
  title: Subscriptions
  keywords:
  - Roles
---
The ***Subscriptions*** are intended to send email according to activities on {{ en.DVLS }}. It could be activities on entries, user accounts, system settings, etc.  
![Notifications – Subscriptions](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8073.png)  

![Subscription properties dialog](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8158.png)  

## Subscriptions
| Option               | Description               |
|----------------------|---------------------------|
| Name                 | Name of the Subscription. |
| Subscriber           | One subscriber that will receive the notifications from the current subscription. A subscriber or a subscriber group can be selected. |
| Subscription Category| Category of the subscription. This can be one of the following possibilities.<br><ul><li>Entry</li><li>User</li><li>{{ en.VLT_MAJ }}</li><li>User Groups</li><li>PAM Privileged Account</li><li>PAM Provider</li><li>PAM Checkout</li><li>PAM Team Folder</li><li>System Settings</li><li>Administration Log</li><li>Data Source Log</li><li>{{ en.DGW }}</li><li>PAM Checkout Policy</li><li>PAM OTP Template</li></ul> |
| Filters              | The filters are tied to the subscription category and each of them has their own filters. You can add a filter with the Add Filter button. Be aware that the filters are cumulative. |
