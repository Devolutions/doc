---
eleventyComputed:
  title: Compte
  description: L'onglet Compte vous donne accès aux paramètres pour personnaliser votre interface {{ fr.RDM }}.
---
L'onglet ***Compte*** vous donne accès aux paramètres pour personnaliser votre interface {{ fr.RDM }}. En haut, les informations concernant le compte connecté à {{ fr.RDM }} sont affichées.
![Onglet Compte](https://cdnweb.devolutions.net/docs/RDMW6013_2023_2.png)

## Informations sur le compte

Contient toutes les informations du compte, telles que ***nom, email et statut {{ fr.VLT }}***. Une étiquette interne et externe peut être ajoutée à l'utilisateur via l'interface web de [{{ fr.DVLS }}](/server/web-interface/administration/security-management/users/) ou [{{ fr.DHUBB }}](/hub/web-interface/administration/management/users/) (selon votre source de données). Ces étiquettes sont utiles pour les utilisateurs temporaires, tels que les ***contractuels***. Une date d'expiration doit être définie.

## Paramètres

{% snippet, "badgeInfo" %}
Les modifications apportées dans la section ***Paramètres*** sont appliquées à votre application {{ fr.RDM }}. Cela signifie que même si vous changez de compte ou de source de données, les paramètres seront toujours en vigueur.
{% endsnippet %}

Sous ***Paramètres***, vous pouvez choisir le [thème](/rdm/windows/user-interface/customization/theme/) de votre application {{ fr.RDM }} entre le thème ***Clair*** et le thème ***Sombre***. Vous pouvez également choisir de refléter le thème de votre système.

Ensuite, vous pouvez également changer le [style de l'en-tête principal (menu du haut)](/rdm/windows/user-interface/customization/style/) de votre application {{ fr.RDM }}. Choisissez entre une vue ***Ruban*** ou une vue ***Menu***.

## Profil de l'interface utilisateur

{% snippet, "badgeInfo" %}
Les changements de profil de l'interface utilisateur sont appliqués à votre compte dans la source de données actuelle. Cela signifie que si vous changez votre profil d'interface utilisateur dans une source de données {{ fr.DHUB }} ou {{ fr.DVLS }} dans {{ fr.RDM }}, le changement sera également effectué dans l'interface web de cette source de données, et vice versa.
{% endsnippet %}

Les ***profils d'interface utilisateur*** permettent aux utilisateurs d'avoir une expérience sur mesure dans {{ fr.RDM }} et d'autres produits Devolutions en fonction de leurs tâches et rôles.

* ***Professionnel de l'informatique*** : Une interface complète avec toutes les capacités et toutes les fonctionnalités de connexion à distance.
* ***Utilisateur d'affaires*** : Une interface simplifiée pour la gestion des informations sensibles, telles que les mots de passe.

{% snippet, "badgeHelp" %}
Pour un aperçu plus détaillé des profils, voir [Profils d'interface utilisateur](/rdm/windows/user-interface/customization/usage-profiles/).
{% endsnippet %}

Le profil peut également être sélectionné pendant le processus d'intégration de {{ fr.RDM }}. Si aucun n'est choisi ou si l'utilisateur décide d'en choisir un plus tard, il sera attribué au profil ***Par défaut***, qui peut être modifié dans ***Fichier – Paramètres – Interface utilisateur – Profil de l'interface utilisateur*** ou dans l'interface web.