---
eleventyComputed:
  title: Task list
  description: Create a Task List to keep track of work that needs to be done by the team. Toggle the Task List pane in View – Panels – Task List.
---
Create a ***Task List*** to keep track of work that needs to be done by the team. Toggle the ***Task List*** pane in ***View – Panels – Task List***.
![Task List Button](https://cdnweb.devolutions.net/docs/en/rdm/windows/RDMWin2058.png)

You can perform a search to filter out the list of displayed tasks. You can search by ***Due Date***, ***Status***, or ***Username***.

{% snippet icon.badgeInfo %}
This feature is only available for the following data sources: [{{ en.DVLS }}](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/server/), [Azure SQL](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/), [SQL Server](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-sql-server/), and [SQLite](/rdm/windows/data-sources/data-sources-types/sqlite/).
{% endsnippet %}

![Task List](https://cdnweb.devolutions.net/docs/en/rdm/windows/clip11269.png)

### Creating a task

1. Click on ***Add*** to open the ***Task Management*** window.
![Add Button](https://cdnweb.devolutions.net/docs/en/rdm/windows/clip10247.png)
1. Enter your task information, like the name of the task, the priority, the due date, the description, etc.
![Task Management](https://cdnweb.devolutions.net/docs/en/rdm/windows/clip10248.png)

| OPTION   | DESCRIPTION                                                   |
|----------|---------------------------------------------------------------|
| Name                    | Enter a custom name for the task.                                                                                                                                                                                                       |
| Entry                   | Displays the entry currently selected in the ***{{ en.NPANE }}***. The task is assigned to this entry. It is a read-only field.   |
| Priority                | Set the priority of the task (from 0 to 100).                                                                                                                                                                                                       |
| Due date                | Set a deadline for the task.                                                                                                                                                                                                       |
| Description             | Enter a description of the task for the assigned user.                                                                                                                                                                                                       |
| User                    | Assign a user to the task.                                                                                                                                                                                                       |
| Assign me to this task  | Click this button to assign the task to yourself.                                                                                                                                                                                                   |
| Delete                  | Clear the assigned user.                                                                                                                                                                                                       |
| Status                  | Set a status for the task. Select between the following: <ul><li>Open<li>Assigned</li><li>In progress</li><li>Closed</li><li>Done</li><li>Cancelled</li><li>Postponed</li></ul>|
| Comment                 | Enter a comment for the task.                                                                                                                                                                                                       |

