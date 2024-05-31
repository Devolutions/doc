---
eleventyComputed:
  title: Options des identifiants d'entrée
---
Plusieurs options sont disponibles pour utiliser des ***Identifiants*** dans les entrées de {{ fr.RDM }}.
![Identifiants](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2131.png)

| OPTION                  | DESCRIPTION                                                                              |
|-------------------------|------------------------------------------------------------------------------------------|
| Personnalisé            | Cette option permet de saisir des identifiants personnalisés dans la section ***Général*** de l'entrée |
| Lié ({{ fr.VLT }})      | Lier une entrée pour utiliser une entrée ***Identifiant*** existante dans le même {{ fr.VLT }}         |
| Hérité                  | Les identifiants utilisés par cette entrée seront hérités et définis en remontant l'arbre de navigation jusqu'à ce qu'il ait accès à un ensemble d'identifiants dans un dossier parent |
| Mes identifiants personnels | Utilisera les identifiants définis dans la fonctionnalité ***Mes identifiants personnels***. Cela permet de centraliser un identifiant pour remplacer ou émuler ceux d'une session Windows |
| Aucun                   | Aucun identifiant ne sera autorisé à être sauvegardé ou lié à cette entrée                       |
| Trouver par nom ({{ fr.UVLT }}) | Recherchera dans le ***{{ fr.UVLT }}*** le nom spécifié. Si la case est laissée vide, lors du lancement, une ***Liste d'identifiants*** s'ouvrira avec toutes les entrées ***Identifiants*** disponibles depuis le ***{{ fr.UVLT }}***. |
| Compte privilégié       | Utilisera un compte privilégié préexistant de la même source de données                       |
| Mon compte privilégié   | Utilisera le combo nom d'utilisateur/mot de passe choisi. Doit d'abord être configuré dans ***Fichier*** – ***Paramètres de mon compte*** – ***Mes paramètres par défaut*** – ***Mon compte privilégié***. |
