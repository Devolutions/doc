---
eleventyComputed:
  title: Gestionnaire de sauvegarde
  description: La section Gestionnaire de sauvegarde permet aux administrateurs de configurer les paramètres pour sauvegarder la base de données et le dossier de l'application web.
---
La section ***Gestionnaire de sauvegarde*** permet aux administrateurs de configurer les paramètres pour sauvegarder la base de données et le dossier de l'application web. Cliquer sur le bouton ***Sauvegarder maintenant*** en haut pour créer immédiatement une sauvegarde de la base de données SQL et/ou du dossier de l'application web.

{% snippet, "badgeInfo" %}
* Les sauvegardes planifiées sont effectuées par le compte de service du planificateur.
* Les sauvegardes initiées manuellement sont exécutées par l'identité du pool d'applications.
* Les sauvegardes de base de données sont toujours gérées par le compte de service SQL. Initialement, un fichier **.bak** est créé, qui est ensuite supprimé par le compte qui a initié la sauvegarde (soit l'identité du pool d'applications, soit le compte de service du planificateur), ne laissant que le fichier **.zip**.
{% endsnippet %}

![Administration – Gestionnaire de sauvegarde](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2084.png)

## Paramètres

### Configuration de la base de données
| Option                    | Description                                                                                          |
|---------------------------|------------------------------------------------------------------------------------------------------|
| Activer la sauvegarde de la base de données    | Active la sauvegarde de la base de données SQL.                                                            |
| Chemin du fichier de sauvegarde de la base de données | Il s'agit du chemin vers le dossier où la sauvegarde de la base de données SQL sera enregistrée. Nous recommandons l'utilisation d'un dossier réseau partagé (chemin UNC) avec les permissions appropriées définies dessus pour pouvoir enregistrer le fichier de sauvegarde.<br>Note : Puisque la commande de sauvegarde s'exécute sur le serveur SQL et sur la machine où {{ fr.DVLS }} est hébergé, ce chemin doit être accessible des deux.<br> Le compte de service défini sur le ***Service Planificateur*** nécessite la permission "d'écriture" sur le dossier de destination pour supprimer les fichiers de sauvegarde excédentaires définis dans ***Garder nombre de sauvegardes***. Le processus de sauvegarde est appelé depuis {{ fr.DVLS }}(***Service Planificateur*** ou ***Identité du Pool d'Applications IIS***), mais c'est le serveur SQL qui dépose réellement le fichier ; donc le chemin UNC devrait également permettre au compte de service du serveur SQL les permissions d'écriture. |
| Mot de passe de sauvegarde de la base de données  | Le mot de passe protège le fichier ZIP compressé de sauvegarde. Vous devez le fournir pour décompresser le fichier. |

### Configuration web
| Option                   | Description                                                                                          |
|--------------------------|------------------------------------------------------------------------------------------------------|
| Activer la sauvegarde web        | Active la sauvegarde de l'application web.                                                         |
| Chemin du fichier de sauvegarde web     | Le chemin vers le dossier où la sauvegarde de l'application web sera enregistrée. Nous recommandons l'utilisation d'un dossier réseau partagé avec les permissions appropriées définies dessus pour pouvoir enregistrer le fichier de sauvegarde.<br>Note : Si des comptes de service sont définis sur le ***Service Planificateur*** et sur l'***Identité du Pool d'Applications IIS***, les deux comptes ont besoin de la permission "d'écriture" sur le dossier de destination.   |
| Mot de passe du fichier de sauvegarde web | Le mot de passe protège le fichier ZIP compressé de sauvegarde. Vous devez le fournir pour décompresser le fichier. |

### Algorithme de chiffrement de sauvegarde
| Option               | Description                                                                                      |
|----------------------|--------------------------------------------------------------------------------------------------|
| Algorithme de chiffrement | Il s'agit de l'algorithme de chiffrement AES-256 utilisé pour chiffrer la sauvegarde si un mot de passe de sauvegarde est défini. |

### Notification
| Option                                   | Description                                                          |
|------------------------------------------|----------------------------------------------------------------------|
| Notifier l'administrateur en cas d'échec de sauvegarde    | Envoie un courriel aux administrateurs lorsqu'un processus de sauvegarde échoue.    |
| Notifier l'administrateur en cas de succès de sauvegarde   | Envoie un courriel aux administrateurs lorsqu'un processus de sauvegarde réussit. |

### Planification
| Option            | Description                                                   |
|-------------------|---------------------------------------------------------------|
| Heure de début de sauvegarde | Date et heure auxquelles la sauvegarde sera automatiquement lancée. |
| Répéter tous les      | L'intervalle de temps entre les exécutions de sauvegarde.                        |

### Avancé
| Option                                | Description                                                                                   |
|---------------------------------------|-----------------------------------------------------------------------------------------------|
| Délai d'expiration SQL de sauvegarde de base de données (Minutes) | Nombre de minutes avant un délai d'expiration dans l'instance SQL.                                       |
| Garder nombre de sauvegardes                | Nombre maximum de sauvegardes qui seront conservées dans le dossier de sauvegarde.                             |
| Copier uniquement la sauvegarde de base de données             | Une sauvegarde SQL Server indépendante de la séquence de sauvegardes SQL Server conventionnelles. Pour plus d'informations, veuillez consulter la page d'aide Microsoft sur les [Sauvegardes Uniquement](https://learn.microsoft.com/fr-fr/sql/relational-databases/backup-restore/copy-only-backups-sql-server?view=sql-server-ver16). |
