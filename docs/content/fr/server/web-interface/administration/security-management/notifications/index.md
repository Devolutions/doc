---
eleventyComputed:
  title: Notifications
  order: 40
---
{% snippet, "badgeInfo" %}
La fonctionnalité [Courriel](/server/web-interface/administration/configuration/server-settings/general/email/) doit être activée et correctement configurée pour que les ***Notifications*** fonctionnent.
{% endsnippet %}

Avec {{ fr.DVLS }}, il est possible de recevoir des notifications par courriel basées sur les activités des utilisateurs avec la fonctionnalité ***Notifications***.

![Notifications](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8153.png)

Pour que la Notification fonctionne, au moins un [Abonné](/server/web-interface/administration/security-management/notifications/subscribers/) et un [Abonnement](/server/web-interface/administration/security-management/notifications/subscriptions/) doivent être créés. Il est également possible de regrouper les Abonnés dans des [Groupes d'Abonnés](/server/web-interface/administration/security-management/notifications/subscriber-groups/) pour envoyer des notifications à un groupe d'abonnés.

L'exemple suivant représente un courriel de notification qui a été reçu pour la création d'une entrée.

![Exemple de notification par courriel](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8159.png)
