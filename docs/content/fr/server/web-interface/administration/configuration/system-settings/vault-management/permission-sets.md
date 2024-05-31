---
eleventyComputed:
  title: Ensembles de permissions
  description: Les permissions peuvent être regroupées dans des ensembles de permissions. Il est possible de créer des ensembles personnalisés manuellement ou d'utiliser les ensembles par défaut. Ils sont gérés via l'interface web {{ fr.DVLS }} dans Administration – Paramètres Système – {{ fr.VLT_MAJ }} Gestion – Ensembles de Permissions.
---
Les permissions peuvent être regroupées dans des ***Ensembles de Permissions***. Il est possible de créer des ensembles personnalisés manuellement ou d'utiliser les ensembles par défaut. Ils sont gérés via l'interface web {{ fr.DVLS }} dans ***Administration – Paramètres Système – {{ fr.VLT_MAJ }} Gestion – Ensembles de Permissions***.

![Administration – Paramètres Système – {{ fr.VLT_MAJ }} Gestion – Ensembles de Permissions](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2091.png)

## Ensembles de permissions par défaut

Trois ensembles de permissions sont créés par défaut : ***Lecteur***, ***Opérateur***, et ***Contributeur***. Ils ne peuvent pas être édités ou supprimés.
* ***Lecteur*** : Inclut les permissions ***Voir*** et ***Voir les informations sensibles***.
* ***Opérateur*** : Inclut les permissions ***Connecter (exécuter)***, ***Voir***, ***Voir les informations sensibles***.
* ***Contributeur*** : Inclut toutes les permissions disponibles.

## Ensembles de permissions personnalisés

Créer un nouvel ensemble qui répond à vos besoins spécifiques :

1. Dans ***Administration – Paramètres Système – {{ fr.VLT_MAJ }} Gestion – Ensembles de Permissions***, cliquer sur le bouton ***Ajouter***.

   ![Ajouter un ensemble de permissions](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2092.png)

1. Donner un ***Nom*** à votre ensemble personnalisé et cocher chaque permission que vous souhaitez inclure dans l'ensemble.

   ![Personnaliser l'ensemble de permissions](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2093.png)

1. Cliquer ***OK***.

   Vous pouvez maintenant voir votre ensemble de permissions personnalisé à côté de ceux par défaut dans la vue principale. À tout moment, vous pouvez ***Éditer*** ou ***Supprimer*** celui-ci en utilisant les boutons correspondants.

   ![Aperçu de l'ensemble de permissions personnalisé](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2094.png)

1. Sauvegarder vos changements.

{% snippet, "badgeHelp" %}
Voir [Attribution de Permissions en Lot](/server/web-interface/administration/configuration/system-settings/vault-management/batch-grant-access/) pour apprendre à attribuer des ensembles de permissions à plusieurs utilisateurs, groupes d'utilisateurs et utilisateurs d'applications en une seule fois.
{% endsnippet %}
