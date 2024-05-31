---
eleventyComputed:
  title: Passer sans mot de passe avec {{ fr.RDM }} et CyberArk
  description: Passer sans mot de passe avec {{ fr.RDM }} et CyberArk
---
Au cours des derniers mois, vous avez peut-être remarqué un niveau de collaboration accru entre Devolutions et CyberArk. En effet, deux de nos trois types d'entrées ont été rafraîchis dans la version 2020.2 pour mieux utiliser leurs API améliorées. Notre troisième type est déjà disponible dans {{ fr.RDM }} 2020.3 beta, ce qui complète le cycle actuel d'améliorations et permet essentiellement aux organisations de se passer de mots de passe pour leurs flux de travail quotidiens.

La seule exigence est que vous exploitiez le ***Application Access Manager*** (AAM) de CyberArk dans le cadre du déploiement de CyberArk de votre organisation. Ce module permet l'authentification par ***Clé Privée*** (PK), ce qui signifie que toute la phase d'Identification/Authentification est gérée par votre département informatique, rendant les mots de passe complètement inutiles.

De plus, commençons par une mise en garde : la partie sans mot de passe concerne CyberArk, vous devez toujours vous authentifier sur {{ fr.RDM }}, quelle que soit la source de données que vous utilisez.
### Vue d'ensemble
Un diagramme est nécessaire pour illustrer correctement la solution.
![!!KB4661](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4661.png)
1. L'utilisateur est authentifié sur {{ fr.RDM }} avec un ***Compte à Privilèges Minimaux***, cela leur donne une vue sur le contenu de {{ fr.RDM }} selon les permissions définies dans notre Contrôle d'Accès Basé sur les Groupes d'Utilisateurs.
1. Lorsque leur ***Compte Privilégié*** est requis pour lancer une technologie prise en charge, {{ fr.RDM }} obtiendra la Clé Privée appropriée depuis le poste de travail, elle doit être conservée dans le magasin de certificats pour l'utilisateur.
1. La PK est utilisée pour s'authentifier contre le {{ fr.VLT }} de CyberArk. Il est configuré comme un objet ***Application*** qui est essentiellement un ***proxy utilisateur*** utilisé pour interroger le {{ fr.VLT }}.
1. {{ fr.RDM }} obtient les détails d'un ***Compte Privilégié***, ce qui est clé est que l'utilisateur ne connaît pas le mot de passe de son propre compte privilégié.
1. {{ fr.RDM }} utilise le ***Compte Privilégié*** et lance soit : une connexion PSM ; se connecte au PVWA ; ou même lance une session prise en charge par {{ fr.RDM }}, tout en cachant toujours le mot de passe à l'utilisateur.
### Configuration de CyberArk Application Access Manager (AAM)
Tout d'abord, vous devez émettre des PK pour chacun de vos utilisateurs et les déployer sur leurs postes de travail. La source de vérité pour ces questions est sûrement la documentation de CyberArk, mais nous avons inclus des instructions de base dans notre guide d'intégration. Quant au côté {{ fr.RDM }}, nous soutenons à nouveau différentes méthodes de gestion de la PK :

1. Informations PK stockées dans une entrée qui existe dans le {{ fr.UVLT }}. C'est sûrement le plus simple car vous avez une relation un à un entre utilisateurs/clés/comptes, mais cela doit être fait par les utilisateurs eux-mêmes.
1. Informations PK stockées dans ***Mes paramètres de compte*** : Cette méthode permet aux administrateurs de créer les entrées AAM dans {{ fr.RDM }}, tandis que chaque utilisateur définit ses propres détails PK dans ses paramètres personnels. Puisque la recherche de compte utilise des mots-clés spécifiés dans l'entrée AAM, cela signifie que vous avez encore quelques options :
    1. Géré dans CyberArk : pour chaque utilisateur, il doit exister un seul Compte Privilégié, accessible à partir des mêmes mots-clés. La charge incombe à l'administrateur d'isoler ceux-ci dans divers coffres-forts et de s'assurer que le compte de chacun a les mêmes mots-clés.
{type="a"}
    1. Géré dans {{ fr.RDM }} : les administrateurs doivent créer une entrée AAM unique par utilisateur avec les mots-clés pour trouver leur Compte Privilégié. Notre Contrôle d'Accès Basé sur les Groupes d'Utilisateurs doit être utilisé pour s'assurer que les utilisateurs peuvent voir et utiliser uniquement les entrées appropriées.

