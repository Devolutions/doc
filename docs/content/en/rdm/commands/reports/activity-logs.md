---
eleventyComputed:
  title: Activity logs
  description: Activity Logs provide a robust logging solution. With this feature, it is possible to monitor an open session for all users using Advanced Data Sources.
---
***Activity Logs*** provide a robust logging solution. With this feature, it is possible to monitor an open session for all users using [Advanced Data Sources](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/).
![Activity Logs](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2259.png)

{% snippet icon.badgeInfo %}
Depending on the permissions each user has, they may only be able to access [***Local Connection Logs***](/rdm/windows/commands/view/logs/).
{% endsnippet %}

### Search

All activities in the data source are automatically displayed when opening the ***Activity Logs*** without having to apply any settings. However, search fields are available and can be useful when there are many activity entries. The results can be refined by specifying the ***Date*** or a custom period, the ***Username***, the ***Message***, the ***Machine name***, the ***Folder***, the ***On open comment***, ***On close comment*** and the ***Ticket #***. Select ***All {{ en.VLT }}s*** to see entries from all other {{ en.VLT }}s you have access to. It is also possible to choose between ***Local Time*** and ***UTC Time*** and to search in all {{ en.VLT }}s or in the current {{ en.VLT }} only. When all the criteria have been chosen, the ***Search*** button will apply them to the results.
![Activity Logs Search Fields](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10252.png)

### Logs

The log contains all the CRUD operations (add, edit, and delete), passwords being viewed, credentials being used by other sessions, etc. It is possible to right-click an entry to access more options.
![Logs](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2021.png)

The information available for each activity line is presented in the following table.

| OPTION              | DESCRIPTION |
|---------------------|-------------|
| Folder              | Indicates the folder where your entry is located.       |
| Connection          | Indicates the connection being used to open your entry. |
| {{ en.VLT_MAJ }}    | Indicates the {{ en.VLT }} in which the action was executed. |
| Message             | Indicates the action that has been executed on your entry or session. |
| On Open Comment     | The ***On Open Comment*** is defined in the ***Log*** tab of your session. |
| On Close Comment    | The ***On Close Comment*** is defined in the ***Log*** tab of your session. |
| Log Date            | Indicates the date and time your session was opened or your entry was edited. |
| End Date/Time       | Indicates the date and time your session or entry was closed. |
| Active Time         | This information is only available for embedded mode sessions. The active time of your session, meaning the time at which your session was open in embedded mode and the time you were active on your session, will be recorded. If your session is open, but you are on the ***Dashboard*** tab, for example, and not on you session tab, no active time will be recorded. |
| Duration            | This information is only available for embedded mode sessions. When sessions are open in embedded mode, the duration of the session will be recorded. This means that even if you are on the ***Dashboard*** tab, for example, and not actively working in your session, but your session tab is open, the session duration will be recorded. |
| Machine User        | Indicates the name of the machine user. |
| User                | Indicates the connected user's name.    |
| Connection user     | Indicates the connection user.          |
| Ticket #            | Indicates the ticket number.            |
| Machine             | Indicates the machine name.             |
| Connection Type     | Indicates the connection type that was used. |
| Connection Logs ID  | Indicates the unique identifier of the connection log. |
