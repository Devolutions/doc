---
  title: Opened Sessions
---
The ***Opened Sessions*** tab shows currently running sessions by type and for the local machine only. The ***Opened Sessions*** can be accessed from the ***{{ en.NPANE }}*** menu.  
![Opened Sessions Tab](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac0010.png) 

It is also located in the ***View*** tab in the ***Ribbon***.  
![Opened Sessions Button](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac0011.png) 

You can give the focus to an opened session by double-clicking it from the list. All of the embedded sessions are listed and the external sessions will appear if {{ en.RDMMAC }} is able to discover the specific type of session.  

## ***Opened Sessions*** 

### Running sessions (Local) 
![Local Opened Sessions](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac0012.png) 

### Running sessions (Global) 
![Global Opened Sessions](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac0013.png) 

With the SQL Server data sources, you can monitor currently running sessions, provided they have been opened within {{ en.RDMMAC }}.  

For many reasons beyond our control, it is possible for a session to be terminated without {{ en.RDMMAC }} being aware that this has occurred. This can happen, for example, if {{ en.RDMMAC }} is not running when another application ends. Therefore, any terminated session will remain listed in the log. You may manually mark it as closed via the contextual menu by selecting ***Flag as Closed***.  

To review a detailed log, double click on a session entry. 

### Hidden Session tab 

Some sessions, like ***SSH Port Forward***, can be hidden from the dashboard when the connection is established. When these sessions are hidden, they are not displayed in the ***Local Sessions***. Select ***Hidden Sessions*** from the combo box above the entry list to display hidden sessions only.  
![Local session / Hidden session](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac0015.png) 

### Entry States 

You can see the status of the entries in the selected database. There are different viewing options. You can choose to show entries from all users and checked out, locked, or running entries.  
![Different Viewing Options](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac0014.png) 

## Notes 

* {{ en.RDMMAC }} tries to detect opened sessions even if they were not launched from the application. It uses the name of the process to accomplish this task.  

* VPN sessions do not appear in the list. 
