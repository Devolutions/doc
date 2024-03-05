---
eleventyComputed:
  title: Web browser Google Chrome
---
## Problem 1
Adobe flash player needs your permission to run.
### Solution
You need to install Adobe Flash Player with PPAPI. To do so, please follow the steps below:

1. Visit [https://get.adobe.com/flashplayer/](https://get.adobe.com/flashplayer/) with Google Chrome browser.
1. Download Adobe Flash Player.
1. Launch the installer from your download folder.
1. After the installation, close and restart {{ en.RDM }}
1. Create an embedded Chrome web session and use the following link [https://get.adobe.com/flashplayer/about/](https://get.adobe.com/flashplayer/about/) to verify that it works.
## Problem
Certificate errors in embedded mode.

{{ en.RDM }} starts Google Chrome in a separate application (**Embedded32.exe**) and then re-parents the application inside {{ en.RDM }}.
### Solution 2
To resolve this issue, you need to check the option ***Ignore certificate errors*** in the ***Properties*** of the ***Website*** session entry.
![!!KB4102](https://cdnweb.devolutions.net/docs/en/kb/KB4102.png)
