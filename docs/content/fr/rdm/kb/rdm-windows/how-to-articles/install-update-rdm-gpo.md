---
eleventyComputed:
  title: Déployer ou mettre à jour {{ fr.RDM }} via GPO
  description: Ce guide vous expliquera le processus de déploiement de {{ fr.RDM }} en utilisant l'Objet Stratégie de Groupe (GPO).
---
Ce guide vous expliquera le processus de déploiement et de mise à jour de {{ fr.RDM }} en utilisant l'Objet Stratégie de Groupe (GPO).

## Prérequis

* Environnement Active Directory (AD) avec ***Gestion de Stratégie de Groupe***.
* Accès administratif au contrôleur de domaine.
* [Fichier d'installation MSI de {{ fr.RDM }}](https://devolutions.net/remote-desktop-manager/home/download/). Assurez-vous d'avoir la dernière version si vous effectuez une mise à jour.

## Déployer Remote Desktop Manager

### Déplacer l'installateur vers un dossier partagé

1. Créer un dossier partagé sur un emplacement réseau accessible à tous les ordinateurs cibles.
1. Configurer le dossier pour avoir des permissions de lecture pour tous les utilisateurs qui installeront {{ fr.RDM }}.
1. Copier le [fichier d'installation MSI de {{ fr.RDM }}](https://devolutions.net/remote-desktop-manager/home/download/) dans le dossier partagé.

### Créer un nouvel objet stratégie de groupe

1. Sur votre Contrôleur de Domaine, ouvrir la ***Console de Gestion de Stratégie de Groupe (GPMC)***.
1. Cliquer avec le bouton droit sur l'unité organisationnelle (OU) où vous souhaitez déployer {{ fr.RDM }} et sélectionner ***Créer un GPO dans ce domaine, et le lier ici...***.
1. Donner à votre nouveau GPO un nom descriptif, tel que ***Déploiement de {{ fr.RDM }}***.

### Configurer le GPO pour l'installation du logiciel

1. Cliquer avec le bouton droit sur votre GPO nouvellement créé et sélectionner ***Modifier***.
1. Dans l'***Éditeur de Gestion de Stratégie de Groupe***, aller à ***Configuration de l'ordinateur – Stratégies – Paramètres de logiciels – Installation de logiciels***.
1. Cliquer avec le bouton droit sur ***Installation de logiciels***, sélectionner ***Nouveau***, puis ***Package***.
1. Dans la boîte de dialogue ***Ouvrir***, naviguer vers le dossier partagé contenant le [fichier d'installation MSI de {{ fr.RDM }}](https://devolutions.net/remote-desktop-manager/home/download/), le sélectionner et cliquer sur ***Ouvrir***.
1. Choisir la méthode de déploiement ***Assigné*** et cliquer sur ***OK***.

La configuration du GPO est complète. Une fois le déploiement du GPO dans le domaine terminé, {{ fr.RDM }} sera automatiquement installé après chaque redémarrage de l'ordinateur.

## Mettre à jour {{ fr.RDM }}

La mise à jour d'une installation existante de {{ fr.RDM }} suit un processus similaire avec quelques considérations supplémentaires :

1. Vérifier que toutes les versions précédemment déployées de {{ fr.RDM }} sont listées dans le GPO.
1. Comme pour le déploiement initial, ajouter le nouveau package MSI au dossier réseau partagé.
1. Sous ***Installation de logiciels***, cliquer avec le bouton droit sur la version précédente de {{ fr.RDM }}, et sélectionner ***Toutes les tâches***,
1. Cliquer sur ***Mettre à niveau***.
1. Choisir le nouveau package MSI et le configurer pour mettre à niveau l'installation existante.
1. Assurer que l'option ***Le package peut mettre à niveau le package existant*** est sélectionnée. Cela permettra une transition facile de l'ancienne version à la nouvelle.

{% snippet, "badgeInfo" %}
Si vous avez précédemment mis à jour {{ fr.RDM }} :
1. Vérifier que tous les packages antérieurs sont inclus dans la liste.
1. Lors de l'ajout de chaque package, confirmer que l'option ***Le package peut mettre à niveau le package existant*** est sélectionnée.
1. Cliquer sur ***OK*** pour fermer la ***boîte de dialogue des propriétés du package***.
{% endsnippet %}

### Dépannage
Si vous rencontrez des problèmes lors du déploiement, référez-vous aux étapes de dépannage suivantes :

* Vérifier que le dossier partagé et le [fichier d'installation MSI de {{ fr.RDM }}](https://devolutions.net/remote-desktop-manager/home/download/) ont les permissions correctes.
* Vérifier que le GPO est lié à l'OU correcte.
* Vérifier les ***journaux de l'Observateur d'événements*** sur les machines clientes pour toute erreur liée à l'installation et la mise à jour de {{ fr.RDM }}.