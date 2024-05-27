---
eleventyComputed:
  title: Survol
---
Utiliser l'option ***Fichier - Importer*** pour importer des entrées dans {{ fr.RDM }}. Vous pouvez importer plusieurs types d'entrées à partir d'une multitude de sources. Nous prenons en charge les formats d'importation natifs à partir de nombreux outils populaires sur le marché et si nous ne prenons pas en charge le format natif ou le tiers, nous avons des assistants disponibles pour importer à partir d'un fichier csv.

{% snippet, "badgeNotice" %}
La fonction d'importation est active que si la [Permissions du système](/fr/rdm/mac/commands/administration/user-management/permissions/) d'importation a été activée dans le {{ fr.VLT }}.
{% endsnippet %}

## Paramètres

![Fichier - Importer](https://cdnweb.devolutions.net/docs/fr/rdm/mac/clip4025.png)

### Importer des entrées

Importer des entrées est utilisé pour importer des sessions stockées dans des fichiers tels que :

* .rdm (format d'exportation natif de {{ fr.RDM }})
* .pvm (format d'exportation natif de Password Vault Manager)
* .xml (il doit s'agir d'un format spécifique compatible avec l'application)

### Importer un Assistant d'ordinateur

Vous pouvez importer des ordinateurs à partir de différentes sources. Ces sources comprennent :

* Voisinage réseau
* Liste des hôtes

### Importer les Sessions de

Consulter [Importer des sessions](/fr/rdm/mac/commands/file/import/sessions/) pour plus d'informations.
