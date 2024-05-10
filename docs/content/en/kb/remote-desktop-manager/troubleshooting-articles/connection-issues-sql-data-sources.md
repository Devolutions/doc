---
eleventyComputed:
  title: Connection issues with SQL data sources
  description: Users unable to connect to their Microsoft SQL Server and Microsoft Azure SQL data sources through {{ en.RDM }} may face challenges due to various network or configuration issues.

---
Users unable to connect to their Microsoft SQL Server or Microsoft Azure SQL data sources through {{ en.RDM }} may face challenges due to various network or configuration issues.

## Solution

1. Open Command Prompt or Terminal and use the `ping` command to check the network connection to the server hosting the SQL database. This ensures that the server is reachable over the network.
1. Attempt to connect to the SQL server using SSMS. This step verifies whether credentials and network permissions are correctly configured to access the SQL data source.
1. If a connection via SSMS is established, the issue might be with RDM's configuration. Try recreating the connection within RDM to see if it resolves the issue.
1. If connection is still impossible, consider creating a portable version of RDM. This might bypass potential application-specific configuration issues.
1. If none of the above steps resolve the problem, the issue likely stems from the network configurations or restrictions. Consult with a network administrator to further diagnose and resolve network-related connectivity problems.

## Additional tips
- Ensure that firewall settings on both your local machine and the network do not block RDM or SQL Server.
- Check if there are any recent changes in network policies or credentials that might affect connectivity.
- Regularly update RDM and SSMS to the latest versions to avoid compatibility issues.