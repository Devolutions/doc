---
eleventyComputed:
  title: Microsoft RDP sessions work using mstsc.exe but not in {{ en.RDM }}
---
This topic describes the troubleshooting steps for when establishing a session to a remote host reacts differently in {{ en.RDM }} than **mstsc.exe**.

## Solution

### Embedded mode issues

Our Embedded (tabbed) display mode uses the Microsoft ActiveX and offers the most customization options, but is inherently different than using **mstsc.exe**. When wanting to ensure the issue is really in {{ en.RDM }} vs being an issue with the ActiveX, the procedure is to try to replicate the scenario with Microsoft's RDCMan. You can obtain that tool from [http://www.microsoft.com/en-ca/download/details.aspx?id=44989](http://www.microsoft.com/en-ca/download/details.aspx?id=44989) Install it, create sessions like you have in {{ en.RDM }}, then open them concurrently or in repetition to replicate the issue you think lies in {{ en.RDM }}.

### Comparing our settings to a native rdp file

When you use the External display mode, {{ en.RDM }} will create a temporary RDP file and call **mstsc.exe** with the file as a parameter. It can be useful to grab that file while it exists and to compare it with one created using **mstsc.exe**.

1. Create or duplicate the session that you want to diagnose.
1. Set the display mode to ***External***.
1. Launch the session.

The file will be deleted when you close {{ en.RDM }}, you need to copy it before then.

4. Open %TMP%\RDM, copy your file in another folder.
1. Open the file in your editor of choice and compare it to a file created using **mstsc.exe**.

### Starting rdp sessions is slow compared to the native rdp

We have isolated the issue and we fixed it by changing your RDP engine version to RDP 6.0 or 7.0 in ***File - Options - Types - Remote Desktop***.
![!!KB4056](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4056.png)
