---
eleventyComputed:
  title: Sécurité avancée
  status: Sujet disponible en langue allemande
---
{% snippet, "badgeInfo" %}
Cette fonctionnalité est uniquement disponible lors de l'utilisation d'une [Source de Données Avancée](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/).
{% endsnippet %}

{% snippet, "badgeInfo" %}
Le scénario suivant est conçu pour les grandes entreprises. Pour un scénario plus adapté aux petites entreprises, veuillez consulter notre scénario [Sécurité Simplifiée](/rdm/windows/user-groups-based-access-control/scenarios/simplified-security/).
{% endsnippet %}

Bien que cet exemple soit adapté aux grandes entreprises, gardez à l'esprit que tout privilège doit être accordé uniquement si nécessaire. Soyez prudent lors de l'octroi de permissions à un utilisateur ou à un groupe d'utilisateurs. Notre entreprise fictive, Windjammer, a trois groupes d'utilisateurs : HelpDesk, ServiceDesk et Consultants. Il y a deux entreprises clientes : Downhill Pro et Telemark.

La structure d'arborescence suivante représente les entrées auxquelles les utilisateurs ont accès une fois toutes les permissions définies :
![Structure d'arborescence](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6129.png)

### Configuration des Utilisateurs
Voici un exemple de configuration des utilisateurs. Pour créer des utilisateurs, naviguer vers ***Administration*** – ***Utilisateurs*** – ***Ajouter un Utilisateur***.

Ici, nous sélectionnons le type d'utilisateur pour leur donner les droits les plus basiques (***Ajouter***, ***Modifier*** et ***Supprimer***).

Les utilisateurs ***ServiceDesk*** sont des ***Utilisateurs Restreints***. Ils ont les droits ***Ajouter*** et ***Modifier***. Cependant, ils ne peuvent pas ajouter d'entrées dans le dossier {{ fr.VLT }}.
![Gestion des Utilisateurs – ServiceDesk – Utilisateur Restreint](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6126.png)

Les utilisateurs ***HelpDesk*** sont également des ***Utilisateurs Restreints***. Ils ont uniquement le droit ***Ajouter***. Cependant, ils ne peuvent pas ajouter d'entrées dans le dossier {{ fr.VLT }}.
![Gestion des Utilisateurs – HelpDesk – Utilisateur Restreint](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6127.png)

Les ***Consultants*** sont des ***Utilisateurs en Lecture Seule*** et ne peuvent voir qu'un sous-ensemble d'entrées. Ils ne peuvent rien ajouter ni modifier.

### Configuration des Groupes d'Utilisateurs
Maintenant que les utilisateurs sont créés, nous allons ajouter les groupes d'utilisateurs auxquels nous accorderons ensuite les permissions. Nous devons créer les groupes d'utilisateurs et assigner l'utilisateur respectif à chaque groupe d'utilisateurs. Il n'est pas nécessaire d'accorder de privilège à ces groupes d'utilisateurs puisqu'ils sont principalement des coquilles vides utilisées pour regrouper plusieurs utilisateurs. Cela permet de contrôler plusieurs utilisateurs à la fois au lieu d'accorder des permissions à chaque utilisateur, un par un.

* ServiceDesk
* HelpDesk
* Consultants

Pour ajouter un groupe d'utilisateurs, cliquez sur le bouton ***Ajouter un Groupe d'Utilisateurs***, entrez un nom pour le groupe d'utilisateurs et cliquez sur ***Ok***.

Pour assigner des utilisateurs à un groupe d'utilisateurs, sélectionnez un groupe d'utilisateurs et cliquez sur le bouton ***Assigner des Groupes d'Utilisateurs***. Utilisez les cases à cocher ***Est Membre*** pour ajouter des utilisateurs au groupe d'utilisateurs.
![Gestion des Utilisateurs et de la Sécurité – Groupes d'Utilisateurs](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6088.png)

### Configuration des Entrées
Maintenant, tout est prêt pour accorder ou refuser l'accès aux groupes d'utilisateurs.

* Toutes les permissions du dossier {{ fr.VLT }} sont définies sur ***Jamais***. Par héritage, cela refuse l'accès par défaut aux éléments enfants à tout le monde.
* Le ServiceDesk a la permission de voir et d'ouvrir toutes les entrées mais peut seulement modifier les entrées dans les groupes/dossiers des clients.
* Le HelpDesk a la permission de voir et d'ouvrir les entrées dans les groupes/dossiers des clients uniquement et ne peut pas les modifier.
* Les Consultants ont la permission de voir et d'ouvrir les entrées dans le dossier Montréal uniquement mais ne peuvent pas le modifier ni ses éléments enfants.

**Paramètres {{ fr.VLT_MAJ }}**
Comme mentionné ci-dessus, TOUTES les permissions du dossier des paramètres {{ fr.VLT }} sont définies sur ***Jamais***. Cela refuse l'accès par défaut aux autres utilisateurs.
![Paramètres {{ fr.VLT_MAJ }} – Permissions](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6089.png)

**Windjammer, Downhill Pro et Telemark, les groupes/dossiers de niveau {{ fr.VLT }}**
La permission de voir le dossier Windjammer est définie uniquement pour le ServiceDesk puisque nous voulons qu'ils puissent utiliser les entrées enfants. Nous ne voulons pas que le ServiceDesk puisse ajouter, modifier ou supprimer quoi que ce soit. Nous laissons les permissions ***Ajouter***, ***Modifier*** et ***Supprimer*** à ***Hérité*** afin que seuls les administrateurs puissent effectuer ces actions sur le dossier Windjammer et ses éléments enfants.
![Windjammer – Permissions](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6131.png)

* ***Voir : Personnalisé***; ServiceDesk.
* ***Ajouter : Hérité***; Jamais hérité de {{ fr.VLT }}. Seul l'administrateur peut ajouter des entrées.
* ***Modifier : Hérité***; Jamais hérité de {{ fr.VLT }}. Seul l'administrateur peut modifier des entrées.
* ***Supprimer : Hérité***; Jamais hérité de {{ fr.VLT }}. Seul l'administrateur peut supprimer des entrées.
* ***Déplacer : Hérité***; Jamais hérité de {{ fr.VLT }}. Seuls les administrateurs peuvent déplacer des entrées.
* ***Voir le mot de passe : Hérité***; Jamais hérité de {{ fr.VLT }}. Seuls les administrateurs peuvent voir le mot de passe.
* ***Voir les informations sensibles : Hérité***; Jamais hérité de {{ fr.VLT }}. Seuls les administrateurs peuvent voir les informations sensibles.
* ***Connecter (Exécuter) : Hérité***; Jamais hérité de {{ fr.VLT }}. Seuls les administrateurs peuvent se connecter (exécuter).

Pour Downhill Pro, nous accordons des permissions au ServiceDesk et au HelpDesk.
![Downhill Pro – Permissions](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6091.png)

* ***Voir : Personnalisé***; HelpDesk, ServiceDesk.
* ***Ajouter : Personnalisé***; ServiceDesk.
* ***Modifier : Personnalisé***; ServiceDesk.
* ***Supprimer : Hérité***; Jamais hérité de {{ fr.VLT }}. Seul l'administrateur peut supprimer des entrées.
* ***Déplacer : Hérité***; Jamais hérité de {{ fr.VLT }}. Seuls les administrateurs peuvent déplacer des entrées.
* ***Voir le mot de passe : Hérité***; Jamais hérité de {{ fr.VLT }}. Seuls les administrateurs peuvent voir le mot de passe.

Nous avons déjà un bon exemple de la flexibilité de la Sécurité {{ fr.RDM }}. Les utilisateurs ServiceDesk et HelpDesk peuvent voir et utiliser toutes les entrées dans le dossier Downhill Pro, même les entrées d'identification, mais ils ne verront jamais aucun mot de passe puisque les utilisateurs ServiceDesk et HelpDesk n'ont pas le privilège de révéler les mots de passe.

Ensuite, pour le dossier Telemark, nous accordons des permissions au ServiceDesk, au HelpDesk et aux Consultants. C'est là que les choses se compliquent. Si nous voulons que les Consultants puissent voir uniquement le dossier Montréal, qui est un élément enfant de Telemark, nous devons accorder aux Consultants la permission de voir le dossier parent, donc tout le contenu de Telemark. Ensuite, nous accorderons des permissions sur les éléments enfants uniquement au groupe d'utilisateurs qui devrait avoir accès à ces éléments. Cette dernière étape refusera la permission de voir pour les Consultants sur les éléments enfants.
![Telemark – Permissions](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6128.png)

* ***Voir : Personnalisé***; Consultants, HelpDesk, ServiceDesk.
* ***Ajouter : Personnalisé***; ServiceDesk.
* ***Modifier : Personnalisé***; ServiceDesk.
* ***Supprimer : Hérité***; Jamais hérité de {{ fr.VLT }}. Seul l'administrateur peut supprimer des entrées.
* ***Déplacer : Hérité***; Jamais hérité de {{ fr.VLT }}. Seuls les administrateurs peuvent déplacer des entrées.
* ***Voir le mot de passe : Hérité***; Jamais hérité de {{ fr.VLT }}. Seuls les administrateurs peuvent voir le mot de passe.
* ***Voir les informations sensibles : Hérité***; Jamais hérité de {{ fr.VLT }}. Seuls les administrateurs peuvent voir les informations sensibles.

**Éléments Enfants de Telemark**
Puisque nous voulons que les utilisateurs puissent utiliser les entrées d'identification, nous accordons au ServiceDesk et au HelpDesk la permission de voir le dossier Identifiants. Ainsi, le ServiceDesk et le HelpDesk peuvent utiliser les entrées du dossier sans révéler les mots de passe. En spécifiant que seuls le HelpDesk et le ServiceDesk ont la permission ***Voir***, nous refusons l'accès à la vue à tout groupe d'utilisateurs ou utilisateur qui n'est pas sur la liste de la permission.

Les permissions ***Ajouter*** et ***Modifier*** sont définies sur ***Jamais*** et la permission ***Supprimer*** peut être laissée à ***Hérité*** puisqu'elle hérite du paramètre ***Jamais*** de {{ fr.VLT }}. Seuls les administrateurs peuvent effectuer ces actions dans les groupes/dossiers contenant des identifiants.
![Telemark/Identifiants – Permissions](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6132.png)

* ***Voir : Personnalisé***; HelpDesk, ServiceDesk.
* ***Ajouter : Jamais***; Seuls les administrateurs peuvent ajouter des entrées d'identification.
* ***Modifier : Jamais***; Seuls les administrateurs peuvent modifier des entrées.
* ***Supprimer : Hérité***; Jamais hérité de {{ fr.VLT }}. Seuls les administrateurs peuvent supprimer des entrées.
* ***Déplacer : Hérité***; Jamais hérité de {{ fr.VLT }}. Seuls les administrateurs peuvent déplacer des entrées.
* ***Voir le mot de passe : Hérité***; Jamais hérité de {{ fr.VLT }}. Seuls les administrateurs peuvent voir le mot de passe.
* ***Voir les informations sensibles : Hérité***; Jamais hérité de {{ fr.VLT }}. Seuls les administrateurs peuvent voir les informations sensibles.
* ***Connecter (Exécuter) : Hérité***; Jamais hérité de {{ fr.VLT }}. Seuls les administrateurs peuvent se connecter (exécuter).

Nous voulons que le ServiceDesk puisse utiliser l'entrée d'identification ***Admin de domaine***, mais pas le HelpDesk. Pour cela, nous devons accorder la permission ***Voir*** au ServiceDesk. Le ServiceDesk est toujours capable d'utiliser l'entrée d'identification mais ne verra jamais le mot de passe.
![Telemark/Identifiants/Admin – Permissions](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6133.png)

* ***Voir : Personnalisé***; ServiceDesk.
* ***Ajouter : Hérité***; Jamais hérité de {{ fr.VLT }}. Seuls les administrateurs peuvent ajouter des entrées d'identification.
* ***Modifier : Hérité***; Jamais hérité de {{ fr.VLT }}. Seuls les administrateurs peuvent modifier des entrées d'identification.
* ***Supprimer : Hérité***; Jamais hérité de Telemark/Identifiants. Seuls les administrateurs peuvent supprimer des entrées d'identification.
* ***Déplacer : Hérité***; Jamais hérité de {{ fr.VLT }}. Seuls les administrateurs peuvent déplacer des entrées.
* ***Voir le mot de passe : Hérité***; Jamais hérité de {{ fr.VLT }}. Seuls les administrateurs peuvent voir le mot de passe.
* ***Voir les informations sensibles : Hérité***; Jamais hérité de {{ fr.VLT }}. Seuls les administrateurs peuvent voir les informations sensibles.
* ***Connecter (Exécuter) : Hérité***; Jamais hérité de {{ fr.VLT }}. Seuls les administrateurs peuvent se connecter (exécuter).

La dernière étape pour les éléments enfants de Telemark est de définir la permission ***Voir*** pour le ServiceDesk et le HelpDesk sur le dossier Boston et de laisser toutes les autres permissions de ce dossier à ***Hérité***. Cela refuse aux Consultants de voir le dossier Boston. Maintenant, les Consultants peuvent voir et ouvrir des entrées uniquement dans le dossier Montréal.
![Telemark/Boston – Permissions](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6134.png)

* ***Voir : Personnalisé***; HelpDesk, ServiceDesk.
* ***Ajouter : Hérité***; ServiceDesk hérité de Telemark.
* ***Modifier : Hérité***; ServiceDesk hérité de Telemark.
* ***Supprimer : Hérité***; Jamais hérité de {{ fr.VLT }}.
* ***Voir le mot de passe : Hérité***; Jamais hérité de {{ fr.VLT }}. Seuls les administrateurs peuvent voir le mot de passe.
* ***Voir les informations sensibles : Hérité***; Jamais hérité de {{ fr.VLT }}. Seuls les administrateurs peuvent voir les informations sensibles.

{% snippet, "shieldCaution" %}
Chaque fois qu'un nouveau dossier est ajouté comme enfant du dossier Telemark, la permission ***Voir*** doit être définie pour le ServiceDesk et/ou le HelpDesk pour cacher le nouveau dossier et son contenu aux Consultants.
{% endsnippet %}

Il n'est pas nécessaire de définir de permissions sur le dossier Montréal, puisqu'elles héritent toutes des valeurs des dossiers parents.
![Telemark/Montréal – Permissions](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6135.png)

### En Conclusion
Les permissions sont maintenant correctement définies. Notez que chaque entrée ajoutée au niveau de {{ fr.VLT }} hérite également de {{ fr.VLT }}. Cela signifie qu'elles seraient disponibles uniquement pour les administrateurs, à moins que leurs permissions ne soient modifiées. Cela peut être confirmé en regardant la capture d'écran ci-dessous, dans laquelle l'entrée ***Routine quotidienne*** est disponible pour tout le monde (ses permissions ont été modifiées pour Tout le monde). Voici ce que chaque utilisateur devrait voir dans l'arborescence :
![Vue d'Arborescence Côte à Côte](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6099.png)

Vous pouvez personnaliser davantage les permissions en utilisant la section ***Paramètres de Sécurité*** lors de l'édition des entrées. Comme toujours, il faut prendre grand soin lors de l'octroi de permissions.

![Paramètres de Sécurité](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2258.png)