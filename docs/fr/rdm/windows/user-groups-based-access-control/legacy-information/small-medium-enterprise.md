---
title: Petites et moyennes entreprises (ancien)
---
Ici, nous vous donnerons un exemple de structure de sécurité qui devrait être pertinent pour les petites et moyennes entreprises.  

Dans ce scénario, toutes les options de la section ***Privilèges*** des propriétés utilisateur resteront désactivées.  

Bien que cet exemple puisse convenir à de nombreuses entreprises, veuillez garder à l'esprit que tout privilège ne devrait être accordé qu'en cas de besoin. Soyez extrêmement prudent lorsque vous accordez des permissions à un utilisateur ou à un groupe d'utilisateurs. 

{% snippet icon.badgeInfo %} 
Cette fonctionnalité est disponible que lors de l'utilisation d'une [/fr/rdm/windows/data-sources/data-sources-types/advanced-data-sources/](DataSources_Advanced). 
{% endsnippet %}
 
## Étapes 

Notre entreprise fictive Windjammer possède un HelpDesk et un ServiceDesk , un administrateur et un consultant de Montréal. Nous pouvons également voir deux clients: Downhill Pro et Telemark .  

Voici une vue de la structure de l'arborescence de la source de données:  
![!!clip11108.png](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip11108.png) 

### Configuration Utilisateur 

Voici un exemple pour les configurations utilisateur.  

Les droits suivants doivent être activés dans la section ***Permissions*** lors de la création d'un utilisateur:  
![User Management - Permissions - Rights](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip11241.png) 

L'administrateur: 

* Lors de la création de l'utilisateur, cocher la case ***Administrateur*** pour lui donner accès à tout.  
![Administrator Permission](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip11238.png) 

Le ServiceDesk :  

