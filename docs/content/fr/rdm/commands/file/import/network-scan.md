---
eleventyComputed:
  title: Importation avec scan réseau
  description: L'importation avec scan réseau vous permet d'effectuer un scan réseau basé sur une plage d'adresses IP prédéfinie pour trouver des sessions à importer.
---
{% youtube 'FtSlp_TVAxE?si=O85mqPUZRZGAyTui&amp;start=247' %}

***Importation avec scan réseau*** vous permet d'effectuer un scan réseau basé sur une plage d'adresses IP prédéfinie pour trouver des sessions à importer. Il est accessible via le menu ***Fichier – Importer*** ou en cliquant droit dans le {{ fr.NPANE }} et en sélectionnant ***Importer***.

Spécifier une plage de scan, puis, une fois le scan terminé, sélectionner les sessions que vous souhaitez importer (par défaut, toutes les sessions sont sélectionnées) et cliquer sur ***OK*** pour importer les sessions dans votre source de données.

{% snippet, "badgeCaution" %}
Si vous souhaitez examiner chaque session une par une lors de leur importation, vous pouvez cocher l'option ***Modifier l'entrée importée***. Cependant, cela n'est pas recommandé pour un grand nombre de sessions.
{% endsnippet %}

![Importation avec scan réseau](https://cdnweb.devolutions.net/docs/RDMW4085_2024_2.png)

## Options de scan

| OPTION | DESCRIPTION | 
|--------|-------------|
| Résoudre l'adresse IP | Tente de résoudre les adresses IP à partir du nom d'hôte ou du nom de domaine. | 
| Scanner en utilisant ZeroConf | Envoie un ping à chaque adresse IP avant de scanner, affichant uniquement celles qui répondent. Cela devrait augmenter la vitesse de scan. |
| Ignorer les sessions existantes | Masque les sessions déjà présentes sur la source de données. |
| Scanner {{ fr.DGW }} | Scanne pour les {{ fr.DGW }}s. |
| Modifier l'entrée importée | Ouvre la fenêtre ***Modifier*** pour chaque entrée sélectionnée avant l'importation. |