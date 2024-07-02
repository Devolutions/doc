---
eleventyComputed:
  title: Active Directory dashboard entry
  description: The Active Directory dashboard entry provides a centralized and efficient way for system administrators and IT professionals to manage and interact with Active Directory (AD) services directly within {{ en.RDM }}.
---
The ***Active Directory dashboard*** entry provides a centralized and efficient way for system administrators and IT professionals to manage and interact with Active Directory (AD) services directly within {{ en.RDM }}.

It is possible to modify the Active Directory groups and add a user to them by using the ***AD dashboard***. You must first restrict access to the folder that contains the administrative tools.

{% snippet, "badgeInfo" %}
The steps in the video are the same as those described below.
{% endsnippet %}

{% youtube 'FtSlp_TVAxE?si=Smo9UcN83hrjkXQr&start=1099' %}

1. Create or select a folder in {{ en.RDM }}.
1. Right-click on the folder and go to ***Properties***
1. In ***Security*** – ***Permissions***, set ***Permission*** to ***Disallowed***, which means that nobody except the administrators can access the folder. The ***Grant access*** option can always be used for more granularity.
1. Click ***Add*** to save.

## Create the Active Directory dashboard entry

1. Select the created folder.
1. In the ribbon, go to ***Edit*** – ***New entry***.
1. Select ***Active Directory dashboard*** entry (***Remote management*** entry type).
1. In ***Common – General***, enter the general and Active directory information.
1. Go to ***View*** – ***Logs***.
1. In the ***Open logs*** drop-down menu, select ***Custom***.
1. Check ***Prompt for comment on open*** and enable ***Open comment is required*** and ***Ticket number is required*** under it.
   {% snippet, "badgeInfo" %}
   By enabling the [***Logs***](/rdm/commands/window/panels/logs) functionality, users will have to comment and create a ticket number to explain why they are performing an action on the entry. This type of behavior can be applied to almost every entry in {{ en.RDM }}.
   {% endsnippet %}
1. Click ***Add*** to save.
1. Open your session.
1. In the ***Open session comment*** window that opens, enter a ***Ticket #*** and a ***Comment***.
1. Click ***OK***.

### Add a user to an AD group

1. Open your session.
1. Navigate to the user group location.
1. Click ***Properties***.
1. Navigate to the ***Members*** tab.
1. Click ***Add***.
1. Select the user and click ***OK*** to save.

The user has been successfully added.

### Active Directory dashboard entry settings

Here is a list of the settings available in the ***Active Directory dashboard entry*** interface.

![Active Directory dashboard entry interface](https://cdnweb.devolutions.net/docs/RDMW6024_2024_1.png)

| Settings       | Description                                                               |
|----------------|---------------------------------------------------------------------------|
| New user       | Create a new user in Active Directory.                                    |
| New group      | Create a new group in Active Directory                                    |
| Enable         | Reactivate an object, making it active.                                   |
| Disable        | Disable an object without deleting it.                                    |
| Unlock         | Release a user account that has been locked.                              |
| Reset password | Assign a new password to a user account.                                  |
| Delete         | Permanently delete an object from Active Directory.                       |
| Properties     | View or modify the attributes and settings of an object.                  |
| BitLocker      | Retrieve the recovery password for a BitLocker-encrypted key.             |
| Search         | Locate any object within the domain, such as users, groups, or computers. |