---
_schema: default
eleventyComputed:
  title: Gestion des utilisateurs
  description: >-
    La Gestion des utilisateurs permet de créer et de gérer les utilisateurs et leurs privilèges.
    Vous pouvez définir les privilèges par défaut sur le type d'utilisateur dans les Paramètres de Source de Données
    (Paramètres Système).
---
{% youtube 'VXlN3PrDwiU' %}

À travers la ***Gestion des Utilisateurs***, les administrateurs peuvent créer et gérer les utilisateurs et leurs privilèges. Ils peuvent, par exemple, définir les permissions par défaut dans ***Paramètres système*** – ***Permissions par défaut***, sous la gestion de {{ fr.VLT }}. {{ fr.RDM }} offre une gestion avancée des droits des utilisateurs pour restreindre l'accès aux entrées. Notez que la disponibilité de certaines fonctionnalités dépend de la source de données active.

{% snippet, "badgeInfo" %}Cette fonctionnalité nécessite une [Source de Données Avancée](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/).

Un utilisateur peut être créé en utilisant la sécurité par défaut (spécifier le mot de passe) ou [Sécurité Intégrée](/rdm/windows/commands/administration/management/user-management/integrated-security/). Toutes les [Sources de Données Avancées](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/) ne prennent pas en charge l'utilisation de [Sécurité Intégrée](/rdm/windows/commands/administration/management/user-management/integrated-security/).{% endsnippet %}

{% snippet, "badgeNotice" %}Seuls les administrateurs de {{ fr.RDM }} et de la base de données sous-jacente peuvent créer des utilisateurs et attribuer des droits.{% endsnippet %}

## Gérer les Utilisateurs

Pour créer, éditer, supprimer, renommer ou gérer les utilisateurs de toute autre manière, utilisez les boutons dans la barre d'outils située dans ***Utilisateurs*** – ***Utilisateurs***.

