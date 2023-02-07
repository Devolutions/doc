---
title: Injection des identifiants indisponible pour certains outils
description: Il est souvent déconseillé d’autoriser l’affichage des mots de passe avec les solutions de gestion d’accès privilégiés ( Privileged Access Management ou PAM).
keywords:
- Privileged Access Management
- PAM
- Injection
- Gestion d’accès privilégiés
---
Il est souvent déconseillé d'autoriser l'affichage des mots de passe avec les solutions de gestion d’accès privilégiés (Privileged Access Management ou PAM). Nous offrons deux permissions distinctes dans {{ fr.DPS }} : une pour afficher le mot de passe et une autre pour que {{ fr.RDM }} utilise le mot de passe en votre nom. Chez Devolutions, il s'agit de l'injection des identifiants, ce que d’autres appellent «*for/by proxy*». La plus belle analogie que nous puissions faire est que {{ fr.RDM }} est le concierge qui, au lieu de vous prêter une clé pour accéder à une pièce, va plutôt ouvrir la porte pour vous. 

Cela crée un défi avec {{ fr.RDM }} car, depuis le début, il a été conçu pour répondre aux critères suivants : 
* simplicité d'utilisation; 
* flexibilité maximale; 
* et intégration à plus de 160 technologies uniques. 

Il est très difficile de limiter la façon dont le mot de passe est utilisé dans le cas de certaines de ces technologies : le seul choix est de les bloquer à la racine. Voici quelques exemples d'entrées : Ligne de commande; PowerShell; Outils de gestion. 

Cela ne signifie pas que nous ne pourrons pas les activer à l'avenir, mais nous n'avions pas le choix pour l'instant. Notre système de macros et de nos variables, combinés au risque que des utilisateurs malveillants remplacent tout bonnement un outil par un autre, qu'ils auraient construit eux-mêmes, constituait une zone d’attaque trop importante. 

Vous pouvez autoriser l'***Affichage du mot de passe*** dans {{ fr.DPS }}, ce qui résoudra le problème. Cependant, si votre politique de sécurité l'interdit, ou si vous utilisez une de nos intégrations qui n'offre pas ce choix, il n'y a pas de solution de rechange pour le moment. 

