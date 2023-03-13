---
title: Tableau de bord de sécurité Remote Desktop Manager
---
Le Tableau de bord de sécurité est un outil qui offre des conseils sur la manière d'améliorer la sécurité de la plateforme {{ fr.RDM }} ainsi que des astuces pour réduire la charge de travail des administrateurs. Certains conseils sont des bonnes pratiques communes en matière d'infosécurité, d'autres sont le fruit d'un consensus entre nos équipes propriétaires.  

Les scores sont évidemment sujets à caution et nous ne prétendons pas que chaque sujet a la même valeur relative pour tous les membres de notre communauté. Atteindre 100% n'est sûrement pas un objectif en soi, nous cherchons simplement à sensibiliser et à fournir des idées pour votre propre renforcement de la sécurité.  

![KB4063.png](/img/fr/kb/KB4063.png) 

## Amélioration des Éléments d'Action 

### Https devrait être utilisé pour se connecter à la source de données


<table>
	<tr>
		<td>
Description 
		</td>
		<td>
HTTPS est utilisé pour protéger la communication entre le client et le serveur hébergeant la source de données. Le trafic via HTTP n'est pas crypté et est susceptible d'être intercepté et altéré par un tiers malveillant. 
		</td>
	</tr>
	<tr>
		<td>
Mesures d'atténuation 
		</td>
		<td>
Configurez un certificat TLS sur le serveur et définissez l'URL de la source de données pour qu'elle commence par https:// 
Voir <a href="/kb/devolutions-server/how-to-articles/configure-ssl/" target="_blank">Configure SSL</a>. 
		</td>
	</tr>
</table>

### L'activité du coffre d'utilisateur doit être enregistrée

<table>
	<tr>
		<td>
Description 
		</td>
		<td>
Les journaux d'activité des coffres d’utilisateur ne sont pas activés par défaut et sont utiles en cas de réponse à un incident. 
		</td>
	</tr>
	<tr>
		<td>
Mesures d'atténuation 
		</td>
		<td>
Dans Administration - Paramètres du système - Coffre d'utilisateur , cochez Journaliser les activités du coffre d'utilisateur . 
		</td>
	</tr>
</table>

### L'analyseur de force de mot de passe devrait utiliser zxcvbn

<table>
	<tr>
		<td>
Description 
		</td>
		<td>
Zxcvbn est fortement recommandé comparé à l’ancien analyseur de mots de passe puisqu’il est plus fiable. 
		</td>
	</tr>
	<tr>
		<td>
Mesures d'atténuation 
		</td>
		<td>
Dans Administration - Paramètres du système - Politique de mot de passe , définir le Calculateur de force de mot de passe a Zxcvbn . 
		</td>
	</tr>
</table>

### L'ancienne sécurité devrait être désactivée

<table>
	<tr>
		<td>
Description 
		</td>
		<td>
Les groupes de sécurité ont été remplacés par le système de permissions. L'ancienne sécurité est dépréciée et sera supprimée dans une prochaine version. 
		</td>
	</tr>
	<tr>
		<td>
Mesures d'atténuation 
		</td>
		<td>
Dans Administration - Paramètres du système - Paramètres de sécurité ,  décochez Utiliser l'ancienne sécurité . 
		</td>
	</tr>
</table>

### L'authentification à 2 facteurs (mfa) devrait être imposée

<table>
	<tr>
		<td>
Description 
		</td>
		<td>
L'authentification à 2 facteurs (MFA) exige un moyen d'authentification supplémentaire lors de la connexion à une source de données. Ce contrôle empêche l'utilisation abusive de mots de passe compromis, divulgués ou faibles. Le logiciel peut être configuré pour appliquer l'exigence MFA à tous les utilisateurs. 
		</td>
	</tr>
	<tr>
		<td>
Mesures d'atténuation 
		</td>
		<td>
Dans Administration - Paramètres du système - Paramètres de sécurité , cochez Forcer la configuration de 2-factor sur la source de données . 
		</td>
	</tr>
</table>

### L'expiration du mot de passe devrait être activée pour les utilisateurs personnalisés

<table>
	<tr>
		<td>
Description 
		</td>
		<td>
Certaines normes de sécurité exigent que les mots de passe soient modifiés à intervalles réguliers. PCI DSS 4.0 exige que les mots de passe soient changés tous les 90 jours lorsque le mot de passe est le seul facteur d'authentification. 
		</td>
	</tr>
	<tr>
		<td>
