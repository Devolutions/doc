---
eleventyComputed:
  title: Ensembles de permissions
  description: Les permissions peuvent être regroupées dans des Ensembles de permissions. Il est possible de créer manuellement des ensembles personnalisés ou d'utiliser les ensembles par défaut. Ils sont gérés via {{ fr.RDM }} dans Administration – Paramètres système – Gestion des {{ fr.VLT }}s – Ensembles de permissions.
---
Les permissions peuvent être regroupées dans des ***Ensembles de permissions***. Il est possible de créer manuellement des ensembles personnalisés ou d'utiliser les ensembles par défaut. Ils sont gérés via  {{ fr.RDM }} dans ***Administration – Paramètres système – Gestion des {{ fr.VLT }}s – Ensembles de permissions***.

![Administration – Paramètres système – Gestion des {{ fr.VLT }}s – Ensembles de permissions](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RDMWin2144.png)

## Ensembles de permissions par défaut

Trois ensembles de permissions sont créés par défaut : ***Lecteur***, ***Opérateur*** et ***Contributeur***. Ils ne peuvent être ni modifiés ni supprimés.  
* ***Lecteur*** : Comprend les permissions ***Affichage*** et ***Afficher les informations sensibles***.
* ***Opérateur*** : Comprend les permissions ***Connecter (Exécuter)***, ***Affichage*** et ***Afficher les informations sensibles***.
* ***Contributeur*** : Comprend toutes les permissions disponibles.

## Ensembles de permissions personnalisés

Vous pouvez créer un nouvel ensemble qui répond à vos besoins spécifiques :

1. Dans ***Administration – Paramètres système – Gestion des {{ fr.VLT }}s – Ensembles de permissions***, cliquer sur le bouton ***Nouveau***.

   ![Ajouter un ensemble de permissions](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RDMWin2145.png)

1. Donner un ***Nom*** à votre ensemble personnalisé et cocher chaque permission que vous voulez inclure dans l'ensemble.

   ![Personnalisation de l'ensemble de permissions](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RDMWin2146.png)

1. Cliquer sur ***OK***.

   Vous pouvez maintenant voir votre ensemble de permissions personnalisé sous les ensembles de permissions par défaut dans la vue principale. Vous pouvez à tout moment le ***Modifier*** ou le ***Supprimer*** à l'aide des boutons correspondants.

   ![Survol de l'ensemble de permissions personnalisé](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RDMWin2147.png)

1. Sauvegarder les changements.

{% snippet icon.badgeHelp %}
Voir [Accorder l'accès en lot](/fr/rdm/windows/commands/administration/settings/system-settings/vault-management/batch-grant-access) pour apprendre comment accorder des ensembles de permissions à plusieurs utilisateurs, groupes d'utilisateurs et utilisateurs d'application en même temps.
{% endsnippet %}  
