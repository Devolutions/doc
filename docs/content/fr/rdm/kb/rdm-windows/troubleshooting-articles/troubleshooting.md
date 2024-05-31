---
eleventyComputed:
  title: Dépannage
---
## Problème 1
Mes lecteurs réseau mappés ne sont pas disponibles lorsque j'utilise l'exécution en tant qu'administrateur pour lancer {{ fr.RDM }}.

### Solution
Cela est dû au Contrôle d'Accès Utilisateur (UAC), une couche de sécurité intégrée de Windows. Effectivement, vous êtes considéré comme un utilisateur différent avec des préférences différentes, les lecteurs réseau mappés étant une de ces préférences.

Pour avoir les mêmes lecteurs mappés, vous avez quelques options :

1. Utiliser une invite de commande élevée pour recréer les mêmes lecteurs mappés en utilisant la commande NET USE {NOMDULECTEUR} {NOMPARTAGE} /PERSISTENT:YES.
1. Modifier le registre pour lier les connexions entre les comptes, voir [https://support.microsoft.com/en-us/kb/937624](https://support.microsoft.com/en-us/kb/937624)

## Problème 2
Impossible de charger le fichier ou l'assemblage "system.enterpriseservices.wrapper.dll ou l'une de ses dépendances". Le système ne peut pas trouver le chemin spécifié.

### Solution
Cette erreur est due à une installation corrompue du Framework .NET de Microsoft. Veuillez consulter [Fichier Système Corrompu](/rdm/kb/rdm-windows/troubleshooting-articles/net-corrupted-system-file/) pour plus d'informations sur comment résoudre ce problème.

## Problème 3
L'assemblage en mode mixte est construit contre la version 2.0.50727 du runtime.

Cela ne devrait se produire que sur les machines avec des environnements de développement ou lorsque le Framework .NET a subi plusieurs installations/désinstallations.

### Solution
Dans **RemoteDesktopManager.exe.cfg**, qui se trouve dans le dossier d'installation, localisez l'élément de démarrage et ajoutez l'attribut useLegacyV2RuntimeActivationPolicy.

Le résultat final devrait ressembler à :

`<startup useLegacyV2RuntimeActivationPolicy="true">`

## Problème 4
Impossible de coller dans n'importe quel champ de {{ fr.RDM }}.

### Solution
Webroot SecureAnywhere AntiVirus peut causer le problème à cause du module de Protection d'Identité. Définissez **remotedesktopmanager.exe** sur ***Autoriser*** et cela vous permettra de nouveau de coller dans l'application.

## Problème 5
Toutes mes sessions s'ouvrent en mode intégré et/ou externe.

### Solution
Cela peut être modifié en allant dans ***Fichier – Paramètres – Interface Utilisateur – {{ fr.NPANE }} – Action de connexion par défaut***.
![!!KB4080](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4080.png)
