---
eleventyComputed:
  title: User interface profiles
  description: User interface profiles allow users to have a tailored experience in {{ en.RDM }} and other Devolutions products based on their tasks and roles.
---

***User interface profiles*** allow users to have a tailored experience in {{ en.RDM }} and other Devolutions products
based on their tasks and roles. There are two different profiles:

* ***IT professional***: This profile displays all entry types and options provided the user has the necessary
  permissions to access them. This profile offers all of what our solutions have to offer, advanced options, and access
  to all entries and information.
* ***Business user***: This profile is specifically designed for users who do not require access to view remote
  connection entries, administrative options, or advanced properties. Our interfaces have been streamlined to minimize
  options that are primarily intended for IT professionals, allowing business users to focus on their daily tasks
  without unnecessary complexities.

The profile is first selected during the {{ en.RDM }} Onboarding process.

![User interface profile selection in Onboarding](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2167.png)

If none is chosen or if the user decides to choose one later, they will be assigned the ***Default*** profile, which can
be changed in ***File – Settings – User Interface – User interface profile*** or in the web interface.

![File – Settings – User Interface – User interface profile](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2168.png)

Users can individually change this setting in the [***Account***](/rdm/windows/user-interface/navigation-pane/account/)
tab of the ***{{ en.NPANE }}***.

![Account – User interface profile](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2166.png)

## Detailed overview

Below you can find tables detailing the differences between the ***Business user*** and ***IT professional*** user
interface profiles.

### New entries

![New entries](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2169.png)

This table shows the entry types that can be created depending on your user interface profile.

{% snippet, "badgeInfo" %}
Note that this only applies to the creation of new entries and does not affect existing entries.
{% endsnippet %}

| ENTRY TYPES           |     BUSINESS USER      |    IT PROFESSIONAL     |
|-----------------------|:----------------------:|:----------------------:|
| Session               |                        | {{ icon.badgeNotice }} |
| Remote Management     |                        | {{ icon.badgeNotice }} |
| Credential Management |                        | {{ icon.badgeNotice }} |
| Information           | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| Folder                | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| Contact               | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| Document              |                        | {{ icon.badgeNotice }} |
| VPN/SSH/Gateway       |                        | {{ icon.badgeNotice }} |
| IT Asset Management   |                        | {{ icon.badgeNotice }} |
| Macro/Script/Tool     |                        | {{ icon.badgeNotice }} |
| Synchronizer          |                        | {{ icon.badgeNotice }} |
| Miscellaneous         |                        | {{ icon.badgeNotice }} |
| Template              | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |

### {{ en.VLT_MAJ }} Dashboard widgets

![{{ en.VLT_MAJ }} Dashboard widgets](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2170.png)

This table shows the different widgets that can be displayed in your ***{{ en.VLT_MAJ }} Dashboard*** depending on your
user interface profile.

| WIDGETS                              |     BUSINESS USER      |    IT PROFESSIONAL     |
|--------------------------------------|:----------------------:|:----------------------:|
| Broken entries                       |                        | {{ icon.badgeNotice }} |
| Certificates                         |                        | {{ icon.badgeNotice }} |
| Checked out                          | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| Entries                              | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| Expired entries                      | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| Expiring entries                     | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| Overdue tasks                        | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| Pending access requests              | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| Pending {{ en.VLT }} access requests | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| Upcoming tasks                       | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| {{ en.VLT_MAJ }}s                    |                        | {{ icon.badgeNotice }} |
| Password ages                        |                        | {{ icon.badgeNotice }} |
| Types                                | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |

### Ribbon sections

![Ribbon sections](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2171.png)

This table shows the different sections that are available in your ***Ribbon*** depending on your user interface
profile.

| RIBBON SECTIONS |     BUSINESS USER      |    IT PROFESSIONAL     |
|-----------------|:----------------------:|:----------------------:|
| Home            | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| Edit            | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| View            | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| Administration  |                        | {{ icon.badgeNotice }} |
| Tools           |                        | {{ icon.badgeNotice }} |
| Window          | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| Help            | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |

### Entry properties

![Entry properties](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2172.png)

The sections that are available in ***entry properties*** are different depending on your user interface profile.
Business users see the simplified view of entry properties without the option to toggle to all properties, while IT
professionals see all properties by default but have the option to toggle between this view and the simplified view.

{% snippet, "badgeInfo" %}
The availability of entry property sections also depends on the type of entry as usual.
{% endsnippet %}

| ENTRY PROPERTIES                    |     BUSINESS USER      |    IT PROFESSIONAL     |
|-------------------------------------|:----------------------:|:----------------------:|
| General                             | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| Description                         | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| User Interface                      | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| Custom Fields                       |                        | {{ icon.badgeNotice }} |
| Entry Information                   | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| Settings                            | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| VPN/SSH/Gateway                     | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| Events                              |                        | {{ icon.badgeNotice }} |
| One Time Password                   |                        | {{ icon.badgeNotice }} |
| Permissions / Inherited Permissions |                        | {{ icon.badgeNotice }} |
| Password Management                 |                        | {{ icon.badgeNotice }} |
| Security Settings                   |                        | {{ icon.badgeNotice }} |
| Session Recording                   |                        | {{ icon.badgeNotice }} |
| Asset                               |                        | {{ icon.badgeNotice }} |
| Logs                                |                        | {{ icon.badgeNotice }} |
| Documentation                       |                        | {{ icon.badgeNotice }} |
| Home Page                           |                        | {{ icon.badgeNotice }} |
| IT Asset Management                 |                        | {{ icon.badgeNotice }} |
| Remote Management                   |                        | {{ icon.badgeNotice }} |
| Variables                           | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| Tools                               |                        | {{ icon.badgeNotice }} |
| Is Online (Ping/Port scan)          |                        | {{ icon.badgeNotice }} |
| Wake on LAN                         |                        | {{ icon.badgeNotice }} |
| Advanced                            |                        | {{ icon.badgeNotice }} |

### Remote tools

Remote tools are unavailable with the ***Business user*** profile. This means that users will not see tools and tool
sections in the ***Ribbon***, ***Dashboard***, entry properties, etc.
