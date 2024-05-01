---
eleventyComputed:
  title: Microsoft RDP RD Gateway credentials fail
  description: Unable to find credential issue with Microsoft RDP RD Gateway with {{ en.UVLT }} search in {{ en.RDM }}.
---
Unable to find credential issue with Microsoft RDP RD Gateway with {{ en.UVLT }} search in {{ en.RDM }}.
![!!KB4714](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4714.png)

## Solution
A registry key can block this, please validate that the disabledomaincreds is set to "0".
