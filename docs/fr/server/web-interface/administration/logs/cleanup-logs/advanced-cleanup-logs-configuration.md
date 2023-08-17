---
title: Configuration avancée
---
La configuration avancée permet de sélectionner des paramètres d'archivage individuellement pour chacun des journaux de {{ fr.DVLS }}.  
![Effacer les journaux - Configuration avancée](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp8152.png) 

### Journaux 

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
BACKUP LOGS 
		</td>
		<td>

Table contenant les journaux en lien avec la fonctionnalité du [Gestionnaire de sauvegardes](/fr/server/web-interface/administration/backup/backup-manager/) 
		</td>
	</tr>
	<tr>
		<td>
CONNECTION LOGS 
		</td>
		<td>
Table contenant toutes les opérations effectuées sur les entrées comme par exemple ouverture de session, visualiser un mot de passe, etc. 
		</td>
	</tr>
	<tr>
		<td>
LOGIN ATTEMPT 
		</td>
		<td>
Table contenant toutes les tentatives de connexions à {{ fr.DVLS }} ayant échouées. 
		</td>
	</tr>
	<tr>
		<td>
LOGIN HISTORY 
		</td>
		<td>
Table contenant toutes les connexions à {{ fr.DVLS }}. 
		</td>
	</tr>
	<tr>
		<td>
MESSAGE LOGS 
		</td>
		<td>
Tables contenant les journaux de la source de données {{ fr.DVLS }}. 
		</td>
	</tr>
	<tr>
		<td>
PAM LOGS 
		</td>
		<td>
Tables contenant les journaux de la fonctionnalité PAM de {{ fr.DVLS }}. 
		</td>
	</tr>
</table>

### Général 

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
Utiliser la configuration personnalisée 
		</td>
		<td>
Permets de sélectionner des paramètres d'archivage et/ou suppression du journal sélectionné. 
		</td>
	</tr>
</table>

### Configuration 

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
Utiliser l'archivage. 
		</td>
		<td>
Utiliser l'option d'archivage des journaux. 
		</td>
	</tr>
	<tr>
		<td>
Archiver les journaux plus ancien que 
		</td>
		<td>
Archiver les journaux dont la date de création est plus ancienne que l'élément sélectionné dans la liste. 
		</td>
	</tr>
	<tr>
		<td>
Supprimer les journaux archivés plus anciens que 
		</td>
		<td>
Supprimer les archives dont la date de création est plus ancienne que l'élément sélectionné dans la liste. 
		</td>
	</tr>
	<tr>
		<td>
Sauter l'archivage et supprimer de façon permanente 
		</td>
		<td>
Supprimer directement les journaux sans utiliser la fonctionnalité d'archivage. 
		</td>
	</tr>
	<tr>
		<td>
Supprimer les journaux plus ancien que 
		</td>
		<td>
Supprimer les journaux directement dont la date de création est plus ancienne que l'élément sélectionné dans la liste. 
		</td>
	</tr>
</table>


