---
eleventyComputed:
  title: "{{ en.RDMMAC }} RDP cannot copy file/image"
---
Cannot copy file or images from local computer to remote session.

The copy of files between a Mac and a Windows remote session is not supported. Only text can be transferred via copy/paste.

## Solution 1

Update your {{ en.RDMMAC }} to version 2022.1.13 and higher.

## Solution 2

Enable the redirection of your hard drive or the folder.

1. Open the ***Properties*** of the RDP entry.
1. Click ***Local Resources*** tab.
1. Enable ***Hard drives*** and select if you want to redirect all disk drives, to the home folder or to a specific folder.
![!!KB4038](https://cdnweb.devolutions.net/docs/en/kb/KB4038.png)
