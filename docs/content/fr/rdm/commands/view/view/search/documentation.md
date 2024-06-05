---
eleventyComputed:
  title: Recherche dans la documentation
  description: Nous pouvons rechercher des pages de documentation liées aux entrées. La Recherche dans la documentation offre un aperçu des pages de documentation, du titre de la page et des détails des entrées associées. L'outil recherche dans le dépôt actuel.
---
Nous pouvons rechercher des pages de documentation liées aux entrées. ***Recherche dans la documentation*** offre un aperçu des pages de documentation, du titre de la page et des détails des entrées associées. L'outil recherche dans le dépôt actuel.

{% snippet, "badgeInfo" %}
***Recherche dans la documentation*** est disponible avec {{ fr.DVLS }} et les sources de données SQL Server.
{% endsnippet %}

{% snippet, "badgeInfo" %}
La fonctionnalité ***Documentation*** est chiffrée uniquement pour la source de données {{ fr.DVLS }}. Si vous utilisez des sources de données telles que SQL Server ou Azure SQL, la fonctionnalité n'est pas chiffrée.
{% endsnippet %}

![Fenêtre de recherche de documentation](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip9001.png)

## Interface utilisateur

![Éléments de recherche de documentation](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip7003.png)

| ÉLÉMENTS                 | DESCRIPTION                                   |
|--------------------------|-----------------------------------------------|
| (1) ***{{ fr.NPANE }}*** | Liste les résultats de recherche par emplacement et entrée.   |
| (2) Zone de contenu         | Affiche un aperçu de la page de documentation. |
| (3) Menu déroulant       | Liste les différents titres de pages. Lorsqu'une entrée contient plusieurs pages de documentation avec le terme recherché, une liste des titres de pages est disponible. |

Il est possible de sélectionner plusieurs entrées à la fois en cliquant avec <kbd>Shift</kbd> ou toutes avec le raccourci <kbd>Ctrl</kbd>+<kbd>A</kbd>. Un clic droit sur une ou plusieurs entrées affiche le même menu et les mêmes options que le ***{{ fr.NPANE }}***.

### Autres fonctions
Le bouton ***Sélectionner dans {{ fr.NPANE }}***, lorsqu'il est pressé, vous amène directement à l'entrée ou au dossier sélectionné dans le ***{{ fr.NPANE }}*** correspondant de {{ fr.VLT }}.

Le bouton ***Réinitialiser*** efface tous vos résultats et options de recherche, vous offrant une page vierge pour une nouvelle recherche.
