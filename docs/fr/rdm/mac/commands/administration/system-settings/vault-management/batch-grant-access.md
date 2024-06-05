---
eleventyComputed:
  title: Octroyer des accès en lot
  description: La fonctionnalité d'octroi d'accès en lot vous permet de définir des permissions et des ensembles de permissions pour plusieurs utilisateurs, groupes d'utilisateurs et/ou utilisateurs d'applications à la fois sur des entrées, des dossiers et des {{ fr.VLT }}s.
---
La fonctionnalité ***Octroyer des Accès en Lot*** permet d'assigner des permissions et des ensembles de permissions à plusieurs utilisateurs, groupes d'utilisateurs et/ou utilisateurs d'applications à la fois sur des entrées, des dossiers et des {{ fr.VLT }}s.

## Emplacement
***Octroyer des Accès en Lot*** se trouve dans les propriétés des entrées, des dossiers et des {{ fr.VLT }}s sous ***Sécurité – Permissions – Onglet Permissions***. Définir les permissions sur ***Personnalisé***, puis cliquer sur ***Octroyer la Permission***.

![Propriétés – Sécurité – Permissions – Onglet Permissions](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2101.png)

Il est également accessible via ***Administration*** :
1. Dans {{ fr.RDM }}, aller à ***Administration – Paramètres Système – Gestion des {{ fr.VLT_MAJ }}s***.
1. Sous ***Permissions par Défaut***, sélectionner ***Personnalisé*** dans le menu déroulant ***Permission***.
![Permissions par Défaut Personnalisées](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2102.png)
1. Cliquer sur ***Octroyer l'Accès***.
![Octroyer l'Accès](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2103.png)

La fenêtre ***Octroyer des Accès en Lot*** est maintenant ouverte.
![Octroyer des Accès en Lot](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2104.png)

La fenêtre est divisée en deux sections : les [paramètres de permission](#permissions) et la [sélection des utilisateurs](#users).

## Paramètres

### Permissions
Dans les paramètres de permission, vous pouvez sélectionner les permissions à octroyer. Vous pouvez afficher soit des ***Permissions*** individuelles soit des ***Ensembles de Permissions*** précédemment créés (ou par défaut).

{% snippet, "badgeHelp" %}
Les ensembles de permissions sont créés et configurés dans ***Administration – Paramètres Système – Gestion des {{ fr.VLT_MAJ }}s – Ensembles de Permissions***. Pour plus d'informations, voir [Ensembles de Permissions](/rdm/mac/commands/administration/system-settings/vault-management/permission-sets/).
{% endsnippet %}

![Paramètres de Permission](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2105.png)

### Utilisateurs
Les utilisateurs peuvent être sélectionnés un par un en cochant la case à côté de chacun, mais cette méthode peut être fastidieuse si vous avez beaucoup d'utilisateurs. Des outils sont disponibles pour vous aider dans votre processus de sélection :
* ***Recherche*** : Filtrer vos utilisateurs, groupes d'utilisateurs et utilisateurs d'applications par ***Nom*** ou ***Description***.
* ***Type*** : Afficher uniquement les utilisateurs, groupes d'utilisateurs ou utilisateurs d'applications.
* ***Sélectionnés*** : Afficher uniquement les utilisateurs, groupes d'utilisateurs et utilisateurs d'applications sélectionnés ou non sélectionnés.

![Sélection des Utilisateurs](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2106.png)
