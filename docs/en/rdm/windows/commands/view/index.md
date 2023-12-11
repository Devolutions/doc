---
eleventyComputed:
  title: View
  description: The View tab is used to control different features regarding the panels, views, and logs of {{ en.RDM }}.    

---
The ***View*** tab is used to control different features regarding the panels, views, logs, and layout of {{ en.RDM }}.  
![View](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6203.png) 

Refer to the following topics for more information:  

* [***Panels***](/rdm/windows/commands/view/panels/) 
* [***View***](/rdm/windows/commands/view/view/) 
* [***Logs***](/rdm/windows/commands/view/logs/) 
* [***Layout***](/rdm/windows/commands/view/layout/) 

### Panels 

| OPTION   | DESCRIPTION                                                   |
|----------|---------------------------------------------------------------|
| {{ en.VLT_MAJ }}   | Access the view mode of the ***{{ en.NPANE }}*** for the current [{{ en.VLT }}](/rdm/windows/commands/view/panels/vault/).                                            |
| {{ en.UVLT_MAJ }}  | Display your [***{{ en.UVLT }}***](/rdm/windows/commands/view/panels/vault/) in the ***{{ en.NPANE }}***.                                                             |
| Opened Sessions    | Display the [currently opened sessions](/rdm/windows/commands/view/panels/opened-sessions/) in the ***{{ en.NPANE }}***.                                               |
| PAM Dashboard      | Connect to a privileged account, copy its password, and manage its checkout/check-in process through a [privileged access management dashboard](/rdm/windows/commands/view/panels/pam-dashboard/). |
| Favorites          | Display your [favorite entries](/rdm/windows/user-interface/navigation-pane/favorite-entries/) and folders in the ***{{ en.NPANE }}***.                                |
| Recent             | Display your [most recently used entries](/rdm/windows/user-interface/navigation-pane/most-recently-used-entries/) in the ***{{ en.NPANE }}***.                         |
| Task List          | Display a list of your current [tasks](/rdm/windows/commands/view/panels/task-list/).                                                                                  |
| Search             | [Search](/rdm/windows/commands/view/panels/search/) items through your database/data source using specific criteria.                                                   |


### View 

| OPTION   | DESCRIPTION                                                   |
|----------|---------------------------------------------------------------|
| Quick Connect              | Launch a [***Quick Connect***](/rdm/windows/commands/view/view/quick-connect/) session.                     |
| Activity Logs              | Open the [***Activity Logs***](/rdm/windows/commands/view/view/activity-logs/).                 |
| Credential List            | Open a window to view the credential entries in the database.                                   |
| Macros/Scripts/Tools List  | Open a window to search for macros, scripts, or tools in the database.                          |
| Synchronizer List          | Open a window to search for synchronizer entries in the database.                               |
| VPN List                   | Open a window to search for VPN entries in the database.                                        |
| Tab Groups                 | Open a docked window to browse through the various tab groups.                                  |
| Notification               | Open a window to browse through the various notifications (such as entries expired or about to be, or tasks).  |
| Message                    | Open a window to access your messages.                                                                                                                      |

### Logs 

This section only appears when using an individual type data source. 

| OPTION                | DESCRIPTION                               |
|-----------------------|-------------------------------------------|
| Local Connection Logs | Open a window to access your local logs.  |

### Layout 

| OPTION                  | DESCRIPTION                               |
|-------------------------|-------------------------------------------|
| Navigation              | Toggle the [***{{ en.NPANE }}***](/rdm/windows/user-interface/navigation-pane/).                                                    |
| Dashboard               | Toggle the [***Dashboard***](/rdm/windows/user-interface/content-area/dashboards/).                                                         |
| Thumbnails              | Toggle the ***Thumbnails***.              |
| Top Pane (Ribbon/Menubar)| Toggle the ***Ribbon*** (right-click the application header to bring it back or use <kbd>Alt</kbd>+<kbd>F11</kbd>). |
| Grouped Tab Bar         | Toggle the [***Grouped Tab Bar***](/rdm/windows/commands/view/layout/grouped-tab-bar/) (must have group tabs to work). |
| Status Bar              | Toggle the ***Status bar***.               |
| Description             | Toggle the ***Description*** pane.         |
| Asset                   | Toggle the ***Asset*** pane.               |
| Attachments             | Toggle the [***Attachments***](/rdm/windows/commands/view/layout/attachments/) pane.                        |
| Logs                    | Toggle the [***Logs***](/rdm/windows/commands/view/layout/logs/) pane.                                                                   |
| Task                    | Toggle the [***Task***](/rdm/windows/commands/view/layout/task/) pane.                                                                   |


{% snippet icon.badgeInfo %} 
Although they are windowed by default, all those panes can be dragged and docked anywhere within {{ en.RDM }}. 
{% endsnippet %}
