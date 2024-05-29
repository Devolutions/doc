---
eleventyComputed:
  title: Windows Server 2008R2 cannot Load or Assembly
  description: Windows Server 2008R2 - Could not load file or assembly 'Microsoft.Management.Infrastructure' or one of its dependencies.
  keywords:
  - Windows Server
  - 2008R2
  - Microsoft.Management.Infrastructure
---
Windows Server 2008R2 - Could not load file or assembly 'Microsoft.Management.Infrastructure' or one of its dependencies.

The following modification will remove the strong name verification and could expose your Windows Server to various threats.
After installing {{ en.DVLS }} version 6.x on a Windows Server 2008R2, you will get the following error message.

![Could not load file or assembly window](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4004.png)

## Solution

The solution is to create two registry keys. You can add them by opening a PowerShell command window as an administrator.

Here are the two commands to run.

![PowerShell command window](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4005.png)
