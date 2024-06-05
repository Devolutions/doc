---
eleventyComputed:
  title: Impossible de désinstaller – fichier MSI manquant
---
Impossible de désinstaller {{ fr.RDM }} de votre ordinateur en raison d'un fichier MSI manquant.
## Solution
Pour résoudre les problèmes que vous pourriez rencontrer avec l'installation, la suppression de l'application ou le fichier MSI manquant, exécuter l'outil de dépannage Microsoft sur votre ordinateur.

[https://support.microsoft.com/fr-fr/mats/program_install_and_uninstall](https://support.microsoft.com/en-us/mats/program_install_and_uninstall)

Si l'installateur signale toujours une erreur, exécuter l'installateur depuis la ligne de commande en utilisant ces paramètres en les adaptant à votre environnement :

    msiexec /i "{Nom du paquet msi}" /L*V "Nom du fichier journal"

Exemple :

    msiexec /i "Setup.RemoteDesktopManager.11.7.6.0.msi" /L*V "C:\log\RdmInstall.log"

Envoyer le fichier journal résultant à [service@devolutions.net](mailto:service@devolutions.net)
