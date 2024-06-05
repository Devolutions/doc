---
eleventyComputed:
  title: "{{ fr.VLT_MAJ }} accès dans {{ fr.RDM }}"
  description: Dans {{ fr.RDM }}, les utilisateurs peuvent demander l'accès à un {{ fr.VLT }} public. Un administrateur / propriétaire du {{ fr.VLT }} doit ensuite approuver la demande.
---
Dans {{ fr.RDM }}, les utilisateurs peuvent demander l'accès à un {{ fr.VLT }} public. Un administrateur / propriétaire du {{ fr.VLT }} doit ensuite approuver la demande.

{% snippet, "badgeInfo" %} 
Les utilisateurs peuvent être définis comme propriétaires de {{ fr.VLT }} pour gérer un {{ fr.VLT }} spécifique sans avoir accès à l'administration de la source de données. Ils sont définis dans ***Gestion du {{ fr.VLT }}*** lors de l'édition ou de la création d'un {{ fr.VLT }} dans {{ fr.RDM }}. Pour les sources de données ***Entreprise*** ({{ fr.DVLS }} et {{ fr.DHUBB }}), ils peuvent également être configurés dans leurs interfaces web respectives.
{% endsnippet %}

La visibilité du {{ fr.VLT_MAJ }} est d'une grande importance dans {{ fr.RDM }}, car les demandes d'accès ne peuvent être effectuées que pour les {{ fr.VLT }}s publics et non les privés.
* ***Privé*** : Un {{ fr.VLT }} privé n'est pas visible pour les utilisateurs qui n'y ont pas accès. Ainsi, les demandes d'accès au {{ fr.VLT }} ne peuvent être effectuées. Vous ne pouvez y accéder que sur invitation.
* ***Public*** : Un {{ fr.VLT }} public est visible pour tous les utilisateurs de la source de données, même pour ceux qui n'y ont pas accès. Un utilisateur peut demander l'accès au {{ fr.VLT }} public.

Vous pouvez changer la ***visibilité du {{ fr.VLT_MAJ }}*** soit de manière globale soit individuellement sur le {{ fr.VLT }}. Voir la section suivante pour configurer ce paramètre.

## Configurer la visibilité du {{ fr.VLT }}

{% snippet, "badgeInfo" %} 
Par défaut, les {{ fr.VLT }}s partagés sont définis comme privés dans les ***Paramètres Système***.
{% endsnippet %}

### Visibilité du {{ fr.VLT }} à l'échelle du système

1. Dans {{ fr.RDM }}, assurez-vous d'être connecté à la bonne source de données.
1. Aller à ***Administration – Paramètres Système – Gestion du {{ fr.VLT_MAJ }} – {{ fr.VLT_MAJ }}***.
1. Définir la ***Visibilité par défaut du {{ fr.VLT }}*** soit à ***Public - Autoriser les Demandes d'Accès*** soit à ***Privé - Invitation Seulement***.
1. Cliquer sur ***OK*** pour sauvegarder vos changements.

### Visibilité individuelle du {{ fr.VLT }}

1. Dans {{ fr.RDM }}, assurez-vous d'être connecté à la bonne source de données.
1. Aller à ***Administration – {{ fr.VLT_MAJ }}s***.
1. Pour modifier un {{ fr.VLT }} existant, le sélectionner dans la liste, puis cliquer sur ***Modifier les Paramètres du {{ fr.VLT }}***. Pour créer un nouveau {{ fr.VLT }}, cliquer sur ***Ajouter un {{ fr.VLT }}***.
1. Dans la section ***Général***, changer la ***Visibilité*** à ***Public - Autoriser les Demandes d'Accès***, ***Privé - Invitation Seulement***, ou ***Défaut*** (qui se réfère au paramètre de visibilité du {{ fr.VLT }} à l'échelle du système décrit dans la section précédente).
1. Cliquer sur ***OK*** pour sauvegarder vos changements.

{% snippet, "badgeHelp" %} 
Si votre {{ fr.VLT }} est public, voir comment un utilisateur peut [demander l'accès au {{ fr.VLT }}](/rdm/windows/user-interface/content-area/vault-access/request-vault-access) et comment vous pouvez [approuver cette demande](/rdm/windows/user-interface/content-area/vault-access/approve-vault-access).
{% endsnippet %}