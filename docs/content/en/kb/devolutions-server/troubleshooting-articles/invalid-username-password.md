---
eleventyComputed:
  title: Invalid username or password error when signing in with domain credentials
  description: When trying to log in to {{ en.DVLS }} with domain type credentials, you may get Invalid username or password, please verify your credentials.
---
When trying to log in to {{ en.DVLS }} with "domain" type credentials, you may get the following error message: "Invalid username or password, please verify your credentials". This can be a mistake where {{ en.DVLS }} incorrectly reports that your credentials are invalid when they are in fact not. This is caused by the change in our LDAP stack and how the {{ en.DVLS }} interacts with the Active Directory.

### Solution
Once you have validated that your credentials are really the correct ones for that {{ en.DVLS }} and that authentication method, you can remedy the situation by changing the strategy used by the {{ en.DVLS }} to retrieve the information.

1. In {{ en.DVLS }}, go to ***Administration – Server Settings – Authentication – Domains***.
![Administration – Server Settings – Authentication – Domains](https://cdnweb.devolutions.net/docs/DVLS2004_2024_1.png)
1. Click ***Edit*** on the domain.
![Edit the domain](https://cdnweb.devolutions.net/docs/DVLS2005_2024_1.png)
1. Click ***Advanced settings***.
![Advanced settings](https://cdnweb.devolutions.net/docs/DVLS2006_2024_1.png)
1. Change the value of the ***User validity*** from ***Default (LDAP)*** to either ***Validate credentials*** or ***Create user principal***.
![User validity](https://cdnweb.devolutions.net/docs/DVLS2007_2024_1.png)
1. Click ***OK***, then ***Update*** to save your changes.

You should now be able to log in. If the problem persists, you can also change the other values found in the ***Advanced settings*** to either ***Principal*** or ***Directory entry token group*** depending on what is available. If you still encounter issues logging in, please contact our support team at [service@devolutions.net](mailto:service@devolutions.net).