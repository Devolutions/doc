---
eleventyComputed:
  title: Générateur de mots de passe
---
Le ***Générateur de mots de passe*** permet de créer des mots de passe aléatoires difficiles à interpréter ou à prédire, grâce à un mélange de lettres majuscules et minuscules, de chiffres et de symboles de ponctuation.

{% snippet, "badgeHelp" %}
Créer et forcer un [***Modèle de mot de passe***](/server/web-interface/administration/templates/password-templates/) pour suivre les politiques de sécurité de votre organisation.
{% endsnippet %}

![Générateur de mots de passe dans les propriétés d'entrée](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp4086.png)

### Générer des mots de passe avec le générateur de mots de passe

1. Aller à la section ***Général*** dans les ***Propriétés*** d'une entrée.
1. À côté du champ ***Mot de passe***, cliquer sur le menu à trois points pour accéder à l'outil ***Générateur de mots de passe***.
1. Personnaliser tous les critères souhaités pour votre mot de passe, puis cliquer sur ***Générer***.
1. Dans la liste proposée, choisir et cliquer sur un mot de passe.
{% snippet, "badgeInfo" %}
Au bas de la liste, vous pouvez consulter la force et la phonétique du mot de passe sélectionné.
{% endsnippet %}

1. Cliquer sur ***Sélectionner*** pour fermer et remplir automatiquement le champ d'entrée ***Mot de passe***.
{% snippet, "badgeNotice" %}
Vous pouvez également créer un ***Modèle de mot de passe*** à partir de vos paramètres de ***Générateur de mots de passe***. Il suffit de personnaliser les paramètres et de cliquer sur ***Ajouter un modèle*** à côté de la liste déroulante ***Modèle***.
{% endsnippet %}

![Générateur de mots de passe](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp4085.png)

| Option                           | Description                                                                    |
|----------------------------------|--------------------------------------------------------------------------------|
| Modèle                           | Choisir un ***Modèle de mots de passe***.                                      |
| Mode                             | Choisir un paramètre de ***Mode*** pour les mots de passe.<ul><li>***Défaut*** : Personnaliser la longueur et le nombre minimum de caractères par type souhaités pour les mots de passe.</li><li>***Paramètres avancés*** : Sélectionner la longueur, le type et le nombre de caractères à inclure dans les mots de passe. Inclure et exclure des caractères spécifiques.</li><li>***Mot de passe lisible*** : Générer des mots de passe lisibles mais qui ne sont pas de véritables mots.</li><li>[***Utiliser un modèle***](/server/web-interface/administration/templates/password-templates/use-a-pattern-password/) : Sélectionner tout modèle nécessaire pour créer les mots de passe. Vous pouvez également exclure certains caractères si désiré. Une liste des modèles les plus récemment utilisés est également créée.</li><li>***Mot de passe prononçable*** : Générer des mots de passe prononçables, mais qui ne sont pas de véritables mots.</li></ul> |
| Majuscules (A, B...)             | Inclure des lettres majuscules dans la génération des mots de passe.           |
| Souligné ( _ )                   | Inclure le caractère souligné ( _ ) dans la génération des mots de passe.      |
| Caractères ANSI élevés           | Inclure des caractères de '-' à U255 (à l'exclusion de U255) dans la génération des mots de passe. |
| Moins ( - )                      | Inclure le caractère moins ( - ) dans la génération des mots de passe.         |
| Crochets ([], (), <>)            | Inclure des caractères de crochets dans la génération des mots de passe.       |
| Chiffres (0, 1, 2...)            | Inclure des chiffres dans la génération des mots de passe.                     |
| Spéciaux (!, $, %, &...)         | Inclure des caractères spéciaux dans la génération des mots de passe.          |
| Minuscules (a, b, c...)          | Inclure des lettres minuscules dans la génération des mots de passe.           |
| Espace ( )                       | Inclure le caractère espace dans la génération des mots de passe.              |
| Conforme XML                     | Générer des mots de passe conformes XML.                                       |
| Nombre de mots de passe          | Nombre maximum de mots de passe générés.                                       |
| Inclure les caractères suivants  | Inclure de force des caractères à l'intérieur du mot de passe.                 |
| Exclure les caractères suivants  | Exclure de force des caractères du mot de passe.                               |
