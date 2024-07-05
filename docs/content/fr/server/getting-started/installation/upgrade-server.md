---
eleventyComputed:
  title: Mise à niveau de {{ fr.DVLS }}
  description: Installer la version appropriée de {{ fr.DVLSCONSOLE }} avant de mettre à niveau l'application web {{ fr.DVLS }}
  order: 50
---
Installer la version appropriée de {{ fr.DVLSCONSOLE }} avant de mettre à niveau l'application web {{ fr.DVLS }}. Elle est disponible sur la [page de téléchargement](https://devolutions.net/server/home/download/).

Les étapes suivantes sont destinées à être réalisées sur un seul serveur ou une [topologie](/server/overview/topologies/) de base. Si votre environnement diffère de ces topologies, veuillez [nous contacter](mailto:service@devolutions.net) et nous vous guiderons dans votre mise à niveau de {{ fr.DVLS }}.

## Flux de travail
Voici une liste de recommandations et d'étapes à suivre avant de procéder à la mise à niveau :
* Tester le processus de mise à niveau dans un [environnement de test](/server/kb/how-to-articles/create-server-staging-instance/) avant de mettre à niveau votre instance de production. Si vous n'avez pas d'instance de test, nous recommandons un déploiement limité pour s'assurer que le flux de travail est pris en charge à votre satisfaction avant d'impacter toute votre équipe.
* Les étapes de mise à niveau seront effectuées avec {{ fr.DVLSCONSOLE }}. Vous devrez mettre à niveau votre copie à la dernière version qui correspond à la version cible de {{ fr.DVLS }} que vous vous apprêtez à installer. Veuillez suivre les étapes attentivement.
* Si vous avez choisi d'utiliser la Sécurité Intégrée pour la connexion à la base de données, vous devez effectuer la mise à niveau en utilisant un compte utilisateur Windows qui a tous les droits sur la base de données. Assurez-vous que l'identité du pool d'applications IIS et les comptes de l'ordonnanceur ont suffisamment de privilèges sur la base de données. Après une mise à niveau vers une nouvelle version, de nouvelles permissions sont possiblement requises. Veuillez nous contacter pour la liste des nouvelles permissions.
* Si vous avez configuré le [fournisseur de sécurité](/rdm/commands/administration/security/security-providers/) sur votre {{ fr.DVLS }} actuel, des opérations spécifiques devront être effectuées avant la mise à niveau. Veuillez [nous contacter](mailto:service@devolutions.net) pour plus de détails.
* Nous recommandons de faire une sauvegarde des Clés de Chiffrement avant toute opération pouvant modifier les informations de la base de données ou avant la mise à niveau de {{ fr.DVLS }}. Protéger le fichier de Clé de Chiffrement dans un endroit sûr pour éviter la perte de données si {{ fr.DVLS }} doit être restauré.

### Phase de préparation

* Assurer que les utilisateurs de l'instance ont le mode hors ligne activé et qu'ils effectuent tous un rafraîchissement complet du cache (<kbd>Ctrl</kbd>+<kbd>F5</kbd>).
* Faire basculer votre équipe en mode hors ligne dans {{ fr.RDM }}, leur permettant de travailler pendant que le système est indisponible.
* Mettre à jour la version maximale de {{ fr.RDM }} dans ***Administration – Paramètres du système – Gestion des versions – Version maximale***, si cette option était configurée avant la mise à niveau.
* Si un antivirus est déployé sur le serveur, inclure une exception dans sa configuration pour :
    * Le dossier d'installation de {{ fr.DVLSCONSOLE }} : **C:\Program Files (x86)\Devolutions\Devolutions Server Console**.
    * Le dossier de l'application web {{ fr.DVLS }}.

### Phase 1

* Effectuer une sauvegarde complète de la base de données, prendre des précautions contre la suppression de ce fichier de sauvegarde par un plan de maintenance.
* Archiver le contenu du dossier de l'application web contenant l'instance {{ fr.DVLS }}, le déplacer dans un endroit sûr.
* Installer la version appropriée de {{ fr.DVLSCONSOLE }}. Dans chacun des sous-sujets liés à une version spécifique de {{ fr.DVLS }}, vous trouverez la version du client dont vous avez besoin.
* {{ fr.DVLSCONSOLE }} doit être exécuté avec des privilèges élevés.

