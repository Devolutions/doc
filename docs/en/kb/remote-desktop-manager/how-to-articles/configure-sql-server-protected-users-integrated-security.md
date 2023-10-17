---
eleventyComputed:
  title: Configure SQL Server for Protected Users with Integrated Security
---
Here are the steps to configure your SQL Server to allow your ***Protected Users*** to connect to the Database using the Integrated Security authentication method.

According to Microsoft ***Protected Users*** blocks the use of [NTLM hashes](https://docs.microsoft.com/en-us/windows-server/security/credentials-protection-and-management/protected-users-security-group#domain-controller-protections-for-protected-users) It is however possible to configure SQL Server to also use [Kerberos for Integrated Security](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/register-a-service-principal-name-for-kerberos-connections) The good news is that this is supported out-of-the-box by {{ en.RDM }}.

For SQL Server to support Kerberos authentication, SPNs need to be created. By default, the service runs under accounts that lack the required permissions. We suspect you might have the following messages when SQL Server starts (you can see the logs in SSMS under ***Management SQL Server Logs***).

![!!KB4657](https://webdevolutions.azureedge.net/docs/en/kb/KB4657.png)  

You will need to configure the SQL Server service to run under ***Network Service*** as it has the [necessary permissions](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/register-a-service-principal-name-for-kerberos-connections?view=sql-server-ver15#Permissions) According to [this article](https://dba.stackexchange.com/questions/180064/what-should-my-spn-entries-look-like-for-each-sql-instance/180147#180147) it is also possible to grant the permissions to create SPNs to a service account. You will also need to change the account in SQL Server Configuration Manager.  
![!!KB4658](https://webdevolutions.azureedge.net/docs/en/kb/KB4658.png)  
![!!KB4659](https://webdevolutions.azureedge.net/docs/en/kb/KB4659.png)  

However, on our server, SQL Server was still reporting that it was unable to register the SPNs. We used [Microsoft Kerberos Configuration Manager for SQL Server](https://www.microsoft.com/en-ca/download/details.aspx?id=39046) to fix the SPNs. It shows clickable buttons in the Action columns.  
![!!KB4660](https://webdevolutions.azureedge.net/docs/en/kb/KB4660.png)  

After restarting the SQL Server service, you should see “The SQL Server Network Interface library successfully registered the Service Principal Name (SPN) [ **MSSQLSvc/vdownsrv-sql3.downhill.loc:1433** ] for the SQL Server service.” in the logs.

At this point the connection should work again in {{ en.RDM }}.