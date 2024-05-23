---
eleventyComputed:
  title: Roles and permissions
  description: Each role in {{ en.DHUB }} has its own set of permissions.
---

Each ***Role*** in {{ en.DHUB }} has its own set of ***Permissions***.

## Permissions

| PERMISSION             |       RESTRICTED       |        READERS         |   PRIVILEGED READERS   |       OPERATORS        |  PRIVILEGED OPERATORS  |      CONTRIBUTORS      |  {{ en.VLT }} OWNERS   |
|------------------------|:----------------------:|:----------------------:|:----------------------:|:----------------------:|:----------------------:|:----------------------:|:----------------------:|
| View {{ en.VLT }}      | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| View entries           |                        | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| Manage {{ en.VLT }}    |                        |                        |                        |                        |                        |                        | {{ icon.badgeNotice }} |
| Add entries            |                        |                        |                        |                        |                        | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| Edit entries           |                        |                        |                        |                        |                        | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| Delete entries         |                        |                        |                        |                        |                        | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| Connect (execute)      |                        |                        |                        | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| View password          |                        |                        |                        |                        | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| View sensitive         |                        |                        | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| View password history  |                        |                        |                        |                        |                        | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| View sensitive history |                        |                        |                        |                        |                        | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| Manage attachments     |                        |                        |                        |                        |                        | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| Manage documentation   |                        |                        |                        |                        |                        |                        |                        |

## Sensitive information permissions

In {{ en.DHUB }}, all sensitive information is hidden by default. Some can be viewed by anyone that has access to the
entry by clicking on the eye icon, and others require ***View sensitive*** or ***View password*** permissions to be
viewed. The value of a hidden custom field is also encrypted and protected with the ***View sensitive*** permission.

The ***View sensitive*** permission is granted to ***Reader***, ***Operator***, ***Contributor***, and ***Manager***
roles, while the ***Contributor*** or ***Manager*** roles are required for the ***View password*** permission.
Therefore, even if passwords are indeed sensitive information, you will not be able to view them with the
***View sensitive*** permission alone.

You can see the difference between the ***View sensitive*** permission and ***View password*** permission icons in the
image below.

![Sensible information icons](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2267.png)