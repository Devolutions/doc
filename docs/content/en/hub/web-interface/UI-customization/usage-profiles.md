---
eleventyComputed:
  title: User interface profiles
  description: User interface profiles allow users to have a tailored experience in {{ en.DHUB }} and other Devolutions products based on their tasks and roles.
---
***User interface profiles*** allow users to have a tailored experience in {{ en.DHUB }} and other Devolutions products based on their tasks and roles. There are two different profiles:

* ***IT professional***: This profile displays all entry types and options provided the user has the necessary permissions to access them. This profile offers all of what our solutions have to offer, advanced options, and access to all entries and information.
* ***Business user***: This profile is specifically designed for users who do not require access to view remote connection entries and administrative options. Our interfaces have been streamlined to minimize options that are primarily intended for IT Professionals, allowing business users to focus on their daily tasks without unnecessary complexities.

Users will be assigned the ***Default*** profile, which can be changed in ***Administration – System Settings – General – User Interface Profile***. For administrators, the default profile is ***IT professional***. For users, it is ***Business user***.

![Administration – System Settings – General – User Interface Profile](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2352.png)

Users can individually change it in the ***Settings*** section of their account.

![Account – Settings – User interface – User Interface Profile](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2353.png)

## Detailed overview

Below you can find tables detailing the differences between the ***Business user*** and ***IT professional*** profiles in {{ en.DHUB }}.

### New entries

![New entries](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2281.png)

This table shows the entry types that can be created depending on your user interface profile.

{% snippet icon.badgeInfo %}
Note that this only applies to the creation of new entries and does not affect existing entries.
{% endsnippet %}

| ENTRY TYPES           | BUSINESS USER                 | IT PROFESSIONAL               |
|-----------------------|:-----------------------------:|:-----------------------------:|
| Popular               | {{ icon.badgeNotice | safe }}<br>(without RDP entry) | {{ icon.badgeNotice | safe }} |
| Information           | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |
| Session               |                               | {{ icon.badgeNotice | safe }} |
| Credential Entry      |                               | {{ icon.badgeNotice | safe }} |
| Template              | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |

### {{ en.VLT_MAJ }} Dashboard widgets

![{{ en.VLT_MAJ }} Dashboard widgets](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2282.png)

This table shows the different widgets that can be displayed in your ***{{ en.VLT_MAJ }} dashboard*** depending on your user interface profile.

| WIDGETS                              | BUSINESS USER                 | IT PROFESSIONAL               |
|--------------------------------------|:-----------------------------:|:-----------------------------:|
| Broken entries                       |                               | {{ icon.badgeNotice | safe }} |
| Certificates                         |                               | {{ icon.badgeNotice | safe }} |
| Checked out                          | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |
| Entries                              | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |
| Expired entries                      | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |
| Expiring entries                     | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |
| Pending access requests              | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |
| Pending {{ en.VLT }} access requests | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |
| {{ en.VLT_MAJ }}s                    |                               | {{ icon.badgeNotice | safe }} |
| Password ages                        |                               | {{ icon.badgeNotice | safe }} |
| Types                                | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |
