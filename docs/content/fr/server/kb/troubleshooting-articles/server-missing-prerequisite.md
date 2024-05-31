---
eleventyComputed:
  title: Erreur HTTP 500.19 - Erreur interne du serveur
  description: Lors de la tentative de chargement de la page web {{ fr.DVLS }}, l'erreur HTTP 500.19 - Erreur interne du serveur est affichée dans le navigateur.
---
Lors de la tentative de chargement de la page web {{ fr.DVLS }}, l'erreur suivante ***Erreur HTTP 500.19 - Erreur interne du serveur*** est affichée dans le navigateur :
![Erreur HTTP 500.19 - Erreur interne du serveur](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8102.png)

Cette erreur est due à l'absence du module IIS ASP.NET Core (ANCM) et/ou du module de réécriture IIS :
![Diagnostic des fonctionnalités ISS](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8103.png)

## Solution

1. Depuis la {{ fr.DVLSCONSOLE }}, éditer l'instance.
1. Sélectionner l'onglet ***IIS***.
1. Cliquer sur ***Diagnostic IIS***.
1. Cliquer sur ***Installer les prérequis***.
![Installer les prérequis](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8104.png)

{% snippet, "badgeCaution" %}
Si l'exécution du script PowerShell depuis la {{ fr.DVLSCONSOLE }} est bloquée en raison de restrictions sur le système, le script se trouve dans le dossier ***Scripts*** du dossier d'installation de la {{ fr.DVLSCONSOLE }}.
{% endsnippet %}
