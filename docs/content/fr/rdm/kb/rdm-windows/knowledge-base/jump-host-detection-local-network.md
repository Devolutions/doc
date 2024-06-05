---
eleventyComputed:
  title: Détecter automatiquement et contourner le serveur de rebond pour des connexions directes dans le réseau local
  description:
---
Un serveur de rebond agit comme une porte entre deux réseaux de confiance, permettant l'accès, mais seulement avec la permission du serveur de rebond.

Cependant, dans le cas de la maintenance de multiples connexions à travers un serveur de rebond sur le même réseau, la procédure actuelle nécessite de désactiver le serveur de rebond ou de recourir à l'alternative de connexion directe (sans serveur de rebond). Apprendre à contourner le serveur de rebond ci-dessous.

1. Aller aux ***Propriétés*** de votre entrée.
2. Cliquer sur ***Connecter si impossible de pinguer/analyser le port*** sous ***Connexion – VPN/SSH/Gateway – Général – Connecter***.
3. Cliquer sur ***OK*** pour sauvegarder et fermer la fenêtre.

![Connexion – VPN/SSH/Gateway – Général – Connecter](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6028.png)

{{ fr.RDM }} teste automatiquement si l'hôte répond, si ce n'est pas le cas, le VPN s'ouvre.
