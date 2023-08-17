---
title: SQL Azure One or More Errors Occurred
---
After following the steps in [Configure Azure Active Directory App Registration](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/enable-azure-active-directory-authentication/create-app-registration/), you receive the error message below:  

System.AggregateException: One or more errors occurred. ---> System.AggregateException: One or more errors occurred
## Solution 1
Validate that the type of ***Redirect URI*** is set to ***Mobile and desktop application***  
![!!KB4964.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4964.png)  
Changing the ***Redirect URI*** value after creating the manifest will require that you delete the wrong redirect and add the correct one in the ***Authentication*** section.  
![!!KB4965.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4965.png)
## Solution 2
If you still get this error, please send us your [Azure Active Directory app manifest](https://docs.microsoft.com/en-us/azure/active-directory/develop/reference-app-manifest) at [service@devolutions.net](mailto:service@devolutions.net) so that we can validate your configuration.
