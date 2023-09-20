---
  title: Session tools
---
When you attempt to use ***Computer Management***, you receive the error below:  
![!!KB4083](https://webdevolutions.azureedge.net/docs/en/kb/KB4083.png)
## Solution
To get this working, you need to check this option in the ***Management Tools*** tab of the RDP session.  
![!!KB4084](https://webdevolutions.azureedge.net/docs/en/kb/KB4084.png)  

If this does not solve your issue, it is likely that your session has ***User Specific Settings*** enabled.  

This can be useful when you are using tools such as:  

* Hyper-V  
* Event Viewer  
* Computer Management  
* Windows Services  

If this is often needed, we recommend you to change the ***Default Settings*** of the entry type. With this modification, all your new sessions will use the specified credentials when a tool is launched.
