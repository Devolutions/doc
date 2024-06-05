---
eleventyComputed:
  title: Sécurité Simplifiée
  status: Sujet disponible en langue allemande
---
{% snippet, "badgeInfo" %}
Cette fonctionnalité est uniquement disponible lors de l'utilisation d'une [Source de Données Avancée](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/).
{% endsnippet %}

{% snippet, "shieldCaution" %}
Bien que le scénario suivant soit pertinent pour les petites et moyennes entreprises, il n'est pas recommandé pour une grande entreprise. Pour un scénario plus adapté aux grandes entreprises, veuillez consulter le scénario [Sécurité Avancée](/rdm/windows/user-groups-based-access-control/scenarios/advanced-security/).
{% endsnippet %}

Notre entreprise fictive, Windjammer, a quatre Groupes d'Utilisateurs : HelpDesk, ServiceDesk, Administrations et Consultants. Il y a deux entreprises clientes : Downhill Pro et Telemark.

La structure arborescente suivante représente les entrées auxquelles les utilisateurs ont accès une fois toutes les permissions définies :
![Structure arborescente](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6055.png)

### Configuration des Utilisateurs
Voici un exemple de configuration des utilisateurs. Pour créer des utilisateurs, naviguer vers ***Administration – Utilisateurs – Ajouter un Utilisateur***.

La sélection des droits suivante est disponible lors de la définition d'un utilisateur en tant qu'***Utilisateur Restreint***.
![Gestion des Utilisateurs - Section des Droits](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6105.png)

***Administrateurs*** : les administrateurs ont beaucoup plus d'accès que les utilisateurs réguliers. Lors de la création de ces utilisateurs, définir le Type d'Utilisateur à ***Administrateur*** pour leur donner accès à tout. L'administrateur peut accéder à toutes les entrées, indépendamment des permissions.
![Gestion des Utilisateurs - Administrateur](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6057.png)

