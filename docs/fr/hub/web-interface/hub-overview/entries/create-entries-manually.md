---
eleventyComputed:
  title: Créer des entrées manuellement
  description: Créer des entrées manuellement et enregistrer vos données dans {{ fr.HUBB }}.
---
Créer des entrées manuellement et enregistrer vos données dans {{ fr.HUBB }}.

## Créer une entrée

1. Sélectionner le {{ fr.VLT }} / {{ fr.UVLT }} et le dossier dans lequel vous souhaitez créer la nouvelle entrée.
1. Cliquer sur le bouton ***Ajouter*** situé dans le ***{{ fr.NPANE }}***.
1. Sélectionner un [type d'entrée](/fr/hub/web-interface/hub-overview/entries/entry-type/) dans la liste.
1. Cliquer sur ***Continuer***.
1. Configurer l'entrée avec toutes les informations requises.
1. Cliquer sur ***Ajouter*** pour enregistrer.

## Créer une sous entrée

Les sous entrées sont des entrées à part entière, indépendantes, situées sous une entrée « parent » dans l'arborescence. Elles se réfèrent à leur parent par un ID. Elles sont compatibles avec les pièces jointes, la documentation, l'historique complet, etc.

* Dans l'interface Web de {{ fr.DHUB }}, créez une entrée normale en suivant les instructions ci-dessus, puis glissez-déposez l'entrée sur une autre.
* Dans {{ fr.RDM }} avec une source de données {{ fr.DHUB }}, voir [Créer une entrée (Windows)](/fr/rdm/windows/commands/edit/entries/creating-new-entry/) ou [Créer une entrée ({{ fr.MAC}})](/fr/rdm/windows/commands/edit/entries/creating-new-entry/).

{% snippet icon.badgeInfo %}
Vous ne pouvez pas créer une sous entrée sous une autre sous entrée.
{% endsnippet %}
