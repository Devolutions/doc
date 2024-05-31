---
eleventyComputed:
  title: "{{ fr.RDMMAC }} RDP ne peut pas copier de fichier/image"
---
Impossible de copier des fichiers ou des images de l'ordinateur local vers la session à distance.

La copie de fichiers entre un Mac et une session à distance Windows n'est pas prise en charge. Seul le texte peut être transféré via copier/coller.

## Solution 1

Mettre à jour votre {{ fr.RDMMAC }} vers la version 2022.1.13 ou supérieure.

## Solution 2

Activer la redirection de votre disque dur ou du dossier.

1. Ouvrir les ***Propriétés*** de l'entrée RDP.
1. Cliquer sur l'onglet ***Ressources locales***.
1. Activer ***Disques durs*** et sélectionner si vous souhaitez rediriger tous les disques durs, vers le dossier personnel ou vers un dossier spécifique.
![!!KB4038](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4038.png)