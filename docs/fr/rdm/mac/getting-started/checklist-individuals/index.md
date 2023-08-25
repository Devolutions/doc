---
title: Liste de vérification - Utilisation individuelle
---
Pour vous aider à installer et configurer {{ fr.RDM }}, nous avons créé une liste de vérification. Elle s’adresse surtout aux individus. 

<table>
	<tr>
		<th>

![!!RDMMac4022.png](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/RdmMac4022.png) 
		</th>
		<th>
LISTE DE VÉRIFICATION - INDIVIDUELLE (ÉDITION TEAM) 
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

* [Version Team](/fr/rdm/mac/installation/client/registration/team-edition/) 
* [Version d'essai](/fr/rdm/mac/installation/client/registration/trial-request/) 
		</td>
		<td>
L’édition Team de {{ fr.RDM }} offre une période d’essai de 30 jours. Si vous décidez de ne pas l'enregistrer avant la fin de la période d'essai, vos données ne seront pas altérées ni effacées. Vous aurez de nouveau accès à vos données une fois que la licence sera enregistrée. 
		</td>
	</tr>
	<tr>
		<td>

		</td>
		<td>
Étape 2 - Choisir le type de [Sources de données](/fr/rdm/mac/data-sources/) et configurer votre {{ fr.DA }} et une clé maîtresse. 
		</td>
		<td>
Attention : Lorsque vous choisissez une source de données qui n'est pas déployée sur site, il est important de penser à la protection des données au repos et en transit. Nous vous recommandons fortement de chiffrer vos données stockées dans des fichiers à l’aide d’une clé maîtresse ou d'utiliser un [Fournisseur de sécurité](/fr/rdm/mac/commands/administration/security-provider/) pour les [Sources de données avancées](/fr/rdm/mac/data-sources/data-sources-types/advanced-data-sources/). Ainsi, vous serez la seule personne qui peut voir les données.  

Lors du premier démarrage, {{ fr.RDM }} utilise une source de données SQLite. Les différentes sources de données sont expliquées dans la section [Sources de données](/fr/rdm/mac/data-sources/). Afin de sélectionner une source de données adaptée à vos besoins, veuillez consulter la section [Choisir le type de source de données (individuelle)](/fr/rdm/mac/getting-started/checklist-individuals/select-data-source-type-individuals/). 
		</td>
	</tr>
	<tr>
		<td>

		</td>
		<td>
Étape 3 - Configurer Devolutions {{ fr.OBACK }}. 
		</td>
		<td>
Devolutions [{{ fr.OBACK }}](/fr/cloud/rdm-online-services/online-backup/) vous permet de sauvegarder sécuritairement vos informations pour certaines sources de données. La copie de sauvegarde s’effectue automatiquement 30 secondes après une modification du contenu dans la source de données. En effet, il est recommandé de toujours faire une copie de sauvegarde de votre source de données. 
		</td>
	</tr>
	<tr>
		<td>

		</td>
		<td>
Étape 4 - Créer vos [Paramètres par défaut](/fr/rdm/mac/commands/file/templates/). 
		</td>
		<td>
Dans ***Fichier – Préférences***, vous pourrez créer, modifier ou réinitialiser vos paramètres par défaut pour vos modèles. Chaque type d'entrée est pris en charge et peut être défini selon vos critères. 
		</td>
	</tr>
	<tr>
		<td>

		</td>
		<td>
Étape 5 - Créer votre structure de dossiers. 
		</td>
		<td>
Les dossiers de premier niveau sont la base d'une structure de sécurité solide. La structure de votre dossier (entrées de dossier) doit représenter la structure de votre entreprise. 
		</td>
	</tr>
	<tr>
		<td>

		</td>
		<td>
Étape 6 - [Importer vos données](/fr/rdm/mac/commands/file/import/sessions/). 
		</td>
		<td>
L’étape finale consiste à importer toutes vos données dans {{ fr.RDM }}. Vous pouvez importer vos sessions, vos identifiants et vos contacts en quelques étapes. 
		</td>
	</tr>
</table>
