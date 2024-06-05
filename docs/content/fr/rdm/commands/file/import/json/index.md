---
eleventyComputed:
  title: Importation (.json)
---
{{ fr.RDM }} vous permet d'importer des entrées à partir de fichiers JSON stockés sur votre ordinateur.

{% snippet, "badgeInfo" %}
Pour un aperçu du format de fichier JSON et de l'impact des décisions prises dans cette entrée, voir [Stratégies d'importation JSON et format de fichier](/rdm/windows/commands/file/import/json/strategies-file-format/).
{% endsnippet %}

## Étapes

1. Dans le ***{{ fr.NPANE }}***, sélectionner le {{ fr.VLT }} dans lequel importer les entrées.
1. Aller à ***Fichier – Importer – Importation (.json)***.
1. Sélectionner le fichier JSON à importer depuis votre ordinateur, puis cliquer sur ***Ouvrir***.
1. Choisir d'***Importer dans la racine***, ***Importer dans le dossier actuel***, ou ***Importer dans un dossier spécifique***.
1. Dans la boîte de dialogue suivante, une liste de toutes les entrées qui sont dans le fichier de données sera affichée. Sélectionner les entrées spécifiques que vous souhaitez importer ou ***Sélectionner tout*** pour importer toutes vos entrées.
{% snippet, "badgeCaution" %}
Si vous avez des utilisateurs qui remplacent les propriétés des entrées avec ***Paramètres Spécifiques à l'Utilisateur***, décocher ***Changer l'ID***.
{% endsnippet %}

6. Cliquer sur ***OK***.
L'importation se poursuivra en utilisant vos paramètres choisis.
