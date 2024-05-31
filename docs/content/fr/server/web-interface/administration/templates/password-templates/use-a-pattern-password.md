---
eleventyComputed:
  title: Utiliser un mot de passe schéma
  description: Lors de la sélection du mode Utiliser un schéma pour les Modèles de mot de passe et le Générateur de mot de passe, les clés suivantes sont les schémas pris en charge.
---
Lors de la sélection du mode ***Utiliser un schéma*** pour les ***Modèles de mot de passe*** et le ***Générateur de mot de passe***, les clés suivantes sont les schémas pris en charge.

| DESCRIPTION                       | CLÉ  | EXEMPLE                                                          |
|-----------------------------------|------|------------------------------------------------------------------|
| Alphanumérique en minuscules      | a    | abcdefghijklmnopqrstuvwxyz 0123456789                            |
| Alphanumérique mixte              | A    | ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789 |
| Parenthèse                        | b    | ()[]{}<>                                                         |
| Consonne en minuscules            | c    | bcdfghjklmnpqrstvwxyz                                            |
| Consonne mixte                    | C    | BCDFGHJKLMNPQRSTVWXYZ bcdfghjklmnpqrstvwxyz                      |
| Chiffre                           | d    | 0123456789                                                       |
| Caractère hexadécimal en minuscules | h    | 0123456789 abcdef                                                |
| Caractère hexadécimal en majuscules | H    | 0123456789 ABCDEF                                                |
| Lettre en minuscules              | l    | abcdefghijklmnopqrstuvwxyz                                       |
| Lettre mixte                      | L    | ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz            |
| Ponctuation                       | p    | ,.;:                                                             |
| Caractère spécial imprimable 7 bits | s    | !"#$%&'()*+,-./:;<=>?[\\]^_{\|}~                                 |
| ASCII imprimable 7 bits           | S    | A-Z, a-z, 0-9, !"#$%&'()*+,-./:;<=>?[\\]^_{\|}~                  |
| Lettre en majuscules              | u    | ABCDEFGHIJKLMNOPQRSTUVWXYZ                                       |
| Alphanumérique en majuscules      | U    | ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789                            |
| Voyelle en minuscules             | v    | aeiou                                                            |
| Voyelle mixte                     | V    | AEIOU aeiou                                                      |
| ANSI élevé                        | x    | De '~' à U255 (à l'exception de U255)                            |
| Consonne en majuscules            | z    | BCDFGHJKLMNPQRSTVWXYZ                                            |
| Voyelle en majuscules             | Z    | AEIOU                                                            |
| Échappement (Caractère fixe)      | \    | Utiliser le caractère suivant tel quel                          |
| Échappement (Répétition)          | \{n} | Répéter le caractère précédent n fois                           |
| Caractère personnalisé            | [x]  | Définir une séquence de caractères personnalisée                 |
