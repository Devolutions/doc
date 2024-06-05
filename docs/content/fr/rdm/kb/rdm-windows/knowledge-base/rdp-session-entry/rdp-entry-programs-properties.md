---
eleventyComputed:
  title: Propriétés des programmes d'entrée RDP
  description: Les propriétés des programmes d'entrée RDP peuvent être configurées lors de la création ou de l'édition de l'entrée RDP.
---
{% snippet, "badgeInfo" %}
Les propriétés suivantes peuvent être configurées lors de la création ou de l'édition de l'entrée RDP. La plupart des propriétés générales nécessitent de fermer complètement l'entrée RDP, puis de la rouvrir pour qu'elles prennent effet.
{% endsnippet %}  

![Propriétés des programmes d'entrée RDP](https://webdevolutions.azureedge.net/docs/RDMW6006.png)

| PARAMÈTRES                                | DESCRIPTION                                                    |
|-----------------------------------------|-----------------------------------------------------------------|
| ***Démarrer ce programme à la connexion (shell alternatif)*** | Lancer automatiquement un programme spécifié au lieu de l'environnement de bureau complet lors de l'initiation des sessions RDP.                                 |
| ***Chemin et nom de fichier du programme***             | Spécifier le chemin complet et le nom de fichier du programme qui devrait être démarré automatiquement à la connexion.                                                            |
| ***Démarrer dans le dossier suivant***         | Définir le répertoire de démarrage par défaut pour le programme. Ce chemin est utilisé lorsque le programme est lancé.                                                                  |
| ***Utiliser RemoteApp (mode transparent)***         | Activer RemoteApp pour fournir une intégration transparente de l'application distante avec le bureau local, faisant apparaître le programme distant comme s'il était exécuté localement.     |
| ***Programme***                               | Spécifier le programme à utiliser avec RemoteApp pour une expérience d'application transparente, nécessitant le chemin et le nom de fichier.                                     |
| ***Paramètres***                            | Permettre la spécification d'arguments de ligne de commande ou de paramètres qui devraient être passés au programme au démarrage.                                      |
| ***Exécuter le programme suivant après la connexion*** | Définir un programme supplémentaire à exécuter après que le processus de connexion initial soit terminé, offrant une personnalisation supplémentaire du processus de démarrage.                       |
| ***Délai après la connexion***                     | Spécifier un délai (en secondes) avant d'exécuter le programme défini pour s'exécuter après la connexion, permettant au système ou aux programmes initiaux le temps de s'initialiser.                  |
