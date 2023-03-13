---
title: Azure SQL Connection Issues
---
Here is a validation list to help resolve issues when failing to login and connect with Azure SQL in {{ en.RDM }}  
* Was the user added/created in {{ en.RDM }} ?
* Is the spelling of the username in Azure and {{ en.RDM }} the same?
* Is the spelling of the database name in Azure and {{ en.RDM }} the same?
* Compare the data source configuration with one that works from another user in ***File - Data Sources***
    * If it still fails, [Export and Import the data source configuration (.rdd)](/kb/remote-desktop-manager/how-to-articles/import-export-data-sources-configuration/) from the working user.
    * Ask the user from whom it works to launch a connection with his credentials. Doing so will confirm a connection can be made to the Azure database from this instance of RDM.
        * If it does work, change the credentials in RDM with the ones of the initial failing user and retest with these credentials.
        * If it doesn't, install SSMS and try to connect with the same failing user and authentication method to validate a connection can be made to the Azure database.
* If all fails, contact our [Customer Success Team](mailto:service@devolutions.net)
