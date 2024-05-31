---
eleventyComputed:
  title: Perte du paramètre A2F sur l'application {{ fr.RDM }}
---
Cette solution s'applique si vous avez configuré une A2F ou un mot de passe d'application sur votre application {{ fr.RDM }} dans ***Fichier – Paramètres – Sécurité*** et si vous avez perdu votre téléphone ou si vous vous êtes exclu de l'application.
## Solution
1. Fermer {{ fr.RDM }}.
1. Trouver votre fichier de configuration **RemoteDesktopManager.cfg** et le renommer "**RemoteDesktopManager.old**". 
{% snippet, "badgeInfo" %}
Si l'application a été installée par défaut, vous pouvez localiser le fichier :  

Pour l'Édition Équipe : **%localappdata%\Devolutions\RemoteDesktopManager**  

Pour l'Édition Gratuite : **%localappdata%\Devolutions\RemoteDesktopManager\Free**  
{% endsnippet %}  

3. Lancer {{ fr.RDM }}.