Mesures d'atténuation 
		</td>
		<td>
L'expiration du mot de passe peut être configurée dans Administration - Paramètres du système - Paramètres de sécurité - Expiration du mot de passe de l'utilisateur personnalisé (jours) . 
		</td>
	</tr>
</table>

### La validation du certificat tls devrait être activée

<table>
	<tr>
		<td>
Description 
		</td>
		<td>
La validation des certificats garantit que la connexion est établie avec la partie concernée et protège contre les attaques d'interception de données. 
		</td>
	</tr>
	<tr>
		<td>
Mesures d'atténuation 
		</td>
		<td>
Dans Fichier - Options - Sécurité - Sécurité du certificat , décochez Ignorer les erreurs de certificats de l'application . 
		</td>
	</tr>
</table>

### La variable du mot de passe de la source de données devrait être désactivée

<table>
	<tr>
		<td>
Description 
		</td>
		<td>
Lorsque cette option est activée, la variable DATA_SOURCE_PASSWORD correspondra au mot de passe de la source de données. L’option de permettre une variable de mot de passe de la source de données n'est pas recommandée. 
		</td>
	</tr>
	<tr>
		<td>
Mesures d'atténuation 
		</td>
		<td>
Dans Administration - Paramètres du système - Politique de mot de passe , décochez Autoriser des variables des mots de passe pour toutes les entrées . 
		</td>
	</tr>
</table>

### Le cryptage transparent des données (tde) devrait être utilisé avec sql server

<table>
	<tr>
		<td>
Description 
		</td>
		<td>
Le cryptage transparent des données chiffre les données de la base de données, ce qui réduit les risques en cas de vol de disques physiques ou de sauvegarde. 
		</td>
	</tr>
</table>

### Le cryptage zip devrait utiliser le mode aes

<table>
	<tr>
		<td>
Description 
		</td>
		<td>
L'algorithme ZipCryto est considéré comme peu sûr : AES est préférable. Il est vulnérable aux attaques de type « à texte clair connu » (de l’anglais known-plaintext) qui permettent de récupérer le contenu de l'archive sans connaître le mot de passe (voir <a href="https://blog.devolutions.net/2020/08/why-you-should-never-use-zipcrypto/" target="_blank">Why You Should Never Use the Native .Zip Crypto in Windows</a> pour plus de détails sur cette attaque). 
		</td>
	</tr>
	<tr>
		<td>
Mesures d'atténuation 
		</td>
		<td>
Dans Fichier - Options - Avancé , décochez Utiliser la compression ZipCrypto (non recommandé) . 
		</td>
	</tr>
</table>

### Le mode hors ligne devrait être désactivé

<table>
	<tr>
		<td>
Description 
		</td>
		<td>
Par défaut le mode hors-ligne est activé, les identifiants sont mis automatiquement en cache dans le système client. Le mode hors-ligne devrait être désactivé pour un meilleur contrôle de la sécurité des données sensibles. 
		</td>
	</tr>
</table>

### Les avertissements pour les connexions rdp non fiables doivent être activés

<table>
	<tr>
		<td>
Description 
		</td>
		<td>
Lorsqu'un certificat inconnu est présenté, le client RDP doit être configuré pour afficher un avertissement ( M'avertir ) ou interrompre la connexion ( Ne pas connecter ). 
		</td>
	</tr>
	<tr>
		<td>
Mesures d'atténuation 
		</td>
		<td>
Dans Fichier - Options - Types - Bureau à distance , définir le Niveau d'authentification a M'avertir ou Ne pas connecter . 
		</td>
	</tr>
</table>

### Les coffres devraient être créés avec des permissions restreintes par défaut

<table>
	<tr>
		<td>
Description 
		</td>
		<td>
Il est préférable de fournir des droits aux utilisateurs seulement au besoin. Lorsque vous activez cette option, {{ fr.RDM }} attribuera un ensemble de permissions plus limité aux utilisateurs lors de la création d’un coffre. 
		</td>
	</tr>
	<tr>
		<td>
Mesures d'atténuation 
		</td>
		<td>
Dans Administration -   Paramètres du système - Paramètres de sécurité , cochez Créer un coffre avec un accès restreint par défaut . 
		</td>
	</tr>
</table>

