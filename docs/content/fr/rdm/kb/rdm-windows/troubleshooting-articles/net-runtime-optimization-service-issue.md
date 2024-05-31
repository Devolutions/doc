---
eleventyComputed:
  title: Problèmes de service d'optimisation d'exécution .NET
---
Certains utilisateurs rencontreront un problème sur Windows 7 avec {{ fr.RDM }} et recevront le message d'erreur suivant :

Service d'optimisation d'exécution .NET (clr_optimization_v4.0.30319_64) - 1>Échec de la compilation : C:\Program Files (x86)\Devolutions\Remote Desktop Manager Free\Embedded32.exe Code d'erreur = 0x80131f07
## Solution 1
Si possible, mettre à jour votre version de Windows 7. Microsoft 7 SP1 prend en charge .NET 4.8 mais la [Mise à jour de sécurité étendue (ESU)](https://docs.microsoft.com/en-us/troubleshoot/windows-client/windows-7-eos-faq/windows-7-extended-security-updates-faq) de Windows a pour date de fin janvier 2023.
## Solution 2
Utiliser le mode de compatibilité comme solution de contournement.

1. Faire un clic droit sur le raccourci {{ fr.RDM }}.
1. Sélectionner ***Propriétés*** dans le menu contextuel.
1. Cliquer sur l'onglet ***Compatibilité***.
1. Cocher ***Exécuter ce programme en mode de compatibilité pour***.
1. Sélectionner la version de Windows dans le menu déroulant.
1. Cliquer sur ***OK***.
![!!KB4922](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4922.png)