### Phase 2

1. Ouvrir [{{ fr.DVLSCONSOLE }}](/server/management/devolutions-server-console/).
1. Sélectionner l'instance que vous souhaitez mettre à niveau.
1. Mettre l'instance en ***Mode Hors Ligne*** avec le bouton ***Passer Hors Ligne***. Sur une topologie Haute Disponibilité/Équilibrage de Charge, toutes les instances doivent être mises en mode Hors Ligne avant de commencer le processus de mise à niveau.
![Serveur – Passer hors ligne](https://cdnweb.devolutions.net/docs/DVLSCONSOLE2004_2024_1.png)
1. Cliquer sur ***Mettre à jour***.
![{{ fr.DVLSCONSOLE }}](https://cdnweb.devolutions.net/docs/DVLSCONSOLE2000_2024_1.png)
1. Sélectionner la source de mise à jour. Vous pouvez soit utiliser la dernière version stable disponible en ligne, soit spécifier le chemin vers un fichier ZIP que vous avez téléchargé vous-même. Utiliser cela pour les versions bêta ou pour les versions antérieures.
![Sélectionner le fichier source de mise à jour](https://cdnweb.devolutions.net/docs/DVLSCONSOLE2001_2024_1.png)
1. Cliquer sur ***Suivant***.
   {% snippet, "badgeWarning" %}
   Si vous effectuez une mise à niveau de la version 2021.2.14 ou antérieure vers la version 2022.1 ou supérieure, vous devrez fournir l'[URI d'accès](/server/kb/knowledge-base/access-uri/) pour atteindre la page web {{ fr.DVLS }}.
   {% endsnippet %}
1. Examiner le résumé et cliquer sur ***Mettre à jour*** si vous êtes satisfait.
![Résumé](https://cdnweb.devolutions.net/docs/DVLSCONSOLE2002_2024_1.png)

Le processus va maintenant commencer. Après achèvement, un message apparaîtra pour vous informer que l'opération a été réussie.
![Opération réussie](https://cdnweb.devolutions.net/docs/DVLSCONSOLE2003_2024_1.png)

### Phase finale

{% snippet, "shieldNotice" %}
* Le ***Dossier de sauvegarde*** contient des informations sur la configuration de l'instance {{ fr.DVLS }} avant la mise à niveau. Après une mise à niveau réussie, vous devez vous assurer que le contenu est soit déplacé dans un endroit sûr, soit supprimé.
* Notre département de support reçoit de plus en plus de demandes d'assistance urgentes à cause d'un administrateur indélicat mettant à niveau sa propre copie de {{ fr.RDM }} et introduisant une mise à jour de schéma pour une nouvelle fonctionnalité. Cela peut empêcher d'autres utilisateurs d'utiliser le système. Nous recommandons fortement de définir à la fois les versions Maximale et Minimale autorisées à se connecter à votre instance.
* Si vous avez choisi d'utiliser la Sécurité Intégrée pour la connexion à la base de données dans l'onglet [Base de données](/server/management/devolutions-server-console/devolutions-server-settings/database/), assurez-vous que l'identité du pool d'applications IIS et les comptes de l'ordonnanceur ont suffisamment de privilèges sur la base de données.
{% endsnippet %}

* Faire en sorte qu'un utilisateur mette à niveau son poste de travail avec la version de {{ fr.RDM }} prise en charge par la version de {{ fr.DVLS }} et tester la connectivité avec l'instance du serveur.
* Faire en sorte que les ordinateurs exécutant des scripts PowerShell mettent à jour la version du module {{ fr.PS }} prise en charge par la version de {{ fr.DVLS }} et tester les résultats des scripts.
* Lorsque vous êtes satisfait de vos tests, faire en sorte que le reste du personnel passe à la même version de {{ fr.RDM }}.
* Mettre à jour la version Maximale/Minimale de {{ fr.RDM }} dans ***Administration – Paramètres du système – Gestion des versions***.