![Gestion des Utilisateurs et de la Sécurité - Barre d'outils](https://cdnweb.devolutions.net/docs/RDMW4091_2024_2.png "Gestion des Utilisateurs et de la Sécurité - Barre d'outils")

<table><thead><tr><th><p>OPTION</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p><strong>Ajouter un utilisateur</strong></p></td><td><p>Ouvre la fenêtre <em><strong>Gestion des utilisateurs</strong></em> pour créer un nouvel utilisateur.</p></td></tr><tr><td><p><strong>Dupliquer un utilisateur</strong></p></td><td><p>Copie l'utilisateur sélectionné ainsi que ses informations.</p></td></tr><tr><td><p><strong>Éditer un utilisateur</strong></p></td><td><p>Ouvre la fenêtre <em><strong>Gestion des utilisateurs</strong></em> pour modifier l'utilisateur sélectionné.</p></td></tr><tr><td><p><strong>Attribuer une licence</strong></p></td><td><p>Ouvre la fenêtre <em><strong>Licence</strong></em> pour attribuer des licences aux utilisateurs.</p></td></tr><tr><td><p><strong>Supprimer un utilisateur</strong></p></td><td><p>Supprime l'utilisateur sélectionné.</p></td></tr><tr><td><p><strong>Renommer le login</strong></p></td><td><p>Ouvre une fenêtre pour renommer l'utilisateur sélectionné.</p></td></tr><tr><td><p><strong>Changer votre mot de passe</strong></p></td><td><p>Ouvre une fenêtre demandant un nouveau mot de passe (générateur de mot de passe inclus) pour l'utilisateur sélectionné.</p></td></tr><tr><td><p><strong>Retirer l'A2F</strong></p></td><td><p>Retire l'authentification à deux facteurs de l'utilisateur sélectionné.</p></td></tr><tr><td><p><strong>Corriger le login SQL</strong></p></td><td><p>Vérifie si un login existe, si l'utilisateur existe dans la source de données, et si l'utilisateur est mappé. Si ces conditions ne sont pas remplies, {{ fr.RDM }} résout automatiquement ces problèmes.</p></td></tr><tr><td><p><strong>Rapport d'activité de l'utilisateur</strong> </p></td><td><p>Ouvre la fenêtre <em><strong>Rapport d'activité de l'utilisateur</strong></em>, qui permet aux administrateurs de créer un rapport personnalisé couvrant des dates spécifiques pour l'utilisateur sélectionné.</p></td></tr><tr><td><p><strong>Rapport de permission SQL</strong></p></td><td><p>Ouvre la fenêtre du rapport de permission SQL, qui permet aux administrateurs d'inspecter les permissions SQL de l'utilisateur sélectionné.</p></td></tr><tr><td><p><strong>Actualiser</strong></p></td><td><p>Actualise la fenêtre <em><strong>Gestion des utilisateurs et de la sécurité</strong></em> pour afficher les changements récents.</p></td></tr></tbody></table>

## Paramètres de Gestion des Utilisateurs

### Général

![Gestion des Utilisateurs - Général](https://cdnweb.devolutions.net/docs/RDMW4092_2024_2.png "Gestion des Utilisateurs - Général")

<table><thead><tr><th><p>OPTION</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p><strong>Type d'authentification</strong></p></td><td><p>Sélectionnez le type d'authentification de l'utilisateur entre : </p><ul><li><p>Personnalisé (Devolutions) : créer un utilisateur spécifique à {{ fr.RDM }} sans créer de login SQL.</p></li><li><p>Base de données (SQL Server) : s'authentifier en utilisant le login SQL de votre serveur SQL. </p></li></ul></td></tr><tr><td><p><strong>Nom d'utilisateur</strong></p></td><td><p>Entrez le nom d'utilisateur pour l'utilisateur. Lors de l'utilisation de la <a href="/rdm/windows/commands/administration/management/user-management/integrated-security/">Sécurité Intégrée</a>, l'utilisateur doit être sélectionné à partir de l'annuaire.</p></td></tr><tr><td><p><strong>Mot de passe</strong></p></td><td><p>Entrez le mot de passe de l'utilisateur. Ce champ est désactivé lors de l'utilisation de la <a href="/rdm/windows/commands/administration/management/user-management/integrated-security/">Sécurité Intégrée</a>.</p></td></tr><tr><td><p><strong>Type d'utilisateur</strong></p></td><td><p>Sélectionnez le type d'utilisateur à créer, choisissez entre : </p><ul><li><p><em><strong>Administrateur :</strong></em> Accorder tous les droits administratifs à l'utilisateur. </p></li><li><p><em><strong>Utilisateur en lecture seule :</strong></em> Accorder uniquement l'accès en lecture à l'utilisateur. </p></li><li><p><em><strong>Utilisateur restreint :</strong></em> Sélectionner quels droits accorder à l'utilisateur. </p></li><li><p><em><strong>Utilisateur :</strong></em> Accorder tous les droits de base à l'utilisateur (Ajouter, Éditer, Supprimer).</p></li></ul><p><br />Pour plus d'informations, voir <a href="/rdm/windows/commands/administration/management/user-management/user-types/">Types d'Utilisateurs</a>.</p></td></tr><tr><td><p><strong>Type de licence utilisateur</strong></p></td><td><p>Sélectionnez le type de licence de l'utilisateur entre : </p><ul><li><p><em><strong>Par défaut</strong></em> </p></li><li><p><em><strong>Gestion de connexion</strong></em></p></li><li><p><em><strong>Gestion de mot de passe</strong></em></p></li></ul></td></tr><tr><td><p><strong>Profil d'interface utilisateur</strong></p></td><td><p>Sélectionnez le <a href="/rdm/windows/user-interface/customization/usage-profiles/">profil d'interface utilisateur</a>. Sélectionnez entre : <br /> </p><ul><li><p><em><strong>Par défaut</strong></em></p></li><li><p><em><strong>Professionnel de l'informatique</strong></em></p></li><li><p><em><strong>Utilisateur professionnel</strong></em></p></li></ul><p><br />Notez que le profil d'interface utilisateur ne peut être défini qu'à la création d'un utilisateur. Une fois l'utilisateur créé, vous ne pouvez pas éditer ce paramètre.</p></td></tr><tr><td><p><strong>Prénom</strong></p></td><td><p>Entrez le prénom de l'utilisateur.</p></td></tr><tr><td><p><strong>Nom</strong></p></td><td><p>Entrez le nom de famille de l'utilisateur.</p></td></tr><tr><td><p><strong>Email</strong></p></td><td><p>Insérez l'adresse email de l'utilisateur.</p></td></tr></tbody></table>

### Information

La section ***Information*** permet de stocker des informations concernant les utilisateurs, telles que leur nom, adresse, et plus encore. La section Information est divisée en trois sous-sections : ***Détails, Adresse, Téléphone***.

### Groupes d'Utilisateurs

Attribuez des groupes d'utilisateurs à l'utilisateur en cochant la case ***Est membre***. Lire [Gestion des Groupes d'Utilisateurs](/rdm/windows/commands/administration/management/user-groups-management/) pour plus d'informations sur ce sujet.

![Gestion des Utilisateurs - Groupes d'Utilisateurs](https://cdnweb.devolutions.net/docs/RDMW4093_2024_2.png "Gestion des Utilisateurs - Groupes d'Utilisateurs")

### {{ fr.VLT_MAJ }}

Sélectionnez quels dépôts l'utilisateur peut accéder. Pour plus d'informations, lire le sujet [Vue d'ensemble des {{ fr.VLT }}s](https://docs.devolutions.net/rdm/commands/administration/management/vaults-overview/).

![Gestion des Utilisateurs - Coffres](https://cdnweb.devolutions.net/docs/RDMW4095_2024_2.png "Gestion des Utilisateurs - Coffres")

### Accès à l'application

La section accès à l'application permet aux administrateurs de restreindre l'accès à {{ fr.RDM }} ou au [{{ fr.WBEX }}](/workspace/workspace-browser-extension/).

![Gestion des Utilisateurs - Accès à l'Application](https://cdnweb.devolutions.net/docs/RDMW4096_2024_2.png "Gestion des Utilisateurs - Accès à l'Application")

<table><thead><tr><th><p>OPTION</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p><strong>{{ fr.RDM }}</strong></p></td><td><p>Sélectionnez si l'utilisateur peut accéder à la source de données depuis {{ fr.RDM }}.</p></td></tr><tr><td><p><a href="/workspace/workspace-browser-extension/"><strong>{{ fr.WBEX }}</strong></a></p></td><td><p>Sélectionnez si l'utilisateur peut accéder à la source de données depuis le {{ fr.WBEX }}.</p></td></tr></tbody></table>

### Paramètres

![Gestion des Utilisateurs - Paramètres](https://cdnweb.devolutions.net/docs/RDMW4097_2024_2.png "Gestion des Utilisateurs - Paramètres")

Dans la section ***Paramètres***, les administrateurs peuvent permettre à l'utilisateur d'activer le [Mode Hors Ligne](/rdm/windows/data-sources/offline-mode/) sur les sources de données. Cela dépend également de la configuration de la source de données. Voir les modes disponibles ci-dessous :

<table><thead><tr><th><p>OPTION</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p><strong>Désactivé</strong></p></td><td><p>Aucun cache hors ligne autorisé pour l'utilisateur.</p></td></tr><tr><td><p><strong>Cache seulement</strong></p></td><td><p>Permet de sauvegarder un cache de la source de données mais pas le mode hors ligne.</p></td></tr><tr><td><p><strong>Lecture seule</strong></p></td><td><p>Un cache en lecture seule. L'utilisateur ne pourra pas éditer les données dans la source de données. Ce mode est autorisé pour les <a href="/rdm/windows/data-sources/data-sources-types/advanced-data-sources/">Sources de Données Avancées</a> uniquement.</p></td></tr><tr><td><p><strong>Lecture/Écriture</strong></p></td><td><p>Un cache avancé, avec synchronisation des changements. Ce mode est autorisé pour les <a href="/rdm/windows/data-sources/data-sources-types/advanced-data-sources/">Sources de Données Avancées</a> uniquement.</p></td></tr></tbody></table>