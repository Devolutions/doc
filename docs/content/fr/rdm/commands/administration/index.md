---
eleventyComputed:
  title: Administration
---
Le ruban ***Administration*** n'est disponible que pour l'administrateur de la source de données, car il est principalement utilisé pour gérer les paramètres et les utilisateurs d'une source de données. Si les options sont grisées, contactez votre administrateur.

De plus, la plupart des fonctionnalités contenues dans le menu Administration nécessitent une [Sources de données avancées](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/).
![Administration](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip10692.png)

### Gestion

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
Utilisateurs
		</td>
		<td>
Ouvrir le panneau dans la gestion des [Utilisateurs](/fr/rdm/windows/commands/administration/management/user-management/) et de la sécurité.
		</td>
	</tr>
	<tr>
		<td>
{{ fr.VLT_MAJ }}s
		</td>
		<td>
Ouvrir le panneau ***{{ fr.VLT_MAJ }}s*** dans la gestion des usagers et de la sécurité.
		</td>
	</tr>
	<tr>
		<td>
Groupes d'utilisateurs
		</td>
		<td>
Ouvrir le panneau [Groupes d'utilisateurs](/fr/rdm/windows/commands/administration/management/user-groups-management/) dans la gestion des usagers et de la sécurité.
		</td>
	</tr>
	<tr>
		<td>
Licences
		</td>
		<td>
Ouvrir le panneau ***Licences*** dans la gestion des usagers et de la sécurité.
		</td>
	</tr>
</table>

### Rapports

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
Rapports
		</td>
		<td>
Ouvre la section [Rapports](/fr/rdm/windows/commands/administration/reports/) pour sélectionner le type de rapport qui correspond le mieux à vos besoins actuels.
		</td>
	</tr>
	<tr>
		<td>
Journaux d'administration
		</td>
		<td>
Ouvre les ***Journaux d'administration***.
		</td>
	</tr>
	<tr>
		<td>
Entrées supprimées
		</td>
		<td>
Ouvre un journal de toutes les [Entrées supprimées](/fr/rdm/windows/commands/administration/reports/deleted-entries/) (depuis le dernier nettoyage).
		</td>
	</tr>
</table>

### Paramètres

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
Paramètres du {{ fr.VLT }}
		</td>
		<td>
Le dossier du {{ fr.VLT }} est celui situé en haut du ***{{ fr.NPANE }}*** (dans l'arborescence). C'est celui dont proviennent toutes les entrées et les dossiers. Par défaut, les dossiers de niveau inférieur héritent des paramètres et de la sécurité du dossier parent jusqu'à atteindre la racine du {{ fr.VLT }}. Par conséquent, l'utilisation des autorisations sur le dossier racine permet de sécuriser toutes les entrées en dessous du niveau racine. Reportez-vous à [Permissions par défaut du {{ fr.VLT }}](/fr/rdm/windows/commands/administration/settings/vault-settings/default-security-entries/) pour plus d'informations.
		</td>
	</tr>
	<tr>
		<td>
Paramètres du système
		</td>
		<td>
Il existe de nombreuses fonctionnalités ici, toutes destinées à vous aider à personnaliser votre source de données et vos besoins de sécurité. N'oubliez pas que ces paramètres s'appliquent à tous les utilisateurs qui ont accès à la source de données.
		</td>
	</tr>
	<tr>
		<td>
Permissions du système
		</td>
		<td>
Modifier les [Permissions du système](/fr/rdm/windows/commands/administration/settings/system-permissions/).
		</td>
	</tr>
	<tr>
		<td>
Fournisseur de sécurité
		</td>
		<td>
Configurer un [Fournisseur de sécurité](/fr/rdm/windows/commands/administration/settings/security-providers/) pour une couche de sécurité supplémentaire.
		</td>
	</tr>
</table>

### Nettoyer

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
Nettoyer l'historique d'entrées supprimées
		</td>
		<td>
Effectuer un nettoyage partiel ou complet avec [Nettoyer l'historique d'entrées supprimées](/fr/rdm/windows/commands/administration/clean-up/deleted-history/).
		</td>
	</tr>
	<tr>
		<td>
Nettoyer l'historique d'entrées
		</td>
		<td>
Effectuer un nettoyage partiel ou complet des entrées avec [Nettoyer l'historique d'entrées](/fr/rdm/windows/commands/administration/clean-up/entries-history/).
		</td>
	</tr>
	<tr>
		<td>
Nettoyer les journaux d'activité
		</td>
		<td>
Effectuer un nettoyage partiel ou complet avec [Nettoyer les journaux d'activité](/fr/rdm/windows/commands/administration/clean-up/logs/). Si vous le souhaitez, vous avez également la possibilité de nettoyer les ***Journaux d'administration***.
		</td>
	</tr>
	<tr>
		<td>
Optimiser la source de données
		</td>
		<td>
La fonctionnalité [Optimiser la source de données](/fr/rdm/windows/commands/administration/clean-up/pack-data-source-optimize/) analyse toutes les entrées, les comprime et les enregistre, économisant ainsi de l'espace dans votre source de données.
		</td>
	</tr>
</table>
