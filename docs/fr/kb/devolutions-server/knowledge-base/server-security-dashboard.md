---
eleventyComputed:
  title: Tableau de bord de sécurité {{ fr.DVLS }}
---
Le ***Tableau de bord de sécurité*** est un outil qui offre des conseils sur la manière d'améliorer la sécurité de la plateforme {{ fr.DVLS }} ainsi que des astuces pour réduire la charge de travail des administrateurs. Certains conseils sont des bonnes pratiques communes en matière d'infosécurité, d'autres sont le fruit d'un consensus entre nos équipes propriétaires.  

Les scores sont évidemment sujets à caution et nous ne prétendons pas que chaque sujet a la même valeur relative pour tous les membres de notre communauté. Atteindre 100% n'est sûrement pas un objectif en soi, nous cherchons simplement à sensibiliser et à fournir des idées pour votre propre renforcement de la sécurité.  
![!!KB4064.png](https://webdevolutions.azureedge.net/docs/fr/kb/KB4064.png)

## Amélioration des Éléments d'Action 

### Active directory devrait être configuré pour utiliser un canal de communication sécurisé

|             |     |
| ----------- | --- |
| Description | Le protocole LDAPS devrait toujours être utilisé pour assurer la confidentialité et l'intégrité des communications sur le réseau. Autrement, des actions, comme des réinitialisations de mots de passe, pourraient envoyer le mot de passe en texte clair sur le réseau. | Mesures d'atténuation | Dans l'interface Web ***Administration - Paramètres Serveur - Authentification - Domaines***, cochez la case ***Activer LDAPS***. |

### La destination de journalisation externe devrait être configurée

|             |     |
| ----------- | --- |
| Description | L'envoi des journaux à un système externe est préconisé pour préserver l'intégrité et la disponibilité des informations sur les événements. | Mesures d'atténuation | La journalisation est configurée dans l'interface Web ***Administration - Paramètres Serveur - Journalisation***. |

### Le compte de base de données mssql « sa » par défaut devrait être évité

|             |     |
| ----------- | --- |
| Description | Le compte d'administration MSSQL par défaut est un compte à privilèges élevés qui ne devrait servir qu'à gérer l'instance de la base de données. Un compte d'utilisateur ou de service à moindre privilège est recommandé pour réduire les répercussions d'une compromission. |

### Le fichier de configuration du serveur devrait être crypté

|             |     |
| ----------- | --- |
| Description | Les informations sensibles sont stockées dans le fichier de configuration **web.config**. Il est recommandé d'activer le chiffrement pour empêcher toute altération et garantir la confidentialité. |

### Le nombre d'administrateurs ne devrait pas dépasser 5

|             |     |
| ----------- | --- |
| Description | La limitation du nombre d'administrateurs actifs au sein de la plateforme réduira la surface d'attaque d'un attaquant aux seuls comptes configurés. Le fait d'avoir plus de 5 administrateurs peut également être un signe de mauvaise séparation des tâches dans l'unité commerciale ou l'organisation. |

### Les communications sécurisées https devraient être activées

|             |     |
| ----------- | --- |
| Description | La sécurisation des communications assure l'intégrité et la confidentialité des données transmises entre le client et le serveur. |

### Les comptes de la base de données devraient être différents pour l'application Web, le planificateur et les outils de gestion

|             |     |
| ----------- | --- |
| Description | Des privilèges minimums devraient être attribués et appliqués pour que les comptes de service et de base de données puissent fonctionner. Les comptes de service et de base de données partagés et bénéficiant de privilèges excessifs sont susceptibles de provoquer une exposition inutile aux risques de sécurité. |

### Les notifications par courriel devraient être configurées

|             |     |
| ----------- | --- |
| Description | Une configuration de serveur de messagerie est nécessaire pour transmettre les messages importants de l'application, tels que les événements ou les erreurs de sécurité. | Mesures d'atténuation | Les paramètres du serveur de courrier électronique se trouvent dans l'interface Web ***Administration - Paramètres Serveur - Courriel***. |

### Les sauvegardes devraient être activées et configurées

|             |     |
| ----------- | --- |
| Description | Les sauvegardes devraient être configurées sur un support externe ou un nuage informatique pour éviter la perte permanente de données. |

### Les sessions devraient être revalidées dans les 24 heures

|             |     |
| ----------- | --- |
| Description | Une durée de session exagérée peut permettre une exposition au-delà du nécessaire à un utilisateur non autorisé. La durée de vie du jeton de rafraîchissement devrait donc être configurée dans les 24 heures (1440 min). |
