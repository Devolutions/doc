---
title: Gestionnaire de l'agent des clés
---

Le ***Gestionnaire de l'agent des clés*** est utilisé pour conserver toutes vos clés SSH en mémoire, déjà décodées et prêtes à être utilisées. Il a la même utilisation que Pageant (SSH Key Manager) pour Putty, sauf que le ***Gestionnaire de l'agent des clés*** est utilisé avec {{ fr.RDM }} .  

## Paramètres 

1. Lorsque vous ouvrez le ***Gestionnaire de l'agent des clés*** , vous remarquerez en bas à droite que l' agent n'est pas en cours d'exécution, vous devrez cliquer sur ***Démarrer Agent*** . Si vous souhaitez que votre agent des clés fonctionne toujours, vous pouvez activer l'option dans ***Fichier - Option - Agent de clés - Démarrer l'agent au démarrage de l'application*** .  
![Gestionnaire de l'agent des clés - Démarrer Agent](/img/fr/rdm/windows/clip10089.png) 
1. Cliquer sur ***Ajouter la clé*** et sélectionner le fichier pour ouvrir votre clé SSH.  
![Gestionnaire de l'agent des clés - Ajouter la clé](/img/fr/rdm/windows/clip10090.png) 

Toutes vos clés SSH ajoutées apparaîtront dans votre ***Gestionnaire de l'agent des clés*** .  

3. Dans votre session SSH Shell, dans l'onglet ***Général*** , entrer un ***Nom d'utilisateur*** et laisser le champ ***Mot de passe*** vide.  
![Entrée SSH Shell - Général](/img/fr/rdm/windows/clip11344.png) 
1. Dans l'onglet ***Clé privée*** de votre session SSH Shell, laisser l'option pour le type de clé privée sur ***Aucune clé privée*** .  
![Entrée SSH Shell - Clé privé](/img/fr/rdm/windows/clip11346.png) 
1. Dans l'onglet ***Avancée*** de votre session SSH Shell, activer l'option ***Utiliser l'agent d'authentification SSH*** . L'agent d'utilisation prend automatiquement les informations de la clé SSH conservées dans votre ***Gestionnaire de l'agent des clés*** .  
![Entrée SSH Shell - Avancée](/img/fr/rdm/windows/clip11612.png) 

### Entrée d'identifiants de Clé privée 

Lorsque vous créez une nouvelle entrée d'identifiants de clé privée dans {{ fr.RDM }} , vous avez la possibilité de les charger automatiquement dans votre ***Gestionnaire de l'agent des clés*** .  

1. Créer votre nouvel identifiant de clé privée.  
![Nouvelle entrée d'identifiants - Clé privée](/img/fr/rdm/windows/clip10811.png) 
1. Dans l'onglet ***Avancée*** de votre entrée de clé privée, activer l'option ***Charger la clé à l'agent automatiquement*** .  
![Clé privée - Avancée](/img/fr/rdm/windows/clip10101.png) 


