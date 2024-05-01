---
eleventyComputed:
  title: Active Directory dashboard entry
  description: The Active Directory Dashboard entry provides a centralized and efficient way for system administrators and IT professionals to manage and interact with Active Directory (AD) services directly within {{ en.RDM }}.
---

The ***Active Directory Dashboard*** entry provides a centralized and efficient way for system administrators and IT professionals to manage and interact with Active Directory (AD) services directly within {{ en.RDM }}.

It is possible to modify the Active Directory groups and add a user to it by using the ***AD dashboard*** (console). To do this, you must first restrict access to the folder that contains the administrative tools.  

{% snippet icon.badgeInfo %}
The steps in the video are the same as those described above.
{% endsnippet %}

 {% youtube 'FtSlp_TVAxE?si=Smo9UcN83hrjkXQr&start=1099' %}

1. Create or select a folder.
1. Go to ***Folder properties*** – ***Security*** – ***Permissions*** – ***Set permissions to Never*** (which means that nobody except the admins can access the folder). ***Grant Access*** can always be used for more granularity.
1. Click ***OK*** to save.

## Create the Active Directory Dashboard entry

1. Select the created folder and click ***New Entry***.
1. Select ***Active Directory Dashboard***.
1. Enter the information.
1. Go to ***Logs***.
1. Choose ***Custom*** in the ***Open logs*** drop-down menu. 
1. Check ***Prompt for comment on open***.
1. Select ***Open comment is required*** and ***ticket number is required***.

{% snippet icon.badgeInfo %}
By enabling the [***Logs***](/rdm/commands/window/panels/logs) functionality, users will have to comment and create a ticket number to explain why they are performing an action on the entry. This type of behavior can be applied to almost every entry in {{ en.RDM }}.
{% endsnippet %}

6. Click ***Add*** to save.
1. Open your session.
1. The ***open session comment window*** open.
1. Enter the ***Ticket number*** and the ***Comment***. 
1. Click ***OK***.

### Add a user to an AD group

1. Open your session.
1. Navigate to the user group location. 
1. Click ***Properties***.
1. Navigate to the ***Members*** tab.
1. Click ***Add***. 
1. Select the user and click ***OK*** to save.
1. The user has been successfully added. 

### Active Directory dashboard entry settings

Here is a list of the settings available in the ***Active Directory dashboard entry*** interface.

![Active Directory dashboard entry interface](https://cdnweb.devolutions.net/docs/RDMW6024_2024_1.png)

| Settings        | Description                                                         |
|-----------------|---------------------------------------------------------------------|
| New User        | Create a ***new user*** in Active Directory.                        |
| New Group       | Create a ***new group*** in Active Directory                        |
| Enable          | Reactivate an object, making it active.                             |
| Disable         | Disable an object without deleting it.                              |
| Unlock          | Release a user account that has been locked.                        |
| Reset Password  | Assign a ***new password*** to a user account.                      |
| Delete          | Permanently ***delete*** an object from Active Directory.           |
| Properties      | View or modify the attributes and settings of an object.            |
| BitLocker       | Retrieve the recovery password for a ***BitLocker-encrypted key***. |
| Search          | Locate any object within the domain, such as users, groups, or computers. |

