---
eleventyComputed:
  title: Survol des {{ fr.VLT }}s
---
Les {{ fr.VLT }}s sont des répertoires qui organisent vos dossiers et vos entrées. Ils permettent de diviser vos ***Sources de données avancées*** en plusieurs compartiments. Les {{ fr.VLT }}s améliorent la sécurité et l'expérience utilisateur de {{ fr.RDM }} en plus de sa performance en limitant la quantité d'entrées qui chargent en même temps.  

{% snippet icon.badgeHelp %}
Pour en savoir plus sur les différents types de {{ fr.VLT }}s et les moyens d'accéder à ces {{ fr.VLT }}s, consultez [{{ fr.VLT_MAJ }}s](/fr/rdm/windows/commands/view/panels/vault/).
{% endsnippet %}

Cette rubrique traite des sujets suivants :  

* [La création d'un {{ fr.VLT }}](#créer-un-coffre)
* [La navigation entre les {{ fr.VLT }}s](#naviguer-entre-les-coffres)
* [Le déplacement d'entrées vers différents {{ fr.VLT }}s](#déplacer-des-entrées-vers-différents-coffres)
* [L'accès des utilisateurs et groupes d'utilisateurs à un {{ fr.VLT }}](#donner-à-des-utilisateurs-et-groupes-d'utilisateurs-accès-à-un-coffre)
* [La création et l'utilisation de raccourcis de {{ fr.VLT }}s](#créer-et-utiliser-des-raccourcis-de-coffres)

### Créer un {{ fr.VLT }}

Suivez les étapes ci-dessous pour créer un nouveau {{ fr.VLT }}.
{% snippet icon.shieldNotice %}
Pour des raisons de sécurité et de performance, nous recommandons de créer un {{ fr.VLT }} différent pour chaque client et/ou département, dépendamment de votre utilisation de {{ fr.RDM }}.
{% endsnippet %}
 
1. Dans le ***Ruban***, accéder à ***Administration – Gestion – {{ fr.VLT_MAJ }}s***.  
![Administration – Gestion – {{ fr.VLT_MAJ }}s](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RdmWin4087.png) 

{% snippet icon.badgeHelp %} 
Si vous utilisez une source de données {{ fr.DVLS }} ou {{ fr.DHUBB }}, la gestion des {{ fr.VLT }}s est effectuée dans leurs interfaces Web respectives. Pour davantage d'informations, consultez [{{ fr.DVLS }}](/fr/server/web-interface/administration/security-management/vaults/) ou [{{ fr.DHUB }}](/fr/hub/web-interface/hub-overview/administration/management/vaults/) qui traient des {{ fr.VLT }}s. 
{% endsnippet %}
 

2. Dans la fenêtre ***Gestion des usagers et de la sécurité***, sélectionner l'onglet ***{{ fr.VLT_MAJ }}s***, puis cliquer sur ***Ajouter un {{ fr.VLT }}***.  
![Ajouter un {{ fr.VLT }}](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RdmWin4088.png) 
1. Dans l'onglet ***Général***, un ***ID*** sera automatiquement généré. Saisir un ***Nom*** (obligatoire) et une ***Description*** (facultatif) pour votre nouveau {{ fr.VLT }}. La création du {{ fr.VLT }} peut être effectuée aussitôt que le ***Nom*** est spécifié, mais il existe tout de même d'autres options. Elles sont présentées à la prochaine étape. 
{% snippet icon.badgeInfo %} 
Pour utiliser un modèle de {{ fr.VLT }} existant, vous pouvez le sélectionner dans la liste déroulante ***Modèle***. Contrairement aux autres paramètres, celui-ci ne peut pas être configuré ultérieurement car il modifie la façon dont le {{ fr.VLT }} est créé. Renseignez-vous sur les ***Modèles*** avant de prendre une décision.
{% endsnippet %}
 
{% snippet icon.badgeInfo %}
L'option ***Autoriser le mode hors-ligne*** est activée par défaut. Si vous la désactivez, le nouveau {{ fr.VLT }} ne pourra pas être utilisé en [mode hors-ligne](/fr/rdm/windows/data-sources/offline-mode/). Ce paramètre peut être modifié après la création du {{ fr.VLT }} en allant dans ***Administration – Gestion – {{ fr.VLT_MAJ }}s***, puis en sélectionnant le {{ fr.VLT }} à modifier et en cliquant sur ***Modifier les paramètres du {{ fr.VLT }}***. 
{% endsnippet %}

![Gestion du {{ fr.VLT }} – Général](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RdmWin4089.png) 

4. Facultatif : Des options d'***Utilisateurs et groupes d'utilisateurs*** ainsi que de ***Sécurité*** sont disponibles dans les autres onglets du menu de gauche. Ils sont à configurer selon vos besoins maintenant ou plus tard en allant dans ***Administration – Gestion – {{ fr.VLT_MAJ }}s***, puis en sélectionnant le {{ fr.VLT }} à modifier et en cliquant sur ***Modifier les paramètres du {{ fr.VLT }}***.  
    1. ***Utilisateurs et groupes d'utilisateurs*** : Sélectionner quels utilisateurs et groupes d'utilisateurs auront accès à ce {{ fr.VLT }} en les cochant/décochant. 
{% snippet icon.shieldInfo %} 
Pour des raisons de sécurité, les administrateurs ont toujours accès aux {{ fr.VLT }}s. 
{% endsnippet %}
 
    ![Gestion du {{ fr.VLT }} – Utilisateurs et groupes d'utilisateurs](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RDMWin2074.png)  

    2. ***Sécurité*** : Spécifier un ***Mot de passe maître*** pour l'accès au {{ fr.VLT }} et indiquer si l'ancien mot de passe doit être demandé lors du chargement.  
    ![Gestion du {{ fr.VLT }} – Sécurité](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RDMWin2075.png) 

5. Cliquer sur ***OK***. 
1. Le nouveau {{ fr.VLT }} apparaîtra dans la fenêtre ***Gestion des usagers et de la sécurité***. Elle peut être fermée pour accéder au {{ fr.VLT }} à partir du ***{{ fr.NPANE }}***.  
![Création réussie du nouveau {{ fr.VLT }}](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RDMWin2076.png) 

### Naviguer entre les {{ fr.VLT }}s

Dans le ***{{ fr.NPANE }}***, vous pouvez utiliser le sélecteur de {{ fr.VLT }}s pour vous déplacer entre les {{ fr.VLT }}s.  
![Sélecteur de {{ fr.VLT }} dans le {{ fr.NPANE }}](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RdmWin4090.png) 

Vous pouvez modifier l'emplacement du sélecteur de {{ fr.VLT }}s dans ***Fichier – Options – Interface utilisateur – {{ fr.VLT_MAJ }}s – Emplacement du {{ fr.VLT }}***. Par défaut, le sélecteur se trouve au bas du ***{{ fr.NPANE }}***.  
![Fichier – Options – Interface utilisateur – {{ fr.VLT_MAJ }}s – Emplacement du {{ fr.VLT }}](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RDMWin2077.png) 

### Déplacer des entrées vers différents {{ fr.VLT }}s

1. Dans le ***{{ fr.NPANE }}***, aller dans le {{ fr.VLT }} duquel vous souhaitez transférer des entrées. 
1. Dans le ***Ruban***, aller dans ***Modifier – Lot – Déplacer vers le {{ fr.VLT }}***.  
![Modifier – Lot – Déplacer vers le {{ fr.VLT }}](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RdmWin4091.png) 
1. Sélectionner le {{ fr.VLT }} vers lequel vous souhaitez déplacer les entrées, puis cliquer sur ***Suivant***.  
![Sélection du {{ fr.VLT }} de destination](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RdmWin4092.png) 
1. Choisir les entrées que vous souhaitez transférer vers le nouveau {{ fr.VLT }} en les cochant, puis cliquer sur ***Transférer***.  
![Sélection des entrées à transférer](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RdmWin4093.png) 
1. Un message vous avisera du transfert réussi. Cliquer sur ***Terminer*** pour fermer la fenêtre. 

Vos entrées sélectionnées se retrouvent maintenant dans le {{ fr.VLT }} de destination.  

### Donner à des utilisateurs et groupes d'utilisateurs accès à un {{ fr.VLT }}

Les {{ fr.VLT }}s simplifient la gestion des utilisateurs puisque les groupes Azure Directory (AD) définissent qui a accès à un {{ fr.VLT }}. On appelle ces groupes AD des ***Groupes d'utilisateurs*** dans {{ fr.RDM }}. En général, la plupart des groupes a accès à quelques {{ fr.VLT }}s, tandis que certains autres groupes n'ont accès qu'à un seul {{ fr.VLT }}. En limitant l'accès aux {{ fr.VLT }}s, on réduit la nécessité de définir des autorisations sur les dossiers de niveau inférieur.  

Suivez les étapes ci-dessous pour affecter des ***Utilisateurs*** et des ***Rôles*** à des {{ fr.VLT }}s.  

1. Dans le ***Ruban***, aller dans ***Administration – Gestion – {{ fr.VLT_MAJ }}s***.  
![Administration – Gestion – {{ fr.VLT_MAJ }}s](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RdmWin4087.png) 
{% snippet icon.badgeInfo %} 
Si vous utilisez une source de données {{ fr.DVLS }} ou {{ fr.DHUBB }}, la gestion des {{ fr.VLT }}s est effectuée dans leurs interfaces Web respectives. Pour davantage d'informations, consultez [{{ fr.DVLS }}](/fr/server/web-interface/administration/security-management/vaults/) ou [{{ fr.DHUB }}](/fr/hub/web-interface/hub-overview/administration/management/vaults/) qui traitent des {{ fr.VLT }}s. 
{% endsnippet %}

2. Dans la fenêtre ***Gestion des usagers et de la sécurité***, sélectionner l'onglet ***{{ fr.VLT_MAJ }}s***, puis cliquer sur ***Affecter des utilisateurs et rôles***.  
![Gestion des usagers et de la sécurité – {{ fr.VLT_MAJ }}s – Affecter des utilisateurs et rôles](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RdmWin4094.png) 
1. Dans la fenêtre ***Assignation d'un {{ fr.VLT }}***, choisir quels ***Utilisateurs*** et ***Groupes d'utilisateurs*** auront accès au {{ fr.VLT }} en cochant la case à côté. 
{% snippet icon.shieldInfo %} 
Pour des raisons de sécurité, les administrateurs ont toujours accès aux {{ fr.VLT }}s. 
{% endsnippet %}
 
![Assignation d'un {{ fr.VLT }}](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RdmWin4095.png) 

4. Cliquer sur ***Enregistrer*** lorsque terminé. 

{% snippet icon.shieldCaution %} 
Il faut garder à l'esprit que même si vous attribuez un rôle/utilisateur à un {{ fr.VLT }}, les permissions définies dans les ***Paramètres du {{ fr.VLT }}*** peuvent modifier ce que les utilisateurs peuvent voir ou faire dans le {{ fr.VLT }}. 
{% endsnippet %}
 
### Créer et utiliser des raccourcis de {{ fr.VLT }}s

Pour naviguer entre les {{ fr.VLT }}s, vous pouvez utiliser le menu déroulant du sélecteur de {{ fr.VLT }}s ou des raccourcis de {{ fr.VLT }}s. Ces raccourcis sont un type d'entrée de session appelé ***{{ fr.VLT_MAJ }} (Raccourci)***.  

Si vous avez accès à plusieurs {{ fr.VLT }}s, vous pouvez créer des raccourcis de {{ fr.VLT }}s pour naviguer entre les {{ fr.VLT }}s. Voici quelques recommandations pour rendre votre expérience avec {{ fr.RDM }} plus fluide et sécuritaire si vous décidez d'utiliser ces raccourcis :  

* Centraliser tous les raccourcis de {{ fr.VLT }}s à l'intérieur d'un même {{ fr.VLT }} principal (par défaut). 
* Dans chaque {{ fr.VLT }}, ajouter une entrée de ***{{ fr.VLT_MAJ }} (Raccourci)*** qui renvoie l'utilisateur au {{ fr.VLT }} principal. 
* Retirez la liste déroulante des sources de données lorsque vous utilisez les raccourcis de {{ fr.VLT }}s. Pour ce faire, accédez à ***Fichier – Options – Interface utilisateur – Sources de données*** et sélectionner ***Non visible*** dans la liste déroulante ***Emplacement de source de données***. Ensuite, le sélecteur de {{ fr.VLT }} peut être [déplacé au-dessus du {{ fr.NPANE }}](#déplacer-des-entrées-vers-différents-coffres) pour un meilleur accès. 

Suivez les étapes ci-dessous pour créer une entrée ***{{ fr.VLT_MAJ }} (Raccourci)***. 

1. Dans le ***{{ fr.NPANE }}***, aller sur la source de données et le {{ fr.VLT }} dans lesquels le raccourci sera créé. 
1. Dans le ***Ruban***, aller dans ***Modifier – Ajouter – Nouvelle entrée***.  
![Edit – Add – New Entry](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RDMWin2073.png) 
1. Dans l'onglet ***Divers***, sélectionner l'entrée de session ***{{ fr.VLT_MAJ }} (Raccourci)***, puis cliquer sur ***OK***.  
![Divers – {{ fr.VLT_MAJ }} (Raccourci)](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RdmWin4098.png) 
1. Dans le champ ***Nom***, saisir un nom pour le {{ fr.VLT }} vers lequel le raccourci pointera, puis sélectionner dans la liste déroulante le ***Dossier*** dans lequel le raccourci sera créé.  
![Nom et Dossier](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RDMWin2079.png) 
1. Utiliser le bouton des points de suspension situé à côté du champ ***ID du {{ fr.VLT }}*** pour trouver le {{ fr.VLT }}. Dans la fenêtre ***Sélectionner un {{ fr.VLT }}***, la barre de ***Recherche*** peut être utile pour le trouver.  
![Sélectionner un {{ fr.VLT }}](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RDMWin2078.png) 
1. Saisir un chemin de ***Dossier*** dans le champ correspondant pour créer un raccourci vers un dossier ou sous-dossier spécifique. Pour ce faire, suivre les directives suivantes :  
    * Le champ ***Dossier*** est sensible à la casse. Cela signifie que, par exemple, écrire le nom de dossier « clients » (« c » minuscule) ne redirigera pas vers le dossier « Clients » (« C » majuscule) et vice-versa. 
    * Pour spécifier un sous-dossier, saisir tout le chemin qui y mène, en séparant chaque dossier par une barre oblique inverse (« \ »). Commencer par écrire le nom du premier dossier parent, puis nommer chaque dossier suivant dans la chaîne, et terminer par le dernier dossier. Par exemple, dans l'image ci-dessous, le dossier parent est « Clients » et le dossier de destination est « Windjammer ». Le dossier « Montréal » est le seul dossier situé entre les deux.  
![Chemin du dossier](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RDMWin2080.png) 
7. Cliquer sur ***OK***. 

Votre raccourci est maintenant créé et prêt à l'utilisation. 
