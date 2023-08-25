---
eleventyComputed:
  title: Mise à niveau de {{ fr.DVLS }}
  order: 50
---
{% snippet icon.badgeInfo %} 
Veuillez installer la {{ fr.DVLSCONSOLE }} selon la version souhaité disponible sur la [page de téléchargement](https://devolutions.net/fr/server/home/download/) avant de mettre à jour l'instance Web de {{ fr.DVLS }}. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Depuis la version 2019.x de {{ fr.DVLS }}, la plupart fonctionnalités sont gérables seulement à partir de l'interface Web. Veuillez consulter la section [Paramètres de {{ fr.DVLS }}](/fr/server/web-interface/administration/configuration/server-settings/). 
{% endsnippet %}
 
Il est fortement recommandé, comme étant une méthode efficace, de déployer une nouvelle instance de {{ fr.DVLS }} dans un environnement de test afin de vérifier sa stabilité avant de déployer une nouvelle version dans votre environnement de production. Si vous ne possédez pas un tel environnement de test, alors nous recommandons un déploiement limité pour garantir une implémentation graduelle satisfaisante avant d'impacter entièrement votre organisation.  

{% snippet icon.badgeNotice %} 
Les étapes suivantes s'adressent à une installation simple ou la [topologie](/fr/server/overview/topologies/) de base. Si votre environnement diffère de ces topologies, veuillez nous contacter et nous vous guiderons sur comment mettre à {{ fr.DVLS }}. 
{% endsnippet %}
 
## Étapes 

{% snippet icon.badgeCaution %} 
Nous vous recommandons fortement de tester le processus de mise à niveau dans un environnement intermédiaire/de test avant de mettre à niveau votre instance de production. 
{% endsnippet %}
 
{% snippet icon.badgeCaution %} 
Les étapes de mise à niveau seront effectuées avec la {{ fr.DVLSCONSOLE }}. Vous devrez mettre à niveau votre copie vers la dernière version correspondant à la version cible de {{ fr.DVLS }} que vous vous préparez à installer. Veuillez suivre attentivement les étapes. 
{% endsnippet %}
 
{% snippet icon.badgeCaution %} 
Si vous avez choisi d'utiliser la Sécurité intégrée pour vous connecter à la base de données, vous devez effectuer la mise à niveau à l'aide d'un compte d'utilisateur Windows disposant de tous les droits sur la base de données. Assurez-vous que les comptes du Planificateur et du pool d'application IIS disposent de privilèges suffisants sur la base de données. Après une mise à niveau vers une nouvelle version, de nouvelles permissions sont souvent requises. Veuillez nous contacter à propos de la nouvelle liste de permissions. 
{% endsnippet %}
 
{% snippet icon.badgeCaution %} 
Si vous avez défini le [Fournisseur de sécurité](/fr/rdm/windows/commands/administration/settings/security-providers/) sur votre {{ fr.DVLS }} actuel, des opérations spécifiques devront être effectuées avant la mise à niveau. Pour plus de détails, veuillez nous contacter. 
{% endsnippet %}
 
{% snippet icon.shieldNotice %} 
Nous vous recommandons de faire une sauvegarde des Clés de chiffrement avant toute opération susceptible de modifier les informations de la base de données ou avant la mise à niveau de {{ fr.DVLS }}. Protéger la clé de chiffrement dans un coffre pour éviter la perte de données si {{ fr.DVLS }} doit être restauré. 
{% endsnippet %}
 
### Phase de préparation 

* Assurez-vous que les utilisateurs de l'instance ont activé le mode hors connexion et qu'ils effectuent tous une actualisation complète de la cache (Ctrl+F5).  
* Demander à votre équipe de passer en mode hors ligne dans {{ fr.RDM }}, ce qui lui permet de travailler pendant que le système est hors service.  
* Mettre à jour la version maximale de {{ fr.RDM }} dans ***Administration – Paramètres du système – Gestion de version – Version maximale***, si cette option a été définie avant la mise à niveau.  

### Phase 1 

* Effectuer une sauvegarde complète de la base de données, prenez des précautions contre la suppression de ce fichier de sauvegarde par un plan de maintenance.  
* Archiver le contenu du dossier de l'application Web contenant l'instance {{ fr.DVLS }}, déplacez-le vers un endroit sûr.  
* Installer la version appropriée de la {{ fr.DVLSCONSOLE }}. Dans chacune des sous-rubriques liées à une version spécifique de {{ fr.DVLS }}, vous trouverez la version du client dont vous avez besoin.  
* La {{ fr.DVLSCONSOLE }} doit être exécuté avec des privilèges élevés.  

### Phase 2 

1. Ouvrir la [{{ fr.DVLSCONSOLE }}](/fr/server/management/devolutions-server-console/). 
1. Sélectionner l'instance que vous souhaitez mettre à niveau. 
1. Mettre l'instance en Mode hors ligne avec le bouton ***Mettre hors-ligne***. Sur une topologie à haute disponibilité/équilibrage de charge, toutes les instances doivent être définies en mode hors ligne avant de démarrer le processus de mise à niveau. 
1. Cliquer sur le bouton ***Mettre à jour***.  
![{{ fr.DVLSCONSOLE }}](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp8064.png)  
1. Sélectionner la source de mise à niveau. Vous pouvez utiliser la dernière version disponible en ligne ou spécifier le chemin d'accès à un fichier zip que vous avez téléchargé vous-même. Utilisez-le pour les versions bêta ou pour les versions antérieures.  
![{{ fr.DVLS }} Upgrade Wizard](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp8066.png)  
1. Appuyer sur ***Suivant***. 
1. Consulter le résumé et appuyer sur ***Mettre à niveau*** si vous êtes satisfait.  
![!!ServerOp4016.png](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp4016.png) 

### Phase finale 

{% snippet icon.shieldNotice %} 
Le dossier de sauvegarde contient des informations sur la configuration de l'instance {{ fr.DVLS }} avant la mise à niveau. Après une mise à niveau réussie, vous devez vous assurer que le contenu est soit déplacé vers un endroit sûr, soit supprimé. 
{% endsnippet %}
 
{% snippet icon.badgeCaution %} 
Notre service d'assistance reçoit de plus en plus de demandes d'assistance urgentes en raison d'un administrateur non autorisé qui a mis à niveau sa propre copie de {{ fr.RDM }} et introduit une mise à jour de schéma pour une nouvelle fonctionnalité. Cela peut empêcher d'autres utilisateurs d'utiliser le système. Nous vous recommandons vivement de définir les versions Maximale et Minimale autorisées à se connecter à votre instance. 
{% endsnippet %}
 
{% snippet icon.badgeCaution %} 
Si vous avez sélectionné l'option Sécurité intégrée pour la communication vers la base de données dans l'onglet ***Base de données***, veuillez vous assurer que les comptes configurés dans le pool d'application IIS et le planificateur possèdent les droits requis sur la base de données suite à la mise à jour. 
{% endsnippet %}
 
* Demander à un utilisateur de mettre à niveau son poste de travail avec la version de {{ fr.RDM }} prise en charge par la version {{ fr.DVLS }} et de tester la connectivité avec l'instance de serveur.  
* Lorsque vous êtes satisfait de vos tests, demander au reste du personnel de passer à la même version de {{ fr.RDM }}.  
* Mettre à jour la version maximale/minimale de {{ fr.RDM }} dans ***Administration – Paramètres du système – Gestion de version***.  
