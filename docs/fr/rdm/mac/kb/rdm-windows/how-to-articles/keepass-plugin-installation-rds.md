---
eleventyComputed:
  title: Installation du plugin KeePass sur un RDS
---
Utiliser {{ fr.RDM }} et KeePass sur un Service de Bureau à Distance nécessite plusieurs étapes.

## Exigences

L'installation de {{ fr.RDM }} suit [Services Terminal / Services Bureau à Distance](/rdm/windows/installation/client/terminal-services/).

Assurez-vous que l'installation de KeePass a été réussie et n'est pas sur un lecteur réseau.

## Plugin KeePass

1. Suivre les étapes dans [Télécharger le plugin KeePass](/rdm/mac/kb/rdm-windows/how-to-articles/download-keepass-plugin/).
1. Décompresser les fichiers dans le dossier d'installation de KeePass (par exemple, **C:\Program Files (x86)\KeePass Password Safe 2**).
1. Le chemin d'installation de KeePass (***Fichier – Paramètres – Chemin – Configurer le Chemin d'Installation***), doit être configuré dans **default.cfg** référencé dans [Services Terminal / Services Bureau à Distance](/rdm/windows/installation/client/terminal-services/).

Pour éditer manuellement **default.cfg**, ajuster le chemin et ajouter la ligne ci-dessous dans le contexte <Option> </Option>.

**<KeePassInstallationPath>C:\Program Files (x86)\KeePass Password Safe 2</KeePassInstallationPath>**

Chaque fois que {{ fr.RDM }} est démarré et détecte un nouveau fichier **default.cfg**, une fenêtre de dialogue apparaîtra.

En sélectionnant Utiliser la nouvelle configuration (perdre la mienne), la configuration de l'utilisateur est simplement écrasée. Si vous souhaitez uniquement mettre à jour la clé de licence {{ fr.RDM }} après un renouvellement, choisissez ***Récupérer uniquement la nouvelle inscription***.