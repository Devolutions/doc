---
eleventyComputed:
  title: Importer
---
Utiliser l'option ***Fichier – Importer*** pour importer des entrées dans {{ fr.RDMMAC }}. Vous pouvez importer plusieurs types d'entrées provenant de multiples sources. Nous prenons en charge les formats d'importation natifs de nombreux outils populaires sur le marché et dans le cas où nous ne prenons pas en charge le format natif ou le tiers, nous avons des assistants disponibles pour importer à partir d'un fichier CSV.

{% snippet, "badgeNotice" %}
La fonctionnalité d'importation est uniquement active si la [Permission](/rdm/mac/commands/administration/user-management/permissions/) d'importation a été activée dans le compte utilisateur.
{% endsnippet %}

## Paramètres

![Fichier – Importer](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10313.png)

### Importer des Entrées

Importer des Entrées est utilisé pour importer des sessions stockées dans des fichiers tels que :

* .rdm (format d'exportation natif de {{ fr.RDM }})
* .xml (il doit s'agir d'un format spécifique compatible avec l'application)

### Importer Assistant Ordinateur

Vous pouvez importer des ordinateurs à partir de différentes sources. Ces sources incluent :

* Voisinage réseau
* Liste d'hôtes

### Importer des Sessions depuis

Veuillez consulter [Importer des sessions](/rdm/mac/commands/file/import/sessions/) pour plus d'informations.
