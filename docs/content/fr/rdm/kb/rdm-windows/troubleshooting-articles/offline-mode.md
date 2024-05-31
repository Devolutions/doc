---
eleventyComputed:
  title: Mode Hors Ligne
---
## Problème 1
Des entrées manquantes ou supprimées apparaissent toujours.
### Solution
Votre cache hors ligne peut ne pas être synchronisé avec le contenu de la source de données. Appuyer sur <kbd>Ctrl</kbd>+<kbd>F5</kbd> pour actualiser le cache local.
## Problème 2
System.data.sqlite.sqliteexception (0x80004005) : le fichier est chiffré ou n'est pas une base de données.
### Solution
1. Supprimer manuellement le fichier hors ligne (offline.db).
1. Cliquer sur ***Fichier – Mes Informations de Source de Données***.
1. Passer la souris sur la taille du fichier. Cela vous donnera le chemin complet du fichier, quelque chose comme : **%LocalAppData%\Devolutions\RemoteDesktopManager\GUID-DatasourceID\offline.db**.
![!!KB2030](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2030.png)
1. Fermer {{ fr.RDM }}.
1. Supprimer le fichier offline.db.
1. Redémarrer {{ fr.RDM }}.

Cela forcera l'application à recréer le fichier hors ligne.
