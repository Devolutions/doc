---
eleventyComputed:
  title: Configurer un tunnel SSH
---
Le tunneling SSH est utilisé pour créer une connexion chiffrée sur un réseau non fiable. Il consiste en un tunnel chiffré créé via le protocole SSH, fournissant des connexions sécurisées pour le transfert de données. Le tunnel SSH peut être utilisé pour établir une sorte de réseau privé virtuel (VPN) pour accéder à des services à travers des pare-feux.

Voici la procédure pour établir un tunnel SSH de base pour atteindre une machine distante.
![!!KB4520](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4520.png)

## Créer un tunnel SSH
Pour créer un tunnel SSH, les connexions locales via un port spécifié doivent être redirigées vers un serveur SSH.

Pour créer un tunnel SSH, un port donné d'une machine doit être redirigé vers un port sur l'autre machine qui sera l'autre extrémité du tunnel. Une fois le tunnel SSH établi, l'utilisateur peut se connecter au port précédemment spécifié sur la première machine pour accéder au service réseau.
* Créer une entrée ***Tunnel SSH***.
![!!KB4521](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4521.png)
Configurer les propriétés comme suit :

### Paramètres du serveur SSH
| Option         | Description                                                                                     |
|----------------|-------------------------------------------------------------------------------------------------|
| Hôte           | Définir l'adresse IP du serveur SSH. (se référer à **1** dans le schéma du tunnel)              |
| Port           | Définir le port du serveur SSH. Le port par défaut est 22. (se référer à dans le schéma du tunnel) |
| Définir clé publique | Configurer la clé publique                                                                      |
| Nom d'utilisateur       | Entrer le nom d'utilisateur pour se connecter au serveur SSH.                                   |
| Mot de passe       | Entrer le mot de passe pour se connecter au serveur SSH.                                        |

### Paramètres du tunnel sortant
| Option        | Description                                                                                             |
|---------------|---------------------------------------------------------------------------------------------------------|
| Mode          | Sélectionner entre : Local, Distant ou Dynamique                                                       |
| Adresse locale | L'adresse locale doit être laissée à 127.0.0.1. (se référer à 1 dans le schéma du tunnel)               |
| Port local    | Dans la plupart des cas, laisser le port local à sa valeur par défaut 3390. (se référer à ‚ dans le schéma du tunnel) |
| Hôte distant   | Entrer l'hôte ou l'adresse IP de votre client distant. (se référer à … dans le schéma du tunnel)        |
| Port distant   | Définir le port final que vous devez atteindre, dans la plupart des cas le laisser à sa valeur par défaut 3389. (se référer à † dans le schéma du tunnel) |

À ce moment, vous pouvez lancer votre entrée pour voir si le tunnel a été ouvert avec succès. Fermer la session.

## Créer votre session distante
Créer une session RDP.
![!!KB4522](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4522.png)

| Option   | Description                                                                            |
|----------|----------------------------------------------------------------------------------------|
| Hôte     | Entrer votre adresse locale qui est 127.0.0.1. (se référer à 1 dans le schéma du tunnel) |
| Port     | Entrer votre port local qui est 3390. (se référer à ‚ dans le schéma du tunnel)         |
| Type RDP | Laisser le type RDP à Normal.                                                          |
| Nom d'utilisateur | Entrer le nom d'utilisateur de votre hôte distant.                                      |
| Domaine   | Entrer le domaine de votre hôte distant.                                               |
| Mot de passe | Entrer le mot de passe de votre hôte distant.                                          |

Dans le menu latéral ***VPN/SSH/Gateway*** de votre session RDP, sélectionner ***Toujours connecter*** dans le champ ***Ouvrir*** et ***Session*** dans le champ ***Type***.
![!!KB4523](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4523.png)
Dans l'onglet Paramètres VPN, cliquer sur la liste déroulante à côté de ***Session*** et sélectionner votre entrée ***Tunnel SSH*** précédemment créée.
![!!KB4524](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4524.png)
Vous avez maintenant configuré votre session avec la règle suivante : pour chaque connexion qui arrive sur l'interface 127.0.0.1 et le port 3390, rediriger cette connexion vers le serveur SSH et demander au serveur de rediriger cette connexion vers votre hôte distant.

Vous pouvez maintenant lancer votre session RDP, votre tunnel SSH s'ouvrira, établira la connexion puis lancera et ouvrira votre session RDP.
![!!KB4525](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4525.png)
