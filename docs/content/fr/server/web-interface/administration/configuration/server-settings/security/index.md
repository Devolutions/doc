---
eleventyComputed:
  title: Sécurité
  description: La section Sécurité permet à l'administrateur de configurer les paramètres d'IP et de verrouillage automatique.
  order: 20
---
La section Sécurité permet à l'administrateur de configurer les paramètres d'IP et de verrouillage automatique.
![Administration – Paramètres du serveur – Sécurité](https://cdnweb.devolutions.net/docs/DVLS6037_2024_1.png)

## Paramètres

### IP

| OPTION              | DESCRIPTION                                                                                       |
|---------------------|---------------------------------------------------------------------------------------------------|
| Forcer la validation de l'IP publique du jeton.  | Forcer la validation du jeton.                           |
| Utiliser X-Forwarded-For | Activer l'utilisation de l'en-tête X-Forwarded-For pour le déploiement dans un environnement à haute disponibilité ou équilibré en charge. |

### Verrouillage Automatique

| OPTION          | DESCRIPTION                                                                                     |
|-----------------|-------------------------------------------------------------------------------------------------|
| Activer le verrouillage automatique du compte | Verrouille automatiquement l'accès au serveur après un nombre prédéterminé de tentatives échouées. |
| Nombre de tentatives    | Entrer le nombre de tentatives échouées avant de verrouiller le serveur.                            |
