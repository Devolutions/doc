---
eleventyComputed:
  title: Chemin exécutable du navigateur Web Firefox
---
Lancer Firefox en mode intégré demande un chemin exécutable dans {{ fr.RDM }}.
{% snippet, "badgeCaution" %}
Le navigateur Web Firefox est déprécié en mode intégré.
{% endsnippet %}

## Solution
1. Pour contourner ce problème, télécharger le [paquet Firefox intégré](https://cdn.devolutions.net/download/Firefox/FirefoxRunner2021.1.0.zip)
1. Extraire le contenu dans un dossier sur votre ordinateur.
1. Dans {{ fr.RDM }}, aller à ***Fichier – Paramètres – Chemins – Configurer le Chemin d'Installation***.
1. Trouver le ***Chemin d'Installation de Firefox Xul Runner***.
![!!KB4950](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4950.png)
1. Cliquer sur la boîte à points de suspension pour sélectionner le chemin où le fichier zip a été extrait.
1. Cliquer sur ***OK***.
