---
title: Licenses
---
Managing {{ en.RDM }} registration globally for all your users can be done with a license serial stored in an advanced data source such as {{ en.RDMS }}, Microsoft SQL Server or Azure SQL. 

{% snippet icon.badgeInfo %} 
It is possible to [request a trial](/rdm/mac/installation/client/registration/trial-request/) to try {{ en.RDM }} for 30 days. If you decide not to register the application at the end of the 30 days period, your data will not be altered or erased, and you will have full access to it once you provide a valid license serial 
{% endsnippet %}
 

With the license stored in an [Advanced Data Source](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/) , there is no need to register {{ en.RDM }} as the license serial is retrieved directly from it. When launching the application for the first time, add the data source containing the serial.  

1. To add a license serial, navigate to ***Administration – Licenses*** .  
![Administration – Licenses](/img/en/rdm/mac/RdmMac4014.png) 
1. Click ***Add License*** .  
![User and Security Management – License](/img/en/rdm/mac/clip10045.png) 
1. Enter the license serial.  
![License](/img/en/rdm/mac/RdmMac4010.png) 
1. Optional: Check the ***Auto assign*** option to automatically provide the {{ en.RDM }} serial to all newly created users. 
1. Click ***OK*** to save. 

Your license is now saved in the advanced data source. Follow this next topic to automatically [Assign Licenses](/rdm/mac/commands/administration/licenses/assign/) to selected users, removing the need to interact locally with their Remote Desktop Manager. 


