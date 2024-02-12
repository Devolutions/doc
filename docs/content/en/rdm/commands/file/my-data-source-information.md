---
eleventyComputed:
  title: My data source information
---
{% tabs %}
{% tabItem "Windows" %}
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
{% endtabItem %}

{% tabItem "macOS" %}
Use the File - My Data Source Information to display the data source information details like the current username and security access. The My Data Source Information screen will also give you the data source configuration information such as database version and the effective Offline mode.  

{% snippet icon.badgeInfo %} 
The display of My Data Source Information can be different depending on the [Data Source Types](/rdm/mac/data-sources/data-sources-types/). 
{% endsnippet %}
 
## Settings 

### General 

![My Data Source Information - General tab](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10305.png) 

The General displays information on the data source such as:  

* Username 
* Description 
* Is administrator 
* Allow offline mode 
* Allow reveal password 
* Allow drag-and-drop 

### Sessions 

![My Data Source Information - Sessions](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10306.png) 

The Sessions tab will display user rights on the sessions such as:  

* Add sessions 
* Edit sessions 
* Delete sessions 
* View session details 
* View session information 
* Import sessions 
* Export sessions 
* Allow add entry in root folder 

### Groups 

The Groups tab displays which rights the user has into which user groups.  
![My Data Source Information - Groups](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10307.png) 

### User groups 

The Roles tab displays the roles that the user is a member of and the rights related to those roles.  
![Data Source Information - Roles](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10308.png)
{% endtabItem %}
{% endtabs %}