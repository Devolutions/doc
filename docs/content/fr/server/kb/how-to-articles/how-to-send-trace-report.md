---
eleventyComputed:
  title: Envoyer un rapport de trace
  description: Suivre ces étapes pour envoyer un rapport de trace à notre équipe de support pour l'interface web {{ fr.DVLS }}.
  keywords:
  - Exporter HAR
  - HAR
  - fichier HAR
  - fichiers HAR
---
Suivre ces étapes pour envoyer un rapport de trace à notre équipe de support pour l'interface web {{ fr.DVLS }}.

{% snippet, "shieldWarning" %}
Garder à l'esprit que les fichiers HAR contiennent des données sensibles, y compris le contenu des pages que vous avez téléchargées pendant l'enregistrement et vos cookies. Cela permet à quiconque possédant le fichier HAR de se faire passer pour votre compte et toutes les informations que vous avez soumises pendant l'enregistrement (détails personnels, mots de passe, numéros de carte de crédit, etc.).
Protéger vos données de session en [nettoyant vos fichiers HAR](https://har-sanitizer.pages.dev/) avant de les partager.
{% endsnippet %}

## Étapes

1. Dans Chrome, ou tout navigateur, pour basculer ouvrir la fenêtre de diagnostic du développeur, cliquer sur ***F12*** sur votre clavier.
1. Sélectionner l'onglet ***Réseau***.
![!!KB4675](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4675.png)
1. Cliquer sur le bouton ***Effacer*** pour nettoyer les données non liées.
![!!KB4676](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4676.png)
1. Effectuer l'action dans l'interface web de {{ fr.DVLS }}, comme demandé par notre équipe de support, pour collecter les données.
1. Exporter le rapport de trace avec le bouton ***Exporter HAR*** (bouton flèche vers le bas).
![!!KB4677](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4677.png)
1. Joindre les données dans un courriel à [service@devolutions.net](mailto:service@devolutions.net) avec votre numéro de ticket.
