---
eleventyComputed:
  title: Providers
  order: 20
---
Providers are required to scan the Active Directory structure, your local network for SSH discovering, SQL accounts, Windows local accounts, or Azure AD users and groups.  
![Providers dashboard](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8140.png)  

When creating a provider, eight choices are available:  
* Five ***Managed*** provider types:  
  * [Domain user](/server/privileged-access-management/providers/domain-provider/)  
  * [Local SSH user](/server/privileged-access-management/providers/local-ssh-provider/)  
  * [SQL user](/server/privileged-access-management/providers/sql-server-provider/)  
  * [Windows user](/server/privileged-access-management/providers/windows-users-provider/)  
  * [Azure AD user](/server/privileged-access-management/providers/azure-ad-user-provider/)  

![Managed provider types](https://webdevolutions.azureedge.net/docs/en/server/ServerUs6021.png)  

* Three ***Unmanaged*** provider types:  
  * MySQL user  
  * Cisco user  
  * Oracle user  
 
![Unmanaged provider types](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8091.png)  

Multiple providers can be created and can reach different domains as long as the {{ en.DVLS }} instance can communicate with the domain controller.  
