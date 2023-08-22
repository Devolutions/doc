---
eleventyComputed:
  title: Approuver un accès temporaire à une entrée dans {{ fr.DHUBB }}
  order: 20
  description: La fonction d'accès temporaire permet aux utilisateurs de demander une élévation temporaire de leurs permissions pour une entrée spécifique. L'approbateur doit ensuite approuver ou refuser la demande.  
---
{% snippet icon.badgeInfo %} 
La fonction d'***Accès temporaire*** est également disponible dans {{ fr.RDM }} avec {{ fr.DHUBB }}. Vous pouvez afficher et approuver les demandes d'accès temporaire dans {{ fr.RDM }} même si la demande a été faite dans {{ fr.DHUBB }}. Visitez [Approuver un accès temporaire à une entrée dans {{ fr.RDM }}](/fr/rdm/windows/user-interface/content-area/temporary-access/approve-temporary-access/) pour en savoir plus. 
{% endsnippet %}
 
La fonction d'***Accès temporaire*** permet aux utilisateurs de demander une élévation temporaire de leurs permissions pour une entrée spécifique. L'approbateur doit ensuite approuver ou refuser la demande.  

Pour apprendre comment afficher les demandes en attente, consultez [Afficher les demandes d'accès temporaire](#afficher-les-demandes-daccès-temporaire).  

Pour apprendre comment répondre à une demande, consultez [Approuver/refuser les demandes d'accès temporaire](#approuverrefuser-les-demandes-daccès-temporaire).  

## Afficher les demandes d'accès temporaire 

Lorsqu'un utilisateur vous envoie une demande d'accès temporaire, vous en êtes automatiquement informé par courriel. Vous pouvez cliquer sur ***Aller au tableau de bord de l'entrée*** pour visualiser la demande directement dans l'entrée dans {{ fr.DHUBB }}.  
![Courriel de demande d'accès temporaire](https://webdevolutions.azureedge.net/docs/fr/hub/Hub2140.png) 

Une fois que vous êtes sur l'entrée, vous verrez une section ***Demande d'accès temporaire*** près du haut. Cliquer sur ***Afficher les détails*** ouvre la fenêtre ***Demande d'accès temporaire***, qui est décrite dans la [section suivante](#approuverrefuser-les-demandes-daccès-temporaire). 36![Demande d'accès temporaire à partir de l'entrée](https://webdevolutions.blob.core.windows.net/docs/fr/hub/Hub6040.png) 

Notez que vous pouvez également voir toutes les demandes d'accès temporaire en attente d'un coffre sélectionné dans la case ***Demande d'accès temporaire*** du ***Tableau de bord***. Cliquer sur une demande vous amène à l'entrée.  
![Demande d'accès temporaire à partir du Tableau de bord](https://webdevolutions.blob.core.windows.net/docs/fr/hub/Hub6041.png) 

## Approuver/refuser les demandes d'accès temporaire 

{% snippet icon.badgeInfo %} 
La durée de l'***Accès temporaire*** commence lorsque la demande est approuvée.
{% endsnippet %}

Lorsque l'entrée est sélectionnée, cliquer sur ***Afficher les détails*** dans la section ***Demande d'accès temporaire*** vous permet de voir les informations sur la demande ainsi que d'approuver/refuser celle-ci.  
![Afficher les détails](https://webdevolutions.azureedge.net/docs/fr/hub/Hub2143.png) 

Dans la section supérieure, vous pouvez voir les détails de la demande tels que les ***Entrées liées***, l'***Utilisateur***, le niveau de ***Permissions*** et la ***Durée***. Il est possible de modifier le niveau de ***Permissions***, la ***Durée*** et de laisser un message à l'utilisateur.

Enfin, vous pouvez ***Approuver*** ou ***Refuser*** la demande d'accès temporaire en cliquant sur le bouton correspondant.  
![Approuver/Refuser la demande d'accès temporaire](https://webdevolutions.blob.core.windows.net/docs/fr/hub/Hub6042.png) 

Après l'approbation, pour quelque raison que ce soit, vous pouvez révoquer l'accès temporaire de l'utilisateur en cliquant à nouveau sur ***Afficher les détails***, puis en cliquant sur ***Révoquer***. Assurez-vous que d'abord que c'est bel et bien ce que vous voulez faire, car pour retrouver l'accès à l'entrée, l'utilisateur devra faire une autre demande. Sinon, leur accès prendra fin dans le délai fixé.  
![Révoquer l'accès temporaire](https://webdevolutions.blob.core.windows.net/docs/fr/hub/Hub6043.png) 

{% snippet icon.badgeInfo %} 
Pour en apprendre davantage sur l'expérience de l'utilisateur final dans {{ fr.DHUBB }}, consultez [Demander un accès temporaire à une entrée dans {{ fr.DHUBB }}](/fr/hub/web-interface/hub-overview/temporary-access/request-temporary-access/). 
{% endsnippet %}
