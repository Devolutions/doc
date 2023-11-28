---
eleventyComputed:
  title: Data report
---
The ***Data Report*** session type can be used to empower any/all users to generate reports, without having to grant them access to the actual server.
## Settings
### General  
![!!KB4545](https://webdevolutions.azureedge.net/docs/en/kb/KB4545.png)  
Create a Data Report entry and define the connection string by either:  

* Specify the connection in the entry itself.
* Use a credential entry.
* Inherited from a parent.
* Prompt for credentials.
### Parameters  
![!!KB4546](https://webdevolutions.azureedge.net/docs/en/kb/KB4546.png)  
Specify the parameters by setting the name, type and default value of all parameters.
### Query
![!!KB4547](https://webdevolutions.azureedge.net/docs/en/kb/KB4547.png)  
Enter the query in the Query tab, which features an SQL syntax-highlighted text box with line numbers.  
{% snippet icon.badgeInfo %}
Ensure that your DBA sets the proper user groups, and that each specific user(s) has access to it.
{% endsnippet %}
