---
title: Kernelbase.dll Crash Error
---
You will find at the end of {{ en.RDM }} crash error log "Faulting module name: KERNELBASE.dll, version: 10.0.18362.1, time stamp: 0x1a30e11b"  

According to this, the crash in {{ en.RDM }} is caused by the faulting module kernelbase.dll. We have seen this issue a few times before but unfortunately, this is not something we can fix ourselves at Devolutions because the issue is with ***kernelbase.dll*** itself, which is a Windows component.
### Solution
According to the information we have gathered on that matter by consulting documentation from Microsoft's Support, we have found out that most of the time, these issues occur when the Windows workstations are not updated to the latest version available.  

We have also found this topic useful from Microsoft: [Application Fail to Start with Kernelbase.dll error](https://answers.microsoft.com/en-us/windows/forum/all/applications-fail-to-start-with-kernelbasedll/44a4c2ad-a43f-479b-b026-bcdc2ff01285)  

In some instances, we have seen success in clearing the error by doing a fresh install and download from our website of the {{ en.RDM }} application. Please follow this topic to find more information on how to create a [Portable Remote Desktop Manager Installation](/kb/remote-desktop-manager/how-to-articles/portable-rdm-installation/)
