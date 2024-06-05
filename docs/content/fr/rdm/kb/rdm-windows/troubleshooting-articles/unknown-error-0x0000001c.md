---
eleventyComputed:
  title: "{{ fr.RDMMAC }} Erreur inconnue (0x0000001C)"
---
Lors de la tentative de connexion à un hôte RDP dans {{ fr.RDMMAC }}, le message d'erreur suivant apparaît : Erreur inconnue (0x0000001C).
## Solution
La solution consiste à augmenter le ***délai d'acquittement TCP*** par défaut à 30 secondes (30000).

* Ce paramètre peut être modifié globalement pour toutes les entrées RDP dans ***Fichier - Préférences - Types - RDP - Connexion***.

![!!KB5018](https://cdnweb.devolutions.net/docs/docs_en_kb_KB5018.png)

* Ou modifié localement, dans la section ***Commun*** des propriétés des entrées, en allant dans ***RDP (Microsoft Remote Desktop) - Avancé - Connexion***.

![!!KB5019](https://cdnweb.devolutions.net/docs/docs_en_kb_KB5019.png)
