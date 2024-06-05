---
eleventyComputed:
  title: IIS
  order: 30
---
Les paramètres ***IIS*** font partie des prérequis au niveau de l'installation. La plupart des éléments trouvés dans cet onglet sont automatiquement remplis par les informations données lors de la configuration de votre {{ fr.DVLS }}, la section des paramètres IIS est utilisée davantage comme source d'information plutôt que de configuration.

![Paramètres du serveur - IIS](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8010.png)

## Paramètres

### Général

| Option               | Description                                                            |
|----------------------|------------------------------------------------------------------------|
| Site Web             | Nom du site web IIS.                                                   |
| Diagnostic IIS       | Ouvre le dialogue de diagnostic IIS qui liste les prérequis {{ fr.DVLS }}. |
| Nom de l'application Web | Nom du pool d'applications IIS.                                      |
| URI d'accès          | URI Web utilisé pour atteindre la page web {{ fr.DVLS }}.              |

### Destination d'installation

| Option              | Description                                                       |
|---------------------|-------------------------------------------------------------------|
| Dossier d'installation | Dossier où les fichiers de l'application web {{ fr.DVLS }} sont situés. |

### Sécurité

| Option                               | Description                                                                                                       |
|--------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| Désactiver HTTPS                     | Désactiver l'utilisation du HTTPS pour HTTP.                                                                      |
| Désactiver le chiffrement de la chaîne de connexion | Activer cette option si vous souhaitez ajouter une couche supplémentaire de sécurité à votre configuration en chiffrant votre fichier. |
