---
eleventyComputed:
  title: Octroi d'accès en lot
  description: La fonctionnalité d'Octroi d'Accès en Lot vous permet de définir des permissions et des ensembles de permissions pour plusieurs utilisateurs, groupes d'utilisateurs et/ou utilisateurs d'applications à la fois sur des entrées, dossiers et {{ fr.VLT }}s.
---
La fonctionnalité ***Octroi d'Accès en Lot*** permet d'attribuer des permissions et des ensembles de permissions à plusieurs utilisateurs, groupes d'utilisateurs et/ou utilisateurs d'applications à la fois sur des entrées, dossiers et {{ fr.VLT }}s.

## Emplacement
***Octroi d'Accès en Lot*** se trouve dans les propriétés des entrées, dossiers et {{ fr.VLT }}s sous ***Sécurité – Permissions*** (ou ***Sécurité – Permissions héritées*** pour la racine du {{ fr.VLT }}). Définir les permissions sur ***Personnalisé***, puis cliquer sur ***Octroyer l'Accès***.
![Propriétés – Sécurité – Permissions](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2185.png)

Il est également accessible via ***Administration*** :
1. Dans {{ fr.RDM }}, aller à ***Administration – Paramètres Système – Gestion des {{ fr.VLT_MAJ }}s***.
1. Sous ***Permissions par Défaut***, sélectionner ***Personnalisé*** dans le menu déroulant ***Permission***.
![Permissions par Défaut Personnalisées](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2186.png)
1. Cliquer sur ***Octroyer l'Accès***.
![Octroyer l'Accès](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2187.png)

La fenêtre ***Octroi d'Accès en Lot*** est maintenant ouverte.

La fenêtre est divisée en deux sections : les [paramètres de permission](#permissions) et la [sélection des utilisateurs](#users).
![Octroi d'Accès en Lot](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2188.png)

## Paramètres

### Permissions
Dans les paramètres de permission, vous pouvez sélectionner les permissions à octroyer. Vous pouvez soit octroyer des ***Permissions*** individuelles ou des ***Ensembles de Permissions*** précédemment créés (ou par défaut).

{% snippet, "badgeHelp" %}
Les ensembles de permissions sont créés et configurés dans ***Administration – Paramètres Système – Gestion des {{ fr.VLT_MAJ }}s – Ensembles de Permissions***. Pour plus d'informations, voir [Ensembles de Permissions](/rdm/windows/commands/administration/settings/system-settings/vault-management/permission-sets/).
{% endsnippet %}

![Paramètres de Permission](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2189.png)

### Utilisateurs
Les utilisateurs peuvent être sélectionnés un par un en cochant la case à côté de chacun, mais cette méthode peut être fastidieuse si vous avez beaucoup d'utilisateurs. Des outils sont disponibles pour vous aider dans votre processus de sélection :
* ***Filtrer*** : Filtrer vos utilisateurs, groupes d'utilisateurs et utilisateurs d'applications par ***Nom*** ou ***Description***.
* ***Type*** : Afficher uniquement les utilisateurs, groupes d'utilisateurs ou utilisateurs d'applications.
* ***Sélectionnés*** : Afficher uniquement les utilisateurs, groupes d'utilisateurs et utilisateurs d'applications sélectionnés ou non sélectionnés.

![Sélection des Utilisateurs](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2190.png)
