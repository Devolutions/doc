---
title: Diagnostic
---
Si vous rencontrez un problème avec {{ fr.RDM }} , vous pouvez exécuter un diagnostic système, disponible dans ***Aide - Diagnostic*** . Cela pourrait aider à diagnostiquer ou à indiquer le type de problèmes que vous pourriez rencontrer.  
![Aide - Diagnostic](/img/fr/rdm/mac/clip4229.png) 

## Paramètres 

### Système 

L&apos;élément administrateur peut être la source possible d&apos;un problème de sécurité. Cela se produit souvent lorsqu&apos;un utilisateur possède le SYSDBA ou est DB_OWNER de la base de données SQL Server.  

Certains autres problèmes peuvent être liés au fait que l&apos;application s&apos;exécute dans un Terminal Server. Cependant, {{ fr.RDM }} est entièrement compatible avec les services Terminal Server.  

Les problèmes et solutions liés à FIPS se trouvent dans la section de dépannage spécifique de FIPS (chiffrement).  
![Diagnostic du système - Système](/img/fr/rdm/mac/clip4230.png) 

### Sessions 

L&apos;onglet ***Sessions*** contient des informations concernant vos sessions RDP, ARD et VNC détenues dans votre source de données.  
![Diagnostic du système - Sessions](/img/fr/rdm/mac/clip4231.png) 

### Source de données 

L&apos;onglet ***Source de données*** contient des informations concernant votre source de données, notamment le nombre d&apos;entrées qu&apos;elle contient, la taille de votre source de données, le nombre d&apos;images personnalisées et l&apos;état hors ligne. 

{% snippet icon.badgeInfo %} 
Trop d&apos;images personnalisées pourraient considérablement augmenter la taille de la source de données et provoquer un problème de temps de chargement. 
{% endsnippet %}
 
![Diagnostic du système - Sources de données](/img/fr/rdm/mac/clip4232.png) 
