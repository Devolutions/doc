---
eleventyComputed:
  title: Approuver l'accès au {{ fr.VLT }} dans {{ fr.WMAPP }}
  order: 20
  description: Dans {{ fr.DVLS }}, les utilisateurs peuvent demander l'accès à un {{ fr.VLT }} public. Un administrateur / propriétaire du {{ fr.VLT }} peut approuver la demande via {{ fr.WMAPP }}
---
Dans {{ fr.DVLS }}, [demander l'accès à un {{ fr.VLT }} public](/server/web-interface/vault-access/request-vault-access). Un administrateur ou le propriétaire du {{ fr.VLT }} peut approuver la demande via {{ fr.WMAPP }}.

## Voir les demandes d'accès au {{ fr.VLT }} en attente

Les ***Demandes d'Accès au {{ fr.VLT_MAJ }}*** peuvent être consultées en utilisant le bouton ***Messages***.

{% snippet, "badgeInfo" %}
Si un propriétaire du {{ fr.VLT }} est désigné pour le {{ fr.VLT }} demandé, l'administrateur ne recevra pas de ***Message***.
{% endsnippet %}

## Approuver / Refuser les demandes d'accès au {{ fr.VLT }}

La boîte de message affiche des informations sur la demande. Cliquer sur l'***œil*** pour voir les détails de la demande.

Cette vue est divisée en deux sections :

* La section ***Informations sur la Demande*** contient des informations sur la demande de l'utilisateur.

* La section ***Paramètres de Réponse*** vous permet de changer la ***durée d'accès*** et d'écrire un ***message*** à l'utilisateur expliquant votre décision (facultatif). Enfin, vous pouvez ***Approuver*** ou ***Refuser*** la demande.
