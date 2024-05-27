---
eleventyComputed:
  title: Users
  description: In the Users section, you can manage users and user settings.
---
In the ***Users*** section, you can manage users and user settings.

{% snippet, "badgeHelp" %}
Learn how to [add users](/hub/web-interface/administration/management/users/create-invite-users/) or [add an administrator](/hub/web-interface/administration/management/users/administrator-invite/).
{% endsnippet %}

![User settings](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2270.png)

## Set a user as owner

![Set as owner](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2273.png)

If you click on the ***Set as owner*** icon, you will be asked if you really want to change ownership from the current owner to this user. Click ***Yes*** to confirm.

![Set as owner confirmation message](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2271.png)

The owner has a crown icon next to their name and cannot be deleted.

![Owner icon](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2272.png)

{% snippet, "shieldInfo" %}
For security reasons, only current administrators can be set as owners.
{% endsnippet %}

## Edit a user

![Edit](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2274.png)

When editing a user, you can add a short description of the user, their roles and responsibilities, etc. You can also change some of what they are able to do within the hub.

In the ***User groups*** tab, you can assign them to one or more user groups with defined permissions and access.

![Edit settings](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2277.png)

| OPTION                           | DESCRIPTION                                                                                                                                                                                                                       |
|----------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Is enabled                       | Enables the user in the hub.                                                                                                                                                                                                     |
| Enable the {{ en.WBEX }}               | Allows the user to use the hub with our {{ en.WBEX }}.                                                                                                                                                             |
| Enable the {{ en.WAPPS }}               | Allows the user to use the hub with our {{ en.WAPPS }} {{ en.CTOOL }}.                                                                                                                                                                |
| Allow offline in {{ en.RDM }}     | Allows the user to use the hub as a data source in offline mode in {{ en.RDM }}.                                                                                                                                                  |
| Is administrator                  | Sets the user as an administrator of the hub. This option cannot be changed if the user is the owner of the hub (as seen in the image above).                                                                                   |
| [Allow send messages](/hub/web-interface/secure-messages/) | Select if the user is allowed to send messages with entries, without entries, or is not allowed to send messages.                                                                                                            |
| User interface profile                     | Select the user interface profile between ***IT professional***, ***Business user***, or the ***Default***. This cannot only be changed when editing the user, not when creating them.                                           |

## Delete a user

![Delete](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2275.png)

If you click on the ***Delete*** icon, you will be asked if you really want to delete this user from this hub. Click ***Delete*** to confirm.

![Delete confirmation](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2278.png)

{% snippet, "shieldInfo" %}
For security reasons, it is not possible to delete yourself nor the owner of the hub.
{% endsnippet %}

## Re-invite a user

![Re-invite user](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2276.png)

As soon as you click on this icon, the user is sent a new invitation email. They then have to open the hub via this invitation.

## Set an expiration date for a user

You can determine in advance when a user account should no longer be used. This is particularly useful for external users such as subcontractors.
 
1. Select the ***user***.
1. Choose an ***expiration date***. 

{% snippet, "badgeInfo" %}
A warning message is displayed to the user if the account expires in less than 24 hours.
{% endsnippet %}

3. Click ***Update*** to save. 

![Expiration date](https://cdnweb.devolutions.net/docs/HUBB6001_2024_1.png)

