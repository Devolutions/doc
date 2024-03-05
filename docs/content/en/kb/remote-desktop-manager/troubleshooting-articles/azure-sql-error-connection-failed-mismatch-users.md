---
eleventyComputed:
  title: Azure SQL error - connection failed due to mismatch of users during the authentication process
  description: Azure SQL error - connection failed due to mismatch of users during the authentication process
---
An error message appears in a new {{ en.RDM }} account if the previous account's ***UserPrincipalName*** (UPN) has been changed to avoid losing the user's {{ en.VLT }}-specific settings.

## Solution

1. Edit the ***Azure database owner*** in the Azure portal.
1. Delete the account identified by ***Expecting*** from the error message in the ***Security section*** of the Azure database in SQL Server Management Studio.
1. Recreate the account in the ***Security section*** of the Azure database in SQL Server Management Studio.
1. Perform an ***SQL Login fix*** on the account in ***Administration*** – ***Users*** in  {{ en.RDM }}.

![Administration – Users](https://cdnweb.devolutions.net/docs/en/kb/KB6153.png)
