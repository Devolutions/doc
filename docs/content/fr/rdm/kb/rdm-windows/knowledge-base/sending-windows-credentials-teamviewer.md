---
eleventyComputed:
  title: Envoyer les identifiants Windows à TeamViewer
  description: Envoyer les identifiants Windows à TeamViewer avec une macro de frappe.
---
De nombreux utilisateurs ont demandé la possibilité d'automatiser le processus de connexion sur un système Windows via TeamViewer.

Comme nous ne pouvons pas envoyer le mot de passe automatiquement à l'intérieur de la session TeamViewer, vous devrez accomplir cela avec une macro de frappe.

1. Ouvrir {{ fr.RDM }}.
1. Ajouter une nouvelle entrée et sélectionner ***Macro de frappe*** sous ***Macro/Script/Outil***.  
1. Entrer ***$USERNAME${TAB}$PASSWORD${TAB}{ENTER}*** dans le champ général de la macro de frappe.

{% snippet, "badgeInfo" %}
Veuillez noter que le ***délai initial*** a été configuré à 5 secondes, cela varie selon le système de chaque utilisateur.
{% endsnippet %}  

4. Cliquer ***Ajouter*** pour sauvegarder.
![$USERNAME${TAB}$PASSWORD${TAB}{ENTER}](https://cdnweb.devolutions.net/docs/RDMW6016_2024_1.png)  
1. Ouvrir votre ***entrée de gestion des identifiants***.  

Vous pouvez créer une ***entrée de gestion des identifiants*** dans {{ fr.RDM }} en cliquant ***Ajouter une nouvelle entrée – Gestion des identifiants*** et en sélectionnant ***Nom d'utilisateur / Mot de passe***. 

6. Aller aux propriétés de votre entrée d'identifiants et activer ***Autoriser le mot de passe dans la variable*** sous ***Paramètres de sécurité***.
1. Cliquer ***Mettre à jour*** pour sauvegarder.
![Autoriser le mot de passe dans la variable](https://cdnweb.devolutions.net/docs/RDMW6014_2024_1.png)

## Source de données avancée

Si vous avez une ***source de données avancée,*** vous devrez activer ***Autoriser la variable de mot de passe dans les macros***.

1. Aller à ***Administration – Paramètres système*** dans le ruban de {{ fr.RDM }}.
1. Sélectionner ***Gestion des mots de passe – Politique de mot de passe – Autoriser la variable de mot de passe dans les macros***.
![Gestion des mots de passe – Politique de mot de passe – Autoriser la variable de mot de passe dans les macros](https://cdnweb.devolutions.net/docs/RDMW6012_2024_1.png)

La prochaine étape se produit lorsque la session TeamViewer est ouverte et que les identifiants sont prêts à être entrés. 

3. Faire un clic droit sur votre entrée d'identifiants et sélectionner ***Macros/Scripts/Outils - Envoyer les identifiants*** (ou le nom que vous avez donné à votre entrée).
![Macros/Scripts/Outils - Envoyer les identifiants](https://cdnweb.devolutions.net/docs/RDMW6015_2024_1.png)

En conclusion, placer le curseur de la souris dans le champ de connexion approprié et la macro de frappe fera le reste.

## ID entré au lieu des identifiants dans l'entrée TeamViewer 

Si vous avez entré un ID au lieu des identifiants dans l'entrée TeamViewer, une variable ***$TOOL_PASSWORD$*** est requise. 

1. Ouvrir {{ fr.RDM }}.
1. Ajouter une nouvelle entrée et sélectionner ***Macro de frappe*** sous ***Macro/Script/Outil***.  
1. Entrer ***$TOOL_PASSWORD${TAB}{ENTER}*** dans le champ général de la macro de frappe.
1. Cliquer ***Ajouter*** pour sauvegarder.
![$TOOL_PASSWORD${TAB}{ENTER}](https://webdevolutions.blob.core.windows.net/docs/RDMW6019_2024_1.png)
1. Aller aux propriétés de votre entrée TeamViewer et sélectionner ***Événements – Après ouverture***.
1. Exécuter une macro automatiquement en écrivant la macro ou en liant à une entrée de macro.  
1. Cliquer ***Mettre à jour***.
![Événements – Après ouverture](https://cdnweb.devolutions.net/docs/RDMW6017_2024_1.png)

L'entrée où la macro ***$TOOL_PASSWORD$*** récupère les identifiants doit être liée.

8. Modifier votre entrée TeamViewer et aller à ***Outils de gestion***.
1. Sélectionner ***Lié ({{ fr.VLT }})*** et votre entrée dans les menus déroulants ***Identifiants***. 
1. Cliquer ***Mettre à jour*** pour sauvegarder.
![Sélectionner Lié ({{ fr.VLT }})](https://webdevolutions.blob.core.windows.net/docs/RDMW6018_2024_1.png)