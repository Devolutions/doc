---
eleventyComputed:
  title: SQL Server express configuration
  description: To be able to connect to a SQL database with {{ en.DVLS }}, here is the suggested configuration in Microsoft SQL Server Express Edition.
---
To be able to connect to a SQL database with {{ en.DVLS }}, here is the suggested configuration in Microsoft SQL Server Express Edition.

**Most of our customers use the mixed mode Server Authentication**. As per Microsoft, it is not the safest authentication method to use with Microsoft SQL Server Express Edition but we recommend to use it to configure and test your {{ en.DVLS }} instance. After a successful installation of {{ en.DVLS }}, you can set it back to ***Windows Authentication*** mode and set the ***Domain single sign-on (SSO)*** option in the ***Database*** tab of the {{ en.DVLS }} Server Settings. Consult [Configure {{ en.DVLS }} to use domain single sign-on (SSO)](/kb/devolutions-server/how-to-articles/configure-server-use-domain-sso/). To enable the mixed mode, in the Microsoft SQL Server Management Studio, open the properties dialog of your server and go in the ***Security*** tab. Then, select the SQL Server and Windows Authentication mode option.
![!!KB4311](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4311.png)

The next option that needs to be activated is the ***Allow remote connections to this server*** option. You will find that option in the ***Connections*** tab of the SQL Server ***Properties*** dialog. Then, click on the ***OK*** button to save the modifications.
![!!KB4312](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4312.png)

Finally, the SQL Server Browser service must be started on the machine where the SQL Server is hosted. Please run servicesmsc and look for the SQL Server Browser in the list.
![!!KB4313](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4313.png)

We recommend to set the Startup type to Automatic for the SQL Server Browser service. Double-click on the service to open the ***Properties*** dialog. Then start the service by clicking on the ***Start*** button and select ***Automatic*** in the Startup type drop down menu. Finally, click on the ***OK*** button.
![!!KB4314](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4314.png)
