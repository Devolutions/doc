---
eleventyComputed:
  title: Envoyer un rapport de traçage
  description: Suivez ces étapes pour envoyer un rapport de traçage à notre équipe de soutien technique pour l'interface Web de {{ fr.DVLS }}.
  keywords:
  - Export HAR
  - HAR
  - HAR file
  - HAR files
---
Suivez ces étapes pour envoyer un rapport de traçage à notre équipe de soutien technique pour l'interface Web de {{ fr.DVLS }}.

{% snippet, "shieldWarning" %}
Les fichiers HAR contiennent des données sensibles, notamment le contenu des pages que vous avez téléchargées pendant l'enregistrement et vos témoins. Cela permet à toute personne possédant le fichier HAR d'usurper l'identité de votre compte et de toutes les informations que vous avez soumises lors de l'enregistrement (données personnelles, mots de passe, numéros de carte de crédit, etc.).
Protégez les données de votre session en [épurant vos fichiers HAR](https://har-sanitizer.pages.dev/) avant de les partager.
{% endsnippet %}

1. Dans Chrome ou n'importe quel autre navigateur Web, pour ouvrir la fenêtre de diagnostic du développeur, appuyer sur <kbd>F12</kbd> sur votre clavier.
1. Sélectionner l'onglet ***Réseau***.
![!!KB4675](https://cdnweb.devolutions.net/docs/fr/kb/KB2094.png)
1. Cliquer sur le bouton ***Effacer le journal réseau*** pour effacer les données non liées.
![!!KB4676](https://cdnweb.devolutions.net/docs/fr/kb/KB2095.png)
1. Effectuer l'action dans l'interface Web de {{ en.DVLS }}, comme demandé par notre équipe de soutien technique, pour collecter les données.
1. Exporter le rapport de traçage à l'aide du bouton ***Exporter HAR*** (flèche vers le bas).
![!!KB4677](https://cdnweb.devolutions.net/docs/fr/kb/KB2096.png)
1. Joindre les données dans un courriel à [service@devolutions.net](mailto:service@devolutions.net) avec votre numéro de billet.
