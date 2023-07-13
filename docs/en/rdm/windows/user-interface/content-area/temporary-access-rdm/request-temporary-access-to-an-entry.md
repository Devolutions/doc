---
eleventyComputed:
  title: Request Temporary Access to an Entry in {{ en.RDM }}
---
{% youtube 'En3pmonz1f8' %}  

{% snippet icon.badgeNotice %} 
This video includes information pertaining to both requesters and authorizers. A user wanting to request temporary access to an entry may find this visual aid useful, but watching the video is not essential since all the steps are described in this topic.  

To learn how to approve or deny a request, visit our [Grant Temporary Access to an Entry in {{ en.RDM }}](/rdm/windows/user-interface/content-area/temporary-access-rdm/grant-temporary-access-to-an-entry/) topic. 
{% endsnippet %}
 
The ***Temporary Access*** feature allows users to request a temporary elevation of their permissions to execute for a specific entry. The authorizer must then approve or deny the request. 

### Request Temporary Access 

Follow the steps below to learn how to make a temporary access request:  

1. In the ***{{ en.NPANE }}*** of {{ en.RDM }}, open the entry you want access to by double clicking on it. 
1. A message will pop up asking if you want to send a request to get temporary access. Click ***Yes***.  
![Send a Temporary Access Request](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2059.png) 
1. In the ***Temporary Access Request*** window, select the ***Access duration*** as well as the authorizer you want to send the request to.  

{% snippet icon.badgeInfo %} 
Please note that the duration of the ***Temporary Access*** begins when the request is approved.
{% endsnippet %}  

![Temporary Access Request](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2060.png) 
4. Write a short ***Message*** to the authorizer explaining why you want access to this entry. This is optional, but we strongly recommend it as it allows the authorizer to make a more informed decision. When you are done, click on ***Send Request***.  
5. A message will appear indicating that the request has been sent to the authorizer. Click ***OK*** to make it disappear. 

You now have to wait for the authorizer to respond to your request. Depending on their settings, you may be notified by email when they respond, whether the answer is positive or negative.  

If you do not receive an email, try accessing the entry in {{ en.RDM }} . If you can access it, it means that the authorizer accepted your request. If not, we suggest you contact them to know if they denied it or simply did not respond yet.  

Once the authorizer has granted you access, you can go straight to your entry in {{ en.RDM }} . You now temporarily have access to the entry.  

### Revoke your Temporary Access 

For any reason, you may revoke your temporary access. Be sure you want to do this first, since in order to regain access to your entry, you will need to make another request. Otherwise, your access will end within the time frame set by you and the authorizer.  

1. Select your entry in the ***{{ en.NPANE }}*** . Then, from the ***Actions*** menu of your ***Dashboard*** , click on ***Revoke Temporary Access*** .  
![Revoke Temporary Access](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2065.png) 
1. Click the ***Yes*** button when asked if you are sure you want to revoke your temporary access.  
![Approve Temporary Access Revocation](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2066.png) 
1. The next window will indicate that the revocation has been executed. Click on OK to make this window disappear. 

Your temporary access has now been revoked. 

