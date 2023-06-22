---
eleventyComputed:
  title: Documentation
  description: The Documentation feature allows for storing information about resources in the data source.
  keywords:
  - Documentation
  - Offline documentation
---
The ***Documentation*** feature allows for storing information about resources in the data source. To access an entry's documentation, select an entry in the [{{ en.NPANE }}](/rdm/windows/user-interface/navigation-pane/) , then select the ***Documentation*** tab in the ***Dashboard***. Alternatively, right-click an entry in the ***{{ en.NPANE }}***, then select ***View – Documentation***.  

The documentation is written using [Markdown](https://en.wikipedia.org/wiki/Markdown), a plain text formatting syntax. 

{% snippet icon.badgeInfo %} 
This feature is also available with {{ en.DVLS }}, Hub Business, Hub Personal and SQL Server data sources.  
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
The ***Documentation*** feature is encrypted only for {{ en.DVLS }}, Hub Business and Hub Personal data sources. If you are using data sources like SQL Server or Azure SQL, the ***Documentation*** feature is not encrypted. 
{% endsnippet %}
 
{% snippet icon.badgeCaution %} 
The feature for using ***Documentation*** in offline mode is available for documents that are stored in the database.  This property is set to be inherited by default.
{% endsnippet %}

##  Synchronize offline documentation  
 1. Choose the entry in the ***Navigation Pane***.  
 1. Go to ***Administration – Vault Settings***. 
 ![Vault Settings](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6000.png)  
 1. In ***Security Settings – Offline – Synchronize documentation to offline***, select ***Yes***.
 ![Synchronize documentation to offline](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6004.png)
 1. Click ***OK*** and close the window.  
The offline ***Documentation*** tab is now available in the ***Dashboard***.
![Documentation tab](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6003.png)  
##  Synchronize offline document  
 1. Choose the entry in the ***Navigation Pane***.   
 1. Go to ***Administration – Vault Settings***
 ![Vault Settings](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6000.png) 
 1. In ***Security Settings – Offline – Synchronize document to offline***, select ***Yes***.  
 1. Click ***OK*** and close the window.  
![Synchronize document to offline](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6005.png)
The offline ***Documentation*** tab is now available in the ***Dashboard***.  
![Documentation tab](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6003.png)  


