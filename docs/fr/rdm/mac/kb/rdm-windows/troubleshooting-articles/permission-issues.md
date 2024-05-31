---
eleventyComputed:
  title: Problèmes de permissions
  description: Malgré avoir configuré vos permissions (qu'elles soient définies par héritage ou avec des permissions personnalisées), vous pourriez constater qu'elles ne sont pas correctement appliquées.
---
Malgré avoir configuré vos permissions (qu'elles soient définies par héritage ou avec des permissions personnalisées), vous pourriez constater qu'elles ne sont pas correctement appliquées.

## Solution 1

Lors de la création d'utilisateurs, s'assurer que leur type d'utilisateur est défini sur ***Utilisateur***.

![!!Création d'utilisateur](https://cdnweb.devolutions.net/docs/RDMW4028_2024_1.png)

{% snippet, "badgeInfo" %}
Les types d'utilisateurs des utilisateurs existants peuvent être consultés à tout moment dans ***Administration*** – ***Utilisateurs***, sous la colonne ***Type d'Utilisateur***.
{% endsnippet %}

## Solution 2

Souvent, les utilisateurs sont créés et ne se voient pas attribuer directement des permissions, mais sont plutôt ajoutés à des groupes d'utilisateurs qui possèdent ces permissions. Pour vérifier si c'est le cas, aller à ***Administration*** – ***Utilisateurs***, et consulter la colonne ***Groupes d'Utilisateurs***. Vous pouvez ensuite [réaffecter les utilisateurs à différents groupes d'utilisateurs ou les retirer](https://docs.devolutions.net/rdm/user-groups-based-access-control/) selon les besoins.

![!!Colonne des groupes d'utilisateurs](https://cdnweb.devolutions.net/docs/RDMW4030_2024_1.png)

## Solution 3

Si les permissions sont appliquées pour tout sauf un sous-ensemble d'entrées, il se peut que ces entrées héritent de leurs permissions d'un dossier parent qui n'hérite pas de ses propres permissions des paramètres du coffre.

Pour remédier à cela, cliquer avec le bouton droit sur le dossier parent, aller à ***Propriétés*** – ***Sécurité*** – ***Permissions*** et s'assurer que la permission est définie sur ***Héritée***.

![Permissions d'un dossier parent](https://cdnweb.devolutions.net/docs/RDMW4033_2024_1.png)
