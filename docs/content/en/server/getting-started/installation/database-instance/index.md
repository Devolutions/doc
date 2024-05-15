---
eleventyComputed:
  title: Database instance
  order: 20
---
{{ en.DVLS }} has no requirement that would dictate which communication protocol is used, as well as many of the options offered to you by the chosen SQL Server instance. As long as the client workstation can connect to the SQL instance, {{ en.DVLS }} will run effectively. Please refer to the Microsoft Documentation to allow connectivity to the instance.  

With Windows authentication, you must set the Application Pool identity to an account from the domain. We recommend creating a dedicated account for this purpose. Please refer to [Configure {{ en.DVLS }} to use domain single sign-on (SSO)](/kb/devolutions-server/how-to-articles/configure-windows-authentication/) for instructions that need to be performed after creating the {{ en.DVLS }} instance. 

