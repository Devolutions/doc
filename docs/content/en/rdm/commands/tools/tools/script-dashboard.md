---
eleventyComputed:
  title: Script dashboard 
  description: The script dashboard is a great addition for IT teams, who often have to use scripts with variables, specifically scripts which do not have a direct link with an entry.
---
The ***Script dashboard*** is useful for centralizing scripts and running them with specific permissions. It is a great addition for IT teams who often need to use scripts with variables, especially scripts that do not have a direct link to an entry (for example, a script that creates users in Active Directory).

1. Select ***Tools – Script dashboard*** in the ribbon of {{ en.RDM }}.
![Script dashboard](https://webdevolutions.blob.core.windows.net/docs/RDMW2014_2024_1.png)

{% snippet, "badgeInfo" %}
The ***Script dashboard*** feature is also available as an entry. Create a new entry in {{ en.RDM }} and select ***Script dashboard*** under ***Session – Other***.
{% endsnippet %}

2. The ***Script dashboard*** open.

![Script dashboard](https://webdevolutions.blob.core.windows.net/docs/RDMW4081_2024_2.png)

### Script dashboard

| SETTINGS         | DESCRIPTION                                                                                       |
|------------------|---------------------------------------------------------------------------------------------------|
| Execute          | Runs the selected script/macro.                                                                   |
| Execute (custom) | Runs the selected script/macro against the desired entry/sub-entry.                                |
| New script       | Open a ***Add new entry*** window containing all script-related entries.                          |
| Settings         | Contains customization settings for the Script dashboard UI.                                      |

### Overview tab

This tab provides an overview of the selected script, including information about its most recent execution and a preview of the script itself.

| SETTINGS            | DESCRIPTION                                                                                    |
|------------------|---------------------------------------------------------------------------------------------------|
| Last executed by | Indicates the identity of the user that last executed the script.                                 |
| Last executed on | Displays the date and time when the script was last executed.                                     |
| Parameters       | Lists the parameters in the PowerShell script.                                                    |
| Script preview   | Provides a preview of the script code, allowing for a quick review of its contents.               |

### Execution logs tab

This tab contains logs related to the execution of the script, detailing when the execution events started and when they concluded.

| Field            | Description                                                           |
|------------------|-----------------------------------------------------------------------|
| Log Date       | The date and time when the execution log entry was created.           |
| End Date/Time  | The date and time marking the end of the script’s execution period.  |
| User           | The username of the user who executed the script.                    | 

### Favorites

 Scripts can be added as ***favorite*** by clicking on the star. Favorites are listed on the left menu. 

 ![Add scripts as favorite by clicking on the star](https://webdevolutions.blob.core.windows.net/docs/RDMW4082_2024_2.png)