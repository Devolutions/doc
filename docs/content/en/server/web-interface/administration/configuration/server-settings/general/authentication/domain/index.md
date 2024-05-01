---
eleventyComputed:
  title: Domain
  description: The domain is used to authenticate the user. This is the most secure, flexible and easiest to manage. No need to sync users between the domain and {{ en.DVLS }}.
  order: 10
---
The domain is used to authenticate the user. This is the most secure, flexible and easiest to manage. No need to sync users between the domain and {{ en.DVLS }}. With the Automatic User Creation On First Login option enabled, on first use of the {{ en.DVLS }} data source, the user will be created and be given access rights according to their role in the organization as defined on the domain. You simply need to grant appropriate permissions to your user groups in {{ en.DVLS }}. Upon authentication we will validate the AD groups to which the user belongs and for any that have a corresponding user group we will grant the permissions to the user.

Go to ***Administration – Server settings – Authentication – Domain*** in the web interface of {{ en.DVLS }}. 
![Authentication - Configure Domain](https://cdnweb.devolutions.net/docs/DVLS6009_2024_1.png)

## Settings

### Domain Authentication
| Option                     | Description                              |
|----------------------------|------------------------------------------|
| Domain                     | Specify the remote computer domain name. |
| Display name               | Specify the domain name that will be displayed in the application usage like informational messages.<br>Specify the Active Directory Organizational Unit (OU) or Group to restrict the search in a specific area in the Active Directory structure. The format must be the distinguished name (CN=Users,DC=windjammer,DC=loc). |
| Administration credentials | Add the credentials of a domain or service account to access the Active Directory forest and obtain user account information through LDAP queries. This account needs to be able to retrieve user account information and group memberships. It may requires higher privileges than being part of the Domain Users built-in Active Directory group. In most case, it should be sufficient. |

### LDAPS
| Option         | Description                                                                      |
|----------------|----------------------------------------------------------------------------------|
| Enable LDAPS   | Enable the LDAP over SSL communication.                                          |
| Port           | Default: LDAPS default communication port.<br>Custom: Set a specific port value. |

### Automatic User Creation
| Option                             | Description                                                                                   |
|------------------------------------|-----------------------------------------------------------------------------------------------|
| Auto create users in {{ en.DVLS }} | Automatically create the domain user account in the {{ en.DVLS }} on the first login attempt. |
| User type                          | Choose between Read only user or User type account.                                           |
| Default {{ en.VLT }}               | Will give access to that {{ en.VLT }} to the user.                                            |
| Only from this AD group            | Will create automatically the user only if he is a member of this AD group.                   |
| Username Format                    | Select the username format that will be created in the database.<ul><li>UPN: The user will be created using the UPN format ex: bill@windjammer.loc.</li><li>NetBios: The user will be created using the NetBios format ex: WINDJAMMER\bill.</li><li>Username: The user will be created using the SAM account name.</li></ul> |