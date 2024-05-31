---
eleventyComputed:
  title: Perte de l'A2F configurée sur la source de données
---
L'utilisateur a perdu son téléphone qui contient l'A2F pour sa source de données.
## Solution  
{% snippet, "badgeCaution" %}
Cela ne fonctionnera pas pour un mot de passe maître perdu sur une source de données locale.
{% endsnippet %}  
{% snippet, "badgeCaution" %}
Veuillez vous référer à [Perte de l'A2F configurée sur {{ fr.DVLS }}](/rdm/mac/kb/rdm-windows/troubleshooting-articles/2fa-server-lost/) si vous êtes un utilisateur de {{ fr.DVLS }} ayant perdu son A2F.
{% endsnippet %}  
{% snippet, "badgeCaution" %}
Veuillez vous référer à [A2F configurée et perdue sur {{ fr.DA }} ou ({{ fr.DOD }})](/rdm/mac/kb/rdm-windows/troubleshooting-articles/2fa-lost-devolutions-account-dod/) si vous êtes un utilisateur de {{ fr.DOD }} ou de {{ fr.DA }} ayant perdu son A2F.
{% endsnippet %}  

1. Fermer {{ fr.RDM }}.
1. Trouver ces deux fichiers et les supprimer :
    * RemoteDesktopManager.stv
    * RemoteDesktopManager.enc  
{% snippet, "badgeInfo" %}
Si l'application a été installée par défaut, vous pouvez localiser le fichier :

Pour l'édition Team : **%localappdata%\Devolutions\RemoteDesktopManager**  
Pour l'édition Gratuite : **%localappdata%\Devolutions\RemoteDesktopManager\Free**  
{% endsnippet %}
