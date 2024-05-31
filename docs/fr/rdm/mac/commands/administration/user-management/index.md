---
eleventyComputed:
  title: Gestion des utilisateurs
  description: La gestion des utilisateurs est disponible depuis Administration – Utilisateurs et vous permet de créer, gérer et attribuer des droits à un utilisateur.
---
La gestion des utilisateurs est disponible depuis ***Administration – Utilisateurs*** et vous permet de créer, gérer et attribuer des droits à un utilisateur.
![Administration – Utilisateurs](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10381.png)

{{ fr.RDMMAC }} permet une gestion avancée des droits des utilisateurs vous permettant de contrôler comment une session est utilisée par chaque utilisateur. Notez que certains contrôles de visibilité dépendront de la source de données active. Il n'est actuellement pas possible d'hériter des droits de sécurité d'un groupe car ils doivent être attribués individuellement pour chaque utilisateur. Si vous utilisez [{{ fr.DVLS }}](/server/overview/what-is-server/), vous pourrez alors utiliser la Sécurité Intégrée avec Active Directory.

{% snippet, "badgeInfo" %}
Cette fonctionnalité nécessite une [Source de Données Avancée](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/).
{% endsnippet %}

{% snippet, "badgeInfo" %}
Pour créer des utilisateurs et attribuer des droits, vous devez être administrateur non seulement de {{ fr.RDMMAC }}, mais aussi de la base de données sous-jacente.
{% endsnippet %}

{% snippet, "badgeInfo" %}
Toutes les [Sources de Données Avancées](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/) ne prennent pas en charge l'utilisation de la Sécurité Intégrée. Pour en savoir plus, veuillez consulter [Sécurité Intégrée](/rdm/mac/commands/administration/user-management/integrated-security/).
{% endsnippet %}

## Paramètres

### Créer des utilisateurs
Pour créer un nouvel utilisateur, cliquer sur le bouton d'ajout. Vous pouvez créer un utilisateur en utilisant la sécurité par défaut (en spécifiant le mot de passe) ou [Sécurité Intégrée](/rdm/mac/commands/administration/user-management/integrated-security/). Consulter [Permissions](/rdm/mac/commands/administration/user-management/permissions/) pour plus d'informations sur les droits qui peuvent être ajoutés à un utilisateur. Vous pouvez attribuer différentes options de sécurité à l'utilisateur telles que permettre à l'utilisateur d'utiliser le mode Hors ligne.
![Gestion des Utilisateurs et de la Sécurité](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10133.png)

{% snippet, "badgeInfo" %}
Toutes les [Sources de Données Avancées](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/) ne prennent pas en charge l'utilisation de [Sécurité Intégrée](/rdm/mac/commands/administration/user-management/integrated-security/). Si vous utilisez [{{ fr.DVLS }}](/server/overview/what-is-server/), vous pourrez alors utiliser la Sécurité Intégrée avec Active Directory. Pour en savoir plus, veuillez consulter [Sécurité Intégrée](/rdm/mac/commands/administration/user-management/integrated-security/).
{% endsnippet %}

## Paramètres de Gestion des Utilisateurs

### Général
![Gestion des Utilisateurs – Général](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10382.png)

| OPTION              | DESCRIPTION                                     |
|---------------------|-------------------------------------------------|
| Type d'authentification | Sélectionner le type d'authentification de l'utilisateur : <ul><li>***Personnalisé (Devolutions)*** : Si vous souhaitez ajouter une couche supplémentaire de sécurité sans utiliser la Sécurité Intégrée ou sans avoir à créer de nouveau login SQL dans votre serveur SQL, le type d'authentification Personnalisé sera votre meilleure option. Vous aurez seulement besoin de créer un compte SQL au sein du serveur SQL.</li><li>***Base de données (SQL Server)*** : Authentifier en utilisant le login SQL de votre serveur SQL.</li></ul> |
| Nom d'utilisateur            | Entrer le nom d'utilisateur pour l'utilisateur. Lors de l'utilisation de [Sécurité Intégrée](/rdm/mac/commands/administration/user-management/integrated-security/), l'utilisateur doit être sélectionné dans l'annuaire. |
| Sécurité intégrée | Spécifie d'utiliser l'Authentification Intégrée Windows pour s'authentifier à la source de données. S'applique uniquement à SQL Server et {{ fr.DVLS }}, selon leur configuration. Lorsque coché, un bouton avec des points de suspension apparaît pour vous permettre de parcourir le compte utilisateur dans l'annuaire. Consulter [Sécurité Intégrée](/rdm/mac/commands/administration/user-management/integrated-security/) pour plus d'informations. |
| Mot de passe            | Entrer le mot de passe de l'utilisateur. Ce champ est désactivé lors de l'utilisation de [Sécurité Intégrée](/rdm/mac/commands/administration/user-management/integrated-security/). |
| Type d'utilisateur           | Sélectionner le type d'utilisateur à créer. Sélectionner entre : <ul><li>***Administrateur*** : Accorder tous les droits administratifs à l'utilisateur.</li><li>***Utilisateur en lecture seule*** : Accorder uniquement l'accès en lecture à l'utilisateur.</li><li>***Utilisateur restreint*** : Sélectionner quels droits accorder à l'utilisateur.</li><li>***Utilisateur*** : Accorder tous les droits de base à l'utilisateur (Ajouter, Modifier, Supprimer).</li></ul> |
| Type de licence utilisateur   | Sélectionner le type de licence de l'utilisateur. Sélectionner entre : <ul><li>***Défaut*** : Accorder tous les droits administratifs à l'utilisateur.</li><li>***Gestion des Connexions*** : Accorder uniquement l'accès en lecture à l'utilisateur.</li><li>***Gestion des Mots de Passe*** : Sélectionner quels droits accorder à l'utilisateur.</li></ul> |
| Profil d'interface utilisateur       | Sélectionner le [profil d'interface utilisateur](/rdm/mac/user-interface/customization/usage-profiles/) de l'utilisateur. Sélectionner entre : <ul><li>***Défaut***</li><li>***Professionnel de l'informatique***</li><li>***Utilisateur d'affaires***</li></ul>Notez que le profil d'interface utilisateur ne peut être défini qu'à la création d'un utilisateur. Une fois l'utilisateur créé, vous ne pouvez pas modifier ce paramètre. |
| Prénom          | Entrer le prénom de l'utilisateur.               |
| Nom           | Entrer le nom de famille de l'utilisateur.                 |
| Courriel               | Insérer l'adresse courriel de l'utilisateur.                |

