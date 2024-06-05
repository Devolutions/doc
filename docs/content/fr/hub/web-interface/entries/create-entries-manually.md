---
eleventyComputed:
  title: Créer des entrées manuellement
  description: Créer des entrées manuellement et sauvegarder vos données dans {{ fr.DHUBB }}.
---
Créer des entrées manuellement et sauvegarder vos données dans {{ fr.DHUBB }}.

## Créer une entrée

1. Sélectionner le {{ fr.VLT }} / {{ fr.UVLT }} et le dossier dans lequel vous souhaitez créer la nouvelle entrée.
1. Cliquer sur le bouton ***Ajouter*** situé dans le ***{{ fr.NPANE }}***.
   ![Ajouter](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2285.png)
1. Sélectionner un [type d'entrée](/hub/web-interface/entries/entry-type/) dans la liste.
   ![Type d'entrée](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2286.png)
1. Cliquer ***Continuer***.
1. Configurer l'entrée avec toutes les informations requises.
1. Cliquer ***Ajouter*** pour sauvegarder.

## Créer une sous-entrée

Les sous-entrées sont des entrées à part entière, indépendantes, situées sous une entrée "parente" dans la vue arborescente. Elles se réfèrent à leur parent avec un ID. Elles sont compatibles avec les pièces jointes, la documentation, l'historique complet, etc.

* Dans l'interface web {{ fr.DHUB }}, créer une entrée régulière en suivant les instructions ci-dessus, puis glisser-déposer l'entrée sur une autre.
* Dans {{ fr.RDM }} avec une source de données {{ fr.DHUB }}, voir [Créer une entrée (Windows)](/rdm/windows/commands/edit/entries/creating-new-entry/) ou [Créer une entrée (macOS)](/rdm/mac/commands/edit/entries/creating-new-entry/).

{% snippet, "badgeInfo" %}
Vous ne pouvez pas créer une sous-entrée sous une autre sous-entrée.
{% endsnippet %}
