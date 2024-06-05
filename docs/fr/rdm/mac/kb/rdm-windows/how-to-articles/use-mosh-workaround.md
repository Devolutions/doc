---
eleventyComputed:
  title: Utiliser Mosh dans {{ fr.RDM }} via WSL
  description: Mosh est très utile dans les scénarios de haute latence et de mauvaise connectivité, car il reconnectera la session lorsque la connexion reviendra à la normale, au lieu de la laisser tomber
  keywords: 
  - WSL
  - Mosh
  - USP
---
Mosh est un protocole de shell à distance basé sur UDP qui utilise l'infrastructure SSH pour l'authentification, le rendant sûr à utiliser. Il est très utile dans les scénarios de haute latence et de mauvaise connectivité, car il reconnectera la session lorsque la connexion reviendra à la normale, au lieu de la laisser tomber.
{% snippet, "badgeInfo" %}
Gardez à l'esprit que Mosh occupera environ 3 Go d'espace disque et téléchargera quelques centaines de Mo en utilisant la connexion internet, car c'est essentiellement un second système d'exploitation.
{% endsnippet %}  
{% snippet, "badgeInfo" %}
PowerShell devrait être exécuté en tant qu'administrateur pour cette solution.
{% endsnippet %}

## Étapes pour installer Mosh
1. Ouvrir PowerShell.
1. Installer WSL2 lui-même en utilisant la commande `wsl --install`.  
   {% snippet, "badgeInfo" %}
   WSL devrait maintenant être disponible dans le menu démarrer. Il est possible qu'un redémarrage soit nécessaire après cette installation.
   {% endsnippet %}
1. Installer Debian avec `wsl --install -d debian`.  
   {% snippet, "badgeInfo" %}
   Un assistant peut vous demander de créer un compte utilisateur pendant l'installation. Debian devrait maintenant être disponible dans le menu démarrer. Il est possible qu'un redémarrage soit nécessaire après cette installation.
   {% endsnippet %}
1. Télécharger toutes les mises à jour logicielles disponibles en utilisant `wsl sudo apt update`.
1. L'image WSL peut être obsolète et contenir des logiciels obsolètes. Entrer `wsl sudo apt full-upgrade`.
1. Installer mosh avec `wsl sudo apt install mosh`.

Une fois Mosh installé, il peut être utilisé avec la commande habituelle en ajoutant `wsl` devant (par exemple, `wsl mosh user@server.example.com`).

### Intégration de Mosh dans {{ fr.RDM }} (>=2023)
1. Créer une entrée ***Windows Terminal***, qui se trouve sous ***Nouvelle Entrée*** – ***Divers***.
1. S'assurer que l'option ***Affichage*** est réglée sur ***Incorporé (onglets)***.
1. Utiliser la commande mentionnée ci-dessus `wsl mosh user@server.example.com` dans le champ ***Exécuter***.
1. Cliquer sur ***OK*** pour enregistrer et fermer la fenêtre.  
   {% snippet, "badgeInfo" %}
   Les utilisateurs de Windows 11 devraient déjà avoir Windows Terminal préinstallé, mais les utilisateurs de Windows 10 peuvent avoir besoin de le télécharger via le [Microsoft Store](https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701).
   {% endsnippet %}

### Intégration de Mosh dans {{ fr.RDM }} (<=2022)
Bien qu'il soit recommandé de mettre à jour vers {{ fr.RDM }} 2023, cette méthode peut être utilisée pour tenter de faire fonctionner la solution de contournement avec {{ fr.RDM }} 2022.
1. Créer une entrée ***Ligne de Commande (Application Externe)***, qui se trouve sous ***Nouvelle Entrée*** – ***Divers***.
1. L'option ***Affichage*** doit être réglée sur ***Incorporé (onglets)***.
1. Entrer **C:\Program Files\WindowsApps\Microsoft.WindowsTerminal_1.16.10262.0_x64__8wekyb3d8bbwe\WindowsTerminal.exe** dans le champ ***Exécuter***.
1. Entrer **C:\Windows\system32\wsl.exe -d Debian mosh user@myserver.example.com** dans le champ ***Arguments***. Il est recommandé de vérifier les chemins pour s'assurer qu'ils sont exacts dans l'environnement particulier.
1. Cliquer sur ***OK*** pour enregistrer et fermer la fenêtre.  
{% snippet, "badgeInfo" %}
Il est possible qu'une mise à jour vers {{ fr.RDM }} 2023 soit nécessaire pour que cette intégration fonctionne correctement.
{% endsnippet %}

### Astuces et conseils
WSL2 ne prend pas en charge IPv6, seulement IPv4, mais il est possible de revenir à WSL1 en utilisant la commande suivante : `wsl --set-version Debian 1`.

{% snippet, "badgeInfo" %}
Utiliser Mosh via la couche WSL supplémentaire peut causer des limitations d'authentification ; cependant, il existe une [solution de contournement](https://forum.devolutions.net/topics/37256/support-for-mosh#175076).
{% endsnippet %}