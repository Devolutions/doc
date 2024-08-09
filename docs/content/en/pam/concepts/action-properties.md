---
_schema: default
eleventyComputed:
  title: Action properties
  description: >-
    Action properties are the properties assigned to an action that allows you to pass information to the action.
---


An ***action property*** also sometimes known as ***action parameters*** is a property assigned to an ***action*** that allows you to pass information to the ***actions***. Each ***action*** has a set of ***action properties*** both mandatory and optional with two different rough types; ***account properties*** and ***provider properties***. Think of ***action properties*** as parameters.

For example, a {{ en.DVPAM }} ***provider*** must connect and authenticate to an ***identity provider***. To do that, it typically requires a username and password. During the ***password rotation action***, for example, {{ en.DVPAM }} would use a username and password ***provider action property*** to provide that information. That ***identity provider*** might also have user accounts on it for {{ en.DVPAM }} to manage. {{ en.DVPAM }} needs a way to change account passwords for each user account on that ***provider*** so it would use an **account *action property*** called NewPassword, perhaps.

***Provider properties*** refer to ***action properties*** required to connect once per password rotation session to the ***identity provider*** e.g. using an administrative account with permission to enumerate accounts.

***Account properties*** refer to ***action properties*** that are associated with individual accounts on an ***identity provider*** e.g. username, password, location, etc.


### Related topics


### See also