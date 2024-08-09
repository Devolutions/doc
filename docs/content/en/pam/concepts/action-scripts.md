---
_schema: default
eleventyComputed:
  title: Action scripts
  description: >-
    Action scripts are the scripts that are used to implement actions in {{ en.ANYID }} providers.
---

An ***action script*** is how {{ en.ANYID }} provider implementation ***actions***.

{{ en.DVPAM }} has two different types of providers; ***managed*** and ***AnyIdentity (AnyId)***. Both providers use actions to rotate passwords but perform those actions differently. Managed providers (and their ***actions***) are developed internally and baked into {{ en.DVPAM }}. {{ en.ANYID }} providers, on the other hand, implement ***actions*** via user-customizable PowerShell scripts. An ***action script*** carries out the functionality of the ***action***.

For {{ en.ANYID }} providers, {{ en.DVPAM }} simply acts as the ***action*** coordinator delegating the work to ***action scripts*** to discover, compare and change password upon password rotation requests.

{% snippet, "badgeInfo" %}
***Action scripts** are only exposed when creating AnyIdentity **templates**. Once created, **action scripts** are not visible when managing AnyIdentity **providers**.
{% endsnippet %}

### Related topics


### See also
