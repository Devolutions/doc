---
eleventyComputed:
  title: Paramètres avancés
  description: Les paramètres avancés contiennent des paramètres avancés qui sont utilisés pour la chaîne de connexion de la base de données SQL.
---
Les ***Paramètres avancés*** contiennent des paramètres avancés qui sont utilisés pour la chaîne de connexion de la base de données SQL.

![Dialogue des Paramètres Avancés](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8003.png)

## Paramètres

| Option                              | Description                                                                                                                               |
|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| Utiliser une connexion chiffrée SQL Server | Utiliser SSL pour chiffrer la communication avec la base de données.                                                                      |
| Faire confiance au certificat serveur            | Toujours faire confiance au certificat serveur.                                                                                           |
| Partenaire de basculement                    | Le nom du serveur partenaire de basculement si le miroir de base de données est configuré. Ceci est utilisé uniquement pour la connexion initiale car le serveur principal retournera un nom qui remplacera la valeur configurée lorsqu'elle est différente.                                                                                                 |
| Taille minimale du pool de connexions        | Le nombre minimum de connexions autorisées dans le pool.                                                                                  |
| Taille maximale du pool de connexions        | Le nombre maximum de connexions autorisées dans le pool.                                                                                  |
| Nombre de tentatives de reconnexion              | Contrôle le nombre de tentatives de reconnexion après que le client identifie un échec de connexion inactif. Les valeurs valides vont de 0 à 255. La valeur par défaut est 1 et 0 signifie ne pas tenter de se reconnecter.                                                                                                                             |
| Intervalle de tentative de reconnexion           | Spécifie le temps entre chaque tentative de reconnexion (ConnectRetryCount). Les valeurs valides sont de 1 à 60 secondes (la valeur par défaut est 10), appliquées après la première tentative de reconnexion. Lorsqu'une connexion interrompue est détectée, le client tente immédiatement de se reconnecter ; c'est la première tentative de reconnexion et ne se produit que si ConnectRetryCount est supérieur à 0. Si la première tentative de reconnexion échoue et ConnectRetryCount est supérieur à 1, le client attend ConnectRetryInterval pour essayer la deuxième et les tentatives de reconnexion suivantes.                                                                                                                                      |
| Délai d'attente de connexion                  | La durée (en secondes) d'attente pour une connexion au serveur avant de terminer la tentative et de générer une erreur.                                                                                                                                                                            |

## Plus de paramètres

Le bouton ***Plus de paramètres***, dans la section ***Paramètres avancés***, contient des paramètres avancés supplémentaires qui peuvent être modifiés pour remplacer un paramètre manquant. Double-cliquez sur un ***Nom de paramètre*** pour entrer en mode édition.

![Plus de paramètres](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp4089.png)
