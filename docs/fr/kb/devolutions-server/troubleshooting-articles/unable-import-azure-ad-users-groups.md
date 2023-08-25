---
title: Impossible d'importer des utilisateurs ou des groupes d'Azure AD
---
Il est possible que le cache d'Azure AD stocké dans {{ fr.DVLS }} ne soit pas correctement chargé. Voici les étapes à suivre pour résoudre ce problème. 
{% snippet icon.badgeCaution %} 
Si vous venez d'activer l'option d'Authentification Microsoft, le chargement du cache peut prendre un certain temps (environ une heure) avant de permettre d'importer des utilisateurs et des groupes d'utilisateurs. 
{% endsnippet %}
 
## Solution 
1. Sur la {{ fr.DVLSCONSOLE }}, aller dans l'onglet ***Compagnons*** et arrêter le ***Service de planification***. 
![!!KB4052.png](https://webdevolutions.azureedge.net/docs/fr/kb/KB4052.png) 
1. Sur l'interface Web {{ fr.DVLS }}, aller dans ***Administration – Paramètres Serveur – Journalisation*** et activer l'option ***Log de débogage***.  
![!!KB4053.png](https://webdevolutions.azureedge.net/docs/fr/kb/KB4053.png) 
1. Aller dans ***Administration – Réinitialiser le cache du serveur*** et réinitialiser le cache d'***Authentification de Microsoft***.  
![!!KB4054.png](https://webdevolutions.azureedge.net/docs/fr/kb/KB4054.png) 
1. Dans ***Rapports – Journaux de la source de données***, surveiller les journaux jusqu'à ce que vous obteniez l'entrée de journal de fin de mise à jour du cache d'Azure. 
{% snippet icon.badgeInfo %} 
Le processus peut prendre un certain temps en fonction du nombre de groupes, d'utilisateurs et de leurs relations dans Azure AD. 
{% endsnippet %}
 
5. Une fois terminé, essayez d'importer un utilisateur ou un groupe. 
1. En cas de succès, adapter le taux de réactualisation dans ***Administration – Paramètres Serveur – Authentification – Authentification Microsoft – Cache des utilisateurs et des groupes de l'authentification Microsoft*** afin de laisser suffisamment de temps pour rafraîchir complètement le cache de la AAD.  
![!!KB4055.png](https://webdevolutions.azureedge.net/docs/fr/kb/KB4055.png) 
1. De retour dans la {{ fr.DVLSCONSOLE }}, aller dans les ***Compagnons*** pour démarrer le ***Service de planification***.  
![!!KB4056.png](https://webdevolutions.azureedge.net/docs/fr/kb/KB4056.png) 
1. Sur l'interface Web {{ fr.DVLS }}, aller dans ***Administration – Paramètres Serveur – Journalisation*** et désactiver l'option ***Log de débogage***. 
