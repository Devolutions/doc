---
title: Sécurité
Description: Utilisez Fichier – Options – Sécurité pour configurer les paramètres de sécurité reliés à la sécurité de l'application en local, à l'authentification multifacteur, au verrouillage, à la sécurité hors ligne, à la sécurité du certificat, et plus encore.
keywords:
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
Si cette option est activée, elle force l'utilisation du nom d'utilisateur et du domaine utilisés pour se connecter à la session Windows en cours.
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
Sélectionner <b><i>Par défaut - Demander le choix lors de l'utilisation</i></b> pour être invité à choisir l'AMF à configurer lors de l'utilisation, ou sélectionner <b><i>Vérifier toutes les méthodes configurées</i></b> pour être invité à utiliser une des méthodes configurées.
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
Cocher cette option pour valider votre authentification à votre application {{ fr.RDM }} avec un mot de passe à usage unique basé sur le temps (TOTP) envoyé via {{ fr.DWS }} ou Google Authenticator. Utiliser le bouton <b><i>Configurer</i></b> sous cette option.
		</td>
	</tr>
	<tr>
		<td>
Substituer le nom de compte 
		</td>
		<td>
Saisir un nouveau nom pour votre compte TOTP, qui remplacera le nom actuel.
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
Cocher cette option pour verrouiller {{ fr.RDM }} après une inactivité d'une certaine durée (définir cette période sous cette option). Déverrouiller l'application en utilisant la méthode de sécurité configurée.
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
Cocher cette option pour verrouiller {{ fr.RDM }} après que votre ordinateur soit passé en mode veille / hibernation. Déverrouiller l'application en utilisant la méthode de sécurité configurée.
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
Dans la liste déroulante, sélectionner <b><i>Sécurité par défaut</i></b> ou <b><i>Sécurité renforcée</i></b>. La sécurité renforcée vous permet de définir un mot de passe hors ligne.
		</td>
	</tr>
	<tr>
		<td>
Nouveau mot de passe / Confirmer le mot de passe 
		</td>
		<td>
Cette option n'est disponible qu'avec la sécurité hors ligne renforcée. Saisir un mot de passe hors ligne dans le champ <b><i>Nouveau mot de passe</i></b>, puis le saisir à nouveau dans le champ <b><i>Confirmer le mot de passe</i></b>.
		</td>
	</tr>
	<tr>
		<td>
Invite pour l'accès hors ligne 
		</td>
		<td>
Cette option n'est disponible qu'avec la sécurité hors ligne renforcée. Si elle est activée, {{ fr.RDM }} vous demandera si vous souhaitez accéder à l'application hors ligne au démarrage.
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
Cocher cette option pour désactiver la validation du certificat de l'application. Cette désactivation n'est pas recommandée, car elle compromettrait la confidentialité et l'intégrité des communications entre le client et le serveur et pourrait exposer l'application à des menaces potentielles.
		</td>
	</tr>
	<tr>
		<td>
Appliquer la vérification des révocations des certificats 
		</td>
		<td>
Cocher cette option pour activer la validation que le certificat n'a pas été révoqué. Cette validation est nécessaire si l'une des URL de validation du certificat n'est pas disponible pour une raison ou une autre.
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
Si cette option est activée, le bureau sécurisé ouvre des dialogues de mots de passe sur un autre bureau afin d'ajouter un niveau de sécurité supplémentaire et d'empêcher les enregistreurs de frappe de journaliser ce que vous écrivez.
		</td>
	</tr>
	<tr>
		<td>
Désactiver tous les événements sur les sessions 
		</td>
		<td>
Cocher cette option pour désactiver tous les événements configurés sur les entrées de session.
		</td>
	</tr>
	<tr>
		<td>
Activer le chiffrement DPAPI sur les fichiers locaux 
		</td>
		<td>

Chiffre les fichiers de configuration {{ en.RDM }} sur le poste de travail en utilisant les capacités de chiffrement natives de Windows (DPAPI - Data Protection API). Cela permet de renforcer la sécurité des informations sensibles contenues dans ces fichiers (telles que les informations de connexion aux sources de données).  

DPAPI est un outil de chiffrement supplémentaire robuste géré par le système d'exploitation qui garantit que les fichiers de configuration contenant des informations sensibles et les fichiers de cache hors ligne ne peuvent être déchiffrés que sur votre propre machine. L'activation de DPAPI et de la sécurité hors ligne chiffrera les fichiers deux fois puisque DPAPI est une étape de chiffrement séparée.  

La fonction est désactivée par défaut, car dans certaines conditions rares (indépendantes de la volonté de RDM), les données déchiffrées par DPAPI peuvent être irrécupérables, empêchant ainsi le démarrage de RDM.
		</td>
	</tr>
	<tr>
		<td>
Activer l'analyse anti-logiciels malveillants 
		</td>
		<td>
Cocher cette option pour permettre à {{ fr.RDM }} de rechercher des logiciels malveillants. Il se peut que cette fonction ne soit pas compatible avec votre fournisseur de logiciels anti-malveillants. Elle prend en charge Microsoft Defender, Avast, AVG et ESET.
		</td>
	</tr>
</table>
