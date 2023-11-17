---
eleventyComputed:
  title: Slow dashboard
  description: The dashboard of {{ en.RDM }} is slow.
---

### Issue

The dashboard is very slow after upgrading {{ en.RDM }}.

### Solution 1

Manually install the [latest version of Webview2](https://developer.microsoft.com/en-us/microsoft-edge/webview2/) by clicking on ***Run as administrator***. Make sure it is installed for all users, not just for the current user.

### Solution 2

In {{ en.RDM }}, go to ***File*** – ***Options*** – ***Advanced***, and disable ***Use embedded Microsoft Edge for overview panel***.
![Use embedded Microsoft Edge for overview panel](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6160.png)  
Save and restart {{ en.RDM }}.