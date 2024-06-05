---
eleventyComputed:
  title: Exporter et importer des {{ fr.VLT }}s
---
Il est possible d'exporter et d'importer plusieurs {{ fr.VLT }}s d'un type de source de données avancée à un autre.

{% snippet, "badgeCaution" %}
Si vous avez des ***Utilisateurs*** et qu'ils remplacent les propriétés des entrées avec des ***Paramètres Spécifiques Utilisateur***, ils devront exporter et importer leur ***Liste de Paramètres Spécifiques Utilisateur***. Voir [Exporter et importer les Paramètres Spécifiques Utilisateur](/rdm/mac/kb/rdm-windows/how-to-articles/export-import-user-specific-settings/).
{% endsnippet %}

{% snippet, "badgeCaution" %}
Des droits d'administration sont requis pour exporter et importer plusieurs {{ fr.VLT }}s.
{% endsnippet %}

## Exporter

1. Dans le ***{{ fr.NPANE }}*** de {{ fr.RDM }}, sélectionner votre source de données.
1. Aller à ***Administration - Exporter Tous les {{ fr.VLT }}s (.rdx)***.
1. Sélectionner les {{ fr.VLT }}s dans la liste proposée et cliquer sur ***OK***.
1. Pour une migration typique, vous devriez cocher les options ***Inclure les identifiants, Inclure les pièces jointes et documents*** et ***Chiffrer avec la clé maître***.
{% snippet, "badgeInfo" %}
Par défaut, les identifiants ne sont PAS inclus. Il est crucial de cocher l'option ***Inclure les identifiants*** pour que les données exportées incluent les identifiants.
{% endsnippet %}
{% snippet, "shieldWarning" %}
Spécifier une clé maître chiffrera tout le contenu du fichier ***.rdx*** pour protéger son contenu. C'est fortement recommandé comme mesure de sauvegarde, mais la clé est absolument nécessaire pour le déchiffrement. Conservez cela également dans un dispositif de stockage séparé pour la sauvegarde.
{% endsnippet %}

![!!KB4975](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4975.png)

5. Cliquer sur ***OK***.
1. Sauvegarder le fichier ***.rdx*** sur votre ordinateur.

## Importer

1. Dans le ***{{ fr.NPANE }}***, sélectionner la source de données dans laquelle vous souhaitez importer les {{ fr.VLT }}s.
1. Aller à ***Administration - Importer Plusieurs {{ fr.VLT }}s (.rdx)***.
1. Localiser le fichier ***.rdx*** sauvegardé sur votre ordinateur et cliquer sur ***Ouvrir***.
1. Définir les ***Mappings*** des {{ fr.VLT }}s.
{% snippet, "badgeInfo" %}
À cette étape, si nécessaire, vous pouvez ajouter des {{ fr.VLT }}s en cliquant sur le bouton ***Ajouter {{ fr.VLT }}***.
{% endsnippet %}
{% snippet, "badgeCaution" %}
Si vous avez des ***Utilisateurs*** et qu'ils remplacent les propriétés des entrées avec des ***Paramètres Spécifiques Utilisateur***, décocher ***Changer ID***.
{% endsnippet %}

5. Cliquer sur ***Terminer***.
