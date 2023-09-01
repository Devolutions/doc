---
title: Exporter
---
tiliser ***Fichier - Exporter*** pour exporter les {{ fr.VLT }}s à partir de {{ fr.RDM }}. 

{% snippet icon.badgeInfo %} 
La fonction d'exportation n'est active que si les ***Privilèges*** d'importation et d'exportation ont été activés dans le compte de ***Gestion des utilisateurs***. 
{% endsnippet %}
 
{% snippet icon.badgeNotice %} 
Les formats appropriés pour réimporter les {{ fr.VLT }}s dans {{ fr.RDM }} sont les formats .rdm et .rdx. 
{% endsnippet %}
 
## Paramètres 

![Fichier - Exporter](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip10502.png) 

{% snippet icon.badgeInfo %} 
Lorsque vous utilisez une [Source de données avancée](/fr/rdm/windows/data-sources/data-sources-types/advanced-data-sources/), les capacités d'exportation peuvent être désactivées via des politiques de sécurité au niveau de la source de données (personne ne peut exporter) ou au niveau de l'utilisateur (certains utilisateurs ne peuvent pas exporter). 
{% endsnippet %}
 
### Exporter le {{ fr.VLT }} (.RDM) 

Exporter le {{ fr.VLT }} dans un fichier .rdm qui peut être importé dans n'importe quelle source de données {{ fr.RDM }}. Vous pouvez également inclure les identifiants dans ce format d'exportation et sécuriser votre fichier avec une clé maîtresse. 

{% snippet icon.badgeInfo %} 
Par défaut, les identifiants ne sont PAS inclus. Il est essentiel de cocher l'option ***Inclure identifiants*** afin que les données exportées les incluent. 
{% endsnippet %}
 
{% snippet icon.badgeWarning %} 
La spécification d'une ***Clé maîtresse*** cryptera tout le contenu du fichier .rdm pour protéger son contenu. Il est fortement recommandé comme mesure de sauvegarde, mais la clé est absolument nécessaire pour le décryptage. Conservez-la également dans un périphérique de stockage séparé. 
{% endsnippet %}
 
![!!clip10103](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip10103.png) 

### Exporter le {{ fr.VLT }} (.json) 

Exporter un {{ fr.VLT }} dans un format de fichier .json. Vous pouvez également inclure des identifiants dans ce format d'exportation et sécuriser votre fichier avec une clé maîtresse. 

### Exporter la liste de tous les hôtes (.csv) 

Exporter une simple liste d'hôtes en format .csv. Vous serez invité à voir si vous souhaitez que l'exportation soit un peu plus détaillée et inclure les informations suivantes : hôte, description, nom d'affichage, groupe, groupe d'utilisateur. 

### Exporter le {{ fr.VLT }} (.csv) 

Exporter le {{ fr.VLT }} à l'aide du fichier au format .csv. Pour des raisons de sécurité, le fichier .csv sera contenu dans un fichier zip chiffré par mot de passe. Ce type de sécurité peut être piraté à l'aide d'attaques par force brute, il ne doit être utilisé que lorsque le fichier zip est sous votre contrôle exclusif. 

{% snippet icon.badgeInfo %} 
Veuillez noter que les colonnes csv varient en fonction des types d'entrées exportés. Cela en fait le mauvais format si jamais vous souhaitez réimporter les données dans {{ fr.RDM }}. Utilisez-le uniquement pour migrer vers un autre système. 
{% endsnippet %}
 
### Exporter le {{ fr.VLT }} (.html) 

Exporter le {{ fr.VLT }} avec l'AES-256 pour crypter le fichier autonome HTML. Voir [HTML crypté](/fr/rdm/windows/commands/file/export/html-encrypted/) pour plus d'information. 

### Exporter le {{ fr.VLT }} (.xml) 

Parce qu'il a semé la confusion dans notre base d'utilisateurs, ce format d'exportation a été converti pour effectuer exactement la même exportation que ***Exporter le {{ fr.VLT }}*** mais définit l'extension de fichier en .xml à la place. 

### Exporter tous les Documents 

![!!clip10044](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip10044.png) 

Exporter toutes les pièces jointes ou toutes les entrées de document liées à votre source de données. 

### Exporter « mes identifiants personnels » (.rdm) 

Exporter ***Mes Identifiants Personnels*** dans un fichier .rdm et cryptez-les avec une clé maîtresse. 

{% snippet icon.badgeWarning %} 
Une ***Clé maîtresse*** cryptera le fichier .rdm pour protéger son contenu. La clé est absolument nécessaire pour le décryptage. 
{% endsnippet %}
