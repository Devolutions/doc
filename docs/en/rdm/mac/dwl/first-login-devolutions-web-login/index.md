---
eleventyComputed:
  title: First Login with {{ en.DWL }}
  order: 40
---
Follow these steps to connect {{ en.RDM }} to the {{ en.DWL }} extension. You will be prompted to pair the two applications.  

1. Click on the {{ en.DWL }} extension at the top right corner of your browser. 
{% snippet icon.badgeCaution %} 
{{ en.RDM }} must be installed and running to continue. 
{% endsnippet %}
 
2. Choose ***{{ en.RDM }}*** in the list, then click ***Save***.  
![First Login](https://webdevolutions.azureedge.net/docs/en/rdm/mac/Dwl4056.png) 
1. Enter a name for this association in the text box. 
{% snippet icon.badgeNotice %} 
This name can be used to identify a particular association and to deny access to it from {{ en.RDM }}. The default name is the name of the web browser running {{ en.DWL }}. 
{% endsnippet %}
 
![Association with {{ en.RDM }}](https://webdevolutions.azureedge.net/docs/en/rdm/mac/Dwl4057.png) 

4. Click on ***Associate with {{ en.RDM }}***. 
{% snippet icon.badgeInfo %} 
A pop-up window will appear in {{ en.RDM }} to confirm that the request was really sent by you. 
{% endsnippet %}
 
5. Click ***Yes*** in {{ en.RDM }} to accept the association request.  
![Association Request](https://webdevolutions.azureedge.net/docs/en/rdm/mac/Dwl4058.png) 
1. If you click on the {{ en.DWL }} icon in your web browser, you can validate that {{ en.DWL }} is now paired to your {{ en.RDM }}.  
![Successful Association of {{ en.RDM }} to {{ en.DWL }}](https://webdevolutions.azureedge.net/docs/en/rdm/mac/Dwl4059.png) 

{% snippet icon.badgeInfo %} 
Note that, while {{ en.RDM }} can handle multiple associations (e.g., multiple browsers), {{ en.DWL }} can only be paired to a single instance of {{ en.RDM }} at any time. 
{% endsnippet %}
