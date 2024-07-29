```yaml
---
eleventyComputed:
  title: Compte
  description: L'onglet Compte vous donne accès aux paramètres pour personnaliser votre interface {{ fr.RDM }}.
---
```
L'onglet ***Compte*** vous donne accès aux paramètres pour personnaliser votre interface {{ fr.RDM }}. En haut, les informations concernant le compte connecté à {{ fr.RDM }} sont affichées.
![Onglet Compte](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2075.png)

## Informations sur le compte

Contient des informations sur le compte, telles que ***nom, email, et statut {{ fr.VLT }}***. Des étiquettes privilégiées et externes peuvent être ajoutées lors de la création ou de l'édition des utilisateurs via l'interface web de [{{ fr.DVLS }}](/server/web-interface/administration/security-management/users/) ou [{{ fr.DHUBB }}](/hub/web-interface/administration/management/users/) (selon votre source de données). Elles sont utiles pour les utilisateurs temporaires, tels que les ***contractuels***. Une date d'expiration doit être définie.

## Paramètres

{% snippet, "badgeInfo" %}
Les modifications effectuées dans la section ***Paramètres*** sont appliquées à votre application {{ fr.RDM }}. Cela signifie que même si vous changez de compte ou de source de données, les paramètres resteront en vigueur.
{% endsnippet %}

Sous ***Paramètres***, vous pouvez choisir le [thème](/rdm/mac/user-interface/customization/theme/) de votre application {{ fr.RDM }} entre le thème ***Clair*** et le thème ***Sombre***. Vous pouvez également choisir de refléter le thème de votre système.

Ensuite, vous pouvez également changer le [style de l'en-tête principal (menu supérieur)](/rdm/mac/user-interface/ribbon/) de votre application {{ fr.RDM }}. Choisissez entre une vue ***Ruban*** ou une vue ***Classique***.

## Profil de l'interface utilisateur

{% snippet, "badgeInfo" %}
Les changements de profil de l'interface utilisateur sont appliqués à votre compte dans la source de données actuelle. Cela signifie que si vous changez votre profil d'interface utilisateur dans une source de données {{ fr.DHUB }} ou {{ fr.DVLS }} dans {{ fr.RDM }}, le changement sera également effectué dans l'interface web de cette source de données, et vice versa.
{% endsnippet %}

***Les profils d'interface utilisateur*** permettent aux utilisateurs d'avoir une expérience sur mesure dans {{ fr.RDM }} et d'autres produits Devolutions en fonction de leurs tâches et rôles.

* ***Professionnel de l'informatique*** : Une interface complète avec des capacités avancées et toutes les fonctionnalités de connexion à distance.
* ***Utilisateur d'affaires*** : Une interface simplifiée pour gérer des informations sensibles, telles que les mots de passe.

{% snippet, "badgeHelp" %}
Pour un aperçu plus détaillé des profils, voir [Profils d'interface utilisateur](/rdm/mac/user-interface/customization/usage-profiles/).
{% endsnippet %}

Le profil peut également être sélectionné lors du processus d'intégration de {{ fr.RDM }}. Si aucun n'est choisi ou si l'utilisateur décide d'en choisir un plus tard, il se verra attribuer le profil ***Par défaut***, qui peut être modifié dans ***Fichier – Préférences – Interface utilisateur – Profil de l'interface utilisateur*** ou dans l'interface web.