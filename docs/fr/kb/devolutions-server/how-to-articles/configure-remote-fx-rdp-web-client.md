---
  title: Configurer RemoteFX pour le WebClient RDP
---
Par défaut, Windows n'active pas RemoteFX afin de garantir la rétrocompatibilité. Toutefois, pour bénéficier d'une performance optimale dans le cadre de l'utilisation du WebClient RDP, il est recommandé d'activer RemoteFX sur les machines serveur qui le permettent.  

Afin d'activer RemoteFX sur une machine distante, certaines options doivent être activées.  

La procédure à suivre est la suivante :  

1. Lancer la commande d'exécution <kbd>Windows</kbd>+<kbd>R</kbd>.
1. Exécuter : `gpedit.msc`
1. Activer : `Computer Configuration/Administrative Templates/Windows Components/Remote Desktop Services/Remote Desktop Session Host/Remote Session Environment/RemoteFX for Windows Server 2008 R2/Configure RemoteFX`
1. Activer : `Computer Configuration/Administrative Templates/Windows Components/Remote Desktop Services/Remote Desktop Session Host/Remote Session Environment/Enable RemoteFX encoding for RemoteFX clients designed for Windows Server 2008 R2 SP1`
1. Activer : `Computer Configuration/Administrative Templates/Windows Components/Remote Desktop Services/Remote Desktop Session Host/Remote Session Environment/Limit maximum color depth`
1. Redémarrer la machine distante.
