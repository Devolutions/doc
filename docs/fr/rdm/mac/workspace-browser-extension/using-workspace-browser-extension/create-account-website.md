---
eleventyComputed:
  title: Créer un compte de site Web avec le {{ fr.WBEX }}
  order: 10
---
Le {{ fr.WBEX }} vous aide à créer un nouveau compte lorsque vous vous inscrivez sur un site Web. Il vous donne la possibilité de créer un mot de passe sécurisé et d'enregistrer vos nouveaux identifiants.

{% snippet icon.badgeInfo %}
Si vous avez déjà un compte pour le site Web, apprenez plutôt comment [Ajouter une entrée de site Web avec le {{ fr.WBEX }}](/fr/rdm/mac/workspace-browser-extension/using-workspace-browser-extension/add-website-entry-workspace-browser-extension/).
{% endsnippet %}

Suivez les étapes ci-dessous pour créer un compte de site Web avec le {{ fr.WBEX }} et sauvegarder vos identifiants dans {{ fr.RDMMAC }}.

1. Sur le site Web pour lequel vous souhaitez créer votre compte, aller à la page d'inscription/création de compte. Cette page sera différente pour chaque site Web; cette rubrique utilisera le site Web d'Atlassian comme exemple.
![Page d'enregistrement](https://cdnweb.devolutions.net/docs/fr/rdm/mac/RDMMac2023.png)
1. Suivre le processus d'enregistrement du site Web jusqu'à atteindre le champ du mot de passe.
1. Cliquer sur l'icône du {{ fr.WBEX }} dans la barre d'outils de votre navigateur, puis sélectionner l'onglet ***Générateur de mots de passe*** dans le ***Menu latéral*** de l'extension.
![Onglet du Générateur de mots de passe](https://cdnweb.devolutions.net/docs/fr/rdm/mac/RDMMac2024.png)
1. Il est maintenant possible de personnaliser les paramètres de génération du mot de passe, mais cette opération est facultative puisque les paramètres par défaut génèrent déjà des mots de passe très forts. Cela dit, il peut être nécessaire d'ajuster les paramètres pour répondre aux exigences spécifiques de certains sites Web. Si vous ne souhaitez pas personnaliser les paramètres de génération, vous pouvez passer à l'<a href="#5">étape 5</a>.
    1. Définir la ***Longueur du mot de passe***. La valeur par défaut est fixée à 12.
    ![Longueur du mot de passe](https://cdnweb.devolutions.net/docs/fr/rdm/mac/RDMMac2025.png)
    1. Dans la section ***Général***, sélectionner les types de caractères que votre mot de passe doit contenir. Par défaut, les lettres majuscules, les lettres minuscules et les chiffres sont inclus, mais il est aussi possible d'inclure des caractères spéciaux dans votre mot de passe.
    ![Paramètres généraux](https://cdnweb.devolutions.net/docs/fr/rdm/mac/RDMMac2026.png)
    1. Dans la même section à côté des types de caractères, sélectionner le nombre minimum de caractères de chaque type qui doit être inclus dans le mot de passe. Les valeurs par défaut sont de 0.
    1. Dans la section ***Avancé***, il est possible de personnaliser davantage le mot de passe si désiré. Dans le premier champ, saisir les caractères qui doivent être inclus dans le mot de passe, suivis par le nombre minimum d'occurrences de ces caractères dans le champ plus à droite. Dans le deuxième champ, saisir les caractères qui doivent être exclus du mot de passe.
    ![Paramètres avancés](https://cdnweb.devolutions.net/docs/fr/rdm/mac/RDMMac2027.png)

Vos paramètres de mot de passe sont maintenant configurés.

5. <a name="5"></a>Si souhaité, pour modifier le mot de passe actuel, cliquer sur le bouton ***Générer un mot de passe*** jusqu'à ce que le résultat soit satisfaisant.
![Générer un mot de passe](https://cdnweb.devolutions.net/docs/fr/rdm/mac/RDMMac2028.png)
1. Cliquer sur le bouton ***Copier dans le presse-papiers*** pour copier le mot de passe.
![Copier dans le presse-papiers](https://cdnweb.devolutions.net/docs/fr/rdm/mac/RDMMac2029.png)
1. Coller le mot de passe dans le champ du site Web correspondant.
![Paste Password](https://cdnweb.devolutions.net/docs/fr/rdm/mac/RDMMac2031.png)
1. Suivre le reste des étapes d'enregistrement du site Web jusqu'à ce que la fenêtre ***Ajouter un site Web*** du {{ fr.WBEX }} apparaisse dans le coin du navigateur Web.
![Ajouter un site Web](https://cdnweb.devolutions.net/docs/fr/rdm/mac/RDMMac2030.png)
1. Saisir un ***Nom*** pour l'entrée. Le nom par défaut peut être gardé ou modifié, mais il est recommandé qu'il reflète le contenu de l'entrée pour la retrouver plus facilement au besoin.
1. Saisir un ***Dossier de destination*** dans lequel sauvegarder l'entrée de site Web. Si ce champ reste vide, l'entrée sera sauvegardée à la racine du {{ fr.VLT }}. Si le dossier spécifié n'existe pas, il sera créé en même temps que l'entrée.
1. Spécifier si vous souhaitez enregistrer votre entrée dans votre ***{{ fr.UVLT }}*** ou dans un ***{{ fr.VLT }}***. Notez que pour créer votre entrée dans le {{ fr.VLT }} de votre choix, le {{ fr.VLT }} correspondant doit être actuellement ouvert dans {{ fr.RDMMAC }}.
1. Cliquer sur ***Enregistrer***.

Vos identifiants sont maintenant stockés sécuritairement dans une nouvelle entrée de site Web dans {{ fr.RDMMAC }}. La prochaine fois que vous vous connecterez à ce compte, le {{ fr.WBEX }} le détectera et récupérera vos identifiants. Suivez nos instructions étape par étape pour [récupérer vos identifiants](/fr/rdm/mac/workspace-browser-extension/using-workspace-browser-extension/retrieve-credentials/).
