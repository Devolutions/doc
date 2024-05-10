---
eleventyComputed:
  title: Permission issues
  description: Despite having configured your permissions (whether set through inheritance or with custom permissions) you may find they are not properly enforced.
---
Despite having configured your permissions (whether set through inheritance or with custom permissions) you may find they are not properly enforced.

## Solution 1

When creating users, make sure that their user type are set to ***User***.

![!!User creation](https://cdnweb.devolutions.net/docs/RDMW4028_2024_1.png)

{% snippet icon.badgeInfo %}
User types of existing users can be consulted at any time in ***Administration*** – ***Users***, under the ***User Type*** column.
{% endsnippet %}

## Solutions 2

Often, users are created and not given permissions directly, but are instead added to user groups that have those permissions. To check if this is the case, go to  ***Administration*** – ***Users***, and consult the ***User Groups*** column. You can then [reassign users to different user groups or remove them](https://docs.devolutions.net/rdm/user-groups-based-access-control/) as needed.

![!!User groups column](https://cdnweb.devolutions.net/docs/RDMW4030_2024_1.png)

## Solution 3

If permissions are enforced for everything but a subset of entries, it may be that those entries inherit their permissions from a parent folder which does not inherit its own permissions from the vault settings.

To remedy this, right-click on the parent folder, go to ***Properties*** – ***Security*** – ***Permissions*** and make sure the permission is set to ***Inherited***.

![Permissions of a parent folder](https://cdnweb.devolutions.net/docs/RDMW4033_2024_1.png)