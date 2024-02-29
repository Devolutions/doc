---
eleventyComputed:
  title: General
---
![Edit Users – General](https://cdnweb.devolutions.net/docs/en/server/ServerOp7005.png)

## Edit users
| Option                             | Description                                                           |
|------------------------------------|-----------------------------------------------------------------------|
| Authentication type                | Select the user's authentication type:<br><ul><li>***{{ en.DVLS }}***: create a user in {{ en.DVLS }} without creating an SQL login.</li><li>***Domain***: authenticate using the Active Directory user account.</li><li>***Office365/Azure AD***: authenticate using the Azure AD user account.</li></ul> |
| User (required)                    | User login name.                                                      |
| User type                          | Choose the user type:<br><ul><li>***Administrator***: grant full administrative rights to the user.</li><li>***Read only user***: grant only the ***View*** access to the user.</li><li>***Restricted user***: select which rights to grant to the user.</li><li>***User***: grant all basic rights to the user (***Add***, ***Edit***, ***Delete***).</li></ul> |
| User license type                  | Select the type of the license that the user has:<br><ul><li>***Default***: Connection Management.</li><li>***Connection Management***: for users who open remote connections.</li><li>***Password Management***: for users who only use {{ en.DVLS }} as a password manager.</li></ul> |
| Enabled                            | Check to activate the user.                                           |
| Must change password at next logon | Check to force the user to change the password next time they log on. |
| First name                         | Enter the user's first name.                                          |
| Last name                          | Enter the user's last name.                                           |
| Email (required)                   | Enter the user's email address.                                       |
| Language                           | Language of the user's web interface.                                 |
