---
eleventyComputed:
  title: Désinstallation
---
### Instructions 

{{ fr.RDM }} n'installe rien dans le répertoire système de Windows. Les seuls paramètres de registre créés concernent la fonctionnalité d'exécution automatique et le chemin d'installation, ce qui simplifie la désinstallation de {{ fr.RDM }}.  

Vous pouvez exécuter le programme de désinstallation s'il a été installé avec le fichier de configuration par défaut ou supprimer le dossier d'installation directement s'il a été installé à partir des fichiers binaires.  

Les fichiers de configuration d'application sont enregistrés par défaut dans **%LocalAppData%\Devolutions\RemoteDesktopManager** ou **%AppData%\Devolutions\RemoteDesktopManager**. Si vous le souhaitez, il est possible de supprimer ce dossier pour une désinstallation complète. 

{% snippet, "badgeInfo" %} 
Veuillez noter que si vous utilisez une source de données locale comme [SQLite](/fr/rdm/windows/data-sources/data-sources-types/sqlite/) ou [XML](/fr/rdm/windows/data-sources/data-sources-types/xml/), votre source de données peut être enregistrée dans le dossier de configuration. Effectuez une sauvegarde de la source de données avant la suppression du dossier. 
{% endsnippet %}
 

