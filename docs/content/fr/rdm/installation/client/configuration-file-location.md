---
eleventyComputed:
  title: Emplacement du fichier de configuration
---
## Emplacement par défaut

{{ fr.RDM }} enregistre sa configuration dans un fichier nommé **RemoteDesktopManager.cfg**. Ce fichier contient presque que tous les paramètres de l'application.

{% snippet icon.badgeInfo %}
Vous pouvez récupérer le dossier d'installation de {{ fr.RDM }} en cliquant sur ***Fichier – Options – Avancée***. Un hyperlien affiche le dossier d'installation.
{% endsnippet %}

![Options – Advancée](https://cdnweb.devolutions.net/docs/fr/rdm/windows/RDMWin2148.png)

Le fichier de configuration peut se trouver dans différents dossiers en fonction de certaines conditions :

<table>
	<tr>
		<th>

CAS
		</th>
		<th>
EMPLACEMENT DU FICHIER DE CONFIGURATION
		</th>
	</tr>
	<tr>
		<td>
Installé sous **Program Files** ou **Program Files (x86)**
		</td>
		<td>
**%LocalAppData%\Devolutions\RemoteDesktopManager**
		</td>
	</tr>
	<tr>
		<td>
Application exécutée sur Terminal Server
		</td>
		<td>
**%AppData%\Devolutions\RemoteDesktopManager**. Il s'agit du profil itinérant et évite les conflits multi-utilisateurs.
		</td>
	</tr>
	<tr>
		<td>
Autre
		</td>
		<td>
Dossier d'installation
		</td>
	</tr>
</table>

## Remplacer le chemin par défaut

Il existe deux façons de modifier le dossier dans lequel le fichier de configuration est stocké:

1. Créez un fichier nommé **Override.cfg** dans le dossier de l'application. {{ fr.RDM }} ouvre ce fichier et lit la première ligne. Il doit contenir le dossier d'installation souhaité (sans le nom du fichier). Si vous souhaitez utiliser le chemin d'installation actuel, mettez un point dans le fichier. Voici quelques exemples :

<table>
	<tr>
		<th>
EXEMPLES
		</th>
	</tr>
	<tr>
		<td>
C:\RDM
		</td>
		<td>
Le fichier de configuration est enregistré dans le dossier désigné.
		</td>
	</tr>
	<tr>
		<td>
.
		</td>
		<td>
Le point est utilisé pour spécifier le dossier d'installation de {{ fr.RDM }}.
		</td>
	</tr>
	<tr>
		<td>
<b>%AppData%\Devolutions\RemoteDesktopManager</b>
		</td>
		<td>
Spécifier le dossier de données itinérantes de l'application.
		</td>
	</tr>
</table>

2. En ajoutant une clé dans le registre : CurrentUser \ SOFTWARE \RemoteDesktopManager, OptionPath. Définisser le chemin d'accès souhaité dans la clé OptionPath. Vous ne devez pas inclure le nom de fichier dans la valeur, juste le chemin.

## Configuration par défaut pour l'environnement des terminal server

Veuillez consulter [Terminal Services](/fr/rdm/windows/installation/client/terminal-services/) pour plus de détails.

