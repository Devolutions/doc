---
title: Adding New Entry in User Vault on SQL Azure Doesn't Work
---
# {{ en.TOPICTITLE }}
You are able to create new entries inside the shared vault, but not in the {{ en.PVLT }} You create the new entry, but it never appears under the {{ en.PVLT }}
### Solution
Make sure that the user that you are using to authenticate on the Azure SQL datasource has been created under ***Administration - Users*** in {{ en.RDM }}  

If the user is missing, the {{ en.PVLT }} feature for this user will not work.
