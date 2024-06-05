---
eleventyComputed:
  title: IOException - le processus ne peut pas accéder au fichier
---
IOException - Le processus ne peut pas accéder au fichier 'C:\Users\*User*\AppData\Local\Temp\RDM\record.mp4' car il est utilisé par un autre processus.

## Solution

Cette erreur peut être évitée en ajoutant une variable au nom de votre enregistrement. De cette manière, {{ fr.RDM }} n'aura pas de problèmes pour essayer de réécrire sur un enregistrement déjà existant. En général, nous recommandons d'utiliser des variables telles que $DATE_TEXT$ ou $TIME_TEXT$ pour identifier l'enregistrement.

Par exemple, si vous changez votre chemin pour :

**C:\Users\*User*\AppData\Local\Temp\RDM\record-$DATE_TEXT$-$TIME-TEXT$.mp4**

Le nom de votre enregistrement ressemblerait à quelque chose comme "record-2202020-100257.mp4". Cela garantira que chaque enregistrement ait un nom unique.
