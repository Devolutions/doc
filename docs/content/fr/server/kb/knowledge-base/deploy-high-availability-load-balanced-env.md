---
eleventyComputed:
  title: Déployer dans un environnement à haute disponibilité ou d'équilibrage de charge
  description: En adhérant à ces directives, vous pouvez assurer un déploiement robuste et sécurisé à haute disponibilité ou d'équilibrage de charge.
---
En adhérant à ces directives, vous pouvez assurer un déploiement robuste et sécurisé à haute disponibilité ou d'équilibrage de charge.

![Déployer dans un environnement à haute disponibilité ou d'équilibrage de charge](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4773.png)

## Considérations critiques
* **Découverte de l'infrastructure** : Les instances {{ fr.DVLS }} ne peuvent pas détecter automatiquement l'identifiant public de l'ensemble de l'infrastructure. Il doit être spécifié manuellement en utilisant quelques stratégies définies.
* **Affinité de serveur** : Pour assurer que les données soient actuelles et améliorer l'expérience utilisateur, une stratégie d'affinité de serveur est critique en raison de la dépendance au cache du serveur pour le stockage des jetons et la gestion des données d'appartenance des utilisateurs (telles que UserGroups/Roles). Bien que toute méthode d'allocation de serveur (telle que round-robin ou aléatoire) puisse être utilisée initialement, maintenir l'affinité de serveur est impératif par la suite.
* **Mesures de sécurité** : Notre système empêche la réutilisation des jetons en validant l'adresse IP du client, assurant que les informations du client original sont précisément relayées à l'instance {{ fr.DVLS }}.
* **Liste blanche et liste noire d'IP** : Ces fonctionnalités nécessitent également la validation de l'adresse IP du client pour assurer la sécurité et la conformité.

## Instructions de configuration
* **Configuration de l'URI d'accès** : Assurer que le paramètre [URI d'accès](/server/kb/knowledge-base/access-uri/) est aligné avec les paramètres DNS pour l'équilibreur de charge.
* **Exigences de l'équilibreur de charge** : Utiliser toute technologie d'équilibrage de charge qui peut ajouter l'en-tête [X-Forwarded-For](/server/kb/knowledge-base/use-x-forwarded-for/) via des proxies ou des dispositifs intermédiaires. Cet en-tête devrait être supprimé s'il est reçu d'un client, et uniquement défini par votre équipement réseau.
* **Exigences de journalisation** : Inclure l'en-tête X-Forwarded-For dans les journaux IIS pour assurer un suivi précis des adresses IP des clients. Voir les instructions pour [ajouter X-Forwarded-For](/server/kb/knowledge-base/add-x-forwarded-for-column-iis/).
* **En-têtes de réponse HTTP** : Chaque nœud serveur devrait ajouter un identifiant unique et non descriptif aux en-têtes des réponses HTTP. Cet identifiant, qui pourrait être aussi générique que "node1" ou "node2", sert à suivre le chemin des requêtes à travers différents serveurs sans divulguer de détails sensibles sur le serveur comme le nom de domaine complet (FQDN). Cette pratique est cruciale non seulement pour cartographier le parcours de la requête, mais aussi pour maintenir la sécurité opérationnelle, car elle limite l'exposition des détails de l'infrastructure qui pourraient être exploités. Les organisations axées sur une sécurité renforcée devraient envisager des précautions supplémentaires telles que l'utilisation de valeurs aléatoires ou hachées comme identifiants pour obscurcir davantage les identités des serveurs. Veuillez suivre [Identifier le serveur répondant sur une topologie à haute disponibilité](/server/kb/knowledge-base/identify-server-answering/) et ajouter une chaîne unique pour chaque nœud serveur.
* **Persistance de session** : Votre équilibreur de charge devrait prendre en charge la persistance de session pour maintenir efficacement les sessions utilisateur (certaines technologies peuvent utiliser une terminologie différente).

## Processus de vérification
* **Validation de courriel** : Vérifier que tout courriel généré par le système contient l'URI public correct, plutôt que le nom du serveur. Cela peut être vérifié en utilisant la fonctionnalité de messagerie {{ fr.DVLS }}.
![Messages](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2377.png)
* **Historique et tentatives de connexion** : La table ***LoginHistory*** contient l'adresse IP pour le client, et non pour les serveurs intermédiaires. La table ***LoginAttempts*** liste également l'adresse IP, mais il y a plus de scénarios :
    * Échecs de connexion (par exemple, mauvaises informations d'identification)
    * IPs sur liste noire
    * IPs identifiées comme un nœud de sortie TOR
