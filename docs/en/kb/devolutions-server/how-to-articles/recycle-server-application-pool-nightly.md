---
title: Recycle DVLS Application Pool Nightly
---
The default value set in ***Regular Time Interval*** parameters of the advanced settings of an IIS application pool is used to recycle the application pool every 29 hours. Sometimes, we need to recycle the application pool nightly to prevent getting a non-responsive web application.

1. Open IIS Manager.
2. Expand the tree and select the ***Application Pools*** node.  
![!!KB4135.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4135.png)
1. Select the {{ en.DVLS }} application pool and open the ***Advanced Settings*** menu from the Actions pane on the right.  
![!!KB4136.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4136.png)
1. Scroll the list at the bottom and set the ***Regular Time Interval*** to the value 0.  
![!!KB4137.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4137.png)
1. Select the ***Specific Times*** parameter and click on the ellipsis button.  
![!!KB4138.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4138.png)
1. Click on the ***Add*** button in the ***TimeSpan Collection Editor*** dialog to add a new entry.  
![!!KB4139.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4139.png)
1. Set the time when the application pool will be recycled. This time must be set as a 24 hour format. The following screen shot is set to recycle every night at 1:00 AM.  
![!!KB4140.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4140.png)
1. Finally, click on ***OK*** to save the modification.
