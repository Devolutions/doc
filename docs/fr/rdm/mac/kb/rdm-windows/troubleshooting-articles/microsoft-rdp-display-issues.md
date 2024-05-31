---
eleventyComputed:
  title: Problèmes d'affichage Microsoft RDP
---
### Le contenu de la session à distance est flou

Décocher la mise en cache des bitmaps persistants sous l'onglet Expérience dans les propriétés de votre session RDP.

![!!KB4047](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4047.png)

### Les sessions clignotent, deviennent noires ou se mélangent aléatoirement pendant le travail.

Nous avons identifié la suite CA DSM Agent pour la gestion de bureau comme étant le coupable pour ceux qui utilisent ce produit. L'agent de contrôle à distance de ce produit semble interférer avec l'interface utilisateur moderne de {{ fr.RDM }}. Si vous arrêtez l'agent, le problème devrait disparaître.

### La barre des tâches à distance sur votre système à distance est cachée par celle de votre machine locale.

![!!KB4049](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4049.png)

Régler le mode de dimensionnement de l'écran dans les propriétés de votre session RDP sous l'onglet Affichage.

![!!KB4050](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4050.png)
