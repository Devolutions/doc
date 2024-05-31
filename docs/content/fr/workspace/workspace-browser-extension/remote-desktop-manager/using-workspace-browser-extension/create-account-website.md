---
eleventyComputed:
  title: Créer un compte pour un site Web avec le {{ fr.WBEX }}
  order: 10
---
Le {{ fr.WBEX }} vous assiste dans la création d'un nouveau compte lorsque vous vous inscrivez sur un site Web. Il vous donne la possibilité de créer un mot de passe sécurisé et de sauvegarder vos nouvelles informations d'identification.

{% snippet, "badgeInfo" %}
Si vous avez déjà un compte pour le site Web, visitez [Ajouter une entrée de site Web avec le {{ fr.WBEX }}](/workspace/workspace-browser-extension/remote-desktop-manager/using-workspace-browser-extension/add-website-entry-workspace-browser-extension/).
{% endsnippet %}

Suivre les instructions ci-dessous pour apprendre à créer un compte de site Web avec le {{ fr.WBEX }} et sauvegarder vos informations d'identification dans {{ fr.RDM }}.

1. Sur le site Web pour lequel vous souhaitez créer votre compte, aller à la page d'inscription/création de compte. Cette page sera différente pour chaque site Web ; ce sujet utilisera le site Web d'Atlassian comme exemple.
![Page d'inscription](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2084.png)
1. Suivre le processus d'inscription du site Web jusqu'à arriver au champ du mot de passe.
1. Cliquer sur l'icône du {{ fr.WBEX }} dans la barre d'outils de votre navigateur, puis sélectionner le ***Générateur de mot de passe*** dans le ***Menu latéral*** de l'extension.
![Onglet Générateur de mot de passe](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2085.png)
1. Vous pouvez maintenant personnaliser les paramètres de génération du mot de passe, mais cela est optionnel puisque les paramètres par défaut génèrent déjà des mots de passe très forts. Cela dit, il peut être nécessaire d'ajuster les paramètres pour répondre aux exigences spécifiques de certains sites Web. Si vous ne souhaitez pas personnaliser les paramètres de génération, vous pouvez passer à l'étape 5.
    1. Sélectionner une ***Longueur de mot de passe***. La valeur par défaut est fixée à 12.
![Longueur de mot de passe](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2086.png)
{type="a"}
    1. Dans les paramètres ***Généraux***, sélectionner les types de caractères que votre mot de passe doit contenir. La valeur par défaut est fixée pour inclure les lettres majuscules, les lettres minuscules et les chiffres, mais il y a aussi l'option d'inclure des caractères spéciaux dans votre mot de passe.
![Paramètres Généraux](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2087.png)
    1. Dans la même section à côté des types de caractères, sélectionner le nombre minimum de caractères de chaque type qui doivent être inclus dans votre mot de passe. Les valeurs par défaut sont fixées à 0.
    1. Dans les paramètres ***Avancés***, vous pouvez encore personnaliser davantage votre mot de passe si désiré. Dans le premier champ, entrer les caractères que vous voulez inclure dans votre mot de passe, suivis dans le champ à droite par le nombre minimum de fois qu'ils doivent apparaître. Dans le deuxième champ, entrer les caractères que vous voulez exclure de votre mot de passe.
![Paramètres Avancés](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2088.png)

Vos paramètres de mot de passe sont maintenant configurés.

5. Si désiré, pour changer le mot de passe actuel, cliquer sur le bouton ***Générer un mot de passe*** jusqu'à être satisfait du résultat.
![Générer un mot de passe](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2089.png)
1. Cliquer sur le bouton ***Copier dans le presse-papiers*** pour copier le mot de passe.
![Copier dans le presse-papiers](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2090.png)
1. Coller votre mot de passe dans le champ correspondant du site Web.
![Coller le mot de passe](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2091.png)
1. Suivre le reste des étapes d'inscription du site Web jusqu'à ce que la fenêtre ***Ajouter un site Web*** du {{ fr.WBEX }} apparaisse dans le coin de votre navigateur Web.
![!!RDMWin2092](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2092.png)
1. Fournir un ***Nom*** pour l'entrée. Vous pouvez garder le nom par défaut ou le changer, mais nous recommandons qu'il reflète le contenu de l'entrée afin qu'il soit plus facile à trouver lorsque nécessaire.
1. Fournir un ***Dossier de destination*** dans lequel sauvegarder votre entrée de site Web. Si vous laissez ce champ vide, l'entrée sera sauvegardée à la racine du {{ fr.VLT }}. Si le dossier que vous spécifiez n'existe pas, il sera créé en même temps que votre entrée.
1. Sélectionner si vous voulez sauvegarder votre entrée dans votre ***{{ fr.UVLT }}*** ou dans un ***{{ fr.VLT }}***. Notez que pour créer votre entrée dans le {{ fr.VLT }} de votre choix, le {{ fr.VLT }} correspondant doit actuellement être ouvert dans {{ fr.RDM }}.
1. Cliquer ***Sauvegarder***.

Vos informations d'identification sont maintenant sécurisées dans une nouvelle entrée de site Web dans {{ fr.RDM }}. La prochaine fois que vous vous connecterez au même compte, le {{ fr.WBEX }} le détectera et vous pourrez récupérer vos informations d'identification. Suivez nos instructions étape par étape pour [récupérer vos informations d'identification](/workspace/workspace-browser-extension/remote-desktop-manager/using-workspace-browser-extension/retrieve-credentials/).
