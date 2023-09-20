---
  title: Providers
  order: 20
---
The usage of Providers is required to scan the Active Directory structure, your local network for SSH discovering, SQL accounts, Windows local accounts or Azure AD users and groups.  
![Providers dashboard](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8140.png) 

On the creation of a Provider, eight choices are available. Five Managed Provider types: [Domain User](/server/privileged-access-management/providers/domain-provider/), [SSH Local User](/server/privileged-access-management/providers/local-ssh-provider/), [SQL User](/server/privileged-access-management/providers/sql-server-provider/), [Windows Users](/server/privileged-access-management/providers/windows-users-provider/). A nd [Azure AD User](/server/privileged-access-management/providers/azure-ad-user-provider/) and three Unmanaged Provider types: MySQL User, Cisco User, Oracle User. Multiple Providers can be created and can reach different domains as long as the {{ en.DVLS }} instance can communicate with the domain controller.  
![Managed Provider Type dialog](https://webdevolutions.azureedge.net/docs/en/server/ServerUs6021.png)  
![Unmanaged Provider Type dialog](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8091.png) 

