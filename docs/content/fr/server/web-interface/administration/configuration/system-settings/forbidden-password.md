---
eleventyComputed:
  title: Mot de passe interdit
---
***Mots de passe interdits*** permettent de créer une liste de mots de passe mis en liste noire pour en interdire l'utilisation dans l'application. Une fois défini dans cette liste, le mot de passe ne peut plus être utilisé dans la source de données {{ fr.DVLS }}.
![Administration – Paramètres système – Mot de passe interdit](https://cdnweb.devolutions.net/docs/docs_en_server_clip10378.png)

| Option            | Description                                                                                                 |
|-------------------|-------------------------------------------------------------------------------------------------------------|
| Sensible à la casse | Rendre le mode de vérification sensible à la casse.                                                         |
| Mode de vérification | Sélectionner le mode de vérification entre :<br>Contient : le mot de passe sera interdit s'il contient un mot de la liste noire.<br>Correspondance exacte : le mot de passe sera interdit s'il correspond à un mot de la liste noire. |
| Importer            | Importer une liste depuis votre ordinateur (*.pwd ou .txt).                                                 |
| Exporter            | Exporter votre liste de mots de passe interdits. Par défaut, la liste sera exportée dans un format de fichier de mot de passe (.pwd). |
