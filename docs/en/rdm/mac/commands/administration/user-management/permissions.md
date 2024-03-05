---
eleventyComputed:
  title: Permissions
---
The Permissions section allows you to assign permissions. Controls are sometimes hidden depending on the data source or the state of other controls.

## Settings

### Permissions
![User Management – Permissions](https://cdnweb.devolutions.net/docs/en/rdm/mac/clip10389.png)

The options directly above the grid are for public folders, meaning any folder that has not been assigned a user group will be assigned those rights. They also act as the most basic permission you can assign because they are needed to allow permissions for each of the user group listed below, when they are not checked the corresponding column of the grid is grayed out.

| OPTION | DESCRIPTION                                                      |
|--------|------------------------------------------------------------------|
| View   | Allows the user to View AND USE the entries for that user group. |
| Add    | Allows the user to add entries in group/folders for that user group. Will also grant the Add privilege for public groups. Also controls the visibility of the Add column in the Groups grid. The Add privilege need to be check if the user need to add sessions in the {{ en.UVLT }}. |
| Edit   | Allows the user to edit entries in groups/folders for that user group. Will also grant the Edit privilege for public groups. Also controls the visibility of the Edit column in the Groups grid. The Edit privilege need to be check if the user need to edit sessions in the {{ en.UVLT }}. |
| Delete | Allows the user to delete entries in groups/folders for that user group. Will also grant the Delete privilege for public groups. Also controls the visibility of the Delete column in the Groups grid. The Delete privilege need to be check if the user need to delete sessions in the {{ en.UVLT }}. |


{% snippet icon.shieldWarning %}
For higher security, its a best practice to set user groups on all the {{ en.VLT }} level folders. This ensures there are no public folders and that you have good control over the activity in your system.
{% endsnippet %}

All user groups are listed in the grid, and you can assign permissions using the corresponding columns.

{% snippet icon.shieldWarning %}
Granting the View permission does allow the right to also launch/open the sessions of that group.
{% endsnippet %}
