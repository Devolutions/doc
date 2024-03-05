---
eleventyComputed:
  title: Configure Azure SQL
---
1. Make sure you have a valid Azure SQL subscription to be able to create your database.
1. Click on the gear button in the ***{{ en.NPANE }}*** or go to ***File – Data sources***.
![!!RDMMac2138](https://cdnweb.devolutions.net/docs/en/rdm/mac/RDMMac2138.png)
1. Click on the plus sign to create a new data source.
![!!RDMMac2139](https://cdnweb.devolutions.net/docs/en/rdm/mac/RDMMac2139.png)
1. Select ***Microsoft Azure SQL***.
![!!RDMMac2140](https://cdnweb.devolutions.net/docs/en/rdm/mac/RDMMac2140.png)
1. Configure the connection to your Azure SQL with a user with sufficient privileges to create the database.
![!!RDMMac2141](https://cdnweb.devolutions.net/docs/en/rdm/mac/RDMMac2141.png)
1. Click on the ***Upgrade*** tab and press the ***Create Database*** button. If the database is already created on Azure SQL, press the ***Update Database*** button to create the appropriate tables in the database.
![!!RDMMac2142](https://cdnweb.devolutions.net/docs/en/rdm/mac/RDMMac2142.png)
1. Once the database has been created, create a {{ en.RDM }} administrator account via the ***Administration – Users menu***.
{% snippet icon.badgeInfo %}
If your database was created using a Super User (example: SA), we recommend that you keep this user only for the creation of the database and/or for the upgrade of the database. A {{ en.RDM }} administrator account must first be created, and then users must be created with this {{ en.RDM }} administrator account.
{% endsnippet %}

8. Log in to the Azure SQL data source with the {{ en.RDM }} administrator account. To do this, go to ***File – Data source*** and click on the settings button to edit your SQL data source. Then enter the {{ en.RDM }} administrator account that you created in the username.

You can now start creating your sessions or creating your users.
