---
title: Mode réservation
---
Le ***Mode réservation*** verrouille une entrée pendant qu&apos;elle est utilisée ou modifiée. Il empêche les utilisateurs d&apos;utiliser ou de modifier une entrée en même temps.  

Le ***Mode réservation*** peut être activé pour des entrées de type ***Sessions*** , ***Documents*** , ***Identifiants*** et d&apos; ***Informations*** .  

Vous pouvez définir le ***Mode réservation*** au niveau du coffre, du dossier ou de l&apos;entrée. 

{% snippet icon.badgeInfo %} 
Cette fonctionnalité est seulement disponible avec une source de données telles que Microsoft SQL Server ou {{ fr.RDMS }} . 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Les administrateurs peuvent définir la ***Restitution automatique après*** un certain nombre de minutes dans ***Administration - Paramètres du système - Coffre*** . 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Les administrateurs peuvent forcer la restitution des entrées qui sont réservées par d&apos;autres utilisateurs. Cliquer avec le bouton droit sur l&apos;entrée à restituer, cliquer sur ***Restitution*** . 
{% endsnippet %}
 
### Les paramètres de sécurité 

Pour accéder au ***Mode réservation*** , modifier une entrée qui prend en charge la réservation et accéder à la section ***Paramètres de sécurité*** .  
![!!RdmWin4052.png](/img/fr/rdm/windows/RdmWin4052.png) 

### Réservation 

Le Mode réservation active ou désactive le système de réservation. Il décide également du fonctionnement du mode de réservation.  
![!!RdmWin4053.png](/img/fr/rdm/windows/RdmWin4053.png) 

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
Racine 
		</td>
		<td>
Hérite du paramètre de mode de réservation du dossier racine. 
		</td>
	</tr>
	<tr>
		<td>
Non disponible 
		</td>
		<td>
Désactive le système de réservation. 
		</td>
	</tr>
	<tr>
		<td>
Automatique 
		</td>
		<td>
Réserve automatiquement une entrée lorsque l&apos;entrée est ouverte et restitue automatiquement l&apos;entrée lorsque l&apos;entrée est fermée. L&apos;utilisateur peut modifier les propriétés sans réserver l&apos;entrée. 
		</td>
	</tr>
	<tr>
		<td>
Manuel 
		</td>
		<td>
Les utilisateurs doivent réserver l&apos;entrée manuellement avant d&apos;ouvrir ou de modifier l&apos;entrée. Aucune action ne peut être effectuée sans réservation de l&apos;entrée. 
		</td>
	</tr>
	<tr>
		<td>
Hérité 
		</td>
		<td>
Hérite du mode de réservation du dossier parent. 
		</td>
	</tr>
	<tr>
		<td>
Optionnel 
		</td>
		<td>
Offre la possibilité de réserver une entrée manuellement ou d&apos;utiliser (ouvrir et modifier) ​​l&apos;entrée sans la réserver. 
		</td>
	</tr>
</table>

### Invite de réservation 

L&apos;invite de réservation définit si un utilisateur doit saisir un commentaire lorsqu&apos;il réserve l&apos;entrée. Les administrateurs peuvent surveiller les commentaires via les journaux disponibles sur l&apos;entrée ou les journaux d&apos;activité.  
![!!RdmWin4054.png](/img/fr/rdm/windows/RdmWin4054.png) 

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
Racine 
		</td>
		<td>
Utilise le paramètre d&apos;invitation de réservation à partir du dossier racine. 
		</td>
	</tr>
	<tr>
		<td>
Oui 
		</td>
		<td>
Invite l&apos;utilisateur à commenter lorsqu&apos;il réserve une entrée. 
		</td>
	</tr>
	<tr>
		<td>
Non 
		</td>
		<td>
Supprime l&apos;invite de réservation. 
		</td>
	</tr>
	<tr>
		<td>
Hérité 
		</td>
		<td>
Hérite le paramètre du dossier parent. 
		</td>
	</tr>
</table>


