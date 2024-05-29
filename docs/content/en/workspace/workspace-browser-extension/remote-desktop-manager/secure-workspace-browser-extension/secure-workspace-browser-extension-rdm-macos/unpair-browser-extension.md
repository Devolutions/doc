---
eleventyComputed:
  title: Unpair a browser extension (macOS)
---
In the event that you want to deny access to {{ en.RDMMAC }} from a previously paired browser extension, you need to delete it from {{ en.RDM }}.

1. In {{ en.RDM }}, go to ***File – Preferences – Browser Extensions***.
1. In the ***{{ en.WBEX }} Associations*** section, right-click the entry and select ***Remove***. Close the window to save the modifications.

{% snippet, "badgeInfo" %}
In the ***{{ en.WBEX }} Associations*** section, you will find a list of each association made to {{ en.RDM }} including some information to identify them. This includes the name specified at the time of association (which defaults to the web browser’s name), a part of the encryption key used between the two, its creation date, and the date when it was last used.
{% endsnippet %}

![Delete the {{ en.WBEX }} Association](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_Dwl4061.png)
