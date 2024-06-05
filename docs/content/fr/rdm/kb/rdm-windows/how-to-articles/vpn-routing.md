---
eleventyComputed:
  title: Routage VPN
---
Établir une connexion VPN en utilisant {{ fr.RDM }} est simple. Malheureusement, l'ajout de routes doit être fait manuellement. Attendre que l'adaptateur se connecte, trouver l'IP, puis ajouter les routes souhaitées. Même si vous utilisez un script (tel qu'un script PowerShell), cela reste une tâche redondante et chronophage.
![!!KB4601](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4601.png)

## Solution

Cette fonctionnalité fait partie d'un concept plus large appelé Commandes VPN. Elle vous permet d'exécuter tout type de script ou exécutable après la connexion VPN et avant la déconnexion VPN.
![!!KB4602](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4602.png)

## Flux de travail

1. Configurer le VPN pour attendre jusqu'à ce que l'adaptateur se connecte et se voit attribuer une IP (nous utiliserons l'IP de l'adaptateur pour définir les routes).
1. Cliquer sur ***Ajouter*** pour afficher la boîte de dialogue ***Commandes***.
1. Créer une définition de route en sélectionnant l'élément radio ***Route (Ajouter/Supprimer)***.
1. Définir l'IP et toute autre information requise.
![!!KB4603](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4603.png)
