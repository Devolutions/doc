---
eleventyComputed:
  title: Réinstaller {{ fr.RDM }}
---
{% snippet, "badgeNotice" %}
Avant de réinstaller {{ fr.RDM }}, une sauvegarde sera nécessaire.
{% endsnippet %}

Consulter [Aperçu de l'installation](/rdm/windows/installation/client/) pour les détails sur l'installation de {{ fr.RDM }}.

## Paramètres
Après que {{ fr.RDM }} ait été réinstallé sur votre ordinateur, vous devez copier vos fichiers **RemoteDesktopManager.cfg**, **RemoteDesktopManager.enc**, et **RemoteDesktopManager.stv** (que vous aviez sauvegardés) dans le dossier **%LocalAppData%\Devolutions\RemoteDesktopManager**. Ceci est le chemin par défaut. Si vous n'avez pas installé avec les paramètres par défaut, veuillez consulter [Emplacement du fichier de configuration](/rdm/windows/installation/client/configuration-file-location/) pour des instructions sur la localisation de votre dossier de configuration.

## Données
Si vous avez déplacé la source de données basée sur fichier vers un autre chemin relatif, vous devrez éditer les définitions de source de données pour corriger les chemins.
