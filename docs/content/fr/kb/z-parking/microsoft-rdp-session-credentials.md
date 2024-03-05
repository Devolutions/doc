---
eleventyComputed:
  title: Microsoft RDP Session Credentials
---
Unable to pass credentials to a windows server 2003.

## Solution

The issue resides on the server itself. You have to disable the option ***Always prompt for password*** and enable the option ***Use client-provided logon information*** in the Terminal Services Configuration.
![!!KB4067](https://cdnweb.devolutions.net/docs/en/kb/KB4067.png)
![!!KB4068](https://cdnweb.devolutions.net/docs/en/kb/KB4068.png)
