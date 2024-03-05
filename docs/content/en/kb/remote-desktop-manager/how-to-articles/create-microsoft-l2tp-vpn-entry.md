---
eleventyComputed:
  title: Create a Microsoft L2TP VPN entry
---
You can create a Microsoft L2TP VPN entry with {{ en.RDM }} versions 2021.1.1.0 and above.

1. First you will need to create a new ***VPN Microsoft*** entry with the basic information and settings.
1. In the ***General - Connection*** section, use the drop down menu next to the ***VPN type***, and select ***L2TP*** instead of ***Automatic***.
1. Enter your ***Pre-shared key*** provided from Microsoft.
![!!KB4703](https://cdnweb.devolutions.net/docs/en/kb/KB4703.png)
1. Fill in the information for the ***Username***, ***Domain***, and ***Password***.
1. Optional: The ***Auth method*** can be different for each user (it is by default set to ***PAP***), depending on your Microsoft VPN configuration. Use the drop down menu to change it.
   ![!!KB4704](https://cdnweb.devolutions.net/docs/en/kb/KB4704.png)
   | Option | Description |
   | ------ | ----------- |
   | PAP | Unencrypted password |
   | CHAP | Challenge Handshake Authentication Protocol |
   | MS-CHAP v2 | Microsoft CHAP Version 2 |
   | EAP | Extensible Authentication Protocol |

1. Click ***OK*** to save.
