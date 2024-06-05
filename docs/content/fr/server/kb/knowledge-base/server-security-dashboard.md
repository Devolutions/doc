---
eleventyComputed:
  title: "{{ fr.DVLS }} tableau de bord de sécurité"
  description: Le tableau de bord de sécurité est un outil offrant des conseils pour améliorer la sécurité de la plateforme {{ fr.DVLS }} ainsi que des astuces pour réduire la charge de travail des administrateurs.
---
Le ***tableau de bord de sécurité*** est un outil offrant des conseils pour améliorer la sécurité de la plateforme {{ fr.DVLS }} ainsi que des astuces pour réduire la charge de travail des administrateurs. Certains conseils sont des meilleures pratiques communes en sécurité de l'information, d'autres sont un consensus entre nos propres équipes.

Les scores sont certes sujets à débat et nous ne prétendons pas que chaque sujet a la même valeur relative pour tous les membres de notre communauté. Atteindre 100 % n'est sûrement pas un objectif en soi, nous visons simplement à sensibiliser et à fournir des idées pour votre propre renforcement de la sécurité.
![!!KB4707](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4707.png)

## Éléments d'action pour l'amélioration

### Le répertoire actif devrait être configuré pour utiliser un canal de communication sécurisé

|             |     |
| ----------- | --- |
| Description | Le protocole LDAPS devrait être utilisé pour fournir confidentialité et intégrité de la communication sur le réseau. Sinon, des actions telles que les réinitialisations de mot de passe pourraient envoyer le mot de passe en clair sur le réseau. |
| Atténuation  | Dans l'interface web ***Administration – Paramètres du serveur – Authentification – Domaine***, cocher ***Activer LDAPS***. |

### Les sauvegardes devraient être activées et configurées

|             |     |
| ----------- | --- |
| Description | Les sauvegardes devraient être configurées vers un support externe ou un stockage cloud pour éviter la perte permanente de données. |

### Les comptes de base de données devraient être différents pour l'application web, le planificateur et les outils de gestion

|             |     |
| ----------- | --- |
| Description | Les privilèges minimaux devraient être accordés et appliqués pour les comptes de service et de base de données. Les comptes de service et de base de données partagés et excessivement privilégiés peuvent induire une exposition inutile à des risques de sécurité. |

### Les notifications par courriel devraient être configurées

|             |     |
| ----------- | --- |
| Description | Une configuration de serveur de courriel est requise pour transmettre des messages d'application importants tels que les événements de sécurité ou les erreurs. |
| Atténuation  | Les paramètres du serveur de courriel se trouvent dans l'interface web ***Administration – Paramètres du serveur – Courriel***.                           |

### Une destination de journalisation externe devrait être configurée

|             |     |
| ----------- | --- |
| Description | Envoyer les journaux vers un système externe est recommandé pour maintenir l'intégrité et la disponibilité des informations d'événement. |
| Atténuation  | La journalisation est configurée dans l'interface web ***Administration – Paramètres du serveur – Journalisation***.                    |

### Les communications https sécurisées devraient être activées

|             |     |
| ----------- | --- |
| Description | Les communications sécurisées garantissent l'intégrité et la confidentialité des données transmises entre le client et le serveur. |

### Les sessions devraient être revalidées dans les 24 heures

|             |     |
| ----------- | --- |
| Description | Une durée de session excessive peut permettre une exposition au-delà du nécessaire à des utilisateurs non autorisés. La durée de vie du jeton de rafraîchissement devrait donc être configurée dans les 24 heures (1440 min). |

### Le nombre d'administrateurs ne devrait pas dépasser 5

|             |     |
| ----------- | --- |
| Description | Limiter le nombre d'administrateurs actifs au sein de la plateforme réduira la surface d'attaque d'un attaquant aux seuls comptes configurés. Avoir plus de 5 administrateurs peut également être le signe d'une mauvaise séparation des tâches au sein de l'unité commerciale ou de l'organisation. |

### Le compte de base de données mssql par défaut “sa” devrait être évité

|             |     |
| ----------- | --- |
| Description | Le compte administratif par défaut de MSSQL est un compte à haut privilège qui devrait uniquement être utilisé pour gérer l'instance de base de données. Un utilisateur ou un compte de service moins privilégié est préférable pour réduire l'impact d'un compromis. |

### Le fichier de configuration du serveur devrait être chiffré

|             |     |
| ----------- | --- |
| Description | Des informations sensibles sont stockées dans le fichier de configuration **web.config**. Il est recommandé d'activer le chiffrement pour prévenir toute altération et garantir la confidentialité. |

### Le niveau de sécurité de {{ fr.VLT_MAJ }} devrait être réglé sur élevé

|             |     |
| ----------- | --- |
| Description | Le niveau de sécurité de {{ fr.VLT_MAJ }} devrait être réglé sur élevé dans les ***paramètres de {{ fr.VLT }}***. Un {{ fr.VLT }} de sécurité élevée n'a pas accès au mode hors ligne. |
| Atténuation  | Les ***paramètres de {{ fr.VLT_MAJ }}*** se trouvent dans l'interface web de {{ fr.DVLS }} sous ***Administration – Gestion des utilisateurs et de la sécurité – {{ fr.VLT_MAJ }}s***. Modifier un {{ fr.VLT }} pour ouvrir la ***fenêtre de modification des paramètres de {{ fr.VLT }}*** et sélectionner ***Élevé*** dans le menu déroulant sous ***Général – Niveau de sécurité***. |
