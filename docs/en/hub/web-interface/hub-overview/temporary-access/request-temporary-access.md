---
eleventyComputed:
  title: Request temporary access to an entry in {{ en.HUBB }}
  description: The Temporary Access feature allows users to request a temporary elevation of their permissions for a specific entry. The approver must then approve or deny the request.  
---

{% youtube '5XwhadoYKKc' %}  

{% snippet icon.badgeNotice %} 
This video includes information pertaining to both requesters and approvers. A user wanting to request temporary access to an entry may find this visual aid useful, but watching the video is not essential since all the steps are described in this topic.  

To learn how to approve or deny a request, visit [Approve temporary access to an entry in {{ en.HUBB }}](/hub/web-interface/hub-overview/temporary-access/approve-temporary-access/). 
{% endsnippet %}
 
The ***Temporary Access*** feature allows users to request a temporary elevation of their permissions for a specific entry. The approver must then approve or deny the request.  

## Request temporary access 

{% snippet icon.badgeInfo %} 
The duration of ***Temporary Access*** begins when the request is approved.
{% endsnippet %}

Follow the steps below to learn how to make a temporary access request: 

1. In the ***{{ en.VLT }}*** tab, select the entry you want access to in the vault of your choice. 
1. Click on ***More***, then select ***Temporary Access Request***.  
![Temporary Access Request](https://webdevolutions.azureedge.net/docs/en/hub/Hub2016.png) 
1. In the ***Temporary Access Request*** window, select the ***Access duration*** in the drop-down menu.  
![Access duration](https://webdevolutions.azureedge.net/docs/en/hub/Hub2017.png) 
1. Select the ***Permissions*** level you want to temporarily obtain between ***Readers***, ***Operators***, and ***Contributors*** using the drop-down menu.  
![Permissions](https://webdevolutions.azureedge.net/docs/en/hub/Hub2020.png) 
Hovering your mouse over the eye icon while you have a ***Permissions*** level selected lets you see what permissions it includes. For example, the following image shows the permissions for the ***Operators*** role.  
![Permissions content](https://webdevolutions.azureedge.net/docs/en/hub/Hub2019.png)  

To help you decide which role to select, you can visit [Roles and permissions](/hub/web-interface/hub-overview/administration/configuration-security/system-permissions/roles-permissions/).  
5. Select the approver you want to send your request to using the drop-down menu. You can also use the filter bar to refine your research.  
![Send request to](https://webdevolutions.azureedge.net/docs/en/hub/Hub2021.png) 
1. Write a short ***Message*** to the approver explaining why you want access to this entry. This is optional, but we strongly recommend it as it allows the approver to make a more informed decision. When you are done, click on ***Send Request***.  

You now have to wait for the approver to respond to your request. You will be notified by email whether the answer is positive or negative. The next section details what to do once you have received a response. 

## Response to your request 

If your request is approved, your email will have a button at the bottom that will bring you directly to your entry in {{ en.HUBB }}. It is also possible to manually go to your entry.  
![Confirmation email](https://webdevolutions.azureedge.net/docs/en/hub/Hub2022.png) 
Once you are on the entry in the {{ en.VLT }}, you will see a ***Temporary Access Request*** section near the top. A check mark validates that your request was approved. Next to the check mark is the ***Time remaining*** on your request. There is also a ***View Details*** option which is described in the next section.  

You can now perform your task with this elevated permission.  
![Approved temporary access request](https://webdevolutions.azureedge.net/docs/en/hub/Hub2024.png) 

## View details and revoke your temporary access 

***View Details*** allows you to see information about your ***Temporary Access Request*** as well as revoke your access.  

In the top section, you can see the ***Permissions*** level approved by the approver, the ***Requested duration***, the ***Authorized duration***, and the ***Time remaining*** on your temporary access.  

Further down, you can read the message you sent to the approver when you created your request as well as the approval message they sent back.  

Finally, for any reason, you may revoke your temporary access by clicking on ***Revoke***. Be sure you want to do this first, since in order to regain access to your entry, you will need to make another request. Otherwise, your access will end within the time frame set by you and the approver.  
![Temporary access details and revocation](https://webdevolutions.azureedge.net/docs/en/hub/Hub2044.png) 
