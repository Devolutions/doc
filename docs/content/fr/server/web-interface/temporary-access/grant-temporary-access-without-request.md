---
eleventyComputed:
  title: Octroyer un accès temporaire à une entrée dans {{ fr.DVLS }}
  order: 30
  description: Les approbateurs peuvent octroyer un accès temporaire sans demande à un utilisateur, même si celui-ci a déjà accès.
---
{% snippet, "badgeNotice" %}
Pour apprendre à approuver ou refuser une demande, visiter [Approuver un accès temporaire à une entrée dans {{ fr.DVLS }}](/server/web-interface/temporary-access/approve-temporary-access/).
{% endsnippet %}

La fonctionnalité ***Accès Temporaire*** permet aux utilisateurs de demander une élévation temporaire de leurs permissions pour une entrée spécifique. Les approbateurs peuvent octroyer un ***Accès Temporaire*** sans demande de la part d'un utilisateur et même si l'utilisateur a déjà accès.

## Octroyer un accès temporaire

1. Dans le ***{{ fr.NPANE }}*** de {{ fr.DVLS }}, sélectionner l'entrée à laquelle octroyer l'accès.
1. Cliquer sur ***Plus***, puis sélectionner ***Octroyer un Accès Temporaire***.
![Octroyer un Accès Temporaire](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6027.png)
1. Choisir ***Utilisateur*** et ***Durée d'accès*** dans la fenêtre ***Octroyer un Accès Temporaire***.
![Fenêtre Octroyer un Accès Temporaire](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6030.png)

   Il est possible de voir les ***Dépendances de l'Entrée*** telles que les identifiants liés et les VPNs. Notez que les entrées liées doivent être dans le même {{ fr.VLT }}. Les identifiants avec PAM liés aux {{ fr.VLT }}s réguliers ne sont pas inclus.
=
1. Cliquer sur ***Définir une plage horaire personnalisée*** si vous avez besoin d'octroyer l'accès pour une période de temps spécifique et écrire un court ***Message*** à l'utilisateur expliquant pourquoi vous octroyez l'accès.
1. Cliquer ***Octroyer l'Accès*** pour fermer la fenêtre.

