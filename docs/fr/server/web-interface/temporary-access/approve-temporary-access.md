---
eleventyComputed:
  title: Approuver un accès temporaire à une entrée dans {{ fr.DVLS }}
  order: 20
  description: La fonction d'Accès temporaire permet aux utilisateurs de demander une élévation temporaire de leurs permissions pour une entrée spécifique. L'approbateur doit alors approuver ou refuser la demande. 
---

{% snippet icon.badgeInfo %} 
Lorsque vous utilisez une source de données Devolutions Server, Microsoft SQL Server ou Microsoft Azure SQL, vous devez d'abord  [ Activer l'accès temporaire dans {{ fr.RDM }}](/fr/kb/remote-desktop-manager/how-to-articles/enable-temporary-access/). 
{% endsnippet %}

La fonction d'***Accès temporaire*** permet aux utilisateurs de demander une élévation temporaire de leurs permissions pour une entrée spécifique. L'approbateur doit alors approuver ou refuser la demande.
 
Pour apprendre comment afficher les demandes en attente, consultez [Afficher les demandes d'accès temporaire](#view-temporary-access-requests).   

Pour apprendre comment répondre à une demande, consultez [Approuver/refuser les demandes d'accès temporaire](#approvedeny-temporary-access-requests).  

## Afficher les demandes d'accès temporaire 

Pour afficher toutes vos demandes passées et actuelles, vous devez utiliser la boîte ***demandes d'accès en attente*** dans le ***Tableau de bord*** pour ouvrir la fenêtre ***Demandes d'accès temporaire***.
![Tableau de bord – Demandes d'accès en attente](https://webdevolutions.blob.core.windows.net/docs/fr/server/ServerOp6006.png) 

Dans la fenêtre ***Rapport des demandes d'accès temporaire***, vous pouvez voir toutes les demandes d'accès temporaire et les trier par ***Statut***, ***Demandé par***, ***Nom de la connexion***, ***Demandé le***, ***Heure de début demandée***, ***Heure de fin demandée***, ***Durée demandée***, ***Durée de l'autorisation*** et ***Approbateur***.
![Rapport des demandes d'accès temporaire](https://webdevolutions.blob.core.windows.net/docs/fr/server/ServerOp6007.png) 

Il est également possible d'afficher uniquement certaines demandes en utilisant le menu déroulant ***Statut*** ou avec la barre de filtre au haut de la fenêtre.

L'icône en forme d'œil vous permet de visualiser le ***Message de la demande*** et le ***Message d'autorisation*** d'une demande spécifique.
![Messages de la demande](https://webdevolutions.blob.core.windows.net/docs/fr/server/ServerOp6012.png) 

Enfin, en cliquant sur ***Approuver*** ou ***Refuser***, vous ouvrez la fenêtre ***Réponse à la demande d'accès temporaire*** qui est décrite dans la [section suivante](#approvedeny-temporary-access-requests). 

## Approuver/refuser les demandes d'accès temporaire 

{% snippet icon.badgeInfo %} 
La durée de l'***Accès temporaire*** commence lorsque la demande est approuvée.
{% endsnippet %}

Pour répondre à une demande, vous devez ouvrir la fenêtre ***Réponse à la demande d'accès temporaire***. Il y a deux façons d'y accéder.

La première option consiste à utiliser la boîte ***Demandes d'accès en attente*** (voir image ci-dessous) dans l'onglet ***Aperçu*** de votre ***Tableau de bord***. En cliquant sur le crochet vert (approuver la demande) ou le « X » rouge (refuser la demande) à côté d'une demande, vous ouvrirez la fenêtre ***Réponse à la demande d'accès temporaire***.
![Demandes d'accès en attente](https://webdevolutions.blob.core.windows.net/docs/fr/server/ServerOp6013.png) 

La deuxième option vous demande de passer par la boîte ***Demandes d'accès en attente*** décrite dans la [section précédente](#view-temporary-access-requests). Quelle que soit la façon dont vous choisissez d'accéder à la fenêtre de réponse, le résultat sera le même.
![ Réponse à la demande d'accès temporaire](https://webdevolutions.blob.core.windows.net/docs/fr/server/ServerOp6014.png) 

Cette vue est divisée en deux sections :

* La section ***Demander des infos*** contient les informations à propos de la demande de l'utilisateur. Puisque cela a été fait du côté de l'utilisateur, les champs de cette section ne peuvent pas être modifiés. Vous pouvez voir les ***Dépendances de l'entrée***, notamment les identifiants liés et les VPN. À noter que les entrées liées doivent se trouver dans le même coffre. Les identifiants PAM liés à des coffres réguliers ne sont pas pris en compte.

* La section ***Paramètres de la réponse*** vous permet de modifier la durée de l'accès temporaire spécifiée par l'utilisateur. Il est également possible de rédiger un court message à l'intention de l'utilisateur pour leur expliquer votre décision, mais cela reste facultatif.

Cliquer sur ***Approuver*** ou ***Refuser*** permet d'approuver ou de refuser la demande, en fonction de ce que vous avez sélectionné précédemment. Une fenêtre de confirmation s'affiche, que vous pouvez faire disparaître en cliquant sur ***OK***.

{% snippet icon.badgeInfo %} 
Pour en apprendre davantage sur l'expérience de l'utilisateur final dans {{ fr.DVLS }}, consultez [Demander un accès temporaire à une entrée dans {{ fr.DVLS }}](/fr/server/web-interface/temporary-access/request-temporary-access/). 
{% endsnippet %}
