---
eleventyComputed:
  title: Survol
---
Utiliser ***Fichier - Exporter*** pour exporter des entrées à partir de {{ fr.RDM }}. Voici une liste d'options d'exportation :

* Exporter tout (.rdm)
* Exporter la sélection (.rdm)
* Exporter l'entrée en fichier Remote Desktop (.rdp)
* Exportation spéciale (Toutes les entrées .csv, .html, .xml et toutes les sélections .csv, .html, .xml)

{% snippet, "badgeInfo" %}
La fonction d'exportation n'est active que si la [Permission](/fr/rdm/mac/commands/administration/user-management/permissions/) d'importation a été activée dans le compte d'utilisateur
{% endsnippet %}

{% snippet, "badgeInfo" %}
Le seul format approprié pour réimporter les entrées dans {{ fr.RDM }} est le format .rdm.
{% endsnippet %}

## Paramètres

![Fichier - Exporter](https://cdnweb.devolutions.net/docs/fr/rdm/mac/clip4028.png)

{% snippet, "badgeInfo" %}
Lorsque vous utilisez une [Source de données avancée](/fr/rdm/mac/data-sources/data-sources-types/advanced-data-sources/), les capacités d'exportation peuvent être désactivées via des politiques de sécurité au niveau de la source de données (personne ne peut exporter) ou au niveau de l'utilisateur (certains utilisateurs ne peuvent pas exporter).
{% endsnippet %}



### Exporter tout (.rdm)

Exporter toutes les entrées dans un fichier .rdm qui peut être importé dans n'importe quelle source de données {{ fr.RDM }}. Vous pouvez également inclure les identifiants dans ce format d'exportation et sécuriser votre fichier avec une clé maîtresse.

{% snippet, "badgeWarning" %}
Par défaut, les identifiants ne sont PAS inclus. Il est essentiel de cocher l'option Inclure identifiants afin que les données exportées les incluent.
{% endsnippet %}

![Fichier - Exporter](https://cdnweb.devolutions.net/docs/fr/rdm/mac/clip4028.png)

### Exporter la Sélection (.rdm)

Exporter la session sélectionnée dans un fichier .rdm qui peut être importé dans n'importe quelle source de données {{ fr.RDM }}. Vous pouvez également inclure les identifiants dans ce format d'exportation et sécuriser votre fichier avec une clé maîtresse.

### Exporter l'entrée en fichier Remote Desktop (.rdp)

Exporter l'entrée sélectionnée dans un fichier .rdp pour l'utiliser facilement en dehors de {{ fr.RDM }}.

### Exportation spéciale (.csv)

Exporter les entrées à l'aide du fichier au format .csv. Pour des raisons de sécurité, le fichier .csv sera contenu dans un fichier zip chiffré par mot de passe. Ce type de sécurité peut être piraté à l'aide d'attaques par force brute, il ne doit être utilisé que lorsque le fichier zip est sous votre contrôle exclusif.

{% snippet, "badgeInfo" %}
Veuillez noter que les colonnes csv varient en fonction des types d'entrées exportés. Cela en fait le mauvais format si jamais vous souhaitez réimporter les données dans {{ fr.RDM }}. Utilisez-le uniquement pour migrer vers un autre système.
{% endsnippet %}

### Exportation spéciale (.html)

Exporter toutes les entrées d'un AES-256 pour crypter le fichier HTML autonome.

### Exportation spéciale (.xml)

Parce qu'il a semé la confusion dans notre base d'utilisateurs, ce format d'exportation a été converti pour effectuer exactement la même exportation que “Exporter toutes les entrées“ mais définit l'extension de fichier sur .xml à la place.

