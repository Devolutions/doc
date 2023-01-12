---
title: Enregistrement de la session
description: L’enregistrement de la session permet d’enregistrer les actions d’un utilisateur pendant qu’une session à distance de Remote Desktop Manager.
keywords:
- Enregistrement
---
# {{ fr.TOPICTITLE }} 
L'enregistrement de la session permet d'enregistrer les actions d'un utilisateur pendant qu'une session à distance de {{ fr.RDM }} est ouverte sur son poste. Un fichier vidéo d’une image par seconde est créé en format webm. 
{% snippet icon.badgeInfo %} 
L'enregistrement de la session est disponible pour {{ fr.RDM }} version 2019.1.3.0 et ultérieure. 
{% endsnippet %}
 
Vous pouvez configurer l'enregistrement de la session au niveau d’un coffre, d'un fichier ou d’une entrée et ils peuvent être définis comme optionnels ou obligatoires. 
{% snippet icon.badgeCaution %} 
L'enregistrement de la session est seulement disponible en mode intégré. 
{% endsnippet %}
 
## Sessions prises en charge 
* Apple Remote Desktop 
* Azure Blob Storage 
* Chrome 
* FTP 
* Google Drive 
* RDP 
* S3 
* SCP 
* SFTP 
* SSH Shell 
* Telnet 
* VNC 
* WebDav 
## Configurer l'enregistrement de session 
1. Ouvrir ***Paramètres du coffre*** ou ***Propriétés*** au niveau du fichier ou de l'entrée. 
1. Dans la section ***Sécurité***, cliquer sur ***Enregistrement de la session***. 
1. Choisir un ***Mode***. 
* ***Hérité*** : Le paramètre est hérité du fichier parent. 
* ***Optionnel*** : Une demande est faite à l'utilisateur pour qu'il enregistre à chaque début de session. S'il refuse, la session s'ouvre quand même. 
* ***Obligatoire*** : L'enregistrement démarre automatiquement. La session ne s'ouvre pas si un problème survient concernant l'enregistrement de la session. 
* ***Requis (lorsque disponible)*** : L'enregistrement démarre automatiquement. S'il y a un problème avec l'enregistrement, la session sera lancée et aucun enregistrement ne sera disponible. 
* ***Jamais*** : L'enregistrement de la session est désactivé. 
* ***Racine (Par défaut)*** : Renvoie au coffre. Équivaux au mode ***Jamais*** pour les coffres. 
4. Choisir la méthode d'***Enregistrement***. 
{% snippet icon.badgeNotice %} 
Certaines options sont seulement disponibles avec une source de données {{ fr.DPS }}. 
{% endsnippet %}
 
* ***Hérité*** : Le paramètre est hérité du fichier parent. 
* ***Local*** : Les fichiers d'enregistrement seront sauvegardés localement en fonction des paramètres ***Destination*** et ***Nom du fichier***. 
* ***À distance*** : Les enregistrements de sessions seront gérés par le ***Serveur d'enregistrement***. Toutes les options suivantes ne seront plus disponibles. 
* ***Racine (Par défaut)*** : Renvoie à la racine. 
5. Choisir la ***Destination*** du fichier. 
{% snippet icon.badgeInfo %} 
Le fichier s'enregistre localement par défaut, et non dans la base de données.  
Il est conseillé de choisir une extension de fichier personnalisé. Par exemple sur un réseau partagé. 
{% endsnippet %}
 
* ***Hérité*** : Le paramètre est hérité du fichier parent. 
* ***Personnalisé*** : Colle le chemin de destination du fichier dans la boîte ***Destination***. 
* ***Racine (Par défaut)*** : S'enregistre dans le dossier des applications locales ou de la source de données si vous utilisez un fichier .zip de RDM. 
6. Choisir un ***Nom de fichier*** ou ***Toujours demander le nom*** lorsque l'utilisateur commence à enregistrer : 
* ***Hérité*** : Le paramètre est hérité du fichier parent. 
* ***ID du journal de connexions*** : Utilise un numéro d'identification comptant plusieurs lettres et chiffres. 
* ***Nom de l’entrée*** : Utiliser automatiquement le nom de l'entrée. 
* ***Nom de l’entrée + Date/Heure*** : Utiliser automatiquement le nom de l'entrée avec la date et l'heure de l'enregistrement. 
* ***Racine (Par défaut)*** : Utilise le nom, la date et l'heure de l'enregistrement. 
* ***Personnalisé*** : Personnaliser le nom du fichier. 
  * Choisir ***Toujours demander le nom*** pour forcer les utilisateurs à nommer l'enregistrement. 
  * Utiliser des variables pour personnaliser le nom du fichier. Cliquer sur le bouton ***Variables*** pour obtenir plus d'informations sur les variables disponibles pour cette entrée spécifique. 
![Enregistrement de la session](/img/fr/kb/KB4020.png) 
*Enregistrement de la session*{.caption}  

Types de fichier : Deux fichiers sont enregistrés après la fermeture de la session. Le fichier .webm est l’enregistrement, alors que le fichier .dat fonctionne avec le lecteur de {{ fr.RDM }}. 

