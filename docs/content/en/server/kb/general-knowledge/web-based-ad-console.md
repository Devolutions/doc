---
eleventyComputed:
  title: Web based Active Directory dashboard
  description: The Active Directory dashboard can be launched directly from the {{ en.DVLS }} web interface.
---
 The Active Directory dashboard can be launched directly from the {{ en.DVLS }} web interface.

## Requirements

To use this feature, certain requirements must be met, namely:
* Windows 10 or 11.
* Windows Server 2016 and higher.
* Have a [{{ en.DGW }}](/dgw/hub/hub-business-configuration/) version 2023.1 or later.

 ## Entry configuration

Follow the steps below to properly configure your Active Directory console:

{% snippet icon.badgeInfo %}
The steps below assume that you already have an Active Directory dashboard entry. If you have not yet created it and want to learn how, see [Create entries manually](/server/web-interface/vault/entries/create-entries-manually/).
{% endsnippet %}

1. Go to the ***Properties*** of the entry.
1. Go to the ***VPN/tunnel/gateway*** section.
1. Select ***{{ en.GGW }}*** under ***Type***.
1. Click ***Always connect***. 
1. Click ***Update*** to save. 

### Open in Web Client

Once all the conditions are met, you can press the ***Open in Web Client (Preview)*** button to launch the connection from the web client.

### Interface

Here is a list of the settings available in the Active Directory dashboard entry web interface.

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