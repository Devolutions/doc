---
eleventyComputed:
  title: RDP username of Azure AD client automatically changes on Windows 11 
  description: In the Microsoft implementation, if the RDP username doesn’t have "\" or "@" and has no explicit domain, it is automatically changed to "AzureAD\user” if the client is Azure AD joined, regardless of what the target system is. 
---
In the Microsoft implementation, if the RDP username does not contain ***“\”*** or ***“@”*** and has no explicit domain, it automatically switches to ***"AzureAD\user"*** when the client joins Azure AD, regardless of what the target system is. This issue occurs on Windows 11.

## Solution
The solution is to set a period "." as the domain for the RDP connection entry. Follow these instructions:
1. In {{ en.RDM }}, right-click your RDP entry and select ***Properties***.
1. In the RDP entry properties, write a period "." inside the ***Domain*** field.
![Set the domain](https://cdnweb.devolutions.net/docs/RDMW2013_2024_1.png)
1. Save your changes.

{% snippet icon.badgeHelp %}
For more help, contact our support at [service@devolutions.net](mailto:service@devolutions.net).
{% endsnippet %}
