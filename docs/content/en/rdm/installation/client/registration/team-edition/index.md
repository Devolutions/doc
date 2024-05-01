---
eleventyComputed:
  title: Team edition
  order: 10
  description: When using an Advanced Data Source, there is no need to register {{ en.RDM }} since the license serial is stored in the data source and retrieved directly from it.
---
When using an [Advanced Data Source](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/), there is no need to register {{ en.RDM }} since the license serial is stored in the data source and retrieved directly from it. When launching the application for the first time, simply [add the data source](/rdm/windows/data-sources/create-new-data-source/) containing the serial.

{% snippet icon.badgeInfo %}
The license menu to register {{ en.RDM }} is available for SQLite and {{ en.DHUBP }}, but not for other individual data sources.

It is possible to [request a trial](/rdm/windows/installation/client/registration/trial-request/) to try {{ en.RDM }} Team for 30 days. If you decide not to register the application with a Team Edition license serial at the end of the 30-day period, your data will not be altered or erased, and you will have full access to it once you provide a license serial.
{% endsnippet %}

1. To add a license serial to the data source, navigate to ***Administration – Management – Licenses***.
![Administration – Management – Licenses](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip3417.png)
1. Click ***Add License***.
![Add License Button](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2236.png)
1. Enter the license serial in the ***License*** field or import the license file using the ***Import*** button.
   {% snippet icon.badgeInfo %}
   Importing the license using the **.lic** file is most uselful when offline. See the next section about offline registration for more information.
   {% endsnippet %}

   ![License field](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2238.png)
1. Optional: Check the ***Auto assign*** box to automatically provide the {{ en.RDM }} serial to all newly created users.
![Auto Assign Setting](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin0001.png)
1. Click ***Assigned To*** in the left menu.
1. Click ***Assign All*** or select in the ***Assigned*** column who should have a {{ en.RDM }} serial access. This step will automatically assign the license to the selected users, removing the need to interact with each user.
![Assigned To Tab](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2237.png)
1. Click ***OK*** and ***Close*** the ***User and Security Management*** window.

### Offline registration

If you need to register your license while offline (if internet is disabled or if for whatever reason you cannot reach the servers), you can only do it by importing the **.lic** file provided to you, which contains a JSON Web Token (JWT).

* ***Trial license***: The license file must be downloaded from the Devolutions confirmation email and imported as described in the steps above for {{ en.RDM }} 2023.3 and later.
* ***Purchased license***: The purchased license must be downloaded from your {{ en.DPORTAL }} account and imported as described in the steps above for {{ en.RDM }} 2023.3 and later.
