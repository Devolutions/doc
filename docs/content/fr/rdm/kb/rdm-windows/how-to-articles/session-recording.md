---
eleventyComputed:
  title: Enregistrement de session
  description: L'enregistrement de session fournit un enregistrement de ce qu'un utilisateur a fait pendant qu'une connexion à distance était ouverte dans {{ fr.RDM }}.
---
L'enregistrement de session fournit un enregistrement de ce qu'un utilisateur a fait pendant qu'une connexion à distance était ouverte dans {{ fr.RDM }}. Il enregistre une image par seconde et crée une vidéo au format webm.

Configurer l'enregistrement de session au niveau du {{ fr.VLT }}, du dossier ou de l'entrée et cela peut être optionnel ou obligatoire.

{% snippet, "badgeCaution" %}
L'enregistrement de session est uniquement disponible en mode intégré.
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

1. Ouvrir ***Paramètres {{ fr.VLT }}*** ou ***Propriétés*** au niveau du dossier ou de l'entrée.
1. Dans la section ***Sécurité***, cliquer ***Enregistrement de session***.
1. Choisir un ***Mode***.
* ***Hérité*** : Le paramètre est hérité du dossier parent.
* ***Optionnel*** : L'utilisateur est invité à enregistrer lorsqu'il ouvre la session. S'il refuse, la session s'ouvre quand même.
* ***Obligatoire*** : L'enregistrement commence automatiquement. S'il y a un problème avec l'enregistrement, la session ne s'ouvre pas.
* ***Obligatoire (Lorsque pris en charge)*** : L'enregistrement commence automatiquement. S'il y a un problème avec l'enregistrement, la session se lance et aucun enregistrement ne sera disponible.
* ***Jamais*** : L'enregistrement de session est désactivé.
* ***Racine (Par défaut)*** : Se réfère à {{ fr.VLT }}. Par défaut sur {{ fr.VLT }} signifie ***Jamais***.
4. Choisir la méthode d'***Enregistrement***.
{% snippet, "badgeNotice" %}
Certaines options sont uniquement disponibles avec une source de données {{ fr.DVLS }}.
{% endsnippet %}

* ***Hérité*** : Le paramètre est hérité du dossier parent.
* ***Local*** : Les fichiers d'enregistrement seront sauvegardés localement selon les paramètres ***Destination*** et ***Nom de fichier*** ci-dessous.
* ***À distance*** : Les sessions d'enregistrement seront gérées par le ***Serveur d'enregistrement***. Toutes les options suivantes ne seront plus disponibles.
* ***Racine (Par défaut)*** : Se réfère à la racine.
5. Choisir la ***Destination*** du fichier.
{% snippet, "badgeInfo" %}
Par défaut, le fichier est sauvegardé localement, pas dans la base de données.
Nous recommandons de choisir une extension de fichier personnalisée, par exemple sur un réseau partagé.
{% endsnippet %}

* ***Hérité*** : Le paramètre est hérité du dossier parent.
* ***Personnalisé*** : Coller le chemin de destination du fichier dans la boîte ***Destination***.
* ***Racine (Par défaut)*** : Sauvegarde dans les données locales de l'application ou dans le dossier de la source de données si vous utilisez un fichier ZIP de {{ fr.RDM }}.
6. Choisir un ***Modèle de nom de fichier*** ou ***Demander le nom*** lorsque l'utilisateur commence l'enregistrement.
* ***Hérité*** : Le paramètre est hérité du dossier parent.
* ***ID du journal de connexion*** : Utilise un numéro d'identification à plusieurs chiffres et lettres.
* ***Nom de l'entrée*** : Utilise automatiquement le nom de l'entrée.
* ***Nom de l'entrée + Date/Heure*** : Utilise automatiquement le nom de l'entrée avec la date et l'heure de l'enregistrement.
* ***Racine (Par défaut)*** : Utilise le nom de l'entrée et la date et l'heure de l'enregistrement.
* ***Personnalisé*** : Personnaliser le nom du fichier.
    * Choisir ***Toujours demander le nom*** pour demander aux utilisateurs de nommer l'enregistrement.
    * Utiliser des variables pour personnaliser le nom du fichier. Cliquer sur le bouton ***Variables*** pour voir plus d'informations sur les variables disponibles pour cette entrée spécifique.
![Enregistrement de session](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6158.png)

Deux fichiers sont sauvegardés après la fermeture de la session. Le fichier .webm est l'enregistrement et le .dat est pour le lecteur {{ fr.RDM }}.

## Interface tout-en-un d'enregistrement de session

Le ***tableau de bord Racine*** dispose d'un onglet dédié qui fournit une interface tout-en-un pour visualiser et télécharger tous les enregistrements pour les sessions prises en charge.

Les enregistrements peuvent également être accessibles en cliquant avec le bouton droit sur l'entrée et en sélectionnant ***Voir*** – ***Enregistrements***.