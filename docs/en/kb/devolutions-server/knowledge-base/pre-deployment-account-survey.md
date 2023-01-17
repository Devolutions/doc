---
title: Pre-Deployment Account Survey
---
# {{ en.TOPICTITLE }}
Prior to deployment of a DVLS instance, some accounts are needed to operate the various services involved in a secure deployment of DVLS. The first decision is to use either domain accounts for operating the platform, or to use local SQL accounts paired with local service accounts. Since this decision is a matter of personal preference, we support both models.
{% snippet icon.badgeInfo %}
The names used in this guide are to ease comprehension of the role fulfilled by the account. &#160;Our documentation uses these names as well, but there is no requirement that you use them.
{% endsnippet %}

Please choose the appropriate section  

* Domain Based Operation 
* Non-Domain Based Operation or Azure SQL environment  
### Domain Based Operation (Integrated Security option) 
{% snippet icon.badgeInfo %} 
The ***Administration Credentials*** needs full read permissions on the AD structure, but does NOT perform any changes to your directory. &#160;Sadly, because of a side effect of how thenet Directory Services are built, there is an issue when that account tries to read properties of AD groups that may reside in a protected area of your directory. The easiest fix was to grant full admin permissions, but we are looking into implementing a better fallback strategy to handle the case where access is denied. Some members of our community have had success by adding the VaultADReader account to the AD Account Operator group.
{% endsnippet %} 
<table>
	<tr>
		<th>
#
		</th>
		<th>
Name
		</th>
		<th>
Origin
		</th>
		<th>
Description
		</th>
		<th>
Set in...
		</th>
	</tr>
	<tr>
		<td>
1
		</td>
		<td>
VaultOwner
		</td>
		<td>
AD
		</td>
		<td>
Account with full privileges on the DB.
		</td>
		<td>
Interactive Windows session used to run the installation/upgrade of a DVLS instance.
		</td>
	</tr>
	<tr>
		<td>
2
		</td>
		<td>
VaultRunner
		</td>
		<td>
AD
		</td>
		<td>
Least-privileged account to run the web application. Used to connect to the DB, and to read from the file system.
		</td>
		<td>
IIS Application pools that are running a DVLS Instance.
		</td>
	</tr>
	<tr>
		<td>
3
		</td>
		<td>
VaultADReader
		</td>
		<td>
AD
		</td>
		<td>
Least-privileged account to query the AD.
		</td>
		<td>
DVLS Instance Settings - Administration credentials.
		</td>
	</tr>
	<tr>
		<td>
4
		</td>
		<td>
VaultSchedulerService
		</td>
		<td>
AD
		</td>
		<td>
Least-privileged account to operate the scheduler service. Used to connect to the DB, and to read/write from the file system.
		</td>
		<td>
Windows Service Control Manager.
		</td>
	</tr>
</table>

### Non-Domain Based Operation or Azure SQL environment
{% snippet icon.badgeInfo %}
On a non-domain based deployment, a single connection string is used for three different aspects of the system. This will be improved in a future release in order to respect the least-privilege principle.
{% endsnippet %}
{% snippet icon.badgeInfo %}
For Azure SQL hosted database, domain based operation (Integrated Security option) is not supported.
{% endsnippet %}
<table>
	<tr>
		<th>
#
		</th>
		<th>
Name
		</th>
		<th>
Origin
		</th>
		<th>
Description
		</th>
		<th>
Set in...
		</th>
	</tr>
	<tr>
		<td>
1
		</td>
		<td>
VaultOwner
		</td>
		<td>
SQL
		</td>
		<td>
Account with full privileges on the DB.
		</td>
		<td>
The DVLS.Console only for installation/upgrade sessions.
		</td>
	</tr>
	<tr>
		<td>
2
		</td>
		<td>
VaultRunner
		</td>
		<td>
SQL
		</td>
		<td>
Least-privileged account to run the web application.
		</td>
		<td>
The DVLS.Console for operation of the instance.
		</td>
	</tr>
	<tr>
		<td>
3
		</td>
		<td>
VaultADReader
		</td>
		<td>
AD
		</td>
		<td>
Least-privileged account to query the AD through LDAP.
		</td>
		<td>
DVLS Instance Settings - Administration credentials.
		</td>
	</tr>
	<tr>
		<td>
4
		</td>
		<td>
VaultSchedulerService
		</td>
		<td>
SQL
		</td>
		<td>
Least-privileged account to operate the scheduler service. Used to read/write from the file system.
		</td>
		<td>
Windows Service Control Manager. &#160;The database access will be performed by the single ConnectionString that is the subject of the informational note above.
		</td>
	</tr>
</table>
