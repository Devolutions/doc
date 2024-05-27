---
eleventyComputed:
  title: Advanced credentials
  description: The Advanced Credentials are used to allow {{ en.DVLS }} to communicate with the SQL database.
  keywords:
  - Roles
---
The ***Advanced Credentials*** are used to allow {{ en.DVLS }} to communicate with the SQL database.

{% snippet, "badgeCaution" %}
Only SQL login accounts can be manually configured. With the ***Authentication type*** set to ***Windows Authentication*** the accounts are automatically pulled from the ***Scheduler Service*** and the IIS Application Pool Identity.
{% endsnippet %}

For further information about these accounts, please see [Pre-deployment account survey](/kb/devolutions-server/knowledge-base/pre-deployment-account-survey/).

![Advanced credentials dialog](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8168.png)

## Settings

| Option                  | Description                                                                                                                                           |
|-------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| Management Tools        | Credentials that allow the {{ en.DVLSCONSOLE }} to communicate with the SQL database. Must be an SQL account.                                         |
| Scheduler Service       | Credentials used for the Scheduler Service features (Backup Manager, Email Notifications, Secure Messaging, Domain Users and User groups cache, Azure AD cache). Must be an SQL account. If the Integrated Security option is enabled, the Username and Password fields are grayed out.                                                 |
| Web Application         | Credentials used for the Web Application to communicate with the SQL database. Must be an SQL account. If the Integrated Security option is enabled, the Username and Password fields are grayed out.                                                                                                                                  |
| Test Connection         | Test against the SQL server the credentials set in the Username/Password fields. If the Integrated Security option is enabled, the button is grayed out.                                                                                                                                                                              |
| Apply Least Permissions | Will execute an SQL statement to grant least permissions on the database for the Scheduler Service or the Web Application accounts.                   |
| Generate Script         | Will generate an SQL script that can be run on the SQL database for the Scheduler Service or the Web Application accounts. Only available with Windows Authentication.                                                                                                                                                                   |
