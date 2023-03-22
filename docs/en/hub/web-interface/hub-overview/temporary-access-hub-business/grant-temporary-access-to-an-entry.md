---
eleventyComputed:
  title: Grant Temporary Access to an Entry in {{ en.PHUB }} Business
---
{% youtube '5XwhadoYKKc' %}  

{% snippet icon.badgeInfo %} 
The ***Temporary Access*** feature is also available in {{ en.RDM }} with {{ en.PHUB }} Business. You can view and approve temporary access requests in {{ en.RDM }} even if the request was made in {{ en.PHUB }} Business. Visit [this topic](https://help.remotedesktopmanager.com/grant_temporary_access_to_an_entry.html) to learn more. 
{% endsnippet %}
 
The ***Temporary Access*** feature allows users to request a temporary elevation of their permissions for a specific entry. The authorizer must then approve or deny the request.  

## Temporary Access

### View Temporary Access Requests 

When a user sends you a temporary access request, you will be automatically notified by email. You can click on the ***Go to entry dashboard*** button to view the request directly in the entry in {{ en.PHUB }} Business.  
![Temporary Access Request Email](/img/en/hub/Hub2035.png)  
Once you are on the entry, you will see a ***Temporary Access Request*** section near the top. Clicking on the ***View Details*** button opens the ***Temporary Access Response*** window, which is described in the next section .  
![Temporary Access Request From the Entry](/img/en/hub/Hub2037.png)  
Note that you can also see all temporary access pending requests from a selected {{ en.VLT }} in the ***Temporary Access Request*** box of the ***Dashboard*** . Clicking on a request brings you to the entry.  
![Temporary Access Request From the Dashboard](/img/en/hub/Hub2036.png)  

### Approve/Deny Temporary Access Requests 

When the entry is selected, clicking on the ***View Details*** button in the ***Temporary Access Request*** section allows you to see information about the request as well as ***Approve*** / ***Deny*** it.  
![View Details](/img/en/hub/Hub2042.png)  

In the top section, you can see the ***Permissions*** level and the ***Requested duration*** . The access duration can be changed in ***Authorized duration*** . The ***Time remaining*** is empty since you have not yet approved the request.  

Below, the message the user sent you when they created their request is visible on the left. On the right, you can write a message to the user explaining your decision, but it remains optional.  

Finally, you can ***Approve*** or ***Deny*** the temporary access request by clicking on the corresponding button.  
![Approve/Deny Temporary Access Request](/img/en/hub/Hub2045.png)  

After the approbation, for any reason, you may revoke the user&apos;s temporary access by clicking on the ***View Details*** button again, then selecting the ***Revoke*** button. Be sure you want to do this first, since in order to regain access to the entry, they will need to make another request. Otherwise, their access will end within the set time frame.  
![Revoke Temporary Access](/img/en/hub/Hub2041.png)  

{% snippet icon.badgeInfo %} 
To learn more about the end user experience in {{ en.PHUB }} Business, visit our [Request Temporary Access to an Entry in {{ en.PHUB }} Business](/hub/web-interface/hub-overview/temporary-access-hub-business/request-temporary-access-to-an-entry/) topic. 
{% endsnippet %}
 

