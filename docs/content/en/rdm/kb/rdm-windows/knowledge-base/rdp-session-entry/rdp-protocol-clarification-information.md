---
eleventyComputed:
  title: RDP clarification and information
  description: In {{ en.RDM }}, the latest RDP version uses the latest version of the Microsoft RDP ActiveX present on the system.
---
In {{ en.RDM }}, the latest RDP version uses the latest version of the Microsoft RDP ActiveX present on the system - it’s always **mstscax.dll**, but the DLL contains different versions of the the ActiveX interface.

FreeRDP is the only RDP client we embed into {{ en.RDM }}, but it is only used if you change the RDP Version to one of the FreeRDP options available. All other options use the Microsoft RDP ActiveX which is always external to {{ en.RDM }}

{% snippet, "badgeInfo" %}
We have never embedded the Microsoft RDP client into {{ en.RDM }}, mostly because it is not possible to redistribute it separately. All you need to stay up to date is to update Windows, as we use the DLL present on the system, which we have no control over.
{% endsnippet %}

In both cases, the Microsoft RDP client is external to {{ en.RDM }} Under regular conditions, the fallback is not expected to happen - if you request **mstscax.dll**, it will always use **mstscax.dll** - the condition where **mstscax.dll** is missing is not handled.