***Utilisateurs Réguliers (Utilisateur)*** : ces utilisateurs ont moins de droits que les administrateurs. Ils ont essentiellement tous les droits de base (à l'exception de ***Voir le Mot de Passe***) mais sont sujets à toutes les permissions refusées. Plus tard, nous refuserons ces droits en spécifiant quels utilisateurs peuvent réellement effectuer ces actions.

***Consultants*** : les consultants ne peuvent voir qu'un sous-ensemble des entrées, nous les définirons comme ***Lecture Seule***. Ils ne peuvent ni ajouter, ni éditer, ni affecter les informations de quelque manière que ce soit.

### Configuration des Groupes d'Utilisateurs
Maintenant que les utilisateurs sont créés, nous allons ajouter les groupes d'utilisateurs auxquels nous accorderons plus tard les permissions. Nous devons créer les groupes d'utilisateurs pour assigner les utilisateurs à ces groupes. Il n'est pas nécessaire d'accorder des privilèges à ces groupes d'utilisateurs.
* ServiceDesk
* HelpDesk
* Consultants
![Gestion des Utilisateurs et de la Sécurité - Groupes d'Utilisateurs](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6106.png)

### Configuration des Entrées
Maintenant, tout est prêt pour accorder ou refuser l'accès aux groupes d'utilisateurs.

* Le ServiceDesk aura la permission de voir et d'ouvrir toutes les entrées mais pourra éditer uniquement les entrées dans les groupes/dossiers clients.
* Le HelpDesk aura la permission de voir et d'ouvrir les entrées dans les groupes/dossiers clients uniquement et ne pourra pas les éditer.
* Les Consultants auront la permission de voir et d'ouvrir les entrées dans le dossier Montréal uniquement mais ne pourront pas l'éditer ni ses éléments enfants.

Nous commencerons par les dossiers de niveau {{ fr.VLT }} : Downhill Pro, Telemark et Windjammer.

La permission de voir le dossier Windjammer sera définie pour le ServiceDesk uniquement puisque nous voulons qu'ils puissent utiliser ses entrées enfants. Nous ne voulons pas que le ServiceDesk puisse ajouter ou éditer quoi que ce soit. Nous définirons les permissions ***Ajouter***, ***Éditer***, et ***Supprimer*** à ***Jamais***. Seul l'administrateur pourra ajouter ou éditer des entrées dans le dossier Windjammer.
![Windjammer - Permissions](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6112.png)

* ***Voir : Personnalisé***; ServiceDesk.
* ***Ajouter : Jamais***; Seul l'administrateur peut ajouter des entrées.
* ***Éditer : Jamais***; Seul l'administrateur peut éditer des entrées.
* ***Supprimer : Jamais***; Seul l'administrateur peut supprimer des entrées.
* ***Déplacer : Hérité***; Jamais hérité de {{ fr.VLT }}. Seuls les administrateurs peuvent déplacer des entrées.
* ***Voir le mot de passe : Hérité***; Jamais hérité de {{ fr.VLT }}. Seuls les administrateurs peuvent voir le mot de passe.
* ***Voir les informations sensibles : Hérité***; Jamais hérité de {{ fr.VLT }}. Seuls les administrateurs peuvent voir les informations sensibles.

Pour Downhill Pro, nous accorderons des permissions au ServiceDesk et au HelpDesk.
![Downhill Pro - Permissions](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6116.png)

* ***Voir : Personnalisé***; HelpDesk, ServiceDesk.
* ***Ajouter : Personnalisé***; ServiceDesk.
* ***Éditer : Personnalisé***; ServiceDesk.
* ***Supprimer : Jamais***; Seul l'administrateur peut supprimer des entrées.
* ***Déplacer : Hérité***; Jamais hérité de {{ fr.VLT }}. Seuls les administrateurs peuvent déplacer des entrées.
* ***Voir le mot de passe : Hérité***; Jamais hérité de {{ fr.VLT }}. Seuls les administrateurs peuvent voir le mot de passe.
* ***Voir les informations sensibles : Hérité***; Jamais hérité de {{ fr.VLT }}. Seuls les administrateurs peuvent voir les informations sensibles.

Nous avons déjà un bon exemple de la flexibilité de la Sécurité de {{ fr.RDM }}. Un utilisateur du ServiceDesk peut voir et utiliser toutes les entrées dans le dossier Downhill Pro, même les entrées d'identification, mais il ne pourra jamais voir aucun mot de passe puisque Voir le Mot de Passe est Refusé (depuis le dossier {{ fr.VLT }}).

Ensuite, pour le dossier Telemark, nous accorderons des permissions au ServiceDesk, au HelpDesk et aux Consultants. C'est là que les choses deviennent complexes. Si nous voulons que les Consultants puissent voir uniquement le dossier Montréal qui est un élément enfant de Telemark, nous devons accorder aux consultants la permission de voir tout le contenu de Telemark. Ensuite, nous accorderons des permissions sur les éléments enfants uniquement au groupe d'utilisateurs qui devrait avoir accès à ces éléments. Cette dernière étape refusera la permission de voir pour les consultants sur les éléments enfants.
![Telemark - Permissions](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6110.png)

* ***Voir : Personnalisé***; Consultants, HelpDesk, ServiceDesk.
* ***Ajouter : Personnalisé***; ServiceDesk.
* ***Éditer : Personnalisé***; ServiceDesk.
* ***Supprimer : Jamais***; Seul l'administrateur peut supprimer des entrées.
* ***Déplacer : Hérité***; Jamais hérité de {{ fr.VLT }}. Seuls les administrateurs peuvent déplacer des entrées.
* ***Voir le mot de passe : Hérité***; Jamais hérité de {{ fr.VLT }}. Seuls les administrateurs peuvent voir le mot de passe.
* ***Voir les informations sensibles : Hérité***; Jamais hérité de {{ fr.VLT }}. Seuls les administrateurs peuvent voir les informations sensibles.

Puisque nous voulons que les utilisateurs puissent utiliser les entrées d'identification, nous accorderons au ServiceDesk et au HelpDesk la permission de voir le dossier Identifiants. Ainsi, le ServiceDesk et le HelpDesk pourront utiliser les entrées du dossier sans révéler les mots de passe. Par conséquent, en spécifiant que seuls le HelpDesk et le ServiceDesk ont la permission de ***Voir***, nous refusons l'accès à la vue à tout groupe d'utilisateurs ou utilisateur qui n'est pas dans la liste de la permission.

Les permissions ***Ajouter***, ***Éditer***, et ***Supprimer*** peuvent être laissées à ***Hérité*** puisqu'elles héritent des paramètres du dossier parent Telemark. Le ServiceDesk est le seul groupe d'utilisateurs qui a reçu la permission ***Ajouter*** et ***Éditer*** dans le dossier parent et la permission ***Supprimer*** hérite du paramètre Jamais.
![Telemark/Identifiants - Permissions](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6115.png)

* ***Voir : Personnalisé***; HelpDesk, ServiceDesk.
* ***Ajouter : Hérité***; ServiceDesk hérité du dossier Telemark.
* ***Éditer : Hérité***; ServiceDesk hérité du dossier Telemark.
* ***Supprimer : Hérité***; Jamais hérité du dossier Telemark.
* ***Déplacer : Hérité***; Jamais hérité de {{ fr.VLT }}. Seuls les administrateurs peuvent déplacer des entrées.
* ***Voir le mot de passe : Hérité***; Jamais hérité de {{ fr.VLT }}. Seuls les administrateurs peuvent voir le mot de passe.
* ***Voir les informations sensibles : Hérité***; Jamais hérité de {{ fr.VLT }}. Seuls les administrateurs peuvent voir les informations sensibles.

Nous voulons que le ServiceDesk puisse également utiliser l'entrée d'identification Administrateur de Domaine mais pas le HelpDesk. Pour cela, nous devons accorder la permission de ***Voir*** au ServiceDesk. Le ServiceDesk pourra toujours éditer l'entrée d'identification mais ne verra jamais le mot de passe. La permission de supprimer est définie à ***Jamais***.
![Entrée d'identification Administrateur de Domaine](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6108.png)

La dernière étape pour les éléments enfants de Telemark est de définir la permission de ***Voir*** au ServiceDesk et au HelpDesk sur le dossier Boston et de laisser toutes les autres permissions de ce dossier à ***Hérité***. Cela empêche les Consultants de voir le dossier Boston. Maintenant, les Consultants pourront voir et ouvrir des entrées uniquement dans le dossier Montréal.
![Telemark/Boston - Permissions](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6109.png)

{% snippet, "shieldCaution" %}
Chaque fois qu'un nouveau dossier est ajouté, la permission de ***Voir*** doit être définie pour le ServiceDesk et le HelpDesk pour cacher le nouveau dossier et son contenu aux Consultants.
{% endsnippet %}

Il n'est pas nécessaire de définir des permissions sur le dossier Montréal, puisqu'elles sont héritées des dossiers parents.
![Telemark/Montréal - Permissions](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6120.png)

### En Conclusion
Les permissions sont maintenant correctement définies. Notez que chaque entrée ajoutée au niveau {{ fr.VLT }} n'aura aucune sécurité par défaut. Cela signifie qu'elles seraient disponibles pour tout le monde, même les consultants. Cela peut être confirmé en regardant la capture d'écran ci-dessous dans laquelle l'entrée ***Routine quotidienne*** est disponible pour tout le monde. Voici ce que chaque utilisateur devrait voir dans la vue arborescente :
![Vue Arborescente Côte à Côte](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6065.png)

Vous pouvez personnaliser davantage vos permissions en utilisant l'onglet ***Paramètres de Sécurité*** lors de l'édition des entrées, ou l'onglet ***Journaux*** pour ajouter plus de traces d'allées et venues. Comme toujours, il faut prendre grand soin lors de l'octroi des permissions.