---
eleventyComputed:
  title: Invalid certificate error when updating {{ en.RDM }}
  description: '{{ en.RDM }} shows an "Invalid certificate" error message when attempting to update from a version earlier than 2023.2.34.'
---
{{ en.RDM }} shows an "Invalid certificate" error message when attempting to update from a version earlier than 2023.2.34.  

As a security precaution, {{ en.RDM }} includes a list of accepted certificates to ensure the updates are distributed by Devolutions (a method named certificate pinning).

![Invalid certificate error](https://webdevolutions.azureedge.net/docs/en/kb/KB2340.png)

## Solution

To solve this issue, manually download ans install the update via your browser.  

1. In the {{ en.RDM }} ribbon, go to ***Help – Check for updates***.  
![Help – Check for updates](https://webdevolutions.azureedge.net/docs/en/kb/KB2341.png)  
1. In the ***Update available*** tab that opens, click ***Download***, then ***Download update using your default browser***. You browser opens and the download should start.
![Download update using your default browser](https://webdevolutions.azureedge.net/docs/en/kb/KB2342.png)  
1. When the download is complete, click on the downloaded file and follow the installation process.
