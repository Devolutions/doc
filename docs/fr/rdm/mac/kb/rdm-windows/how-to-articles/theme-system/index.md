---
eleventyComputed:
  title: Système de thèmes
---
Le ***système de thèmes*** de {{ fr.RDM }} est encore à ses débuts et évoluera dans les futures versions. Vous pouvez remplacer la plupart des images utilisées par {{ fr.RDM }} simplement en fournissant une image dans le dossier ***Thème***, la seule exigence est que le fichier utilise un nom spécifique. La plupart des images viennent par paires, une petite et une grande. Vous devez remplacer les deux pour être cohérent.

## Emplacement du dossier

Le dossier ***Thème*** se trouve dans votre [dossier de configuration](/rdm/windows/installation/client/configuration-file-location/) local, sous le dossier ***Images***.

## Spécifications des fichiers d'image

### Icône de plateau

Il doit s'agir d'un fichier [*.ico](http://en.wikipedia.org/wiki/ICO_%28file_format%29) standard contenant au moins une image de 16*16. Le nom doit être Trayicon.ico

### Petites images

Fichier Png, 16*16 pixels.

### Grandes images

Fichier Png, 32*32 pixels.

## Noms des fichiers d'image

Le nom du fichier est standardisé comme suit : {EntryType}{Size}.png

Par exemple, pour le type ***Dossier***, les noms des images sont : GroupFolderLarge.png et GroupFolderSmall.png Un autre exemple est pour les sessions RDP, leur nom est RDPConfigured, résultant en SessionRDPConfiguredLarge.png et SessionRDPConfiguredSmall.png.

Veuillez consulter [Liste des images](/rdm/mac/kb/rdm-windows/how-to-articles/theme-system/image-list/) pour voir une liste de la plupart des images.
