---
eleventyComputed:
  title: "{{ fr.NPANE }}"
  description:
---
Le ***{{ fr.NPANE }}*** est l'un des composants principaux de l'interface utilisateur de {{ fr.RDM }}. Il liste toutes les entrées disponibles dans la source de données actuelle et permet de passer à une autre source de données ou {{ fr.VLT }}.
![{{ fr.NPANE }}](https://cdnweb.devolutions.net/docs/RDMW0001_2024_2.png)

| ÉLÉMENT                   | DESCRIPTION                                                             |
|---------------------------|-------------------------------------------------------------------------|
| Sélecteur de source de données      | Permet de passer à une autre source de données configurée.                     |
| Sélecteur de {{ fr.VLT_MAJ }} | Permet de passer à un autre {{ fr.VLT }} configuré dans la source de données. |
| Liste des entrées                | Affiche le contenu de la source de données actuelle, en fonction de l'onglet sélectionné. Il permet de sélectionner des entrées et d'effectuer des actions sur celles-ci. |
| Onglets                      | Permet de passer à différentes vues de la liste des entrées, telles que les ***entrées favorites*** ou les ***sessions ouvertes***. |

## Sélecteur de colonnes
Choisir les colonnes à afficher dans l'affichage en arborescence. Clic droit sur le nom de la colonne dans le ***{{ fr.NPANE }}*** et sélectionner ***Sélecteur de colonnes***.
![Sélecteur de colonnes](https://cdnweb.devolutions.net/docs/RDMW0002_2024_2.png)

{% snippet, "badgeInfo" %}
Des paramètres supplémentaires de l'affichage en arborescence et des informations sont disponibles dans ***Fichier*** – ***Paramètres*** – ***Interface utilisateur*** – ***Vue en arborescence***.
{% endsnippet %}

Pour plus d'informations sur chaque onglet, veuillez consulter les sujets suivants :

* [{{ fr.VLT_MAJ }}](/rdm/windows/commands/view/panels/vault/)
* [{{ fr.UVLT_MAJ }}](/rdm/windows/data-sources/user-vault/)
* [{{ fr.VLT }} système](/rdm/commands/view/panels/system-vault/)
* [Sessions ouvertes](/rdm/windows/commands/view/panels/opened-sessions/)
* [Entrées favorites](/rdm/windows/user-interface/navigation-pane/favorite-entries/)
* [Entrées les plus récemment utilisées](/rdm/windows/user-interface/navigation-pane/most-recently-used-entries/)
* [Compte](/rdm/windows/user-interface/navigation-pane/account/)
