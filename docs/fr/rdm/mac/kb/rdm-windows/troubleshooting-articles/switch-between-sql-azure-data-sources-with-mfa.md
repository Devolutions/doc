---
eleventyComputed:
  title: Basculer entre les sources de données SQL Azure avec A2F
---
Dans {{ fr.RDM }}, lors du basculement entre les sources de données SQL Azure qui prennent en charge l'authentification à deux facteurs (A2F), la connexion fonctionnera uniquement pour la première source de données mais pas pour les suivantes ; l'utilisateur ne sera pas invité lors du changement de sources de données.
## Solution
Pour contourner ce problème, la solution est de faire en sorte que {{ fr.RDM }} invite l'utilisateur pour la source de données au démarrage.
1. Aller à ***Fichier – Sources de données***.
1. En bas de la fenêtre, dans le menu déroulant ***Au démarrage***, sélectionner ***Demander la source de données***.
![Demander la Source de Données au Démarrage](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2092.png)
1. Cliquer sur ***OK***.
1. Fermer {{ fr.RDM }} et le rouvrir, puis choisir la source de données. L'invite A2F devrait maintenant être disponible.
