---
eleventyComputed:
  title: Revenir à une installation précédente de {{ fr.DVLS }}
---
Vous avez effectué une mise à jour de {{ fr.DVLS }} ou la machine hôte a planté, mais pour une raison quelconque, vous souhaitez revenir à la version précédente que vous utilisiez.

## Solution

Le client aurait besoin de ces fichiers pour pouvoir restaurer {{ fr.DVLS }} à la version précédente :

* Sauvegarde fonctionnelle de la base de données.
* Sauvegarde du fichier des clés de chiffrement.
* Installateur {{ fr.DVLSCONSOLE }} et fichiers zip hors ligne selon la version qui était en cours avant le plantage. Ces fichiers peuvent être demandés à notre équipe de support.

Voici les étapes à suivre :

1. Restaurer la base de données SQL.
1. Installer la version précédente fonctionnelle de {{ fr.DVLSCONSOLE }}.
1. Créer une nouvelle instance {{ fr.DVLS }} et la connecter à la base de données restaurée. Utiliser les étapes 3 à 6 sur la [page](/server/getting-started/installation/create-server-instance/) suivante.
1. Sélectionner le fichier zip hors ligne et définir les paramètres de Destination d'Installation.
1. Cliquer sur le bouton d'installation pour importer les Clés de Chiffrement.
1. Pour terminer l'installation, fermer la fenêtre.
