---
eleventyComputed:
  title: Demander l'accès à un compte privilégié
  order: 10
  description: La fonctionnalité de Réservation permet aux utilisateurs de demander un accès temporaire à une entrée de compte privilégié dans un PAM {{ fr.VLT }}. L'approbateur doit ensuite approuver ou refuser la demande.
---
{% snippet, "badgeInfo" %}
Le sujet suivant se concentre sur la réalisation d'une demande de réservation depuis l'interface web de {{ fr.DHUBB }}. Notez que cette fonctionnalité est également disponible dans {{ fr.RDM }} avec {{ fr.DHUBB }}, soit en accédant à l'entrée de compte privilégié dans le PAM {{ fr.VLT }}, soit en se connectant à une session à distance liée.

Il est également possible d'accéder au compte privilégié dans l'interface web de {{ fr.DHUBB }} même si vous faites la demande dans {{ fr.RDM }}.
{% endsnippet %}

{% snippet, "badgeHelp" %}
Pour apprendre à approuver ou refuser une demande, visitez [Approuver l'accès à un compte privilégié](/pam/hub/privileged-accounts/approve-access-privileged-account/).
{% endsnippet %}

La fonctionnalité PAM ***Réservation*** permet aux utilisateurs de demander un accès temporaire à une entrée de compte privilégié dans un PAM {{ fr.VLT }}. L'approbateur doit ensuite approuver ou refuser la demande.

## Demande de réservation de compte privilégié

{% snippet, "badgeInfo" %}
La durée de l'accès commence lorsque la demande est approuvée.
{% endsnippet %}

Suivre les étapes ci-dessous pour apprendre à faire une demande de réservation :

1. Dans l'onglet ***{{ fr.VLT_MAJ }}***, sélectionner le PAM {{ fr.VLT }} en utilisant le sélecteur.
1. Sélectionner l'entrée de compte privilégié que vous souhaitez accéder, puis cliquer sur ***Réservation***.

   {% snippet, "badgeInfo" %}
   Utiliser les boutons pour copier et voir le mot de passe ouvre également la même fenêtre de ***demande de réservation***.
   {% endsnippet %}

   ![Réservation de compte privilégié](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2319.png)
1. Dans la fenêtre de ***demande de réservation***, sélectionner l'approbateur à qui vous souhaitez envoyer votre demande en utilisant la liste déroulante. Vous pouvez également utiliser la barre de filtre pour affiner votre recherche.
![Envoyer la demande à](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2304.png)
1. Sélectionner la ***Durée d'accès*** dans le menu déroulant.
![Durée d'accès](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2305.png)
1. Écrire un court ***Commentaire*** à l'approbateur expliquant pourquoi vous souhaitez accéder à cette entrée.
![Commentaire](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2310.png)
1. Lorsque vous avez terminé, cliquer sur ***Demander la réservation***.

Vous devez maintenant attendre que l'approbateur réponde à votre demande. Vous serez notifié par courriel si la réponse est positive ou négative. La section suivante détaille ce qu'il faut faire une fois que vous avez reçu une réponse.

## Réponse à votre demande

Si votre demande est approuvée, votre courriel aura un bouton en bas qui vous amènera directement à votre entrée dans {{ fr.DHUBB }}. Il est également possible d'aller manuellement à votre entrée.
![Courriel de confirmation](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2306.png)
Une fois que vous êtes sur l'entrée dans le PAM {{ fr.VLT }}, vous verrez en haut que votre demande de réservation a été approuvée et que l'entrée est déjà réservée par vous. Un signe de validation indique que votre demande a été approuvée. À côté du signe de validation se trouve le ***Temps restant*** sur votre demande. Il y a aussi une option ***Voir les détails*** qui est décrite dans la section suivante.

Maintenant que vous pouvez copier et voir le mot de passe de ce compte privilégié en utilisant les icônes correspondantes, vous pouvez effectuer vos tâches.
![Demande de réservation approuvée](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2318.png)

## Voir les détails et restituer l'entrée de compte privilégié

***Voir les détails*** vous permet de voir des informations sur votre demande de réservation ainsi que de restituer l'entrée.

Dans la section supérieure, vous pouvez voir la ***Durée demandée*** et le ***Temps restant*** sur votre accès. L'approbateur peut modifier la durée de votre accès si nécessaire lors de l'approbation de la demande.

Plus bas se trouve votre message et le message de l'approbateur.

Enfin, vous pouvez restituer votre entrée de compte privilégié en cliquant sur ***Restituer*** ou en utilisant le même bouton que vous avez utilisé pour la réserver. Lorsque vous restituez l'entrée, le mot de passe du compte privilégié est automatiquement réinitialisé et l'ancien mot de passe devient inutile. Assurez-vous de vouloir faire cela d'abord, car pour regagner l'accès à votre entrée, vous devrez faire une autre demande. Sinon, votre accès se terminera dans le délai fixé par vous et l'approbateur.

![Détails de la demande de réservation et restitution](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2309.png)