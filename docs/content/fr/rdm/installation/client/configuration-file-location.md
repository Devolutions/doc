---
eleventyComputed:
  title: Emplacement du fichier de configuration
  description: "{{ fr.RDM }} enregistre sa configuration dans un fichier nommé **RemoteDesktopManager.cfg**. Ce fichier contient la plupart des paramètres de l'application."
---
{{ fr.RDM }} enregistre sa configuration dans un fichier nommé **RemoteDesktopManager.cfg**. Ce fichier contient la plupart des paramètres de l'application. Pour récupérer le dossier d'installation de {{ fr.RDM }}, cliquer sur ***Fichier*** – ***Paramètres*** – ***Avancé***. Un hyperlien affiche le dossier d'installation.

![Options – Avancé](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2257.png)

Le fichier de configuration peut se trouver dans différents dossiers selon certaines conditions.

| Cas                                                         | Emplacement du fichier de configuration           |
|--------------------------------------------------------------|---------------------------------------------------|
| Installé sous **Program Files** ou **Program Files (x86)** | `%LocalAppData%\Devolutions\RemoteDesktopManager` |
| Application exécutée sur Terminal Server                       | `%AppData%\Devolutions\RemoteDesktopManager`<br><br>Ceci est le profil itinérant et évite les conflits multi-utilisateurs. |
| Autre                                                        | Dossier d'installation                               |

## Remplacer le chemin par défaut
Il existe deux manières de changer le dossier où le fichier de configuration est stocké :

1. Créer un fichier nommé "**Override.cfg**" dans le dossier de l'application. {{ fr.RDM }} ouvre ce fichier et lit la première ligne. Elle doit contenir le dossier d'installation souhaité (sans le nom du fichier). Si vous souhaitez utiliser le chemin d'installation actuel, mettre un point dans le fichier. Voici quelques exemples :
   | Exemples |  |
   |----------|--|
   | C:\RDM | Le fichier de config est enregistré dans le dossier désigné. |
   | . | Le point est utilisé pour spécifier le dossier d'installation de {{ fr.RDM }}. |
   | **%AppData%\Devolutions\RemoteDesktopManager** | Spécifier le dossier de données itinérantes de l'application. |
1. En ajoutant une clé dans le registre : CurrentUser\SOFTWARE\RemoteDesktopManager, OptionPath. Définir le chemin souhaité dans la clé OptionPath. Vous ne devez pas inclure le nom du fichier dans la valeur, juste le chemin.

## Configuration par défaut pour l'environnement des Services Bureau à distance
Veuillez vous référer à [Services Terminal / Services Bureau à distance](/rdm/windows/installation/client/terminal-services/) pour plus de détails.
