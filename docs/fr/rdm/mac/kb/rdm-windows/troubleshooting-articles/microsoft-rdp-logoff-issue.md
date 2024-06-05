---
eleventyComputed:
  title: Problèmes de déconnexion Microsoft RDP
---
Après avoir créé et connecté à une session RDP, si vous cliquez sur le bouton "LogOff" dans le ruban {{ fr.RDM }}, il semble envoyer la mauvaise commande à la session RDP. Il envoie "ashutdown /l" au lieu de "shutdown /l". Cela se produit dans les éditions Gratuites et Team.

## Solution
Cochez l'option ***Désactiver la vérification de la boîte de dialogue d'exécution*** dans ***Fichier – Paramètres – Types – Bureau à distance***.
![!!KB4040](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4040.png)
