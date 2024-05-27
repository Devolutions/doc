---
eleventyComputed:
  title: Automating Remote Microsoft Management Console (MMC)
  description: You can configure a MMC snap-in console to run on any of your servers. The snap-in needs to support remote access.
---
You can configure a MMC snap-in console to run on any of your servers. The snap-in needs to support remote access.

## Settings

1. Create the session tool via ***Edit – New entry***.
1. In Macro/Script/Tool, select the ***Command Line*** entry type.
1. Name the session DHCP.
1. Under the ***General*** tab, in the ***Run*** field, type *dhcpmgmt.msc /ComputerName $HOST$* ($HOST$ is the variable that will be replaced by the server name or IP address).
![Run](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4529.png)
1. Under the ***Advanced*** tab, enable ***Run as Administrator***.
   {% snippet, "shieldInfo" %}
   If you are running a Windows 64-bit edition, enable ***Run in 64-bit mode*** as well.
   {% endsnippet %}
1. Click ***Add*** to save your entry.
1. Verify that your sessions use the appropriate credentials to run the tool. In the ***Management Tools – Tools*** section of each session, make sure you have selected the proper credentials to be supplied.
   ![Management Tools – Tools – Credentials](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4530.png)

   | Option                      | Description                                       |
   | --------------------------- | ------------------------------------------------- |
   | Use default credentials     | Use the credentials from the Windows session.     |
   | Use session credentials     | Use the same credentials as the session.          |
   | Prompt for credentials      | Prompts for the credentials on use.               |
   | Custom                      | Enter a custom username, domain, and password.    |
   | Linked ({{ en.VLT }})       | Specify a set of credentials from a specific {{ en.VLT }}. |
   | My personal credentials     | Use [***My Personal Credentials***](/rdm/windows/commands/file/my-account-settings/my-personal-credentials/) set in ***File – My account settings***. |
   | My privileged account       | Use ***My Privileged Account*** set in ***File – My account settings***. |

To run the snpa-in, select your session and execute the tool from the dashboard.
![Run from the dashboard](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4531.png)