* ***Add (Ajouter)*** 
* ***Edit (Modifier)*** 
* ***Deny add entry in root folder (Refuser d'ajouter une entrée dans le dossier racine)***  
![ServiceDesk Rights](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip11239.png) 

Le HelpDesk :  

* ***Add (Ajouter)*** 
* ***Deny add entry in root folder (Refuser d'ajouter une entrée dans le dossier racine)***  
![HelpDesk Rights](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip11240.png) 

Le Consultant Montreal a un accès restreint en lecture seule. Il ne peut voir aucun mot de passe ou détail d'entrée.  

* Laisser tout désactiver pour cet utilisateur  
![MontrealConsultant Rights](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip11242.png) 

### Configuration des Groupes d'utilisateurs 

Maintenant que les utilisateurs sont créés, nous allons ajouter les groupes d'utilisateurs auxquels nous accorderons plus tard les permissions. Nous avons juste besoin des groupes d'utilisateurs pour leur affecter des utilisateurs. Pas besoin de leur accorder des privilèges.  

* ServiceDesk (Bureau de service) 
* HelpDesk (Bureau d'aide) 
* MontrealConsultant (Consultant)  
![Groupes d'utilisateurs](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip11109.png) 

### Configuration des entrées 

Maintenant, tout est prêt à accorder ou à refuser l'accès aux groupes d'utilisateurs.  

* Le ServiceDesk sera autorisé à afficher et à ouvrir toutes les entrées, mais ne pourra modifier que les entrées dans les groupes/dossiers clients. 
* Le HelpDesk sera autorisé à afficher et à ouvrir des entrées sur les groupes/dossiers clients uniquement et ne pourra pas les modifier. 
* Le MontrealConsultant aura la permission de visualiser et d'ouvrir les entrées sur le groupe/dossier de Montréal uniquement et ne pourra pas le modifier ni ses éléments enfants. 

Nous commencerons par les groupes/dossiers de niveau racine: Downhill Pro, Telemark et Windjammer.  

Pour Downhill Pro, nous accorderons des permissions au ServiceDesk et au HelpDesk.  
![Downhill Pro - Permissions](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip11110.png) 

* ***View (Affichage)*** : HelpDesk, ServiceDesk 
* ***Add (Ajouter)*** : ServiceDesk 
* ***Edit (Modifier)*** : ServiceDesk 
* ***Delete (Supprimer)*** : Aucun utilisateur n'ayant le droit de supprimer, nous pouvons laisser cette permission ***Par défaut (Default)***. 

Nous avons déjà un bon exemple de la flexibilité de la sécurité de {{ fr.RDM }}. Un utilisateur de ServiceDesk peut afficher et ouvrir toutes les entrées du dossier Downhill Pro, même l'entrée d'identifiants, mais il ne pourra jamais voir de mot de passe.  

Ensuite, pour le dossier Telemark, nous accorderons des permissions au ServiceDesk, au HelpDesk et au MontrealConsultant. C'est là que les choses deviennent plus complexes. Si nous voulons que le consultant de Montréal ne puisse voir que le dossier de Montréal qui est un élément enfant du télémark, nous devons accorder au consultant la permission de visualiser le contenu complet du télémark. Ensuite, nous accorderons des permissions sur les éléments enfants uniquement au groupe d'utilisateurs qui devrait avoir accès à ces éléments. Cette dernière étape refusera la permission de visualisation pour le consultant sur les éléments enfants.  
![Telemark - Permissions](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip11111.png) 

* ***View (Affichage)*** : HelpDesk, MontrealConsultant, ServiceDesk 
* ***Add (Ajouter)*** : ServiceDesk 
* ***Edit (Modifier)*** : ServiceDesk 
* ***Delete Supprimer)*** : Default (Par défaut) 

Étant donné que nous voulons que les utilisateurs puissent utiliser les entrées d'identifiants, nous accordons au ServiceDesk et au HelpDesk la permission d'afficher le dossier Credentials. De cette façon, ils pourront utiliser les entrées sans pouvoir voir les mots de passe.  

Les permissions ***Ajouter*** et ***Modifier*** peuvent être laissées à ***Par défaut*** car ServiceDesk est le seul groupe d'utilisateurs qui a reçu ces permissions dans le dossier parent.  
![Telemark / Credentials - Permissions](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip11112.png) 

* ***View (Affichage)*** : HelpDesk, ServiceDesk 
* ***Add (Ajouter)*** : Default (Par défaut) 
* ***Edit (Modifier)*** : Default (Par défaut) 
* ***Delete (Supprimer)*** : Default (Par défaut) 

Nous voulons que ServiceDesk puisse également utiliser les identifiants d'administrateur de domaine, mais pas le HelpDesk. Pour cela, nous devons accorder la permission ***Affichage*** uniquement à ServiceDesk et modifier la permission ***Ajouter*** et ***Modifier*** sur ***Jamais***. Le ServiceDesk pourra toujours modifier l'entrée d'identifiant, mais ne verra jamais le mot de passe. Si vous préférez, vous pouvez définir la permission ***Modifier*** sur un utilisateur ou un groupe d'utilisateurs administrateur pour la refuser au ServiceDesk.  
![Telemark / Credentials / Admin - Permissions](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip11113.png) 

* ***View (Affichage)*** : ServiceDesk 
* ***Add (Ajouter)*** : Default (Par défaut) (ServiceDesk) 
* ***Edit (Modifier)*** : Default (Par défaut) ou utilisateur/groupes d'utilisateurs d'Administrateur 
* ***Delete (Supprimer)*** : Default (Par défaut) 

La dernière étape pour les éléments enfants de Telemark serait de définir la permission ***Affichage*** sur ServiceDesk et HelpDesk sur le dossier Boston et de laisser toutes les autres permissions sur ***Par défaut***.  

Désormais, le MontrealConsultant ne pourra voir et ouvrir les entrées que dans le dossier de Montréal. Chaque fois qu'un nouveau dossier est ajouté, la permission ***Affichage*** doit être définie pour ServiceDesk et HelpDesk pour masquer le nouveau dossier et son contenu au consultant.  
![Telemark / Boston - Permissions](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip11114.png) 

* ***View (Affichage)*** : HelpDesk, ServiceDesk 
* ***Add (Ajouter)*** : Default (Par défaut) (ServiceDesk) 
* ***Edit (Modifier)*** : Default (Par défaut) (ServiceDesk) 
* ***Delete (Supprimer)*** : Default (Par défaut) 

Pas besoin de définir des permissions sur le dossier Montréal, car elles sont héritées des dossiers parents.  
![Telemark / Montreal - Permissions](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip3372.png) 

Enfin, la permission d'afficher le dossier Windjammer sera définie pour ServiceDesk uniquement, car nous voulons qu'ils puissent utiliser ses entrées enfants. Nous ne voulons pas qu'ils ajoutent ou modifient quoi que ce soit, nous allons donc définir les permissions ***Ajouter*** et ***Modifier*** pour l'utilisateur/groupes d'utilisateurs Administrateur.  
![Windjammer - Permissions](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip11115.png) 

### Conclusion 

Les permissions sont désormais correctement définies. Notez que chaque entrée ajoutée plus haut que les groupes/dossiers au niveau racine n'aura aucune sécurité par défaut. Cela signifie qu'ils seraient disponibles pour n'importe qui, même le consultant. Cela peut être confirmé en regardant la capture d'écran ci-dessous dans laquelle la routine quotidienne d'entrée est disponible pour tout le monde. Voici ce que chaque utilisateur devrait voir dans l'arborescence:  
![Navigation des groupes d'utilisateurs](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip11116.png) 

Vous pouvez aller plus loin avec l'octroi de permissions en utilisant les onglets ***Sécurité*** et ***Pièces jointes*** de la section des permissions. Comme toujours, il faut être très prudent lors de l'octroi des permissions et les utilisateurs doivent avoir des privilèges très stricts. 

