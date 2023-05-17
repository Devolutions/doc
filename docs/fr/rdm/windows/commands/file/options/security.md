---
title: Sécurité
Description: Utilisez Fichier – Options – Sécurité pour configurer les paramètres de sécurité reliés à la sécurité de l'application en local, à l'authentification multifacteur, au verrouillage, à la sécurité hors ligne, à la sécurité du certificat, et plus encore.
- security
- anti-malware
---
Utilisez ***Fichier – Options – Sécurité*** pour configurer les paramètres de sécurité reliés à la sécurité de l'application locale, à l'authentification multifacteur, au verrouillage, à la sécurité hors ligne, à la sécurité du certificat, et plus encore.
![Fichier – Options – Sécurité](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RDMWin2129.png) 

## Paramètres 

### Sécurité de l'application (local) 

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
Sécurité de l'application (local) 
		</td>
		<td>
Sécurise le {{ fr.RDM }} local avec un mot de passe d'application personnalisé, avec les identifiants de l'ordinateur en tant que mot de passe de l'application ou avec Windows Hello (doit être d'abord configuré sur votre machine locale). Ce mot de passe vous sera demandé à l'ouverture de votre application. Vous pouvez également choisir de ne pas définir de mot de passe d'application.
		</td>
	</tr>
	<tr>
		<td>
Nouveau mot de passe / Confirmer le mot de passe 
		</td>
		<td>
Si <b><i>Utiliser le mot de passe d'application</i></b> est sélectionné dans la liste déroulante <b><i>Sécurité de l'application</i></b>, saisir un mot de passe d'application dans le champ <b><i>Nouveau mot de passe</i></b>, puis le saisir à nouveau dans le champ <b><i>Confirmer le mot de passe</i></b>.
		</td>
	</tr>
	<tr>
		<td>
Chiffrer les fichiers locaux à l'aide du mot de passe de l'application 
		</td>
		<td>
Si <b><i>Utiliser le mot de passe d'application</i></b> est sélectionné dans la liste déroulante <b><i>Sécurité de l'application</i></b>, cocher cette option pour utiliser le mot de passe d'application précédemment créé pour chiffrer vos fichiers locaux de {{ fr.RDM }}.
		</td>
	</tr>
	<tr>
		<td>
Options avancées 
		</td>
		<td>
Cette option n'est disponible que si <b><i>Chiffrer les fichiers locaux à l'aide du mot de passe de l'application</i></b> a été activé. En cliquant sur cette option, vous ouvrez une nouvelle fenêtre. Dans cette fenêtre, définir le <b><i>Nombre d'itérations dérivantes de clé</i></b>, qui est le nombre de dérivations utilisées par la clé lors du chiffrement. Un nombre plus élevé est plus sécuritaire, mais peut affecter la performance. La valeur par défaut est de 1000.
		</td>
	</tr>
	<tr>
		<td>
Forcer le nom d'utilisateur et le domaine actuellement connecté 
		</td>
		<td>
Description 
		</td>
	</tr>
</table>

### Authentification à 2 facteurs 

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
Mode d'authentification 
		</td>
		<td>
Description 
		</td>
	</tr>
	<tr>
		<td>
Requiert l'authentication Yubikey
		</td>
		<td>
Cocher cette option pour vous authentifier à votre application {{ fr.RDM }} en utilisant l'authentification Yubikey. Saisir votre Yubikey dans le champ sous cette option. 
		</td>
	</tr>
	<tr>
		<td>
Nécessite une validation du TOTP ({{ fr.DWS }} or Google Authenticator) 
		</td>
		<td>
Cocher cette option pour valider votre authentification à votre application {{ fr.RDM }} avec un mot de passe à usage unique basé sur le temps (TOTP) envoyé via {{ fr.DWS }} ou Google Authenticator. heck this option to validate your authentication to your {{ en.RDM }} application with a Time-based one-time password (TOTP) sent through {{ fr.DWS }} ou Google Authenticator. Utiliser le bouton <b><i>Configurer</i></b> sous cette option.
		</td>
	</tr>
	<tr>
		<td>
Substituer le nom de compte 
		</td>
		<td>
Description 
		</td>
	</tr>
	<tr>
		<td>
Nécessite l'authentification Duo 
		</td>
		<td>
Cocher cette option pour vous authentifier à votre application {{ fr.RDM }} en utilisant l'authentification Duo. Utiliser le bouton <b><i>Configurer</i></b> sous cette option. 
		</td>
	</tr>
	<tr>
		<td>
Action automatique Duo 
		</td>
		<td>
Sélectionner l'action que Duo doit utiliser pour valider l'authentification.
		</td>
	</tr>
</table>

### Verrouiller 

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
Lors de la réduction de la fenêtre 
		</td>
		<td>
Cocher cette option pour verrouiller {{ fr.RDM }} après l'avoir minimiser. Déverrouiller l'application en utilisant la méthode de sécurité configurée.
		</td>
	</tr>
	<tr>
		<td>
Lorsque inactif 
		</td>
		<td>
Cocher cette option pour verrouiller {{ fr.RDM }} après une inactivité d'une certaine durée (définir cette période sous cette option).
Check this option to lock {{ en.RDM }} after it has been idle for a certain time (define that period under this option). Déverrouiller l'application en utilisant la méthode de sécurité configurée.
		</td>
	</tr>
	<tr>
		<td>
Lors du verrouillage de Windows 
		</td>
		<td>
Cocher cette option pour verrouiller {{ fr.RDM }} après avoir verrouillé votre session Windows. Déverrouiller l'application en utilisant la méthode de sécurité configurée.
		</td>
	</tr>
	<tr>
		<td>
En mode veille 
		</td>
		<td>
Description 
		</td>
	</tr>
</table>

### Sécurité hors ligne 

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
Sécurité hors ligne 
		</td>
		<td>
In the drop-down list, select between <b><i>Default security</i></b> and <b><i>Enhanced security</i></b>. The enhanced security allows you to set up an offline password.
		</td>
	</tr>
	<tr>
		<td>
Nouveau mot de passe / Confirmer le mot de passe 
		</td>
		<td>
This is only available with enhanced offline security. Enter an offline password in the <b><i>New password</i></b> field, then enter it again in the <b><i>Confirm password</i></b> field. 
		</td>
	</tr>
	<tr>
		<td>
Invite pour l'accès hors ligne 
		</td>
		<td>
This is only available with enhanced offline security. 
		</td>
	</tr>
</table>

### Sécurité du certificat 

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
Ignorer les erreurs de certificats de l'application 
		</td>
		<td>
Description 
		</td>
	</tr>
	<tr>
		<td>
Appliquer la vérification des révocations des certificats 
		</td>
		<td>
Description 
		</td>
	</tr>
</table>

### Other 

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
Activer le Bureau sécurisé 
		</td>
		<td>
Description 
		</td>
	</tr>
	<tr>
		<td>
Désactiver tous les événements sur les sessions 
		</td>
		<td>
Description 
		</td>
	</tr>
	<tr>
		<td>
Activer le chiffrement DPAPI sur les fichiers locaux 
		</td>
		<td>
Description 
		</td>
	</tr>
	<tr>
		<td>
Activer l'analyse anti-logiciels malveillants 
		</td>
		<td>
Check this option to enable {{ en.RDM }} to scan for malware. This feature might not be compatible with your anti-malware provider. It supports Microsoft Defender, Avast, AVG, and ESET.
		</td>
	</tr>
</table>
