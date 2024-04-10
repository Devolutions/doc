---
eleventyComputed:
  title: Configure a VPN for multiple sessions
---
{{ en.RDM }} automates opening a VPN when launching a remote session. This configuration is well suited to situations where you need one VPN for a group of servers at a remote location. This procedure sets the VPN configurations on the folder and the entries inherit the settings.

{% youtube 'sKYPgwUnH0g' %}

## Steps

Before following the steps below, in a folder, create a VPN entry and remote session entries.

### Configure the vpn settings on the parent folder entry

1. Right-click the folder entry and open its ***Properties***.
1. From the left menu, under the ***Connection*** section, click on ***VPN/SSH/Gateway***.
![!!KB2063](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2063.png)
1. Under the ***General*** section, in the ***Type*** drop-down list, click on ***Session***.
1. In the ***Connect*** drop-down list, select how the VPN opens when you launch a remote session. We recommend choosing ***Connect if unable to ping/port scan*** on the folder. We will have to set each session entry to ***Inherited*** later.
   | Option                               | Description |
   | ------------------------------------ | ----------- |
   | Not enabled                          | The VPN does not open when the session is open. |
   | Always connect                       | The VPN always opens when the session is open. |
   | Connect manually                     | The VPN requires users to manually open the VPN before launching the session. |
   | Connect if unable to ping/port scan  | {{ en.RDM }} automatically tests if the host responds, if not the VPN opens. |
   | Inherited                            | The VPN inherits the settings from the parent folder. |
   | Ask for confirmation to connect      | The VPN prompts for confirmation before opening. |
   | Connect if network adapter not found | {{ en.RDM }} tests if network adapter is installed and active, if not the VPN opens. |
   | Prompt if unable to ping/scan        | {{ en.RDM }} tests if the host responds, if not the VPN prompts for confirmation before opening. |

1. In the ***Close*** drop-down list, select how the VPN closes at the end of a remote session.
   | Option             | Description |
   | ------------------ | ----------- |
   | On session close   | The VPN closes automatically when the session is closed. |
   | Manually later     | The VPN requires users to manually close the VPN entry when finished. |
   | Confirm disconnect | The VPN prompts to close the VPN when the session is closed. |

1. Create a ***VPN group*** so the VPN only closes when the last session in the ***VPN group*** is closed.
   - Click the plus sign to add a new ***VPN group***, then enter a group name. Click ***OK*** when the name is entered.
{% snippet icon.badgeHelp %}
Watch this [YouTube video](https://youtu.be/5jKREtc63ks) for a demonstration on the ***VPN group*** option.
{% endsnippet %}

7. If you need to use specific credentials, in a team environment, you can define them in the ***Credentials (VPN/SSH/Gateway)***.
1. Click the ***Settings*** tab.
![!!KB2064](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2064.png)
1. In ***Session***, select the VPN entry you created.
1. Click ***OK***.

### Perform a batch edit to configure the session entries

{% youtube 'x0blJWlThuc' %}

1. Select the session entries in the parent folder while holding down the <kbd>Ctrl</kbd> key to select multiple entries at once.
1. Right-click on the selection, then click on ***Edit – Batch Edit – Edit Entries (General Settings)*** Alternatively, the same path can be followed in the ribbon under the ***Edit*** tab.
1. From the left menu, under the ***Connection*** section, click on ***VPN/SSH/Gateway***.
1. Check the ***Override VPN*** box.
![!!KB2065](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2065.png)
1. In the ***Connect*** drop-down list, select ***Inherited***.
1. Click ***OK***.

### Settings for specific situations

There are many options to accommodate a range of VPN types. Here are two common situations and options to make using the VPN more efficient.

Situation 1: You lose connection to the data source when the VPN is active.

Follow the steps below to automate going offline when the VPN opens.

1. Right-click the folder entry and open its ***Properties***.
1. From the left menu, under the ***Connection*** section, click on ***VPN/SSH/Gateway***.
1. Go to the ***Advanced*** tab.
1. In the ***Advanced Settings*** section, check the ***Go Offline on connection*** and ***Go online on disconnect after X sec*** options. In this last option, specify the number of seconds, then click ***OK***.
![!!KB2066](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2066.png)

Situation 2: The VPN is slow to connect.

Follow the steps below to change the time {{ en.RDM }} waits for the VPN to open.

1. Right-click the folder entry and open its ***Properties***.
1. From the left menu, under the ***Connection*** section, click on ***VPN/SSH/Gateway***.
1. Go to the ***Advanced*** tab.
1. In the ***After Execute Wait*** section, enter the time in seconds, then click ***OK***.
{% snippet icon.badgeInfo %}
The ***-1*** sec value is the default time (5 seconds). You can change the default time for all VPN entries in ***File – Settings – Types – VPN – VPN default pause***.
{% endsnippet %}

![!!KB2067](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2067.png)
