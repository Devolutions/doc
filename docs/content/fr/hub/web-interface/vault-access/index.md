---
eleventyComputed:
  title: "{{ fr.VLT_MAJ }} accès dans {{ fr.DHUBB }}"
  description: "Dans {{ fr.DHUBB }}, les utilisateurs peuvent demander l'accès à un {{ fr.VLT }} public. Un administrateur / propriétaire de {{ fr.VLT }} doit ensuite approuver la demande."
---
Dans {{ fr.DHUBB }}, les utilisateurs peuvent demander l'accès à un {{ fr.VLT }} public. Un administrateur / propriétaire de {{ fr.VLT }} doit ensuite approuver la demande.

{% snippet, "badgeInfo" %}
Cette fonctionnalité est également disponible pour les {{ fr.VLT }}s [PAM {{ fr.VLT }}s](/pam/hub/pam-vaults/).
{% endsnippet %}  

{% snippet, "badgeInfo" %}
Les utilisateurs peuvent être définis comme propriétaires de {{ fr.VLT }} pour gérer un {{ fr.VLT }} spécifique sans avoir accès à l'administration de la source de données. Ils sont définis dans la section ***Visibilité*** lors de l'édition ou de la création d'un {{ fr.VLT }} dans {{ fr.DHUBB }}. Pour les sources de données ***Entreprise*** ({{ fr.DHUBB }} et {{ fr.DHUBB }}), ils peuvent également être configurés dans leurs interfaces web respectives.
{% endsnippet %}

La visibilité de {{ fr.VLT_MAJ }} est d'une grande importance dans {{ fr.DHUBB }}, car les demandes d'accès ne peuvent être effectuées que pour les {{ fr.VLT }}s publics et non les privés.
* ***Privé*** : Un {{ fr.VLT }} privé n'est pas visible par les utilisateurs qui n'y ont pas accès. Ainsi, les demandes d'accès au {{ fr.VLT }} ne peuvent être effectuées. Vous ne pouvez y accéder que sur invitation.
* ***Public*** : Un {{ fr.VLT }} public est visible par tous les utilisateurs de la source de données, même ceux qui n'y ont pas accès. Un utilisateur peut demander l'accès au {{ fr.VLT }} public.

Vous pouvez changer la ***Visibilité*** du {{ fr.VLT }} soit de manière globale soit individuellement sur le {{ fr.VLT }}. Voir la section suivante pour configurer ce paramètre.

## Configurer la visibilité du {{ fr.VLT }}

{% snippet, "badgeInfo" %}
Par défaut, les {{ fr.VLT }}s partagés sont définis comme privés dans les ***Paramètres Système***.
{% endsnippet %}

### Visibilité du {{ fr.VLT }} à l'échelle du système

1. Dans l'interface web de {{ fr.DHUBB }}, assurez-vous d'être connecté à la bonne source de données.
1. Aller à ***Administration – Configuration & Sécurité – Paramètres Système – {{ fr.VLT_MAJ }}***.
1. Définir la ***Visibilité*** soit à ***Public - Autoriser la demande d'accès*** soit à ***Privé - Invitation seulement***.

### Visibilité individuelle du {{ fr.VLT }}

1. Dans l'interface web pour {{ fr.DHUBB }}, assurez-vous d'être connecté à la bonne source de données.
1. Aller à ***Administration – Gestion – {{ fr.VLT_MAJ }}s***.
1. Pour modifier un {{ fr.VLT }} existant, cliquez sur ***Modifier***. Pour créer un nouveau {{ fr.VLT }}, cliquez sur ***Ajouter***.
1. Changez la ***Visibilité*** à ***Public - Autoriser la demande d'accès***, ***Privé - Invitation seulement***, ou ***Défaut*** (qui se réfère au paramètre de visibilité du {{ fr.VLT }} à l'échelle du système décrit dans la section précédente).
1. Cliquez sur ***Mettre à jour*** ou ***Ajouter*** pour sauvegarder vos changements.

{% snippet, "badgeHelp" %}
Si votre {{ fr.VLT }} est public, voyez comment un utilisateur peut [demander l'accès au {{ fr.VLT }}](/hub/web-interface/vault-access/request-vault-access) et comment vous pouvez [approuver cette demande](/hub/web-interface/vault-access/approve-vault-access).
{% endsnippet %}