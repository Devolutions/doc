---
eleventyComputed:
  title: User template
  description: User Template allows you to modify the user settings that are selected by default when creating a new user.
---
***User Template*** allows you to modify the user settings that are selected by default when creating a new user in [***User Management***](/rdm/windows/commands/administration/management/user-management/).

![Administration – System Settings – User Management – User Template](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2173.png)

| SETTING            | DESCRIPTION                                                           |
|--------------------|-----------------------------------------------------------------------|
| Offline mode       | Defines the default setting for what users can do in [***Offline mode***](/rdm/windows/data-sources/offline-mode/) when creating a new user. Choose between ***Disabled*** (disables the Offline mode), ***Cache only***, ***Read only***, and ***Read/write***.                |
| User type          | Defines the [user type](/rdm/windows/commands/administration/management/user-management/user-types/) selected by default when creating a new user. Choose between ***Administrator***, ***User***, and ***Read-only user***.                                                       |
| User license type  | Defines the user license type selected by default when creating a new user. Choose between ***Default***, ***Connection Management***, and ***Password Management***.                                                                                                           |
| User interface profile      | Defines the [user interface profile](/rdm/windows/user-interface/customization/usage-profiles/) selected by default when creating a new user. Choose between ***Default***, ***IT professional***, and ***Business user***.                                                           |
| User default {{ en.VLT }} | Defines the default {{ en.VLT }}(s) for users. Select them from a {{ en.VLT }} list.   |
| Disable {{ en.UVLT }}     | Defines if the {{ en.UVLT }} is disabled or not by default when creating a new user.    |

{% snippet, "badgeInfo" %}
Other options can be enabled/disabled depending on the data source type.
{% endsnippet %}
