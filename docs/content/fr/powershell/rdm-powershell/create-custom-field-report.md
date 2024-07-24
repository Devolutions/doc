---
eleventyComputed:
  title: Créer un rapport de champ personnalisé
  description: Ce sujet couvrira comment créer un Rapport de Champ Personnalisé pour utiliser divers scripts PowerShell.
---
Ce sujet couvrira comment créer un Rapport de Champ Personnalisé pour utiliser divers scripts PowerShell.

## Créer le rapport
1. Cliquer sur le bouton ***Nouvelle Entrée***.
1. Sélectionner ***Rapport***, qui se trouve sous ***Macro/Script/Outil*** – ***Outil***.
1. Entrer le ***Nom***.
![Rapport de Champ Personnalisé](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0138.png)
1. Dans l'onglet ***Général*** :
    * Définir le ***Type*** à ***Rapport de Champ Personnalisé***.
    * La ***Source du script*** peut être soit ;
        * ***PowerShell*** : Entrer le script dans l'onglet ***Script***.
        * ***Entrée Liée*** : Choisir une entrée PowerShell contenant le script, cela facilitera l'utilisation du même script pour plusieurs entrées.
    * Ajouter ***Délai d'attente (ms)*** (optionnel).
    * Ajouter les ***Champs*** nécessaires.
   {% snippet, "badgeInfo" %}
   Si vous avez choisi ***Entrée Liée***, sauter l'étape 5.
   {% endsnippet %}
1. Dans l'onglet ***Script***, ajouter le script personnalisé.
![Exemple de Script](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0139.png)
   {% snippet, "badgeInfo" %}
   Il y a un script ***Exemple*** en bas de cet onglet à utiliser comme référence.
   {% endsnippet %}
1. Dans l'onglet ***Paramètres***, ajouter des paramètres qui peuvent être utilisés dans le script (en utilisant $PARAMETER1$, $PARAMETER2$, etc).
1. Cliquer sur ***OK*** pour créer l'entrée et fermer cette fenêtre.
1. Sélectionner l'entrée ***Rapport*** et cliquer sur ***Exécuter***.
