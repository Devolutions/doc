---
eleventyComputed:
  title: "{{ fr.RDMMAC }} Mode hors ligne"
---
Le disque de base de données est mal formé, essayer de supprimer le fichier : /USERS/XXX/LIBRARY/APPLICATION SUPPORT/COM.DEVOLUTIONS.REMOTEDESKTOPMANAGER/GUID-DATASOURCEID/OFFLINE.DB

## Solution

Le fichier hors ligne (offline.db) doit être supprimé manuellement.

1. Cliquer sur ***Fichier – Sources de données*** puis sur ***Modifier*** pour votre source de données actuelle. En bas à gauche, vous récupérerez l'ID de la source de données.
![ID de la Source de Données](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4001.png)
1. Fermer {{ fr.RDMMAC }}.
1. Ouvrir le dossier ***Bibliothèque*** en cliquant sur le menu ***Aller***, appuyer et maintenir la touche Option sur votre clavier et sélectionner ***Bibliothèque***.
1. Suivre le chemin ***Application Support/com.devolutions.remotedesktopmanager/GUID-DatasourceID*** et supprimer le fichier ***offline.db***.
1. Redémarrer {{ fr.RDMMAC }}.

L'application recréera le fichier hors ligne.
