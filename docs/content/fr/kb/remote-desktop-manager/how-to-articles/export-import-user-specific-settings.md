---
eleventyComputed:
  title: Exporter et importer des paramètres spécifiques à l'utilisateur
  description: Les options d'exportation et d'importation des paramètres spécifiques de l'utilisateur sont liées au {{ fr.VLT }}.
---

{% snippet icon.badgeCaution %}
Les options d'***exportation*** et d'***importation*** des ***paramètres spécifiques de l'utilisateur*** sont liées au {{ fr.VLT }}. Vous devez sélectionner le {{ fr.VLT }} à partir duquel ou dans lequel vous souhaitez exporter ou importer vos paramètres.
{% endsnippet %}

Si vous ou vos ***utilisateurs*** remplacez des propriétés d'entrée par des ***Paramètres spécifiques de l'utilisateur*** dans {{ fr.RDM }}, chacun sera tenu d'exporter et d'importer la ***Liste des paramètres spécifiques de l'utilisateur*** lors de la migration des données.

* [Exporter](#export)
* [Importer](#import)

## Exporter
<a name="export"></a>

1. Sélectionner votre source de données et votre {{ fr.VLT }} dans le ***{{ fr.NPANE }}*** de {{ fr.RDM }}.
![Sélectionner la source de données et le {{ fr.VLT }}](https://webdevolutions.blob.core.windows.net/docs/fr/rdm/windows/RDMWin6067.png)
1. Aller dans ***Fichier*** - ***Paramètres de mon compte***.
1. Cliquer sur la ***Liste des paramètres spécifiques de l'utilisateur*** sous ***Paramètres***.
![Fichier  Paramètres de mon compte - Paramètres - Liste des paramètres spécifiques de l'utilisateur](https://webdevolutions.blob.core.windows.net/docs/fr/rdm/windows/RDMWin6068.png)
1. Cliquer sur ***Exporter***.  
![Exportation de la liste des paramètres spécifiques de l'utilisateur](https://webdevolutions.blob.core.windows.net/docs/fr/rdm/windows/RDMWin6069.png)
1. Enregistrer le fichier .rds sur votre ordinateur.
1. Chiffrer le fichier avec un ***Mot de passe*** et cliquer sur ***OK***.  
![Paramètres spécifiques de chiffrement](https://webdevolutions.blob.core.windows.net/docs/fr/rdm/windows/RDMWin6070.png)
1. Cliquez sur ***OK*** pour fermer la fenêtre de confirmation.

Vos ***Paramètres spécifiques de l'utilisateur*** ont été exportés dans un fichier .rds à l'emplacement sélectionné sur votre ordinateur.

## Importer
<a name="import"></a>

1. Sélectionner votre nouvelle source de données et votre {{ fr.VLT }} dans le ***{{ fr.NPANE }}*** de {{ fr.RDM }}.
![Sélectionner la source de données et le {{ fr.VLT }}](https://webdevolutions.blob.core.windows.net/docs/fr/rdm/windows/RDMWin6067.png)
1. Aller dans ***Fichier - Paramètres de mon compte***.
1. Cliquer sur la ***Liste des paramètres spécifiques de l'utilisateur*** sous ***Paramètres***.  
![Fichier - Paramètres de mon compte - Paramètres - Liste des paramètres spécifiques de l'utilisateur](https://webdevolutions.blob.core.windows.net/docs/fr/rdm/windows/RDMWin6068.png)
1. Cliquer sur ***Importer***.  
![Importation de la liste des paramètres spécifiques de l'utilisateur](https://webdevolutions.blob.core.windows.net/docs/fr/rdm/windows/RDMWin6071.png)
1. Ouvrir le fichier .rds sur votre ordinateur.
1. Entrer le ***Mot de passe***, puis cliquer sur ***OK***.
1. Cliquer sur ***OK*** pour fermer la fenêtre de confirmation.

Vos ***Paramètres spécifiques à l'utilisateur*** ont été importés dans la source de données sélectionnée et dans le {{ fr.VLT }}.

