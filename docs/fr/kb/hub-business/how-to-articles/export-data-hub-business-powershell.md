---
eleventyComputed:
  title: Exporter des données de {{ fr.PHUB }} Business avec PowerShell
---
Dans {{ fr.PHUB }} Business, vous pouvez exporter vos données au format Json ou Csv à l'aide d'un script [PowerShell](https://learn.microsoft.com/fr-ca/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.2) . Cette fonctionnalité est accessible via l'onglet ***Outils*** , sous la section ***Exporter*** .  
![Exporter avec Powershell.png](https://webdevolutions.azureedge.net/docs/fr/kb/KB2076.png)
## Étapes 
Avant d'exporter vos données, si ce n'est pas déjà fait, [créez un utilisateur d'application](/hub/web-interface/hub-overview/administration/management/application-users/manage-application-users/) et assignez-lui le rôle de ***Gestionnaire*** du coffre souhaité. 
{% snippet icon.badgeCaution %} 
Conservez la ***Clé secrète d'application*** et la ***Clé de l'application*** de votre utilisateur d'application nouvellement créé ou récupérez-les si votre utilisateur a déjà été configuré, car elles seront requises aux étapes suivantes. 
{% endsnippet %}

Allez à la section qui correspond à vos besoins :  

* <a href="#automatique">Remplissage automatique des informations</a>  
* <a href="#manuel">Remplissage manuel des informations</a>  

### Remplissage automatique des informations 
<a name="automatique"></a>
1. Dans ***Outils – Exporter avec PowerShell*** , sélectionner l'onglet ***Automatique*** .  
![Exportation Automatique.png](https://webdevolutions.azureedge.net/docs/fr/kb/KB2077.png)
1. Saisir la ***Clé secrète d'application*** et la ***Clé de l'application*** de votre utilisateur d'application dans les champs correspondants. 
1. Saisir le ***Chemin du dossier de destination*** dans le champ correspondant. C'est à cet endroit que vos données seront exportées. 
1. Choisir entre les formats d'exportation ***Json*** ou ***Csv*** . 
1. Cliquer sur le bouton ***Télécharger*** pour télécharger le script PowerShell. 
1. Exécuter le script à l'aide de PowerShell 7.  

Vos données ont maintenant été exportées dans le dossier de destination spécifié à l'étape 3. 

### Remplissage manuel des informations 
<a name="manuel"></a>
1. Dans ***Outils – Exporter avec PowerShell*** , sélectionner l'onglet ***Manuelle*** .  
![Exportation Manuelle.png](https://webdevolutions.azureedge.net/docs/fr/kb/KB2078.png)
1. Choisir entre les formats d'exportation ***Json*** ou ***Csv*** . 
1. Copier/coller le script dans un fichier PowerShell (.ps1). 
1. Dans votre script copié, modifier les variables avec les informations appropriées. Voir le tableau ci-dessous. 
<table>
	<tr>
		<th>
Variable 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
$url 
		</td>
		<td>
Saisir l'URL de votre Hub Business. Cette variable est automatiquement saisie, mais il est tout de même possible de la modifier. 
		</td>
	</tr>
	<tr>
		<td>
$appSecret 
		</td>
		<td>
Saisir la <b><i>Clé secrète d'application</b></i> de l'utilisateur d'application. 
		</td>
	</tr>
	<tr>
		<td>
$appKey 
		</td>
		<td>
Saisir la <b><i>Clé de l'application</b></i> de l'utilisateur d'application. 
		</td>
	</tr>
	<tr>
		<td>
$pathToExportedFolder 
		</td>
		<td>
Saisir le <b><i>Chemin du dossier de destination</b></i> . C'est à cet endroit que vos données seront exportées. 
		</td>
	</tr>
</table>

![Variables dans Powershell.png](https://webdevolutions.azureedge.net/docs/fr/kb/KB2079.png)  
5. Exécuter le script à l'aide de PowerShell 7.  

Vos données ont maintenant été exportées dans le dossier de destination spécifié à l'étape 4. 

