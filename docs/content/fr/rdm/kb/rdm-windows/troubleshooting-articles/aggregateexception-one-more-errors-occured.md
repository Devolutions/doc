---
eleventyComputed:
  title: AggregateException - une ou plusieurs erreurs se sont produites
---
Lors d'une connexion au {{ fr.DC }}, {{ fr.RDM }} retourne une erreur commençant par le texte suivant :

AggregateException - Une ou plusieurs erreurs se sont produites.

at Devolutions.RemoteDesktopManager.RDMOProxy.RDMOWebApiClient.Login(String datasourceID, Boolean forcePromptLucid, String source)

Selon la cause exacte de l'erreur, plusieurs options peuvent résoudre ce problème.
## Solution 1
1. Aller à ***Fichier – Paramètres – Application – Proxy (Web) – Paramètres du Proxy***.
1. Si vous n'avez pas de Proxy personnalisé configuré, essayer l'option ***Par défaut du système***. Si cela ne fonctionne pas, essayer à nouveau avec ***Aucun Proxy***.
1. Si vous êtes dans un environnement d'équipe, nous recommandons de consulter votre Administrateur pour savoir si vous devriez utiliser un Proxy personnalisé spécifique.
## Solution 2
Si vous utilisez les sources de données {{ fr.DOD }} ou si vous utilisez la sauvegarde {{ fr.DC }}, cette solution pourrait ne pas aider, car une connexion avec le {{ fr.DC }} est nécessaire pour les utiliser.

1. Aller à ***Fichier – {{ fr.DA }}***.
1. Décocher l'option ***Connexion automatique au démarrage***.
## Solution 3
1. Aller à ***Fichier – Paramètres – Sécurité*** et descendre en bas de la page.
1. Sous ***Sécurité des certificats***, activer ***Ignorer les erreurs de certificat d'application*** et désactiver ***Vérifier la révocation du certificat serveur***.
