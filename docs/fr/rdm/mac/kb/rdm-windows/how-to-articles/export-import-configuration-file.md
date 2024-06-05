---
eleventyComputed:
  title: Exporter et importer le fichier de configuration
---
{% youtube 'DFsRwLKWX7M' %}

La configuration de l'application peut être exportée pour répliquer la configuration dans d'autres instances de {{ fr.RDM }}.
{% snippet, "shieldWarning" %}
Les configurations de source de données que vous sélectionnez seront exportées avec les identifiants tels qu'ils sont actuellement configurés. Si vous créez un fichier pour configurer un nouvel employé, vous devez faire attention à ne pas divulguer vos identifiants.

Utiliser le [{{ fr.CIS }}](/rdm/windows/installation/client/custom-installer-service/) est recommandé dans ce cas.
{% endsnippet %}

1. Aller à ***Fichier – Paramètres – Options d'exportation***.
![!!KB4260](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4260.png)
1. Valider les paramètres et les sources de données que vous souhaitez inclure et cliquer sur ***Exporter***.
![!!KB4838](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4838.png)
1. Sauvegarder le fichier **RemoteDesktopManager.cfg** sur votre ordinateur.
1. Pour importer le fichier de configuration, aller à ***Fichier – Paramètres – Options d'importation***.
1. Sélectionner ***Importer à partir d'un fichier différent*** et sélectionner le fichier **RemoteDesktopManager.cfg** exporté que vous avez créé.
1. Sélectionner ***Utiliser le fichier de configuration sélectionné comme nouveau*** et cliquer sur ***Appliquer***.
1. Redémarrer {{ fr.RDM }}.
