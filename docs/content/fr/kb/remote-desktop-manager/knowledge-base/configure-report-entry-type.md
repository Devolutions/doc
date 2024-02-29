---
eleventyComputed:
  title: Configure a report entry in {{ en.RDM }}
  description: The Report entry type generates a customized report with the appropriated properties and, if needed, specific criteria for selecting the entries to be included in the report.
---
The ***Report entry*** generates a customized report with the appropriated properties and, if needed, specific criteria for selecting the entries to be included in the report.

1. To fetch the property's names of your entries, go to {{ en.RDM }}.
1. Select your entries and click ***Home*** – ***Clipboard*** – ***Copy*** in the ribbon. Alternatively, you can right-click your entry selection and select ***Clipboard – Copy***.
![Home – Clipboard – Copy](https://cdnweb.devolutions.net/docs/en/kb/KB2105.png)
1. In the ***Copy Options*** window, go to the ***Preview tab***.
1. Select all the content of the box, then copy and paste it in a text editor.
1. In {{ en.RDM }} go to ***New Entry*** – ***Macro/Script/Tool*** – ***Report***.
![New Entry – Macro/Script/Tool – Report](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6081.png)
1. Click ***OK***.
1. Enter a ***Name*** and choose a ***Folder***.
1. In the ***General*** tab, select ***Connection List*** or ***Custom Field Report*** under ***Type***.

{% snippet icon.badgeInfo %}
***Connection List*** contains a list of predefined properties that cannot be modified.
{% endsnippet %}

9. In ***Script Source***, select ***Power Shell*** or ***Linked Entry***.

{% snippet icon.badgeInfo %}
***Power Shell*** is embedded in the Report entry. ***Linked entry*** is linked to a PowerShell entry which contains the script to select the list of entries.
{% endsnippet %}

10. Go to ***Fields*** and copy/paste  the property's names previously saved.
![New Entry – Macro/Script/Tool – Report – General tab](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6084.png)
1. Go to the ***Script tab*** and write your script. A sample is available at the bottom of the window.
{% snippet icon.badgeInfo %}
Note that this Script example only lists the RDP entries per this if statement:
`if ($connection.ConnectionType -eq 'RDPConfigured')`
{% endsnippet %}

![Script tab](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6082.png)

The ***Parameters*** tab is for submitting values to be used with the $PARAMETER1$, $PARAMETER2$ variables and so on.

12. Click ***OK*** to save and close the window.
13. Select your newly created ***Report entry*** and click ***Execute***.

The report is available in Html format. Three options are also displayed at the top of the report: ***Refresh***, ***Save as*** and ***Print***.
![Refresh, Save as and Print options](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6083.png)
