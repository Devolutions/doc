---
eleventyComputed:
  title: Invite de saisie des identifiants Microsoft RDP RD Gateway
---
Ce problème survient lorsque vous avez configuré RD Gateway avec certains identifiants et que vous utilisez l'action de reconnexion. Vous êtes invité à saisir les identifiants RD Gateway et l'application ne réutilise pas les paramètres existants.

## Solution

Dans les ***Paramètres avancés*** d'une session RDP, définir le ***Mode de reconnexion*** sur ***Complet***. Cela forcera la déconnexion/reconnexion complète et cela résoudra le problème.
![!!KB4037](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4037.png)
