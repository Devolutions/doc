---
  title: Authentification
order: 10
---
La section ***Authentification*** permet à l'administrateur de sélectionner les types d'authentification à utiliser. 

![Administration - Paramètres de {{ fr.DVLS }} - Authentification](https://webdevolutions.azureedge.net/docs/fr/server/PSSettingsAuthentication.png) 

## Paramètres 

### Modes d'authentification 

<table>
	<tr>
		<th>
Option 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
S'authentifier avec l'usager du domaine 
		</td>
		<td>
Le domaine est utilisé pour authentifier l'utilisateur. 
		</td>
	</tr>
	<tr>
		<td>
S'authentifier avec le compte utilisateur d'Office 365 
		</td>
		<td>
AzureAD est utilisé pour authentifier l'utilisateur. 
		</td>
	</tr>
	<tr>
		<td>
S'authentifier avec l'authentification {{ fr.DVLS }} 
		</td>
		<td>
{{ fr.DVLS }} est utilisé pour authentifier l'utilisateur. Vous devez créer l'utilisateur initial via la {{ fr.DVLSCONSOLE }}. 
		</td>
	</tr>
	<tr>
		<td>
Authentification Windows 
		</td>
		<td>
L'application utilisera l'utilisateur actuellement authentifié Windows pour s'authentifier auprès de l'instance {{ fr.DVLS }}. 
		</td>
	</tr>
</table>

### Configuration 

<table>
	<tr>
		<th>
Option 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
Domaine 
		</td>
		<td>
		
Configurer le type de [Domaine](/fr/server/web-interface/administration/configuration/server-settings/general/authentication/domain/). 
		</td>
	</tr>
	<tr>
		<td>
Office365 
		</td>
		<td>
Configurer le type [Office365](/fr/server/web-interface/administration/configuration/server-settings/general/authentication/office-365/). 
		</td>
	</tr>
</table>
