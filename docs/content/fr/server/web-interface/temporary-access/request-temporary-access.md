---
eleventyComputed:
  title: Demander un accès temporaire à une entrée dans {{ fr.DVLS }}
  order: 10
  description: La fonction d'Accès temporaire permet aux utilisateurs de demander une élévation temporaire de leurs permissions d'exécution pour une entrée spécifique. L'approbateur doit alors approuver ou refuser la demande. 
---
{% snippet icon.badgeNotice %}

Pour apprendre comment approuver ou refuser une demande, consultez [Approuver un accès temporaire à une entrée dans {{ fr.DVLS }}](/fr/server/web-interface/temporary-access/approve-temporary-access/). 
{% endsnippet %}
 
La fonction d'***Accès temporaire*** permet aux utilisateurs de demander une élévation temporaire de leurs permissions d'exécution pour une entrée spécifique. L'approbateur doit alors approuver ou refuser la demande.

## Demander un accès temporaire 

{% snippet icon.badgeInfo %} 
La durée de l'***Accès temporaire*** commence lorsque la demande est approuvée.
{% endsnippet %}

Suivez les étapes ci-dessous pour savoir comment faire une demande d'accès temporaire :

1. Dans le ***{{ fr.NPANE }}*** de {{ fr.DVLS }}, sélectionnez l'entrée à laquelle accéder.
1. Cliquer sur ***Plus*** – ***Demande d'accès temporaire***. 
![Demande d'accès temporaire](https://cdnweb.devolutions.net/docs/fr/server/ServerOp6015.png)  
1. Dans la fenêtre ***Demande d'accès temporaire***, choisir l'approbateur à qui envoyer la demande.  
1. Sélectionner la ***Durée de l'accès***. Vous pouvez aussi cliquer sur ***Définir une période de temps personnalisée*** si vous avez besoin d'un accès pour une durée déterminée.

![Demande d'accès temporaire](https://cdnweb.devolutions.net/docs/fr/server/ServerOp6017.png)  
5. Rédiger un court ***Message*** à l'intention de l'approbateur expliquant les raisons de cette demande d'accès. Ce message est facultatif, mais vivement recommandé, car il permet à l'approbateur de prendre une décision plus éclairée. Lorsque terminé, cliquer sur ***Envoyer une demande***.

Vous devez maintenant attendre que l'approbateur réponde à votre demande. En fonction de ses paramètres, vous serez peut-être averti par courriel lorsqu'il répondra, que la réponse soit positive ou négative.

Si vous ne recevez pas de courriel, essayez d'accéder à l'entrée dans {{ fr.DVLS }}. Si vous pouvez y accéder, cela signifie que l'approbateur a accepté votre demande. Dans le cas contraire, nous vous suggérons de le contacter pour savoir s'il l'a refusée ou s'il n'a simplement pas encore répondu.

Une fois que l'approbateur vous a approuvé l'accès, vous pouvez aller directement à votre entrée dans {{ fr.RDM }}. Vous avez maintenant temporairement accès à l'entrée.
## Révoquer votre accès temporaire 

Pour n'importe quelle raison, vous pouvez révoquer votre accès temporaire. Assurez-vous d'abord que ce soit bel et bien ce que vous voulez faire, car pour retrouver l'accès à votre entrée, vous devrez faire une autre demande. Sinon, votre accès prendra fin dans le délai fixé par vous et l'approbateur.

1. Aller dans ***Rapports***.  
![Confirmer Révoquer l'accès temporaire](https://cdnweb.devolutions.net/docs/fr/server/ServerOp6002.png)
2. Sélectionner ***Rapport des demandes d'accès temporaire***.
![Rapport des demandes d'accès temporaire](https://cdnweb.devolutions.net/docs/fr/server/ServerOp6003.png)
3. Cliquer sur ***Annuler la requête***.
![Rapport des demandes d'accès temporaire](https://cdnweb.devolutions.net/docs/fr/server/ServerOp6004.png)
1. La prochaine fenêtre indiquera que la révocation a bien été exécutée. Cliquer sur ***Oui*** pour faire disparaître cette fenêtre. 
![Confirmer Annuler la requête](https://cdnweb.devolutions.net/docs/fr/server/ServerOp6005.png)  
Votre accès temporaire a maintenant été révoqué.
