---
eleventyComputed:
  title: User Specific Settings
  description: Specific Settings are used to override the properties of an entry.
---
Allows session setting override for a user. Several settings can be overridden, such as user name, password or display.

In your ***{{ en.NPANE }}***, select the entry you wish to override and then do a right click Edit - Edit Entry (User Specific Settings) or in the Ribbon simply select Edit - Edit Entry (User Specific Settings).
![Edit - Edit Entry (User Specific Settings)](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac6056.png)

## Settings

{% snippet, "badgeInfo" %}
This feature is only available when using an [Advanced Data Source](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/). A setting on the data source allows usage of User Specific Settings. Contact your administrator if the menu is grayed out.
{% endsnippet %}

{% snippet, "badgeInfo" %}
***User Specific Settings*** are shared between {{ en.RDM }}, {{ en.DVLS }} and {{ en.DHUB }}.
{% endsnippet %}

{% snippet, "badgeCaution" %}
If both User Specific Settings and Local Machine Specific Settings are defined on the same entry, Local Machine Specific Settings have priority.
{% endsnippet %}

![User Specific settings](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac6057.png)

Please consult each tabs for more information:

* [Override Credentials](/rdm/mac/commands/edit/setting-overrides/user-specific-settings/override-credentials/)
* [General](/rdm/mac/commands/edit/setting-overrides/user-specific-settings/general/)
* [Settings](/rdm/mac/commands/edit/setting-overrides/user-specific-settings/settings/)
* [More](/rdm/mac/commands/edit/setting-overrides/user-specific-settings/more/)
* [VPN](/rdm/mac/commands/edit/setting-overrides/user-specific-settings/vpn/)
