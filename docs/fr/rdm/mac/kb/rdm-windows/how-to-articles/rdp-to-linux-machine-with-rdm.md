---
eleventyComputed:
  title: Établir un accès à distance à une machine Linux avec {{ fr.RDM }}
---
Vous pouvez établir un accès à distance à une machine Linux depuis {{ fr.RDMWIN }}.
## Solution
1. Exécuter d'abord les commandes suivantes sur votre machine Linux pour pouvoir vous connecter :
1. sudo apt install xrdp
1. sudo systemctl enable xrdp
1. Ensuite, créer une entrée RDP pour se connecter à votre machine Linux.
![!!KB4782](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4782.png)