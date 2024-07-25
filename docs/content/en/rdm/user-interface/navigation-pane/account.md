---
eleventyComputed:
  title: Account
  description: The Account tab gives you access to settings for customizing your {{ en.RDM }} interface.
---
The ***Account*** tab gives you access to settings for customizing your {{ en.RDM }} interface. At the top, information about the account connected to {{ en.RDM }} is displayed.
![Account tab](https://cdnweb.devolutions.net/docs/RDMW6013_2023_2.png)

## Account information

Contains all account information, such as ***name, email, and {{ en.VLT }} status***. Internal and external tag can be added to the user via the web interface of [{{ en.DVLS }}](/server/web-interface/administration/security-management/users/) or [{{ en.DHUBB }}](/hub/web-interface/administration/management/users/) (depending of your datasource). These tags are useful for temporary users, such as ***contractors***. An expiration date must be set.

## Settings

{% snippet, "badgeInfo" %}
Changes made under the ***Settings*** section are applied to your {{ en.RDM }} application. This means that even if you change account or data source, the settings will still be in effect.
{% endsnippet %}

Under ***Settings***, you can choose the [theme](/rdm/windows/user-interface/customization/theme/) of your {{ en.RDM }} application between the ***Light*** theme and the ***Dark*** theme. You can also choose to mirror your system's theme.

Next, you can also change the [style of the main header (top menu)](/rdm/windows/user-interface/customization/style/) of your {{ en.RDM }} application. Choose between a ***Ribbon*** view or a ***Menu*** view.

## User interface profile

{% snippet, "badgeInfo" %}
User interface profile changes are applied to your account in the current data source. This means that if you change your user interface profile in a {{ en.DHUB }} or {{ en.DVLS }} data source in {{ en.RDM }}, the change will also be made in the web interface of that data source, and vice versa.
{% endsnippet %}

***User interface profiles*** allow users to have a tailored experience in {{ en.RDM }} and other Devolutions products based on their tasks and roles.

* ***IT professional***: A comprehensive interface with full-fledged capabilities and all remote connection features.
* ***Business user***: A streamlined interface for managing sensitive information, such as passwords.

{% snippet, "badgeHelp" %}
For a more detailed overview of the profiles, see [User interface profiles](/rdm/windows/user-interface/customization/usage-profiles/).
{% endsnippet %}

The profile can also be selected during the {{ en.RDM }} Onboarding process. If none is chosen or if the user decides to choose one later, they will be assigned the ***Default*** profile, which can be changed in ***File – Settings – User Interface – User interface profile*** or in the web interface.
