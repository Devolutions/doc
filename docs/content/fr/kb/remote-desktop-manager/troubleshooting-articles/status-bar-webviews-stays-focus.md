---
eleventyComputed:
  title: Status bar in WebViews stays in focus
---
In {{ en.RDM }}, when using a ***Website*** entry in embedded mode, the status bar can remain in focus after the page has loaded and persists across tabs.

This can happen when your mouse hovers over a link; this status bar text is displayed as information about the link. While it is not intended to last, it can happen when the focus is lost from the window containing the links in question. Navigating back to the window that first created the link and hovering the mouse over the control that created the link in the first place and then moving the mouse away from it should remove these lines of text.

For a long-term solution, there is an option to disable the status bar altogether:
1. In {{ en.RDM }}, go to ***File – Options – User Interface***.
1. Under the ***Advanced*** section, find the ***Show status bar in WebView*** option and disable it.

![Disable Show status bar in WebViews](https://webdevolutions.azureedge.net/docs/en/kb/KB2183.png)

3. Click ***OK*** to save your change.
