---
eleventyComputed:
  title: Approve temporary access to an entry in {{ en.HUBB }}
  description: The Temporary Access feature allows users to request a temporary elevation of their permissions for a specific entry. The approver must then approve or deny the request.
---
{% youtube '5XwhadoYKKc' %}  

{% snippet icon.badgeInfo %} 
The ***Temporary Access*** feature is also available in {{ en.RDM }} with {{ en.HUBB }}. You can view and approve temporary access requests in {{ en.RDM }} even if the request was made in {{ en.HUBB }}. Visit [Approve temporary access to an entry in {{ en.RDM }}](/rdm/windows/user-interface/content-area/temporary-access/approve-temporary-access/) to learn more. 
{% endsnippet %}
 
The ***Temporary Access*** feature allows users to request a temporary elevation of their permissions for a specific entry. The approver must then approve or deny the request.  

## View temporary access requests 

When a user sends you a temporary access request, you will be automatically notified by email. You can click on ***Go to entry dashboard*** to view the request directly in the entry in {{ en.HUBB }}.  
![Temporary access request email](https://webdevolutions.azureedge.net/docs/en/hub/Hub2035.png)  
Once you are on the entry, you will see a ***Temporary Access Request*** section near the top. Clicking on ***View Details*** opens the ***Temporary Access Response*** window, which is described in the next section.  
![Temporary access request from the entry](https://webdevolutions.azureedge.net/docs/en/hub/Hub2037.png)  
Note that you can also see all temporary access pending requests from a selected {{ en.VLT }} in the ***Temporary Access Request*** box of the ***Dashboard***. Clicking on a request brings you to the entry.  
![Temporary access request from the dashboard](https://webdevolutions.azureedge.net/docs/en/hub/Hub2036.png)  

## Approve/Deny temporary access requests 

{% snippet icon.badgeInfo %} 
The duration of ***Temporary Access*** begins when the request is approved.
{% endsnippet %}

When the entry is selected, clicking on ***View Details*** in the ***Temporary Access Request*** section allows you to see information about the request as well as ***Approve***/***Deny*** it.  
![View Details](https://webdevolutions.azureedge.net/docs/en/hub/Hub2042.png)  

In the top section, you can see the ***Permissions*** level and the ***Requested duration***. The access duration can be changed in ***Authorized duration***. The ***Time remaining*** is empty since you have not yet approved the request.  

Below, the message the user sent you when they created their request is visible on the left. On the right, you can write a message to the user explaining your decision, but it remains optional.  

Finally, you can ***Approve*** or ***Deny*** the temporary access request by clicking on the corresponding button.  
![Approve/Deny temporary access request](https://webdevolutions.azureedge.net/docs/en/hub/Hub2045.png)  

After the approbation, for any reason, you may revoke the user's temporary access by clicking on ***View Details*** again, then ***Revoke***. Be sure you want to do this first, since in order to regain access to the entry, they will need to make another request. Otherwise, their access will end within the set time frame.  
![Revoke temporary access](https://webdevolutions.azureedge.net/docs/en/hub/Hub2041.png)  

{% snippet icon.badgeInfo %} 
To learn more about the end user experience in {{ en.HUBB }}, visit [Request temporary access to an entry in {{ en.HUBB }}](/hub/web-interface/hub-overview/temporary-access/request-temporary-access/). 
{% endsnippet %}
