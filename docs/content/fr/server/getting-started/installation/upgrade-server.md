---
eleventyComputed:
  title: Mise à niveau de {{ fr.DVLS }}
  description: Installer la version appropriée de {{ fr.DVLSCONSOLE }} avant de mettre à niveau l'application web {{ fr.DVLS }}.
  order: 50
---
Installer la version appropriée de {{ fr.DVLSCONSOLE }} avant de mettre à niveau l'application web {{ fr.DVLS }}. Elle est disponible sur notre [page de téléchargement](https://devolutions.net/server/home/download/).

Les étapes suivantes sont destinées à être réalisées sur un serveur unique ou une [topologie](/server/overview/topologies/) de base. Si votre environnement diffère de ces topologies, veuillez [nous contacter](mailto:service@devolutions.net) et nous vous guiderons dans votre mise à niveau de {{ fr.DVLS }}.

## Workflow
Voici une liste de recommandations et d'étapes à suivre avant de procéder à la mise à niveau :
* Nous recommandons fortement de tester le processus de mise à niveau dans un [environnement de test](/server/kb/how-to-articles/create-server-staging-instance/) avant de mettre à niveau votre instance de production. Si vous n'avez pas d'instance de test, nous recommandons un déploiement limité pour s'assurer que le workflow est pris en charge à votre satisfaction avant d'impacter toute votre équipe.
* Les étapes de mise à niveau seront effectuées avec {{ fr.DVLSCONSOLE }}. Vous devrez mettre à niveau votre copie à la dernière version qui correspond à la version cible de {{ fr.DVLS }} que vous préparez à installer. Veuillez suivre attentivement les étapes.
* Si vous avez choisi d'utiliser la Sécurité Intégrée pour la connexion à la base de données, vous devez effectuer la mise à niveau en utilisant un compte utilisateur Windows qui a tous les droits sur la base de données. Assurez-vous que l'identité du pool d'applications IIS et les comptes du planificateur ont suffisamment de privilèges sur la base de données. Après une mise à niveau vers une nouvelle version, de nouvelles permissions sont possiblement requises. Veuillez nous contacter pour la liste des nouvelles permissions.
* Si vous avez configuré le [fournisseur de sécurité](/server/kb/how-to-articles/remove-security-provider/) sur votre {{ fr.DVLS }} actuel (2019.2.9.0 ou antérieur), des opérations spécifiques devront être effectuées avant la mise à niveau. Veuillez [nous contacter](mailto:service@devolutions.net) pour plus de détails.
* Nous recommandons de faire une sauvegarde des Clés de Chiffrement avant toute opération qui pourrait modifier les informations de la base de données ou avant la mise à niveau de {{ fr.DVLS }}. Protégez le fichier de la Clé de Chiffrement dans un endroit sûr pour éviter la perte de données si {{ fr.DVLS }} doit être restauré.

### Phase de préparation

* Assurez-vous que les utilisateurs de l'instance ont le mode hors ligne activé et qu'ils effectuent tous un rafraîchissement complet du cache (<kbd>Ctrl</kbd>+<kbd>F5</kbd>).
* Demandez à votre équipe de passer en mode hors ligne dans {{ fr.RDM }}, leur permettant de travailler pendant que le système est en arrêt.
* Mettez à jour la version maximale de {{ fr.RDM }} dans ***Administration – Paramètres système – Gestion des versions – Version maximale***, si cette option était définie avant la mise à niveau.
* Si un antivirus est déployé sur le serveur, incluez une exception dans sa configuration pour :
    * Le dossier d'installation de {{ fr.DVLSCONSOLE }} : **C:\Program Files (x86)\Devolutions\Devolutions Server Console**.
    * Le dossier de l'application web {{ fr.DVLS }}.

### Phase 1

* Effectuez une sauvegarde complète de la base de données, prenez des précautions contre la suppression de ce fichier de sauvegarde par un plan de maintenance.
* Archivez le contenu du dossier de l'application web contenant l'instance {{ fr.DVLS }}, déplacez-le dans un endroit sûr.
* Installez la version appropriée de {{ fr.DVLSCONSOLE }}. Dans chacun des sous-sujets liés à une version spécifique de {{ fr.DVLS }}, vous trouverez la version du client dont vous avez besoin.
* Exécutez {{ fr.DVLSCONSOLE }} avec des privilèges élevés.

