---
eleventyComputed:
  title: Diagnostic
  description: Si vous rencontrez un problème avec {{ fr.RDM }}, vous pouvez exécuter un diagnostic système, disponible dans ***Aide – Diagnostic***. Cela pourrait aider à diagnostiquer ou donner une indication sur le type de problèmes que vous pourriez rencontrer.
---
Si vous rencontrez un problème avec {{ fr.RDM }}, vous pouvez exécuter un diagnostic système, disponible dans ***Aide – Diagnostic***. Cela pourrait aider à diagnostiquer ou donner une indication sur le type de problèmes que vous pourriez rencontrer.
![Aide – Diagnostic](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10466.png)

## Paramètres

### Système

L'élément administrateur pourrait être la source possible d'un problème de sécurité. Cela arrive souvent lorsqu'un utilisateur a le SYSDBA ou est DB_OWNER de la base de données SQL Server.

D'autres problèmes pourraient être liés au fait que l'application fonctionne dans les Services Terminal. Cependant, {{ fr.RDM }} est entièrement compatible avec les Services Terminal.

Les problèmes et solutions liés à FIPS peuvent être trouvés dans la section spécifique de dépannage FIPS (Chiffrement).
![Diagnostic Système – Système](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10467.png)

### Sessions

L'onglet Sessions contient des informations concernant vos sessions RDP, ARD et VNC tenues dans votre Source de Données.
![Diagnostic Système – Sessions](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10468.png)

### Source de Données
L'onglet Source de Données contient des informations concernant votre Source de Données, y compris le nombre d'entrées qu'elle contient, la taille de votre source de données, le nombre d'images personnalisées et l'état hors ligne.
{% snippet, "badgeInfo" %}
Avoir trop d'images personnalisées pourrait augmenter considérablement la taille de la source de données et causer des problèmes de temps de chargement.
{% endsnippet %}

![Diagnostic Système – Source de Données](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10469.png)
