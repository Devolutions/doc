---
eleventyComputed:
  title: "{{ fr.COFFRE_MAJ }}s aperçu"
  description: "Les {{ fr.COFFRE_MAJ }}s sont des conteneurs qui organisent vos dossiers et entrées. Ils aident à diviser vos Sources de Données Avancées en plusieurs compartiments."
---
Les {{ fr.COFFRE_MAJ }}s sont des conteneurs qui organisent vos dossiers et entrées. Ils aident à diviser vos ***Sources de Données Avancées*** en plusieurs compartiments. Les {{ fr.COFFRE_MAJ }}s améliorent la sécurité et l'expérience utilisateur de {{ fr.RDM }}, ainsi que sa performance en limitant le nombre d'entrées qui se chargent en même temps.

{% snippet, "badgeHelp" %}
Pour apprendre sur les différents types de {{ fr.COFFRE }} et les moyens d'y accéder, visitez [{{ fr.COFFRE_MAJ }}s](/rdm/mac/commands/view/vault/).
{% endsnippet %}
 
Voici ce qui est couvert ci-dessous :

* [Créer un {{ fr.COFFRE }}](#create-a-vault)
* [Naviguer entre les {{ fr.COFFRE }}s](#navigate-between-vaults)
* [Déplacer des entrées vers un autre {{ fr.COFFRE }}](#move-entries-to-a-different-vault)
* [Donner l'accès à des utilisateurs et groupes d'utilisateurs à un {{ fr.COFFRE }}](#give-users-and-user-groups-access-to-a-vault)
* [Créer et utiliser des raccourcis de {{ fr.COFFRE }}](#create-and-use-vault-shortcuts)

## Créer un {{ fr.COFFRE }}

Suivre les étapes ci-dessous pour apprendre à créer un nouveau {{ fr.COFFRE }}.

{% snippet, "shieldNotice" %} 
Pour des raisons de sécurité et de performance, nous recommandons de créer un différent {{ fr.COFFRE }} pour chaque client et/ou département, selon comment vous utilisez {{ fr.RDM }}. 
{% endsnippet %}
 
1. Dans le ***Ribbon***, aller à ***Administration – {{ fr.COFFRE_MAJ }}s***.  

{% snippet, "badgeHelp" %} 
Si vous utilisez une source de données {{ fr.DVLS }} ou {{ fr.DHUBB }}, la gestion des {{ fr.COFFRE }}s se fait dans leurs interfaces web respectives. Pour plus d'informations, consulter soit [{{ fr.DVLS }} {{ fr.COFFRE }}s](/server/web-interface/administration/security-management/vaults/) ou [{{ fr.DHUB }} {{ fr.COFFRE }}s](/hub/web-interface/administration/management/vaults/). 
{% endsnippet %}
 
2. Dans la fenêtre ***Gestion des Utilisateurs et de la Sécurité***, sélectionner l'onglet ***{{ fr.COFFRE_MAJ }}s***, puis cliquer sur ***Ajouter {{ fr.COFFRE }}***.
1. Choisir un [type de {{ fr.COFFRE }}](/rdm/mac/user-interface/customization/vault-types) (par défaut, entreprise, secrets, ou identifiants). Les types de {{ fr.COFFRE_MAJ }} limitent les types d'entrées qui peuvent être créés dans ce {{ fr.COFFRE }} spécifique.
1. Dans l'onglet ***Général***, un ***ID*** est généré automatiquement. Entrer un ***Nom*** (obligatoire) et une ***Description*** (optionnelle) pour votre nouveau {{ fr.COFFRE }}.  
Le paramètre ***Visibilité*** détermine si ce {{ fr.COFFRE }} spécifique est visible pour tous les utilisateurs (public) ou seulement pour les utilisateurs qui ont accès au {{ fr.COFFRE }} (privé). Il est réglé sur le paramètre par défaut, qui peut être modifié dans ***Administration – Paramètres du Système – Gestion des {{ fr.COFFRE_MAJ }}s – {{ fr.COFFRE_MAJ }}***.  
Le {{ fr.COFFRE }} peut être créé dès qu'un ***Nom*** a été spécifié, mais d'autres options sont disponibles. Elles sont présentées à l'étape suivante. 

{% snippet, "badgeInfo" %} 
Pour utiliser un modèle de {{ fr.COFFRE }} existant, le sélectionner dans la liste déroulante ***Modèle***. Contrairement aux autres paramètres, celui-ci ne peut pas être configuré ultérieurement puisqu'il change la manière dont le {{ fr.COFFRE }} est créé. Apprendre sur [***Modèles***](/rdm/mac/commands/file/templates/) avant de décider. 
{% endsnippet %}
 
{% snippet, "badgeInfo" %} 
L'option ***Permettre hors ligne*** est activée par défaut. Si elle est désactivée, le nouveau {{ fr.COFFRE }} ne pourra pas être utilisé en mode hors ligne. Ce paramètre peut encore être modifié après la création du {{ fr.COFFRE }} en retournant à ***Administration – {{ fr.COFFRE_MAJ }}s***, en sélectionnant le {{ fr.COFFRE }} à modifier et en cliquant sur ***Éditer***. 
{% endsnippet %}

4. Optionnel : Les options ***Utilisateurs***, ***Sécurité***, et ***Propriétaires du {{ fr.COFFRE_MAJ }}*** sont disponibles dans les autres onglets du menu de gauche. Les configurer selon vos besoins maintenant, ou le faire plus tard en retournant à ***Administration – {{ fr.COFFRE_MAJ }}s***, en sélectionnant le {{ fr.COFFRE }} à modifier et en cliquant sur ***Éditer***.
    * ***Utilisateurs*** : Choisir quels ***Utilisateurs*** auront accès au {{ fr.COFFRE }} en les cochant/décochant. Pour des raisons de sécurité, les administrateurs ont toujours accès.
    * ***Sécurité*** : Spécifier un ***Mot de passe maître*** pour l'accès au {{ fr.COFFRE }} et indiquer si l'ancien mot de passe doit être demandé lors de l'écrasement du mot de passe.
    * ***Propriétaires du {{ fr.COFFRE_MAJ }}*** : Sélectionner des groupes d'utilisateurs ou des utilisateurs pour être propriétaires de ce {{ fr.COFFRE }}, signifiant qu'ils peuvent gérer ce {{ fr.COFFRE }} spécifique sans avoir accès à l'administration de la source de données.

5. Cliquer sur ***OK*** lorsque terminé. 
1. Le nouveau {{ fr.COFFRE }} apparaîtra dans la fenêtre ***Gestion des Utilisateurs et de la Sécurité***. Vous pouvez ***Fermer*** cette vue pour accéder au {{ fr.COFFRE }} depuis le ***{{ fr.VOLET_NAV }}***.  

### Naviguer entre les {{ fr.COFFRE }}s

Dans le ***{{ fr.VOLET_NAV }}***, vous pouvez utiliser le sélecteur de {{ fr.COFFRE }} pour vous déplacer entre les {{ fr.COFFRE }}s.  

Vous pouvez changer l'emplacement du sélecteur de {{ fr.COFFRE }} dans ***Fichier – Préférences – Interface Utilisateur – Général – Emplacement du {{ fr.COFFRE_MAJ }}***. Par défaut, le sélecteur est en bas du ***{{ fr.VOLET_NAV }}***.  

### Déplacer des entrées vers un autre {{ fr.COFFRE }}

1. Dans le ***{{ fr.VOLET_NAV }}***, aller au {{ fr.COFFRE }} dont vous voulez transférer des entrées.
1. Dans le ***Ribbon***, aller à ***Éditer – Déplacer vers {{ fr.COFFRE }}***.  
1. Sélectionner le {{ fr.COFFRE }} vers lequel vous voulez déplacer des entrées, puis cliquer sur ***Suivant***.  
1. Choisir les entrées que vous voulez transférer vers le nouveau {{ fr.COFFRE }} en cochant les cases à côté d'elles, puis cliquer sur ***Transférer***.  
1. Un message vous informera que le transfert a été réussi. Cliquer sur ***Terminer*** pour fermer cette vue.  

Vos entrées sélectionnées peuvent maintenant être trouvées dans le {{ fr.COFFRE }} de destination.

### Donner l'accès à des utilisateurs et groupes d'utilisateurs à un {{ fr.COFFRE }}

Les {{ fr.COFFRE_MAJ }}s simplifient la gestion des utilisateurs car les groupes Active Directory (AD) définissent qui a accès à un {{ fr.COFFRE }}. Ces groupes AD sont connus sous le nom de ***Groupes d'utilisateurs*** dans {{ fr.RDM }}. En général, la plupart des groupes ont accès à quelques {{ fr.COFFRE }}s, tandis que certains groupes n'auront accès qu'à un seul {{ fr.COFFRE }}. Limiter l'accès aux {{ fr.COFFRE }}s minimise le besoin de définir des permissions sur les dossiers de niveau inférieur.  

Suivre les étapes ci-dessous pour assigner ***Utilisateurs*** et ***Rôles*** à un {{ fr.COFFRE }}.  

1. Dans le ***Ribbon***, aller à ***Administration – {{ fr.COFFRE_MAJ }}s***.  

{% snippet, "badgeInfo" %} 
Si vous utilisez une source de données {{ fr.DVLS }} ou {{ fr.DHUBB }}, la gestion des {{ fr.COFFRE }}s se fait dans leurs interfaces web respectives. Pour plus d'informations, consulter soit [{{ fr.DVLS }} {{ fr.COFFRE }}s](/server/web-interface/administration/security-management/vaults/) ou [{{ fr.DHUB }} {{ fr.COFFRE }}s](/hub/web-interface/administration/management/vaults/). 
{% endsnippet %}

2. Dans la fenêtre ***Gestion des Utilisateurs et de la Sécurité***, sélectionner l'onglet ***{{ fr.COFFRE_MAJ }}s***, puis cliquer sur ***Assigner Utilisateurs*** ou ***Assigner Groupes d'Utilisateurs***.  
1. Dans la fenêtre ***Assignation de {{ fr.COFFRE_MAJ }}***, choisir quels ***Utilisateurs*** ou ***Groupes d'Utilisateurs*** auront accès au {{ fr.COFFRE }} en cochant/décochant la case à côté d'eux. 
{% snippet, "shieldInfo" %} 
Pour des raisons de sécurité, les administrateurs ont toujours accès. 
{% endsnippet %}

4. Cliquer sur ***OK*** lorsque terminé.

{% snippet, "shieldCaution" %} 
Gardez à l'esprit que même si vous assignez un rôle/utilisateur à un {{ fr.COFFRE }}, les permissions qui sont définies dans les ***paramètres du {{ fr.COFFRE_MAJ }}*** peuvent changer ce que les utilisateurs peuvent voir ou faire dans le {{ fr.COFFRE }}. 
{% endsnippet %}
 
### Créer et utiliser des raccourcis de {{ fr.COFFRE }}

Pour naviguer entre les {{ fr.COFFRE }}s, vous pouvez utiliser le menu déroulant du sélecteur de {{ fr.COFFRE }} ou des raccourcis de {{ fr.COFFRE }}. Ces raccourcis sont un type d'entrée de session appelé ***{{ fr.COFFRE_MAJ }} (Raccourci)***.  

Si vous avez accès à plusieurs {{ fr.COFFRE }}s, vous pouvez créer des raccourcis de {{ fr.COFFRE }} pour naviguer entre les {{ fr.COFFRE }}s. Voici des recommandations pour rendre votre expérience {{ fr.RDM }} plus fluide et sécurisée si vous décidez d'utiliser ces raccourcis :  

* Centraliser toutes vos entrées de raccourcis de {{ fr.COFFRE }} dans un principal {{ fr.COFFRE }} (par défaut). 
* Dans chaque {{ fr.COFFRE }}, ajouter une entrée ***{{ fr.COFFRE_MAJ }} (Raccourci)*** qui renvoie l'utilisateur au principal {{ fr.COFFRE }}. 

Suivre les étapes ci-dessous pour créer une entrée ***{{ fr.COFFRE_MAJ }} (Raccourci)***.

1. Dans le ***{{ fr.VOLET_NAV }}***, aller à la source de données et au {{ fr.COFFRE }} dans lequel vous voulez créer votre raccourci. 
1. Dans le ***Ribbon***, aller à ***Éditer – Nouvelle Entrée***.  
1. Dans l'onglet ***Divers***, sélectionner l'entrée de session ***{{ fr.COFFRE_MAJ }} (Raccourci)***, puis cliquer sur ***OK***.  
1. Dans ***Général***, entrer le ***Nom*** du {{ fr.COFFRE }} pour lequel vous créez un raccourci, puis sélectionner le ***Dossier*** dans lequel créer votre raccourci dans la liste déroulante correspondante.  
1. Dans ***{{ fr.COFFRE_MAJ }} (Raccourci)***, utiliser le bouton ellipsis à côté du champ ***ID du {{ fr.COFFRE }}*** pour trouver le {{ fr.COFFRE }}. Dans la fenêtre ***Sélectionner {{ fr.COFFRE }}***, vous pouvez utiliser le champ ***Recherche*** pour vous aider à le trouver.  
1. Entrer un chemin de ***Dossier*** dans le champ correspondant pour créer un raccourci vers un dossier spécifique ou sous-dossier. Pour ce faire, suivre ces directives : 
    * Le champ ***Dossier*** est sensible à la casse. Cela signifie que, par exemple, écrire le nom du dossier "clients" (c minuscule) ne redirigera pas vers le dossier "Clients" (C majuscule) et vice versa. 
    * Pour spécifier un sous-dossier, écrire le chemin complet qui y mène, en séparant chaque dossier par une barre oblique inversée ("\"). Commencer par écrire le nom du premier dossier parent, puis nommer chaque dossier subséquent dans le chemin, et terminer avec le dernier dossier. Par exemple, dans la capture d'écran ci-dessous, le dossier parent est "Clients" et le dossier de destination est "Windjammer". Le dossier "Montréal" est le seul dossier entre eux. 
7. Cliquer sur ***Créer***.

Votre raccourci a maintenant été créé et est prêt à être utilisé.