### Les connexions sql devraient utiliser tls

<table>
	<tr>
		<td>
Description 
		</td>
		<td>
TLS protège les communications entre {{ fr.RDM }} et l'instance de SQL Server. 
		</td>
	</tr>
	<tr>
		<td>
Mesures d'atténuation 
		</td>
		<td>
Configurez le serveur SQL pour qu'il prenne en charge les connexions TLS et ajoutez encrypt=true à la chaîne de connexion du serveur SQL. 
		</td>
	</tr>
</table>

### Les événements à risque devraient être désactivés ou générer un avertissement

<table>
	<tr>
		<td>
Description 
		</td>
		<td>
Certains événements d'entrée peuvent effectuer des actions puissantes telles que l'exécution d'un programme ou d'un script externe. Ces événements représentent un risque s'ils sont modifiés par un acteur malveillant. Ces types d'événements peuvent être désactivés s'ils ne sont pas nécessaires, ou {{ fr.RDM }} peut être configuré pour afficher un avertissement lorsqu'un tel événement est sur le point d'être exécuté. 
		</td>
	</tr>
	<tr>
		<td>
Mesures d'atténuation 
		</td>
		<td>
Dans Administration - Paramètres du système - Paramètres de sécurité , définir Événements à risque à Désactivé ou Activé avec des avertissements . 
		</td>
	</tr>
</table>

### Les fichiers de configuration devraient être chiffrés à l'aide d'un mot de passe d'application

<table>
	<tr>
		<td>
Description 
		</td>
		<td>
Le mot de passe de l'application devrait être utilisé pour chiffrer les informations sensibles dans les fichiers de configuration {{ fr.RDM }} . 
		</td>
	</tr>
	<tr>
		<td>
Mesures d'atténuation 
		</td>
		<td>
Dans Fichier - Options - Sécurité - Sécurité de l'application (local) , choisir Utiliser le mot de passe d'application et cochez Chiffrer les fichiers locaux en utilisant le mot de passe de l'application . 
		</td>
	</tr>
</table>

### Les sms ne devraient pas être utilisés pour l'authentification à 2 facteurs

<table>
	<tr>
		<td>
Description 
		</td>
		<td>
Le SMS n'est pas recommandé pour le 2FA. Un mécanisme plus puissant basé sur une application d'authentification ou une clé de sécurité physique doit être utilisé à la place. 
		</td>
	</tr>
</table>

### Un fournisseur de sécurité devrait être utilisé

<table>
	<tr>
		<td>
Description 
		</td>
		<td>
Par défaut, les mots de passe ne sont pas protégés. Lorsqu'un fournisseur de sécurité est configuré, les données sensibles contenues dans une source de données sont cryptées. 
		</td>
	</tr>
	<tr>
		<td>
Mesures d'atténuation 
		</td>
		<td>
Les Fourniseurs de sécurité sont configurées dans Administration - Fourniseurs de sécurité . 
		</td>
	</tr>
</table>

### Un modèle de mot de passe par défaut devrait être configuré

<table>
	<tr>
		<td>
Description 
		</td>
		<td>
Les modèles de mots de passe définissent les exigences relatives aux mots de passe générés par les générateurs de mots de passe. 
		</td>
	</tr>
	<tr>
		<td>
Mesures d'atténuation 
		</td>
		<td>
Dans Fichier - Modèles , sélectionnez Modèles de mot de passe pour créer un modèle. Ensuite, le modèle par défaut peut être sélectionné dans Administration - Paramètres du système - Modèles de mot de passe . 
		</td>
	</tr>
</table>

### Une clé maîtresse devrait être utilisée avec la source de données

<table>
	<tr>
		<td>
Description 
		</td>
		<td>
L'utilisation d'une clé maîtresse permet de crypter le contenu sensible des fichiers sources de données basés sur XML. 
		</td>
	</tr>
	<tr>
		<td>
Mesures d'atténuation 
		</td>
		<td>
La clé maîtresse peut être définie sous Fichier - Modifier la clé maîtresse . 
		</td>
	</tr>
</table>

### Une version minimale du client doit être configurée

<table>
	<tr>
		<td>
Description 
		</td>
		<td>
Définir une version minimale de {{ fr.RDM }} est recommandé afin de s'assurer que les clients possèdent les dernières fonctionnalités de sécurité. 
		</td>
	</tr>
</table>


