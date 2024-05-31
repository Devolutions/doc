---
eleventyComputed:
  title: Gestion des utilisateurs
  description: La Gestion des Utilisateurs permet de créer et gérer les utilisateurs et leurs privilèges. Vous pouvez définir les privilèges par défaut sur le type d'utilisateur dans les Paramètres de Source de Données (Paramètres Système).
---
{% youtube 'VXlN3PrDwiU' %}

La ***Gestion des Utilisateurs*** permet de créer et gérer les utilisateurs et leurs privilèges. Définir les privilèges par défaut sur le type d'utilisateur dans les ***Paramètres de Source de Données (Paramètres Système)***. {{ fr.RDM }} offre une gestion avancée des droits des utilisateurs qui permet de restreindre l'accès aux entrées. Veuillez noter que la disponibilité de certaines fonctionnalités dépend de la source de données active.

{% snippet, "badgeInfo" %}
Cette fonctionnalité nécessite une [Source de Données Avancée](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/).
{% endsnippet %}

{% snippet, "badgeInfo" %}
Un utilisateur peut être créé en utilisant la sécurité par défaut (spécifier le mot de passe) ou [Sécurité Intégrée](/rdm/windows/commands/administration/management/user-management/integrated-security/). Toutes les [Sources de Données Avancées](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/) ne prennent pas en charge l'utilisation de [Sécurité Intégrée](/rdm/windows/commands/administration/management/user-management/integrated-security/).
{% endsnippet %}

{% snippet, "badgeNotice" %}
Pour créer des utilisateurs et attribuer des droits, vous devez être administrateur non seulement de {{ fr.RDM }}, mais aussi de la base de données sous-jacente.
{% endsnippet %}

## Gérer les Utilisateurs

