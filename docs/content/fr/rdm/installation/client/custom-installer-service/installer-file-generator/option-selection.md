---
eleventyComputed:
  title: Sélection des options
---
Lors de la génération du fichier d'installation, vous devez décider quoi inclure dans la configuration. Ce processus répliquera la configuration de l'instance de {{ fr.RDM }} présentement utilisée et générera un fichier d'installation (.rdi). Une fois qu'il a été généré, le fichier d'installation peut être utilisé autant de fois que nécessaire pour créer des d'installations personnalisées. Pour des raisons de sécurité, certains paramètres pouvant contenir des identifiants, tels que les ***Modèles enregistrés***, sont désactivés par défaut. Activez-les basé sur votre niveau de risques.

{% snippet, "shieldWarning" %}
La même boîte de dialogue est utilisée pour le {{ fr.CIS }} et pour l'exportation du fichier de configuration de {{ fr.RDM }}. Certaines options NE doivent PAS être utilisées pour le {{ fr.CIS }} pour prévenir le partage d'identifiants qui doivent rester confidentiels. Veuillez lire la documentation attentivement.
{% endsnippet %}

{% snippet, "badgeInfo" %}
{{ fr.RDM }} peut installer automatiquement des modules complémentaires requis lorsqu'il détecte qu'ils sont nécessaires (configuré dans ***Fichier – Options – Chemins***). Si vous devez personnaliser le chemin d'installation de l'application d'un module complémentaire, vous devez d'abord effectuer la modification, puis créer le paquet d'installation. Ce paramètre sera répliqué dans le fichier d'installation (*.rdi).
{% endsnippet %}

## Options

Vous pouvez ouvrir le ***Générateur de fichier d'installateur*** à partir de ***Fichier – {{ fr.DA }} – Générateur de fichier de configuration***. Cette fenêtre est aussi accessible lors de la création d'un paquet d'installation dans ***Fichier – {{ fr.DA }} – {{ fr.CIM }}***.
![Générateur de fichier d'installateur](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip11249.png)

### Divers

{% snippet, "shieldWarning" %}
Ne redistribuez pas les ***Identifiants du {{ fr.DA }}***. Cela les partagerait avec tous les utilisateurs ayant accès au compte en ligne utilisé pour créer le paquet d'installation.
{% endsnippet %}

{% snippet, "shieldWarning" %}
Tous les ***modèles locaux*** seront inclus. Si certains contiennent des informations d'identification, cela peut constituer un risque pour la sécurité. Assurez-vous de ne partager que ce qui est nécessaire.
{% endsnippet %}

![Options diverses](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip11260.png)

<table>
	<tr>
		<th>

OPTION
		</th>
		<th>
DESCRIPTION
		</th>
	</tr>
	<tr>
		<td>
Paramètres du proxy
		</td>
		<td>
Comprend vos paramètres de proxy Internet. Cette option est activée par défaut.
		</td>
	</tr>
	<tr>
		<td>
Chemins d'installation enregistrés
		</td>
		<td>
Préserve vos chemins d'installation configurés pour les applications tierces externes. Utilisez cette option uniquement lorsque toutes les machines de l'utilisateur utilisent les mêmes chemins. Cette option est activée par défaut.
		</td>
	</tr>
	<tr>
		<td>
Modèles enregistrés
		</td>
		<td>
Inclut vos modèles locaux dans le programme d'installation personnalisé. Les modèles de base de données sont stockés dans la source de données et peuvent être une meilleure option si vous devez les partager.
		</td>
	</tr>
	<tr>
		<td>
Identifiants du {{ fr.DA }}
		</td>
		<td>
Inclut les identifiants de votre {{ fr.DA }} utilisés pour créer le programme d'installation personnalisé. Veuillez consulter l'avertissement de sécurité ci-dessus.
		</td>
	</tr>
	<tr>
		<td>
Inclure les identifiants de la source de données
		</td>
		<td>
Inclut les identifiants pour toutes les sources de données sélectionnées ci-dessous. Veuillez consulter l'avertissement de sécurité ci-dessus.
		</td>
	</tr>
	<tr>
		<td>
Effacer les informations de verrouillage des applications
		</td>
		<td>
Effacera les informations de ***Fichier – Options – Sécurité – Verrouiller – Verrouiller l'application*** (locale).
		</td>
	</tr>
	<tr>
		<td>
Forcer à toujours récupérer le nouvel enregistrement
		</td>
		<td>
Permettra à l'administrateur de forcer les utilisateurs à utiliser ce nouveau fichier de configuration.
		</td>
	</tr>
</table>

{% snippet, "badgeInfo" %}
Depuis la version 2022.3 de {{ fr.RDM }}, les informations d'enregistrement de la licence sont stockées dans la source de données, ce qui signifie qu'elles ne peuvent plus être incluses dans un programme d'installation personnalisé. Suivez ce [guide étape par étape](/fr/rdm/windows/installation/client/registration/team-edition/) pour ajouter votre numéro de licence et l'attribuer à vos utilisateurs à partir d'une [source de données avancée](/fr/rdm/windows/data-sources/data-sources-types/advanced-data-sources/).
{% endsnippet %}

### Sources de données

Sélectionner les sources de données qui doivent être incluses dans la configuration. Dans la colonne ***Description***, vous verrez des détails sur chaque source de données.

{% snippet, "shieldWarning" %}
Vous devez uniquement partager les sources de données qui utilisent soit la Sécurité intégrée, soit une variable d'environnement pour le nom d'utilisateur. Les mots de passe pour accéder à une source de données ne doivent jamais être partagés.
{% endsnippet %}


