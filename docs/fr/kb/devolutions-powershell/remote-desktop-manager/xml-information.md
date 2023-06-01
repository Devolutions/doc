---
eleventyComputed:
  title: Informations essentielles sur les GUID des propriétés identifiantes dans {{ fr.RDM }}
  keywords: 
  - GUID
  - XML
---
* Pour optimiser l'efficacité du stockage, le système utilise des valeurs par défaut pour la plupart des champs. Par conséquent, si un champ conserve sa valeur par défaut, il sera omis du contenu affiché. Il est donc important de faire attention aux champs nouvellement ajoutés qui apparaissent dans le contenu mis à jour.
* Les identifiants font l'objet d'un processus de traitement distinct qui implique l'utilisation de GUID lors de la référence à d'autres entrées. Toutefois, lorsqu'ils utilisent d'autres mécanismes, ils sont associés à des GUID well-known prédéfinis et statiques.  
{% snippet icon.badgeInfo %}
Il existe des [GUID supplémentaires](/fr/kb/devolutions-powershell/devolutions-server/xml-information/) qui sont exclusifs à {{ fr.DVLS }} lorsque le module PAM est activé.
{% endsnippet %}

<table>
	<tr>
		<th>
Paramètres
		</th>
		<th>
GUID well-known
		</th>
	</tr>
	<tr>
		<td>
Par défaut
		</td>
		<td>
" "
		</td>
	</tr>
	<tr>
		<td>
Dépôt d'identifiant --- Invite lors de la connexion ---
		</td>
		<td>
"45479560-173E-435D-8848-C22F863FDC96"
		</td>
	</tr>
	<tr>
		<td>
Intégré 
		</td>
		<td>
Dois être utilisé à des fins de rétrocompatibilité, pas répertorier
		</td>
	</tr>
	<tr>
		<td>
Parent (uniquement pour les sous-connexions)
		</td>
		<td>
"E2CC9029-CA3A-4308-BA54-16D5029BC8ED"
		</td>
	</tr>
	<tr>
		<td>
Hérité
		</td>
		<td>
"1310CF82-6FAB-4B7A-9EEA-3E2E451CA2CF"
		</td>
	</tr>
	<tr>
		<td>
Mes identifiants personnels
		</td>
		<td>
"9F3C3BCF-068A-4927-B996-CA52154CAE3B"
		</td>
	</tr>
	<tr>
		<td>
Aucun 
		</td>
		<td>
"B87B29D9-9239-4D7B-86D8-9B53DCD3BA9F"
		</td>
	</tr>
	<tr>
		<td>
Mon {{ fr.PVLT }}, associé à PersonalConnectionID  
		</td>
		<td>
"245A4245-48E7-4DF5-9C4C-11861D8E1F81"
		</td>
	</tr>
	<tr>
		<td>
Recherche de {{ fr.PVLT }}, associée à CredentialPrivateVaultsearchString
		</td>
		<td>
"88E4BE76-4C5B-4694-AA9C-D53B7E0FE0DC"
		</td>
	</tr>
</table>

{% snippet icon.badgeInfo %}
Exemple de script pour {{ en.RDM }} :
```
$session.CredentialConnectionID = "1310CF82-6FAB-4B7A-9EEA-3E2E451CA2CF"
Set-RDMSession $session -Refresh
```
{% endsnippet %}
