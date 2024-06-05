---
eleventyComputed:
  title: Configurer 1Password en mode intégré
---
{% snippet, "badgeInfo" %} 
L'intégration des identifiants provenant des gestionnaires de mots de passe est uniquement disponible dans la version Équipe de {{ fr.RDM }}. 
{% endsnippet %}

1. Dans l'application 1Password, utiliser ***1Password - Nouveau {{ fr.VLT }} sur cet ordinateur***.
![!!KB4233](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4233.png)
1. Configurer le {{ fr.VLT }} selon vos préférences et utiliser ***Choisir un dossier pour synchroniser ce {{ fr.VLT }}*** pour sélectionner la destination de la base de données locale.
1. Dans {{ fr.RDM }}, créer une nouvelle entrée 1Password. Définir le ***Mode*** sur ***Lié à un fichier local***.
1. Utiliser le bouton des points de suspension pour sélectionner le fichier de base de données locale. Son extension sera **.opvault** et il sera situé dans le dossier que vous avez sélectionné précédemment.
1. Une fois cela fait, il ne reste plus qu'à sélectionner quel identifiant vous souhaitez récupérer, en utilisant le champ ***Titre*** ou son bouton ***points de suspension***. Si vous préférez ne pas sélectionner un identifiant et être invité à chaque utilisation à la place, cocher ***Toujours demander avec la liste*** à la place.
