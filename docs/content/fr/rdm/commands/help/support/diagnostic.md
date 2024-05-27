---
eleventyComputed:
  title: Diagnostic
---
Si vous rencontrez un problème avec {{ fr.RDM }}, vous pouvez exécuter un Diagnostic du système, disponible dans ***Aide – Diagnostic***. Cela pourrait aider à diagnostiquer ou à indiquer le type de problèmes que vous pourriez rencontrer.

## Système

L'élément administrateur peut être la source possible d'un problème de sécurité. Cela se produit souvent lorsqu'un utilisateur possède le SYSDBA ou est DB_OWNER de la base de données SQL Server.

Certains autres problèmes peuvent être liés au fait que l'application s'exécute dans un Terminal Server. Cependant, {{ fr.RDM }} est entièrement compatible avec les Terminal Server.

Les problèmes et solutions liés à FIPS (chiffrement) se trouvent dans la section de dépannage spécifique de FIPS (chiffrement).

Si un [{{ fr.RDMJ }}](/fr/rdm/windows/overview/the-devolutions-platform/rdm-jump/) est configuré, vous pouvez exécuter un test de votre hôte Jump en cliquant sur Jump Test.
![Diagnostic du système – Système](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip10814.png)

## Source de données

L'onglet Source de données contient des informations concernant la source de données actuelle, telles que le nombre d'entrées qu'elle contient, la taille de votre source de données, le nombre d'images personnalisées et l'état hors ligne.

{% snippet, "badgeInfo" %}
Trop d'images personnalisées pourraient considérablement augmenter la taille de la source de données et provoquer un problème de temps de chargement.
{% endsnippet %}

![Diagnostic du système – Source de données](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip11353.png)

## Politique

L'onglet Politique affiche la liste des modèles de stratégie de groupe pour voir si l'un d'eux a été appliqué.
![Diagnostic du système – Politique](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip11354.png)
