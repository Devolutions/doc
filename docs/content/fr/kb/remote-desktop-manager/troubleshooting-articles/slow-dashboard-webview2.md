---
eleventyComputed:
  title: Slow dashboard after application update
  description: The dashboard of {{ en.RDM }} is slow after application update.
---
### Issue

The dashboard is very slow after upgrading {{ en.RDM }}.

### Solution 1

Manually install the [latest version of Webview2](https://developer.microsoft.com/en-us/microsoft-edge/webview2/) by clicking on ***Run as administrator***. Make sure it is installed for all users, not just for the current user.

### Solution 2

In {{ en.RDM }}, go to ***File*** – ***Options*** – ***Advanced***, and disable ***Use embedded Microsoft Edge for overview panel***.
Save and restart {{ en.RDM }}.
![Use embedded Microsoft Edge for overview panel](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6160.png)  

Please contact us at [service@devolutions.net](mailto:service@devolutions.net) if these solutions do not solve your problem.