---
eleventyComputed:
  title: Configuration {{ fr.RDM }} perdue
---
Vous avez perdu votre configuration pour votre source de données SQLite dans {{ fr.RDM }} et votre arborescence de navigation apparaît vide.
## Solution
1. Créer une nouvelle source de données SQLite dans ***Fichier – Sources de données - Ajouter une nouvelle source de données***.
{% snippet, "badgeHelp" %}
Pour plus d'informations sur comment [Créer une Source de Données](/rdm/windows/data-sources/create-new-data-source/)
{% endsnippet %}

2. Cliquer sur le bouton des points de suspension et le pointer vers le fichier ***connections.db***.
![!!KB4923](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4923.png)
1. Terminer la configuration.

Vous devriez maintenant voir vos entrées dans le ***{{ fr.NPANE }}***.
