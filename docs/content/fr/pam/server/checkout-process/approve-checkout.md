---
eleventyComputed:
  title: Approuver la réservation
  description: La fonctionnalité de demande de réservation permet aux utilisateurs de demander une réservation temporaire pour une entrée spécifique.
---
{% snippet, "badgeNotice" %}
Une licence est requise pour activer le module de Gestion des Accès Privilégiés (PAM). Veuillez contacter notre [département des ventes](mailto:sales@devolutions.net) pour plus d'informations sur la licence.
{% endsnippet %}

La fonctionnalité de demande de réservation permet aux utilisateurs de demander une réservation temporaire pour une entrée spécifique. L'approbateur doit ensuite approuver ou refuser la demande de réservation.

## Voir les demandes de réservation

Pour voir toutes vos demandes de réservation passées et actuelles, aller à ***Administration – Accès privilégié – Réservations***. Vous pouvez voir toutes vos demandes d'accès temporaire et les trier par ***Compte privilégié, Demandé par, Approbateur, Statut, Ticket, Raison, Heure de début, Heure de fin, et Durée***.

Les demandes de réservation sont également affichées dans la boîte ***Réservations PAM*** ci-dessous.

![Réservations PAM](https://cdnweb.devolutions.net/docs/DVLS6010_2023_3.png)

## Approuver/Demander des réservations

La durée de la réservation commence lorsque la demande est approuvée.

La vue est divisée en deux sections :

* La section supérieure contient des informations sur la demande de l'utilisateur. Vous pouvez également voir qui examine la demande. Comme cela a été fait du côté de l'utilisateur, les champs de cette section ne peuvent pas être modifiés.

* La section ***En attente d'approbation*** vous permet de changer la durée d'accès de réservation spécifiée par l'utilisateur. Il est possible d'écrire un message à l'utilisateur expliquant votre décision, mais cela reste facultatif.
Cliquer sur ***Approuver*** ou ***Refuser*** pour approuver ou refuser la demande.
![Fenêtre de demande en attente](https://cdnweb.devolutions.net/docs/DVLS6009_2023_3.png)  
Vous pouvez également assigner l'examen à un autre approbateur en cliquant sur ***Assigner l'examen*** (flèche blanche à côté de Approuver). Une fenêtre de confirmation apparaît, vous demandant de confirmer si vous souhaitez assigner un nouvel examinateur.  
![Fenêtre de confirmation](https://cdnweb.devolutions.net/docs/DVLS6007_2023_3.png)
Choisir l'***examinateur*** et cliquer sur ***sélectionner***. 
![Sélectionner l'examinateur](https://cdnweb.devolutions.net/docs/DVLS6008_2023_3.png)

## Annuler la demande de réservation

Après approbation, pour quelque raison que ce soit, vous pouvez révoquer l'accès de réservation de l'utilisateur en revenant à ***Administration – Accès privilégié – Réservations*** et en cliquant sur ***Voir le détail de la demande*** (icône œil) – ***Annuler la demande***. Assurez-vous de vouloir faire cela d'abord, car pour regagner l'accès à l'entrée, ils devront faire une autre demande. Sinon, leur accès se terminera dans le délai fixé.

![Annuler la demande](https://cdnweb.devolutions.net/docs/DVLS6013_2023_3.png)