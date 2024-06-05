---
eleventyComputed:
  title: Analyseur de sécurité des entrées
  description: L'Analyseur de Sécurité des Entrées suit un ensemble de règles pour déterminer la force du mot de passe avec un score de 0 à 100. Il existe deux catégories de règles.
---
{% snippet, "badgeInfo" %}
Les informations dans ce sujet expliquent comment fonctionne le mode "Legacy" de l'analyse de mot de passe. Le mode peut être changé dans les Paramètres Système pour ZXCVBN. Le mode "Legacy" n'est pas le mode par défaut.
{% endsnippet %}

L'***Analyseur de Sécurité des Entrées*** évalue la force des mots de passe stockés dans la source de données.

Un contrôle de force de mot de passe est également affiché sous la plupart des champs de mot de passe des entrées.
![!!clip3448](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip3448.png)

L'***Analyseur de Sécurité des Entrées*** suit un ensemble de règles pour déterminer la force du mot de passe avec un score de 0 à 100. Il existe deux catégories de règles.

### Renforcement

Ce sont les règles qui rendent les mots de passe plus forts :

* La longueur du mot de passe
* Le nombre de lettres majuscules (A-Z)
* Le nombre de lettres minuscules (a-z)
* Le nombre de chiffres (0-9)
* Le nombre de symboles (!, @, #, $, etc.)
* Le nombre de chiffres ou de symboles au milieu du mot de passe
* Trois ou plus des règles ci-dessus sont respectées

Les exigences minimales pour un mot de passe Fort sont :

* Le mot de passe a au moins 5 caractères de long
* Le mot de passe contient des caractères majuscules et minuscules
* Le mot de passe contient des chiffres

### Affaiblissement

Ce sont les règles qui rendent les mots de passe plus faibles :

* Le mot de passe contient uniquement des lettres
* Le mot de passe contient uniquement des chiffres
* Le mot de passe a des caractères répétés
* Le mot de passe a des lettres majuscules consécutives (deux ou plus)
* Le mot de passe a des lettres minuscules consécutives (deux ou plus)
* Le mot de passe a des chiffres consécutifs (deux ou plus)
* Le mot de passe a des lettres séquentielles (ABCD, DCBA)
* Le mot de passe a des chiffres séquentiels (1234, 4321)

## Paramètres

![!!clip11340](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11340.png)

| OPTION                         | DESCRIPTION                                                                                                   |
|--------------------------------|---------------------------------------------------------------------------------------------------------------|
| Afficher toutes les entrées    | Vous montre toutes les entrées de votre session, y compris celles sans mot de passe.                          |
| Afficher l'analyse VPN         | Ajoute la colonne Hôte VPN.                                                                                   |
| Afficher le mot de passe compromis (pwned) | Montre si le mot de passe a été compromis. Un [mot de passe compromis](/rdm/kb/rdm-windows/how-to-articles/pwned-password-check/) est un mot de passe qui a été exposé dans des violations de données (c'est-à-dire, ils sont possédés/pwned par des hackers). |
| Modifier                       | Ouvre l'entrée actuelle pour la modifier.                                                                     |
| Mots de passe interdits        | Créez une liste de mots de passe interdits.                                                                   |
| Exporter les paramètres        | Exporte les paramètres de l'analyseur de mot de passe.                                                        |
