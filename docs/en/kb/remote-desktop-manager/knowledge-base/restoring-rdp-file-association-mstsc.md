---
title: Restore the RDP file association with mstsc.exe
---
If you have elected to do so during the installation, the *.rdp file extension has been associated with {{ en.RDM }}, this means that it does not use the mstsc.exe client from Microsoft anymore.
## Solution
From an elevated command prompt (run as administrator), run the following command:  

`ftype RDP.File="%systemroot%\system32\mstsc.exe" "%1"`
## Tip
Add the command above to the domain logon script to fix all of your users at once.
