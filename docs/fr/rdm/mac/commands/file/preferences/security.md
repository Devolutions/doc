---
  title: Sécurité
---
Utiliser ***Fichier - Préférences - Sécurité*** pour configurer la sécurité de l'application. 

## Paramètres 

![Préférences - Sécurité](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/clip4201.png) 

### Sécurité de l'application (local) 

<table>
	<tr>
		<td>
Option 
		</td>
		<td>
Description 
		</td>
	</tr>
	<tr>
		<td>
Aucun mot de passe de l'application 
		</td>
		<td>
Aucun mot de passe ne sera demandé pour accéder à l'application. 
		</td>
	</tr>
	<tr>
		<td>
Utiliser un mot de passe de l'application 
		</td>
		<td>
Définir un mot de passe spécifique pour accéder à l'application. 
		</td>
	</tr>
	<tr>
		<td>
Utiliser les identifiants d'ordinateur comme mot de passe de l'appli 
		</td>
		<td>
Nécessite les mêmes identifiants que ceux de votre ordinateur pour accéder à l'application. 
		</td>
	</tr>
</table>

### Authentification 2-factor 

<table>
	<tr>
		<td>
Option 
		</td>
		<td>
Description 
		</td>
	</tr>
	<tr>
		<td>
Requiert l'authentification Yubikey 
		</td>
		<td>
Utiliser un appareil Yubikey pour accéder à l'application lorsqu'elle démarre ou lorsqu'elle est verrouillée. 
		</td>
	</tr>
	<tr>
		<td>
Exiger Google Authenticator 
		</td>
		<td>
Utiliser un appareil Google Authenticator pour accéder à l'application lorsqu'elle démarre ou lorsqu'elle est verrouillée. 
		</td>
	</tr>
	<tr>
		<td>
Substituer le nom de compte 
		</td>
		<td>
Si vous souhaitez utiliser un compte Google Authenticator différent de celui précédemment associé à votre compte {{ fr.RDM }}, vous pouvez substituer le nom du compte, mais vous devrez reconfigurer Google Authenticator. 
		</td>
	</tr>
</table>

### Verrouiller 

<table>
	<tr>
		<td>
Option 
		</td>
		<td>
Description 
		</td>
	</tr>
	<tr>
		<td>
Verrouiller l'application quand réduite 
		</td>
		<td>
Verrouiller l'application lorsqu'elle est réduite dans la barre des tâches. 
		</td>
	</tr>
	<tr>
		<td>
Verrouiller l'application lorsqu'inactive 
		</td>
		<td>
Verrouiller automatiquement l'application lorsqu'elle n'est pas utilisée au bout d'un certain temps. La valeur est en minute. 
		</td>
	</tr>
</table>

### Sécurité hors connexion 

<table>
	<tr>
		<td>
Option 
		</td>
		<td>
Description 
		</td>
	</tr>
	<tr>
		<td>
Sécurité par défaut 
		</td>
		<td>
L'application utilise un fichier hors ligne chiffré avec un hachage de clé calculée non portable. 
		</td>
	</tr>
	<tr>
		<td>
Sécurité renforcé 
		</td>
		<td>
L'application utilise un fichier hors ligne qui est chiffré avec un hachage de la clé calculée non portable avec un mot de passe spécifique à l'utilisateur. Ce mot de passe est enregistré en interne par défaut. 
		</td>
	</tr>
	<tr>
		<td>
Invite pour l'accès hors ligne 
		</td>
		<td>
Cette case à cocher force l'utilisateur à entrer le mot de passe avant d'accéder aux données hors ligne. 
		</td>
	</tr>
</table>
