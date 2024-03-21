---
eleventyComputed:
  title: Licenses
---
Managing {{ en.RDM }} registration globally for all your users can be done with a license serial stored in an advanced data source such as {{ en.DVLS }}, Microsoft SQL Server or Azure SQL.

{% snippet icon.badgeInfo %}
It is possible to [request a trial](/rdm/mac/installation/client/registration/trial-request/) to try {{ en.RDM }} for 30 days. If you decide not to register the application at the end of the 30 days period, your data will not be altered or erased, and you will have full access to it once you provide a valid license serial
{% endsnippet %}


With the license stored in an [Advanced Data Source](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/), there is no need to register {{ en.RDM }} as the license serial is retrieved directly from it. When launching the application for the first time, add the data source containing the serial.

1. To add a license serial, navigate to ***Administration – Licenses***.
![Administration – Licenses](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac6031.png)
1. Click ***Add License***.
![User and Security Management – License](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac6032.png)
1. Enter the license serial.
![License serial](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac6033.png)
1. Click ***OK*** to save the license.
1. Optional: The ***Auto assign*** option will be displayed when you enter the license. The box is already checked to provide the {{ en.RDM }} serial to all newly created users. A warning window will appear if you uncheck the box and click ***OK***.
![Warning window](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac6030.png)

Your license is now saved in the advanced data source. Follow [Assign Licenses](/rdm/mac/commands/administration/licenses/assign/) to automatically assign them to selected users, removing the need to interact locally with their {{ en.RDM }}.
