---
eleventyComputed:
  title: "{{ fr.RDMANDROID }} importer la configuration de source de données"
---
Il est possible d'importer des fichiers de configuration de source de données pour {{ fr.RDMANDROID }}.

{% snippet, "badgeCaution" %}
Le fichier RDD n'inclut pas le contenu de la source de données ; seule la configuration est exportée. Utiliser la fonctionnalité d'exportation de l'entrée pour sauvegarder ou copier le contenu de la base de données.
{% endsnippet %}

1. Pour exporter la configuration de source de données depuis {{ fr.RDM }}, naviguer vers ***Fichier – Sources de données*** Sélectionner la source de données à importer sur l'appareil Android, cliquer sur ***Exporter la Configuration de Source de Données***, et sauvegarder le fichier rdd sur l'ordinateur.
![!!KB4181](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4181.png)
1. Sélectionner le fichier .rdd exporté depuis {{ fr.RDM }} et le transférer sur votre Android via l'Explorateur de fichiers Windows.

   Le fichier est maintenant copié dans l'appareil mais doit encore être importé dans le dépôt de fichiers de {{ fr.RDMANDROID }}.
3. Depuis l'appareil Android, lancer {{ fr.RDMANDROID }} et taper sur ***Sources de Données*** depuis le menu latéral.
1. Taper sur l'icône ***Ellipsis*** en haut à droite et taper sur ***Importer***.
1. Sélectionner le fichier rdd importé et taper sur ***Sélectionner***.
![!!KB4182](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4182.png)
1. La nouvelle source de données apparaîtra dans le menu ***Sources de Données***.
![!!KB4183](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4183.png)
