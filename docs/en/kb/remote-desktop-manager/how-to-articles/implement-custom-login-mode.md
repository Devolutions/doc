---
title: Implement Custom Login Mode
---
Here are two methods for implementing the Custom Login Mode.

### Method 1

Create a database user from ***User and Security Management*** Set a safe password and let&apos;s name it RDMRunner for this example purpose.  

This account will be set in the database connection, and the custom profiles will be filled in the ***Username/Password*** fields of the data source configuration.  

![KB4490.png](/img/en/kb/KB4490.png)

### Method 2

The second method is to manually configure the database account directly in the SQL server (from Management studio).  

When this is done, you will be able to distribute the data source configuration without communicating the database account credentials.  

To do so, create a data source connection, with the database account already populated, and check the ***Always ask password*** and ***Allow change username*** Populate the rest of the fields with the database information, and name it.  

Then, from the data sources interface, you will see a ***Export Data Source Configuration*** that will create aRDD file, which user will only have to import, and populate the username and password fields.
