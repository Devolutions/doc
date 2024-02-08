---
eleventyComputed:
  title: My data source information
---
The ***Data Source Information*** window displays various information related to the current data source, such as the current user and security access. 

{% snippet icon.badgeInfo %} 
The ***My Data Source Information*** view can be different depending on the [Data Source Type](/rdm/windows/data-sources/data-sources-types/). This topic uses an SQL Server data source. 
{% endsnippet %}
 
![File – My Data Source Information](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip3567.png) 

## User and security 

### General 

The General tab displays information about the current user and data source configuration.  
![My Data Source Information - General](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10881.png) 

| OPTION                      | DESCRIPTION                                                                                     |
|-----------------------------|-------------------------------------------------------------------------------------------------|
| Database user               | The name of the user currently logged to the database.                                          |
| User                        | The actual windows user.                                                                        |
| Description                 | Display the description of the user connected to the data source.                               |
| Is administrator            | Indicates if the user is an administrator.                                                      |
| Allow offline mode          | Indicates if the user can use the data source in offline mode.                                  |
| Allow drag-and-drop         | Indicates if the user can drag-and-drop entries in the data source.                             |
| Is Auto Refresh             | Indicates if the data source auto refreshes.                                                    |
| Auto refresh interval       | Indicates the delay for the auto refresh to occur.                                              |
| Is Two Factor Configuration | Indicates if the data source is configured with a second factor of authentication.              |


### Entries 

![My Data Source Information – Entries](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10065.png) 

| OPTION                                 | DESCRIPTION                                                                   |
|----------------------------------------|-------------------------------------------------------------------------------|
| Add, Edit and Delete entries           | Indicates if the user has the right to add, edit, or delete entries.          |
| View information section               | Indicates if the user can view the information section of entries.            |
| Import and Export entries              | Indicates if the user has the privilege to import or export entries.          |
| Allow add entry in {{ en.VLT }} folder | Indicates if the user can add entries in the {{ en.VLT }} of the data source. |


### User Groups 

The ***User Groups*** tab displays the user groups that the user is a member of and the rights related to those user groups. 

{% snippet icon.badgeInfo %} 
This feature is only available with an SQL Server/Azure SQL and a {{ en.DVLS }} (DVLS) data source. 
{% endsnippet %}
 
![!!RDMWin2219](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2219.png)
