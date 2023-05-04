---
title: Exporter
---
tiliser ***Fichier - Exporter*** pour exporter les coffres à partir de {{ fr.RDM }} . 

{% snippet icon.badgeInfo %} 
La fonction d&apos;exportation n&apos;est active que si les ***Privilèges*** d&apos;importation et d&apos;exportation ont été activés dans le compte de ***Gestion des utilisateurs*** . 
{% endsnippet %}
 
{% snippet icon.badgeNotice %} 
Les formats appropriés pour réimporter les coffres dans {{ fr.RDM }} sont les formats .rdm et .rdx. 
{% endsnippet %}
 
## Paramètres 

![Fichier - Exporter](/img/fr/rdm/windows/clip10502.png) 

{% snippet icon.badgeInfo %} 
Lorsque vous utilisez une [Source de données avancée](/fr/rdm/windows/data-sources/data-sources-types/advanced-data-sources/) , les capacités d&apos;exportation peuvent être désactivées via des politiques de sécurité au niveau de la source de données (personne ne peut exporter) ou au niveau de l&apos;utilisateur (certains utilisateurs ne peuvent pas exporter). 
{% endsnippet %}
 
### Exporter le coffre (.RDM) 

Exporter le coffre dans un fichier .rdm qui peut être importé dans n&apos;importe quelle source de données {{ fr.RDM }} . Vous pouvez également inclure les identifiants dans ce format d&apos;exportation et sécuriser votre fichier avec une clé maîtresse. 

{% snippet icon.badgeInfo %} 
Par défaut, les identifiants ne sont PAS inclus. Il est essentiel de cocher l&apos;option ***Inclure identifiants*** afin que les données exportées les incluent. 
{% endsnippet %}
 
{% snippet icon.badgeWarning %} 
La spécification d&apos;une ***Clé maîtresse*** cryptera tout le contenu du fichier .rdm pour protéger son contenu. Il est fortement recommandé comme mesure de sauvegarde, mais la clé est absolument nécessaire pour le décryptage. Conservez-la également dans un périphérique de stockage séparé. 
{% endsnippet %}
 
![!!clip10103.png](/img/fr/rdm/windows/clip10103.png) 

### Exporter le coffre (.json) 

Exporter un coffre dans un format de fichier .json. Vous pouvez également inclure des identifiants dans ce format d&apos;exportation et sécuriser votre fichier avec une clé maîtresse. 

### Exporter la liste de tous les hôtes (.csv) 

Exporter une simple liste d&apos;hôtes en format .csv. Vous serez invité à voir si vous souhaitez que l&apos;exportation soit un peu plus détaillée et inclure les informations suivantes: hôte, description, nom d&apos;affichage, groupe, groupe de sécurité. 

### Exporter le coffre (.csv) 

Exporter le coffre à l&apos;aide du fichier au format .csv. Pour des raisons de sécurité, le fichier .csv sera contenu dans un fichier zip chiffré par mot de passe. Ce type de sécurité peut être piraté à l&apos;aide d&apos;attaques par force brute, il ne doit être utilisé que lorsque le fichier zip est sous votre contrôle exclusif. 

{% snippet icon.badgeInfo %} 
Veuillez noter que les colonnes csv varient en fonction des types d&apos;entrées exportés. Cela en fait le mauvais format si jamais vous souhaitez réimporter les données dans {{ fr.RDM }} . Utilisez-le uniquement pour migrer vers un autre système. 
{% endsnippet %}
 
### Exporter le coffre (.html) 

Exporter le coffre avec l&apos;AES-256 pour crypter le fichier autonome HTML. Voir la rubrique [HTML crypté](/fr/rdm/windows/commands/file/export/html-encrypted/) pour plus d&apos;information. 

### Exporter le coffre (.xml) 

Parce qu&apos;il a semé la confusion dans notre base d&apos;utilisateurs, ce format d&apos;exportation a été converti pour effectuer exactement la même exportation que ***Exporter le coffre*** mais définit l&apos;extension de fichier en .xml à la place. 

### Exporter tous les Documents 

![!!clip10044.png](/img/fr/rdm/windows/clip10044.png) 

Exporter toutes les pièces jointes ou toutes les entrées de document liées à votre source de données. 

### Exporter &quot;mes identifiants personnels&quot; (.rdm) 

Exporter ***Mes Identifiants Personnels*** dans un fichier .rdm et cryptez-les avec une clé maîtresse. 

{% snippet icon.badgeWarning %} 
Une ***Clé maîtresse*** cryptera le fichier .rdm pour protéger son contenu. La clé est absolument nécessaire pour le décryptage. 
{% endsnippet %}
 


