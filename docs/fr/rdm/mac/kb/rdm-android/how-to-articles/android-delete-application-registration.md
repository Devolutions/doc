---
eleventyComputed:
  title: "{{ fr.RDMANDROID }} supprimer l'enregistrement de l'application"
---
Habituellement, lorsque l'application est désinstallée, la configuration est automatiquement réinitialisée. Cependant, si la sauvegarde Google est activée, la configuration est restaurée lorsque l'application est réinstallée.

Suivre ces étapes pour supprimer manuellement la sauvegarde de la configuration :

## Supprimer les sauvegardes

1. Désinstaller {{ fr.RDMANDROID }} sur l'appareil.
1. Aller sur le Google Drive du compte Google associé à l'appareil.
1. Sur la gauche, cliquer sur ***Sauvegardes***.
![!!KB2042](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2042.png)
Il y a une sauvegarde par appareil Android. Le nom de la sauvegarde peut être le code de l'appareil.
1. Faire un clic droit sur la sauvegarde et sélectionner ***Supprimer***.
1. Maintenant que la sauvegarde est supprimée, vous pouvez réinstaller {{ fr.RDM }} sur votre appareil.

## Désactiver la restauration automatique des configurations de l'application

1. Dans les ***Paramètres*** de l'appareil, utiliser la fonction de recherche pour trouver ***Sauvegarde Google***.
1. Dans ***Données d'application***, désactiver le paramètre ***Restauration automatique***.
![!!KB2043](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2043.png)
