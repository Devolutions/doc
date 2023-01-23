---
title: Blank Page Issues in Citrix Environment
---
# {{ en.TOPICTITLE }}
Multiple issues regarding Webview2’s behavior under a Citrix environment.
### Solution
We found information about unwanted behavior under a Citrix environment that other users have had due to Citrix&apos; API hooks interfering with the Webview2: [Webview2 application running in a Citrix environment · Issue #1082 · MicrosoftEdge/WebView2Feedback](https://github.com/MicrosoftEdge/WebView2Feedback/issues/1082)  

According to them, adding the Webview2 process as an exception to the Citrix API hooks fixed the issue.  

This can be done by following the steps here: [How to Disable Citrix API Hooks on a Per-application Basis](https://support.citrix.com/article/CTX107825)
