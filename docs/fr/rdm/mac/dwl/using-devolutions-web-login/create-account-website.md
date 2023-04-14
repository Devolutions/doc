---
eleventyComputed:
  title: Créer un compte de site Web avec {{ fr.DWL }}
---
{{ fr.DWL }} vous aide à créer un nouveau compte lorsque vous vous inscrivez sur un site Web. Il vous donne la possibilité de créer un mot de passe sécurisé et d&apos;enregistrer vos nouveaux identifiants.  

{% snippet icon.badgeInfo %} 
Si vous avez déjà un compte pour le site Web, apprenez plutôt comment [Ajouter une entrée de site Web avec {{ fr.DWL }}](/fr/rdm/mac/dwl/using-devolutions-web-login/add-website-entry-dwl/) . 
{% endsnippet %}
 
Suivez les étapes ci-dessous pour créer un compte de site Web avec {{ fr.DWL }} et sauvegarder vos identifiants dans {{ fr.RDM }} pour Mac.  

1. Sur le site Web pour lequel vous souhaitez créer votre compte, aller à la page d&apos;inscription/création de compte. Cette page sera différente pour chaque site Web; cette rubrique utilisera le site Web d&apos;Atlassian comme exemple. 
![Page d'enregistrement](/img/fr/rdm/mac/RDMMac2023.png) 
1. Suivre le processus d&apos;enregistrement du site Web jusqu&apos;à atteindre le champ du mot de passe. 
1. Cliquer sur l&apos;icône {{ fr.DWL }} dans la barre d&apos;outils de votre navigateur, puis sélectionner l&apos;onglet ***Générateur de mots de passe*** dans le ***Menu latéral*** de l&apos;extension.  
![Onglet du Générateur de mots de passe](/img/fr/rdm/mac/RDMMac2024.png) 
1. Il est maintenant possible de personnaliser les paramètres de génération du mot de passe, mais cette opération est facultative puisque les paramètres par défaut génèrent déjà des mots de passe très forts. Cela dit, il peut être nécessaire d&apos;ajuster les paramètres pour répondre aux exigences spécifiques de certains sites Web. Si vous ne souhaitez pas personnaliser les paramètres de génération, vous pouvez passer à l&apos;<a href="#5">étape 5</a> . 
    1. Définir la ***Longueur du mot de passe*** . La valeur par défaut est fixée à 12.  
    ![Longueur du mot de passe](/img/fr/rdm/mac/RDMMac2025.png) 
    1. Dans la section ***Général*** , sélectionner les types de caractères que votre mot de passe doit contenir. Par défaut, les lettres majuscules, les lettres minuscules et les chiffres sont inclus, mais il est aussi possible d&apos;inclure des caractères spéciaux dans votre mot de passe.  
    ![Paramètres généraux](/img/fr/rdm/mac/RDMMac2026.png) 
    1. Dans la même section à côté des types de caractères, sélectionner le nombre minimum de caractères de chaque type qui doit être inclus dans le mot de passe. Les valeurs par défaut sont de 0. 
    1. Dans la section ***Avancé*** , il est possible de personnaliser davantage le mot de passe si désiré. Dans le premier champ, saisir les caractères qui doivent être inclus dans le mot de passe, suivis par le nombre minimum d&apos;occurrences de ces caractères dans le champ plus à droite. Dans le deuxième champ, saisir les caractères qui doivent être exclus du mot de passe.  
    ![Paramètres avancés](/img/fr/rdm/mac/RDMMac2027.png) 

Vos paramètres de mot de passe sont maintenant configurés. 

5. <a name="5"></a>Si souhaité, pour modifier le mot de passe actuel, cliquer sur le bouton ***Générer un mot de passe*** jusqu&apos;à ce que le résultat soit satisfaisant.  .
![Générer un mot de passe](/img/fr/rdm/mac/RDMMac2028.png) 
1. Cliquer sur le bouton ***Copier dans le presse-papiers*** pour copier le mot de passe.  
![Copier dans le presse-papiers](/img/fr/rdm/mac/RDMMac2029.png) 
1. Coller le mot de passe dans le champ du site Web correspondant.  
![Paste Password](/img/fr/rdm/mac/RDMMac2031.png) 
1. Suivre le reste des étapes d&apos;enregistrement du site Web jusqu&apos;à ce que la fenêtre ***Ajouter un site Web*** de {{ fr.DWL }} apparaisse dans le coin du navigateur Web.  
![Ajouter un site Web](/img/fr/rdm/mac/RDMMac2030.png) 
1. Saisir un ***Nom*** pour l&apos;entrée. Le nom par défaut peut être gardé ou modifié, mais il est recommandé qu&apos;il reflète le contenu de l&apos;entrée pour la retrouver plus facilement au besoin. 
1. Saisir un ***Dossier de destination*** dans lequel sauvegarder l&apos;entrée de site Web. Si ce champ reste vide, l&apos;entrée sera sauvegardée à la racine du coffre. Si le dossier spécifié n&apos;existe pas, il sera créé en même temps que l&apos;entrée. 
1. Spécifier si vous souhaitez enregistrer votre entrée dans votre ***Coffre d&apos;utilisateur*** ou dans un ***Coffre*** . Notez que pour créer votre entrée dans le coffre de votre choix, le coffre correspondant doit être actuellement ouvert dans {{ fr.RDM }} pour Mac. 
1. Cliquer sur ***Enregistrer*** . 

Vos identifiants sont maintenant stockés sécuritairement dans une nouvelle entrée de site Web dans {{ fr.RDM }} pour Mac. La prochaine fois que vous vous connecterez à ce compte, {{ fr.DWL }} le détectera et récupérera vos identifiants. Suivez nos instructions étape par étape pour [récupérer vos identifiants](/fr/rdm/mac/dwl/using-devolutions-web-login/retrieve-credentials/) . 

