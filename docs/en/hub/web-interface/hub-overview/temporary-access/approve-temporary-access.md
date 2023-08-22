---
eleventyComputed:
  title: Approve temporary access to an entry in {{ en.DHUBB }}
  order: 20
  description: The Temporary Access feature allows users to request a temporary elevation of their permissions for a specific entry. The approver must then approve or deny the request.
---
{% youtube '5XwhadoYKKc' %}  

{% snippet icon.badgeInfo %} 
The ***Temporary Access*** feature is also available in {{ en.RDM }} with {{ en.DHUBB }}. You can view and approve temporary access requests in {{ en.RDM }} even if the request was made in {{ en.DHUBB }}. Visit [Approve temporary access to an entry in {{ en.RDM }}](/rdm/windows/user-interface/content-area/temporary-access/approve-temporary-access/) to learn more. 
{% endsnippet %}
 
The ***Temporary Access*** feature allows users to request a temporary elevation of their permissions for a specific entry. The approver must then approve or deny the request.  

## View temporary access requests 

When a user sends you a temporary access request, you will be automatically notified by email. You can click on ***Go to entry dashboard*** to view the request directly in the entry in {{ en.DHUBB }}.  
![Temporary access request email](https://webdevolutions.azureedge.net/docs/en/hub/Hub2035.png)  
Once you are on the entry, you will see a ***Temporary Access Request*** section near the top. Clicking on ***View Details*** opens the ***Temporary Access Request*** window, which is described in the next section.  
![Temporary access request from the entry](https://webdevolutions.azureedge.net/docs/en/hub/Hub6030.png)  
Note that you can also see all temporary access pending requests from a selected {{ en.VLT }} in the ***Temporary Access*** box of the ***Dashboard***. Clicking on a request brings you to the entry.  
![Temporary access request from the dashboard](https://webdevolutions.azureedge.net/docs/en/hub/Hub6031.png)  

## Approve/Deny temporary access requests 

{% snippet icon.badgeInfo %} 
The duration of ***Temporary Access*** begins when the request is approved.
{% endsnippet %}

When the entry is selected, clicking on ***View Details*** in the ***Temporary Access Request*** section allows you to see information about the request as well as ***Approve***/***Deny*** it.  
![View Details](https://webdevolutions.azureedge.net/docs/en/hub/Hub2042.png)  

In the top section, you can view the details of the request such as ***Entry's dependencies***,  ***User***, ***Permissions*** level and ***Duration***.

Below is the approver's reply. The ***Permissions*** and ***Duration*** can be changed and a message left for the user.

Finally, you can ***Approve*** or ***Deny*** the temporary access request by clicking on the corresponding button.  
![Approve/Deny temporary access request](https://webdevolutions.blob.core.windows.net/docs/en/hub/Hub6023.png)  

After the approbation, for any reason, you may revoke the user's temporary access by clicking on ***View Details*** again, then ***Revoke***. Be sure you want to do this first, since in order to regain access to the entry, they will need to make another request. Otherwise, their access will end within the set time frame.  
![Revoke temporary access](https://webdevolutions.blob.core.windows.net/docs/en/hub/Hub6024.png)  

{% snippet icon.badgeInfo %} 
To learn more about the end user experience in {{ en.DHUBB }}, visit [Request temporary access to an entry in {{ en.DHUBB }}](/hub/web-interface/hub-overview/temporary-access/request-temporary-access/). 
{% endsnippet %}
