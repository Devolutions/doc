---
eleventyComputed:
  title: Request temporary access to an entry in {{ en.DVLS }}
  order: 10
  description: The Temporary Access feature allows users to request a temporary elevation of their permissions to execute for a specific entry. The approver must then approve or deny the request. 
---
{% snippet icon.badgeNotice %}  
To learn how to approve or deny a request, visit [Approve temporary access to an entry in {{ en.DVLS }}](/server/user-interface/content-area/temporary-access/approve-temporary-access/). 
{% endsnippet %}
 
The ***Temporary Access*** feature allows users to request a temporary elevation of their permissions to execute for a specific entry. The approver must then approve or deny the request. 

## Request temporary access 

{% snippet icon.badgeInfo %} 
The duration of ***Temporary Access*** begins when the request is approved.
{% endsnippet %}

Follow the steps below to learn how to make a temporary access request:  

1. In the ***{{ en.NPANE }}*** of {{ en.DVLS }}, select the entry you want access to. 
1. Click ***More*** – ***Request Temporary Access***.
![Request Temporary Access Request](https://webdevolutions.blob.core.windows.net/docs/en/server/ServerOp6039.png) 
1. In the ***Temporary Access Request*** window, choose the approver you want to send the request to.  
1. Select the time of ***Access duration***. You can click ***Set custom time frame*** if you need access for a specific period of time.

![Temporary Access Request](https://webdevolutions.blob.core.windows.net/docs/en/server/ServerOp6032.png)  
5. Write a short ***Message*** to the approver explaining why you want access to this entry and its dependencies. This is optional, but we strongly recommend it as it allows the approver to make a more informed decision. When you are done, click on ***Send Request***.  

You now have to wait for the approver to respond to your request. Depending on their settings, you may be notified by email or message when they respond, whether the answer is positive or negative.  

If you do not receive an email, try accessing the entry in {{ en.DVLS }}. If you can access it, it means that the approver accepted your request. If not, we suggest you contact them to know if they denied it or simply did not respond yet.  

Once the approver has approved you access, you can go straight to your entry in {{ en.DVLS }}. You now temporarily have access to the entry.

## Request temporary access to a credentials entry 

 Users can request access to a credentials entry in order to view and copy passwords. The process is the same as described above. Once the approver has given you access, you can view the password.
![View the password](https://webdevolutions.blob.core.windows.net/docs/en/server/ServerOp6090.png)  
You can also right-clicking on the entry to view the password. 
![Right-clicking on the entry to view the password](https://webdevolutions.blob.core.windows.net/docs/en/server/ServerOp6091.png)
  
## Revoke your temporary access 

For any reason, you may revoke your temporary access. Be sure you want to do this first, since in order to regain access to your entry, you will need to make another request. Otherwise, your access will end within the time frame set by you and the approver.  

1. Go to ***Reports***.
![Reports](https://webdevolutions.blob.core.windows.net/docs/en/server/ServerOp6042.png)
1. Select ***Temporary Access Requests Report***.
![Temporary Access Requests Report](https://webdevolutions.blob.core.windows.net/docs/en/server/ServerOp6044.png)
1. Click ***Cancel request***.
![Cancel request](https://webdevolutions.blob.core.windows.net/docs/en/server/ServerOp6041.png)
1. The next window will ask if you really want to cancel your request. Click ***OK*** to confirm.
![Cancel request confirmation](https://webdevolutions.blob.core.windows.net/docs/en/server/ServerOp6051.png)

Your temporary access has now been revoked. 