Pour créer, éditer, supprimer, renommer ou gérer globalement les utilisateurs, utiliser simplement les boutons dans la barre d'outils.
![Gestion des Utilisateurs et de la Sécurité - Barre d'outils](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10726.png)

## Paramètres de Gestion des Utilisateurs

### Général

![Gestion des Utilisateurs - Général](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11296.png)

| OPTION                            | DESCRIPTION  |
|-----------------------------------|------------------------------------------------------------------------------------------- |
| Type d'authentification               | <ul><li>Sélectionner le type d'authentification de l'utilisateur : Personnalisé (Devolutions) : créer un utilisateur spécifique à {{ fr.RDM }} sans créer de connexion SQL.</li><li>Base de données (SQL Server) : s'authentifier en utilisant la connexion SQL de votre serveur SQL. </li></ul> |
| Nom d'utilisateur                          | Entrer le nom d'utilisateur pour l'utilisateur. Lors de l'utilisation de [Sécurité Intégrée](/rdm/windows/commands/administration/management/user-management/integrated-security/) l'utilisateur doit être sélectionné depuis l'annuaire.        |           |      Sécurité intégrée (Active Directory) | Spécifier d'utiliser Active Directory pour s'authentifier à la source de données. S'applique uniquement à SQL Server et {{ fr.DVLS }}, selon leur configuration. Pour plus d'informations, consulter [Sécurité Intégrée](/rdm/windows/commands/administration/management/user-management/integrated-security/).              |                 |
| Mot de passe                          | Entrer le mot de passe de l'utilisateur. Ce champ est désactivé lors de l'utilisation de [Sécurité Intégrée](/rdm/windows/commands/administration/management/user-management/integrated-security/).        |        |
| Type d'utilisateur                         | Sélectionner le type d'utilisateur à créer, choisir entre : <ul><li>***Administrateur :*** Accorder tous les droits administratifs à l'utilisateur. </li><li> ***Utilisateur en lecture seule :*** Accorder uniquement l'accès en lecture à l'utilisateur. </li> <li>***Utilisateur restreint :*** Sélectionner quels droits accorder à l'utilisateur. </li> <li>***Utilisateur :*** Accorder tous les droits de base à l'utilisateur (Ajouter, Éditer, Supprimer).</li> </ul> <br> Pour plus d'informations, consulter [Types d'Utilisateurs](/rdm/windows/commands/administration/management/user-management/user-types/).                       |
| Type de licence utilisateur                 | Sélectionner le type de licence de l'utilisateur. Choisir entre : <ul><li> ***Par défaut*** </li> <li>***Gestion de Connexion***</li> <li> ***Gestion de Mot de Passe***                    |       |       |
| Profil d'interface utilisateur                     | Sélectionner le [profil d'interface utilisateur](/rdm/windows/user-interface/customization/usage-profiles/). Choisir entre : <br> <ul><li>***Par défaut***</li> <li>***Professionnel de l'informatique***</li><li>***Utilisateur d'affaires***</li></ul> <br> Noter que le profil d'interface utilisateur ne peut être défini qu'à la création d'un utilisateur. Une fois l'utilisateur créé, vous ne pouvez pas éditer ce paramètre.                              |
| Prénom                        | Entrer le prénom de l'utilisateur.       |
| Nom                         | Entrer le nom de famille de l'utilisateur. |
| Courriel                             | Insérer l'adresse courriel de l'utilisateur.         |
### Information

La section ***Information*** permet de stocker des informations concernant les utilisateurs, telles que leur nom, adresse, et plus. La section Information est divisée en trois sous-sections : ***Détails, Adresse, Téléphone***.
![Gestion des Utilisateurs - Information - Détails](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10728.png)

### Groupes d'Utilisateurs

Sélectionner les groupes d'utilisateurs à assigner à l'utilisateur.
![Gestion des Utilisateurs - Groupes d'Utilisateurs](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11297.png)

| OPTION                            | DESCRIPTION
|-----------------------------------|-----------------------------------------------------------------------------------------------|
| Groupes d'Utilisateurs  | Cocher la case ***Est Membre*** pour assigner des groupes d'utilisateurs à l'utilisateur. Consulter [Gestion des Groupes d'Utilisateurs](/rdm/windows/commands/administration/management/user-groups-management/) pour plus d'informations.                                                                                      |
| {{ fr.VLT }}s | Sélectionner quels dépôts l'utilisateur a accès. Pour plus d'informations, consulter {{ fr.VLT }}s.  ![Gestion des Utilisateurs - {{ fr.VLT }}s](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip3624.png)                                                                      |
| Accès Application | La section accès application permet de restreindre l'accès à {{ fr.RDM }} ou au [{{ fr.WBEX }}](/workspace/workspace-browser-extension/).   ![Gestion des Utilisateurs - Accès Application](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip3625.png)                      |


| OPTION                            | DESCRIPTION
|-----------------------------------|-----------------------------------------------------------------------------------------------|
| {{ fr.RDM }} | Sélectionner si l'utilisateur peut accéder à la source de données depuis {{ fr.RDM }}.                                                   |
| [{{ fr.WBEX }}](/workspace/workspace-browser-extension/) | Sélectionner si l'utilisateur peut accéder à la source de données depuis le {{ fr.WBEX }}. |

### Paramètres

![Gestion des Utilisateurs - Paramètres](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11304.png)

Permettre à l'utilisateur d'activer le [Mode Hors Ligne](/rdm/windows/data-sources/offline-mode/) sur les sources de données. Cela dépend également de la configuration de la source de données pour le permettre. Voir les modes disponibles ci-dessous :

| OPTION                            | DESCRIPTION
|-----------------------------------|------------------------------------------------------------------------------------------- |
| Désactivé    | Aucun cache hors ligne autorisé pour l'utilisateur.                                                                           |
| Cache seulement  | Permet de sauvegarder un cache de la source de données mais pas le mode hors ligne.                                                                                                                            |
| Lecture seule   | Un cache en lecture seule. L'utilisateur ne pourra pas éditer les données dans la source de données. Ce mode est autorisé pour les [Sources de Données Avancées](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/) uniquement.                                                                                 |
| Lecture/Écriture  | Un cache avancé, avec synchronisation des changements. Ce mode est autorisé pour les [Sources de Données Avancées](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/) uniquement.                                                                                                    |
