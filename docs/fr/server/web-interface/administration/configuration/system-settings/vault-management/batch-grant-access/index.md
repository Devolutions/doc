---
title: Accorder l'accès en lot
description: La fonctionnalité Accorder l'accès en lot permet de définir des permissions et ensembles de permissions à plusieurs utilisateurs, groupes d'utilisateurs et/ou utilisateurs d'application en même temps sur des entrées, dossiers ou coffres.
---
La fonctionnalité ***Accorder l'accès en lot*** permet de définir des permissions et ensembles de permissions à plusieurs utilisateurs, groupes d'utilisateurs et/ou utilisateurs d'application en même temps sur des entrées, dossiers ou coffres.

## Emplacement

***Accorder l'accès en lot*** se trouve dans les propriétés des entrées, dossiers et coffres sous ***Sécurité – Autorisations***. Définissez les autorisations à ***Personnalisé***, puis cliquez sur ***Accorder l'accès***.

![Propriétés – Sécurité – Permissions](/img/fr/server/ServerOp2052.png)

On peut également y accéder par le menu ***Administration*** :
1. Dans l'interface Web de {{ fr.DVLS }}, aller dans ***Administration – Paramètres du système – Gestion des coffres***.
1. Sous ***Permissions par défaut***, sélectionner ***Personnalisé*** dans le menu déroulant ***Autorisation***.
![Permissions par défaut personnalisées](/img/fr/server/ServerOp2047.png)
1. Cliquer sur ***Accorder l'accès***.
![Accorder l'accès](/img/fr/server/ServerOp2048.png)

La fenêtre ***Accorder l'accès en lot*** est maintenant ouverte.

![Accorder l'accès en lot](/img/fr/server/ServerOp2049.png)

La fenêtre est divisée en deux sections : les <a href="#permissions">paramètres des permissions</a> et la <a href="#utilisateurs">sélection des utilisateurs</a>.

## Paramètres

### Permissions

Dans les paramètres des permissions, vous pouvez définir la façon dont les permissions sont appliquées aux utilisateurs dans le menu déroulant ***Autorisation***. Sélectionner ***Personnalisé*** vous permet de spécifier dans ***Action*** si les permissions que vous sélectionnez doivent être ajoutées aux permissions déjà définies, remplacer celles qui sont définies ou être retirées des permissions des utilisateurs sélectionnés.

Ensuite, vous pouvez sélectionner les permissions qui sont affectées par vos choix précédents. Vous pouvez afficher soit ***Toutes les permissions*** ou les ***Ensembles de permissions*** créés précédemment (ou ceux créés par défaut).

{% snippet icon.badgeInfo %} 
Les ensembles de permissions sont créés et configurés dans ***Administration – Paramètres du système – Gestion des coffres – Ensemble de permissions***.
{% endsnippet %}

![Paramètres des permissions](/img/fr/server/ServerOp2050.png)

### Utilisateurs

Les utilisateurs peuvent être sélectionnés un par un en cochant la case à côté de chacun d'eux, mais cette méthode peut s'avérer fastidieuse si vous avez beaucoup d'utilisateurs. Des outils sont disponibles pour vous aider dans votre processus de sélection :
* ***Filtre*** : Filtrer vos utilisateurs, groupes d'utilisateurs et utilisateurs d'applications par ***Nom*** ou ***Description***.
* ***Type*** : Afficher seulement les utilisateurs les groupes d'utilisateurs ou les utilisateurs d'application.
* ***Sélectionné*** : Afficher seulement les utilisateurs, groupes d'utilisateurs et utilisateurs d'application sélectionnés ou non sélectionnés.

![Sélection des utilisateurs](/img/fr/server/ServerOp2051.png)