Comme toujours avec {{ fr.RDM }}, vous pouvez mélanger et assortir les approches en fonction de vos propres exigences.

{% snippet, "badgeInfo" %}
Un nom d'application autre que ***AIMWebService*** doit être spécifié dans le champ ***nom de l'application***.
{% endsnippet %}

![Champ du nom de l'application](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6118.png)

### Configuration de CyberArk Privilege Session Manager (PSM)
Une discussion sur le PSM est sûrement trop large pour tenir dans ce sujet, donc je vais à nouveau me référer à la documentation de CyberArk. Quant à {{ fr.RDM }}, dans votre entrée PSM-Server, utilisez l'un de nos mécanismes pour que la connexion utilise l'entrée AAM configurée à l'étape précédente.

Si vous avez choisi l'option AAM 1 ci-dessus, vous devez utiliser les Paramètres Spécifiques à l'Utilisateur dans {{ fr.RDM }} pour créer le lien entre l'entrée PSM-Server et l'entrée AAM qui est stockée dans le {{ fr.UVLT }}.

Si vous avez plutôt sélectionné les options 2a ou 2b, je crois que la meilleure option est de configurer l'entrée PSM-Server pour utiliser ***Dépôt d'Identifiants***, associé à ***demande à la connexion***. Cela rend l'expérience meilleure pour les nouveaux utilisateurs, et les utilisateurs expérimentés sauront comment passer aux Paramètres Spécifiques à l'Utilisateur pour rendre leur choix plus permanent.

### Configuration du SDK des services Web de CyberArk
Lorsque vous restez dans les limites de votre écosystème CyberArk, vous n'avez généralement pas besoin d'utiliser ce type, mais il a été décidé de vous offrir quand même la capacité. Cela vient juste d'être modifié et donc n'est disponible que dans la version 2020.3, qui est en cycle bêta à ce moment.

Cela dit, cela permet à votre organisation de donner accès pour récupérer certains mots de passe, chaque fois que le PSM ou l'utilisation de l'injection des identifiants de {{ fr.RDM }} n'est pas une option, tout en permettant toujours uniquement l'accès depuis un Compte Privilégié que l'utilisateur ne contrôle pas.
### Conclusion
Pour tous les détails, voici la documentation officielle pour chacune de nos intégrations, ainsi que quelques liens vers notre propre documentation sur les fonctionnalités mentionnées dans ce post.

* Guides d'intégration (lien de téléchargement depuis notre CDN)
    * [Guide d'intégration AAM](https://cdn.devolutions.net/documents/cyberark/Devolutions%20Remote%20Desktop%20Manager%20-%20CyberArk%20AAM%20integration%20guide.pdf)
    * [Guide d'intégration PSM](https://cdn.devolutions.net/documents/cyberark/Devolutions%20Remote%20Desktop%20Manager%20-%20CyberArk%20PSM%20integration%20guide.pdf)
    * [Guide d'intégration SDK des services Web](https://cdn.devolutions.net/documents/cyberark/Devolutions%20Remote%20Desktop%20Manager%20-%20CyberArk%20Webservices%20SDK%20integration%20guide.pdf)

* Aide de {{ fr.RDM }}
    * [Paramètres de Mon Compte](https://api.devolutions.net/redirection/e218081a-798e-4b5e-ae59-bee22c4ad31a)
    * [Paramètres Spécifiques à l'Utilisateur](https://api.devolutions.net/redirection/bf0b5e7d-fb57-4b02-9edd-ce9865bd024a)

Comme toujours, veuillez contacter notre équipe de support à [service@devolutions.net](mailto:service@devolutions.net) si vous souhaitez une démonstration ou si vous avez besoin de clarifications sur certains aspects.
