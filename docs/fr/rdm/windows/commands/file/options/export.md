---
title: Exporter les options
---
Utiliser ***Fichier - Options - Eporter les options*** pour contrôler les options à l'exportation à partir de votre configuration de l'application. Utilisez-le pour transférer les paramètres vers une autre machine. 

{% snippet icon.shieldWarning %} 
Le partage du fichier exporté avec un collègue donnerait effectivement à cette personne tout les identifiants que vous avez définies dans vos définitions de source de données.  

Devolutions ne recommande pas de partager des identifiants dans une source de données d'équipe. 
{% endsnippet %}
 
## Paramètres 

![Exportation du fichier de configuration](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip10759.png) 

### Informations sur l'enregistrement 

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
Nom 
		</td>
		<td>
Nom d'enregistrement de l'entreprise 
		</td>
	</tr>
	<tr>
		<td>
Courriel 
		</td>
		<td>
Courriel d'inscription 
		</td>
	</tr>
	<tr>
		<td>
Clé 
		</td>
		<td>
Clé de licence 
		</td>
	</tr>
</table>

### Divers 

{% snippet icon.shieldWarning %} 
Les modèles locaux peuvent contenir des identifiants, assurez-vous de ne pas partager le fichier exporté. 
{% endsnippet %}
 
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
Paramètres du proxy 
		</td>
		<td>
Inclus vos paramètres de proxy. 
		</td>
	</tr>
	<tr>
		<td>
Chemin d'installation enregistrés 
		</td>
		<td>
Conserve vos chemins d'installation configurés pour l'application externe. 
		</td>
	</tr>
	<tr>
		<td>
Modèles enregistrés 
		</td>
		<td>
Inclus vos modèles locaux dans l'exportation. 
		</td>
	</tr>
	<tr>
		<td>
Identifiants du compte Devolutions 
		</td>
		<td>
Inclus vos identifiants du compte Devolutions. 
		</td>
	</tr>
	<tr>
		<td>
Inclure les identifiants de la source de données 
		</td>
		<td>
Inclus vos identifiants de source de données. 
		</td>
	</tr>
</table>

### Source de données 

{% snippet icon.shieldWarning %} 
Les configurations de source de données que vous sélectionnez seront exportées avec le nom d'utilisateur/mot de passe tel qu'ils sont actuellement configurés. Si vous créez un fichier pour configurer rapidement de nouveaux employés, vous devez faire attention à ne pas divulguer vos identifiants. L'utilisation du [{{ fr.CIS }}](/fr/rdm/windows/installation/client/custom-installer-service/) est recommandée dans ce cas. 
{% endsnippet %}
 
Toutes vos sources de données configurées seront affichées dans cette section. Sélectionner celle(s) que vous souhaitez inclure dans l'exportation. Veuillez noter que le contenu de la source de données n'est pas exporté.  

Lorsque vos paramètres sont personnalisés à votre convenance, cliquez sur ***Exporter*** . Vous serez invité à enregistrer vos paramètres dans un fichier RemoteDesktopManager.cfg. 

