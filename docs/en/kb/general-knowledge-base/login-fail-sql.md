---
title: Login Failed for UserX With SQL
---
If the following error code appears when attempting to connect to the data source "(0x80131904): Login failed for user 'UserX'", it is possible that the account has been locked after multiple login attempts. This would depend on the configured password policy enforcement. 

## Unlocking the SQL Database
The following SQL Query will confirm if the user has been locked: SELECT LOGINPROPERTY('UserX','islocked')  

The user can be manually unlocked by going to the user ***Properties*** – ***Status*** and unchecking ***Lock SQL user***. Then changing the password and finally executing the changes. 

### Alternative
Alternatively, the following query can be used:

ALTER LOGIN [SQLID] WITH PASSWORD = '****' UNLOCK  
{% snippet icon.badgeHelp %}
To learn more, read the Microsoft [SQL documentation](https://learn.microsoft.com/en-us/sql/sql-server/?view=sql-server-ver16).
{% endsnippet %}
