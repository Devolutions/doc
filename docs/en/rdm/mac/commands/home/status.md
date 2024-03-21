---
eleventyComputed:
  title: Status
  description: The Status allows you to change the status of a session.
---
The Status allows you to change the status of a session.

## Settings

![Home - Status](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip409.png)

| OPTION   | DESCRIPTION |
|----------|-------------|
| Edit     | This will allow you to write a session status message that will be displayed every time a user open a session. |
| Default  | This will set the status back to its default setting. |
| Locked   | This allow the user who has locked the session to use it and block the others |
| Disabled | A disabled session cannot be opened. It is mostly used when you do not want to delete it but avoid any unattended connection. It is also useful to disable an account for one of your former customer. |
| Warning  | This status allows the session to be used, but displays a message to the user before it is opened. |
| Expired  | An expired session cannot be opened. It can be set manually or automatically if the session expiration date is set in his property. |

{% snippet icon.shieldCaution %}
If using the Locked option, the session will be locked for other users only but the holder of the lock can still use it.
{% endsnippet %}


