---
eleventyComputed:
  title: Sécurité par défaut pour les entrées
---
Dans ***Administration – Paramètres – Paramètres {{ fr.VLT_MAJ }}***, naviguer vers l'onglet ***Permissions***. Sous ***Permissions héritées***, changer la liste déroulante ***Permission*** pour le paramètre désiré :

* ***Par défaut (Hérité)*** : Permet aux utilisateurs et aux rôles qui sont assignés à un {{ fr.VLT }} de voir le contenu de ce {{ fr.VLT }}, mais ce qu'ils peuvent en faire dépend de la manière dont les permissions ont été définies au niveau de l'utilisateur.
* ***Personnalisé*** : Permet de sélectionner des utilisateurs spécifiques et des groupes d'utilisateurs pour chaque permission.
* ***Jamais*** : Refuse tout accès à tous les utilisateurs, même s'ils ont été autorisés à accéder au {{ fr.VLT }}. Cela peut être utilisé pour définir les permissions au niveau du dossier ou de l'entrée, par exemple.
![Paramètres {{ fr.VLT_MAJ }} – Permissions](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11392.png)

Pour confirmer le changement, éditer une entrée sous le {{ fr.VLT }} et naviguer vers la section ***Sécurité – Permissions***. Toutes les permissions définies sur ***Par défaut*** héritent de la valeur des ***Permissions Système*** ou de l'utilisateur. Les valeurs héritées sont affichées à côté des permissions.
