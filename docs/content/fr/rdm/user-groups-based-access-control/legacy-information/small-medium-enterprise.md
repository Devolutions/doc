---
eleventyComputed:
  title: Petite et moyenne entreprise
  description: Ici, nous vous donnerons un exemple de structure de sécurité qui devrait être pertinent pour les petites et moyennes entreprises.
---
Ici, nous vous donnerons un exemple de structure de sécurité qui devrait être pertinent pour les petites et moyennes entreprises.

Dans ce scénario, toutes les options dans la section ***Privilèges*** des propriétés de l'utilisateur seront laissées désactivées.

Bien que cet exemple puisse convenir à de nombreuses entreprises, veuillez garder à l'esprit que tout privilège devrait être accordé uniquement si nécessaire. Soyez extrêmement prudent lors de l'octroi de permissions à un utilisateur ou à un groupe d'utilisateurs.

{% snippet, "badgeInfo" %}
Cette fonctionnalité est uniquement disponible lors de l'utilisation d'une [Source de Données Avancée](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/).
{% endsnippet %}

## Étapes
Notre entreprise fictive Windjammer a un HelpDesk (en bleu) et un département ServiceDesk, un administrateur et un MontrealConsultant. Nous pouvons également voir deux clients : Downhill Pro et Telemark (en rouge).

