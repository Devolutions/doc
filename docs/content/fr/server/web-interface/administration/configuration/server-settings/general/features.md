---
eleventyComputed:
  title: Fonctionnalités
  description: La section Fonctionnalités permet aux administrateurs de configurer les fonctionnalités de l'interface web.
---
La section ***Fonctionnalités*** permet aux administrateurs de configurer les fonctionnalités de l'interface web. Activer ou désactiver ces fonctionnalités autorise ou refuse l'accès aux [points d'accès distants](/server/kb/knowledge-base/internet-endpoints-server/). Lorsqu'activé, {{ fr.DVLS }} alertera la partie externe pour le service en question.
![Administration – Paramètres du serveur – Fonctionnalités](https://cdnweb.devolutions.net/docs/DVLS2019_2024_1.png)

## Paramètres
| Option                                           | Description                                                                                                          |
|--------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| Autoriser les extensions de navigateur ({{ fr.WBEX }})         | Permet aux utilisateurs d'enregistrer des identifiants dans l'instance {{ fr.DVLS }} avec le {{ fr.WBEX }}.                                |
| Activer l'accès Internet                           | Permet à {{ fr.DVLS }} de communiquer avec des entités externes pour les options ci-dessous.                                    |
| Activer Gravatar                                  | Récupère l'icône Gravatar de l'utilisateur.                                                                                    |
| Activer la vérification des mots de passe compromis                 | Recherche dans une base de données externe les mots de passe compromis.                                                             |
| Bloquer les clients Tor                                | Empêche les utilisateurs utilisant Tor, un réseau d'anonymat, d'accéder à {{ fr.DVLS }}. Cela peut renforcer la sécurité en bloquant l'accès des utilisateurs qui pourraient essayer de cacher leur identité. |
| Partager des données d'utilisation anonymes avec Devolutions      | Permet à {{ fr.DVLS }} d'envoyer des données de télémétrie. Aucune donnée sensible et/ou personnelle n'est envoyée ; ce qui est collecté est des informations telles que la version utilisée, les modes d'authentification utilisés, et le nombre de {{ fr.VLT }}s. |
| Activer la notification Push {{ fr.WAPPS }}          | Permet à {{ fr.DVLS }} d'envoyer des notifications push pour notifier de diverses situations telles que de nouveaux messages sécurisés, des demandes d'approbation pour un accès temporaire, et des demandes d'approbation pour PAM. |
| Permettre aux utilisateurs d'envoyer des mots de passe avec {{ fr.DSEND }} | Permet aux utilisateurs d'envoyer des mots de passe via {{ fr.DSEND }} (ils ont également besoin de la permission ***Voir le mot de passe***). |
| Activer la vérification automatique des mises à jour de service           | Permet à {{ fr.DVLS }} de voir les dernières versions de nos services pour indiquer s'ils sont à jour sur le ***Tableau de bord système***. |
