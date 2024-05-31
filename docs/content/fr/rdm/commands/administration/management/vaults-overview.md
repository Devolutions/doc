---
eleventyComputed:
  title: "{{ fr.VLT_MAJ }}s aperçu"
  description: "{{ fr.VLT_MAJ }}s sont des conteneurs qui organisent vos dossiers et entrées. Ils aident à diviser vos Sources de Données Avancées en plusieurs compartiments."
---
{{ fr.VLT_MAJ }}s sont des conteneurs qui organisent vos dossiers et entrées. Ils aident à diviser vos ***Sources de Données Avancées*** en plusieurs compartiments. {{ fr.VLT_MAJ }}s améliorent la sécurité et l'expérience utilisateur de {{ fr.RDM }}, ainsi que sa performance en limitant la quantité d'entrées qui se chargent en une fois.

{% snippet, "badgeHelp" %}
Pour apprendre sur les différents types de {{ fr.VLT }} et les moyens d'y accéder, visiter [{{ fr.VLT_MAJ }}s](/rdm/windows/commands/view/panels/vault/).
{% endsnippet %}

Ce sujet couvre les éléments suivants :

* [Créer un {{ fr.VLT }}](#create-a-vault)
* [Naviguer entre les {{ fr.VLT }}s](#navigate-between-vaults)
* [Déplacer des entrées vers un différent {{ fr.VLT }}](#move-entries-to-a-different-vault)
* [Donner aux utilisateurs et groupes d'utilisateurs l'accès à un {{ fr.VLT }}](#give-users-and-user-groups-access-to-a-vault)
* [Créer et utiliser des raccourcis de {{ fr.VLT }}](#create-and-use-vault-shortcuts)

## Créer un {{ fr.VLT }}

Suivre les étapes ci-dessous pour apprendre comment créer un nouveau {{ fr.VLT }}.

{% snippet, "shieldNotice" %}
Pour des raisons de sécurité et de performance, nous recommandons de créer un différent {{ fr.VLT }} pour chaque client et/ou département, selon comment vous utilisez {{ fr.RDM }}.
{% endsnippet %}

1. Dans le ***Ribbon***, aller à ***Administration – Gestion – {{ fr.VLT_MAJ }}s***.
![Administration – Gestion – {{ fr.VLT_MAJ }}s](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11300.png)
{% snippet, "badgeHelp" %}
Si vous utilisez une source de données {{ fr.DVLS }} ou {{ fr.DHUBB }}, la gestion des {{ fr.VLT }}s est effectuée dans leurs interfaces web respectives. Pour plus d'informations, consulter soit [{{ fr.DVLS }} {{ fr.VLT }}s](/server/web-interface/administration/security-management/vaults/) ou [{{ fr.DHUB }} {{ fr.VLT }}s](/hub/web-interface/administration/management/vaults/).
{% endsnippet %}

2. Dans la fenêtre ***Gestion des Utilisateurs et de la Sécurité***, sélectionner l'onglet ***{{ fr.VLT_MAJ }}s***, puis cliquer sur ***Ajouter {{ fr.VLT }}***.
![Ajouter {{ fr.VLT }}](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10739.png)
1. Dans l'onglet ***Général***, un ***ID*** est généré automatiquement. Entrer un ***Nom*** (obligatoire) et une ***Description*** (optionnelle) pour votre nouveau {{ fr.VLT }}.
La configuration ***Visibilité*** détermine si ce {{ fr.VLT }} spécifique est visible pour tous les utilisateurs (public) ou seulement pour les utilisateurs qui ont accès au {{ fr.VLT }} (privé). Elle est réglée sur le paramètre par défaut, qui peut être modifié dans ***Administration – Paramètres Système – Gestion des {{ fr.VLT_MAJ }}s – {{ fr.VLT_MAJ }}***.
Le {{ fr.VLT }} peut être créé dès qu'un ***Nom*** a été spécifié, mais d'autres options sont disponibles. Elles sont présentées à l'étape suivante.

{% snippet, "badgeInfo" %}
Pour utiliser un modèle de {{ fr.VLT }} existant, le sélectionner dans la liste déroulante ***Modèle***. Contrairement aux autres paramètres, celui-ci ne peut pas être configuré ultérieurement puisqu'il change la manière dont le {{ fr.VLT }} est créé. Apprendre sur [***Modèles***](/rdm/windows/commands/file/templates/) avant de décider.
{% endsnippet %}

{% snippet, "badgeInfo" %}
L'option ***Permettre hors ligne*** est activée par défaut. Si elle est désactivée, le nouveau {{ fr.VLT }} ne pourra pas être utilisé en [mode Hors ligne](/rdm/windows/data-sources/offline-mode/). Ce paramètre peut encore être modifié après la création du {{ fr.VLT }} en retournant à ***Administration – Gestion – {{ fr.VLT_MAJ }}s***, en sélectionnant le {{ fr.VLT }} à modifier et en cliquant sur ***Modifier les Paramètres du {{ fr.VLT }}***.
{% endsnippet %}

![Gestion des {{ fr.VLT_MAJ }}s – Général](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2161.png)

4. Optionnel : Les options ***Utilisateurs et Groupes d'Utilisateurs***, ***Sécurité***, et ***Propriétaires du {{ fr.VLT_MAJ }}*** sont disponibles dans les autres onglets du menu de gauche. Les configurer selon vos besoins maintenant, ou le faire plus tard en retournant à ***Administration – Gestion – {{ fr.VLT_MAJ }}s***, en sélectionnant le {{ fr.VLT }} à modifier et en cliquant sur ***Modifier les Paramètres du {{ fr.VLT }}***.
    * ***Utilisateurs et Groupes d'Utilisateurs*** : Choisir quels ***Utilisateurs*** et ***Groupes d'Utilisateurs*** auront accès au {{ fr.VLT }} en les cochant/décochant. Pour des raisons de sécurité, les administrateurs ont toujours accès.
    * ***Sécurité*** : Spécifier un ***Mot de passe maître*** pour l'accès au {{ fr.VLT }} et indiquer si l'ancien mot de passe doit être demandé lors de la réécriture du mot de passe.
    * ***Propriétaires du {{ fr.VLT_MAJ }}*** : Sélectionner des groupes d'utilisateurs ou des utilisateurs pour être propriétaires de ce {{ fr.VLT }}, signifiant qu'ils peuvent gérer ce {{ fr.VLT }} spécifique sans avoir accès à l'administration de la source de données.

5. Cliquer sur ***OK*** lorsque terminé.
1. Le nouveau {{ fr.VLT }} apparaîtra dans la fenêtre ***Gestion des Utilisateurs et de la Sécurité***. Vous pouvez ***Fermer*** cette vue pour accéder au {{ fr.VLT }} depuis le ***{{ fr.NPANE }}***.
![Nouveau {{ fr.VLT }} Créé avec Succès](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2138.png)

### Naviguer entre les {{ fr.VLT }}s

Dans le ***{{ fr.NPANE }}***, vous pouvez utiliser le sélecteur de {{ fr.VLT }} pour vous déplacer entre les {{ fr.VLT }}s.
![{{ fr.NPANE }} Sélecteur de {{ fr.VLT }}](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip3602.png)
Vous pouvez changer l'emplacement du sélecteur de {{ fr.VLT }} dans ***Fichier – Paramètres – Interface Utilisateur – {{ fr.VLT_MAJ }}s – Emplacement du {{ fr.VLT_MAJ }}***. Par défaut, le sélecteur est en bas du ***{{ fr.NPANE }}***.
![Fichier – Paramètres – Interface Utilisateur – {{ fr.VLT_MAJ }}s – Emplacement du {{ fr.VLT_MAJ }}](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2141.png)

### Déplacer des entrées vers un différent {{ fr.VLT }}

1. Dans le ***{{ fr.NPANE }}***, aller au {{ fr.VLT }} dont vous voulez transférer des entrées.
1. Dans le ***Ribbon***, aller à ***Modifier – Lot – Déplacer vers {{ fr.VLT }}***.
![Modifier – Lot – Déplacer vers {{ fr.VLT }}](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip7030.png)
1. Sélectionner le {{ fr.VLT }} vers lequel vous voulez déplacer des entrées, puis cliquer sur ***Suivant***.
![Sélection du {{ fr.VLT }} de Destination](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip7031.png)
1. Choisir les entrées que vous voulez transférer vers le nouveau {{ fr.VLT }} en cochant les cases à côté d'elles, puis cliquer sur ***Transférer***.
![Sélection des Entrées à Transférer](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip7032.png)
1. Un message vous informera que le transfert a été réussi. Cliquer sur ***Terminer*** pour fermer cette vue.

Vos entrées sélectionnées peuvent maintenant être trouvées dans le {{ fr.VLT }} de destination.

### Donner aux utilisateurs et groupes d'utilisateurs l'accès à un {{ fr.VLT }}

{% youtube 'FtSlp_TVAxE?si=Oc1kacUIjt7bJptK&amp;start=1040' %}

{{ fr.VLT_MAJ }}s simplifient la gestion des utilisateurs car les groupes Active Directory (AD) définissent qui a accès à un {{ fr.VLT }}. Ces groupes AD sont connus sous le nom de ***Groupes d'Utilisateurs*** dans {{ fr.RDM }}. En général, la plupart des groupes ont accès à quelques {{ fr.VLT }}s, tandis que certains groupes n'auront accès qu'à un seul {{ fr.VLT }}. Limiter l'accès aux {{ fr.VLT }}s minimise le besoin de définir des permissions sur les dossiers de niveau inférieur.

Suivre les étapes ci-dessous pour assigner ***Utilisateurs*** et ***Rôles*** à un {{ fr.VLT }}.

1. Dans le ***Ribbon***, aller à ***Administration – Gestion – {{ fr.VLT_MAJ }}s***.
   ![Administration – Gestion – {{ fr.VLT_MAJ }}s](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11300.png)
   {% snippet, "badgeInfo" %}
   Si vous utilisez une source de données {{ fr.DVLS }} ou {{ fr.DHUBB }}, la gestion des {{ fr.VLT }}s est effectuée dans leurs interfaces web respectives. Pour plus d'informations, consulter soit [{{ fr.DVLS }} {{ fr.VLT }}s](/server/web-interface/administration/security-management/vaults/) ou [{{ fr.DHUB }} {{ fr.VLT }}s](/hub/web-interface/administration/management/vaults/).
   {% endsnippet %}

1. Dans la fenêtre ***Gestion des Utilisateurs et de la Sécurité***, sélectionner l'onglet ***{{ fr.VLT_MAJ }}s***, puis cliquer sur ***Assigner Utilisateurs et Rôles***.
   ![Gestion des Utilisateurs et de la Sécurité – {{ fr.VLT_MAJ }}s – Assigner Utilisateurs et Rôles](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip7033.png)
1. Dans la fenêtre ***Assignation de {{ fr.VLT_MAJ }}***, choisir quels ***Utilisateurs*** et ***Groupes d'Utilisateurs*** auront accès au {{ fr.VLT }} en cochant/décochant la case à côté d'eux.
   {% snippet, "shieldInfo" %}
   Pour des raisons de sécurité, les administrateurs ont toujours accès.
   {% endsnippet %}

   ![Assignation de {{ fr.VLT_MAJ }}](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip7034.png)

4. Cliquer sur ***Sauvegarder*** lorsque terminé.

   {% snippet, "shieldCaution" %}
   Gardez à l'esprit que même si vous assignez un rôle/utilisateur à un {{ fr.VLT }}, les permissions qui sont définies dans les ***Paramètres du {{ fr.VLT_MAJ }}*** peuvent changer ce que les utilisateurs peuvent voir ou faire dans le {{ fr.VLT }}.
   {% endsnippet %}

### Créer et utiliser des raccourcis de {{ fr.VLT }}

Pour naviguer entre les {{ fr.VLT }}s, vous pouvez utiliser le menu déroulant du sélecteur de {{ fr.VLT }} ou des raccourcis de {{ fr.VLT }}. Ces raccourcis sont un type d'entrée de session appelé ***{{ fr.VLT_MAJ }} (Raccourci)***.

Si vous avez accès à plusieurs {{ fr.VLT }}s, vous pouvez créer des raccourcis de {{ fr.VLT }} pour naviguer entre eux. Voici des recommandations pour rendre votre expérience {{ fr.RDM }} plus fluide et sécurisée si vous décidez d'utiliser ces raccourcis :

* Centraliser toutes vos entrées de raccourcis de {{ fr.VLT }} dans un principal {{ fr.VLT }} (par défaut).
* Dans chaque {{ fr.VLT }}, ajouter une entrée ***{{ fr.VLT_MAJ }} (Raccourci)*** qui retourne l'utilisateur au {{ fr.VLT }} principal.
* Retirer la liste déroulante de la source de données lors de l'utilisation de raccourcis de {{ fr.VLT }}. Pour ce faire, naviguer à ***Fichier – Paramètres – Interface Utilisateur – Sources de Données*** et sélectionner ***Non visible*** dans la liste déroulante ***Emplacement de la source de données***. Ensuite, le sélecteur de {{ fr.VLT }} peut être [déplacé au-dessus du {{ fr.NPANE }}](#move-entries-to-a-different-vault) pour un accès plus facile.

Suivre les étapes ci-dessous pour créer une entrée ***{{ fr.VLT_MAJ }} (Raccourci)***.

1. Dans le ***{{ fr.NPANE }}***, aller à la source de données et au {{ fr.VLT }} dans lequel vous voulez créer votre raccourci.
1. Dans le ***Ribbon***, aller à ***Modifier – Ajouter – Nouvelle Entrée***.
![Modifier – Ajouter – Nouvelle Entrée](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2142.png)
1. Dans l'onglet ***Divers***, sélectionner l'entrée de session ***{{ fr.VLT_MAJ }} (Raccourci)***, puis cliquer sur ***OK***.
![Divers – {{ fr.VLT_MAJ }} (Raccourci)](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip7037.png)
1. Dans le champ ***Nom***, entrer le nom du {{ fr.VLT }} pour lequel vous créez un raccourci, puis sélectionner le ***Dossier*** dans lequel créer votre raccourci dans la liste déroulante correspondante.
![Nom et Dossier](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2143.png)
1. Utiliser le bouton ellipsis à côté du champ ***ID du {{ fr.VLT_MAJ }}*** pour trouver le {{ fr.VLT }}. Dans la fenêtre ***Sélectionner {{ fr.VLT }}***, vous pouvez utiliser le champ ***Recherche*** pour vous aider à le trouver.
![Sélectionner {{ fr.VLT }}](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip7039.png)
1. Entrer un chemin de ***Dossier*** dans le champ correspondant pour créer un raccourci vers un dossier ou sous-dossier spécifique. Pour ce faire, suivre ces directives :
    * Le champ ***Dossier*** est sensible à la casse. Cela signifie que, par exemple, écrire le nom du dossier "clients" (c minuscule) ne redirigera pas vers le dossier "Clients" (C majuscule) et vice versa.
    * Pour spécifier un sous-dossier, écrire le chemin complet qui y mène, en séparant chaque dossier par une barre oblique inversée ("\"). Commencer par écrire le nom du premier dossier parent, puis nommer chaque dossier subséquent dans le chemin, et terminer avec le dernier dossier. Par exemple, dans la capture d'écran ci-dessous, le dossier parent est "Clients" et le dossier de destination est "Windjammer". Le dossier "Montreal" est le seul dossier entre eux.
    ![Chemin de Dossier](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2144.png)
7. Cliquer sur ***OK***.

Votre raccourci a maintenant été créé et est prêt à être utilisé.
