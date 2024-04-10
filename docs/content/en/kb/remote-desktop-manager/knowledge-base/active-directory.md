---
eleventyComputed:
  title: Active Directory dashboard entry
  description: The Active Directory Dashboard entry provides a centralized and efficient way for system administrators and IT professionals to manage and interact with Active Directory (AD) services directly within {{ en.RDM }}.
---

The Active Directory Dashboard entry provides a centralized and efficient way for system administrators and IT professionals to manage and interact with Active Directory (AD) services directly within {{ en.RDM }}.


image

| Settings        | Description                                                         |
|-----------------|---------------------------------------------------------------------|
| New User        | Create a ***new user*** in Active Directory.                        |
| New Group       | Create a ***new group*** in Active Directory                        |
| Enable          | Reactivate an object, making it active.                              |
| Disable         | Disable an object without deleting it.                               |
| Unlock          | Release a user account that has been locked.                        |
| Reset Password  | Assign a ***new password*** to a user account.                      |
| Delete          | Permanently ***delete*** an object from Active Directory.            |
| Properties      | View or modify the attributes and settings of an object.            |
| BitLocker       | Retrieve the recovery password for a BitLocker-encrypted keys       |
| Search          | Locate any object within the domain, such as users, groups, or computers. |


## Active Directory Dashboard entry

{% youtube 'FtSlp_TVAxE?si=Smo9UcN83hrjkXQr&start=1099' %}.

It is possible to modify the Active Directory groups and add a user to an Active Directory group using the ***AD dashboard*** (console).

To do this, you must restrict access to the folder that contains the administrative tools.  

1. Go to ***Folder properties*** – ***Security*** – ***Permissions*** – ***Set permissions to Never*** (which means that nobody except the admins can access the folder). ***Grant Access*** can always be used for more granularity.

1. Click ***New entry*** and select ***Active Directory Dashboard***.
1. Enter the information.
1. Go to ***Logs***.
1. Check ***Prompt for comment on open***.
1. Select ***Open comment is required*** and ***ticket number is required***.
1. Click ***OK*** to save.
1. Open your session.
1. The open session comment window open.
1. Enter the ***Ticket #*** and the ***Comment***. 
1. Click ***OK***.

## Add user to AD group

1. Open your session.
1. Navigate to the user group location. 
1. Click ***Properties***.
1. Select the ***Members*** tab
1. Click ***Add***. 
1. Select the user and click ***OK*** to save.
1. The group has been successfully modified. 

User can access sessions with VPN without seeing any password or the restricted folder.

