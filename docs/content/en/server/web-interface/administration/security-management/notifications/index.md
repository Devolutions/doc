---
eleventyComputed:
  title: Notifications
  order: 40
---
{% snippet icon.badgeInfo %}
The [Email](/server/web-interface/administration/configuration/server-settings/general/email/) feature must be enabled and properly configured to get the ***Notifications*** working.
{% endsnippet %}

With {{ en.DVLS }}, it is possible to get email notifications based on user activities with the ***Notifications*** feature.

![Notifications](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8153.png)

To get the Notification working, at least a [Subscriber](/server/web-interface/administration/security-management/notifications/subscribers/) and a [Subscription](/server/web-interface/administration/security-management/notifications/subscriptions/) need to be created. It is also possible to regroup Subscribers in [Subscriber Groups](/server/web-interface/administration/security-management/notifications/subscriber-groups/) to send notifications to a group of subscribers.

The following sample represents a notification email that has been received for an entry creation.

![Email notification sample](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8159.png)
