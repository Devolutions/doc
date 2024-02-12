---
eleventyComputed:
  title: Integrated security
---
{% tabs %}
{% tabItem "Windows" %}
***Integrated Security*** is a Microsoft technology, which uses the credentials of the current Windows session and send them automatically to the remote resources for authentication.  

{% snippet icon.badgeInfo %} 
This feature is available with the [SQL Server](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-sql-server/) or [{{ en.DVLS }}](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/server/) data sources. 
{% endsnippet %}
 
## Settings 
To use the ***Integrated Security***, enable the ***Integrated Security*** box in the ***User Management*** window. The ***Password*** field is disabled because the operating system will provide a cached copy automatically.  
![Integrated Security](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10291.png) 

When the option is activated, an ellipsis button either appears or is enabled. Click this button to display the ***Select User*** dialog.  
![Select User](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10294.png) 

{% snippet icon.badgeInfo %} 
Ensure the appropriate domain is displayed in the ***From this location*** field. Sometime the location defaults to the local computer. Click the ***Locations*** button to browse for the domain instead. 
{% endsnippet %}
 
When using ***Integrated Security***, the currently running windows session must be from a user of the domain. If you need to use other credentials, {{ en.RDM }} must be started using the RUNAS command as described in Running {{ en.RDM }} as Another User.
{% endtabItem %}

{% tabItem "macOS" %}
Integrated Security is the name Microsoft gives to the technology that uses the credentials of your current running session and passes them automatically to the remote resources for authentication.  

{% snippet icon.badgeInfo %}
This feature requires a {{ en.DVLS }} data source. 
{% endsnippet %}
 

## Settings 

In the User Management window when activating the Integrated Security checkbox, the password field will be disabled because the operating system will provide a cached copy automatically.  
![User Management - Integrated Security](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10391.png) 

When using Integrated Security, you are currently running windows session must be from a user of that domain.
{% endtabItem %}
{% endtabs %}