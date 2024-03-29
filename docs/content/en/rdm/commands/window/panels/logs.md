---
eleventyComputed:
  title: Logs
---
The ***Logs*** feature is similar to [***Activity Logs***](/rdm/windows/commands/view/view/activity-logs/), but it only provides information about the selected entry. Logs are available from the context menu ***Window – Panels – Logs***.
![Logs Button](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6206.png)

## Functions

The log entries can be filtered by ***Date*** or by using a custom time period, specifying whether it is ***Local Time*** or ***UTC Time***.

It is also possible to enable the ***Show live sesison only (auto refresh)*** and ***Show user specific settings logs*** options by checking the appropriate box.
![Logs Options](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2029.png)

### Log Comment

![Insert Log Comment](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2031.png)

Clicking on the ***Insert Log Comment*** button opens a window that allows you to add a comment to the log while specifying a ticket number, a start date (and an end date, if desired), and notes.
![Add Log Comment Window](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2033.png)

### Generate a Report

![Generate Report](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2032.png)

Clicking on the ***Generate report*** button opens a window that allows you to generate a report of the logs while specifying the time period, the type of time (***Local Time*** or ***UTC Time***), and, optionally, an ***On open comment***, an ***On close comment***, and a ***Message***. When finished, clicking the ***OK*** button generates a report that can be saved, exported (in CSV, HTML, Xlsx, or XML format), or printed.
![Log Report](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2034.png)

## Logs

The log contains all CRUD operations (add, edit, and delete), displayed passwords, used credentials, etc. It is possible to right-click on an entry to access more options.
![Logs](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2030.png)

The information about entries is the same as in [***Activity Logs***](/rdm/windows/commands/view/view/activity-logs/), except that ***Folder***, ***Connection***, ***{{ en.VLT_MAJ }}***, and ***Connection Log ID*** are not available in ***Logs*** since the information is specific to an entry only. For a description of the available information, see ***Activity Logs***.
