---
eleventyComputed:
  title: "{{ fr.VLT_MAJ }}s aperçu"
  description: "{{ fr.VLT_MAJ }}s sont des conteneurs qui organisent vos dossiers et entrées. Ils aident à diviser vos Sources de Données Avancées en plusieurs compartiments."
---
{{ fr.VLT_MAJ }}s sont des conteneurs qui organisent vos dossiers et entrées. Ils aident à diviser vos ***Sources de Données Avancées*** en plusieurs compartiments. {{ fr.VLT_MAJ }}s améliorent la sécurité et l'expérience utilisateur de {{ fr.RDM }}, ainsi que sa performance en limitant la quantité d'entrées qui se chargent en une fois.

{% snippet, "badgeHelp" %}
Pour apprendre sur les différents types de {{ fr.VLT }} et les moyens d'y accéder, visitez [{{ fr.VLT_MAJ }}s](/rdm/mac/commands/view/vault/).
{% endsnippet %}
 
Voici ce qui est couvert ci-dessous :

* [Créer un {{ fr.VLT }}](#create-a-vault)
* [Naviguer entre les {{ fr.VLT }}s](#navigate-between-vaults)
* [Déplacer des entrées vers un autre {{ fr.VLT }}](#move-entries-to-a-different-vault)
* [Donner aux utilisateurs et groupes d'utilisateurs l'accès à un {{ fr.VLT }}](#give-users-and-user-groups-access-to-a-vault)
* [Créer et utiliser des raccourcis de {{ fr.VLT }}](#create-and-use-vault-shortcuts)

## Créer un {{ fr.VLT }}

Suivre les étapes ci-dessous pour apprendre comment créer un nouveau {{ fr.VLT }}.

{% snippet, "shieldNotice" %} 
Pour des raisons de sécurité et de performance, nous recommandons de créer un différent {{ fr.VLT }} pour chaque client et/ou département, selon comment vous utilisez {{ fr.RDM }}. 
{% endsnippet %}
 
1. Dans le ***Ribbon***, aller à ***Administration – {{ fr.VLT_MAJ }}s***.  

{% snippet, "badgeHelp" %} 
Si vous utilisez une source de données {{ fr.DVLS }} ou {{ fr.DHUBB }}, la gestion des {{ fr.VLT }}s est effectuée dans leurs interfaces web respectives. Pour plus d'informations, consultez soit [{{ fr.DVLS }} {{ fr.VLT }}s](/server/web-interface/administration/security-management/vaults/) ou [{{ fr.DHUB }} {{ fr.VLT }}s](/hub/web-interface/administration/management/vaults/). 
{% endsnippet %}
 
2. Dans la fenêtre ***Gestion des Utilisateurs et de la Sécurité***, sélectionner l'onglet ***{{ fr.VLT_MAJ }}s***, puis cliquer sur ***Ajouter {{ fr.VLT }}***.  

1. Dans l'onglet ***Général***, un ***ID*** est généré automatiquement. Entrer un ***Nom*** (obligatoire) et une ***Description*** (optionnelle) pour votre nouveau {{ fr.VLT }}.  
La configuration ***Visibilité*** détermine si ce {{ fr.VLT }} spécifique est visible pour tous les utilisateurs (public) ou seulement pour les utilisateurs ayant accès au {{ fr.VLT }} (privé). Elle est réglée sur le paramètre par défaut, qui peut être modifié dans ***Administration – Paramètres Système – Gestion des {{ fr.VLT_MAJ }}s – {{ fr.VLT_MAJ }}***.  
Le {{ fr.VLT }} peut être créé dès qu'un ***Nom*** a été spécifié, mais d'autres options sont disponibles. Elles sont présentées à l'étape suivante. 

{% snippet, "badgeInfo" %} 
Pour utiliser un modèle de {{ fr.VLT }} existant, le sélectionner dans la liste déroulante ***Modèle***. Contrairement aux autres paramètres, celui-ci ne peut pas être configuré plus tard puisqu'il change la manière dont le {{ fr.VLT }} est créé. Apprendre sur [***Modèles***](/rdm/mac/commands/file/templates/) avant de décider. 
{% endsnippet %}
 
{% snippet, "badgeInfo" %} 
L'option ***Permettre hors ligne*** est activée par défaut. Si elle est désactivée, le nouveau {{ fr.VLT }} ne pourra pas être utilisé en mode hors ligne. Ce paramètre peut encore être modifié après la création du {{ fr.VLT }} en retournant à ***Administration – {{ fr.VLT_MAJ }}s***, en sélectionnant le {{ fr.VLT }} à modifier et en cliquant sur ***Éditer***. 
{% endsnippet %}

4. Optionnel : Les options ***Utilisateurs***, ***Sécurité***, et ***Propriétaires du {{ fr.VLT_MAJ }}*** sont disponibles dans les autres onglets du menu de gauche. Les configurer selon vos besoins maintenant, ou le faire plus tard en retournant à ***Administration – {{ fr.VLT_MAJ }}s***, en sélectionnant le {{ fr.VLT }} à modifier et en cliquant sur ***Éditer***.
    * ***Utilisateurs*** : Choisir quels ***Utilisateurs*** auront accès au {{ fr.VLT }} en les cochant/décochant. Pour des raisons de sécurité, les administrateurs ont toujours accès.
    * ***Sécurité*** : Spécifier un ***Mot de passe maître*** pour l'accès au {{ fr.VLT }} et indiquer si l'ancien mot de passe doit être demandé lors de la réécriture du mot de passe.
    * ***Propriétaires du {{ fr.VLT_MAJ }}*** : Sélectionner des groupes d'utilisateurs ou des utilisateurs pour être propriétaires de ce {{ fr.VLT }}, signifiant qu'ils peuvent gérer ce {{ fr.VLT }} spécifique sans avoir accès à l'administration de la source de données.

5. Cliquer sur ***OK*** une fois terminé. 
1. Le nouveau {{ fr.VLT }} apparaîtra dans la fenêtre ***Gestion des Utilisateurs et de la Sécurité***. Vous pouvez ***Fermer*** cette vue pour accéder au {{ fr.VLT }} depuis le ***{{ fr.NPANE }}***.  

### Naviguer entre les {{ fr.VLT }}s

Dans le ***{{ fr.NPANE }}***, vous pouvez utiliser le sélecteur de {{ fr.VLT }} pour vous déplacer entre les {{ fr.VLT }}s.  

Vous pouvez changer l'emplacement du sélecteur de {{ fr.VLT }} dans ***Fichier – Préférences – Interface Utilisateur – Général – Emplacement du {{ fr.VLT_MAJ }}***. Par défaut, le sélecteur est en bas du ***{{ fr.NPANE }}***.  

### Déplacer des entrées vers un autre {{ fr.VLT }}

1. Dans le ***{{ fr.NPANE }}***, aller au {{ fr.VLT }} dont vous voulez transférer des entrées.
1. Dans le ***Ribbon***, aller à ***Éditer – Déplacer vers {{ fr.VLT }}***.  
1. Sélectionner le {{ fr.VLT }} vers lequel vous voulez déplacer des entrées, puis cliquer sur ***Suivant***.  
1. Choisir les entrées que vous voulez transférer vers le nouveau {{ fr.VLT }} en cochant les cases à côté d'elles, puis cliquer sur ***Transférer***.  
1. Un message vous informera que le transfert a été réussi. Cliquer sur ***Terminer*** pour fermer cette vue.  

Vos entrées sélectionnées peuvent maintenant être trouvées dans le {{ fr.VLT }} de destination.

### Donner aux utilisateurs et groupes d'utilisateurs l'accès à un {{ fr.VLT }}

{{ fr.VLT_MAJ }}s simplifient la gestion des utilisateurs car les groupes Active Directory (AD) définissent qui a accès à un {{ fr.VLT }}. Ces groupes AD sont connus sous le nom de ***Groupes d'utilisateurs*** dans {{ fr.RDM }}. En général, la plupart des groupes ont accès à quelques {{ fr.VLT }}s, tandis que certains groupes n'auront accès qu'à un seul {{ fr.VLT }}. Limiter l'accès aux {{ fr.VLT }}s minimise le besoin de définir des permissions sur les dossiers de niveau inférieur.  

Suivre les étapes ci-dessous pour assigner ***Utilisateurs*** et ***Rôles*** à un {{ fr.VLT }}.  

1. Dans le ***Ribbon***, aller à ***Administration – {{ fr.VLT_MAJ }}s***.  

{% snippet, "badgeInfo" %} 
Si vous utilisez une source de données {{ fr.DVLS }} ou {{ fr.DHUBB }}, la gestion des {{ fr.VLT }}s est effectuée dans leurs interfaces web respectives. Pour plus d'informations, consultez soit [{{ fr.DVLS }} {{ fr.VLT }}s](/server/web-interface/administration/security-management/vaults/) ou [{{ fr.DHUB }} {{ fr.VLT }}s](/hub/web-interface/administration/management/vaults/). 
{% endsnippet %}

2. Dans la fenêtre ***Gestion des Utilisateurs et de la Sécurité***, sélectionner l'onglet ***{{ fr.VLT_MAJ }}s***, puis cliquer sur ***Assigner Utilisateurs*** ou ***Assigner Groupes d'Utilisateurs***.  
1. Dans la fenêtre ***Attribution de {{ fr.VLT_MAJ }}***, choisir quels ***Utilisateurs*** ou ***Groupes d'Utilisateurs*** auront accès au {{ fr.VLT }} en cochant/décochant la case à côté d'eux. 
{% snippet, "shieldInfo" %} 
Pour des raisons de sécurité, les administrateurs ont toujours accès. 
{% endsnippet %}

4. Cliquer sur ***OK*** une fois terminé.

{% snippet, "shieldCaution" %} 
Gardez à l'esprit que même si vous assignez un rôle/utilisateur à un {{ fr.VLT }}, les permissions qui sont définies dans les ***paramètres du {{ fr.VLT_MAJ }}*** peuvent changer ce que les utilisateurs peuvent voir ou faire dans le {{ fr.VLT }}. 
{% endsnippet %}
 
### Créer et utiliser des raccourcis de {{ fr.VLT }}

Pour naviguer entre les {{ fr.VLT }}s, vous pouvez utiliser le menu déroulant du sélecteur de {{ fr.VLT }} ou des raccourcis de {{ fr.VLT }}. Ces raccourcis sont un type d'entrée de session appelé ***{{ fr.VLT_MAJ }} (Raccourci)***.  

Si vous avez accès à plusieurs {{ fr.VLT }}s, vous pouvez créer des raccourcis de {{ fr.VLT }} pour naviguer entre eux. Voici des recommandations pour rendre votre expérience {{ fr.RDM }} plus fluide et plus sécurisée si vous décidez d'utiliser ces raccourcis :  

* Centraliser toutes vos entrées de raccourcis de {{ fr.VLT }} dans un principal {{ fr.VLT }} principal (par défaut). 
* Dans chaque {{ fr.VLT }}, ajouter une entrée ***{{ fr.VLT_MAJ }} (Raccourci)*** qui renvoie l'utilisateur au {{ fr.VLT }} principal. 

Suivre les étapes ci-dessous pour créer une entrée ***{{ fr.VLT_MAJ }} (Raccourci)***.

1. Dans le ***{{ fr.NPANE }}***, aller à la source de données et au {{ fr.VLT }} dans lequel vous voulez créer votre raccourci. 
1. Dans le ***Ribbon***, aller à ***Éditer – Nouvelle Entrée***.  
1. Dans l'onglet ***Divers***, sélectionner l'entrée de session ***{{ fr.VLT_MAJ }} (Raccourci)***, puis cliquer sur ***OK***.  
1. Dans ***Général***, entrer le ***Nom*** du {{ fr.VLT }} pour lequel vous créez un raccourci, puis sélectionner le ***Dossier*** dans lequel créer votre raccourci dans la liste déroulante correspondante.  
1. Dans ***{{ fr.VLT_MAJ }} (Raccourci)***, utiliser le bouton ellipsis à côté du champ ***ID du {{ fr.VLT }}*** pour trouver le {{ fr.VLT }}. Dans la fenêtre ***Sélectionner {{ fr.VLT }}***, vous pouvez utiliser le champ ***Recherche*** pour vous aider à le trouver.  
1. Entrer un chemin de ***Dossier*** dans le champ correspondant pour créer un raccourci vers un dossier ou sous-dossier spécifique. Pour ce faire, suivre ces directives : 
    * Le champ ***Dossier*** est sensible à la casse. Cela signifie que, par exemple, écrire le nom du dossier "clients" (c minuscule) ne redirigera pas vers le dossier "Clients" (C majuscule) et vice versa. 
    * Pour spécifier un sous-dossier, écrire l'ensemble du chemin qui y mène, en séparant chaque dossier par une barre oblique inversée ("\"). Commencer par écrire le nom du premier dossier parent, puis nommer chaque dossier subséquent dans le chemin, et terminer avec le dernier dossier. Par exemple, dans la capture d'écran ci-dessous, le dossier parent est "Clients" et le dossier de destination est "Windjammer". Le dossier "Montreal" est le seul dossier entre eux. 
7. Cliquer sur ***Créer***.

Votre raccourci a maintenant été créé et est prêt à être utilisé.
