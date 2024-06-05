---
eleventyComputed:
  title: Code d'erreur FAIL (-1) erreur non spécifique
  keywords:
  - (-1)
  - FAIL
---
Dans la version 2020.3.12.0 et supérieures de {{ fr.RDM }}, un message d'erreur lors de l'ouverture d'une connexion ssh peut apparaître : "Une erreur inattendue s'est produite : Code d'erreur FAIL (-1) erreur non spécifique".
## Solution
{% snippet, "badgeCaution" %}
{{ fr.RDM }} dispose maintenant d'une sélection d'algorithmes pour le type de session SSH. Veuillez noter que les algorithmes non sécurisés ne sont pas activés par défaut. Nous vous recommandons donc de vérifier les algorithmes directement sur votre serveur à des fins de sécurité. Sinon, vous pouvez suivre les étapes ci-dessous pour résoudre ce problème.
{% endsnippet %}

Dans l'onglet ***Avancé*** de votre session, réglez l'option ***Prise en charge de l'algorithme*** sur ***Personnalisé*** et cochez le ou les algorithmes manquants dans la liste.
![!!KB4653](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4653.png)
{% snippet, "badgeCaution" %}
Il se peut que {{ fr.RDM }} doive être redémarré pour que les solutions prennent effet.
{% endsnippet %}

Il est également possible de réactiver globalement tous les algorithmes dans {{ fr.RDM }} via le menu ***Fichier – Paramètres – Types – Terminal – Prise en charge de l'algorithme***.
![!!KB4654](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4654.png)
Si vous êtes toujours incapable de vous connecter après avoir activé l'algorithme, allez dans les ***Propriétés*** de l'entrée, onglet ***Avancé*** et cochez ***Ignorer la configuration de la variable d'environnement***.
![!!KB4702](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4702.png)