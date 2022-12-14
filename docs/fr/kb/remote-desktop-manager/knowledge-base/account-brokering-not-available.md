---
title: Injection des identifiants indisponible pour certains outils
description: Il est souvent déconseillé d’autoriser l’affichage des mots de passe avec les solutions de gestion d’accès privilégiés ( Privileged Access Management ou PAM).
keywords:
- Privileged Access Management
- PAM
- Injection
- Gestion d’accès privilégiés
---
# {{ fr.TOPICTITLE }} 
Il est souvent déconseillé d&apos;autoriser l&apos;affichage des mots de passe avec les solutions de gestion d’accès privilégiés (Privileged Access Management ou PAM). Nous offrons deux permissions distinctes dans {{ fr.DPS }} : une pour afficher le mot de passe et une autre pour que {{ fr.RDM }} utilise le mot de passe en votre nom. Chez Devolutions, il s&apos;agit de l&apos;injection des identifiants, ce que d’autres appellent «*for/by proxy*». La plus belle analogie que nous puissions faire est que {{ fr.RDM }} est le concierge qui, au lieu de vous prêter une clé pour accéder à une pièce, va plutôt ouvrir la porte pour vous. 

Cela crée un défi avec {{ fr.RDM }} car, depuis le début, il a été conçu pour répondre aux critères suivants : 
* simplicité d&apos;utilisation; 
* flexibilité maximale; 
* et intégration à plus de 160 technologies uniques. 

Il est très difficile de limiter la façon dont le mot de passe est utilisé dans le cas de certaines de ces technologies : le seul choix est de les bloquer à la racine. Voici quelques exemples d&apos;entrées : Ligne de commande; PowerShell; Outils de gestion. 

Cela ne signifie pas que nous ne pourrons pas les activer à l&apos;avenir, mais nous n&apos;avions pas le choix pour l&apos;instant. Notre système de macros et de nos variables, combinés au risque que des utilisateurs malveillants remplacent tout bonnement un outil par un autre, qu&apos;ils auraient construit eux-mêmes, constituait une zone d’attaque trop importante. 

Vous pouvez autoriser l&apos;***Affichage du mot de passe*** dans {{ fr.DPS }}, ce qui résoudra le problème. Cependant, si votre politique de sécurité l&apos;interdit, ou si vous utilisez une de nos intégrations qui n&apos;offre pas ce choix, il n&apos;y a pas de solution de rechange pour le moment. 

