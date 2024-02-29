---
eleventyComputed:
  title: Database
  description: The Database tab section contains the information of the SQL Server, the SQL credentials information, and the database name used by {{ en.DVLS }}.
  order: 20
---
The ***Database*** tab section contains the information of the SQL Server, the SQL credentials information, and the database name used by {{ en.DVLS }}.

![Server settings – Database](https://cdnweb.devolutions.net/docs/en/server/ServerOp8002.png)

## Settings

### Database

| Option                | Description                                                                                                                            |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Host                  | Name of the host where the database will be stored.                                                                                    |
| Database              | Name of the database on the server.                                                                                                    |
| Advanced Settings     | Access the [Advanced settings](/server/management/devolutions-server-console/devolutions-server-settings/database/advanced-settings/). |
| Test Server           | Test the connection with the server to validate if the proper information has been provided.                                           |
| Test Database         | Test the connection with the database to validate if the proper information has been provided.                                         |
| Update Database       | Update the database on the server.                                                                                                     |
| Save Schema           | Save the database schema in a file to allow sending it to our [support team](mailto:service@devolutions.net).                          |
| View Database Version | View what is the current database version.                                                                                             |

### Credentials

{% snippet icon.badgeInfo %}
Note that the Integrated Security or Credentials settings affect how the {{ en.DVLS }} communicates with the SQL database. These options do not have any impact on how users will authenticate on the {{ en.DVLS }} instance.
{% endsnippet %}

| Option               | Description                                                                                                                                              |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Authentication type  | Select between ***Windows Authentication*** or ***SQL Server Authentication*** for authenticating to the database. For [Windows Authentication](/kb/devolutions-server/how-to-articles/configure-server-use-domain-sso/) to be used to connect to the database, you must set a domain account as the Application Pool identity in the IIS Manager.                                                                                                                                                      |
| Username             | SQL login account username if SQL Authentication is selected as the authentication type.                                                                 |
| Password             | SQL login account password if SQL Authentication is selected as the authentication type.                                                                 |
| Advanced Credentials | Access the [Advanced Credentials](/server/management/devolutions-server-console/devolutions-server-settings/database/advanced-credentials/) that allows the {{ en.DVLSCONSOLE }} to communicate with the SQL database.                                                                                                                    |
