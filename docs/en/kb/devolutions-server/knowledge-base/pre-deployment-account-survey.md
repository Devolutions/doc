---
title: Pre-Deployment Account Survey
status: Topic available in German language
---
Prior to deployment of a {{ en.DVLS }} instance, some accounts are needed to operate the various services involved in a secure deployment of {{ en.DVLS }}. The first decision is to use either domain accounts for operating the platform, or to use local SQL accounts paired with local service accounts. Since this decision is a matter of personal preference, we support both models.

{% snippet icon.badgeInfo %}
The names used in this guide are to ease comprehension of the role fulfilled by the account. Our documentation uses these names as well, but there is no requirement that you use them.
{% endsnippet %}

Please choose the appropriate section

- Domain Based Operation
- Non-Domain Based Operation or Azure SQL environment

## Domain Based Operation (Integrated Security option) 

{% snippet icon.badgeInfo %}
The ***Administration Credentials*** needs full read permissions on the AD structure, but does NOT perform any changes to your directory. Sadly, because of a side effect of how the net Directory Services are built, there is an issue when that account tries to read properties of AD groups that may reside in a protected area of your directory. The easiest fix was to grant full admin permissions, but we are looking into implementing a better fallback strategy to handle the case where access is denied. Replace the text in red with: It may requires higher privileges than being part of the Domain Users built-in Active Directory group. In most case, it should be sufficient.
{% endsnippet %}

| # | Name                  | Origin | Description                               | Set in... |
| - | --------------------- | ------ | ----------------------------------------- | --------- |
| 1 | VaultDBOwner            | AD     | Account with full privileges on the DB.   | Interactive Windows session used to run the installation/upgrade of a {{ en.DVLS }} instance. |
| 2 | VaultDBRunner           | AD     | Least-privileged account to run the web application. Used to connect to the DB, and to read from the file system. | IIS Application pools that are running a {{ en.DVLS }} Instance. |
| 3 | VaultADReader         | AD     | Least-privileged account to query the AD. | {{ en.DVLS }} Instance Settings - Administration credentials. |
| 4 | VaultDBSchedulerService | AD     | Least-privileged account to operate the scheduler service. Used to connect to the DB and to read/write from the file system. | Windows Service Control Manager. |

## Non-Domain Based Operation or Azure SQL environment

{% snippet icon.badgeInfo %}
On a non-domain based deployment, a single connection string is used for three different aspects of the system. This will be improved in a future release in order to respect the least-privilege principle.
{% endsnippet %}

{% snippet icon.badgeInfo %}
For Azure SQL hosted database, domain based operation (Integrated Security option) is not supported.
{% endsnippet %}

| # | Name                  | Origin | Description                                            | Set in... |
| - | --------------------- | ------ | ------------------------------------------------------ | --------- |
| 1 | VaultDBOwner            | SQL    | Account with full privileges on the DB.                | The {{ en.DVLSCONSOLE }} only for installation/upgrade sessions. |
| 2 | VaultDBRunner           | SQL    | Least-privileged account to run the web application.   | The {{ en.DVLSCONSOLE }} for operation of the instance. |
| 3 | VaultADReader         | AD     | Least-privileged account to query the AD through LDAP. | {{ en.DVLS }} Instance Settings - Administration credentials. |
| 4 | VaultDBSchedulerService | SQL    | Least-privileged account to operate the scheduler service. Used to read/write from the file system. | Windows Service Control Manager. The database access will be performed by the single ConnectionString that is the subject of the informational note above. |