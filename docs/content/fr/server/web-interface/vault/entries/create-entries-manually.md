```yaml
---
eleventyComputed:
  title: Créer des entrées manuellement
  description: Créer des entrées manuellement et sauvegarder vos données dans {{ fr.DVLS }}.
---
Créer des entrées manuellement et sauvegarder vos données dans {{ fr.DVLS }}.

## Créer une entrée

1. Sélectionner le {{ fr.VLT }} ou {{ fr.UVLT }} et le dossier dans lequel vous souhaitez créer la nouvelle entrée.
1. Cliquer sur le bouton ***Ajouter*** situé dans le ***{{ fr.NPANE }}***.
   ![Ajouter](https://cdnweb.devolutions.net/docs/DVLS6040_2024_1.png)
1. Sélectionner un [type d'entrée](/server/web-interface/vault/entries/entry-type/) dans la liste.
   ![Type d'entrée](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2090.png)
1. Cliquer ***Continuer***.
1. Configurer l'entrée avec toutes les informations requises.
1. Cliquer ***Ajouter*** pour sauvegarder.

## Créer une sous-entrée

Les sous-entrées sont des entrées à part entière, indépendantes, situées sous une entrée "parent" dans l'arborescence. Elles se réfèrent à leur parent avec un ID. Elles sont compatibles avec les pièces jointes, la documentation, l'historique complet, etc.

Il n'est pas possible de créer des sous-entrées via l'interface web de {{ fr.DVLS }}. Vous devez utiliser {{ fr.RDM }} avec une source de données {{ fr.DVLS }}. Voir [Créer une entrée (Windows)](/rdm/windows/commands/edit/entries/creating-new-entry/) ou [Créer une entrée (macOS)](/rdm/mac/commands/edit/entries/creating-new-entry/).
```
