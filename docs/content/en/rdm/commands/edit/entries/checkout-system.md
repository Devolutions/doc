---
eleventyComputed:
  title: Checkout system
  descrption: The Checkout system locks an entry while it is being used or modified. It prevents users from using or editing an entry at the same time.
---
{% youtube '-QbEyscBx8s' %}

The ***Checkout system*** locks an entry while it is being used or modified. It prevents users from using or editing an entry at the same time.

The checkout system can be enabled for ***Sessions***, ***Documents***, ***Credentials***, and ***Information*** entries.

You can set the check out mode at the {{ en.VLT }}, folder or entry level.

{% snippet icon.badgeInfo %}
This feature is only available when using [SQL Server](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-sql-server/) or [{{ en.DVLS }}](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/server/) data sources.
{% endsnippet %}

{% snippet icon.badgeInfo %}
Administrators can set ***Automatic check in after*** a number of minutes in ***Administration – System Settings – {{ en.VLT_MAJ }}***.
{% endsnippet %}

{% snippet icon.badgeInfo %}
Administrators can force ***Check In*** entries that are ***Check Out*** by other users. Right-click the entry that is check out, click ***Check In***.
{% endsnippet %}

### Security Settings

To access the check out settings, go into the ***Properties*** of an entry, folder or of the root folder. Navigate to the ***Security Settings*** section.
![!!RDMWin2233](https://cdnweb.devolutions.net/docs/en/rdm/windows/RDMWin2233.png)

### Checkout mode

***Checkout mode*** enables or disables the checkout system. It also decides how the checkout mode functions.
![!!clip3519](https://cdnweb.devolutions.net/docs/en/rdm/windows/clip3519.png)

| OPTION                      | DESCRIPTION                                                            |
|-----------------------------|------------------------------------------------------------------------|
| Root          | Inherits the checkout mode setting from the root folder.                             |
| Not available | Disables the checkout system.                                                        |
| Automatic     | Checks out an entry automatically when the entry is opened and automatically checks the entry in when the entry is closed. Users can edit properties without checking out the entry.                                                                                |
| Manual        | Users need to check out the entry manually prior to opening or editing the entry. No action can be performed without checking out the entry.                                                                                                 |
| Inherited     | Inherits the check out mode from the parent folder.                                  |
| Optional      | Offers the option to check out an entry manually or use (open and edit) the entry without checking it out.                                                                                                   |

### Checkout prompt

***Checkout prompt*** sets if a user must enter a comment when they check out the entry. Administrators can monitor the comments through the logs available on the entry or the ***Activity Logs***.
![!!clip3522](https://cdnweb.devolutions.net/docs/en/rdm/windows/clip3522.png)

| OPTION   | DESCRIPTION                                  |
|----------|----------------------------------------------|
| Root     | Uses the checkout prompt setting from the root folder. |
| Yes      | Prompts the user for comment when they check out an entry. |
| No       | Removes the prompt for comment.              |
| Inherited | Inherits the setting from a parent folder.  |

