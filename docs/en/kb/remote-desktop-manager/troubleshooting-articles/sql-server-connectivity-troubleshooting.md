---
title: SQL Server Connectivity Troubleshooting
---
SQL Server installs with limited network connectivity. Therefore, when initially installed, the Database Engine cannot be accessed from another device.  

Jump to these connectivity issues troubleshooting help.  
{% snippet icon.badgeInfo %}
Before everything, try to access the database via SQL Server Management Studio.
{% endsnippet %}  

* <a href="#allow">Allow remote access</a>
* <a href="#network">A network-related or instance-specific error occurred...</a>
* <a href="#protocols">Enable protocols</a>
* <a href="#token">Login failed for user – reason: token-based server access validation failed</a>
* <a href="#untrusted">Login failed. the login is from an untrusted domain and cannot be used with windows authentication</a>
* <a href="#firewall">Open a communication port in the firewall</a>
* <a href="#udl">Test the connection with a universal data link (.udl) file]</a>
* <a href="#unable">Unable to connect to sql server</a>

### Allow Remote Access
<a name="allow"></a>

On older versions of SQL Server, remote connections must be allowed manually. Follow [these instructions](https://msdn.microsoft.com/en-CA/library/ms191464.aspx) to enable connectivity.
### Enable protocols
<a name="protocols"></a>

To connect to the Database Engine from another device, a protocol, such as TCP/IP, must be enabled.
1. Open the ***SQL Server Configuration Manager***  
![!!KB4060.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4060.png)
1. Expand the ***SQL Server Network Configuration***
1. Select an instance.  
![!!KB4245.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4245.png)
1. Right-click the desired protocol, then select ***Enable***  
![!!KB4230.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4230.png)
### Open a communication port in the firewall
<a name="firewall"></a>

To connect to an SQL Server from another device, a communication port must be opened in the firewall.  
{% snippet icon.badgeNotice %}
The default port for TCP/IP is 1433
{% endsnippet %}  

1. Open the ***Windows Firewall with Advanced Security***  
![!!KB4277.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4277.png)
1. Select ***Inbound Rules*** in the left pane.
1. Right-click ***Inbound Rules*** and select ***New Rule***  
![!!KB4278.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4278.png)
1. In the ***Rule Type*** page, select ***Port***, then click ***Next***  
![!!KB4279.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4279.png)
1. In the ***Protocol and Ports*** page, select ***TCP***
1. Select ***Specific local ports***, then type the port number of the instance of the Database Engine, then click ***Next***  
{% snippet icon.badgeNotice %}
The SQL Server default instance listens on port 1433
{% endsnippet %}  
{% snippet icon.badgeInfo %}
If you have an Anti-virus running on your server, you should also make sure that the port is allowed.
{% endsnippet %}  

![!!KB4280.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4280.png)  

7. In the ***Action*** page, select ***Allow the connection***, then click ***Next***  
![!!KB4281.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4281.png)
1. In the ***Profile*** page, select the profiles that describe the computer connection environment, then click ***Next***  
![!!KB4282.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4282.png)
1. In the ***Name*** page, enter a ***Name*** and ***Description*** for the rule, then click ***Finish***  
![!!KB4283.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4283.png)
### Unable to connect to sql server
<a name="unable"></a>

* Ensure that each SQL Server instances are started and running.
* Go in ***Help - View Application Log*** to see if relevant error messages are present. There's a good chance that you will see <a href="#network">A network-related or instance-specific error occurred...</a>
* Create a Universal Data Link (.udl) file to test your SQL Connection (see <a href="#udl">Universal Data Link (.udl) file</a>
* An Anti-virus or a Firewall could be blocking the application.
* Check the network settings connectivity.
### Test the connection with a universal data link (.udl) file
<a name="udl"></a>

This will test that the instance is allowing your workstation to connect. Firewalls and anti-virus software may still prevent {{ en.RDM }} from accessing the network even though the Universal Data Link test is conclusive.  

1. Open the ***Windows File Explorer***
1. Navigate to the folder in which the ***.udl*** file will be created and stored.
1. Select the ***Home*** tab and using the ***New item*** menu, create a ***Text Document***  
![!!KB4246.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4246.png)
1. Rename this file and change its file extension to ***.udl***  
{% snippet icon.badgeInfo %}
File name extensions might be hidden by the ***Windows File Explorer*** To show the file name extensions, go to the ***View*** tab of the ***File Explorer*** and enable the ***File name extensions*** option.
{% endsnippet %}  
{% snippet icon.badgeCaution %}
Do not include space characters in the name of the file. A warning that changing the file extensions can cause files to become unusable might be displayed, disregard it.
{% endsnippet %}  

![!!KB4247.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4247.png)  

5. Double-click the ***.udl*** file to open the ***Data Link Properties*** dialog box.
1. In the ***Provider*** tab, select the ***Microsoft OLE DB Provider for ODBC Drivers*** provider.  
![!!KB4248.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4248.png)
1. In the ***Connection*** tab, select ***Use connection string***, and enter a custom connection string.  
{% snippet icon.badgeNotice %}
Example of valid connection string: Driver={SQL Server};Server=myServerAddress;Database=myDataBase;Uid=myUsername;Pwd=myPassword;
{% endsnippet %}  
{% snippet icon.badgeCaution %}
Validate that the server name is type correctly (known as the Instance name).
{% endsnippet %}  

![!!KB4249.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4249.png)  

8. Use the ***Advanced*** tab to view and set other initialization properties for your data.  
![!!KB4259.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4259.png)
1. Use the ***All*** tab to review and edit all OLE DB initialization properties available for your OLE DB provider.  
![!!KB4275.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4275.png)
1. In the ***Connection*** tab, use the ***Test Connection*** button to test the SQL Server connectivity.  
![!!KB4276.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4276.png)
1. Click ***OK*** to save the connection string to the Universal Data Link (***.udl***) file.
### Login failed for user – reason: token-based server access validation failed
<a name="token"></a>

Finding the true reason for this is quite a process. A web search reveals so many solutions to attempt, and it is easy to get lost is all those steps. The thing to keep in mind is that the error message is misleading and the cause is often a simple thing.  

The first step is to ensure that the issue is not unique to {{ en.RDM }} Testing with a <a href="#udl">Universal Data Link (.udl) file</a>  as shown above will prove that the workstation configuration is not the issue.  

When granting rights to the DB using AD group membership and one of your users as that error message, you must check privileges for ALL the AD groups that he belongs too. Anything with an explicit DENY must be evaluated carefully. The query below will help identify these occurrences.  

```
select princ.*, perm.* from sys.server_principals princ, sys.server_permissions perm  
where perm.grantee_principal_id = princ.principal_id  
AND state_desc = 'DENY'  
```
### Login failed. the login is from an untrusted domain and cannot be used with windows authentication  
<a name="untrusted"></a>

![!!KB2009.png](https://webdevolutions.azureedge.net/docs/en/kb/KB2009.png)  
The following error message appear when you can't access {{ en.RDM }} data source with Integrated Authentication when connected to a Dialup VPN.  

1. Locate your VPN connectionspbk file.
1. You can find it here: %APPDATA%\Microsoft\Network\Connections\Pbk or if you have it set to allow all users to use the connection, you can find it here: C:\ProgramData\Microsoft\Network\Connections\Pbk
1. Edit thepkb file with a text editor and find the line UseRasCredentials=1
1. Disable this setting by changing the 1 to 0: UseRasCredentials=0
### A network-related or instance-specific error occurred...
<a name="network"></a>

This error message means that the server could not be reached, the possible causes are numerous.  

These steps are for Client side troubleshooting exclusively. For full guidance on this issue please consult [this article on Technet](http://social.technet.microsoft.com/wiki/contents/articles/2102.how-to-troubleshoot-connecting-to-the-sql-server-database-engine.aspx)  

If the error message indicates that the Named Pipes are in use and you are accessing a remote server, ensure that the TCP IP protocol is used simply by adding tcp: in front of the instance name, i.e. tcp:vmtxg.database.windows.net  

<table>
	<tr>
		<th>
CAUSE
		</th>
		<th>
DIAGNOSTIC
		</th>
	</tr>
	<tr>
		<td>
Server name mistyped (known as the Instance name).
		</td>
		<td>
<a href="#udl">Universal Data Link (.udl) file</a>
		</td>
	</tr>
	<tr>
		<td>
Is the SQL Server up and running.
		</td>
		<td>
<a href="#udl">Universal Data Link (.udl) file</a>
		</td>
	</tr>
	<tr>
		<td>
Only server name is specified when there is no Default instance on that server.
		</td>
		<td>
<a href="#udl">Universal Data Link (.udl) file</a>
		</td>
	</tr>
	<tr>
		<td>
SQL Server is listening on a non-standard port.
		</td>
		<td>
<a href="#udl">Universal Data Link (.udl) file</a>
		</td>
	</tr>
	<tr>
		<td>
Anti-Virus blocking {{ en.RDM }}
		</td>
		<td>
Check in the Anti-Virus logs to see blocked threats.
		</td>
	</tr>
	<tr>
		<td>
Firewall is preventing {{ en.RDM }} to connect.
		</td>
		<td>
Adjust your firewall to allow RemoteDesktopManager.exe and RemoteDesktopManager64.exe to communicate with external services.
		</td>
	</tr>
	<tr>
		<td>
Network protocol issues.
		</td>
		<td>
Validate that both the client and the server side are using the same IPv4 or IPv6 network protocol.
		</td>
	</tr>
</table>

