---
_schema: default
eleventyComputed:
  title: Identity providers
  description: >-
    Identity providers are the external identity management services that a {{ en.DVPAM }} provider manages.
---


An ***identity provider* is an** external service that a {{ en.DVPAM }} ***provider*** manages.

***Identity providers*** are always external to {{ en.DVPAM }} and store ***accounts*** that {{ en.DVPAM }} manages with ***actions***. Think of an identity provider as [Microsoft Active Directory](https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/understand-default-user-accounts), [MySQL databases,](https://dev.mysql.com/doc/refman/8.4/en/user-names.html) [Windows](https://support.microsoft.com/en-us/windows/manage-user-accounts-in-windows-104dc19f-6430-4b49-6a2b-e4dbd1dcdf32) and [Linux operating systems](https://www.redhat.com/sysadmin/linux-user-group-management). The *identity provider* is the the identity management service that facilitates [authentication, authorization and accounting (AAA)](https://en.wikipedia.org/wiki/Authentication,_authorization,_and_accounting) of identities.


### Related topics
* [Providers ({{ en.DVLS }})](/pam/server/providers/)
* [Providers ({{ en.DHUBB }})](/pam/hub/providers/)

### See also
* [Create an Azure AD PAM provider ({{ en.DHUBB }})](/hub/kb/hub-business/how-to-articles/create-azure-ad-pam-provider/)
* [Create an Azure AD PAM provider ({{ en.DVLS }})](/hub/kb/hub-business/how-to-articles/create-azure-ad-pam-provider/)
* [Create Windows users provider ({{ en.DVLS }})](/server/kb/how-to-articles/create-windows-users-provider/)
* [Glossary of Common Privileged Access Management (PAM) Terms](https://blog.devolutions.net/2021/01/glossary-of-common-privileged-access-management-pam-terms/)
* [Need Cybersecurity Insurance? Then You Probably Need PAM, Too](https://blog.devolutions.net/2023/10/need-cybersecurity-insurance-then-you-probably-need-pam-too/)
