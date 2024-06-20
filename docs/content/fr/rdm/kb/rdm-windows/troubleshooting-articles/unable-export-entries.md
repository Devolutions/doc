---
eleventyComputed:
  title: Impossible d'exporter les entrées
---
Impossible d'exporter les entrées dans {{ fr.RDM }} avec des droits d'administrateur ou en recevant un message d'erreur indiquant : ***Aucune entrée à exporter***.

## Solution

Valider tous les paramètres et politiques suivants pour que l'exportation fonctionne.

1. Valider que ces politiques ne sont pas cochées dans ***Aide - Diagnostic - Politique*** Si elles le sont, voir [Appliquer des politiques](/rdm/kb/rdm-windows/how-to-articles/group-policies/) pour les gérer.

* ***Désactiver la fonction de révélation du mot de passe***
* ***Supprimer la possibilité de voir les mots de passe entièrement***

![Désactiver la fonction de révélation du mot de passe et supprimer la possibilité de voir les mots de passe entièrement](https://cdnweb.devolutions.net/docs/RDMW6011_2024_2.png)

2. Valider que ***Permettre la révélation du mot de passe pour l'administrateur et les utilisateurs autorisés*** est coché dans ***Administration - Paramètres du système - Politique de mot de passe - Avancé***.
![Permettre la révélation du mot de passe pour l'administrateur et les utilisateurs autorisés](https://cdnweb.devolutions.net/docs/RDMW6008_2024_2.png)

3. Dans ***Fichier – Sources de données*** sélectionner la source de données et cliquer sur ***Modifier la source de données***.
1. Valider que ***Désactiver la révélation du mot de passe*** n'est pas coché dans l'onglet ***Avancé*** (toutes les sources de données n'ont pas cette option).
![Désactiver la révélation du mot de passe](https://cdnweb.devolutions.net/docs/RDMW6012_2024_2.png)