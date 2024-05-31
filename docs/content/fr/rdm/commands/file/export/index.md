---
eleventyComputed:
  title: Export
  description: La fonction d'exportation est active uniquement si les privilèges d'Importation et d'Exportation ont été activés dans le compte de Gestion des Utilisateurs.
---
Utiliser ***Fichier – Exporter*** pour exporter les {{ fr.VLT }}s de {{ fr.RDM }}.

{% snippet, "badgeInfo" %}
La fonction d'exportation est active uniquement si les privilèges d'***Importation*** et d'***Exportation*** ont été activés dans le compte de ***Gestion des Utilisateurs***.
{% endsnippet %}

{% snippet, "badgeNotice" %}
Les seuls formats appropriés pour réimporter les {{ fr.VLT }}s dans {{ fr.RDM }} sont les formats .rdm et .rdx.
{% endsnippet %}

## Paramètres

![Fichier - Exporter](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6239.png)

{% snippet, "badgeInfo" %}
Lors de l'utilisation d'une [Source de Données Avancée](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/), les capacités d'exportation peuvent être désactivées via des politiques de sécurité au niveau de la source de données (personne ne peut exporter) ou au niveau d'un utilisateur (certains utilisateurs ne peuvent pas exporter).
{% endsnippet %}

### Exporter {{ fr.VLT }} (.rdm)

Exporter un {{ fr.VLT }} dans un fichier .rdm qui peut être importé dans n'importe quelle source de données {{ fr.RDM }}. Vous pouvez également inclure les identifiants dans ce format d'exportation et sécuriser votre fichier avec une clé maîtresse.

{% snippet, "badgeInfo" %}
Par défaut, les identifiants NE sont PAS inclus. Il est crucial de cocher l'option ***Identifiants*** pour que les données exportées incluent les identifiants.
{% endsnippet %}

{% snippet, "badgeWarning" %}
Spécifier une ***Clé maîtresse*** chiffrera l'intégralité du contenu du fichier .rdm pour protéger son contenu. Cela est fortement recommandé comme mesure de sauvegarde, mais la clé est absolument nécessaire pour le déchiffrement. Conservez-la également sur un dispositif de stockage séparé pour la sauvegarde.
{% endsnippet %}

![!!clip10103](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10103.png)

### Exporter {{ fr.VLT }} (.json)

Exporter un {{ fr.VLT }} dans un format de fichier .json. Vous pouvez également inclure les identifiants dans ce format d'exportation et sécuriser votre fichier avec une clé maîtresse.

### Exporter Toute la Liste des Hôtes (.csv)

Exporter une simple liste d'hôtes au format .csv. Il vous sera demandé si vous souhaitez que l'exportation soit légèrement plus détaillée et inclue les informations suivantes : Hôte, Description, Nom Affiché, Groupe, Groupes d'Utilisateurs.

### Exporter {{ fr.VLT }} (.csv)

Exporter le {{ fr.VLT }} en utilisant le fichier au format .csv. Pour des raisons de sécurité, le fichier .csv sera contenu dans un fichier zip chiffré par mot de passe. Ce type de sécurité peut être piraté en utilisant des attaques par force brute, il devrait être utilisé uniquement lorsque le fichier zip est sous votre contrôle exclusif.
{% snippet, "badgeInfo" %}
Veuillez noter que les colonnes csv varieront en fonction des types d'entrées exportées. Cela en fait le mauvais format si jamais vous souhaitez réimporter les données dans {{ fr.RDM }}. Utilisez cela uniquement pour migrer vers un autre système.
{% endsnippet %}

### Exporter {{ fr.VLT }} (.html)

Exporter le {{ fr.VLT }} avec un AES-256 pour chiffrer le fichier html autonome. Voir [Exporter Html Chiffré](/rdm/windows/commands/file/export/html-encrypted/) pour plus d'informations.

### Exporter {{ fr.VLT }} (.xml)

Comme cela a créé de la confusion parmi notre base d'utilisateurs, ce format d'exportation a été converti pour effectuer exactement le même export que l'***Exporter {{ fr.VLT }}*** mais définit l'extension de fichier en .xml à la place.

### Exporter Tous les Documents

Exporter toutes les pièces jointes ou toutes les entrées de documents qui sont liées à votre source de données.
![Exporter Documents](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10044.png)

### Exporter "mes identifiants personnels" (.rdm)

Exporter vos ***Mes Identifiants Personnels*** dans un fichier .rdm et chiffrer avec une ***Clé maîtresse***.
{% snippet, "badgeWarning" %}
Une ***Clé maîtresse*** chiffrera le fichier .rdm pour protéger son contenu. La clé est absolument nécessaire pour le déchiffrement.
{% endsnippet %}
