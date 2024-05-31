---
eleventyComputed:
  title: Configurer une entrée de rapport dans {{ fr.RDM }}
  description: Le type d'entrée Rapport génère un rapport personnalisé avec les propriétés appropriées et, si nécessaire, des critères spécifiques pour sélectionner les entrées à inclure dans le rapport.
---
L'***entrée de rapport*** génère un rapport personnalisé avec les propriétés appropriées et, si nécessaire, des critères spécifiques pour sélectionner les entrées à inclure dans le rapport.

1. Pour récupérer les noms des propriétés de vos entrées, aller dans {{ fr.RDM }}.
1. Sélectionner vos entrées et cliquer sur ***Accueil*** – ***Presse-papiers*** – ***Copier*** dans le ruban. Alternativement, vous pouvez faire un clic droit sur votre sélection d'entrées et sélectionner ***Presse-papiers*** – ***Copier***.
![Accueil – Presse-papiers – Copier](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2105.png)
1. Dans la fenêtre ***Options de copie***, aller dans l'***onglet Aperçu***.
1. Sélectionner tout le contenu de la boîte, puis copier et coller dans un éditeur de texte.
1. Dans {{ fr.RDM }} aller dans ***Nouvelle entrée*** – ***Macro/Script/Outil*** – ***Rapport***.
![Nouvelle entrée – Macro/Script/Outil – Rapport](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6081.png)
1. Cliquer sur ***OK***.
1. Entrer un ***Nom*** et choisir un ***Dossier***.
1. Dans l'onglet ***Général***, sélectionner ***Liste de connexions*** ou ***Rapport de champ personnalisé*** sous ***Type***.
   {% snippet, "badgeInfo" %}
   ***Liste de connexions*** contient une liste de propriétés prédéfinies qui ne peuvent pas être modifiées.
   {% endsnippet %}
1. Dans ***Source du script***, sélectionner ***Power Shell*** ou ***Entrée liée***.
   {% snippet, "badgeInfo" %}
   ***Power Shell*** est intégré dans l'entrée de rapport. ***Entrée liée*** est liée à une entrée PowerShell qui contient le script pour sélectionner la liste des entrées.
   {% endsnippet %}
1. Aller dans ***Champs*** et copier/coller les noms des propriétés précédemment sauvegardés.
![Nouvelle entrée – Macro/Script/Outil – Rapport – Onglet Général](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6084.png)
1. Aller dans l'***onglet Script*** et écrire votre script. Un exemple est disponible en bas de la fenêtre.
   {% snippet, "badgeInfo" %}
   Notez que cet exemple de script ne liste que les entrées RDP selon cette condition if :
   `if ($connection.ConnectionType -eq 'RDPConfigured')`
   {% endsnippet %}

   ![Onglet Script](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6082.png)

   L'***onglet Paramètres*** est destiné à soumettre des valeurs à utiliser avec les variables $PARAMETER1$, $PARAMETER2$, etc.
1. Cliquer sur ***OK*** pour sauvegarder et fermer la fenêtre.
1. Sélectionner votre nouvelle ***entrée de rapport*** créée et cliquer sur ***Exécuter***.

Le rapport est disponible au format HTML. Trois options sont également affichées en haut du rapport : ***Actualiser***, ***Enregistrer sous*** et ***Imprimer***.
![Options Actualiser, Enregistrer sous et Imprimer](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6083.png)
