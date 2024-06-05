---
eleventyComputed:
  title: Gestionnaire d'agent de clé SSH
  description: Le Gestionnaire d'agent de clé SSH est utilisé pour conserver toutes vos clés SSH en mémoire, déjà décodées et prêtes à être utilisées.
---
Le ***Gestionnaire d'agent de clé SSH*** est utilisé pour conserver toutes vos clés SSH en mémoire, déjà décodées et prêtes à être utilisées. Il a la même utilisation que Pageant (Gestionnaire de clé SSH) pour Putty sauf que le ***Gestionnaire d'agent de clé SSH*** est utilisé avec {{ fr.RDM }}.

Le ***Gestionnaire de clé SSH (local)*** se trouve sous ***Outils*** dans le ruban de {{ fr.RDM }}.

![Outils – Gestionnaire de clé SSH (local)](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6244.png)

## Paramètres

1. Ouvrir le ***Gestionnaire d'agent de clé SSH***, vous remarquerez en bas à droite que l'agent n'est pas en cours d'exécution. Cliquer sur ***Démarrer l'agent***.
![Onglet Agent de clé SSH – Démarrer l'agent](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6246.png) 
1. Cliquer sur ***Ajouter une clé*** et sélectionner le fichier pour ouvrir votre clé SSH.
![Gestionnaire d'agent de clé – Ajouter une clé](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6247.png) 
1. Toutes vos clés SSH ajoutées apparaîtront dans votre ***Gestionnaire d'agent de clé SSH***.
1. Dans votre session Shell SSH dans l'onglet ***Général***, entrer un ***Nom d'utilisateur*** et laisser le champ ***Mot de passe*** vide.
![Session Shell SSH – Onglet Général](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6249.png) 
1. Dans l'onglet ***Clé privée*** de votre session Shell SSH, laisser l'option pour la ***Clé privée*** sur ***Aucune clé privée***.
![Session Shell SSH – Onglet Clé privée](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6250.png)  
1. Dans l'onglet ***Avancé*** de votre session Shell SSH, activer l'option ***Utiliser l'agent***. L'option ***Utiliser l'agent*** prend automatiquement les informations de la clé SSH conservée dans votre Gestionnaire d'agent de clé SSH.
![Session Shell SSH – Onglet Avancé](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6251.png) 

### Identifiant de clé privée

Lors de la création d'une nouvelle ***entrée d'identifiant de clé privée*** dans {{ fr.RDM }}, vous avez l'option de les charger automatiquement dans votre ***Gestionnaire d'agent de clé SSH***.

1. Sélectionner ***Ajouter une nouvelle entrée – Gestion des identifiants – Clé privée***.
![Nouvelle entrée d'identifiant – Clé privée](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6252.png) 
1. Dans l'onglet ***Avancé*** de votre ***entrée de clé privée***, activer l'option ***Charger automatiquement dans l'agent de clé***.
![Clé privée – Onglet Avancé](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6253.png) 


