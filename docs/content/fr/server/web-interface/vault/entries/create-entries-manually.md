---
eleventyComputed:
  title: Créer des entrées manuellement
  description: Créer des entrées manuellement et enregistrer vos données dans {{ fr.DVLS }}.
---
Créer des entrées manuellement et enregistrer vos données dans {{ fr.DVLS }}.

## Créer une entrée

1. Sélectionner le {{ fr.VLT }} / {{ fr.UVLT }} et le dossier dans lequel vous souhaitez créer la nouvelle entrée.
1. Cliquer sur le bouton ***Plus*** situé dans le ***{{ fr.NPANE }}***.
   {% snippet, "badgeInfo" %}
   En survolant le bouton ***Plus***, des raccourcis pour les types d'entrée les plus courants s'affichent.
   {% endsnippet %}

   ![Plus](https://cdnweb.devolutions.net/docs/fr/server/ServerOp2057.png)
1. Sélectionner un [type d'entrée](/fr/server/web-interface/vault/entries/entry-type/) dans la liste.
   ![Type d'entrée](https://cdnweb.devolutions.net/docs/fr/server/ServerOp2059.png)
1. Cliquer sur ***Continuer***.
1. Configurer l'entrée avec toutes les informations requises.
1. Cliquer sur ***Ajouter*** pour enregistrer.

## Créer une sous entrée

Les sous entrées sont des entrées à part entière, indépendantes, situées sous une entrée « parent » dans l'arborescence. Elles se réfèrent à leur parent par un ID. Elles sont compatibles avec les pièces jointes, la documentation, l'historique complet, etc.

Vous ne pouvez pas créer de sous entrées via l'interface Web de {{ fr.DVLS }}. Vous devez utiliser {{ fr.RDM }} avec une source de données {{ fr.DVLS }}. Voir [Créer une entrée (Windows)](/fr/rdm/windows/commands/edit/entries/creating-new-entry/) ou [Créer une entrée (macOS)](/fr/rdm/mac/commands/edit/entries/creating-new-entry/).
