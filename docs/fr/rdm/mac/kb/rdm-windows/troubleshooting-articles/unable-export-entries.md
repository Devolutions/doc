---
eleventyComputed:
  title: Impossible d'exporter les entrées
---
Impossible d'exporter les entrées dans {{ fr.RDM }} avec des droits d'administrateur ou réception d'un message d'erreur indiquant : ***Aucune entrée à exporter***.

## Solution

Valider tous les paramètres et politiques suivants pour que l'exportation fonctionne.

1. Valider que ces politiques ne sont pas cochées dans ***Aide - Diagnostic - Politique*** Si elles sont cochées, voir [Appliquer les politiques](/rdm/mac/kb/rdm-windows/how-to-articles/group-policies/) pour les gérer.

* ***Désactiver la révélation du mot de passe***
* ***Supprimer la possibilité de voir les mots de passe entièrement***

![!!KB4881](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4881.png)

2. Valider que ***Permettre la révélation du mot de passe pour l'administrateur et les utilisateurs autorisés*** est coché dans ***Administration - Paramètres du système - Politique de mot de passe - Avancé***.
![!!KB4882](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4882.png)

3. Dans ***Fichier – Sources de données*** sélectionner la source de données et cliquer sur ***Modifier la source de données***.
1. Valider que ***Désactiver la révélation du mot de passe*** n'est pas coché dans l'onglet ***Avancé*** (toutes les sources de données n'ont pas cette option).
![!!KB4883](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4883.png)