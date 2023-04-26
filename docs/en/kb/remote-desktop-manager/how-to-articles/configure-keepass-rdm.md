---
eleventyComputed:
  title: Configure the KeePass plugin with {{ en.RDM }}
  description: The following steps show how to configure KeePass with {{ en.RDM }}, as well as different ways it can be used as a plugin.
---
The following steps show how to configure KeePass with {{ en.RDM }}, as well as different ways it can be used as a plugin.
{% snippet icon.badgeInfo %}
Only the latest version of KeePass is compatible with the {{ en.RDM }} plugins.
{% endsnippet %}  

## Steps
1. Install the latest [KeePass 2](https://keepass.info/download.html) version.
{% snippet icon.badgeCaution %}
The installation folder for KeePass should use the default path (e.g., C:\Program Files\KeePass Password Safe 2). This will ensure that the {{ en.RDM }} integration works properly.
{% endsnippet %}  

2. Once the installation is done, create the [KeePass database](https://keepass.info/help/base/firststeps.html).
1. Configure the database.
1. Save the database.
1. Close KeePass.
1. In {{ en.RDM }}, go to ***File*** – ***Options*** – ***Paths*** and click on ***Configure Installation Path***.  
![Configure Installation Path](/img/en/kb/KB0034.png)
1. Select ***KeePass*** which is under ***Applications*** – ***Password Manager***, and make sure the executable is detected.  
![KeePass is detected](/img/en/kb/KB0035.png)
1. Click on ***Extensions Manager*** which is under the ***Tools*** tab.  
![Extensions Manager](/img/en/kb/KB0036.png)
1. Go to the ***Others*** tab and click on ***Install***.  
![Install Button](/img/en/kb/KB0037.png)
1. Create a new entry.
1. Select the ***KeePass*** entry, which is under ***Credential Management*** – ***Password Management***.
1. Select ***Plugin*** from the ***Mode*** dropdown.  
![Plugin Mode](/img/en/kb/KB0038.png)
{% snippet icon.badgeHelp %}
It is possible to set the database path by checking the ***Set database path manually*** option.
{% endsnippet %}  

13. Under the ***Entry*** tab, select the ***Default (specific UUID)*** option in the dropdown.
1. Click the ellipsis button next to the ***Uuid*** field.  
![Configure Uuid](/img/en/kb/KB0039.png)
1. Enter the ***Master password*** to access the KeePass database.  
![Master Password](/img/en/kb/KB0040.png)
1. In {{ en.RDM }}, the ***KeePass Credentials List*** will now show which credentials are available to reference in the KeePass entry.  
![KeePass Credentials List](/img/en/kb/KB0041.png)
1. Select the credential that will be referenced and click ***OK***.
1. Click ***OK*** to save the changes and close the entry options window.

### Other Possible Configurations
At step 13, it is possible to instead choose either of these options:  

* ***Always Prompt with list*** ensures that every time the entry is accessed, it will display the entire database, making it possible to select an entry from the list instead of using a fixed KeePass credential entry.

* With ***Name filtering*** enabled, the entry will use the name (referred to as "Title" in KeePass) of a specific credential entry from the KeePass database. This option can be customized to be stricter by allowing case sensitivity or exact matches only within the database.