Voici une vue de la structure de l'arborescence de la source de données :
![Structure de l'arborescence Windjammer](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6043.png)

### Configurations des Utilisateurs

Voici un exemple pour les configurations des utilisateurs.

L'administrateur :

* Lors de la création de l'utilisateur, sélectionner ***Administrateur*** dans le menu déroulant pour lui donner accès à tout.
![Permission de l'Administrateur](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6077.png)

Le ServiceDesk :

* ***Ajouter***
* ***Modifier***
![Droits du ServiceDesk](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6137.png)

Le HelpDesk :

* ***Ajouter***
![Droits du HelpDesk](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6136.png)

Le MontrealConsultant a un accès en lecture seule. Il ne peut voir aucun mot de passe ni détail d'entrée.

![Droits du MontrealConsultant](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6080.png)

### Configuration des Groupes d'Utilisateurs

Maintenant que les utilisateurs sont créés, nous allons ajouter les groupes d'utilisateurs auxquels nous accorderons plus tard les permissions. Nous avons juste besoin des groupes d'utilisateurs pour assigner les utilisateurs à ceux-ci. Pas besoin de leur accorder des privilèges.

* ServiceDesk
* HelpDesk
* MontrealConsultant

### Configuration des Entrées

Maintenant, tout est prêt pour accorder ou refuser l'accès aux groupes d'utilisateurs.

* Le ServiceDesk aura la permission de voir et d'ouvrir toutes les entrées mais pourra modifier uniquement les entrées dans les groupes/dossiers des clients.
* Le HelpDesk aura la permission de voir et d'ouvrir les entrées uniquement dans les groupes/dossiers des clients et ne pourra pas les modifier.
* Le MontrealConsultant aura la permission de voir et d'ouvrir les entrées uniquement dans le groupe/dossier de Montréal et ne pourra ni le modifier ni ses éléments enfants.

Nous commencerons par les groupes/dossiers de niveau racine : Downhill Pro, Telemark et Windjammer.

Pour Downhill Pro, nous accorderons des permissions au ServiceDesk et au HelpDesk.
![Permissions de Downhill Pro](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6072.png)

* ***Voir*** : HelpDesk, ServiceDesk
* ***Ajouter*** : ServiceDesk
* ***Modifier*** : ServiceDesk
* ***Supprimer*** : Puisqu'aucun utilisateur n'a le droit de supprimer, nous pouvons laisser cette permission à ***Hérité***.

Nous avons déjà un bon exemple de la flexibilité de la Sécurité de {{ fr.RDM }}. Un utilisateur du ServiceDesk peut voir et ouvrir toutes les entrées dans le dossier Downhill Pro, même l'entrée d'identification, mais il ne pourra jamais voir aucun mot de passe.

Ensuite, pour le dossier Telemark, nous accorderons des permissions au ServiceDesk, au HelpDesk et au MontrealConsultant. C'est là que les choses se compliquent. Si nous voulons que le MontrealConsultant puisse voir uniquement le dossier Montréal qui est un élément enfant de Telemark, nous devons accorder au consultant la permission de voir tout le contenu de Telemark. Ensuite, nous accorderons des permissions sur les éléments enfants uniquement au groupe d'utilisateurs qui devrait avoir accès à ces éléments. Cette dernière étape refusera la permission de voir pour le consultant sur les éléments enfants.
![Permissions de Telemark](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6075.png)

* ***Voir*** : HelpDesk, MontrealConsultant, ServiceDesk
* ***Ajouter*** : ServiceDesk
* ***Modifier*** : ServiceDesk
* ***Supprimer*** : Hérité

Puisque nous voulons que les utilisateurs puissent utiliser les entrées d'identification, nous accorderons au ServiceDesk et au HelpDesk la permission de Voir le dossier Credentials. Ainsi, ils pourront utiliser les entrées sans pouvoir voir les mots de passe.

Les permissions ***Ajouter*** et ***Modifier*** peuvent être laissées à ***Hérité*** puisque le ServiceDesk est le seul groupe d'utilisateurs qui a reçu ces permissions dans le dossier parent.
![Permissions de Telemark/Credentials](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6049.png)

* ***Voir*** : HelpDesk, ServiceDesk
* ***Ajouter*** : Hérité
* ***Modifier*** : Hérité
* ***Supprimer*** : Hérité

Nous voulons que le ServiceDesk puisse également utiliser l'entrée d'identification de l'Administrateur de Domaine mais pas le HelpDesk. Pour cela, nous devons accorder la permission ***Voir*** uniquement au ServiceDesk et changer les permissions ***Ajouter*** et ***Modifier*** à ***Jamais***. Le ServiceDesk pourra toujours modifier l'entrée d'identification mais ne verra jamais le mot de passe. Si vous préférez, vous pouvez définir la permission ***Modifier*** à un utilisateur ou groupe d'utilisateurs Administrateur pour la refuser au ServiceDesk.
![Permissions de Telemark/Credentials/Admin](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6050.png)

* ***Voir*** : ServiceDesk
* ***Ajouter*** : Hérité (ServiceDesk)
* ***Modifier*** : Hérité ou utilisateur/groupe d'utilisateurs Administrateur
* ***Supprimer*** : Hérité

La dernière étape pour les éléments enfants de Telemark serait de définir la permission ***Voir*** au ServiceDesk et au HelpDesk sur le dossier Boston et de laisser toutes les autres permissions à ***Hérité***.

Maintenant, le MontrealConsultant pourra voir et ouvrir les entrées uniquement dans le dossier Montréal. Chaque fois qu'un nouveau dossier est ajouté, la permission ***Voir*** doit être définie pour le ServiceDesk et le HelpDesk pour cacher le nouveau dossier et son contenu au consultant.
![Permissions de Telemark/Boston](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6073.png)

* ***Voir*** : HelpDesk, ServiceDesk
* ***Ajouter*** : Hérité (ServiceDesk)
* ***Modifier*** : Hérité (ServiceDesk)
* ***Supprimer*** : Hérité

Il n'est pas nécessaire de définir des permissions sur le dossier Montréal, puisqu'elles sont héritées des dossiers parents.
![Permissions de Telemark/Montréal](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6074.png)

Enfin, la permission de voir le dossier Windjammer sera définie pour le ServiceDesk uniquement puisque nous voulons qu'ils puissent utiliser ses entrées enfants. Nous ne voulons pas qu'ils puissent ajouter ou modifier quoi que ce soit, donc nous définirons les permissions ***Ajouter*** et ***Modifier*** à l'utilisateur/groupe d'utilisateurs Administrateur.
![Permissions de Windjammer](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6053.png)

### En Conclusion

Les permissions sont maintenant correctement définies. Notez que chaque entrée ajoutée au-dessus des groupes/dossiers de niveau racine n'aura pas de sécurité par défaut. Cela signifie qu'elles seraient disponibles pour tout le monde, même le consultant. Cela peut être confirmé en regardant la capture d'écran ci-dessous dans laquelle l'entrée Routine quotidienne est disponible pour tout le monde. Voici ce que chaque utilisateur devrait voir dans l'arborescence :
![Vues d'arborescence côte à côte](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6054.png)

Vous pouvez aller plus loin dans l'octroi de permissions en utilisant les onglets ***Sécurité*** et ***Pièces jointes*** de la section des permissions. Comme toujours, un grand soin doit être pris lors de l'octroi de permissions et les utilisateurs devraient avoir des privilèges très stricts.
