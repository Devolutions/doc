---
eleventyComputed:
  title: Sécurité
---
![!!clip10724](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip10724.png)

<table>
	<tr>
		<th>

SÉCURITÉ
		</th>
		<th>
DESCRIPTION
		</th>
	</tr>
	<tr>
		<td>
Créer un {{ fr.VLT }} avec un accès restreint par défaut
		</td>
		<td>
Sécuriser automatiquement les paramètres du {{ fr.VLT }} lors de la création d'un {{ fr.VLT }}. Par conséquent, les paramètres d'autorisations sont définis sur ***Jamais***.
		</td>
	</tr>
	<tr>
		<td>
Forcer la configuration de 2-factor sur la source de données
		</td>
		<td>
Obliger les utilisateurs à appliquer une configuration à 2 facteurs sur la source de données. Non illustré avec {{ fr.DVLS }} en tant que 2FA définis ailleurs.
		</td>
	</tr>
	<tr>
		<td>
Résoudre les identifiants dans l'aperçu
		</td>
		<td>
Affiche le nom d'utilisateur et le mot de passe extraits d'une entrée d'identifiant dans la vue d'ensemble des entrées du tableau de bord. Décocher cette option si elle prend trop de temps à résoudre.
		</td>
	</tr>
	<tr>
		<td>
Utiliser l'ancienne sécurité
		</td>
		<td>
Utiliser l'ancien système de gestion des privilèges : les groupes de sécurité (obsolète).

L'ancienne sécurité et les groupes de sécurité ont été dépréciés et seront complètement supprimés à partir de la version 2023.3 de {{ fr.RDM }}. Pour gérer les autorisations de vos utilisateurs, nous vous recommandons de passer des groupes de sécurité aux [Permissions](/fr/rdm/windows/user-groups-based-access-control/permissions/) en effectuant une [Migration des groupes de sécurité (ancien) vers les groupes d'utilisateurs](/fr/kb/remote-desktop-manager/how-to-articles/migration-security-groups-user-groups/). Une fois cette migration effectuée, [désactivez l'ancienne sécurité dans {{ fr.RDM }}](/fr/kb/remote-desktop-manager/how-to-articles/migrate-legacy-security-permissions/).
		</td>
	</tr>
</table>

<table>
	<tr>
		<th>

PÉRIODE D'UTILISATION
		</th>
		<th>
DESCRIPTION
		</th>
	</tr>
	<tr>
		<td>
Temps
		</td>
		<td>
Sélectionner les heures auxquelles la source de données est limitée. Choisir entre :

* ***À tout moment*** : La session peut être utilisée à toute heure.
* ***Personnalisé*** : Sélectionner manuellement la période pendant laquelle la session est disponible.
		</td>
	</tr>
	<tr>
		<td>
Jours
		</td>
		<td>
Sélectionner les jours pendant lesquels la source de données est disponible. Choisir entre :

* ***N'importe quel jour*** : La session peut être utilisée n'importe quel jour de la semaine ou le week-end.
* ***Jours de semaine*** : La session peut être utilisée que les jours de semaine.
* ***Jours de fin de semaine*** : La session peut être utilisée que les week-ends.
* ***Personnalisé*** : Sélectionner manuellement chaque jour pour lequel la session est disponible.
		</td>
	</tr>
	<tr>
		<td>
Zone de temps
		</td>
		<td>
Sélectionner le fuseau horaire dans lequel vous vous trouvez actuellement.
		</td>
	</tr>
</table>
