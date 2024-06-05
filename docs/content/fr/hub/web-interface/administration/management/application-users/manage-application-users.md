---
eleventyComputed:
  title: Gérer les identités d'application
  description: Créer, gérer et supprimer des identités d'application dans Administration – Identités d'application.
---
Créer, gérer et supprimer des identités d'application dans ***Administration – Identités d'application***.

## Créer une identité d'application
Suivre les étapes ci-dessous pour créer une nouvelle identité d'application. Une fois votre identité d'application créée, [leur attribuer les bonnes permissions](#assign-permissions).
1. Dans ***Administration – Identité d'application***, cliquer ***Ajouter Identité d'Application*** en haut à droite.
![Ajouter Identité d'Application](https://cdnweb.devolutions.net/docs/HUBB2357_2024_1.png)
1. Nommer l'identité d'application puis cliquer ***Ajouter***. Dans l'exemple ci-dessous, nous l'avons nommée "PowerShell 1".
![Nommer l'identité d'application](https://cdnweb.devolutions.net/docs/HUBB2358_2024_1.png)
1. Copier le ***Secret d'Application*** et la ***Clé d'Application***, ou télécharger le fichier PDF fourni. Sauvegarder les informations ou le fichier dans un endroit sûr.
![Secret d'application et clé d'application](https://cdnweb.devolutions.net/docs/HUBB2359_2024_1.png)
1. Fermer la fenêtre.

Par défaut, une identité d'application nouvellement créée n'a aucune permission. Voir la section suivante pour attribuer des permissions.

## Attribuer des permissions
Selon les actions que cette identité d'application doit effectuer, il faut lui attribuer les droits appropriés :
* [Attribuer des permissions système à l'identité d'application](/hub/web-interface/administration/configuration-security/system-permissions/)
* [Attribuer des permissions {{ fr.VLT }} à l'identité d'application](/hub/web-interface/administration/management/vaults/create-manage-vaults/)

Lorsque les permissions ont été attribuées, vous êtes prêt à accéder à {{ fr.DHUB }} avec le [module {{ fr.PS }}](/powershell/hub-powershell/powershell-module/) et votre identité d'application.
