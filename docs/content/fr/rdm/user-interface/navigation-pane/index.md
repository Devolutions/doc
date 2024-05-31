---
eleventyComputed:
  title: "{{ fr.NPANE }}"
  description:
---
Le ***{{ fr.NPANE }}*** est l'un des composants principaux de l'interface utilisateur de {{ fr.RDM }}. Il liste toutes les entrées disponibles dans la source de données actuelle et permet de passer à une autre source de données ou {{ fr.VLT }}.
![{{ fr.NPANE }}](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11204.png)

| ÉLÉMENT                | DESCRIPTION |
|------------------------|-------------|
| Sélecteur de source de données   | Permet de passer à une autre source de données configurée.                                                                                     |
| Liste des entrées             | Affiche le contenu de la source de données actuelle, en fonction de l'onglet sélectionné. Il permet de sélectionner des entrées et d'effectuer des actions sur celles-ci. |
| Sélecteur de {{ fr.VLT_MAJ }} | Permet de passer à un autre {{ fr.VLT }} configuré dans la source de données.                                                              |
| Onglets                   | Permet de passer à différentes vues de la liste des entrées, telles que les ***Entrées favorites*** ou les ***Sessions ouvertes***.                 |

### Sélecteur de colonnes

Choisir les colonnes à afficher dans la vue en arborescence. Clic droit sur le nom de la colonne dans le ***{{ fr.NPANE }}*** et sélectionner ***Sélecteur de colonnes***.
![{{ fr.NPANE }} - Sélecteur de colonnes](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11201.png)

{% snippet, "badgeInfo" %}
Des paramètres supplémentaires de la vue en arborescence et des informations sont disponibles dans ***Fichier – Paramètres – Vue en arborescence***.
{% endsnippet %}

Pour plus d'informations sur chaque onglet, veuillez consulter les sujets suivants :

* [{{ fr.VLT_MAJ }}](/rdm/windows/commands/view/panels/vault/)
* [{{ fr.UVLT_MAJ }}](/rdm/windows/data-sources/user-vault/)
* [Sessions Ouvertes](/rdm/windows/commands/view/panels/opened-sessions/)
* [Entrées Favorites](/rdm/windows/user-interface/navigation-pane/favorite-entries/)
* [Entrées les Plus Récemment Utilisées](/rdm/windows/user-interface/navigation-pane/most-recently-used-entries/)
* [Compte](/rdm/windows/user-interface/navigation-pane/account/)
