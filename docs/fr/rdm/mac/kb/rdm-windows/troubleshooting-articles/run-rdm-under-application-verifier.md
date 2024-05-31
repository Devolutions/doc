---
eleventyComputed:
  title: Exécuter {{ fr.RDM }} sous le vérificateur d'application
  description: Le protocole Microsoft Remote Desktop (MSRDP) charge beaucoup de codes systèmes et tiers lorsqu'il fonctionne ; et un pilote ou module défectueux ou mal comporté peut provoquer des plantages et d'autres comportements étranges à l'intérieur du client des services de terminal Microsoft (MSTSC). Lorsque cela se produit dans {{ fr.RDM }}, cela provoque le plantage de l'application.
---
Le protocole Microsoft Remote Desktop (MSRDP) charge beaucoup de codes systèmes et tiers lorsqu'il fonctionne ; et un pilote ou module défectueux ou mal comporté peut provoquer des plantages et d'autres comportements étranges à l'intérieur du client des services de terminal Microsoft (MSTSC). Lorsque cela se produit dans {{ fr.RDM }}, cela provoque le plantage de l'application.

## Solution

Certains problèmes peuvent être trouvés en utilisant le [Vérificateur d'application](https://learn.microsoft.com/en-us/windows-hardware/drivers/devtest/application-verifier) de Microsoft, qui est "un outil de vérification d'exécution pour le code non géré qui aide à trouver des erreurs de programmation subtiles, des problèmes de sécurité et des problèmes de privilèges de compte d'utilisateur limités qui peuvent être difficiles à identifier avec les techniques de test d'application normales".

### Installer et configurer le Vérificateur d'application

Suivre les instructions ci-dessous pour obtenir les informations nécessaires à envoyer à notre équipe de support.

1. Télécharger l'[installateur du Kit de développement logiciel (SDK) Windows](https://developer.microsoft.com/en-us/windows/downloads/windows-sdk/).
1. Exécuter l'installateur. Lorsqu'on vous demande de sélectionner les fonctionnalités à installer, cocher le ***Vérificateur d'application pour Windows***, puis continuer le processus d'installation.
![Vérificateur d'application pour Windows](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2248.png)
1. Une fois l'installation terminée, ouvrir le Vérificateur d'application.
1. Aller à ***Fichier – Ajouter une application*** ou utiliser le raccourci <kbd>Ctrl</kbd>+<kbd>A</kbd>.
![Fichier – Ajouter une application](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2249.png)
1. Dans le sélecteur de fichiers, sélectionner l'application {{ fr.RDM }} (**C:\Program Files\Devolutions\Remote Desktop Manager\RemoteDesktopManager.exe**). Elle sera ajoutée à la liste ***Applications*** sur la gauche.
![RemoteDesktopManager.exe](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2250.png)
1. Sélectionner **RemoteDesktopManager.exe** dans la liste ***Applications***, puis sous ***Tests***, s'assurer que toutes les cases sous ***Basiques*** sont sélectionnées.
![Basiques](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2251.png)
1. Cliquer ***Enregistrer***. Vous pouvez fermer le Vérificateur d'application après la configuration.

### Informations à envoyer à notre équipe de support

L'utilisateur qui rencontre les problèmes peut maintenant exécuter {{ fr.RDM }} et l'utiliser comme d'habitude jusqu'à ce qu'il rencontre un plantage. Une fois cela arrivé, envoyer à [service@devolutions.net](mailto:service@devolutions.net) ces deux informations :
* Le plantage s'est-il produit "comme d'habitude" ou la boîte de dialogue était-elle différente de la normale ? Il est possible que le système signale le plantage d'une manière différente (par exemple, en demandant à attacher un débogueur).
* De retour dans le Vérificateur d'application, aller à ***Vue – Journaux***. Trouver le journal correspondant à l'exécution plantée, le sélectionner, puis l'enregistrer sur votre ordinateur pour l'envoyer plus tard à notre équipe de support. Si applicable, envoyer également d'autres journaux contenant des erreurs.
