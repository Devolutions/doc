---
eleventyComputed:
  title: Request temporary access to an entry in {{ en.RDMMAC }} 
  order: 10
  description: The Temporary Access feature allows users to request a temporary elevation of their permissions to execute for a specific entry. The approver must then approve or deny the request. 
---
{% snippet icon.badgeNotice %} 
To learn how to approve or deny a request, visit [Approve temporary access to an entry in {{ en.RDM }}](/rdm/mac/user-interface/content-area/temporary-access/approve-temporary-access/). 
{% endsnippet %}
 
The ***Temporary Access*** feature allows users to request a temporary elevation of their permissions to execute for a specific entry. The approver must then approve or deny the request. 

## Request temporary access 

{% snippet icon.badgeInfo %} 
The duration of ***Temporary Access*** begins when the request is approved.
{% endsnippet %}

Follow the steps below to learn how to make a temporary access request:  

1. In the ***{{ en.NPANE }}*** of {{ en.RDM }}, open the entry you want access to by double clicking on it. 
1. A message will pop up asking if you want to send a request to get temporary access. Click ***Yes***.  
![Send a temporary access request](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac6000.png) 
1. In the ***Temporary Access Request*** window, select ***Access duration***. You can click ***Set custom time frame*** if you need access for a specific period of time.  
1. Choose the approver you want to send the request to.  
![Temporary Access Request](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac6001.png)  
1. Write a short ***Message*** to the approver explaining why you want access to this entry and its dependencies. This is optional, but we strongly recommend it as it allows the approver to make a more informed decision. When you are done, click on ***Send Request***.  
1. A message will appear indicating that the request has been sent to the approver. Click ***OK*** to make it disappear.  

You now have to wait for the approver to respond to your request. Depending on their settings, you may be notified by email when they respond, whether the answer is positive or negative.  

If you do not receive an email, try accessing the entry in {{ en.RDM }}. If you can access it, it means that the approver accepted your request. If not, we suggest you contact them to know if they denied it or simply did not respond yet.  

Once the approver has approved you access, you can go straight to your entry in {{ en.RDM }}. You now temporarily have access to the entry. 

## Request temporary access to a credentials entry 

 Users can request access to a credentials entry in order to view and copy passwords. The process is the same as described above. Once the approver has given you access, you can use the ***View Password***, ***Copy Username***, ***Copy Username and Password*** and ***Copy Password*** buttons. You can also view these buttons by right-clicking on the entry.  

## Revoke your temporary access 

For any reason, you may revoke your temporary access. Be sure you want to do this first, since in order to regain access to your entry, you will need to make another request. Otherwise, your access will end within the time frame set by you and the approver.  

1. Select your entry in the ***{{ en.NPANE }}***. Then, from the ***Actions*** menu of your ***Dashboard***, click on ***Revoke Temporary Access***.  
![Revoke temporary access](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac6003.png) 
1. Click ***Yes*** when asked if you are sure you want to revoke your temporary access.  
![Confirm temporary access revocation](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac6004.png) 
1. The next window will indicate that the revocation has been executed. Click on OK to make this window disappear. 

Your temporary access has now been revoked. 
