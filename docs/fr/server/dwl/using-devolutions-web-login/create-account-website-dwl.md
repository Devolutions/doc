---
eleventyComputed:
  title: Créer un compte de site Web avec {{ fr.DWL }}
  order: 10
---
# {{ fr.TOPICTITLE }} 
## Description 
{{ fr.DWL }} vous aide à créer un nouveau compte lorsque vous vous inscrivez sur un site Web. Il vous donne la possibilité de créer un mot de passe sécurisé et d'enregistrer vos nouveaux identifiants.  

{% snippet icon.badgeInfo %} 
Si vous avez déjà un compte pour le site Web, apprenez plutôt comment [Ajouter une entrée de site Web avec {{ fr.DWL }}](/fr/server/dwl/using-devolutions-web-login/add-website-entry-dwl/) . 
{% endsnippet %}
 
Suivez les étapes ci-dessous pour créer un compte de site Web avec {{ fr.DWL }} et sauvegarder vos identifiants dans {{ fr.DVLS }} .  

1. Sur le site Web pour lequel vous souhaitez créer votre compte, aller à la page d'inscription/création de compte. Cette page sera différente pour chaque site Web; cette rubrique utilisera le site Web d'Atlassian comme exemple.  
![Page d'enregistrement](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp2022.png) 
1. Suivre le processus d'enregistrement du site Web jusqu'à atteindre le champ du mot de passe. 
1. Cliquer sur l'icône {{ fr.DWL }} dans la barre d'outils de votre navigateur, puis sélectionner l'onglet ***Générateur de mots de passe*** dans le ***Menu latéral*** de l'extension.  
![Onglet du Générateur de mots de passe](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp2023.png) 
1. Il est maintenant possible de personnaliser les paramètres de génération du mot de passe, mais cette opération est facultative puisque les paramètres par défaut génèrent déjà des mots de passe très forts. Cela dit, il peut être nécessaire d'ajuster les paramètres pour répondre aux exigences spécifiques de certains sites Web. Si vous ne souhaitez pas personnaliser les paramètres de génération, vous pouvez passer à l' <a href="#5">étape 5</a> .  
    1. Définir la ***Longueur du mot de passe*** . La valeur par défaut est fixée à 12.  
    ![Longueur du mot de passe](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp2024.png) 
    1. Dans la section ***Général*** , sélectionner les types de caractères que votre mot de passe doit contenir. Par défaut, les lettres majuscules, les lettres minuscules et les chiffres sont inclus, mais il est aussi possible d'inclure des caractères spéciaux dans votre mot de passe.  
    ![Paramètres généraux](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp2025.png) 
    1. Dans la même section à côté des types de caractères, sélectionner le nombre minimum de caractères de chaque type qui doit être inclus dans le mot de passe. Les valeurs par défaut sont de 0. 
    1. Dans la section ***Avancé*** , il est possible de personnaliser davantage le mot de passe si désiré. Dans le premier champ, saisir les caractères qui doivent être inclus dans le mot de passe, suivis par le nombre minimum d'occurrences de ces caractères dans le champ plus à droite. Dans le deuxième champ, saisir les caractères qui doivent être exclus du mot de passe.  
    ![Paramètres avancés](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp2026.png)  

Vos paramètres de mot de passe sont maintenant configurés.  

5. <a name="5"></a>Si souhaité, pour modifier le mot de passe actuel, cliquer sur le bouton ***Générer un mot de passe*** jusqu'à ce que le résultat soit satisfaisant.  
![Générer un mot de passe](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp2027.png)  
1. Cliquer sur le bouton ***Copier dans le presse-papiers*** pour copier le mot de passe.  
![Copier dans le presse-papiers](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp2028.png)  
1. Coller le mot de passe dans le champ du site Web correspondant.  
![Coller le mot de passe](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp2029.png)  
1. Suivre le reste des étapes d'enregistrement du site Web jusqu'à ce que la fenêtre ***Ajouter un site Web*** de {{ fr.DWL }} apparaisse dans le coin du navigateur Web.  
![Ajouter un site Web](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp2030.png)  
1. Saisir un ***Nom*** pour l'entrée. Le nom par défaut peut être gardé ou modifié, mais il est recommandé qu'il reflète le contenu de l'entrée pour la retrouver plus facilement au besoin. 
1. Sélectionner le ***Coffre*** dans lequel les identifiants doivent être sauvegardés. 
1. Saisir un ***Dossier de destination*** dans lequel sauvegarder l'entrée de site Web. Si ce champ reste vide, l'entrée sera sauvegardée à la racine du coffre. Si le dossier spécifié n'existe pas, il sera créé en même temps que l'entrée. 
1. Cliquer sur ***Enregistrer*** .  

Vos identifiants sont maintenant stockés sécuritairement dans une nouvelle entrée de site Web dans {{ fr.DVLS }} . La prochaine fois que vous vous connecterez à ce compte, {{ fr.DWL }} le détectera et récupérera vos identifiants. Suivez nos instructions étape par étape pour [récupérer vos identifiants](/fr/server/dwl/using-devolutions-web-login/retrieve-credentials-dwl/) . 

