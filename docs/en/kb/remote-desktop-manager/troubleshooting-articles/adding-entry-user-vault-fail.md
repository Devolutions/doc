---
title: Adding a new entry in the user vault on SQL Azure does not work
---
You are able to create new entries inside the shared vault, but not in the {{ en.UVLT }} You create the new entry, but it never appears under the {{ en.UVLT }}
## Solution
Make sure that the user that you are using to authenticate on the Azure SQL datasource has been created under ***Administration - Users*** in {{ en.RDM }}  

If the user is missing, the {{ en.UVLT }} feature for this user will not work.