### Phase 2

1. Ouvrir [{{ fr.DVLSCONSOLE }}](/server/management/devolutions-server-console/).
1. Sélectionnez l'instance que vous souhaitez mettre à niveau.
1. Mettez l'instance en ***Mode hors ligne*** avec le bouton ***Passer hors ligne***. Sur une topologie Haute Disponibilité/Équilibrage de charge, toutes les instances doivent être mises en ***Mode hors ligne*** avant de commencer le processus de mise à niveau.
![Serveur – Passer hors ligne](https://cdnweb.devolutions.net/docs/DVLSCONSOLE2004_2024_1.png)
1. Cliquez sur ***Mettre à jour***.
![{{ fr.DVLSCONSOLE }}](https://cdnweb.devolutions.net/docs/DVLSCONSOLE2000_2024_1.png)
1. Sélectionnez la source de mise à jour. Vous pouvez utiliser la dernière version en ligne, qu'elle soit la plus récente ou stable, ou spécifier le chemin vers un fichier ZIP que vous avez téléchargé vous-même. Utilisez cette option pour les versions bêta ou pour les versions antérieures.
![Fichier source de mise à jour](https://cdnweb.devolutions.net/docs/DVLSCONSOLE2001_2024_1.png)
1. Cliquez sur ***Suivant***.
   {% snippet, "badgeWarning" %}
   Si vous effectuez une mise à niveau de la version 2021.2.14 ou antérieure vers la version 2022.1 ou supérieure, vous devrez fournir l'[URI d'accès](/server/kb/knowledge-base/access-uri/) pour atteindre la page web de {{ fr.DVLS }}.
   {% endsnippet %}
1. Revoyez le résumé et cliquez sur ***Mettre à jour*** si vous êtes satisfait.
![Résumé](https://cdnweb.devolutions.net/docs/DVLSCONSOLE2002_2024_1.png)

Le processus va maintenant commencer. Après l'achèvement, un message apparaîtra pour vous informer que l'opération a été réussie.
![Opération réussie](https://cdnweb.devolutions.net/docs/DVLSCONSOLE2003_2024_1.png)

### Phase finale

{% snippet, "shieldNotice" %}
* Le ***dossier de sauvegarde*** contient des informations sur la configuration de l'instance {{ fr.DVLS }} avant la mise à niveau. Après une mise à niveau réussie, vous devez vous assurer que le contenu est soit déplacé dans un endroit sûr, soit supprimé.
* Notre service de support reçoit de plus en plus de demandes d'assistance urgentes à cause d'administrateurs indélicats mettant à niveau leur propre copie de {{ fr.RDM }} et introduisant une mise à jour du schéma pour de nouvelles fonctionnalités. Cela peut empêcher d'autres utilisateurs d'utiliser le système. Nous recommandons fortement de définir à la fois les versions maximale et minimale autorisées à se connecter à votre instance.
* Si vous avez choisi d'utiliser la Sécurité Intégrée pour la connexion à la base de données dans l'onglet [base de données](/server/management/devolutions-server-console/devolutions-server-settings/database/), assurez-vous que l'identité du pool d'applications IIS et les comptes du planificateur ont suffisamment de privilèges sur la base de données.
{% endsnippet %}

* Demandez à un utilisateur de mettre à niveau son poste de travail avec la version de {{ fr.RDM }} prise en charge par la version de {{ fr.DVLS }} et testez la connectivité avec l'instance du serveur.
* Demandez aux ordinateurs exécutant des scripts PowerShell de mettre à jour la version du module {{ fr.PS }} prise en charge par la version de {{ fr.DVLS }} et testez les résultats des scripts.
* Lorsque vous êtes satisfait de vos tests, demandez au reste du personnel de passer à la même version de {{ fr.RDM }}.
* Mettez à jour la version maximale/minimale de {{ fr.RDM }} dans ***Administration – Paramètres système – Gestion des versions***.