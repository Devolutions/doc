---
eleventyComputed:
  title: Configurer RemoteFX pour le WebClient RDP
---
Par défaut, Windows n'active pas RemoteFX pour assurer la compatibilité avec les versions antérieures. Cependant, pour une performance optimale lors de l'utilisation d'un WebClient RDP, il est recommandé d'activer RemoteFX sur les serveurs qui le permettent.

Pour activer RemoteFX sur une machine distante, un certain nombre d'options doivent être activées.

Voici la procédure à suivre sur la machine distante :

1. Lancer la commande exécuter de Windows <kbd>Windows</kbd>+<kbd>R</kbd>.
1. Exécuter : `gpedit.msc`
1. Activer : `Configuration ordinateur/Modèles d'administration/Composants Windows/Services Bureau à distance/Host de session Bureau à distance/Environnement de la session distante/RemoteFX pour Windows Server 2008 R2/Configurer RemoteFX`
1. Activer : `Configuration ordinateur/Modèles d'administration/Composants Windows/Services Bureau à distance/Host de session Bureau à distance/Environnement de la session distante/Activer l'encodage RemoteFX pour les clients RemoteFX conçus pour Windows Server 2008 R2 SP1`
1. Activer : `Configuration ordinateur/Modèles d'administration/Composants Windows/Services Bureau à distance/Host de session Bureau à distance/Environnement de la session distante/Limiter la profondeur de couleur maximale`
1. Redémarrer la machine distante.
