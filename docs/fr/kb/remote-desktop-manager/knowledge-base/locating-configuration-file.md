---
eleventyComputed:
  title: Localisation du fichier de configuration
  description: Localisez votre fichier de configuration {{ fr.RDM }}.
  keywords:
  - Fichier de configuration
---
Dans certains cas, l'équipe de Devolutions aura besoin de votre fichier de configuration pour les aider à reproduire un problème particulier. 
{% snippet icon.shieldWarning %} 
Notez que si vous stockez vos mots de passe dans votre/vos source(s) de données et/ou votre {{ fr.DA }}, notre équipe de soutien technique sera en mesure de les décrypter. Si vous souhaitez envoyer une version expurgée de votre configuration, veuillez consulter la page [Envoyer une copie expurgée de votre fichier de configuration](/fr/kb/remote-desktop-manager/how-to-articles/send-sanitized-configuration-file/). 
{% endsnippet %}
 
## Trouver et envoyer votre fichier de configuration 
### Méthode 1 - Utiliser {{ fr.RDM }} 
1. Dans {{ fr.RDM }}, aller dans ***Fichier – Options – Avancé***. 
1. Au bas dans la section ***Informations***, vous verrez un lien hypertexte bleu. Cliquer sur ce lien pour ouvrir l'Explorateur Windows et sélectionner le fichier approprié. 
### Méthode 2 - Utiliser le système de fichiers 
{% snippet icon.badgeInfo %} 
Noter que cet exemple suppose que {{ fr.RDM }} a été installé avec les paramètres par défaut. 
{% endsnippet %}
 
1. Appuyer sur les touchent Windows+R. 
1. Dans la fenêtre ***Exécuter***, saisir **%LOCALAPPDATA%\Devolutions\RemoteDesktopManager** puis cliquer sur ***OK***. 
![Fenêtre Exécuter](https://webdevolutions.azureedge.net/docs/fr/kb/KB2031.png) 
1. Dans le dossier, localiser le fichier **RemoteDesktopManager.cfg**.  
![Fichier RemoteDesktopManager.cfg](https://webdevolutions.azureedge.net/docs/fr/kb/KB2032.png) 
1. Veuillez nous envoyer le fichier de façon sécuritaire en suivant les instructions de la rubrique [Envoi d’un fichier de manière sécurisée à notre équipe](/fr/kb/devolutions-customer-success/securely-send-file/). 

