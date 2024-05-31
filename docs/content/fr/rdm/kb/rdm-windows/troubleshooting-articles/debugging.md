---
eleventyComputed:
  title: Débogage
---
Lorsqu'un problème survient lors de l'utilisation de {{ fr.RDM }}, le personnel de support peut vous demander d'activer le débogage et de renvoyer les informations.
{% snippet, "badgeInfo" %}
Tout niveau de débogage autre que zéro ralentira l'application et écrira beaucoup d'informations dans les journaux de l'application. Dès que vous avez terminé le diagnostic, vous devriez remettre le niveau de débogage à zéro.
{% endsnippet %}

La méthode de débogage ad hoc est suffisante dans la plupart des cas, utiliser la méthode de débogage en profondeur lorsque vous avez besoin de diagnostiquer le démarrage ou la connexion initiale.
## Solution
### Méthode Débogage AD HOC
1. Dans {{ fr.RDM }}, ouvrir ***Aide – Profiler***, déplacer la fenêtre sur le côté pour dégager la fenêtre principale.
![!!KB2022](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2022.png)
1. Dans l'onglet ***Debug Only***, cliquer sur le bouton ellipsis et activer les catégories de débogage appropriées.
1. Dans {{ fr.RDM }}, effectuer l'action qui fait l'objet de l'enquête.

Pour mesurer les temps de chargement des sessions, veuillez appuyer sur <kbd>Ctrl</kbd>+<kbd>F5</kbd> pour invalider le cache et effectuer un rafraîchissement complet. Vous devriez voir apparaître les informations de débogage dans la fenêtre du profileur.

4. Cliquer sur ***Envoyer la trace au Support***.
1. Dans la boîte de dialogue suivante, assurez-vous de spécifier suffisamment d'informations pour lier le rapport au ticket approprié.

Si le processus a été commencé depuis le forum, inclure votre nom d'utilisateur du forum.
### Méthode Débogage en Profondeur
1. Dans {{ fr.RDM }} ouvrir ***Fichier – Paramètres – Avancé***.
1. Cliquer sur le bouton ellipsis de ***Niveau de débogage*** et activer les catégories de débogage appropriées.
1. Dans la section ***Information***, vous verrez un hyperlien vers votre dossier de configuration, cliquer dessus pour ouvrir une fenêtre de l'explorateur de fichiers dans ce dossier.
![!!KB2023](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2023.png)
1. Fermer {{ fr.RDM }}

Comme phase préparatoire, il serait préférable de vider les journaux existants pour limiter la portée de ce qui devra être analysé.

5. Supprimer ou renommer les fichiers nommés RemoteDesktopManager.log, RemoteDesktopManager.log.db et RemoteDesktopManager.debug de votre dossier de configuration.
1. Démarrer {{ fr.RDM }}.
1. Effectuer l'action qui fait l'objet de l'enquête.
1. Ouvrir ***Fichier – Paramètres – Avancé***, mettre le ***Niveau de débogage*** à zéro.
1. Fermer {{ fr.RDM }}.
1. Regrouper les fichiers *.log, *.log.db et *.debug de votre dossier de configuration et les envoyer à nous.
