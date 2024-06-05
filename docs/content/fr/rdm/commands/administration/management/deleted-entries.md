---
eleventyComputed:
  title: Entrées supprimées
  description: Les Entrées Supprimées généreront une liste contenant toutes les entrées précédemment supprimées de votre source de données.
---
L'option ***Administration – Entrées Supprimées*** vous permet de voir les entrées supprimées ainsi que de les restaurer.

{% snippet, "badgeInfo" %}
Cette fonctionnalité nécessite une [Source de Données Avancée](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/).
{% endsnippet %}

{% snippet, "badgeInfo" %}
Les administrateurs peuvent supprimer définitivement certaines ou toutes les entrées supprimées.
{% endsnippet %}

## Paramètres

### Gérer les entrées supprimées

Les ***Entrées Supprimées*** généreront une liste contenant toutes les entrées précédemment supprimées de votre source de données. Vous pouvez restaurer une entrée, ce qui signifie qu'elle redeviendra une entrée active et sera affichée dans votre source de données. Vous pouvez également choisir de supprimer définitivement vos entrées, une fois que vous avez supprimé définitivement vos entrées, vous ne pourrez plus les restaurer par la suite.
![Entrées Supprimées](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6224.png)

| OPTION       | DESCRIPTION                                   |
|--------------|-----------------------------------------------|
| Supprimer    | Supprimer définitivement l'entrée sélectionnée.|
| Restaurer Entrée| Utiliser ce bouton pour restaurer une entrée.|
| Tout Supprimer| Supprimer définitivement toutes les entrées supprimées.|

{% snippet, "badgeNotice" %}
Les entrées supprimées peuvent être restaurées tant que le [Fournisseur de Sécurité](/rdm/commands/administration/security/security-providers/) n'a pas été changé depuis l'action de suppression.
{% endsnippet %}

### Exporter la liste des entrées supprimées

Vous pouvez cliquer avec le bouton droit sur une ou plusieurs lignes pour les exporter au format CSV, HTML ou XML.
