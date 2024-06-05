---
eleventyComputed:
  title: Attribution d'accès en lot
  description: La fonctionnalité Attribution d'accès en lot vous permet de définir des permissions et des ensembles de permissions pour plusieurs utilisateurs, groupes d'utilisateurs et/ou utilisateurs d'applications à la fois sur des entrées, des dossiers et des {{ fr.VLT }}s.
---
La fonctionnalité ***Attribution d'accès en lot*** permet de définir des permissions et des ensembles de permissions pour plusieurs utilisateurs, groupes d'utilisateurs et/ou utilisateurs d'applications à la fois sur des entrées, des dossiers et des {{ fr.VLT }}s.

## Emplacement
***Attribution d'accès en lot*** se trouve dans les propriétés des entrées, des dossiers et des {{ fr.VLT }}s sous ***Sécurité – Permissions***. Définir les permissions sur ***Personnalisé***, puis cliquer sur ***Attribuer l'accès***.
![Propriétés – Sécurité – Permissions](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2075.png)

Elle peut également être accédée via ***Administration*** :
1. Dans l'interface web {{ fr.DVLS }}, aller à ***Administration – Paramètres Système – Gestion des {{ fr.VLT_MAJ }}s***.
1. Sous ***Permissions par défaut***, sélectionner ***Personnalisé*** dans le menu déroulant ***Permission***.
![Permissions par défaut personnalisées](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2071.png)
1. Cliquer sur ***Attribuer l'accès***.
![Attribuer l'accès](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2072.png)

La fenêtre ***Attribution d'accès en lot*** est maintenant ouverte.
![Attribution d'accès en lot](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2070.png)

La fenêtre est divisée en deux sections : les [paramètres de permission](#permissions) et la [sélection des utilisateurs](#users).

## Paramètres

### Permissions
Dans les paramètres de permission, vous pouvez définir comment les permissions sont appliquées aux utilisateurs dans le menu déroulant ***Permission***. Sélectionner ***Personnalisé*** permet de spécifier dans ***Action*** si les permissions sélectionnées doivent être ajoutées aux permissions existantes, remplacer les permissions existantes, ou être retirées des permissions des utilisateurs sélectionnés.

Ensuite, vous pouvez sélectionner les permissions qui sont affectées par vos choix précédents. Vous pouvez afficher soit ***Toutes les Permissions*** soit des ***Ensembles de Permissions*** précédemment créés (ou par défaut).

{% snippet, "badgeHelp" %}
Les ensembles de permissions sont créés et configurés dans ***Administration – Paramètres Système – Gestion des {{ fr.VLT_MAJ }}s – Ensembles de Permissions***. Pour plus d'informations, voir [Ensembles de Permissions](/server/web-interface/administration/configuration/system-settings/vault-management/permission-sets/).
{% endsnippet %}

![Paramètres de Permission](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2073.png)

### Utilisateurs
Les utilisateurs peuvent être sélectionnés un par un en cochant la case à côté de chacun, mais cette méthode peut être fastidieuse si vous avez beaucoup d'utilisateurs. Des outils sont disponibles pour vous aider dans votre processus de sélection :
* ***Filtrer*** : Filtrer vos utilisateurs, groupes d'utilisateurs et utilisateurs d'applications par ***Nom*** ou ***Description***.
* ***Type*** : Afficher uniquement les utilisateurs, groupes d'utilisateurs ou utilisateurs d'applications.
* ***Sélectionnés*** : Afficher uniquement les utilisateurs, groupes d'utilisateurs ou utilisateurs d'applications sélectionnés ou non sélectionnés.

![Sélection des Utilisateurs](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2074.png)
