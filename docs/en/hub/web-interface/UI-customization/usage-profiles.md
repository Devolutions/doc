---
eleventyComputed:
  title: Usage profiles
  description: Usage profiles allow users to have a tailored experience in {{ en.DHUB }} and other Devolutions products based on their tasks and roles.
---
***Usage profiles*** allow users to have a tailored experience in {{ en.DHUB }} and other Devolutions products based on their tasks and roles. There are two different profiles:  

* ***IT professional***: This profile displays all entry types and options provided the user has the necessary permissions to access them. This profile offers all of what our solutions have to offer, advanced options, and access to all entries and information.  
* ***Business user***: This profile is specifically designed for users who do not require access to view remote connection entries, administrative options, or advanced properties. Our interfaces have been streamlined to minimize options that are primarily intended for IT Professionals, allowing business users to focus on their daily tasks without unnecessary complexities.  

Users will be assigned the ***Default*** profile, which can be changed in ***Administration – System Settings – General – Usage profile***. For administrators, the default profile is ***IT professional***. For users, it is ***Business user***.

![Administration – System Settings – General – Usage profile](https://webdevolutions.azureedge.net/docs/en/hub/Hub2279.png) 

Users can individually change it in the Settings section of their account.

![Account – Settings – Usage profile](https://webdevolutions.azureedge.net/docs/en/hub/Hub2280.png) 

## Detailed overview

Below you can find tables detailing the differences between the ***Business user*** and ***IT professional*** usage profiles in {{ en.DHUB }}.

### New entries

![New entries](https://webdevolutions.azureedge.net/docs/en/hub/Hub2281.png) 

This table shows the entry types that can be created depending on your usage profile.  

{% snippet icon.badgeInfo %} 
Note that this only applies to the creation of new entries and does not affect existing entries.
{% endsnippet %}  

| ENTRY TYPES          | BUSINESS USER | IT PROFESSIONAL |
|----------------------|:---------------:|:------------------:|
| Session              |               | {{ icon.badgeNotice | safe }} |
| Credential Management|               | {{ icon.badgeNotice | safe }} |
| Information          | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |
| Folder               | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |
| Contact              | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |
| Document             |               | {{ icon.badgeNotice | safe }} |
| Template             | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |

### {{ en.VLT }} Dashboard widgets

![{{ en.VLT }} Dashboard widgets](https://webdevolutions.azureedge.net/docs/en/hub/Hub2282.png) 

This table shows the different widgets that can be displayed in your ***{{ en.VLT }} Dashboard*** depending on your usage profile.  

| WIDGETS                            | BUSINESS USER | IT PROFESSIONAL |
|------------------------------------|:---------------:|:------------------:|
| Broken entries                     |               | {{ icon.badgeNotice | safe }} |
| Certificates                       |               | {{ icon.badgeNotice | safe }} |
| Checked out                        | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |
| Entries                            | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |
| Expired entries                    | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |
| Expiring entries                   | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |
| Pending access requests            | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |
| Pending {{ en.VLT }} access requests| {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |
| {{ en.VLT }}s                       |               | {{ icon.badgeNotice | safe }} |
| Password ages                      |               | {{ icon.badgeNotice | safe }} |
| Types                              | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |
