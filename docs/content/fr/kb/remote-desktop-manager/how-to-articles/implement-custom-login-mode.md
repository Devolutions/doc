---
eleventyComputed:
  title: Implement the custom login mode
---
The ***Custom Login Mode*** allows for a separation between the SQL Server authentication/authorization and the {{ en.RDM }} authentication/authorization preventing users from using their {{ en.RDM }} custom credentials from accessing the database directly.

{% snippet icon.badgeInfo %}
***Custom Logins*** are only supported in {{ en.RDM }} with a Microsoft SQL Server data source.
{% endsnippet %}

Follow the steps below in order from start to finish.

## Create the SQL Login/User

There are two methods to create the SQL login/user: the first one uses <a href="#method-using-remote-desktop-manager-(recommended)">{{ en.RDM }} (recommended)</a> while the second one uses <a href="#method-using-ssms">SSMS (SQL Server Management Studio)</a>.

### Method Using {{ en.RDM }} (Recommended)

1. In {{ en.RDM }}, connect to the Microsoft SQL Server data source with any database owner user.
1. In ***Administration – Users***, click on the ***Add User*** button to create a new administrator user.

![File – Users – Add User](https://cdnweb.devolutions.net/docs/en/kb/KB2149.png)

3. In the ***General*** tab of the ***User Managment*** window, configure the user as follows:
    * In the ***Authentication type*** drop-down list, select ***Database***.
    * In the ***Username*** field, enter ***RDMRunner***.
    * In the ***Password*** field, enter a secure password. Use the ***Password Generator*** tool (second button next to the field) to help create it.
    * In the ***User type*** drop-down list, select ***Administrator***.

![User Configuration](https://cdnweb.devolutions.net/docs/en/kb/KB2150.png)

4. Click ***OK*** to save your new user configuration.

The new user should appear in the user list. You can close the ***User and Security Management*** window.
For the next steps, skip to the <a href="#create-your-first-custom-login-(first-admin)">Create Your First Custom Login (First Admin)</a> section.

### Method Using SSMS

1. In SSMS, create a login/user.
1. Make this user a member of the ***db_owner*** role.

For the next steps, go to the <a href="#create-your-first-custom-login-(first-admin)">Create Your First Custom Login (First Admin)</a> section.

## Create Your First Custom Login (First Admin)

1. In ***File – Data Sources***, click on the ***Edit Data Source*** button to edit your Microsoft SQL server data source.

![File – Data Sources – Edit Data Source](https://cdnweb.devolutions.net/docs/en/kb/KB2158.png)

2. In the data source configuration window, change the values in the ***Username*** and ***Password fields*** for the credentials of the new SQL user created in the <a href="#create-the-sql-login%2Fuser">previous section</a>. This is so you can connect to this user in the data source.

![Username and Password Configuration](https://cdnweb.devolutions.net/docs/en/kb/KB2159.png)

3. Click ***OK*** to save your changes, then ***OK*** again to leave the data source settings view.
1. Go to ***Administration – Users***, then click on the ***Add User*** button to create a new administrator user.

![Administration – Users – Add User](https://cdnweb.devolutions.net/docs/en/kb/KB2151.png)

5. In the ***User Managment*** window, configure the new user as follows:
    * In the ***Authentication type*** drop-down list, select ***Custom (Devolutions)***.
    * In the ***Username*** field, enter ***admin***.
    * In the ***Password*** field, enter a secure password. Use the ***Password Generator*** tool (second button next to the field) to help create it.
    * In the ***User type*** drop-down list, select ***Administrator***.

![User Configuration](https://cdnweb.devolutions.net/docs/en/kb/KB2152.png)

6. Click ***OK*** to save your new user configuration.

The new user should appear in the user list. You can close the ***User and Security Management*** window.

## Create Users

1. In ***File – Data Sources***, click on the ***Edit Data Source*** button to edit your Microsoft SQL server data source.

![File – Data Sources – Edit Data Source](https://cdnweb.devolutions.net/docs/en/kb/KB2160.png)

2. In the ***Microsoft SQL Server*** window, configure the login settings as follows:
    * In the ***Login mode*** drop-down list, select ***Custom login***.
    * In the ***Username*** field, enter ***admin***.
    * In the ***Password*** field, enter the password created for the ***admin*** custom user account in the <a href="#create-your-first-custom-login-(first-admin)">previous section.</a>

![Microsoft SQL Server Configuration](https://cdnweb.devolutions.net/docs/en/kb/KB2153.png)

3. Click on ***Settings*** next to the ***Login mode*** field.
1. In the ***Database login*** window, configure the login settings as follows:
    * In the ***Username*** field, enter ***RDMRunner***.
    * In the ***Password*** field, enter the password created for the ***RDMRunner*** SQL user account in the <a href="#create-the-sql-login%2Fuser">first section</a> of this topic.

![Database login Configuration](https://cdnweb.devolutions.net/docs/en/kb/KB2154.png)

5. Click ***Connect*** in the ***Database login*** window.
1. Click ***OK*** in the ***Microsoft SQL Server*** window to save your configuration, then ***OK*** again to leave the data source settings view.
1. Using this new configuration, create all other custom login users in ***Administration – Users – Add User***.

When all other custom login users have been created, continue to the next section.

## Distribute the Configuration

1. In ***File – Data Sources***, click on the ***Duplicate Data Source*** button.
1. Write a new ***Name*** for your duplicate data source configuration.
1. Clear the ***Username*** and ***Password*** fields, then check the ***Always ask password*** and ***Always change username*** options.

![Data Source Duplicate Configuration](https://cdnweb.devolutions.net/docs/en/kb/KB2155.png)

4. Click ***OK*** to save your configuration.
1. Click on the ***Export Data Source Configuration*** button, then save the .rdd file on your computer.

![Export Data Source Configuration](https://cdnweb.devolutions.net/docs/en/kb/KB2156.png)

6. Distribute the configuration file to your users.

After having received the .rdd file containing the exported configuration and having saved it on their computer, your users can follow the steps in the next section to import it in {{ en.RDM }} and connect to the data source for the first time.

## Import the .rdd File and Connect to the Data Source

1. In {{ en.RDM }}, go to ***File – Data sources***.
1. Click on the ***Import Data Source Configuration*** button.

![File – Data Sources – Import Data Source Configuration](https://cdnweb.devolutions.net/docs/en/kb/KB2157.png)

3. Select in your computer the .rdd configuration file, then click ***Open***.
1. Click ***OK*** to leave the data source settings view.
1. On the first connect, the ***Database login*** window appears. Enter your custom ***Username*** and ***Password***, then check the ***Remember credentials*** option to have {{ en.RDM }} stop asking for them after this first connection.

![Database Login Credentials](https://cdnweb.devolutions.net/docs/en/kb/KB2161.png)

6. Click ***Log In***.

You are now connected to the data source.
