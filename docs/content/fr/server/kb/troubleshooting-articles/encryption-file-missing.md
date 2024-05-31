---
eleventyComputed:
  title: Erreur de fichier de chiffrement manquant
---
Après la création d'une instance {{ fr.DVLS }}, lors de la tentative d'ouverture de la page web, l'erreur suivante est affichée dans le navigateur.
![Le fichier de chiffrement est manquant, veuillez contacter votre administrateur erreur](https://cdnweb.devolutions.net/docs/DVLS4017_2024_1.png)

## Solution

Ce problème survient normalement lorsque l'option de Sécurité Intégrée est définie dans l'onglet Base de données des paramètres de {{ fr.DVLS }}.

Pour résoudre le problème, le compte de service du pool d'applications IIS de {{ fr.DVLS }} et le compte de service du DevolutionsSchedulerService dans les services doivent avoir l'autorisation de lecture sur le fichier **encryption.config** qui se trouve dans le sous-dossier App_Data du dossier d'application web de {{ fr.DVLS }}.

Pour naviguer vers le dossier d'application web, vous pouvez utiliser le bouton ***Explorer*** depuis la {{ fr.DVLSCONSOLE }}.
![Bouton Explorer](https://cdnweb.devolutions.net/docs/DVLSCONSOLE4006_2024_1.png)
![Explorateur de fichiers Windows](https://cdnweb.devolutions.net/docs/DVLSCONSOLE4007_2024_1.png)
