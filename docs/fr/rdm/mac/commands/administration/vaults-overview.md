---
eleventyComputed:
  title: "{{ fr.COF_MAJ }}s aperçu"
  description: "{{ fr.COF_MAJ }}s sont des conteneurs qui organisent vos dossiers et entrées. Ils aident à diviser vos Sources de Données Avancées en plusieurs compartiments."
---
{{ fr.COF_MAJ }}s sont des conteneurs qui organisent vos dossiers et entrées. Ils aident à diviser vos ***Sources de Données Avancées*** en plusieurs compartiments. {{ fr.COF_MAJ }}s améliorent la sécurité et l'expérience utilisateur de {{ fr.RDM }}, ainsi que sa performance en limitant la quantité d'entrées qui se chargent en même temps.

{% snippet, "badgeHelp" %}
Pour apprendre sur les différents types de {{ fr.COF }} et les moyens d'y accéder, visitez [{{ fr.COF_MAJ }}s](/rdm/mac/commands/view/vault/).
{% endsnippet %}
 
Voici ce qui est couvert ci-dessous :

* [Créer un {{ fr.COF }}](#create-a-vault)
* [Naviguer entre les {{ fr.COF }}s](#navigate-between-vaults)
* [Déplacer des entrées vers un autre {{ fr.COF }}](#move-entries-to-a-different-vault)
* [Donner aux utilisateurs et aux groupes d'utilisateurs l'accès à un {{ fr.COF }}](#give-users-and-user-groups-access-to-a-vault)
* [Créer et utiliser des raccourcis de {{ fr.COF }}](#create-and-use-vault-shortcuts)

## Créer un {{ fr.COF }}

Suivre les étapes ci-dessous pour apprendre à créer un nouveau {{ fr.COF }}.

{% snippet, "shieldNotice" %} 
Pour des raisons de sécurité et de performance, nous recommandons de créer un différent {{ fr.COF }} pour chaque client et/ou département, selon comment vous utilisez {{ fr.RDM }}. 
{% endsnippet %}
 
1. Dans le ***Ruban***, aller à ***Administration – {{ fr.COF_MAJ }}s***.  

{% snippet, "badgeHelp" %} 
Si vous utilisez une source de données {{ fr.DVLS }} ou {{ fr.DHUBB }}, la gestion des {{ fr.COF }} se fait dans leurs interfaces web respectives. Pour plus d'informations, consulter soit [{{ fr.DVLS }} {{ fr.COF }}s](/server/web-interface/administration/security-management/vaults/) ou [{{ fr.DHUB }} {{ fr.COF }}s](/hub/web-interface/administration/management/vaults/). 
{% endsnippet %}
 
2. Dans la fenêtre ***Gestion des Utilisateurs et de la Sécurité***, sélectionner l'onglet ***{{ fr.COF_MAJ }}s***, puis cliquer sur ***Ajouter {{ fr.COF }}***.
1. Choisir un [type de contenu de {{ fr.COF }}](/rdm/mac/user-interface/customization/vault-types) (par défaut, entreprise, secrets, ou identifiants). Les types de contenu de {{ fr.COF_MAJ }} limitent les types d'entrées qui peuvent être créés dans ce {{ fr.COF }} spécifique.
1. Dans l'onglet ***Général***, un ***ID*** est généré automatiquement. Entrer un ***Nom*** (obligatoire) et une ***Description*** (facultatif) pour votre nouveau {{ fr.COF }}.  
Le paramètre ***Visibilité*** détermine si ce {{ fr.COF }} spécifique est visible pour tous les utilisateurs (public) ou seulement pour les utilisateurs qui ont accès au {{ fr.COF }} (privé). Il est réglé sur le paramètre par défaut, qui peut être modifié dans ***Administration – Paramètres du Système – Gestion des {{ fr.COF_MAJ }}s – {{ fr.COF_MAJ }}***.  
Le {{ fr.COF }} peut être créé dès qu'un ***Nom*** a été spécifié, mais d'autres options sont disponibles. Elles sont présentées à l'étape suivante. 

{% snippet, "badgeInfo" %} 
Pour utiliser un modèle de {{ fr.COF }} existant, le sélectionner dans la liste déroulante ***Modèle***. Contrairement aux autres paramètres, celui-ci ne peut pas être configuré plus tard puisqu'il change la manière dont le {{ fr.COF }} est créé. Apprendre sur [***Modèles***](/rdm/mac/commands/file/templates/) avant de décider. 
{% endsnippet %}
 
{% snippet, "badgeInfo" %} 
L'option ***Permettre hors ligne*** est activée par défaut. Si elle est désactivée, le nouveau {{ fr.COF }} ne pourra pas être utilisé en mode hors ligne. Ce paramètre peut encore être modifié après la création du {{ fr.COF }} en retournant à ***Administration – {{ fr.COF_MAJ }}s***, en sélectionnant le {{ fr.COF }} à modifier et en cliquant sur ***Modifier***. 
{% endsnippet %}

4. Optionnel : Les options ***Utilisateurs***, ***Sécurité***, et ***Propriétaires du {{ fr.COF_MAJ }}*** sont disponibles dans les autres onglets du menu de gauche. Les configurer selon vos besoins maintenant, ou le faire plus tard en retournant à ***Administration – {{ fr.COF_MAJ }}s***, en sélectionnant le {{ fr.COF }} à modifier et en cliquant sur ***Modifier***.
    * ***Utilisateurs*** : Choisir quels ***Utilisateurs*** auront accès au {{ fr.COF }} en les cochant/décochant. Pour des raisons de sécurité, les administrateurs ont toujours accès.
    * ***Sécurité*** : Spécifier un ***Mot de passe maître*** pour l'accès au {{ fr.COF }} et indiquer si l'ancien mot de passe doit être demandé lors de la réécriture du mot de passe.
    * ***Propriétaires du {{ fr.COF_MAJ }}*** : Sélectionner des groupes d'utilisateurs ou des utilisateurs pour être propriétaires de ce {{ fr.COF }}, signifiant qu'ils peuvent gérer ce {{ fr.COF }} spécifique sans avoir accès à l'administration de la source de données.

5. Cliquer sur ***OK*** lorsque terminé. 
1. Le nouveau {{ fr.COF }} apparaîtra dans la fenêtre ***Gestion des Utilisateurs et de la Sécurité***. Vous pouvez ***Fermer*** cette vue pour accéder au {{ fr.COF }} depuis le ***{{ fr.VPANE }}***.  

### Naviguer entre les {{ fr.COF }}s

Dans le ***{{ fr.VPANE }}***, vous pouvez utiliser le sélecteur de {{ fr.COF }} pour vous déplacer entre les {{ fr.COF }}s.  

Vous pouvez changer l'emplacement du sélecteur de {{ fr.COF }} dans ***Fichier – Préférences – Interface Utilisateur – Général – Emplacement du {{ fr.COF_MAJ }}***. Par défaut, le sélecteur est en bas du ***{{ fr.VPANE }}***.  

### Déplacer des entrées vers un autre {{ fr.COF }}

1. Dans le ***{{ fr.VPANE }}***, aller au {{ fr.COF }} dont vous voulez transférer des entrées.
1. Dans le ***Ruban***, aller à ***Modifier – Déplacer vers {{ fr.COF }}***.  
1. Sélectionner le {{ fr.COF }} vers lequel vous voulez déplacer des entrées, puis cliquer sur ***Suivant***.  
1. Choisir les entrées que vous voulez transférer vers le nouveau {{ fr.COF }} en cochant les cases à côté d'elles, puis cliquer sur ***Transférer***.  
1. Un message vous informera que le transfert a été réussi. Cliquer sur ***Terminer*** pour fermer cette vue.  

Vos entrées sélectionnées peuvent maintenant être trouvées dans le {{ fr.COF }} de destination.

### Donner aux utilisateurs et aux groupes d'utilisateurs l'accès à un {{ fr.COF }}

{{ fr.COF_MAJ }}s simplifient la gestion des utilisateurs car les groupes Active Directory (AD) définissent qui a accès à un {{ fr.COF }}. Ces groupes AD sont connus sous le nom de ***Groupes d'utilisateurs*** dans {{ fr.RDM }}. En général, la plupart des groupes ont accès à quelques {{ fr.COF }}s, tandis que certains groupes n'auront accès qu'à un seul {{ fr.COF }}. Limiter l'accès aux {{ fr.COF }}s minimise le besoin de définir des permissions sur les dossiers de niveau inférieur.  

Suivre les étapes ci-dessous pour assigner ***Utilisateurs*** et ***Rôles*** à un {{ fr.COF }}.  

1. Dans le ***Ruban***, aller à ***Administration – {{ fr.COF_MAJ }}s***.  

{% snippet, "badgeInfo" %} 
Si vous utilisez une source de données {{ fr.DVLS }} ou {{ fr.DHUBB }}, la gestion des {{ fr.COF }} se fait dans leurs interfaces web respectives. Pour plus d'informations, consulter soit [{{ fr.DVLS }} {{ fr.COF }}s](/server/web-interface/administration/security-management/vaults/) ou [{{ fr.DHUB }} {{ fr.COF }}s](/hub/web-interface/administration/management/vaults/). 
{% endsnippet %}

2. Dans la fenêtre ***Gestion des Utilisateurs et de la Sécurité***, sélectionner l'onglet ***{{ fr.COF_MAJ }}s***, puis cliquer sur ***Assigner Utilisateurs*** ou ***Assigner Groupes d'Utilisateurs***.  
1. Dans la fenêtre ***Assignation de {{ fr.COF_MAJ }}***, choisir quels ***Utilisateurs*** ou ***Groupes d'Utilisateurs*** auront accès au {{ fr.COF }} en cochant/décochant la case à côté d'eux. 
{% snippet, "shieldInfo" %} 
Pour des raisons de sécurité, les administrateurs ont toujours accès. 
{% endsnippet %}

4. Cliquer sur ***OK*** lorsque terminé.

{% snippet, "shieldCaution" %} 
Gardez à l'esprit que même si vous assignez un rôle/utilisateur à un {{ fr.COF }}, les permissions qui sont définies dans les ***paramètres du {{ fr.COF_MAJ }}*** peuvent changer ce que les utilisateurs peuvent voir ou faire dans le {{ fr.COF }}. 
{% endsnippet %}
 
### Créer et utiliser des raccourcis de {{ fr.COF }}

Pour naviguer entre les {{ fr.COF }}s, vous pouvez utiliser le menu déroulant du sélecteur de {{ fr.COF }} ou des raccourcis de {{ fr.COF }}. Ces raccourcis sont un type d'entrée de session appelé ***{{ fr.COF_MAJ }} (Raccourci)***.  

Si vous avez accès à plusieurs {{ fr.COF }}s, vous pouvez créer des raccourcis de {{ fr.COF }} pour naviguer entre les {{ fr.COF }}s. Voici des recommandations pour rendre votre expérience {{ fr.RDM }} plus fluide et plus sécurisée si vous décidez d'utiliser ces raccourcis :  

* Centraliser toutes vos entrées de raccourcis de {{ fr.COF }} dans un principal {{ fr.COF }} (par défaut). 
* Dans chaque {{ fr.COF }}, ajouter une entrée ***{{ fr.COF_MAJ }} (Raccourci)*** qui renvoie l'utilisateur au principal {{ fr.COF }}. 

Suivre les étapes ci-dessous pour créer une entrée ***{{ fr.COF_MAJ }} (Raccourci)***.

1. Dans le ***{{ fr.VPANE }}***, aller à la source de données et au {{ fr.COF }} dans lequel vous voulez créer votre raccourci. 
1. Dans le ***Ruban***, aller à ***Modifier – Nouvelle Entrée***.  
1. Dans l'onglet ***Divers***, sélectionner l'entrée de session ***{{ fr.COF_MAJ }} (Raccourci)***, puis cliquer sur ***OK***.  
1. Dans ***Général***, entrer le ***Nom*** du {{ fr.COF }} pour lequel vous créez un raccourci, puis sélectionner le ***Dossier*** dans lequel créer votre raccourci dans la liste déroulante correspondante.  
1. Dans ***{{ fr.COF_MAJ }} (Raccourci)***, utiliser le bouton ellipsis à côté du champ ***ID du {{ fr.COF }}*** pour trouver le {{ fr.COF }}. Dans la fenêtre ***Sélectionner {{ fr.COF }}***, vous pouvez utiliser le champ ***Recherche*** pour vous aider à le trouver.  
1. Entrer un chemin de ***Dossier*** dans le champ correspondant pour créer un raccourci vers un dossier ou sous-dossier spécifique. Pour ce faire, suivre ces directives : 
    * Le champ ***Dossier*** est sensible à la casse. Cela signifie que, par exemple, écrire le nom du dossier "clients" (avec un "c" minuscule) ne redirigera pas vers le dossier "Clients" (avec un "C" majuscule) et vice versa. 
    * Pour spécifier un sous-dossier, écrire l'ensemble du chemin qui y mène, en séparant chaque dossier par une barre oblique inversée ("\"). Commencer par écrire le nom du premier dossier parent, puis nommer chaque dossier subséquent dans le chemin, et terminer par le dernier dossier. Par exemple, dans la capture d'écran ci-dessous, le dossier parent est "Clients" et le dossier de destination est "Windjammer". Le dossier "Montréal" est le seul dossier entre eux. 
7. Cliquer sur ***Créer***.

Votre raccourci a maintenant été créé et est prêt à être utilisé.