---
eleventyComputed:
  title: First login to {{ en.RDMWIN }} with the {{ en.WBEX }}
  order: 10
---
Follow these steps to connect {{ en.RDMWIN }} to the {{ en.WBEX }}. You will be prompted to pair the two applications.

1. Click on the {{ en.WBEX }} at the top right corner of your browser.
   {% snippet, "badgeCaution" %}
   {{ en.RDM }} must be installed and running to continue.
   {% endsnippet %}

1. Choose ***{{ en.RDM }}*** in the list, then click ***Save***.
![First Login](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_Dwl4056.png)
1. Enter a name for this association in the text box.
![Association with {{ en.RDM }}](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_Dwl4057.png)

1. Click on ***Associate with {{ en.RDM }}***.
   {% snippet, "badgeInfo" %}
   A pop-up window will appear in {{ en.RDM }} to confirm that the request was really sent by you.
   {% endsnippet %}

1. Click ***Yes*** in {{ en.RDM }} to accept the association request.
![Association Request](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_Dwl4058.png)
1. If you click on the icon in your web browser, you can validate that the {{ en.WBEX }} is now paired to your {{ en.RDM }}.
![Successful Association of {{ en.RDM }} to the {{ en.WBEX }}](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_Dwl4059.png)
   {% snippet, "badgeInfo" %}
   Note that, while {{ en.RDM }} can handle multiple associations (e.g., multiple browsers), the {{ en.WBEX }} can only be paired to a single instance of {{ en.RDM }} at any time.
   {% endsnippet %}