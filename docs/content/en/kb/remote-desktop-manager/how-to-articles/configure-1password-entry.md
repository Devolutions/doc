---
eleventyComputed:
  title: Configure a 1Password entry in {{ en.RDM }}
  description: There are two modes used to configure a 1Password entry in {{ en.RDM }}.
---
There are two modes used to configure a 1Password entry in {{ en.RDM }}. ***Web connector*** connects to a 1Password database through the web. ***Linked to a local file*** is used to connect a 1Password entry to a local database file exported from 1Password directly.

## Web connector mode
1. In {{ en.RDM }}, go to ***Edit*** – ***New Entry***, and select the 1Password entry.
1. Name the 1Password entry.
1. Select the ***Web connector*** mode.
![Web connector mode](https://cdnweb.devolutions.net/docs/docs_en_kb_RDMW4000_2024_1.jpg)
1. Set the ***Host*** as either ***Default*** or ***Custom***.
    1. If set as ***Default***, select a ***Region***. {type="a"}
    1. If set as ***Custom***, add the custom ***URL*** needed to access the database. {type="a"}
1. Configure the ***Username***, ***Password***, and ***Secret key*** or check ***Use “My Account Settings“*** if they are already configured there. Refer to [My Account Settings](/rdm/commands/file/my-account-settings/) for more information.
1. Select the entry from your 1Password database you wish to reference by clicking the ellipsis next to the ***Title*** field, or check ***Always prompt with list*** to have the entry show all the available entries from the 1Password database.
1. Click ***Add*** to save the configuration.
## Linked to a local file mode
{% snippet icon.badgeInfo %}
The steps below are only available in older versions of 1Password.
{% endsnippet %}

1. In the 1Password desktop app, select ***1Password*** – ***New vault on this PC***.
1. Configure the vault and choose a folder to synchronize this vault.
1. Select the destination of the local database.
1. In {{ en.RDM }}, go to ***Edit*** – ***New Entry***, and select the 1Password entry.
1. Name the 1Password entry.
1. Set the ***Mode*** to ***Linked to a local file***.
![Linked to a local file mode](https://cdnweb.devolutions.net/docs/docs_en_kb_RDMW4001_2024_1.jpg)
1. Click the ellipsis button to select the local database file. Its extension is **.opvault**, and is found in the location selected earlier.
1. Select the entry from your 1Password database you wish to reference by selecting the ellipsis next to the ***Title*** field, or check ***Always prompt with list*** to have the entry show all the available entries in the 1Password database.
1. Click ***Add*** to save the configuration.