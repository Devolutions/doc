---
title: Launch RemoteApp with RDM
---
# {{ en.TOPICTITLE }}
Here are the steps and information required to launch ***RemoteApp*** with {{ en.RDM }} in ***External*** mode.
1. When you download an RDP file from a ***RemoteApp RD Web server*** , you will notice that it will populate the file with the ***RD Connection Broker’s*** server address.  
{% snippet icon.badgeInfo %}
In this example the ***RD Connection Broker*** role and the ***RD Web Access*** role are installed on the same server.
{% endsnippet %}  

![KB4742.png](/img/en/kb/KB4742.png)  
![KB4743.png](/img/en/kb/KB4743.png)
2. When creating a new RDP host entry in {{ en.RDM }} if you attempt to use the same configuration from the RDP file downloaded from the RDS website it will fail. RDM needs to be pointed to the session host server that actually hosts the application you are attempting to launch via RemoteApp. In this case, our DNS application is installed on the server RDS-SESSION.CONTOSO.COM , so that is the server address we will use for the host entry.  
{% snippet icon.badgeCaution %}
RemoteApp’s will only launch in external mode, set the ***Display*** field to ***External***
{% endsnippet %}  

![KB4744.png](/img/en/kb/KB4744.png)
3. On the RDP host entry click the ***Programs*** tab. Check the box for ***Use RemoteApp (seamless mode)*** The ***Program*** field should be the alias of the RemoteApp. You can find that alias either in the ***RemoteApp Collection*** properties on your RDS server, or through the RDP file you downloaded earlier.  
{% snippet icon.badgeCaution %}
Do not include the || characters, only the alias name.
{% endsnippet %}  

4. If you have command line arguments that are needed to pass to the RemoteApp, input them into the ***Parameters*** field.  
![KB4745.png](/img/en/kb/KB4745.png)  
![KB4746.png](/img/en/kb/KB4746.png)
1. Click ***OK*** to save.
1. Launch your newly created hosted RDP entry. You should see an external RemoteApp launch window.  
![KB4747.png](/img/en/kb/KB4747.png)  
![KB4748.png](/img/en/kb/KB4748.png)
