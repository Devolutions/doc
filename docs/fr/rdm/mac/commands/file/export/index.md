---
eleventyComputed:
  title: Exportation
---
Utiliser le ***Fichier – Exporter*** pour exporter des entrées depuis {{ fr.RDMMAC }}. Ci-dessous se trouve une liste des options d'exportation :

* Exporter toutes les entrées (.rdm)
* Exporter la sélection (.rdm)
* Exporter l'entrée en tant que fichier Bureau à distance (.rdp)
* Exporter Spécial Toutes les entrées (.csv, .html, .xml) et Toute Sélection (.csv, .html, .xml)

{% snippet, "badgeInfo" %}
La fonction d'exportation est active uniquement si l'importation [Permission](/rdm/mac/commands/administration/user-management/permissions/) a été activée dans le compte utilisateur
{% endsnippet %}

{% snippet, "badgeInfo" %}
Le seul format approprié pour réimporter les entrées dans {{ fr.RDM }} est le format .rdm.
{% endsnippet %}

## Paramètres

![Fichier – Exporter](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10315.png)

{% snippet, "badgeInfo" %}
Lors de l'utilisation d'une [Source de Données Avancée](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/), les capacités d'exportation peuvent être désactivées via des politiques de sécurité au niveau de la source de données (personne ne peut exporter) ou au niveau d'un utilisateur (certains utilisateurs ne peuvent pas exporter).
{% endsnippet %}

### Exporter toutes les entrées (.rdm)

Exporter toutes les entrées dans un fichier .rdm qui peut être importé dans n'importe quelle source de données {{ fr.RDMMAC }}. Vous pouvez également inclure les identifiants dans ce format d'exportation et sécuriser votre fichier avec une clé maîtresse.

{% snippet, "badgeInfo" %}
Par défaut, les identifiants NE sont PAS inclus. Il est crucial de cocher l'option Identifiants pour que les données exportées incluent les identifiants.
{% endsnippet %}

{% snippet, "badgeWarning" %}
Par défaut, les identifiants NE sont PAS inclus. Il est crucial de cocher l'option Identifiants pour que les données exportées incluent les identifiants.
{% endsnippet %}

![Exporter toutes les entrées (.rdm)](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10316.png)

### Exporter la sélection (.rdm)

Exporter la session sélectionnée dans un fichier .rdm qui peut être importé dans n'importe quelle source de données {{ fr.RDMMAC }}. Vous pouvez également inclure les identifiants dans ce format d'exportation et sécuriser votre fichier avec une clé maîtresse.

### Exporter l'entrée en tant que fichier Bureau à distance (.rdp)

Exporter l'entrée sélectionnée dans un fichier .rdp pour l'utiliser facilement en dehors de {{ fr.RDMMAC }}.

### Exporter Spécial (.csv)

Exporter des entrées en utilisant le fichier au format .csv. Pour des raisons de sécurité, le fichier .csv sera contenu dans un fichier zip crypté par mot de passe. Ce type de sécurité peut être piraté en utilisant des attaques par force brute, il devrait être utilisé uniquement lorsque le fichier zip est sous votre contrôle exclusif.

{% snippet, "badgeInfo" %}
Veuillez noter que les colonnes csv varieront en fonction des types d'entrées exportées. Cela en fait le mauvais format si jamais vous souhaitez réimporter les données dans {{ fr.RDM }}. Utilisez ceci uniquement pour migrer vers un autre système.
{% endsnippet %}

### Exporter Spécial (.html)

Exporter toutes les entrées dans un fichier html autonome crypté AES-256. Voir [Exporter Html Crypté](/rdm/windows/commands/file/export/html-encrypted/) pour plus d'informations.

### Exporter Spécial (.xml)

Comme cela a créé de la confusion parmi notre base d'utilisateurs, ce format d'exportation a été converti pour effectuer exactement le même export que l'“Exporter toutes les entrées“ mais définit l'extension de fichier en .xml à la place.
