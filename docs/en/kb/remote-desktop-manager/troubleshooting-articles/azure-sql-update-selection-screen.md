---
title: Azure SQL Update with Selection Screen
---
Since Remote Desktop Manager 2022.1 you get an authentication selection screen when connecting to an Azure SQL database (ADALSQL).
### Solution
With the release of Remote Desktop Manager v2022.1 we moved away from the ***System.Data.SqlClient*** library to using the new ***Microsoft.Data.SqlClient*** With the old library, we had to perform the authentication in our code but with the new library Microsoft takes care of the authentication hence we have less control.  

On the other hand, this allows for an easier and more secure configuration as the ***Azure Active Directory App Registration*** is no longer required.  
{% snippet icon.badgeInfo %}
Please note that we have no choice to move to the new library since the functionality we required while configuring the ***Azure Active Directory App Registration*** has been deprecated by Microsoft.
{% endsnippet %}  

Unfortunately, the downside is the lost of this functionality. Until we can figure something out or Microsoft enables other modes, there is nothing we can do.  

For more information on the topic here is a link from Microsoft [SqlAuthenticationMethod Enum](https://docs.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqlauthenticationmethod?view=sqlclient-dotnet-standard-4.1)
