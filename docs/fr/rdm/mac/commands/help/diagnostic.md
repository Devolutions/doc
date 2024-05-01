---
eleventyComputed:
  title: Diagnostic
---
Si vous rencontrez un problème avec {{ fr.RDM }}, vous pouvez exécuter un diagnostic système, disponible dans ***Aide - Diagnostic***. Cela pourrait aider à diagnostiquer ou à indiquer le type de problèmes que vous pourriez rencontrer.
![Aide - Diagnostic](https://cdnweb.devolutions.net/docs/fr/rdm/mac/clip4229.png)

## Paramètres

### Système

L'élément administrateur peut être la source possible d'un problème de sécurité. Cela se produit souvent lorsqu'un utilisateur possède le SYSDBA ou est DB_OWNER de la base de données SQL Server.

Certains autres problèmes peuvent être liés au fait que l'application s'exécute dans un Terminal Server. Cependant, {{ fr.RDM }} est entièrement compatible avec les services Terminal Server.

Les problèmes et solutions liés à FIPS se trouvent dans la section de dépannage spécifique de FIPS (chiffrement).
![Diagnostic du système - Système](https://cdnweb.devolutions.net/docs/fr/rdm/mac/clip4230.png)

### Sessions

L'onglet ***Sessions*** contient des informations concernant vos sessions RDP, ARD et VNC détenues dans votre source de données.
![Diagnostic du système - Sessions](https://cdnweb.devolutions.net/docs/fr/rdm/mac/clip4231.png)

### Source de données

L'onglet ***Source de données*** contient des informations concernant votre source de données, notamment le nombre d'entrées qu'elle contient, la taille de votre source de données, le nombre d'images personnalisées et l'état hors ligne.

{% snippet icon.badgeInfo %}
Trop d'images personnalisées pourraient considérablement augmenter la taille de la source de données et provoquer un problème de temps de chargement.
{% endsnippet %}

![Diagnostic du système - Sources de données](https://cdnweb.devolutions.net/docs/fr/rdm/mac/clip4232.png)
