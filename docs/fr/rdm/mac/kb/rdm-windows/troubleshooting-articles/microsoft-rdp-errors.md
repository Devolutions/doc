---
eleventyComputed:
  title: Erreurs Microsoft RDP
---
## Problème 1

Impossible de copier <filename> : Windows ne peut pas trouver ‘%1!|s!’. Vérifier l'orthographe et essayer à nouveau, ou essayer de rechercher l'élément en cliquant sur le bouton démarrer et en cliquant sur rechercher.

### Solution

Il s'agit d'un bug dans le client Bureau à distance de Microsoft. La solution de contournement consiste à activer la ***Carte à puce*** dans Windows, même si elle n'est pas requise pour la connexion.

## Problème 2

Zones d'écran non réactives dans les sessions intégrées

### Solution

Cela se produit le plus souvent sur les systèmes utilisant un paramètre DPI supérieur à 100 %. Pour désactiver la mise à l'échelle dans {{ fr.RDM }}, vous devez ajuster les paramètres de compatibilité sur le raccourci Windows pour {{ fr.RDM }}.

1. Faire un clic droit sur le raccourci vers {{ fr.RDM }}.
1. Sélectionner Propriétés.
1. Aller à l'onglet Compatibilité.
1. Cocher Désactiver la mise à l'échelle de l'affichage pour les paramètres de haute DPI.
![!!KB4072](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4072.png)
## Problème 3

J'ai plusieurs sessions sur le même ordinateur avec différentes informations d'identification, mais il utilise toujours la dernière que j'ai entrée.

### Solution

Ce problème provient du fait que le dépôt d'informations d'identification Windows ne contient qu'une entrée par utilisateur Windows pour un ordinateur distant. Si vous utilisez le mode d'affichage Intégré (en onglets) et stockez le mot de passe dans la base de données, vous pourrez contourner cette limitation.

## Problème 4

Les raccourcis Windows sont exécutés dans la session mais toujours sur mon ordinateur.

### Solution

Vous devez configurer le paramètre ***Clavier*** dans l'onglet ***Ressources locales*** des paramètres de session. Vous pouvez sélectionner ***Sur l'ordinateur distant*** ou En ***plein écran uniquement***.

![!!KB4073](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4073.png)

## Problème 5

Le copier/coller entre une session à distance et mon ordinateur local a cessé de fonctionner.

### Solution

Ce problème survient lorsqu'un programme appelé RDPClip devient instable. Vous pouvez tuer son processus et lancer une nouvelle instance.

1. Sur le système affecté, charger le gestionnaire de tâches (clic droit dans la barre des tâches et sélectionner ***Gestionnaire de tâches***).
1. Aller à l'onglet ***Processus***.
1. Sélectionner rdpclip.exe.
1. Cliquer sur ***Fin de tâche***.
1. Aller à l'onglet ***Application***.
1. Cliquer sur ***Nouveau processus***.
1. Taper rdpclip.
1. Cliquer sur ***Ok***.

## Problème 6

Les opérations de copier/coller à l'intérieur de l'hôte distant sont extrêmement lentes.

### Solution

Nous avons isolé le problème aux ***Ports série*** étant activés. Désactiver le partage de ***Port série*** et voir si la performance s'améliore.
