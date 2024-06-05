---
eleventyComputed:
  title: Ensembles de permissions
  description: Les permissions peuvent être regroupées dans des ensembles de permissions. Il est possible de créer des ensembles personnalisés manuellement ou d'utiliser les ensembles par défaut. Ils sont gérés via le {{ fr.RDM }} dans Administration – Paramètres Système – {{ fr.VLT_MAJ }} Gestion – Ensembles de Permissions.
---
Les permissions peuvent être regroupées dans des ***Ensembles de Permissions***. Il est possible de créer des ensembles personnalisés manuellement ou d'utiliser les ensembles par défaut. Ils sont gérés via {{ fr.RDM }} dans ***Administration – Paramètres Système – {{ fr.VLT_MAJ }} Gestion – Ensembles de Permissions***.

![Administration – Paramètres Système – {{ fr.VLT_MAJ }} Gestion – Ensembles de Permissions](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2191.png)

## Ensembles de permissions par défaut

Trois ensembles de permissions sont créés par défaut : ***Lecteur***, ***Opérateur*** et ***Contributeur***. Ils ne peuvent pas être modifiés ou supprimés.
* ***Lecteur*** : Comprend les permissions ***Voir*** et ***Voir les informations sensibles***.
* ***Opérateur*** : Comprend les permissions ***Connecter (exécuter)***, ***Voir***, ***Voir les informations sensibles***.
* ***Contributeur*** : Comprend toutes les permissions disponibles.

## Ensembles de permissions personnalisés

Créer un nouvel ensemble qui répond à vos besoins spécifiques :

1. Dans ***Administration – Paramètres Système – {{ fr.VLT_MAJ }} Gestion – Ensembles de Permissions***, cliquer sur le bouton ***Nouveau***.

   ![Ajouter un ensemble de permissions](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2192.png)

1. Donner un ***Nom*** à votre ensemble personnalisé et cocher chaque permission que vous souhaitez inclure dans l'ensemble.

   ![Personnaliser l'ensemble de permissions](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2193.png)

1. Cliquer sur ***OK***.

   Vous pouvez maintenant voir votre ensemble de permissions personnalisé aux côtés de ceux par défaut dans la vue principale. À tout moment, vous pouvez ***Modifier*** ou ***Supprimer*** celui-ci en utilisant les boutons correspondants.

   ![Aperçu de l'ensemble de permissions personnalisé](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2194.png)

1. Cliquer à nouveau sur ***OK*** pour sauvegarder vos modifications.

{% snippet, "badgeHelp" %}
Voir [Attribution de Permissions en Lot](/rdm/commands/administration/settings/system-settings/vault-management/default-permissions/batch-grant-access/) pour apprendre à attribuer des ensembles de permissions à plusieurs utilisateurs, groupes d'utilisateurs et utilisateurs d'applications en une seule fois.
{% endsnippet %}
