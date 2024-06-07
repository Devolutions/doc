---
eleventyComputed:
  title: Service de chiffrement
  description: Le service de chiffrement simplifie l'accès à votre Hub en éliminant la nécessité d'inviter individuellement chaque utilisateur de votre fournisseur SSO.
---
{{ fr.DHUB }}'s service de chiffrement simplifie l'accès à votre Hub en éliminant la nécessité d'inviter individuellement chaque utilisateur de votre fournisseur SSO. Cette fonctionnalité peut être activée dans votre Hub sous ***Administration – Authentification – Service de chiffrement***.

## Exigences
Pour activer et configurer votre service de chiffrement, les prérequis suivants sont nécessaires :
* Avoir configuré et activé une [configuration Single Sign-On (SSO)](/hub/getting-started/get-started-sso-hub-business/).
* Disposer d'une [identité d'application](#permissions-didentité-dapplication) dans votre Hub.
* Posséder un certificat SSL de confiance.
* Avoir un port réseau accessible au sein du réseau local et, le cas échéant, depuis internet.
* Avoir un abonnement actif aux [services Azure](#abonnement-aux-services-azure) (si vous configurez votre service de chiffrement en utilisant la méthode recommandée du [modèle Azure](#configuration-du-service-de-chiffrement-à-l'aide-d'un-modèle-azure-recommandé)).
* Disposer d'un serveur auto-hébergé pour installer le {{ fr.DHUBS }} (si vous configurez votre service de chiffrement en utilisant la méthode du [{{ fr.DHUBS }}](#configuration-du-service-de-chiffrement-avec-les-services-devolutions-hub)).

### Permissions d'identité d'application
[Créer une identité d'application](/hub/web-interface/administration/management/application-users/manage-application-users/#create-an-application-identity) et lui attribuer les [permissions système](/hub/web-interface/administration/configuration-security/system-permissions/) suivantes :
* ***Gérer les utilisateurs et les groupes d'utilisateurs***
* ***Gérer la configuration système*** (inclut les permissions système, les paramètres système et les listes blanches IP)

{% snippet, "badgeCaution" %}
Si vous utilisez une liste blanche IP, l'IP du service de chiffrement doit être ajoutée comme IP autorisée. Ne pas le faire empêchera le service de communiquer avec le Hub, le rendant non fonctionnel.
{% endsnippet %}

### Abonnement aux services Azure
Si vous configurez votre service de chiffrement en utilisant un modèle Azure, qui est la méthode recommandée (voir les [instructions ci-dessous](#configuration-du-service-de-chiffrement-à-l'aide-d'un-modèle-azure-recommandé)), vous devez avoir un abonnement aux services Azure. Si vous n'en avez pas, suivez d'abord ces instructions :
1. Se connecter à votre compte [Portail Microsoft Azure](https://azure.microsoft.com).
1. Sélectionner ***Abonnements*** dans les ***services Azure***. Si vous ne le voyez pas, cherchez-le dans la barre de recherche en haut de la page ou cliquez sur ***Plus de services*** pour afficher d'autres services. Ce service peut être trouvé sous la catégorie de services ***Gestion et gouvernance***.
![Abonnements](https://cdnweb.devolutions.net/docs/INTERFACE2000.png)
1. Cliquer sur ***Ajouter*** puis sélectionner l'offre d'abonnement ***Pay-As-You-Go***.
![Offre Pay-As-You-Go](https://cdnweb.devolutions.net/docs/INTERFACE2001.png)
1. Entrer les informations requises et s'inscrire au service.

## Configuration du service de chiffrement

### Configuration du service de chiffrement à l'aide d'un modèle Azure (recommandé)
Utiliser un modèle Azure pour configurer le service de chiffrement est la méthode recommandée car elle est plus simple et plus directe et aide à prévenir les complications inutiles. Vérifier que toutes les [exigences](#exigences) sont remplies avant de continuer.

1. Dans {{ fr.DHUBB }}, aller à ***Administration – Authentification – Service de chiffrement*** et cliquer sur ***Générer un modèle Azure***.
![Administration – Authentification – Service de chiffrement – Générer un modèle Azure](https://cdnweb.devolutions.net/docs/HUBB2036_2024_1.png)
1. Copier le modèle généré.
![Copier le modèle](https://cdnweb.devolutions.net/docs/HUBB2037_2024_1.png)
1. Sur la page d'accueil du [Portail Microsoft Azure](https://azure.microsoft.com), sélectionner ***Déployer un modèle personnalisé*** dans les ***services Azure***. Si vous ne le voyez pas, cherchez-le dans la barre de recherche en haut de la page ou cliquez sur ***Plus de services*** pour afficher d'autres services. Ce service peut être trouvé sous la catégorie de services ***Général***.
![Déployer un modèle personnalisé](https://cdnweb.devolutions.net/docs/INTERFACE2002.png)
1. Cliquer sur ***Construire votre propre modèle dans l'éditeur***.
![Construire votre propre modèle dans l'éditeur](https://cdnweb.devolutions.net/docs/INTERFACE2003.png)
1. Coller le modèle Azure généré que vous avez obtenu de {{ fr.DHUB }} dans l'éditeur de modèle Azure, en remplaçant tout contenu préexistant dans l'éditeur.
![Coller le modèle Azure](https://cdnweb.devolutions.net/docs/INTERFACE2004.png)
1. Cliquer sur ***Enregistrer***.
1. Sur la page ***Déploiement personnalisé***, configurer vos informations comme décrit ci-dessous :
    * ***Abonnement*** : Sélectionner un abonnement si aucun n'est sélectionné.
    * ***Groupe de ressources*** : Sélectionner ou créer un groupe de ressources si aucun n'est sélectionné.
    * ***Nom de l'application*** et ***Nom du plan de service d'application*** : Laisser les noms par défaut ou les changer selon vos préférences.
    * ***URL du Hub*** : S'assurer qu'elle est définie sur l'URL de votre {{ fr.DHUBB }}.
    * ***Clé d'identité d'application*** et ***Secret d'identité d'application*** : Entrer votre clé d'identité d'application et le secret dans les champs correspondants. Votre identité d'application devrait avoir les permissions ***Gérer la configuration système*** et ***Gérer les utilisateurs et les groupes d'utilisateurs***, comme indiqué dans [Permissions d'identité d'application](#permissions-didentité-dapplication).
![Configuration du déploiement personnalisé](https://cdnweb.devolutions.net/docs/INTERFACE2005.png)
1. Cliquer sur ***Revoir + créer***.
1. Cliquer sur ***Créer***.
![Créer le déploiement personnalisé](https://cdnweb.devolutions.net/docs/INTERFACE2006.png)
1. À la fin du déploiement, qui peut prendre quelques secondes, cliquer sur ***Aller au groupe de ressources***.
![Aller au groupe de ressources](https://cdnweb.devolutions.net/docs/INTERFACE2007.png)
1. Sélectionner votre nouveau ***Service d'application*** dans la liste.
![Service d'application](https://cdnweb.devolutions.net/docs/INTERFACE2008.png)
1. Copier le ***Domaine par défaut*** donné (*https://your-app-name.azurewebsites.net*) ou le ***Domaine personnalisé*** (*https://yourdomain.com*) si vous avez décidé d'en créer un.
![Copier le domaine par défaut ou personnalisé](https://cdnweb.devolutions.net/docs/INTERFACE2009.png)
1. Ajouter ce domaine à la liste des URI de redirection dans votre application d'entreprise. Suivre les instructions ci-dessous pour vous guider dans ce processus :
    1. Revenir à la page d'accueil du [Portail Microsoft Azure](https://azure.microsoft.com) et sélectionner ***Applications d'entreprise*** dans les ***services Azure***. Si vous ne le voyez pas, cliquer sur ***Plus de services*** pour afficher d'autres services.
    ![Applications d'entreprise](https://cdnweb.devolutions.net/docs/INTERFACE2010.png) {type="a"}
    1. Sélectionner votre application dans la liste. {type="a"}
    1. Dans le menu de gauche, cliquer sur ***Propriétés***.
    ![Propriétés de l'application](https://cdnweb.devolutions.net/docs/INTERFACE2011.png) {type="a"}
    1. Dans le texte en haut de la page, cliquer sur ***enregistrement d'application***.
    ![Enregistrement d'application](https://cdnweb.devolutions.net/docs/INTERFACE2012.png) {type="a"}
    1. Dans le menu de gauche, cliquer sur ***Authentification***. {type="a"}
    1. Cliquer sur ***Ajouter URI*** et coller le domaine dans le champ URI de redirection.
    ![Ajouter URI](https://cdnweb.devolutions.net/docs/INTERFACE2013.png) {type="a"}
    1. Cliquer sur ***Enregistrer***. {type="a"}
1. Dans {{ fr.DHUB }}, revenir à ***Administration – Authentification – Service de chiffrement*** et activer le service de chiffrement si ce n'est pas déjà fait.
1. Coller votre domaine par défaut ou personnalisé dans le champ ***URL du service de chiffrement***. C'est là que le service de chiffrement écoutera les demandes entrantes. Cette URL ou adresse IP doit uniquement être accessible par les clients se connectant en utilisant le service de chiffrement.
![Coller le domaine](https://cdnweb.devolutions.net/docs/HUBB2038_2024_1.png)
1. Tester la connexion. Si la connexion échoue, vérifier la validité des informations que vous avez saisies et réessayer. Si vous rencontrez toujours des problèmes de connexion, veuillez contacter nos techniciens du service d'assistance à [service@devolutions.net](mailto:service@devolutions.net).

Tous les utilisateurs de votre fournisseur SSO peuvent désormais se connecter et accéder automatiquement à votre {{ fr.DHUB }}, évitant ainsi la nécessité d'invitations. Il n'est également pas nécessaire pour les utilisateurs de disposer d'une clé privée pour utiliser le Hub. Le serveur fonctionne sur une base auto-hébergée ; il joue donc un rôle vital dans l'infrastructure. Si le serveur subit une panne ou ne fonctionne pas, les utilisateurs sans clés privées rencontreront des problèmes de connexion au Hub.

### Configuration du service de chiffrement avec les {{ fr.DHUBS }}
Utiliser un [modèle Azure](#configuration-du-service-de-chiffrement-à-l'aide-d'un-modèle-azure-recommandé) pour configurer le service de chiffrement est la méthode recommandée car elle est plus simple et plus directe et aide à prévenir les complications inutiles. Néanmoins, si vous souhaitez utiliser la méthode suivante des {{ fr.DHUBS }}, vérifier que toutes les [exigences](#exigences) sont remplies avant de continuer.  
1. [Télécharger les {{ fr.DHUBS }}](https://devolutions.net/password-hub/home/download/) et lancer l'installateur.
1. Cliquer sur ***Suivant*** pour continuer après la page de bienvenue.
![Page de bienvenue de l'assistant d'installation des {{ fr.DHUBS }}](https://cdnweb.devolutions.net/docs/HUBB2360_2024_1.png)
1. Lire et accepter les termes du contrat de licence, puis cliquer sur ***Suivant***.
![Accepter les termes du contrat de licence](https://cdnweb.devolutions.net/docs/HUBB2361_2024_1.png)
1. Sous ***Installation personnalisée***, sélectionner ***Chiffrement***, puis cliquer sur ***Suivant***.
![Installer la fonctionnalité de chiffrement](https://cdnweb.devolutions.net/docs/HUBB2362_2024_1.png)
1. Entrer les informations suivantes dans les champs correspondants :
    * l'***Hôte***, qui est l'URL de votre {{ fr.DHUB }}.
    * le ***Secret d'application*** et la ***Clé d'application***, qui vous ont été fournis lors de la création initiale de l'identité d'application.
1. Cliquer sur ***Tester la connexion***. Vous devriez recevoir un message indiquant que la connexion a réussi. Si ce n'est pas le cas, vérifier la validité des informations que vous avez saisies et réessayer. Si vous rencontrez toujours des problèmes de connexion, veuillez contacter nos techniciens du service d'assistance à [service@devolutions.net](mailto:service@devolutions.net).
![Tester la connexion](https://cdnweb.devolutions.net/docs/HUBB2363_2024_1.png)
1. Cliquer sur ***Suivant***.
1. Entrer l'***URL*** (HTTPS est obligatoire) et le numéro de ***Port*** où le service de chiffrement écoutera les demandes entrantes. S'assurer que le port est configuré pour être accessible.
1. Rechercher votre ***Certificat*** et le sélectionner. Si votre certificat est protégé par un mot de passe, l'entrer dans ***Mot de passe du certificat***.
![URL, port et certificat](https://cdnweb.devolutions.net/docs/HUBB2365_2024_1.png)
1. Cliquer sur ***Suivant***.

Le processus d'installation devrait maintenant commencer.