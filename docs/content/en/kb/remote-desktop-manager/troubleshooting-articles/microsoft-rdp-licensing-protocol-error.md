---
eleventyComputed:
  title: Microsoft RDP licensing protocol error
---
When you connect to a remote workstation, you receive one of the errors below.

![!!KB4234](https://cdnweb.devolutions.net/docs/en/kb/KB4234.png)
![!!KB4235](https://cdnweb.devolutions.net/docs/en/kb/KB4235.png)

## Solution 1

1. Close {{ en.RDM }}.
1. Navigate to **%localappdata%\Devolutions**.
1. Move the **RemoteDesktopManager** folder to your desktop.
1. Restart {{ en.RDM }}.

## Solution 2

In ***File - Options - Types - RDP*** change the RDP engine to ***RDP (FreeRDP Latest)***.

## Solution 3

Try to check/uncheck the ***NLA*** option located under the ***Connection*** tab in the ***Properties*** of the session.

## Solution 4

In some cases, and sometimes depending on the host OS, the ***CredSSP*** setting may interfere. Change its value in ***Session properties - General - Advanced*** Tab.

## Solution 5

Try to check/uncheck the ***Open Console*** option and see if the error message disappear or is still the same in the ***General*** settings of the ***Properties***.
