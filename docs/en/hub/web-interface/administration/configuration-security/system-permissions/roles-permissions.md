---
eleventyComputed:
  title: Roles and permissions
  description: Each role in {{ en.DHUB }} has its own set of permissions.
---
Each ***Role*** in {{ en.DHUB }} has its own set of ***Permissions***.

## Permissions

| PERMISSION                  | RESTRICTED | READERS | PRIVILEGED READERS | OPERATORS | PRIVILEGED OPERATORS | CONTRIBUTORS | VAULT OWNERS |
|-----------------------------|:------------:|:---------:|:---------------------:|:-----------:|:----------------------:|:--------------:|:--------------:|
| View {{ en.VLT }}           |   ![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png)   | ![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) | ![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) | ![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) | ![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) | ![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) | ![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) |
| View entries                |            | ![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) | ![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) | ![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) | ![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) | ![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) | ![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) |
| Manage {{ en.VLT }}         |            |         |                     |           |                      |              | ![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) |
| Add entries                 |            |         |                     |           |                      | ![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) | ![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) |
| Edit entries                |            |         |                     |           |                      | ![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) | ![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) |
| Delete entries              |            |         |                     |           |                      | ![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) | ![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) |
| Connect (execute)           |            |         |                     | ![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) | ![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) | ![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) | ![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) |
| View password               |            |         |                     |           | ![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) | ![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) | ![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) |
| View sensitive              |            |         | ![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) | ![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) | ![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) | ![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) | ![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) |
| View password history       |            |         |                     |           |                      | ![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) | ![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) |
| View sensitive history      |            |         |                     |           |                      | ![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) | ![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) |
| Manage attachments          |            |         |                     |           |                      | ![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) | ![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) |
| Manage documentation        |            |         |                     |           |

## Sensitive information permissions 

In {{ en.DHUB }}, all sensitive information is hidden by default. Some can be viewed by anyone that has access to the entry by clicking on the eye icon, and others require ***View sensitive*** or ***View password*** permissions to be viewed.  

The ***View sensitive*** permission is granted to ***Reader***, ***Operator***, ***Contributor***, and ***Manager*** roles, while the ***Contributor*** or ***Manager*** roles are required for the ***View password*** permission. Therefore, even if passwords are indeed sensitive information, you will not be able to view them with the ***View sensitive*** permission alone.  

Sensitive information requiring the ***View sensitive*** permission will have this icon next to it, while information requiring the ***View password*** permission will have this key icon. You can see both examples in the image below. 

![Sensible information icons](https://webdevolutions.azureedge.net/docs/en/hub/Hub2267.png)
