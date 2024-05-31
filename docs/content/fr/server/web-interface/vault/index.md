---
eleventyComputed:
  title: "{{ fr.VLT_MAJ }}"
  description: Les {{ fr.VLT }}s permettent aux utilisateurs de [Créer des Entrées](/server/web-interface/vault/entries/create-entries-manually/) et de gérer le contenu de la source de données.
  order: 60
---
Les ***{{ fr.VLT }}s*** permettent aux utilisateurs de [Créer des Entrées](/server/web-interface/vault/entries/create-entries-manually/) et de gérer le contenu de la source de données. Les {{ fr.VLT_MAJ }}s sont des conteneurs qui divisent la source de données en plusieurs compartiments.

Nous recommandons d'utiliser les {{ fr.VLT }}s pour une meilleure organisation et sécurité. Les {{ fr.VLT_MAJ }}s aident également à la performance car ils limitent le nombre d'entrées qui se chargent en une fois.

{% snippet, "badgeHelp" %}
Pour accéder à la gestion des {{ fr.VLT }}s, naviguer vers [Administration – {{ fr.VLT_MAJ }}s](/server/web-interface/administration/security-management/vaults/).
{% endsnippet %}

Les ***{{ fr.VLT_MAJ }}s*** sont divisés en deux parties :

* Le ***{{ fr.NPANE }}*** (à gauche) liste les entrées disponibles dans la source de données ({{ fr.VLT }} actuel).
* La ***Zone de Contenu*** (à droite) affiche les informations concernant l'entrée sélectionnée.

![{{ fr.VLT_MAJ }}s](https://cdnweb.devolutions.net/docs/DVLS6032_2024_1.png)
