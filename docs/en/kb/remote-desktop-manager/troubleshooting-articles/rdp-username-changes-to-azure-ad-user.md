---
eleventyComputed:
  title: RDP username automatically changed if the client is Azure AD joined on Windows 11 
  description: In the Microsoft implementation, if the RDP username doesn’t have "\" or "@" and has no explicit domain, it is automatically changed to "AzureAD\user” if the client is Azure AD joined, regardless of what the target system is. 
---
In the Microsoft implementation, if the RDP username does not contain ***“\”*** or ***“@”*** and has no explicit domain, it automatically switches to ***"AzureAD\user"*** when the client joins Azure AD, regardless of what the target system is. This issue occurs on Windows 11. 

## Solution

The solution is to set ***“.”*** as the domain for the RDP connection entry.
