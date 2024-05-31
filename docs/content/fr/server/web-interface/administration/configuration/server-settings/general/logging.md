---
eleventyComputed:
  title: Journalisation
  description: La section Journalisation permet à l'administrateur de configurer les fonctionnalités de journalisation.
  keywords:
  - journalisation
---
La section ***Journalisation*** permet à l'administrateur de configurer les fonctionnalités de journalisation.
![Administration – Paramètres du serveur – Journalisation](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8040.png)

## Paramètres

### Général
| Option                | Description                                                                                                         |
|-----------------------|---------------------------------------------------------------------------------------------------------------------|
| Journaliser les informations de débogage | Activer les journaux de l'instance {{ fr.DVLS }}. Lorsqu'activé, cela augmentera le niveau de débogage et fournira plus d'entrées de journal. |
| Langue              | Choisir la langue des journaux.                                                                                    |
| Chemin du journal du planificateur    | Définir le chemin de destination du fichier journal. Nous recommandons de définir ce chemin en dehors du dossier de l'application web {{ fr.DVLS }}. |

### Serveur Syslog
| Option               | Description                                                                    |
|----------------------|--------------------------------------------------------------------------------|
| Journaliser vers le serveur Syslog | Envoyer les journaux à un serveur Syslog.                                              |
| Hôte                 | Entrer votre hôte de serveur Syslog pour se connecter.                                      |
| Port                 | Entrer votre port de serveur Syslog pour se connecter.                                      |
| Protocole             | Sélectionner votre mode de protocole préféré entre : <ul><li>TCP</li><li>UDP</li></ul> |


### Journal des événements Windows
| Option    | Description                         |
|-----------|-------------------------------------|
| Journal des événements | Envoyer les journaux au journal des événements Windows. |

### Intégration Slack
| Option                      | Description                                              |
|-----------------------------|----------------------------------------------------------|
| Poster les journaux d'activité sur Slack | Poster les journaux dans un canal Slack.                        |
| Jeton d'accès OAuth du bot      | Jeton d'accès pour l'authentification Slack.                       |
| Nom du canal Slack          | Nom du canal Slack où les journaux seront postés. |
