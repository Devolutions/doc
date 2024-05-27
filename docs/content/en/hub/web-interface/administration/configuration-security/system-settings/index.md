---
eleventyComputed:
  title: System settings
---
The ***System Settings*** section of the ***Administration*** panel is used to manage the global settings of all the users and user groups of {{ en.DHUBB }}.  

You can impose a two-step verification on users at login, send temporary passwords via email, enable SSO, and much more.  

{% snippet, "badgeHelp" %} 
To learn more about SSO, please refer to [Get started with SSO in {{ en.DHUBB }}](/hub/getting-started/get-started-sso-hub-business/). 
{% endsnippet %}

## General

In the ***General*** section of the ***System Settings***, manage settings related to temporary passwords, networking, support tickets, opened sessions, and user interface profiles.
![Administration – System Settings – General](https://cdnweb.devolutions.net/docs/HUBB6009_2024_1.png)

| OPTION | DESCRIPTION |
|--------|-------------|
| Send temporary password by email  | Select how the temporary password is sent to your users when creating their {{ en.DA }} from an invite in {{ en.DHUBB }}:<ul><li>***Ask***: When creating a new {{ en.DA }}, a prompt will appear to send the user's temporary password by email or not.</li><li>***Send***: When creating a new {{ en.DA }}, users will receive their temporary passwords by email.</li><li>***Not Send***: When creating a new {{ en.DA }}, users will not receive their temporary password by email. At that time, a prompt will appear with their temporary password. You then can decide how to provide this critical information to your users.</li></ul> |
| Block Tor traffic | Blocks Internet traffic coming from the Tor network. |
| Allow users to submit a support ticket | Enables the option for users to submit a ticket to the support team. |
| Automatic "Mark as Closed" after X days | Marks opened sessions as closed after a set amount of days. |
| User interface profiles | Select the default user interface profile users will be assigned between ***IT professional***, ***Business user***, or the ***Default***. |

## {{ en.VLT_MAJ  }}

In the {{ en.VLT  }} section of the ***System Settings***, manage settings related to user {{ en.VTL }} and visibility. 

![Administration – System Settings – {{ en.VLT_MAJ  }}](https://cdnweb.devolutions.net/docs/HUBB6011_2024_1.png)

| OPTION | DESCRIPTION |
|--------|-------------|
| Allow {{ en.UVLT_MAJ   }}         | Allow {{ en.UVLT_MAJ }} for users.                           |
| Public -  Allow access request    | Allow users to request access to a {{ en.VLT  }}.     
| Public -  Invitation only         | The {{ en.VLT  }} is by invitation only.

## Advanced

In the ***Advanced*** section of the ***System Settings***, manage settings related to Cache, offline mode, {{ en.WBEX }} autofill, and external sharing. 

![Administration – System Settings – Advanced](https://cdnweb.devolutions.net/docs/HUBB6010_2024_1.png)

| OPTION | DESCRIPTION |
|--------|-------------|
| Cache/Offline                     | Set the length of time offline data is stored before it expires.                            |
| Force application password on RDM            |  Require a password for accessing {{ en.RDM }}.                                                        |
| Allow {{ en.WBEX }} autofill                 | Allow {{ en.WBEX }} to autofill credentials.                                                        |
| Allow user to send messages and passwords securely via Devolutions Send   | Users can send encrypted messages and passwords using [Devolutions Send](/hub/send/).