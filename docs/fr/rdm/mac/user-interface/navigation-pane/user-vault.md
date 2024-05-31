---
eleventyComputed:
  title: Mon {{ fr.VLT }}
---
Le {{ fr.VLT }} est un {{ fr.VLT }} centré sur l'utilisateur pour des entrées de tout type. Il permet à chaque utilisateur de créer des entrées auxquelles lui seul peut accéder.

Pour créer une nouvelle entrée dans votre {{ fr.VLT }}, cliquer simplement sur {{ fr.VLT }} dans votre ***{{ fr.NPANE }}*** et créer votre nouvelle entrée directement à partir de là.

{% snippet, "badgeInfo" %}
Le {{ fr.VLT }} est disponible uniquement pour toutes les [Sources de Données Avancées](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/).
{% endsnippet %}

![{{ fr.NPANE }} – {{ fr.VLT_MAJ }}](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip6003.png)

## Une note sur les Identifiants

Les identifiants dans le {{ fr.VLT }} peuvent être utilisés de deux manières :

1. À partir d'une session dans le {{ fr.VLT }}.
1. Lors de l'utilisation de la fonctionnalité [Paramètres Spécifiques à l'Utilisateur](/rdm/mac/commands/edit/setting-overrides/user-specific-settings/)

Ces restrictions peuvent facilement être comprises en gardant à l'esprit que le {{ fr.VLT }} est en fait contenu dans la zone utilisateur de la base de données. Il doit être utilisé depuis lui-même, ou en utilisant notre mécanisme d'extension qui est spécifique à l'utilisateur.
