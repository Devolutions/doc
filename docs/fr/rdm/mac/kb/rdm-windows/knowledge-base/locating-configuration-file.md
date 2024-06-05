---
eleventyComputed:
  title: Localiser le fichier de configuration
  description: Localiser votre fichier de configuration {{ fr.RDM }}.
  keywords:
  - Fichier de configuration
---
Dans certains cas, l'équipe de Devolutions aura besoin de votre fichier de configuration pour aider à reproduire un problème particulier.
{% snippet, "shieldWarning" %}
Notez que si vous stockez des mots de passe pour vos sources de données et/ou votre {{ fr.DA }}, notre équipe de support sera capable de les déchiffrer. Si vous souhaitez envoyer une version assainie de votre configuration, veuillez consulter [Envoyer une copie assainie de votre fichier de configuration](/rdm/mac/kb/rdm-windows/how-to-articles/send-sanitized-configuration-file/).
{% endsnippet %}

## Trouver et envoyer votre fichier de configuration
### Méthode 1 - Utiliser {{ fr.RDM }}
1. Dans {{ fr.RDM }}, ouvrir ***Fichier – Paramètres – Avancé***.
1. En bas dans la section ***Informations***, vous verrez un lien hypertexte bleu, cliquez dessus pour ouvrir un Explorateur Windows avec le fichier approprié sélectionné.
### Méthode 2 - Utiliser le système de fichiers
{% snippet, "badgeInfo" %}
Notez que cet exemple suppose que {{ fr.RDM }} a été installé avec les paramètres par défaut.
{% endsnippet %}

1. Appuyer sur <kbd>Windows</kbd>+<kbd>R</kbd>.
1. Taper "**%LOCALAPPDATA%\Devolutions\RemoteDesktopManager**" dans la fenêtre ***Exécuter*** et appuyer sur ***OK***.
![Fenêtre Exécuter](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2028.png)
1. Dans le dossier, localiser le fichier **RemoteDesktopManager.cfg**.
![Fichier RemoteDesktopManager.cfg](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2029.png)
1. Veuillez nous envoyer le fichier de manière sécurisée en suivant les instructions dans [Envoyer un fichier de manière sécurisée à notre équipe](/rdm/kb/general-knowledge/securely-send-file/).
