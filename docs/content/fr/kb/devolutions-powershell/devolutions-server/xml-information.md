---
eleventyComputed:
  title: Informations essentielles sur les GUID des propriétés identifiantes dans {{ fr.DVLS }}
  keywords: 
  - GUID
  - XML
---
* Pour optimiser l'efficacité du stockage, le système utilise des valeurs par défaut pour la plupart des champs. Par conséquent, si un champ conserve sa valeur par défaut, il sera omis du contenu affiché. Il est donc important de faire attention aux champs nouvellement ajoutés qui apparaissent dans le contenu mis à jour.
* Les identifiants font l'objet d'un processus de traitement distinct qui implique l'utilisation de GUID lors de la référence à d'autres entrées. Toutefois, lorsqu'ils utilisent d'autres mécanismes, ils sont associés à des GUID well-known prédéfinis et statiques.  
{% snippet icon.badgeInfo %}
Il existe des [GUID supplémentaires](/fr/kb/devolutions-powershell/remote-desktop-manager/xml-information/) dans {{ fr.RDM }}.
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
Compte privilégié
		</td>
		<td>
"56EDBCA3-E76A-457B-8F6A-6B78F3D084CE"
		</td>
	</tr>
	<tr>
		<td>
Mon compte privilégié
		</td>
		<td>
"0BCD4B51-1E29-4FCF-9B01-15684E1FA033"
		</td>
	</tr>
</table>

{% snippet icon.badgeInfo %}
Exemple de script pour {{ fr.DVLS }} :
```
$session.CredentialConnectionID = "56EDBCA3-E76A-457B-8F6A-6B78F3D084CE"
Set-RDMSession $session -Refresh
```
{% endsnippet %}
