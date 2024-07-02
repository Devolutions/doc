---
eleventyComputed:
  title: "{{ en.VLT_MAJ }} content types"
  description: "{{ en.VLT_MAJ }} content types limit the entry types that can be created in a specific shared {{ en.VLT }}."
---
{{ en.VLT_MAJ }} content types limit the entry types that can be **created** in a specific shared {{ en.VLT }}. The type can be chosen when [creating or editing a {{ en.VLT }}](/server/web-interface/administration/security-management/vaults/). Existing entries are not affected by a {{ en.VLT }} type modification; they can still be used, modified, moved, imported/exported, etc.

There exists four {{ en.VLT }} content types:
* ***Default {{ en.VLT }}***: A standard {{ en.VLT }} where all entry types are available.
* ***Secrets {{ en.VLT }}***: Secrets entries, used in DevOps and CLI processes.
* ***Business {{ en.VLT }}***: Entries such as information, contact, assets, or documents. Helpful in business organization.
* ***Credentials {{ en.VLT }}***: Entries for all credential types, not only secrets-specific.

Here is the complete list of available entry types for each type of {{ en.VLT }}:

{% snippet, "badgeInfo" %}
Note that the availability of entry types can also be restricted by other factors such as your [user interface profile](/server/web-interface/customization/user-interface-profiles).
{% endsnippet %}

| Entry types           | Default {{ en.VLT }}   | Business {{ en.VLT }}                  | Credentials {{ en.VLT }} | Secrets {{ en.VLT }}    |
|-----------------------|:----------------------:|:--------------------------------------:|:------------------------:|:-----------------------:|
| Session               | {{ icon.badgeNotice }} | ***Website*** entry only               |                          |                         |
| Remote management     | {{ icon.badgeNotice }} |                                        |                          |                         |
| Credential management | {{ icon.badgeNotice }} | ***Username and password*** entry only | {{ icon.badgeNotice }}   | ***Secret*** entry only |
| Information           | {{ icon.badgeNotice }} | {{ icon.badgeNotice }}                 |                          |                         |
| Folder                | {{ icon.badgeNotice }} | {{ icon.badgeNotice }}                 | {{ icon.badgeNotice }}   | {{ icon.badgeNotice }}  |
| Contact               | {{ icon.badgeNotice }} | {{ icon.badgeNotice }}                 |                          |                         |
| Document              | {{ icon.badgeNotice }} | {{ icon.badgeNotice }}                 |                          |                         |
| VPN/tunnel/gateway    | {{ icon.badgeNotice }} |                                        |                          |                         |
| IT asset management   | {{ icon.badgeNotice }} |                                        |                          |                         |
| Macro/script/tool     | {{ icon.badgeNotice }} |                                        |                          |                         |
| Synchronizer          | {{ icon.badgeNotice }} |                                        |                          |                         |
| Miscellaneous         | {{ icon.badgeNotice }} |                                        |                          |                         |
| Template              | {{ icon.badgeNotice }} | {{ icon.badgeNotice }}                 | {{ icon.badgeNotice }}   | {{ icon.badgeNotice }}  |