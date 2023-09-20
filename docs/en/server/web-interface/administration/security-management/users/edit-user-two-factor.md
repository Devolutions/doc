---
  title: Multi-factor
description: If you set multi-factor authentication (MFA) as Optional per user in the Server Settings, you then need to configure which MFA method to use. 
---
If you set multi-factor authentication (MFA) as [***Optional per user***](/server/web-interface/administration/configuration/server-settings/security/two-factor/) in the ***Server Settings***, you then need to configure which MFA method to use for each user. 

## Settings 
1. In ***Administration – Users***, edit the user for whom you want to configure the MFA.
1. In the ***Multi-factor*** section, select the MFA ***Type*** from the list.
![Multi-factor – Type](https://webdevolutions.azureedge.net/docs/en/server/ServerOp7003.png) 
1. You now have two choices. Either:
    * Check ***Configure later by user*** to let the user configure their MFA by themselves when they next connect to {{ en.DVLS }}.
    ![Configure later by user](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2067.png) 

    or

    * Follow the steps to configure the MFA for the user.
    ![Configuration Steps](https://webdevolutions.azureedge.net/docs/en/server/ServerOp7004.png) 
1. Click ***Update*** to save your changes for this user.
1. Repeat the steps for each user.
