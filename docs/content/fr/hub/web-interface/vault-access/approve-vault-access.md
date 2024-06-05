---
eleventyComputed:
  title: Approuver l'accès au {{ fr.VLT }} dans {{ fr.DHUBB }}
  order: 20
  description: Dans {{ fr.DHUBB }}, les utilisateurs peuvent demander l'accès à un {{ fr.VLT }} public. Un administrateur / propriétaire de {{ fr.VLT }} doit ensuite approuver la demande.
---
Dans {{ fr.DHUBB }}, les utilisateurs peuvent demander l'accès à un {{ fr.VLT }} public. Un administrateur / propriétaire de {{ fr.VLT }} doit ensuite approuver la demande. Les propriétaires de {{ fr.VLT_MAJ }} sont configurés dans ***Administration – Gestion – {{ fr.VLT_MAJ }}s*** lors de la création ou de l'édition d'un {{ fr.VLT }}, sous l'option ***Visibilité***.

## Voir les demandes d'accès au {{ fr.VLT }} en attente

Pour accepter les demandes en attente, cliquer sur une entrée spécifique dans la section ***Demandes d'accès au {{ fr.VLT }} en attente***, qui se trouve dans le ***Tableau de bord***. Cela ouvrira la fenêtre ***Demande d'approbation*** décrite dans la section suivante.

{% snippet, "badgeInfo" %}
Les demandes en attente ne s'afficheront dans le ***Tableau de bord*** que si vous êtes dans un {{ fr.VLT }} auquel un utilisateur a demandé l'accès.
{% endsnippet %}

## Approuver / Refuser les demandes d'accès au {{ fr.VLT }}

{% snippet, "badgeInfo" %}
Selon la source de données, les administrateurs / propriétaires de {{ fr.VLT }} peuvent recevoir un courriel les informant de la demande d'accès au {{ fr.VLT }} :
* Avec une source de données {{ fr.DHUBB }}, un courriel de demande d'accès au {{ fr.VLT }} est envoyé à l'administrateur / propriétaire de {{ fr.VLT }} à qui la demande a été adressée.
* Avec une source de données {{ fr.DVLS }}, tous les administrateurs / propriétaires de {{ fr.VLT }} reçoivent un courriel de demande d'accès au {{ fr.VLT }}.
* Avec une source de données SQL, aucun courriel n'est envoyé.
{% endsnippet %}

Pour accepter les demandes en attente, utiliser la section ***Demandes d'accès au {{ fr.VLT }} en attente*** (voir l'image ci-dessous) dans votre ***Tableau de bord***. Cliquer sur la demande ouvrira la fenêtre ***Demande d'approbation***.

![Demandes d'accès au {{ fr.VLT }} en attente](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub0000.png)

![Approuver ou Refuser la demande](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub0001.png)

Cette vue est divisée en deux sections :

* La section ***Pour*** contient des informations sur la demande de l'utilisateur. Comme cela a été fait du côté de l'utilisateur, les champs de cette section ne peuvent pas être modifiés.
* La section ***En attente d'approbation*** vous permet d'écrire un message à l'utilisateur expliquant votre décision, mais cela reste facultatif.

{% snippet, "badgeInfo" %}
Le niveau de ***Permissions*** défini par l'utilisateur faisant la demande peut être modifié par l'approbateur. Vous pouvez en savoir plus sur [Rôles et permissions](/hub/web-interface/administration/configuration-security/system-permissions/roles-permissions).
{% endsnippet %}

Cliquer sur ***Approuver*** ou ***Refuser*** enverra la réponse avec les paramètres sélectionnés.

{% snippet, "badgeHelp" %}
Pour en savoir plus sur l'expérience utilisateur final dans {{ fr.DHUBB }}, visiter [Demander l'accès au {{ fr.VLT }} dans {{ fr.DHUBB }}](/hub/web-interface/vault-access/request-vault-access).
{% endsnippet %}
