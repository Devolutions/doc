---
eleventyComputed:
  title: Type d'utilisateur
---
Lors de la création d'utilisateurs dans {{ fr.RDM }}, quatre types sont disponibles. Les droits de base sont accordés aux utilisateurs créés en fonction de leur type.  
![Gestion des utilisateurs - Type d'utilisateur](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip3423.png) 

<table>
	<tr>
		<th>

TYPE 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Administrateur 
		</td>
		<td>
Accorde tous les droits administratifs à l'utilisateur 
		</td>
	</tr>
	<tr>
		<td>
Utilisateur 
		</td>
		<td>
Accorde tous les droits de base à l'utilisateur (Ajouter, Modifier, Supprimer). 
Pour plus d'informations, veuillez consulter la section [Droits](#droits). 
		</td>
	</tr>
	<tr>
		<td>
Utilisateur accès restreint 
		</td>
		<td>
Sélectionner les droits à accorder à l'utilisateur. 
		</td>
	</tr>
	<tr>
		<td>
Utilisateur lecture seulement 
		</td>
		<td>
Accorde uniquement l'accès en lecture seule à l'utilisateur. 
		</td>
	</tr>
</table>

### Droits 

Lorsque vous définissez un utilisateur comme ***Utilisateur accès restreint***, les droits doivent être accordés manuellement. Ces droits ont une influence immédiate sur les actions que l'utilisateur peut effectuer sur les entrées non sécurisées. Par conséquent, des droits doivent être accordés pour que les utilisateurs puissent effectuer des actions sur les entrées, car les autorisations ne peuvent pas remplacer l'absence de droit.  

Une fois les droits accordés, ils peuvent être limités avec le [Contrôle d'accès basé sur les groupes d'utilisateurs](/fr/rdm/windows/user-groups-based-access-control/) ou les groupes de sécurité (anciens).  

{% snippet icon.badgeWarning %}
La sécurité ancienne et les groupes de sécurité ont été dépréciés et seront complètement supprimés à partir de la version 2023.3 de {{ fr.RDM }}. Voir [Migration des groupes de sécurité (ancien) vers les groupes d'utilisateurs](/fr/kb/remote-desktop-manager/how-to-articles/migration-security-groups-user-groups/).
{% endsnippet %}  

Le droit ***Ajouter*** affiche également l'option ***Ajouter au {{ fr.VLT }}***. Cela doit être activé pour que les utilisateurs puissent ajouter des entrées dans le {{ fr.VLT }} de la source de données.  
![Gestion des utilisateurs - Droits](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip3424.png) 
