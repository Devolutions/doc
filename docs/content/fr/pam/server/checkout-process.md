---
eleventyComputed:
  title: Processus de réservation
  description: Utiliser le processus de réservation PAM et la réservation PAM avec une plage horaire personnalisée.
---
{% snippet, "badgeNotice" %}
Une licence est requise pour activer le module de Gestion des Accès Privilégiés (PAM). Veuillez contacter notre [département des ventes](mailto:sales@devolutions.net) pour plus d'informations sur la licence.
{% endsnippet %}

Ce sujet couvrira à la fois le [processus de réservation PAM](#checkout) et la [réservation PAM utilisant une plage horaire personnalisée](#checkout-with-custom-time). Cette dernière option est particulièrement utile pour la maintenance planifiée en dehors des heures de travail normales lorsque les approbateurs ne sont pas disponibles.

{% youtube 'drRLA7U8YsQ?si=ihVhTcJOKxAh5kKS&amp;start=91' %}

## Réservation
1. Dans l'interface web pour {{ fr.DVLS }}, s'assurer d'être connecté à la bonne source de données.
1. Aller à l'onglet ***Accès Privé*** et sélectionner le {{ fr.VLT }} désiré.
1. Cliquer sur une entrée puis cliquer sur ***Réserver***.
![Réserver](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0036.png)
1. Sélectionner à qui envoyer la demande.

{% snippet, "badgeInfo" %}
Sélectionner ***Tous les Approbateurs*** accélère le processus en permettant au premier approbateur disponible de confirmer la demande.
{% endsnippet %}

5. Définir le moment souhaité de la ***Demande de Réservation*** soit en sélectionnant dans la liste déroulante ***Durée d'accès*** soit en définissant manuellement un temps personnalisé avec les champs ***Heures*** et ***minutes***.
   {% snippet, "badgeInfo" %}
   Le temps minimum de réservation est de 10 minutes.
   {% endsnippet %}
1. Cliquer sur le bouton ***Demander la Réservation*** pour confirmer et fermer cette boîte de dialogue.
![Demande de Réservation](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6112.png)

## Réservation avec temps personnalisé
{% snippet, "badgeInfo" %}
Faire une demande de ***Réservation*** à l'avance est uniquement disponible dans les PAM {{ fr.VLT }}s.
{% endsnippet %}

1. Dans l'interface web pour {{ fr.DVLS }}, s'assurer d'être connecté à la bonne source de données.
1. Aller à l'onglet ***Accès Privé*** et sélectionner le {{ fr.VLT }} désiré.
1. Cliquer sur une entrée puis cliquer sur ***Réserver***.
![Réserver](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0036.png)
1. Activer ***Définir une plage horaire personnalisée***.
![PAM réservation avec plage horaire personnalisée](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0035.png)
1. Choisir l'***Heure de début*** et l'***Heure de fin***.
1. Cliquer sur le bouton ***Réserver*** pour confirmer et fermer cette boîte de dialogue.
