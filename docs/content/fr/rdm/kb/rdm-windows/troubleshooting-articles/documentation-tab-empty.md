---
eleventyComputed:
  title: L'onglet Documentation est vide
---
L'onglet ***Documentation***, dans une entrée, est vide bien que vous ayez ***Réinitialisé la mise en page*** dans l'onglet ***Fenêtre***.
![!!KB4705](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4705.png)
## Solution
Premièrement, valider que vous êtes autorisé à ***Voir la documentation*** dans ***Administration - {{ fr.VLT_MAJ }} Paramètres - Permissions - Documentation - Voir la documentation***.

Si tout est bon, cela pourrait être dû au fait que votre serveur a l'option de Configuration de sécurité renforcée d'IE activée. Cela pourrait empêcher et bloquer le chargement du document. Vous devriez la désactiver, mais nous vous conseillons de conserver la protection renforcée.

Pour plus d'informations, voir la documentation de Microsoft (https://docs.microsoft.com/en-us/troubleshoot/browsers/enhanced-security-configuration-faq#:~:text=Internet%20Explorer%20Enhanced%20Security%20Configuration%20(ESC)%20establishes%20security%20settings%20that,is%20also%20known%20as%20IEHarden).
