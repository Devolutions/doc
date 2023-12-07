---
eleventyComputed:
  title: Demander un accès temporaire à une entrée dans {{ fr.DHUBB }}
  order: 10
  description: La fonction d'accès temporaire permet aux utilisateurs de demander une élévation temporaire de leurs permissions pour une entrée spécifique. L'approbateur doit alors approuver ou refuser la demande. 
---
{% snippet icon.badgeInfo %} 
Pour apprendre comment approuver ou refuser une demande, consultez [Approuver un accès temporaire à une entrée dans {{ fr.DHUBB }}](/fr/hub/web-interface/hub-overview/temporary-access/approve-temporary-access/). 
{% endsnippet %}
 
La fonction d'***Accès temporaire*** permet aux utilisateurs de demander une élévation temporaire de leurs permissions pour une entrée spécifique. L'approbateur doit alors approuver ou refuser la demande. 

## Demander un accès temporaire 

{% snippet icon.badgeInfo %} 
La durée de ***l'Accès temporaire*** commence lorsque la demande est approuvée.
{% endsnippet %}

Suivez les étapes ci-dessous pour apprendre comment demander un accès temporaire :  

1. Dans l'onglet ***{{ fr.VLT_MAJ }}***, sélectionner l'entrée à laquelle accéder dans le {{ fr.VLT }} de votre choix. 
1. Cliquer sur ***Plus***, puis sélectionner ***Demande d'accès temporaire***.  
![Demande d'accès temporaire](https://webdevolutions.blob.core.windows.net/docs/fr/hub/Hub6033.png) 
1. Dans la fenêtre ***Demande d'accès temporaire***, sélectionner la ***Durée de l'accès*** dans la liste déroulante.  
![Durée de l'accès](https://webdevolutions.azureedge.net/docs/fr/hub/Hub2133.png) 
1. Sélectionner le niveau de ***Permissions*** à obtenir temporairement entre ***Lecteurs***, ***Opérateurs*** et ***Collaborateurs*** à l'aide de la liste déroulante.  
![Permissions](https://webdevolutions.azureedge.net/docs/fr/hub/Hub2134.png) 

En passant votre souris sur l'icône de l'œil alors qu'un niveau de ***Permissions*** est sélectionné, vous pouvez voir quelles permissions il comprend. Par exemple, l'image suivante montre les permissions pour le rôle d'***Opérateurs***.  
![Contenu des permissions](https://webdevolutions.azureedge.net/docs/fr/hub/Hub2135.png) 

Pour vous aider à décider quel rôle sélectionner, vous pouvez visiter [Rôles et permissions](/fr/hub/web-interface/hub-overview/administration/configuration-security/system-permissions/roles-permissions/).  

5. Sélectionner l'approbateur à qui envoyer la demande en utilisant la liste déroulante. Il est possible d'affiner la recherche en utilisant la barre de filtre. 
![Envoyer la demande à](https://webdevolutions.blob.core.windows.net/docs/fr/hub/Hub6035.png) 
1. Rédiger un court ***Message*** à l'intention de l'approbateur expliquant les raisons de cette demande d'accès. Ce message est facultatif, mais vivement recommandé, car il permet à l'approbateur de prendre une décision plus éclairée. Lorsque terminé, cliquer sur ***Envoyer une demande***.  

![Rédiger un message](https://webdevolutions.blob.core.windows.net/docs/fr/hub/Hub6038.png)

Vous devez maintenant attendre que l'approbateur réponde à votre demande. Vous serez informé par courriel, que la réponse soit positive ou négative. La section suivante détaille ce qu'il faut faire une fois que vous avez reçu une réponse. 

## Réponse à votre requête 

Si l'approbateur accepte votre demande, au bas de votre courriel se trouvera un bouton qui vous amènera directement à votre entrée dans {{ fr.DHUBB }}. Il est également possible d'accéder manuellement à votre entrée.  
![Courriel de confirmation](https://webdevolutions.azureedge.net/docs/fr/hub/Hub2137.png) 

Une fois que vous êtes sur l'entrée dans le {{ fr.VLT }}, vous verrez une section ***Demande d'accès temporaire*** près du haut. Une coche valide l'approbation de votre demande. À côté de la coche se trouve le temps restant pour votre demande. Il y a également l'option ***Afficher les détails*** qui est décrit dans la section suivante.  

Vous pouvez maintenant effectuer votre tâche avec cette permission élevée.  
![Demande d'accès temporaire approuvée](https://webdevolutions.blob.core.windows.net/docs/fr/hub/Hub6039.png) 

## Afficher les détails et révoquer votre accès temporaire 

***Afficher les détails*** vous permet de consulter des informations sur votre demande d'accès temporaire et de révoquer votre accès.  

Dans la section supérieure, vous pouvez consulter les détails de votre demande, tels que l'***Utilisateur***, le niveau de ***Permissions*** et la durée. Vous pouvez également lire le message que vous avez envoyé à l'approbateur.

Plus bas, vous trouverez la réponse de l'approbateur. Ce dernier peut modifier votre demande s'il le juge nécessaire.

Enfin, pour n'importe quelle raison, vous pouvez révoquer votre accès temporaire en cliquant sur ***Révoquer***. Assurez-vous d'abord que ce soit bel et bien ce que vous voulez faire, car pour retrouver l'accès à votre entrée, vous devrez faire une autre demande. Sinon, votre accès prendra fin dans le délai fixé par vous et l'approbateur.  
![Détails et révocation de l'accès temporaire](https://webdevolutions.blob.core.windows.net/docs/fr/hub/Hub6037.png) 
