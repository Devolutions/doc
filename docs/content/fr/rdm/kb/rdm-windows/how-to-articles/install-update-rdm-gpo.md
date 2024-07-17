---
eleventyComputed:
  title: Déployer ou mettre à jour {{ fr.RDM }} via GPO
  description: Ce guide vous expliquera comment déployer {{ fr.RDM }} en utilisant l'Objet de Stratégie de Groupe (GPO).
---
Ce guide vous expliquera comment déployer et mettre à jour {{ fr.RDM }} en utilisant l'Objet de Stratégie de Groupe (GPO).

## Prérequis

* Environnement Active Directory (AD) avec ***Gestion de Stratégie de Groupe***.
* Accès administratif au contrôleur de domaine.
* [Fichier d'installation MSI de {{ fr.RDM }}](https://devolutions.net/remote-desktop-manager/home/download/). Assurez-vous d'avoir la dernière version si vous effectuez une mise à jour.

### Déplacer l'installateur dans un dossier partagé

1. Créer un dossier partagé sur un emplacement réseau accessible à tous les ordinateurs cibles.
1. Configurer le dossier pour avoir des permissions de lecture pour tous les utilisateurs qui installeront {{ fr.RDM }}.
1. Copier le [fichier d'installation MSI de {{ fr.RDM }}](https://devolutions.net/remote-desktop-manager/home/download/) dans le dossier partagé.
.
### Créer un nouvel objet de stratégie de groupe

1. Sur votre Contrôleur de Domaine, ouvrir la ***Console de Gestion de Stratégie de Groupe (GPMC)***.
1. Cliquer avec le bouton droit sur l'unité organisationnelle (OU) où vous souhaitez déployer {{ fr.RDM }} et sélectionner ***Créer un GPO dans ce domaine, et le lier ici...***.
1. Donner à votre nouveau GPO un nom descriptif, tel que ***Déploiement de {{ fr.RDM }}***.

### Configurer le GPO pour l'installation du logiciel

1. Cliquer avec le bouton droit sur votre GPO nouvellement créé et sélectionner ***Modifier***.
1. Dans l'***Éditeur de Gestion de Stratégie de Groupe***, aller à ***Configuration de l'ordinateur – Stratégies – Paramètres du logiciel – Installation du logiciel***.
1. Cliquer avec le bouton droit sur ***Installation du logiciel***, sélectionner ***Nouveau***, puis ***Package***.
1. Dans la boîte de dialogue ***Ouvrir***, naviguer jusqu'au dossier partagé contenant le [fichier d'installation MSI de {{ fr.RDM }}](https://devolutions.net/remote-desktop-manager/home/download/), le sélectionner et cliquer sur ***Ouvrir***.
1. Sélectionner ***Avancé***.
1. Cliquer sur ***OK***.
1. Cliquer sur l'***onglet Mise à niveau***, et s'assurer que {{ fr.RDM }} est présent par défaut.
1. Sélectionner ***OK***.

Si vous avez précédemment mis à jour {{ fr.RDM }} :

1. Vérifier que tous les packages précédents sont inclus dans la liste.
1. Lors de l'ajout de chaque package, confirmer que l'option ***Le package peut être mis à niveau par-dessus le package existant*** est sélectionnée.
1. Cliquer sur ***OK*** pour fermer la ***boîte de dialogue des propriétés du package***.

### Appliquer le GPO aux ordinateurs cibles
Assurez-vous que le GPO est lié à l'OU correcte contenant les ordinateurs où {{ fr.RDM }} doit être installé. {{ fr.RDM }} sera installé lors du prochain redémarrage des ordinateurs.

### Vérifier l'installation
Une fois les ordinateurs redémarrés, vérifier quelques machines pour confirmer que {{ fr.RDM }} a été installé avec succès. Vous pouvez également utiliser le ***Visualiseur d'événements*** pour vérifier s'il y a des erreurs d'installation.

### Dépannage
Si vous rencontrez des problèmes lors du déploiement, référez-vous aux étapes de dépannage suivantes :

* Vérifier que le dossier partagé et le [fichier d'installation MSI de {{ fr.RDM }}](https://devolutions.net/remote-desktop-manager/home/download/) ont les permissions correctes.
* Vérifier que le GPO est lié à l'OU correcte.
* Vérifier les journaux du Visualiseur d'événements sur les machines clientes pour toute erreur liée à l'installation de {{ fr.RDM }}.