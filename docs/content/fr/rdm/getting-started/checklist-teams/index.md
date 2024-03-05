---
eleventyComputed:
  title: Liste de vérification - Équipes
---
Cette liste de vérification vous aidera lors de l'installation de {{ fr.RDM }} pour des équipes qui souhaitent implanter de la sécurité.

<table>
	<tr>
		<th>

![!!RdmWin4033](https://cdnweb.devolutions.net/docs/fr/rdm/windows/RdmWin4033.png)
		</th>
		<th>
LISTE DE VÉRIFICATION – ÉQUIPES
		</th>
		<th>
DESCRIPTION
		</th>
	</tr>
	<tr>
		<td>

		</td>
		<td>
Étape 1 - Enregistrer votre licence :

* [Version Team](/fr/rdm/windows/installation/client/registration/team-edition/)
* [Version d'essai](/fr/rdm/windows/installation/client/registration/trial-request/)
		</td>
		<td>
L’Édition Team de {{ fr.RDM }} offre une période d’essai de 30 jours. Si vous décidez de ne pas l'enregistrer avant la fin de la période d'essai, vos données ne seront pas altérées ni effacées. Vous aurez de nouveau accès à vos données une fois que la licence sera enregistrée.
		</td>
	</tr>
	<tr>
		<td>

		</td>
		<td>
Étape 2 - Ajouter une [Source de données](/fr/rdm/windows/data-sources/create-new-data-source/) (type Équipe).
		</td>
		<td>
Attention : Lorsque vous choisissez une source de données qui n'est pas déployée sur site, il est important de penser à la protection des données au repos et en transit. Nous vous recommandons fortement de chiffrer vos données stockées dans des fichiers à l’aide d’une clé maîtresse ou d'utiliser un [Fournisseur de sécurité](/fr/rdm/windows/commands/administration/settings/security-providers/) pour les [Sources de données avancées](/fr/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). Ainsi, vous serez la seule personne qui peut voir les données.

Lors du premier démarrage, {{ fr.RDM }} utilise une source de données SQLite. Les différentes sources de données sont expliquées dans la section [Sources de données](/fr/rdm/windows/data-sources/). Afin de sélectionner une source de données adaptée à vos besoins, veuillez consulter la section [Choisir le type de source de données - Équipes](/fr/rdm/windows/getting-started/checklist-teams/select-data-source-type/).
		</td>
	</tr>
	<tr>
		<td>

		</td>
		<td>
Étape 3 - Choisir votre [Fournisseur de sécurité](/fr/rdm/windows/commands/administration/settings/security-providers/).
		</td>
		<td>
Sélectionner un [Fournisseur de sécurité](/fr/rdm/windows/commands/administration/settings/security-providers/) avant d'importer ou de créer des données dans votre base de données. Ainsi, personne ne peut lire les données de configuration de vos entrées, même si les gens ont accès directement à votre base de données.
		</td>
	</tr>
	<tr>
		<td>

		</td>
		<td>
Étape 4 - Créer votre structure de dossiers.
		</td>
		<td>
Une solide structure de sécurité se base sur la structure des dossiers de premier niveau. Votre structure de dossiers doit refléter la structure de votre entreprise. Par exemple, vous pouvez créer un dossier pour votre équipe Production, un dossier pour votre équipe Développement et un dernier pour votre équipe Test.

{% youtube '5GLjGwySjxQ' %}
		</td>
	</tr>
	<tr>
		<td>

		</td>
		<td>
Étape 5 - Créer vos [Paramètres par défaut](/fr/rdm/windows/commands/file/templates/default-settings/).
		</td>
		<td>
Dans ***Fichier – Options***, vous pouvez définir des options de {{ fr.RDM }} et créer des modèles de paramètres par défaut. Chaque type d'entrée est pris en charge et peut se définir selon vos critères. Après avoir configuré les options, utilisez [l’{{ fr.CI }}](/fr/rdm/windows/installation/client/custom-installer-service/) pour partager une version préconfigurée avec votre équipe.
		</td>
	</tr>
	<tr>
		<td>

		</td>
		<td>
Étape 6 - Créer des [Utilisateurs](/fr/rdm/windows/commands/administration/management/user-management/).
		</td>
		<td>
{{ fr.RDM }} prend en charge une gestion avancée des utilisateurs. Les comptes utilisateurs doivent être créés manuellement par un administrateur de la base de données.
		</td>
	</tr>
	<tr>
		<td>

		</td>
		<td>
Étape 7 - Créer des [Groupes d'utilisateurs](/fr/rdm/windows/commands/administration/management/user-groups-management/).
		</td>
		<td>
Créer des [Groupes d'utilisateurs](/fr/rdm/windows/commands/administration/management/user-groups-management/) pour gérer votre système de sécurité. Par la suite, vous pouvez affecter des utilisateurs à des groupes d'utilisateurs, facilitant l'attribution des permissions à un ensemble d'utilisateurs plutôt que de le faire individuellement.
		</td>
	</tr>
	<tr>
		<td>

		</td>
		<td>
Étape 8 - Créer des [Entrées](/fr/rdm/windows/commands/edit/entries/creating-new-entry/).
		</td>
		<td>
Une entrée contient toutes les informations de sessions (p.ex. RDP, SSH), d’identifiants, de sites Web, de RPV, de synchronisateurs ou de documents.
		</td>
	</tr>
	<tr>
		<td>

		</td>
		<td>
Étape 9 - Attribuer des [Permissions](/fr/rdm/windows/user-groups-based-access-control/permissions/).
		</td>
		<td>
Une fois que les utilisateurs sont créés, il est possible de leur attribuer des [Permissions](/fr/rdm/windows/user-groups-based-access-control/permissions/) grâce à un système de contrôle d’accès basé sur les groupes d'utilisateurs. Les permissions configurées dans un dossier seront alors attitrées à chaque entrée située dans ce dossier.
		</td>
	</tr>
	<tr>
		<td>

		</td>
		<td>
Étape 10 - [Importer vos données](/fr/rdm/windows/commands/file/import/).
		</td>
		<td>
L’étape finale consiste à importer toutes vos données dans {{ fr.RDM }}. Vous pouvez importer vos sessions, vos identifiants et vos contacts en quelques étapes.
		</td>
	</tr>
</table>
