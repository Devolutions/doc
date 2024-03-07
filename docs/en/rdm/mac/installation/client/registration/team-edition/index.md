---
eleventyComputed:
  title: Team edition
  order: 10
  description: When using an advanced data source, there is no need to register {{ en.RDMMAC }} since the license serial is stored in the data source and retrieved directly from it.
---
When using an [advanced data source](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/), there is no need to register {{ en.RDMMAC }} since the license serial is stored in the data source and retrieved directly from it. When launching the application for the first time, simply [add the data source](/rdm/mac/workspace-browser-extension/using-workspace-browser-extension/create-account-website/) containing the serial. The license menu to register {{ en.RDMMAC }} is available for SQLite, but not for other individual data sources.

{% snippet icon.badgeInfo %}
It is possible to [request a trial](/rdm/mac/installation/client/registration/trial-request/) to try {{ en.RDM }} Team for 30 days. If you decide not to register the application with a Team Edition license serial at the end of the 30-day period, your data will not be altered or erased, and you will have full access to it once you provide a license serial.
{% endsnippet %}

1. To add a license serial to the data source, navigate to ***Administration – Licenses***.
![Administration – Licenses](https://cdnweb.devolutions.net/docs/en/rdm/mac/RDMMac0000.png)
1. Click ***Add License***.
![Add License Button](https://cdnweb.devolutions.net/docs/en/rdm/mac/RDMMac0001.png)
1. Enter the license serial in the ***License*** field.
![License Field](https://cdnweb.devolutions.net/docs/en/rdm/mac/RDMMac0002.png)
1. Optional: Check the ***Auto assign*** box to automatically provide the {{ en.RDMMAC }} serial to all newly created users.
![Auto Assign Setting](https://cdnweb.devolutions.net/docs/en/rdm/mac/RDMMac0003.png)
1. Click ***OK***.
1. Click the ***Edit*** button in the ***User and Security Management***.
![Edit Button](https://cdnweb.devolutions.net/docs/en/rdm/mac/RDMMac0004.png)
1. Click ***Assigned To*** in the left menu.
1. Click ***Assign All*** or select in the ***Assigned*** column who should have a {{ en.RDMMAC }} serial access. This step will automatically assign the license to the selected users, removing the need to interact with each user.
![Assigned To Tab](https://cdnweb.devolutions.net/docs/en/rdm/mac/RDMMac0005.png)
1. Click ***OK*** and ***Close*** the ***User and Security Management*** window.