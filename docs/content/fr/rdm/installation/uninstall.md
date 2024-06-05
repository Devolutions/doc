---
eleventyComputed:
  title: Désinstaller
  description: Vous pouvez exécuter le programme de désinstallation s'il a été installé avec le fichier de configuration par défaut, ou supprimer directement le dossier d'installation s'il a été installé à partir des binaires.
---
Vous pouvez exécuter le programme de désinstallation s'il a été installé avec le fichier de configuration par défaut, ou supprimer directement le dossier d'installation s'il a été installé à partir des binaires.

{{ fr.RDM }} n'installe rien dans le répertoire système de Windows. Les seuls paramètres de registre créés sont pour la fonctionnalité d'auto-démarrage et le chemin d'installation. En conséquence, cela simplifie la désinstallation de {{ fr.RDM }}.

Les fichiers de configuration de l'application sont enregistrés dans **%LocalAppData%\Devolutions\RemoteDesktopManager** ou **%AppData%\Devolutions\RemoteDesktopManager** par défaut. Si désiré, il est possible de supprimer ce dossier pour une désinstallation complète.

{% snippet, "badgeInfo" %} 
Si vous utilisez une source de données locale comme [SQLite](/rdm/windows/data-sources/data-sources-types/sqlite/) ou [XML](/rdm/windows/data-sources/data-sources-types/xml/), votre source de données peut être enregistrée dans le dossier de configuration. Effectuer une sauvegarde de la source de données avant la suppression du dossier. 
{% endsnippet %}

## Désinstaller et réinstaller {{ fr.RDM }} sans le fichier CFG

Le fichier CFG n'est pas supprimé lorsque {{ fr.RDM }} est réinstallé ou mis à jour. Cela est prévu pour éviter de supprimer la configuration réalisée par les utilisateurs. Cependant, si le fichier CFG est supprimé manuellement et que {{ fr.RDM }} est redémarré, il vérifiera l'emplacement par défaut du fichier **connections.db** (qui est le fichier contenant les données de la source de données locale) pour voir si la création d'une source de données locale est nécessaire. Comme une source de données locale est nécessaire pour que {{ fr.RDM }} démarre, il ***chargera le fichier connections.db précédent*** si l'emplacement par défaut n'est pas modifié.

Pour chiffrer le contenu d'une source de données locale, une clé maîtresse doit être définie. Il ne sera pas possible pour quiconque n'ayant pas accès à la clé maîtresse de voir les données contenues dans le fichier **connections.db**.

{% snippet, "badgeHelp" %} 
Pour configurer une clé maîtresse, veuillez vous référer à [Gérer la clé maîtresse](/rdm/windows/commands/file/change-master-key/).
{% endsnippet %}
