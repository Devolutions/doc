---
eleventyComputed:
  title: Ensembles de permissions
  description: Les permissions peuvent être regroupées dans des ensembles de permissions. Il est possible de créer des ensembles personnalisés manuellement ou d'utiliser les ensembles par défaut. Ils sont gérés via le {{ fr.RDM }} dans Administration – Paramètres du système – Gestion du {{ fr.VLT_MAJ }} – Ensembles de permissions.
---
Les permissions peuvent être regroupées dans des ***Ensembles de permissions***. Il est possible de créer des ensembles personnalisés manuellement ou d'utiliser les ensembles par défaut. Ils sont gérés via {{ fr.RDM }} dans ***Administration – Paramètres du système – Gestion du {{ fr.VLT_MAJ }} – Ensembles de permissions***.

![Administration – Paramètres du système – Gestion du {{ fr.VLT_MAJ }} – Ensembles de permissions](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2097.png)

## Ensembles de permissions par défaut

Trois ensembles de permissions sont créés par défaut : ***Lecteur***, ***Opérateur*** et ***Contributeur***. Ils ne peuvent pas être modifiés ou supprimés.
* ***Lecteur*** : Comprend les permissions ***Voir*** et ***Voir les informations sensibles***.
* ***Opérateur*** : Comprend les permissions ***Connecter (exécuter)***, ***Voir***, ***Voir les informations sensibles***.
* ***Contributeur*** : Comprend toutes les permissions disponibles.

## Ensembles de permissions personnalisés

Créer un nouvel ensemble qui répond à vos besoins spécifiques :

1. Dans ***Administration – Paramètres du système – Gestion du {{ fr.VLT_MAJ }} – Ensembles de permissions***, cliquer sur le bouton ***Nouveau***.

   ![Ajouter un ensemble de permissions](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2098.png)

1. Donner un ***Nom*** à votre ensemble personnalisé et cocher chaque permission que vous souhaitez inclure dans l'ensemble.

   ![Personnaliser l'ensemble de permissions](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2099.png)

1. Cliquer sur ***OK***.

   Vous pouvez maintenant voir votre ensemble de permissions personnalisé à côté de ceux par défaut dans la vue principale. À tout moment, vous pouvez ***Modifier*** ou ***Supprimer*** celui-ci en utilisant les boutons correspondants.

   ![Aperçu de l'ensemble de permissions personnalisé](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2100.png)

1. Cliquer à nouveau sur ***OK*** pour sauvegarder vos modifications.

{% snippet, "badgeHelp" %}
Voir [Attribution de permissions en lot](/rdm/mac/commands/administration/system-settings/vault-management/batch-grant-access) pour apprendre comment attribuer des ensembles de permissions à plusieurs utilisateurs, groupes d'utilisateurs et utilisateurs d'applications en une seule fois.
{% endsnippet %}
