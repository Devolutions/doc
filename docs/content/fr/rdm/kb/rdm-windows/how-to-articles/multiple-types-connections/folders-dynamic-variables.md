---
eleventyComputed:
  title: Dossiers et variables dynamiques
---
Dans {{ fr.RDM }}, vous pouvez utiliser des entrées ***Dossier*** pour organiser vos sessions dans l'application. Il est possible de stocker des informations au niveau du dossier parent et d'utiliser des Variables dans les entrées enfants pour résoudre les informations que vous avez enregistrées dans le dossier parent.

{% snippet, "badgeInfo" %}
Les variables sont uniquement prises en charge pour les Sources de Données Avancées comme SQL Server et {{ fr.DVLS }}
{% endsnippet %}

## PARAMÈTRES

1. Créer un dossier Entreprise, Base de données, Dispositif, Domaine, Identité, Imprimante, Serveur, Site, Logiciel ou Poste de travail dans le ***{{ fr.NPANE }}***.
1. Saisir des informations dans les propriétés du dossier. Inclure uniquement un mot de passe si vous souhaitez mettre une protection par mot de passe sur le dossier.
![!!KB4267](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4267.png)
1. Dans les sessions enfants, utiliser les Variables appropriées pour récupérer les informations qui sont enregistrées au niveau du dossier.
![!!KB4268](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4268.png)
