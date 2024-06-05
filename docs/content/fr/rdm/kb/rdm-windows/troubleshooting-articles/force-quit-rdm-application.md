---
eleventyComputed:
  title: Forcer la fermeture de l'application {{ fr.RDM }}
---
Voici quelques étapes à suivre dans l'événement où {{ fr.RDM }} se bloque et que vous devez forcer la fermeture de l'application.
## Solution
1. Ouvrir votre ***Visualiseur d'événements Windows***.
2. Cliquer sur ***Journaux Windows - Application*** et valider qu'il n'y a pas de problèmes liés au crash.
3. Lancer le ***Gestionnaire des tâches***.
4. Dans l'onglet ***Processus***, localiser et ***Terminer les tâches*** sur toutes les applications {{ fr.RDM }} qui pourraient être en cours d'exécution.
5. Lancer {{ fr.RDM }}.  
{% snippet, "badgeHelp" %}
Dans l'événement où {{ fr.RDM }} se bloque encore au relancement, essayer une [installation portable de {{ fr.RDM }}](/rdm/kb/rdm-windows/how-to-articles/portable-rdm-installation/).
{% endsnippet %}
