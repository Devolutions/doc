---
eleventyComputed:
  title: Échec des informations d'identification Microsoft RDP RD Gateway
  description: Impossible de trouver le problème d'identification avec Microsoft RDP RD Gateway avec la recherche {{ fr.UVLT }} dans {{ fr.RDM }}.
---
Impossible de trouver le problème d'identification avec Microsoft RDP RD Gateway avec la recherche {{ fr.UVLT }} dans {{ fr.RDM }}.
![!!KB4714](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4714.png)

## Solution
Une clé de registre peut bloquer cela, veuillez valider que le disabledomaincreds est défini sur "0".