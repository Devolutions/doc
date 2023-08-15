---
title: Configure SQL Server
---
### Server Computer 

1. Install SQL Server or SQL Server Express (that edition is free). 

{% snippet icon.badgeInfo %} 
Newly installed SQL Server instances do not allow remote connections. Please follow the directions in SQL Server. 
{% endsnippet %}
 
{% snippet icon.shieldNotice %} 
For added security, you can enable SSL Encryption to communicate with your instance of SQL Server. 
Please follow directions on [http://support.microsoft.com/kb/316898](http://support.microsoft.com/kb/316898) 
{% endsnippet %}
 
2. To create an empty database, select ***File - Data Sources - Add***.  
![!!clip10088.png](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10088.png) 
1. Choose ***Microsoft SQL Server*** in the list.  
![!!clip10089.png](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10089.png) 
1. Configure the connection and run a test using ***Test Server***.  
![SQL Server Data Source Configuration](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip11017.png) 
