---
eleventyComputed:
  title: Complexité des mots de passe
---
Cette configuration de sécurité détermine si les mots de passe doivent répondre à des exigences de complexité prédéterminées configurées dans les paramètres de votre source de données. Les exigences de complexité sont appliquées lorsque les mots de passe sont changés ou lorsqu'une nouvelle entrée est créée. Si cette politique est activée, les nouveaux mots de passe doivent répondre à certaines des exigences minimales suivantes :

* Longueur minimale
* Caractères minuscules minimum
* Caractères majuscules minimum
* Caractères numériques minimum
* Symboles minimum

## Paramètres
Les paramètres définis dans la source de données de Complexité des mots de passe détermineront quelle est la valeur par défaut des paramètres de session.

![Paramètres de la source de données – Complexité des mots de passe](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10376.png)

### Activé
L'option Activer définie dans les paramètres de la source de données déterminera l'option par défaut de votre entrée de session de Complexité des mots de passe.

| Option    | Description                                   |
|-----------|-----------------------------------------------|
| Vrai      | Active l'utilisation des exigences de Complexité des mots de passe, ce qui obligera les utilisateurs de la source de données à répondre aux exigences de mot de passe définies par l'administrateur de la source de données. |
| Faux      | Désactive les exigences de Complexité des mots de passe. |
| Hérité    | Hérite de l'utilisation définie dans le dossier parent. Lorsque vous utilisez Hérité, vous devrez définir un mot de passe à utiliser comme Hérité dans le dossier supérieur de l'entrée. |

### Validation
Si l'utilisation est activée et que vous essayez de changer ou de créer un mot de passe pour l'une de vos entrées, la réaction dépendra du mode de Validation choisi.

L'option de validation déterminée dans les paramètres de la source de données déterminera l'option par défaut de Validation de votre entrée de session de Complexité des mots de passe.

| OPTION    | DESCRIPTION                                                                   |
|-----------|-------------------------------------------------------------------------------|
| Aucune    | N'utilisera aucun type de validation lors du changement ou de la création d'un nouveau mot de passe. |
| Avertissement | Vous avertira que votre mot de passe ne respecte pas les exigences de Complexité des mots de passe mais vous permettra de continuer avec ce mot de passe ou de le modifier. |
| Requis    | Les exigences de la Complexité des mots de passe sont obligatoires.                    |
| Hérité    | Hérite de l'utilisation définie dans le dossier de validation. Lorsque vous utilisez Hérité, vous devrez définir un mot de passe à utiliser comme Hérité dans le dossier supérieur de l'entrée de session. |

## Créer
Vous devez créer votre propre modèle d'exigences de Complexité des mots de passe pour ensuite les appliquer à vos sessions. Cliquez sur le bouton plus pour créer votre modèle de Complexité des mots de passe, entrez un nom et les exigences souhaitées.
![Paramètres de la source de données – Complexité des mots de passe](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10377.png)
