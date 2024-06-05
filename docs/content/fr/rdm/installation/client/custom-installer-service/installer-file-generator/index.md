---
eleventyComputed:
  title: Générateur de fichier d'installation
  description: Lors de la création d'un paquet d'installation avec le {{ fr.CIM }}, un fichier d'installation est nécessaire pour déterminer ce à inclure dans la configuration d'installation.
---
Lors de la création d'un paquet d'installation avec le ***{{ fr.CIM }}***, un fichier d'installation est nécessaire pour déterminer ce à inclure dans la configuration d'installation. Créer un fichier d'installation pour chaque nouvelle version est risqué puisque vous devez répéter le processus manuellement à chaque fois. Au lieu de cela, il est possible de créer la configuration une fois, sauvegarder le fichier résultant (*.rdi), et le réutiliser autant de fois que nécessaire.

### Créer un fichier d'installation

1. Dans {{ fr.RDM }}, cliquer sur ***Fichier – {{ fr.DA }} – Générateur de fichier d'installation***.
![Fichier – {{ fr.DA }} – Générateur de fichier d'installation](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11248.png)
1. Dans la section ***Divers***, cocher/décocher les options selon vos besoins et sélectionner les sources de données à inclure. Consulter [Sélection d'option](/rdm/windows/installation/client/custom-installer-service/installer-file-generator/option-selection/) pour obtenir de l'aide avec ce processus.
![Générateur de fichier d'installation](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11249.png)
1. Cliquer sur ***Générer***, puis sauvegarder le fichier ***Package.rdi*** sur votre ordinateur.

Une boîte de dialogue d'information s'affiche pour vous informer que le fichier a été généré avec succès.
![Dialogue d'information de génération réussie](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10723.png)

Ce fichier peut être utilisé dans le ***{{ fr.CIM }}*** lors de la création d'un paquet d'installation.

Pour plus d'informations sur comment créer un paquet {{ fr.CI }}, veuillez consulter [{{ fr.CIM }}](/rdm/windows/installation/client/custom-installer-service/custom-installer-manager/).
