---
eleventyComputed:
  title: Exporter et importer les paramètres spécifiques à l'utilisateur
  description: Si vous ou vos utilisateurs remplacez les propriétés des entrées par des Paramètres Spécifiques à l'Utilisateur dans {{ fr.RDM }}, tout le monde devra exporter et importer la Liste des Paramètres Spécifiques à l'Utilisateur lors de la migration des données.
---
{% snippet, "badgeCaution" %}
Les fonctionnalités ***Exporter*** et ***Importer*** pour les ***Paramètres Spécifiques à l'Utilisateur*** sont spécifiques à {{ fr.VLT }}, ce qui signifie que vous devez sélectionner le {{ fr.VLT }} depuis ou vers lequel vous souhaitez exporter ou importer vos paramètres.
{% endsnippet %}

Si vous ou vos ***Utilisateurs*** remplacez les propriétés des entrées par des ***Paramètres Spécifiques à l'Utilisateur*** dans {{ fr.RDM }}, tout le monde devra exporter et importer la ***Liste des Paramètres Spécifiques à l'Utilisateur*** lors de la migration des données.

* [Exporter](#export)
* [Importer](#import)

## Exporter
1. Dans le ***{{ fr.NPANE }}*** de {{ fr.RDM }}, sélectionner votre source de données et {{ fr.VLT }}.
![Sélection de la Source de Données et {{ fr.VLT }}](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6092.png)
1. Aller à ***Fichier – Paramètres de Mon Compte***.
1. Cliquer sur ***Liste des Paramètres Spécifiques à l'Utilisateur*** sous ***Paramètres***.
![Fichier - Paramètres de Mon Compte - Paramètres – Liste des Paramètres Spécifiques à l'Utilisateur](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6093.png)
1. Cliquer sur ***Exporter***.
![Exportation de la Liste des Paramètres Spécifiques à l'Utilisateur](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6094.png)
1. Sauvegarder le fichier .rds sur votre ordinateur.
1. Chiffrer le fichier avec un ***Mot de Passe*** et cliquer sur ***OK***.
![Chiffrement des Paramètres Spécifiques](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6095.png)
1. Cliquer sur ***OK*** pour fermer la fenêtre de confirmation qui apparaît.

Vos ***Paramètres Spécifiques à l'Utilisateur*** ont maintenant été exportés dans un fichier .rds à l'emplacement spécifié sur votre ordinateur.

## Importer
1. Dans le ***{{ fr.NPANE }}*** de {{ fr.RDM }}, sélectionner votre nouvelle source de données et {{ fr.VLT }}.
![Sélection de la Source de Données et {{ fr.VLT }}](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6092.png)
1. Aller à ***Fichier – Paramètres de Mon Compte***.
1. Cliquer sur ***Liste des Paramètres Spécifiques à l'Utilisateur*** sous ***Paramètres***.
![Fichier - Paramètres de Mon Compte - Paramètres – Liste des Paramètres Spécifiques à l'Utilisateur](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6093.png)
1. Cliquer sur ***Importer***.
![Importation de la Liste des Paramètres Spécifiques à l'Utilisateur](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6096.png)
1. Localiser le fichier .rds sur votre ordinateur et cliquer sur ***Ouvrir***.
1. Entrer le ***Mot de Passe***, puis cliquer sur ***OK***.
1. Cliquer sur ***OK*** pour fermer la fenêtre de confirmation qui apparaît.

Vos ***Paramètres Spécifiques à l'Utilisateur*** ont maintenant été importés vers la source de données et {{ fr.VLT }} spécifiés.
