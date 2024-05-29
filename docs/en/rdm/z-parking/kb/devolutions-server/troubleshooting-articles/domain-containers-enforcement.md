---
eleventyComputed:
  title: Domain containers enforcement
  description: Domain containers are enforced in {{ en.DVLS }}. In earlier versions, as long as the administration credentials had rights to other organizational units (OUs) of the domain, users and user groups could still be used even if they were outside those containers. That is not the case anymore.
---
Domain containers are enforced in {{ en.DVLS }}. In earlier versions, as long as the administration credentials had rights to other organizational units (OUs) of the domain, users and user groups could still be used even if they were outside those containers. That is not the case anymore.

Ensure that all users and user groups can be used: 

1. Log in to your {{ en.DVLS }} web interface using and administrator account.
1. Go to ***Administration – Server settings – Authentication – Domains***.
![Administration – Server settings – Authentication – Domains](https://cdnweb.devolutions.net/docs/DVLS2004_2024_1.png)
1. Click on ***Edit*** next to your domain.
![Edit your domain](https://cdnweb.devolutions.net/docs/DVLS2005_2024_1.png)
1. Go to the ***Advanced settings***.
![Advanced settings](https://cdnweb.devolutions.net/docs/DVLS2006_2024_1.png)
1. In ***Domain containers***, check if you have any OUs selected. If you have some configured, please ensure that all the users and user groups are included here, or else the users and groups outside of those containers will not be able to connect or have the proper permissions. You could also remove those domain container restrictions if your Active Directory is not large.
1. Click ***OK*** then ***Update*** to save your changes.