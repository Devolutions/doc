---
eleventyComputed:
  title: SQL Server connection timeout
  description: Connection timouts with a SQL Server can take many forms.
---
Connection timeouts with a SQL Server can take many forms. Here are some of the most common:

`System.Data.SqlClient.SqlException : Timeout expired. The timeout period elapsed prior to completion of the operation or the server is not responding.`

`System.Data.SqlClient.SqlException (0x80131904): Timeout expired. The timeout period elapsed prior to completion of the operation or the server is not responding. System.ComponentModel.Win32Exception (0x80004005): The wait operation timed out.`

`Microsoft.Data.SqlClient.SqlException (0x80131904): A network-related or instance-specific error occurred while establishing a connection to SQL Server. The server was not found or was not accessible. Verify that the instance name is correct and that SQL Server is configured to allow remote connections. (provider: TCP Provider, error: 0 - This is usually a temporary error during hostname resolution and means that the local server did not receive a response from an authoritative server.)`

See the full list of errors in [Timeout expired messages when connecting to SQL Server](https://learn.microsoft.com/en-us/troubleshoot/sql/database-engine/connect/timeout-expired-error#verify-timeout-expired-errors).

## Solution 1
To address this issue, the initial approach you should consider is [increasing your connection timeout](https://docs.devolutions.net/rdm/data-sources/data-sources-types/advanced-data-sources/microsoft-sql-server/#advanced).

1. In {{ en.RDM }}, go to ***File – Data sources*** and edit your Microsoft SQL Server data source by clicking on the ***Edit data source*** icon.
1. In the ***Advanced*** tab, increase the ***Connection timeout*** delay.
1. Save your changes.

## Solution 2
If adjusting the connection timeout duration did not resolve the issue, check your firewall settings. SQL Server operates on dynamic ports, requiring the appropriate ports to be open for seamless communication between {{ en.RDM }} and your SQL Server. For guidance on which ports to enable, please consult the "Ports used by the Database Engine" section in [Configure the Windows Firewall to allow SQL Server access](https://learn.microsoft.com/en-us/sql/sql-server/install/configure-the-windows-firewall-to-allow-sql-server-access?view=sql-server-ver16#ports-used-by-the-database-engine).

## Solution 3
If you continue to experience connection timeout issues, the root cause might be related to the SQL Listener or availability groups. In such cases,try setting the ***MultiSubnetFailover*** value to ***True***.

1. In {{ en.RDM }}, go to ***File – Data sources*** and edit your Microsoft SQL Server data source by clicking on the ***Edit data source*** icon.
1. In the ***Advanced*** tab, click on ***More settings***.
1. Search for the MultiSubnetFailover setting and set its value to ***True***.

   {% snippet, "badgeNotice" %}
   It is recommended to use either ***Failover Partner*** and ***MultiSubnetFailover***, not both simultaneously. Ensure the ***Failover Partner*** value is cleared.
   {% endsnippet %}

1. Click ***OK*** then save your changes.

{% snippet, "badgeHelp" %}
See this Microsoft article for more information: [Timeout occurs when you connect to an Always On listener in multi-subnet environment](https://learn.microsoft.com/en-us/troubleshoot/sql/database-engine/availability-groups/listener-connection-times-out).
{% endsnippet %}

## Other possible solutions
If the solutions mentioned above have not resolved the issue, additional potential fixes can be found in the following Microsoft articles:
* [Timeout expired messages when connecting to SQL Server](https://learn.microsoft.com/en-us/troubleshoot/sql/database-engine/connect/timeout-expired-error)
* [A network-related or instance-specific error occurred while establishing a connection to SQL Server](https://learn.microsoft.com/en-us/troubleshoot/sql/database-engine/connect/network-related-or-instance-specific-error-occurred-while-establishing-connection)

Feel free to [contact our support team](mailto:service@devolutions.net) for further assistance.
