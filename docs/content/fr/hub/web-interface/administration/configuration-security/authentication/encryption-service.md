---
eleventyComputed:
  title: Service de chiffrement
  description: Le service de chiffrement de {{ fr.DHUB }} simplifie l'accès à votre Hub en éliminant la nécessité d'inviter individuellement chaque utilisateur à partir de votre fournisseur SSO.
---
Le service de chiffrement de {{ fr.DHUB }} simplifie l'accès à votre Hub en éliminant la nécessité d'inviter individuellement chaque utilisateur à partir de votre fournisseur d'authentification unique (SSO). Cette fonctionnalité peut être activée dans votre Hub sous ***Administration – Authentification – Service de chiffrement***.

## Configuration requise
Pour activer et configurer votre service de chiffrement, les conditions préalables suivantes sont nécessaires :
* Une [configuration SSO](/fr/hub/getting-started/get-started-sso-hub-business/) active.
* Une [identité de l'application](#permissions-de-lidentite-de-lapplication) dans votre Hub.
* Un serveur auto-hébergé pour [{{ fr.DHUBS }}](#configuration-de-linstallation-de-devolutions-hub-services).
* Un certificat SSL fiable.
* Un port réseau accessible au sein du réseau local et, le cas échéant, depuis l'internet.

### Permissions de l'identité de l'application
[Créez une identité de l'application](/fr/hub/web-interface/administration/management/application-users/) et attribuez-lui les [permissions du système](/fr/hub/web-interface/administration/configuration-security/system-permissions/) suivantes :
* ***Gérer les utilisateurs et les groupes d’utilisateurs***
* ***Gérer les configuration du système*** (Cela comprend les permissions du système, les paramètres du système et la liste des autorisations IP.)

### Configuration de l'installation de {{ fr.DHUBS }}
{{ fr.DHUBS }} est nécessaire pour établir la communication entre votre serveur auto-hébergé et votre {{ fr.DHUBB }}.
1. [Télécharger {{ fr.DHUBS }}](https://devolutions.net/fr/password-hub/home/download/) et lancer le programme d'installation.
1. Cliquer sur ***Next*** pour continuer après la page de bienvenue.
![{{ en.DHUBS }} Page de bienvenue de l'assistant d'installation de {{ fr.DHUBS }}](https://cdnweb.devolutions.net/docs/docs_en_hub_HUBB2360_2024_1.png)
1. Lire et accepter les termes du ***License Agreement***, puis cliquer sur ***Next***.
![Lire et accepter les termes du License Agreement](https://cdnweb.devolutions.net/docs/docs_en_hub_HUBB2361_2024_1.png)
1. Sous ***Custom Setup***, sélectionner ***Encryption***, puis cliquer sur ***Next***.
![Installation de la fonctionnalité d'encryption](https://cdnweb.devolutions.net/docs/docs_en_hub_HUBB2362_2024_1.png)
1. Saisir les informations suivantes dans les champs correspondants :
    * Le ***Host***, qui est l'URL de votre {{ fr.DHUB }}.
    * Les ***Application secret*** et ***Application key***, fournis lors de la création initiale de l'identité de l'application.
1. Cliquer sur ***Test Connection***. Un message indiquant que la connexion est réussie devrait apparaître. Si ce n'est pas le cas, vérifier la validité des informations saisies puis réessayer. Si cela ne fonctionne toujours pas, contacter nos techniciens du soutien technique au [service@devolutions.net](mailto:service@devolutions.net).
![Test Connection](https://cdnweb.devolutions.net/docs/docs_en_hub_HUBB2363_2024_1.png)
1. Cliquer sur ***Next***.
1. Saisir l'***URL*** (HTTPS est obligatoire) et le numéro de ***Port*** où le service de chiffrement écoutera les demandes entrantes. S'assurer que le port soit configuré pour être accessible.
1. Rechercher et sélectionner le certificat. Si le certificat est protégé par un mot de passe, le saisir dans le champ ***Certificate Password***.
![URL, port et certificat](https://cdnweb.devolutions.net/docs/docs_en_hub_HUBB2365_2024_1.png)
1. Cliquer sur ***Next***. 

Le processus d'installation devrait maintenant débuter.

### Paramètres d'authentification
1. Dans {{ fr.DHUBB }}, naviguer vers ***Administration – Authentification – Service de chiffrement***.
1. Activer le service de chiffrement.
1. Saisir l'***URL du service de chiffrement*** où le service de chiffrement écoutera les demandes entrantes. Cette URL ou adresse IP ne doit être accessible qu'aux clients qui se connectent à l'aide du service de chiffrement.
![Activer le service de chiffrement et saisir l'URL](https://cdnweb.devolutions.net/docs/docs_en_hub_HUBB2366_2024_1.png)
1. Tester la connexion. Si la connexion échoue, vérifier la validité des informations saisies puis réessayer. Si cela ne fonctionne toujours pas, contacter nos techniciens du soutien technique au [service@devolutions.net](mailto:service@devolutions.net).

Tous les utilisateurs de votre fournisseur SSO peuvent désormais se connecter et accéder à votre {{ fr.DHUB }} automatiquement, sans avoir besoin d'invitations. Il n'est pas non plus nécessaire que les utilisateurs disposent d'une clé privée pour utiliser le Hub. Le serveur fonctionne sur une base auto-hébergée ; il joue donc un rôle essentiel dans l'infrastructure. En cas d'arrêt ou de défaillance du serveur, les utilisateurs qui n'ont pas de clé privée auront des difficultés à se connecter au Hub.