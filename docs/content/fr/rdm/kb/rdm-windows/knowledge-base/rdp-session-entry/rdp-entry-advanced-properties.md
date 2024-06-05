---
eleventyComputed:
  title: Propriétés avancées d'une entrée RDP
  description: Les propriétés avancées d'une entrée RDP peuvent être configurées lors de la création ou de l'édition de l'entrée RDP.
---
{% snippet, "badgeInfo" %}
Les propriétés suivantes peuvent être configurées lors de la création ou de l'édition de l'entrée RDP. La plupart des propriétés générales nécessitent de fermer complètement l'entrée RDP, puis de la rouvrir pour qu'elles prennent effet.
{% endsnippet %}  

![Propriétés avancées d'une entrée RDP](https://webdevolutions.azureedge.net/docs/RDMW6000.png)

### Mode de déconnexion 

| PARAMÈTRES                       | DESCRIPTION |
|--------------------------------|-------------|
| ***Par défaut***                      | Utiliser la source d'identifiants définie par défaut dans les paramètres de {{ fr.RDM }}, héritant généralement du dossier parent ou des défauts de session. |
| ***Automatique***                     | {{ fr.RDM }} détermine automatiquement les identifiants les plus appropriés à utiliser en fonction de la configuration.  |
| ***Agent RDM***                     | Utiliser les identifiants gérés et fournis par [{{ fr.RDM }} Agent](/rdm/overview/the-devolutions-platform/rdm-agent/). |
| ***API des Services Bureau à distance***   | Utiliser les identifiants gérés par l'API des Services Bureau à distance.  |
| ***Macro***                        | Utiliser une macro prédéfinie pour fournir les identifiants. |


### Déconnexion automatique lors de la déconnexion

| PARAMÈTRES  | DESCRIPTION |
|---------|-------------|
| ***Par défaut*** | Paramètres par défaut configurés globalement dans Remote Desktop Manager.  |
| ***Oui***     | Déconnecte automatiquement l'utilisateur lors de la déconnexion. |
| ***Non***      | Garde la session active même après la déconnexion de l'utilisateur. |


### Mode de reconnexion 

| PARAMÈTRES         | DESCRIPTION |
|----------------|-------------|
| ***Standard***       | Utiliser le mode de reconnexion standard. |
| ***Complet***           | Initier une séquence de reconnexion complète. |
| ***Reconnexion intelligente***| Optimiser les temps de reconnexion. |
| ***Ancien***         | Utiliser pour la compatibilité avec les anciennes versions. |

### Version RDP

| PARAMÈTRES                | DESCRIPTION |
|-----------------------|-------------|
| ***RDP (6.1)***             | Compatible avec les fonctionnalités et systèmes jusqu'à Windows Vista et Windows Server 2008. |
| ***RDP (7.0)***             | Prend en charge les fonctionnalités jusqu'à Windows 7 et Windows Server 2008 R2. |
| ***RDP (8.1)***             | Applicable à Windows 8.1 et Windows Server 2012 R2. |
| ***Dernière***                | Configurer la session pour utiliser la version la plus avancée de RDP disponible |
| ***RDP (FreeRDP Dernière)***  | Exploiter les dernières capacités de FreeRDP, un client RDP libre et open-source. |
| ***RDP (FreeRDP 7.0)***     | Utiliser l'implémentation FreeRDP compatible avec les fonctionnalités RDP 7.0. |
| ***MSRDC***                 | Utiliser le client Bureau à distance Microsoft (MSRDC). |
| ***RDP (10.10)***           | Spécifier l'utilisation des fonctionnalités disponibles dans Windows 10 version 10.10. |
| ***RDP (10.11)***           | Utiliser les fonctionnalités disponibles dans Windows 10 version 10.11. |


### Intervalle d'envoi d'entrée Minimap

| PARAMÈTRES                        | DESCRIPTION |
|-------------------------------|-------------|
| ***Intervalle d'envoi d'entrée Minimap***   | L'intervalle (en millisecondes) auquel la fonctionnalité minimap envoie des données d'entrée à l'application ou au serveur. |

### Version maximale de TLS

| PARAMÈTRES               | DESCRIPTION |
|----------------------|-------------|
| ***Version maximale de TLS***  | Définit la version la plus élevée du protocole TLS qui peut être utilisée pour sécuriser les connexions. Ce paramètre garantit la compatibilité avec les dernières normes de sécurité tout en permettant la compatibilité ascendante avec les versions antérieures jusqu'à la version maximale spécifiée. |

### Mode public

| PARAMÈTRES     | DESCRIPTION |
|------------|-------------|
| ***Mode public***| Appliquer une série de mesures de sécurité conçues pour protéger les données sensibles pendant une session de bureau à distance depuis un ordinateur public ou partagé. |


### Demander les identifiants sur le client

| PARAMÈTRES                          | DESCRIPTION |
|---------------------------------|-------------|
| ***Demander les identifiants sur le client***| Exige la saisie des identifiants côté client avant d'établir une connexion à distance, renforçant les protocoles de sécurité en vérifiant l'authentification tôt dans le processus de connexion. |

### Mode admin restreint

| PARAMÈTRES                          | DESCRIPTION |
|-----------------------------------|-------------|
| ***Mode admin restreint***           | Une configuration de sécurité qui permet des connexions administratives à un système distant sans transmettre les véritables identifiants au système distant, réduisant le risque de vol d'identifiants. |

### Garde des identifiants à distance

| PARAMÈTRES                          | DESCRIPTION |
|-----------------------------------|-------------|
| ***Garde des identifiants à distance***         | Une fonctionnalité de sécurité qui protège les identifiants lors d'une connexion Bureau à distance en redirigeant les demandes Kerberos vers le client d'origine, empêchant les identifiants d'être exposés à l'hôte distant. |

### Entrée en arrière-plan
| PARAMÈTRES                          | DESCRIPTION |
|-----------------------------------|-------------|
| ***Entrée en arrière-plan***                | Permet la transmission de commandes d'entrée à des applications fonctionnant en arrière-plan, assurant une interaction continue même lorsque l'application n'est pas la fenêtre active.  |

### Activer le super déplacement

| PARAMÈTRES                          | DESCRIPTION |
|-----------------------------------|-------------|
| ***Activer le super déplacement***                | Active une fonctionnalité qui facilite la navigation dans un environnement de bureau à distance étendu en permettant le déplacement sur la zone d'affichage, améliorant l'interface utilisateur sur les appareils à taille d'écran limitée. |

### Courtier de connexion - Haute disponibilité 

| PARAMÈTRES                          | DESCRIPTION |
|-----------------------------------|-------------|
| ***ID de l'espace de travail***                      | Sert d'identifiant unique pour l'espace de travail, utilisé dans les environnements qui emploient le Courtier de connexion Bureau à distance pour atteindre une haute disponibilité et un équilibrage de charge. |
| ***Utiliser le serveur de redirection***            | Détermine l'utilisation d'un serveur de redirection pour répartir uniformément les charges de session entre les serveurs ou pour fournir des capacités de basculement. |
| ***Adresse complète alternative***            | Offre une adresse alternative pour établir une connexion à une session à distance, utilisée dans les cas où le point de connexion principal n'est pas accessible. |
| ***Informations sur l'équilibrage de charge***                 | Fournit des détails utilisés par le courtier de connexion pour allouer la session au serveur le plus approprié, en fonction des stratégies d'équilibrage de charge actuelles. |
