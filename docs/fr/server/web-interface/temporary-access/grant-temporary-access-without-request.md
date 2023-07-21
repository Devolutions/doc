---
eleventyComputed:
  title: Accorder un accès temporaire à une entrée dans {{ fr.DVLS }}
  order: 30
  description:  Les approbateurs peuvent accorder un accès temporaire sans demande à un utilisateur et même si ce dernier dispose déjà d'un accès.
---

{% snippet icon.badgeNotice %} 
Pour apprendre comment approuver et refuser une demande, consultez [Approuver un accès temporaire à une entrée dans {{ fr.DVLS }}](/fr/server/web-interface/temporary-access/approve-temporary-access/). 
{% endsnippet %}

La fonction d'***Accès temporaire*** permet aux utilisateurs de demander une élévation temporaire de leurs permissions pour une entrée spécifique. Les approbateurs peuvent accorder un ***accès temporaire*** sans demande à un utilisateur et même si ce dernier dispose déjà d'un accès.

## Accorder un accès temporaire

1. Dans le ***Tableau de bord*** de {{ fr.DVLS }}, sélectionnez l'entrée à laquelle vous souhaitez accorder l'accès.  
1. Cliquer sur ***Plus*** – ***Accorder un accès temporaire***.  
![Accorder un accès temporaire](https://webdevolutions.blob.core.windows.net/docs/fr/server/ServerOp6000.png)  
Choisir l'***Utilisateur*** et la ***Durée de l'accès*** dans la fenêtre ***Accorder un accès temporaire***.  
![Fenêtre Accorder un accès temporaire](https://webdevolutions.blob.core.windows.net/docs/fr/server/ServerOp6011.png)  

Vous pouvez consulter les ***Dépendances de l'entrée***, comme que les identifiants et les VPN liés. À noter que les ***entrées liées*** doivent se trouver dans le même coffre. Les identifiants PAM liés à des coffres réguliers ne sont pas pris en compte.
 
 4. Cliquer sur ***Définir une période de temps personnalisée*** si vous avez besoin d'accorder l'accès pour une durée déterminée et écrivez un court ***Message*** à l'utilisateur expliquant pourquoi vous accordez l'accès.  

 1. Cliquer sur ***Accorder l'accès*** pour fermer la fenêtre. 

L'***accès temporaire*** a été accordé.



