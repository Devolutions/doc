---
eleventyComputed:
  title: Documentation tab is empty
---
The ***Documentation*** tab, in an entry, is empty although you have ***Reset the layout*** in the ***Window*** tab.  
![!!KB4705](https://webdevolutions.azureedge.net/docs/en/kb/KB4705.png)
## Solution
First validate that you are allowed to ***View documentation*** in ***Administration - {{ en.VLT }} Settings - Permissions - Documentation - View documentation***.  

If all is good, it might be due to your server having the IE Enhanced Security Configuration option enabled. This could prevent and block the document from loading. You would need to disable it, but we would advise you to retain the enhanced protection.  

For more information, see Microsoft's (https://docs.microsoft.com/en-us/troubleshoot/browsers/enhanced-security-configuration-faq#:~:text=Internet%20Explorer%20Enhanced%20Security%20Configuration%20(ESC)%20establishes%20security%20settings%20that,is%20also%20known%20as%20IEHarden).
