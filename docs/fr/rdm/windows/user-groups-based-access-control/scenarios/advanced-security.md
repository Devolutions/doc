---
title: Sécurité avancée
---
{% snippet icon.badgeInfo %} 
Cette fonctionnalité n'est disponible que lors de l'utilisation d'une [Source de données avancée](/fr/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Le scénario suivant est conçu pour les grandes entreprises. Pour un scénario plus adapté aux petites entreprises, veuillez consulter notre scénario de [Sécurité simplifiée](/fr/rdm/windows/user-groups-based-access-control/scenarios/simplified-security/). 
{% endsnippet %}
 
Bien que cet exemple convient aux grandes entreprises, veuillez garder à l'esprit que tout privilège ne devrait être accordé que si nécessaire. Soyez prudent lorsque vous accordez des permissions à un utilisateur ou à un groupe d'utilisateurs.  

Notre société fictive, Windjammer, a trois groupes d'utilisateurs : HelpDesk (Bureau d'aide), ServiceDesk (Bureau de service), Consultants. Il existe deux sociétés clientes : Downhill Pro et Telemark.  

L'arborescence suivante représente les entrées auxquelles les utilisateurs ont accès une fois que toutes les permissions sont définies :  
![Arborescence](https://webdevolutions.blob.core.windows.net/docs/fr/rdm/windows/RDMWin6048.png) 

### Configuration Utilisateur 

Voici un exemple de configuration utilisateur. Pour créer des utilisateurs, accéder à ***Administration - Utilisateurs - Ajouter un utilisateur***. 

{% snippet icon.badgeNotice %} 
Dans ce scénario, toutes les options de la section ***Privilèges*** de la ***Gestion des usagers*** sont définies sur ***Aucune***. 
{% endsnippet %}
 
Ici, nous sélectionnons le type d'utilisateur pour leur donner les droits les plus élémentaires (***Ajouter***, ***Modifier*** et ***Supprimer***).  

Les utilisateurs de ServiceDesk sont des ***Utilisateurs accès restreints***. Ils ont les droits ***Ajouter*** et ***Modifier***. Cependant, ils ne peuvent pas ajouter d'entrées dans le dossier du coffre.  
![Gestion des utilisateurs - Général - Droits](https://webdevolutions.blob.core.windows.net/docs/fr/rdm/windows/RDMWin6051.png) 

Les utilisateurs de HelpDesk sont également des ***Utilisateurs accès restreints***. Ils n'ont que le droit ***Ajouter***. Cependant, ils ne peuvent pas ajouter d'entrées dans le dossier du coffre.  
![Gestion des utilisateurs - HelpDesk - Utilisateur accès restreint](https://webdevolutions.blob.core.windows.net/docs/fr/rdm/windows/RDMWin6050.png) 

Les consultants sont des ***Utilisateurs en lecture seule*** et ne peuvent afficher qu'un sous-ensemble d'entrées. Ils ne peuvent rien ajouter ou modifier. 

### Configuration des groupes d'utilisateurs 

Maintenant que les utilisateurs sont créés, nous allons ajouter les groupes d'utilisateurs auxquels nous accorderons plus tard les permissions. Nous devons créer les groupes d'utilisateurs pour leur affecter des utilisateurs. Il n'est pas nécessaire d'accorder de privilèges à ces groupes d'utilisateurs. Cela permet de contrôler plusieurs utilisateurs à la fois au lieu d'accorder des permissions à chaque utilisateur, un à la fois.  

* ServiceDesk (Bureau de service) 
* HelpDesk (Bureau d'aide) 
* Consultants 

Pour ajouter un groupe d'utilisateurs, cliquer sur le bouton ***Ajouter un groupe d'utilisateurs***, entrer un nom pour le groupe d'utilisateurs et cliquer sur ***Ok***.  

Pour affecter des utilisateurs à un groupe d'utilisateurs, cliquer sur le bouton ***Assigner des utilisateurs à un groupe d'utilisateurs***. Utiliser les cases à cocher ***Est membre*** pour ajouter des utilisateurs au groupe d'utilisateurs.  
![Gestion des usagers et de la sécurité - Groupes d'utilisateurs](https://webdevolutions.blob.core.windows.net/docs/fr/rdm/windows/RDMWin6052.png) 

### Configuration des entrées 

Maintenant, tout est prêt à accorder ou à refuser l'accès aux groupes d'utilisateurs.  
* Toutes les permissions du dossier du coffre sont définies sur ***Jamais***. Par héritage, cela refuse l'accès par défaut des éléments enfants à tout le monde. 
* Le ServiceDesk sera autorisé à afficher et à ouvrir toutes les entrées, mais ne pourra modifier que les entrées dans les groupes/dossiers clients. 
* Le HelpDesk sera autorisé à afficher et à ouvrir des entrées dans les groupes/dossiers clients uniquement et ne pourra pas les modifier. 
* Les consultants auront la permission de visualiser et d'ouvrir les entrées dans le dossier de Montréal uniquement, mais ne pourront pas le modifier ni ses éléments enfants. 

**Paramètres du coffre** 

Comme mentionné ci-dessus, TOUTES les permissions du dossier du coffre sont définies sur ***Jamais***. Cela refuse l'accès par défaut aux autres utilisateurs.  
![Paramètres du coffre - Permissions](https://webdevolutions.blob.core.windows.net/docs/fr/rdm/windows/RDMWin6066.png) 

**Windjammer Downhill Pro et Telemark, les groupes/dossiers de niveau du coffre** 

La permission d'affichage pour le dossier Windjammer est définie pour ServiceDesk uniquement, car nous voulons qu'ils puissent utiliser les entrées enfants. Nous ne voulons pas que ServiceDesk ajoute, modifie ou supprime quoi que ce soit. Nous laissons les permissions ***Ajouter***, ***Modifier*** et ***Supprimer*** à ***Hérité*** afin que seuls les administrateurs puissent effectuer ces actions sur le dossier Windjammer et ses éléments enfants.  
![Windjammer - Permissions](https://webdevolutions.blob.core.windows.net/docs/fr/rdm/windows/RDMWin6054.png) 

* ***Affichage : Personnalisé***; ServiceDesk. 
* ***Ajouter : Hérité***; Jamais hérité du coffre. Seul l'administrateur peut ajouter des entrées. 
* ***Modifier : Hérité***; Jamais hérité du coffre. Seul l'administrateur peut modifier des entrées. 
* ***Supprimer : Hérité***; Jamais hérité du coffre. Seul l'administrateur peut supprimer des entrées.
* ***Déplacer : Hérité***; Jamais hérité du coffre. Seul l'administrateur peut déplacer des entrées.  
* ***Afficher le mot de passe : Hérité***; Jamais hérité du coffre. Seul l'administrateur peut le mot de passe des entrées. 
* ***Afficher les informations sensibles : Hérité***; Jamais hérité du coffre. Seul l'administrateur peut afficher les informations sensibles des entrées. 

Pour Downhill Pro, nous accordons des permissions au ServiceDesk et au HelpDesk.  
![Downhill Pro - Permissions](https://webdevolutions.blob.core.windows.net/docs/fr/rdm/windows/RDMWin6055.png) 

* ***Affichage : Personnalisé***; HelpDesk, ServiceDesk. 
* ***Ajouter : Personnalisé***; ServiceDesk. 
* ***Modifier : Personnalisé***; ServiceDesk. 
* ***Supprimer : Hérité***; Jamais hérité du coffre. Seul l'administrateur peut supprimer des entrées.
* ***Déplacer : Hérité***; Jamais hérité du coffre. Seul l'administrateur peut déplacer des entrées.  
* ***Afficher le mot de passe : Hérité***; Jamais hérité du coffre. Seul l'administrateur peut le mot de passe des entrées. 
* ***Afficher les informations sensibles : Hérité***; Jamais hérité du coffre. Seul l'administrateur peut afficher les informations sensibles des entrées.  

Nous avons déjà un bon exemple de la flexibilité de la sécurité de {{ fr.RDM }}. Les utilisateurs de ServiceDesk et HelpDesk peuvent afficher et utiliser toutes les entrées du dossier Downhill Pro, même les entrées d'identifiants, mais ils ne verront jamais de mots de passe car les utilisateurs de ServiceDesk et HelpDesk n'ont pas le privilège de révéler les mots de passe.  

Ensuite, pour le dossier Telemark, nous accordons des permissions au ServiceDesk, au HelpDesk et aux consultants. C'est là que les choses deviennent complexes. Si nous voulons que les consultants ne puissent voir que le dossier de Montréal, qui est un élément enfant du télémark, nous devons accorder aux consultants la permission d'afficher le dossier parent, donc tout le contenu du télémark. Ensuite, nous accorderons des permissions sur les éléments enfants uniquement au groupe d'utilisateurs qui devrait avoir accès à ces éléments. Cette dernière étape refusera la permission de visualisation pour les consultants sur les articles enfants.  
![Telemark - Permissions](https://webdevolutions.blob.core.windows.net/docs/fr/rdm/windows/RDMWin6062.png) 

* ***Affichage : Personnalisé***; Consultants, HelpDesk, ServiceDesk. 
* ***Ajouter : Personnalisé***; ServiceDesk. 
* ***Modifier : Personnalisé***; ServiceDesk. 
* ***Supprimer : Hérité***; Jamais hérité du coffre. Seul l'administrateur peut supprimer des entrées. 
* ***Déplacer : Hérité***; Jamais hérité du coffre. Seul l'administrateur peut déplacer des entrées.  
* ***Afficher le mot de passe : Hérité***; Jamais hérité du coffre. Seul l'administrateur peut le mot de passe des entrées. 
* ***Afficher les informations sensibles : Hérité***; Jamais hérité du coffre. Seul l'administrateur peut afficher les informations sensibles des entrées. 

**Articles enfants de Telemark** 

Puisque nous voulons que les utilisateurs puissent utiliser les entrées d'identifiants, nous accordons au ServiceDesk et au HelpDesk la permission d'afficher le dossier Credentials. Par conséquent, ServiceDesk et HelpDesk peuvent utiliser les entrées du dossier sans révéler les mots de passe. En spécifiant que seuls HelpDesk et ServiceDesk disposent de la permission d'***Affichage***, nous refusons l'accès en vue à tout groupe d'utilisateurs ou utilisateur qui ne figure pas dans la liste de permission.  

Les permissions ***Ajouter*** et ***Modifier*** sont définies sur ***Jamais*** et la permission ***Supprimer*** peut être laissée à ***Hérité*** car elle hérite des paramètres ***Jamais*** du coffre. Seuls les administrateurs peuvent effectuer ces actions dans des groupes/dossiers contenant des identifiants.  
![Telemark/Credentials - Permissions](https://webdevolutions.blob.core.windows.net/docs/fr/rdm/windows/RDMWin6058.png) 

* ***Affichage : Personnalisé***; HelpDesk, ServiceDesk. 
* ***Ajouter : Jamais***; Seuls les administrateurs peuvent ajouter des entrées d'identifiants. 
* ***Modifier : Jamais***; Seuls les administrateurs peuvent modifier les entrées. 
* ***Supprimer : Hérité***; Jamais hérité du coffre. Seul l'administrateur peut supprimer des entrées.  
* ***Déplacer : Hérité***; Jamais hérité du coffre. Seul l'administrateur peut déplacer des entrées.  
* ***Afficher le mot de passe : Hérité***; Jamais hérité du coffre. Seul l'administrateur peut le mot de passe des entrées. 
* ***Afficher les informations sensibles : Hérité***; Jamais hérité du coffre. Seul l'administrateur peut afficher les informations sensibles des entrées. 

Nous voulons que ServiceDesk puisse utiliser l'entrée d'identifiant de domaine, mais pas le HelpDesk. Pour cela, nous devons accorder la permission ***Affichage*** au ServiceDesk. Le ServiceDesk peut toujours utiliser l'entrée d'identifiant mais ne verra jamais le mot de passe.  
![Telemark/Credentials/Admin - Permissions](https://webdevolutions.blob.core.windows.net/docs/fr/rdm/windows/RDMWin6059.png) 

* ***Affichage : Personnalisé***; ServiceDesk. 
* ***Ajouter : Personnalisé***; Jamais hérité du coffre. Seuls les administrateurs peuvent ajouter des entrées d'identifiants. 
* ***Modifier : Personnalisé***; Jamais hérité du coffre. Seuls les administrateurs peuvent modifier des entrées d'identifiants. 
* ***Supprimer : Hérité***; Jamais hérité de Telemark\Credentials. Seuls les administrateurs peuvent supprimer des entrées d'identifiants.  
* ***Déplacer : Hérité***; Jamais hérité du coffre. Seul l'administrateur peut déplacer des entrées.  
* ***Afficher le mot de passe : Hérité***; Jamais hérité du coffre. Seul l'administrateur peut le mot de passe des entrées. 
* ***Afficher les informations sensibles : Hérité***; Jamais hérité du coffre. Seul l'administrateur peut afficher les informations sensibles des entrées. 

La dernière étape pour les éléments enfants Telemark consiste à définir la permission ***Affichage*** sur ServiceDesk et HelpDesk sur le dossier Boston et laisser toutes les autres permissions de ce dossier à ***Hérité***. Cela empêche les consultants d'afficher le dossier Boston. Désormais, les consultants ne peuvent afficher et ouvrir des entrées que dans le dossier Montréal.  
![Telemark/Boston - Permissions](https://webdevolutions.blob.core.windows.net/docs/fr/rdm/windows/RDMWin6060.png) 

* ***Affichage : Personnalisé***; HelpDesk, ServiceDesk. 
* ***Ajouter : Hérité***; ServiceDesk hérité de Telemark. 
* ***Modifier : Hérité***; ServiceDesk hérité de Telemark. 
* ***Supprimer : Hérité***; Jamais hérité du coffre. 
* ***Déplacer : Hérité***; Jamais hérité du coffre. Seul l'administrateur peut déplacer des entrées.  
* ***Afficher le mot de passe : Hérité***; Jamais hérité du coffre. Seul l'administrateur peut le mot de passe des entrées. 
* ***Afficher les informations sensibles : Hérité***; Jamais hérité du coffre. Seul l'administrateur peut afficher les informations sensibles des entrées. 

{% snippet icon.shieldCaution %} 
Chaque fois qu'un nouveau dossier est ajouté, la permission ***Affichage*** doit être définie pour ServiceDesk et HelpDesk pour masquer le nouveau dossier et son contenu aux consultants. 
{% endsnippet %}
 
Pas besoin de définir des permissions sur le dossier Montréal, car elles sont héritées des dossiers parents.  
![Telemark/Montreal - Permissions](https://webdevolutions.blob.core.windows.net/docs/fr/rdm/windows/RDMWin6063.png) 

### Conclusion 

Les permissions sont désormais correctement définies. Notez que chaque entrée ajoutée au niveau du coffre n'aura aucune sécurité par défaut. Cela signifie qu'ils seraient disponibles pour n'importe qui, même pour les consultants. Cela peut être confirmé en regardant la capture d'écran ci-dessous dans laquelle la routine quotidienne d'entrée est disponible pour tout le monde. Voici ce que chaque utilisateur devrait voir dans l'arborescence.  
![Navigation des groupes d'utilisateurs](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6099.png) 

Vous pouvez personnaliser davantage vos permissions en utilisant l'onglet ***Paramètres de sécurité*** lors de la modification des entrées ou l'onglet ***Journaux*** pour ajouter plus de traces des entrées et des sorties. Comme toujours, il faut faire très attention lors de l'octroi des permissions. 

