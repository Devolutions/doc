---
eleventyComputed:
  title: "{{ en.WBEX }} troubleshooting connection logs"
---
When an issue occurs with the {{ en.WBEX }}, the support personnel may ask you to provide them logs to provide more information to our engineering department, please follow these steps:

1. In your browser, right-click on the {{ en.WBEX }} icon.
1. Click on ***Manage Extension***.
1. Toggle on the ***Developer mode***.
![!!KB4786](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4786.png)
1. In the same window, under ***Inspect views***, click on the ***background/background.html*** link. This will open the browser ***DevTools*** window.
![!!KB4787](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4787.png)
1. In the {{ en.WBEX }} pop-up menu, click on the ***Refresh*** button.
![!!KB4788](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4788.png)
1. In the ***DevTools*** window click on ***Network***.
![!!KB4789](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4789.png)
1. In the ***Network*** tab, one of the items in the list should be in red, this is the event where {{ en.RDM }} failed to retrieve the credentials. Click on it.
1. Take a screenshot of the full message displayed and send it to [service@devolutions.net](mailto:service@devolutions.net).
