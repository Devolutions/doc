---
eleventyComputed:
  title: Task list
  description: Create a Task List to keep track of work that needs to be done by the team.
---
Create a ***Task List*** to keep track of work that needs to be done by the team. Toggle the ***Task List*** pane in the ***View*** tab.
![Task List Button](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac0016.png)

You can perform a search to filter out the list of displayed tasks. You can search by ***Due Date***, ***Status***, or ***Username***.

{% snippet, "badgeInfo" %}
This feature is only available for the following data sources: [{{ en.DVLS }}](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/server/), [Azure SQL](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/), [SQL Server](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/microsoft-sql-server/), and [SQLite](/rdm/mac/data-sources/data-sources-types/sqlite/).
{% endsnippet %}

![Task List](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac0017.png)

### Creating a task

1. Click on ***New*** to open the ***Task Management*** window.
![New Button](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac0018.png)
1. Enter your task information, like the name of the task, the priority, the due date, the description, etc.
![Task Management](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2146.png)

| OPTION        | DESCRIPTION                                                                                                                     |
|---------------|---------------------------------------------------------------------------------------------------------------------------------|
| Name          | Enter a custom name for the task.                                                                                               |
| Entry         | Displays the entry currently selected in the ***{{ en.NPANE }}***. The task is assigned to this entry. It is a read-only field. |
| Priority      | Set the priority of the task (from 0 to 100).                                                                                   |
| Due date      | Set a deadline for the task.                                                                                                    |
| Creation date | The date and time when this task was created.                                                                                   |
| Description   | Enter a description of the task for the assigned user.                                                                          |
| User          | Assign a user to the task.                                                                                                      |
| Current user  | Click this button to assign the task to yourself.                                                                               |
| Status        | Set a status for the task. Select between the following:<ul><li>Assigned</li></li>Cancelled</li><li>Closed</li> <li>Done</li><li>In progress</li><li>Open</li><li>Postponed</li></ul> |
| Comment       | Enter a comment for the task.                                                                                                   |
