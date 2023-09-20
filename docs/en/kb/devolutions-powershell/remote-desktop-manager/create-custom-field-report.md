---
  title: Create a Custom Field Report
description: This topic will cover how to create a Custom Field Report to use various PowerShell scripts.
---
This topic will cover how to create a Custom Field Report to use various PowerShell scripts.

## Creating the report
1. Click the ***New Entry*** button.
1. Select ***Report***, which is under ***Macro/Script/Tool*** – ***Tool***.
1. Enter the ***Name***.
![Custom Field Report](https://webdevolutions.azureedge.net/docs/en/kb/KB0138.png)
1. In the ***General*** tab:
    * Set the ***Type*** to ***Custom Field Report***.
    * The ***Script source*** can either be;
      * ***PowerShell***: Enter the script in the ***Script*** tab.
      * ***Linked Entry***: Choose a PowerShell entry with the script in it, this would make it easier to use the same script for multiple entries.
    * Add ***Timeout (ms)*** (optional).
    * Add necessary ***Fields***.
   {% snippet icon.badgeInfo %}
   If you chose ***Linked Entry***, skip step 5.
   {% endsnippet %}  
1. In the ***Script*** tab, add the custom script.
![Script example](https://webdevolutions.azureedge.net/docs/en/kb/KB0139.png)
   {% snippet icon.badgeInfo %}
   There is a ***Sample*** script at the bottom of this tab to use as reference.
   {% endsnippet %}  
1. In the ***Parameters*** tab, add parameters that can be used in the script (by using $PARAMETER1$, $PARAMETER2$, etc).
1. Click ***OK*** to create the entry and close this window.
1. Select the ***Report*** entry and click on ***Execute***.
