---
eleventyComputed:
  title: Enquête sur les comptes avant déploiement
  description: Avant le déploiement d'une instance {{ fr.DVLS }}, certains comptes sont nécessaires pour opérer les différents services impliqués dans un déploiement sécurisé de {{ fr.DVLS }}.
  status: Sujet disponible en langue allemande
---
Avant le déploiement d'une instance {{ fr.DVLS }}, certains comptes sont nécessaires pour opérer les différents services impliqués dans un déploiement sécurisé de {{ fr.DVLS }}. La première décision est d'utiliser soit des comptes de domaine pour opérer la plateforme, soit d'utiliser des comptes SQL locaux associés à des comptes de service locaux. Puisque cette décision est une question de préférence personnelle, nous soutenons les deux modèles.

{% snippet, "badgeInfo" %}
Avant de procéder, veuillez prendre en compte les éléments suivants :
* Les noms utilisés dans ce guide sont pour faciliter la compréhension du rôle rempli par le compte. Notre documentation utilise également ces noms, mais il n'est pas obligatoire de les utiliser.
* Les comptes suivants interagissant avec la base de données SQL se verront accorder les permissions de moindre privilège à partir de scripts qui seront exécutés lors de la création et de la mise à niveau de l'instance {{ fr.DVLS }}.
{% endsnippet %}

## Opération basée sur le domaine (option de sécurité intégrée)

Les ***informations d'identification d'administration*** ont besoin de permissions de lecture complètes sur la structure AD, mais NE réalisent AUCUN changement dans votre annuaire. Malheureusement, à cause d'un effet secondaire de la manière dont les Services d'annuaire net sont construits, il y a un problème lorsque ce compte essaie de lire les propriétés des groupes AD qui peuvent résider dans une zone protégée de votre annuaire. La solution la plus simple était d'accorder des permissions d'administrateur complet, mais nous cherchons à mettre en œuvre une meilleure stratégie de repli pour gérer le cas où l'accès est refusé. Cela peut nécessiter des privilèges plus élevés que de faire partie du groupe intégré Utilisateurs du domaine Active Directory. Dans la plupart des cas, cela devrait suffire.

| # | Nom                      | Origine | Description                                                                                                                  | Défini dans...                                                        |
| - | ----------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 1 | VaultDBOwner            | AD      | Compte avec tous les privilèges sur la DB.                                                                                   | Session Windows interactive utilisée pour exécuter l'installation/la mise à niveau d'une instance {{ fr.DVLS }}. Ce compte doit être un administrateur local de la machine hôte {{ fr.DVLS }}. |
| 2 | VaultDBRunner           | AD      | Compte avec le moins de privilèges pour exécuter l'application web. Utilisé pour se connecter à la base de données et pour lire depuis le système de fichiers. | Pools d'applications IIS qui exécutent une instance {{ fr.DVLS }}. |
| 3 | VaultADReader           | AD      | Compte avec le moins de privilèges pour interroger l'AD.                                                                     | Paramètres de l'instance {{ fr.DVLS }} - Informations d'identification d'administration.    |
| 4 | VaultDBSchedulerService | AD      | Compte avec le moins de privilèges pour opérer le service planificateur. Utilisé pour se connecter à la DB et pour lire/écrire depuis le système de fichiers. | Gestionnaire de contrôle des services Windows.                                 |

## Opération non basée sur le domaine ou environnement Azure SQL

Dans un déploiement non basé sur le domaine, une seule chaîne de connexion est utilisée pour trois aspects différents du système. Cela sera amélioré dans une future version pour respecter le principe du moindre privilège.

Pour une base de données hébergée Azure SQL, l'opération basée sur le domaine (option de sécurité intégrée) n'est pas prise en charge.

| # | Nom                      | Origine | Description                                                                                         | Défini dans...                                                                                                                                                           |
| - | ----------------------- | ------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1 | VaultDBOwner            | SQL     | Compte avec tous les privilèges sur la DB.                                                          | La {{ fr.DVLSCONSOLE }} uniquement pour les sessions d'installation/mise à niveau.                                                                                      |
| 2 | VaultDBRunner           | SQL     | Compte avec le moins de privilèges pour exécuter l'application web.                                 | La {{ fr.DVLSCONSOLE }} pour les opérations de l'instance.                                                                                                              |
| 3 | VaultADReader           | AD      | Compte avec le moins de privilèges pour interroger l'AD via LDAP.                                    | Paramètres de l'instance {{ fr.DVLS }} - Informations d'identification d'administration.                                                                                |
| 4 | VaultDBSchedulerService | SQL     | Compte avec le moins de privilèges pour opérer le service planificateur. Utilisé pour lire/écrire depuis le système de fichiers. | {{ fr.DVLSCONSOLE }} – Service planificateur. L'accès à la base de données sera effectué par la seule chaîne de connexion qui fait l'objet de la note informative ci-dessus. |