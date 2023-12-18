---
eleventyComputed:
  title: Usage profiles
  description: Usage profiles allow users to have a tailored experience in {{ en.RDMMAC }} and other Devolutions products based on their tasks and roles.
---
***Usage profiles*** allow users to have a tailored experience in {{ en.RDMMAC }} and other Devolutions products based on their tasks and roles. There are two different profiles:  

* ***IT professional***: This profile displays all entry types and options provided the user has the necessary permissions to access them. This profile offers all of what our solutions have to offer, advanced options, and access to all entries and information.  
* ***Business user***: This profile is specifically designed for users who do not require access to view remote connection entries, administrative options, or advanced properties. Our interfaces have been streamlined to minimize options that are primarily intended for IT Professionals, allowing business users to focus on their daily tasks without unnecessary complexities.  

The profile is first selected during the {{ en.RDM }} Onboarding process. 

![User Interface Profile selection in Onboarding](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac2076.png) 

If none is chosen or if the user decides to choose one later, they will be assigned the ***Default*** profile, which can be changed in ***File – Preferences – User Interface – User Interface – Usage profile*** or in the web interface.  

![File – Preferences – User Interface – User Interface – Usage profile](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac2077.png) 

Users can individually change this setting in the [***Account***](/rdm/mac/user-interface/navigation-pane/account/) tab of the ***{{ en.NPANE }}***.

![Account – User Interface Profile](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac2078.png) 

## Detailed overview

Below you can find tables detailing the differences between the ***Business user*** and ***IT professional*** usage profiles.

### New entries

![New entries](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac2079.png) 

This table shows the entry types that can be created depending on your usage profile.  

{% snippet icon.badgeInfo %} 
Note that this only applies to the creation of new entries and does not affect existing entries.
{% endsnippet %}  

| ENTRY TYPES            | BUSINESS USER | IT PROFESSIONAL |
|------------------------|:---------------:|:-----------------:|
| Session                |               | {{ icon.badgeNotice | safe }}                 |
| Remote Management      |               | {{ icon.badgeNotice | safe }}                 |
| Credential Management  |               | {{ icon.badgeNotice | safe }}                 |
| Information            | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |
| Folder                 | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |
| Contact                | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |
| Document               |               | {{ icon.badgeNotice | safe }}                 |
| VPN/Tunnel/Gateway     |               | {{ icon.badgeNotice | safe }}                 |
| IT Asset Management    |               | {{ icon.badgeNotice | safe }}                 |
| Macro/Script/Tool      |               | {{ icon.badgeNotice | safe }}                 |
| Synchronizer           |               | {{ icon.badgeNotice | safe }}                 |
| Miscellaneous          |               | {{ icon.badgeNotice | safe }}                 |
| Template               | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |

### {{ en.VLT_MAJ }} Dashboard widgets

![{{ en.VLT_MAJ }} Dashboard widgets](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac2080.png) 

This table shows the different widgets that can be displayed in your ***{{ en.VLT_MAJ }} dashboard*** depending on your usage profile.  

| WIDGETS                    | BUSINESS USER | IT PROFESSIONAL |
|----------------------------|:---------------:|:-----------------:|
| Broken entries             |               | {{ icon.badgeNotice | safe }} |
| Certificates               |               | {{ icon.badgeNotice | safe }} |
| Checked out                | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |
| Entries                    | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |
| Expired entries            | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |
| Expiring entries           | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |
| Overdue tasks              | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |
| Pending access requests    | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |
| Pending {{ en.VLT }} access requests | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |
| Upcoming tasks             | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |
| {{ en.VLT_MAJ }}s          |               | {{ icon.badgeNotice | safe }} |
| Password ages              |               | {{ icon.badgeNotice | safe }} |
| Types                      | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |

### Ribbon sections

![Ribbon sections](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac2081.png)

This table shows the different sections that are available in your ***Ribbon*** depending on your usage profile.  

| RIBBON SECTIONS | BUSINESS USER | IT PROFESSIONAL |
|-----------------|:---------------:|:-----------------:|
| Home            | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |
| Edit            | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |
| View            | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |
| Administration  |               | {{ icon.badgeNotice | safe }} |
| Tools           |               | {{ icon.badgeNotice | safe }} |
| Window          | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |
| Help            | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |

### Entry properties

![Entry properties](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac2082.png)

The sections that are available in ***entry properties*** are different depending on your usage profile. Business users see the simplified view of entry properties without the option to toggle to all properties, while IT professionals see all properties by default but have the option to toggle between this view and the simplified view.

{% snippet icon.badgeInfo %} 
The availability of entry property sections also depends on the type of entry as usual.
{% endsnippet %}  

| ENTRY PROPERTIES                     | BUSINESS USER | IT PROFESSIONAL |
|--------------------------------------|:---------------:|:-----------------:|
| General                              | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |
| Description                          | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |
| User Interface                       | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |
| Custom Fields                        |               | {{ icon.badgeNotice | safe }} |
| Entry Information                    | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |
| Settings                             | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |
| VPN/Tunnel/Gateway                   | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |
| Events                               |               | {{ icon.badgeNotice | safe }} |
| One Time Password                    |               | {{ icon.badgeNotice | safe }} |
| Permissions / Inherited Permissions  |               | {{ icon.badgeNotice | safe }} |
| Password Management                  |               | {{ icon.badgeNotice | safe }} |
| Security Settings                    |               | {{ icon.badgeNotice | safe }} |
| Session Recording                    |               | {{ icon.badgeNotice | safe }} |
| Asset                                |               | {{ icon.badgeNotice | safe }} |
| Logs                                 |               | {{ icon.badgeNotice | safe }} |
| Documentation                        |               | {{ icon.badgeNotice | safe }} |
| Home Page                            |               | {{ icon.badgeNotice | safe }} |
| IT Asset Management                  |               | {{ icon.badgeNotice | safe }} |
| Remote Management                    |               | {{ icon.badgeNotice | safe }} |
| Variables                            | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |
| Tools                                |               | {{ icon.badgeNotice | safe }} |
| Is Online (Ping/Port scan)           |               | {{ icon.badgeNotice | safe }} |
| Wake on LAN                          |               | {{ icon.badgeNotice | safe }} |
| Advanced                             |               | {{ icon.badgeNotice | safe }} |

### Remote tools

Remote tools are unavailable with the ***Business user*** profile. This means that users will not see tools and tool sections in the ***Ribbon***, ***Dashboard***, entry properties, etc.
