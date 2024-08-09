---
_schema: default
eleventyComputed:
  title: Actions
  description: >-
    An action is the method in which Devolutions PAM providers discover, compare and rotate passwords securely.
---

To rotate a password, {{ en.DVPAM }} must:

- Discover accounts on an identity provider and store those accounts securely
- Compare known passwords with account passwords
- Change account passwords and store new passwords

It performs these ***actions*** via three different types:; ***discovery***, ***heartbeat*** and ***password rotation***. 

{% snippet, "badgeInfo" %}
Although managed providers perform similar steps for password rotation, only when building {{ en.ANYID }} provider templates you will be able to manage actions directly.
{% endsnippet %}

### Related topics


### See also
