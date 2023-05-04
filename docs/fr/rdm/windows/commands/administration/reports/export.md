---
title: Exporter des rapports
---
Les ***Rapports*** d&apos;exportation sont un moyen d&apos;exécuter et d&apos;exporter des rapports via une ligne de commande. Vous pouvez utiliser cette fonctionnalité dans un raccourci ou dans un fichier de commandes et utiliser le planificateur de tâches Windows pour l&apos;exécuter.  

Vous pourrez exporter le rapport de données, le rapport d&apos;inventaire ainsi que la plupart des rapports trouvés dans notre liste ***Générer le rapport*** , à l&apos;exception du groupe d&apos;utilisation et de sécurité des mots de passe.  

{% snippet icon.badgeInfo %} 
Vous devez avoir les droits pour exécuter le rapport dans {{ fr.RDM }} pour utiliser cette fonctionnalité. 
{% endsnippet %}
 
## Paramètres 

Pour les rapports contenant des paramètres, vous devrez commencer par exporter vos paramètres de rapport pour créer le fichier ****.rdr*** que la ligne de commande utilise pour générer les rapports.  

1. Sélectionner votre rapport dans ***Administrations - Rapports*** , puis sélectionner l&apos;option ***Paramètres d&apos;exportation*** dans le bouton ***Plus*** . Il créera un fichier * .rdr contenant tous vos paramètres de rapport. C&apos;est également là que se trouve votre ID du rapport (cela sera utile plus tard).  
![Paramètres d'exportation](/img/fr/rdm/windows/clip10006.png) 
1. Dans votre invite de commandes Windows, entrer la ligne de commande suivante:  

`C:\*** /DataSource:*** /report:***/reportoutput:"***" /reportsettings:"***.rdr" /closeapp` 

<table>
	<tr>
		<th>
PARAMÈTRES 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
C:\ 
		</td>
		<td>
Entrer le chemin utilisé pour démarrer votre application {{ fr.RDM }} (chemin du fichier RemoteDesktopManager.exe) 
		</td>
	</tr>
	<tr>
		<td>
/DataSource 
		</td>
		<td>
Spécifier l&apos;ID de la source de données. 
		</td>
	</tr>
	<tr>
		<td>
/report 
		</td>
		<td>
Spécifier le type de rapport à générer ou l&apos;ID du rapport. 
		</td>
	</tr>
	<tr>
		<td>
/reportoutput 
		</td>
		<td>
Spécifier le chemin d&apos;accès pour enregistrer votre rapport et le nom du rapport nouvellement généré. 
		</td>
	</tr>
	<tr>
		<td>
/reportsettings 
		</td>
		<td>
Spécifier le chemin de votre fichier de paramètres de rapport (.rdr). 
		</td>
	</tr>
	<tr>
		<td>
/closeapp 
		</td>
		<td>
Cette commande fermera {{ fr.RDM }} si l&apos;application a été démarrée à partir d&apos;une ligne de commande. Si {{ fr.RDM }} était déjà ouvert avant de lancer la commande, il ne fermera pas l&apos;application. 
		</td>
	</tr>
</table>

Pour trouver votre ID de source de données et la ligne de commande utilisée pour démarrer {{ fr.RDM }} , aller dans les propriétés d&apos;une de vos sessions depuis votre source de données et sélectionner la section ***Informations de l&apos;entrée*** .  
![Session RDP - Informations de l'entrée](/img/fr/rdm/windows/clip10008.png) 

Voici une liste des types de rapports que vous pouvez trouver dans {{ fr.RDM }} et le nom à entrer dans la ligne de commande pour générer le rapport:  

<table>
	<tr>
		<th>
Type de rapport 
		</th>
		<th>
Nom du rapport à insérer dans la ligne de commande 
		</th>
	</tr>
	<tr>
		<td>
Complexité de mot de passe 
		</td>
		<td>
PasswordComplexity 
		</td>
	</tr>
	<tr>
		<td>
Entrées dupliquées 
		</td>
		<td>
DuplicateEntry 
		</td>
	</tr>
	<tr>
		<td>
Garanties expirées 
		</td>
		<td>
ConnectionExpiredWarranty 
		</td>
	</tr>
	<tr>
		<td>
Groupes VPN 
		</td>
		<td>
VPNEGroup 
		</td>
	</tr>
	<tr>
		<td>
Logiciels expirés 
		</td>
		<td>
ConnectionExpiredSoftware 
		</td>
	</tr>
	<tr>
		<td>
Passeports expirés 
		</td>
		<td>
ConnectionExpiredPassport 
		</td>
	</tr>
	<tr>
		<td>
Rapport des entrées expirées 
		</td>
		<td>
ConnectionExpiredEntry 
		</td>
	</tr>
	<tr>
		<td>
Rapport des états des entrées 
		</td>
		<td>
ConnectionStatus 
		</td>
	</tr>
	<tr>
		<td>
Rapport des informations des entrées 
		</td>
		<td>
ConnectionInformation 
		</td>
	</tr>
	<tr>
		<td>
Rapport des journaux d&apos;activités 
		</td>
		<td>
SharedConnectionLog 
		</td>
	</tr>
</table>

Voici un exemple de ligne de commande pour un rapport d&apos;informations d&apos;entrée: 

```
C:\Program Files (x86)\Devolutions\Remote Desktop Manager\RemoteDesktopManager.exe /DataSource:8a4f2f70-5e8a-4d6c-9c7b-119080a4c879 /report:EntryInformation /reportoutput:C:\dev\devolutions\Rapport\rapportEntry.csv /reportsettings:C:\dev\devolutions\Rapport\SettingsEntryInformation.rdr /closeapp 
```
