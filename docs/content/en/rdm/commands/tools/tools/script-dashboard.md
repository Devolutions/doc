---
eleventyComputed:
  title: Script dashboard 
  description: The script dashboard is a great addition for IT teams, who often have to use scripts with variables, specifically scripts which do not have a direct link with an entry.
---

The ***Script dashboard*** is a great addition for IT teams, who often have to use scripts with variables, specifically scripts that do not have a direct link to an entry (for example, a script creating users in Active Directory).

## Settings

1. Open {{ en.RDM }}.
1. Select ***Tools – Script Dashboard*** in the ribbon of {{ en.RDM }}.
![Script Dashboard](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDM6000_2024_1.png)

{% snippet icon.badgeInfo %}
The ***Script Dashboard*** feature is also available as an entry. Create a new entry in {{ en.RDM }} and select ***Script Dashboard*** under ***Session – Other***.
{% endsnippet %}

3. The ***Script Dashboard*** open.

![Script Dashboard](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDM6003_2024_1.png)

### Overview Tab

This tab provides an overview of the selected script, including information about its most recent execution and a preview of the script itself.

| SETTINGS            | DESCRIPTION                                                                                       |
|------------------|---------------------------------------------------------------------------------------------------|
| Last executed by | Indicates the identity of the user that last executed the script.                                 |
| Last executed on | Displays the date and time when the script was last executed.                                     |
| Script preview   | Provides a snippet or the full view of the script code, allowing for a quick review of its contents. |

### Execution Logs Tab

This tab contains logs related to the execution of the script, detailing when the execution events started and when they concluded.

| Field            | Description                                                           |
|------------------|-----------------------------------------------------------------------|
| Log Date       | The date and time when the execution log entry was created.           |
| End Date/Time  | The date and time marking the end of the script's execution period.  |

### Favorites

 Scripts can be added as ***favorite*** by clicking on the star. Favorites are listed on the left menu. 

![Add scripts as favorite by clicking on the star](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDM6001_2024_1.png)
