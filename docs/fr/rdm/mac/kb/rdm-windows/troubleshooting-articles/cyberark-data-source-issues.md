---
eleventyComputed:
  title: Problèmes de source de données Cyberark
  description: Accéder directement à votre serveur CyberArk, sans avoir besoin d'une source de données SQL ou {{ fr.DVLS }} pour héberger la session du tableau de bord CyberArk.
---
Voici la liste de tous les problèmes connus de source de données CyberArk.

## Aucune licence trouvée

### Solution

Pour effectuer les étapes de [configuration initiale](/rdm/data-sources/data-sources-types/cyberark-data-source/#initial-configuration), s'assurer de se connecter d'abord à un utilisateur qui possède les permissions CyberArk requises.

## Impossible de modifier un compte

### Solution 

Pendant l'aperçu, la source de données CyberArk reconnaîtra ***Ajouter Coffre*** comme l'Admin. Cela contrôle également les actions d'ajout/modification/suppression dans l'interface utilisateur. Indépendamment de ***Ajouter Coffre***, CyberArk validera les bonnes permissions utilisateur lorsqu'une action est demandée (ajout/modification/suppression) et vous empêchera d'effectuer des tâches pour lesquelles l'utilisateur actuel n'est pas autorisé à effectuer.
