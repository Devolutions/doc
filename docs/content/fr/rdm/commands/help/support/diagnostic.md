---
eleventyComputed:
  title: Diagnostic
---
Si vous rencontrez un problème avec {{ fr.RDM }}, vous pouvez exécuter un diagnostic système, disponible dans Aide – Diagnostic. Cela pourrait aider à diagnostiquer ou donner une indication sur le type de problèmes que vous pourriez rencontrer.

## Système

L'élément administrateur pourrait être la source possible d'un problème de sécurité. Cela arrive souvent lorsqu'un utilisateur a le SYSDBA ou est DB_OWNER de la base de données SQL Server.

D'autres problèmes pourraient être liés au fait que l'application fonctionne dans les Services Bureau à distance. Cependant, {{ fr.RDM }} est entièrement compatible avec les Services Bureau à distance.

Les problèmes et solutions liés à FIPS peuvent être trouvés dans la section spécifique de dépannage FIPS (Chiffrement).
Si vous avez un [{{ fr.RDMJ }}](/rdm/windows/overview/the-devolutions-platform/rdm-jump/) configuré, vous pouvez exécuter un test de votre hôte Jump en cliquant sur Test Jump.
![Diagnostic Système – Système](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10814.png)

## Source de Données

L'onglet ***Source de Données*** contient des informations concernant la source de données actuelle, telles que le nombre d'entrées qu'elle contient, la taille de votre source de données, le nombre d'images personnalisées et l'état hors ligne.

{% snippet, "badgeInfo" %}
Trop d'images personnalisées pourraient augmenter considérablement la taille de la source de données et causer des problèmes de temps de chargement.
{% endsnippet %}

![Diagnostic Système - Source de Données](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11353.png)

## Politique

L'onglet ***Politique*** affiche la liste des Modèles de Stratégie de Groupe pour voir si l'un d'entre eux a été appliqué.
![Diagnostic Système - Politique](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11354.png)