### Informations
Entrer toutes les informations nécessaires concernant votre nouvel utilisateur.
![Gestion des Utilisateurs – Informations](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10383.png)

### Groupes d'utilisateurs
![Gestion des Utilisateurs – Groupes d'Utilisateurs](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10384.png)

| OPTION      | DESCRIPTION                                                                                                        |
|-------------|--------------------------------------------------------------------------------------------------------------------|
| Groupes d'utilisateurs | Lorsqu'un groupe d'utilisateurs doit être ajouté à un utilisateur, une colonne de description vous aidera à sélectionner le groupe d'utilisateurs approprié. |

### Privilèges
![Gestion des Utilisateurs – Privilèges](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10385.png)

| OPTION                | DESCRIPTION                                                                       |
|-----------------------|-----------------------------------------------------------------------------------|
| Permettre de révéler le mot de passe | Permet à l'utilisateur d'utiliser la commande Révéler le Mot de Passe.                               |
| Permettre le glisser-déposer   | Permet à l'utilisateur de déplacer les sessions en utilisant le glisser-déposer depuis d'autres applications. |
| Voir les détails          | Permet à l'utilisateur de voir le contenu de l'onglet Détails pour toutes les sessions.           |
| Voir les informations      | Permet à l'utilisateur de voir le contenu de l'onglet Informations pour toutes les sessions.       |
| Voir les journaux partagés      | Permet à l'utilisateur de voir le contenu des Journaux qui s'appliquent à une session.         |
| Importer                | Permet à l'utilisateur d'[Importer](/rdm/mac/commands/file/import/overview/) des sessions (***[Presse-papiers](/rdm/mac/commands/home/clipboard/) – Coller également***). Le menu d'importation (***Fichier – Importer***) et la fonctionnalité d'importation dans le menu contextuel seront désactivés si l'option n'est pas active. |
| Exporter                | Permet à l'utilisateur d'[Exporter](/rdm/mac/commands/file/export/overview/) des sessions (***[Presse-papiers](/rdm/mac/commands/home/clipboard/) – Copier également***). Le menu d'exportation (***Fichier – Exporter***) et la fonctionnalité d'exportation dans le menu contextuel seront désactivés si l'option n'est pas active. |

### Permissions
La section Permissions vous permet d'attribuer des permissions. Les contrôles sont parfois cachés en fonction de la source de données ou de l'état d'autres contrôles.

Consulter [Permissions](/rdm/mac/commands/administration/user-management/permissions/) pour plus d'informations sur les droits qui peuvent être ajoutés à un utilisateur.
![Gestion des Utilisateurs – Permissions](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10386.png)

### Paramètres
![Gestion des Utilisateurs – Paramètres](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10388.png)

Permettre à l'utilisateur d'activer le Mode Hors ligne sur les sources de données. Cela dépend également de la configuration de la source de données pour le permettre. Vous pouvez choisir entre :

| OPTION     | DESCRIPTION                                                                                                                |
|------------|----------------------------------------------------------------------------------------------------------------------------|
| Désactivé   | Aucun cache hors ligne autorisé pour cet utilisateur.                                                                                    |
| Lecture seule  | Un cache en lecture seule est autorisé pour les [Sources de Données Avancées](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/). |
| Lecture/Écriture | Un cache avancé, avec synchronisation des changements, est autorisé pour les [Sources de Données Avancées](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/). |
