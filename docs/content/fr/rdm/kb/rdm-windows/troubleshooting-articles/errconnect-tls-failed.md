---
eleventyComputed:
  title: ERRCONNECT_TLS_FAILED (0x00000008)
---
Lors du lancement d'une session RDP dans {{ fr.RDMMAC }}, vous obtenez le message d'erreur : ERRCONNECT_TLS_FAILED (0x00000008).
## Solution
Pour corriger cette erreur, activer le TLS 1.2 sous le serveur distant situé ici : HKLM\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols
![!!KB4959](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4959.png)
