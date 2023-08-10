---
title: Devolutions Web Login troubleshooting connection logs
---
When an issue occurs with {{ en.DWL }}, the support personnel may ask you to provide them logs in order to provide more information to our engineering department, please follow these steps:

1. In your browser, right-click on the {{ en.DWL }} extension icon.
1. Click on ***Manage Extension***
1. Toggle on the ***Developer mode***  
![!!KB4786.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4786.png)
1. In the same window, under ***Inspect views*** , click on the ***background/background.html*** link. This will open the browser ***DevTools*** window.  
![!!KB4787.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4787.png)
1. In the {{ en.DWL }} pop-up menu, click on the ***Refresh*** button.  
![!!KB4788.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4788.png)
1. In the ***DevTools*** window click on ***Network***  
![!!KB4789.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4789.png)
1. In the ***Network*** tab, one of the items in the list should be in red, this is the event where {{ en.RDM }} failed to retrieve the credentials. Click on it.
2. Take a screenshot of the full message displayed and send it to [service@devolutions.net](mailto:service@devolutions.net)
