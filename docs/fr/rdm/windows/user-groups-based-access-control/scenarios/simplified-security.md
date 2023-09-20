---
  title: Sécurité simplifiée
---
{% snippet icon.badgeInfo %} 
Cette fonctionnalité est disponible que lors de l'utilisation d'une [Source de données avancée](/fr/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). 
{% endsnippet %}
 
{% snippet icon.shieldCaution %} 
Bien que le scénario suivant soit pertinent pour les petites et moyennes entreprises, il n'est pas recommandé pour les grandes entreprises. Pour un scénario plus adapté aux grandes entreprises, veuillez consulter le scénario de [Sécurité avancée](/fr/rdm/windows/user-groups-based-access-control/scenarios/advanced-security/). 
{% endsnippet %}
 

Notre société fictive, Windjammer, a quatre groupes d'utilisateurs : HelpDesk (Bureau d'aide), ServiceDesk (Bureau de service), Administrations et Consultants. Il existe deux sociétés clientes : Downhill Pro et Telemark.  

L'arborescence suivante représente les entrées auxquelles les utilisateurs ont accès une fois que toutes les permissions sont définies :  
![Structure de l'arborescence](https://webdevolutions.blob.core.windows.net/docs/fr/rdm/windows/RDMWin6029.png) 

### Configuration utilisateur 

Voici un exemple de configuration utilisateur. Pour créer des utilisateurs, accéder à ***Administration - Utilisateurs - Ajouter un utilisateur***.  

La sélection des droits suivante est disponible lorsque vous définissez un utilisateur sur ***Utilisateur accès restreint***.  
![Gestion des utilisateurs - Général - Droits](https://webdevolutions.blob.core.windows.net/docs/fr/rdm/windows/RDMWin6032.png) 

Administrateurs : les administrateurs ont beaucoup plus d'accès que les utilisateurs réguliers. Lors de la création de ces utilisateurs, définir le type d'utilisateur sur ***Administrateur*** pour leur donner accès à tout. L'administrateur peut accéder à toutes les entrées, quelles que soient les permissions.  
![Gestion des utilisateurs - Général - Type d'utilisateur Administrateur](https://webdevolutions.blob.core.windows.net/docs/fr/rdm/windows/RDMWin6018.png) 

Utilisateurs réguliers (Utilisateur) : ces utilisateurs ont moins de droits que les administrateurs. Ils ont essentiellement tous les droits de base (à l'exception d'***Afficher le mot de passe***) mais sont susceptibles de recevoir toutes les permissions refusées. Plus tard, nous refuserons ces droits en spécifiant quels utilisateurs peuvent réellement effectuer ces actions.  

Consultants : les consultants ne peuvent afficher qu'un sous-ensemble d'entrées, nous les définirons en ***Lecture seule***. Ils ne peuvent en aucun cas ajouter, modifier ou autrement affecter les informations. 

### Configuration des groupes d'utilisateurs 

Maintenant que les utilisateurs sont créés, nous allons ajouter les groupes d'utilisateurs auxquels nous accorderons plus tard les permissions. Nous devons créer les groupes d'utilisateurs pour leur affecter des utilisateurs. Il n'est pas nécessaire d'accorder de privilèges à ces groupes d'utilisateurs.  

* ServiceDesk (Bureau de service) 
* HelpDesk (Bureau d'aide) 
* Consultants  
![Gestion des usagers et de la sécurité](https://webdevolutions.blob.core.windows.net/docs/fr/rdm/windows/RDMWin6028.png) 

### Configuration des entrées 

Maintenant, tout est prêt à accorder ou à refuser l'accès aux groupes d'utilisateurs.  

* Le ServiceDesk sera autorisé à afficher et à ouvrir toutes les entrées, mais ne pourra modifier que les entrées dans les groupes/dossiers clients. 
* Le HelpDesk sera autorisé à afficher et à ouvrir des entrées dans les groupes/dossiers clients uniquement et ne pourra pas les modifier. 
* Les consultants auront la permission de visualiser et d'ouvrir les entrées dans le dossier de Montréal uniquement, mais ne pourront pas le modifier ni ses éléments enfants. 

Nous allons commencer par les dossiers au niveau du {{ fr.VLT }} : Downhill Pro, Telemark et Windjammer.  

La permission d'afficher le dossier Windjammer sera définie pour ServiceDesk uniquement, car nous voulons qu'ils puissent utiliser ses entrées enfants. Nous ne voulons pas que ServiceDesk ajoute ou modifie quoi que ce soit. Nous définirons les permissions ***Ajouter***, ***Modifier*** et ***Supprimer*** sur ***Jamais***. Seul l'administrateur pourra ajouter ou modifier des entrées dans le dossier Windjammer.  
![Windjammer - Permissions](https://webdevolutions.blob.core.windows.net/docs/fr/rdm/windows/RDMWin6020.png) 

* ***Affichage*** : ***Personnalisé***; ServiceDesk. 
* ***Ajouter*** : ***Jamais***; Seul l'administrateur peut ajouter des entrées. 
* ***Modifier*** : ***Jamais***; Seul l'administrateur peut modifier des entrées. 
* ***Supprimer*** : ***Jamais***; Seul l'administrateur peut supprimer des entrées. 
* ***Déplacer*** : ***Jamais***; Seul l'administrateur peut déplacer des entrées. 
* ***Afficher le mot de passe*** : ***Jamais***; Seul l'administrateur peut afficher le mot de passe des entrées. 
* ***Afficher les informations sensibles*** : ***Jamais***; Seul l'administrateur peut afficher les informations sensibles des entrées. 

Pour Downhill Pro, nous accorderons des permissions au ServiceDesk et au HelpDesk.  
![Downhill Pro - Permissions](https://webdevolutions.blob.core.windows.net/docs/fr/rdm/windows/RDMWin6021.png) 

* ***Affichage*** : ***Personnalisé***; HelpDesk, ServiceDesk. 
* ***Ajouter*** : ***Personnalisé***; ServiceDesk. 
* ***Modifier*** : ***Personnalisé***; ServiceDesk. 
* ***Supprimer*** : ***Jamais***; Seul l'administrateur peut supprimer des entrées. 
* ***Déplacer*** : ***Jamais***; Seul l'administrateur peut déplacer des entrées. 
* ***Afficher le mot de passe*** : ***Jamais***; Seul l'administrateur peut afficher le mot de passe des entrées. 
* ***Afficher les informations sensibles*** : ***Jamais***; Seul l'administrateur peut afficher les informations sensibles des entrées. 

Nous avons déjà un bon exemple de la flexibilité de la sécurité de {{ fr.RDM }}. Un utilisateur de ServiceDesk peut afficher et utiliser toutes les entrées du dossier Downhill Pro, même les entrées d'identifiants, mais il ne pourra jamais voir aucun mot de passe car ***Afficher le mot de passe*** est interdit (à partir du dossier du {{ fr.VLT }}).  

Ensuite, pour le dossier Telemark, nous accorderons des permissions au ServiceDesk, au HelpDesk et aux consultants. C'est là que les choses deviennent complexes. Si nous voulons que les consultants ne puissent voir que le dossier de Montréal, qui est un élément enfant du télémark, nous devons accorder aux consultants la permission de visualiser l'intégralité du contenu du télémark. Ensuite, nous accorderons des permissions sur les éléments enfants uniquement au groupe d'utilisateurs qui devrait avoir accès à ces éléments. Cette dernière étape refusera la permission de visualisation pour les consultants sur les éléments enfants.  
![Telemark - Permissions](https://webdevolutions.blob.core.windows.net/docs/fr/rdm/windows/RDMWin6022.png) 

* ***Affichage*** : ***Personnalisé***; Consultants, HelpDesk, ServiceDesk. 
* ***Ajouter*** : ***Personnalisé***; ServiceDesk. 
* ***Modifier*** : ***Personnalisé***; ServiceDesk. 
* ***Supprimer*** : ***Jamais***; Seul l'administrateur peut supprimer des entrées. 
* ***Déplacer*** : ***Jamais***; Seul l'administrateur peut déplacer des entrées. 
* ***Afficher le mot de passe*** : ***Jamais***; Seul l'administrateur peut afficher le mot de passe des entrées. 
* ***Afficher les informations sensibles*** : ***Jamais***; Seul l'administrateur peut afficher les informations sensibles des entrées. 

Puisque nous voulons que les utilisateurs puissent utiliser les entrées d'identifiants, nous accordons au ServiceDesk et au HelpDesk la permission d'afficher le dossier Credentials. De cette façon, ServiceDesk et HelpDesk pourront utiliser les entrées du dossier sans révéler les mots de passe. Par conséquent, en spécifiant que seuls HelpDesk et ServiceDesk disposent de la permission ***Affichage***, nous refusons l'accès en vue à tout groupe d'utilisateurs ou utilisateur qui ne figure pas dans la liste de permission.  

Les permissions ***Ajouter***, ***Modifier*** et ***Supprimer*** peuvent être laissées à ***Hérité*** car elles héritent des paramètres du dossier parent Telemark. Le ServiceDesk est le seul groupe d'utilisateurs qui a reçu la permission ***Ajouter*** et ***Modifier*** dans le dossier parent et la permission ***Supprimer*** hérite du paramètre ***Jamais***.  
![Telemark - Permissions des identifiants](https://webdevolutions.blob.core.windows.net/docs/fr/rdm/windows/RDMWin6023.png) 

* ***Affichage*** : ***Personnalisé***; HelpDesk, ServiceDesk. 
* ***Ajouter*** : ***Hérité***; ServiceDesk hérité du dossier Telemark. 
* ***Modifier*** : ***Hérité***; ServiceDesk hérité du dossier Telemark. 
* ***Supprimer*** : ***Hérité***; Jamais hérité du dossier Telemark. 
* ***Déplacer*** : ***Jamais***; Seul l'administrateur peut déplacer des entrées. 
* ***Afficher le mot de passe*** : ***Jamais***; Seul l'administrateur peut afficher le mot de passe des entrées. 
* ***Afficher les informations sensibles*** : ***Jamais***; Seul l'administrateur peut afficher les informations sensibles des entrées. 

Nous voulons que ServiceDesk puisse également utiliser les informations d'identifiant d'administrateur de domaine, mais pas le HelpDesk. Pour cela, nous devons accorder la permission ***Affichage*** au ServiceDesk. Le ServiceDesk pourra toujours modifier l'entrée d'identifiant, mais ne verra jamais le mot de passe. La permission de suppression est définie sur ***Jamais***.  
![Entrée informations d'identifiant d'administrateur de domaine](https://webdevolutions.blob.core.windows.net/docs/fr/rdm/windows/RDMWin6026.png) 

La dernière étape pour les éléments enfants Telemark consiste à définir la permission ***Affichage*** sur ServiceDesk et HelpDesk sur le dossier Boston et laisser toutes les autres permissions de ce dossier sur ***Hérité***. Cela empêche les consultants d'afficher le dossier Boston. Désormais, les consultants ne pourront voir et ouvrir les entrées que dans le dossier Montréal.  
![Telemark/Boston - Permissions](https://webdevolutions.blob.core.windows.net/docs/fr/rdm/windows/RDMWin6030.png) 

{% snippet icon.shieldCaution %} 
Chaque fois qu'un nouveau dossier est ajouté, la permission ***Affichage*** doit être définie pour ServiceDesk et HelpDesk pour masquer le nouveau dossier et son contenu aux consultants. 
{% endsnippet %}
 
Pas besoin de définir des permissions sur le dossier Montréal, car elles sont héritées des dossiers parents. 

![Telemark/Montreal - Permissions](https://webdevolutions.blob.core.windows.net/docs/fr/rdm/windows/RDMWin6031.png) 

### Conclusion 
Les permissions sont désormais correctement définies. Notez que chaque entrée ajoutée au niveau du {{ fr.VLT }} n'aura aucune sécurité par défaut. Cela signifie qu'ils seraient disponibles pour n'importe qui, même pour les consultants. Cela peut être confirmé en regardant la capture d'écran ci-dessous dans laquelle la routine quotidienne d'entrée est disponible pour tout le monde. Voici ce que chaque utilisateur devrait voir dans l'arborescence :  
![Navigation des groupes d'utilisateurs](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6065.png) 

Vous pouvez personnaliser davantage vos permissions en utilisant l'onglet ***Paramètres de sécurité*** lors de la modification des entrées ou l'onglet ***Journaux*** pour ajouter plus de traces des entrées et des sorties. Comme toujours, il faut faire très attention lors de l'octroi des permissions.
