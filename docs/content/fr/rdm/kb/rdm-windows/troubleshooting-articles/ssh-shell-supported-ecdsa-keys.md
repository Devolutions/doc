---
eleventyComputed:
  title: Clés ECDSA prises en charge par SSH Shell
---
L'erreur « Unknown ecdsa curve group » apparaît lors de la connexion aux serveurs SSH.
## Solution
Confirmer que la clé publique/privée est prise en charge par {{ fr.RDM }}

RDM Windows et Mac prennent en charge :

* ecdsa-nistp256
* ecdsa-nistp384
* ecdsa-nistp521